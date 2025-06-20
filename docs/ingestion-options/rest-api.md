---
sidebar_position: 5
---

# REST API

> Cloud-native DICOM upload via presigned S3 URLs for secure, firewall-friendly ingestion.

---

## Executive Summary

- **Flexible Upload:** Upload individual DICOM files or entire study directories via a simple CLI script or your own implementation.
- **Firewall-Friendly:** Uses HTTPS and presigned S3 URLs—no special ports or VPN required.
- **Scalable & Reliable:** Leverages S3’s durability and DICOMweb standards for robust ingestion at any scale.
- **Rapid Integration:** Sample Python script provided, with clear endpoints and examples.

---

## Technical Overview

| Component                   | Detail                                                        |
| --------------------------- | ------------------------------------------------------------- |
| **Protocol**                | HTTPS Presigned URLs                                          |
| **Authentication**          | OAuth2 Bearer token                                           |
| **Presigned S3 Upload URL** | GET `/upload/` → `{ url, key }`                               |
| **Upload Method**           | HTTP PUT to presigned URL (`Content-Type: application/dicom`) |
| **API Base URL**            | `https://api.example.com` (configurable)                      |

---

## Architecture Diagram

```text
┌──────────────┐   HTTPS   ┌──────────────┐   PUT    ┌────────┐
│ Your Script  │ ─────────▶│ API Gateway   │ ───────▶│ S3     │
│                 │           │ (STOW-RS +    │         │ Bucket │
│ or SDK App   │           │  presign)     │         └────────┘
└──────────────┘           └──────────────┘   STORED  │
                                                      ▼
                                                  ┌────────┐
                                                  │Ingest  │
                                                  │Pipeline│
                                                  └────────┘
```

---

## Prerequisites

### API Access

- Valid OAuth2 credentials
- Base URL of ingestion API (e.g. `https://api.example.com`)

### Local Environment

- Python 3.8+ and `requests` library
- Network access to S3 (HTTPS outbound)

### Onboarding Details (from our team)

- API endpoint URL
- Authentication method and credentials
- S3 bucket naming conventions and permissions

---

## Step-by-Step Configuration

### 1. Install Dependencies

```bash
pip install requests
chmod +x upload_dicom.py
```

### 2. Configure Script

Save the following as `upload_dicom.py` in your working directory:

```python
#!/usr/bin/env python3
#!/usr/bin/env python3
import argparse
import os
import sys
import requests

def get_presigned_upload(api_base_url: str):
    """
    Call GET /upload to retrieve { url, key } for an S3 PUT.
    """
    resp = requests.get(f"{api_base_url.rstrip('/')}/upload/")
    resp.raise_for_status()
    data = resp.json()
    return data['url'], data['key']

def upload_file_to_s3(presigned_url: str, file_path: str):
    """
    Perform the HTTP PUT to S3 using the presigned URL.
    """
    with open(file_path, 'rb') as f:
        body = f.read()

    resp = requests.put(url=presigned_url, data=body,
                        headers={'Content-Type': 'application/dicom'})
    resp.raise_for_status()
    return resp

def gather_files(path: str):
    """
    If path is a file, return [path];
    if it's a directory, walk it and return every file under it.
    """
    if os.path.isfile(path):
        return [path]

    if os.path.isdir(path):
        all_files = []
        for root, _, files in os.walk(path):
            for name in files:
                all_files.append(os.path.join(root, name))
        return sorted(all_files)

    print(f"Error: '{path}' is not a file or directory", file=sys.stderr)
    sys.exit(1)

def main():
    parser = argparse.ArgumentParser(
        description="Upload a DICOM file or entire folder of DICOMs via your S3-backed API"
    )
    parser.add_argument(
        '--api-endpoint', '-u',
        required=True,
        help="Base URL of your API (e.g. https://api.example.com)"
    )
    parser.add_argument(
        '--path', '-p',
        required=True,
        help="Path to a DICOM file or a directory containing DICOM files"
    )
    args = parser.parse_args()

    # Collect one or many files
    file_paths = gather_files(args.path)
    if not file_paths:
        print(f"No files found under {args.path}", file=sys.stderr)
        sys.exit(1)

    print(f"Found {len(file_paths)} file(s) to upload.")

    for idx, file_path in enumerate(file_paths, start=1):
        print(f"\n[{idx}/{len(file_paths)}] Uploading {file_path!r}...")
        try:
            presigned_url, key = get_presigned_upload(args.api_endpoint)
            print(f" → Presigned URL acquired; S3 key will be: {key}")

            upload_file_to_s3(presigned_url, file_path)
            print(f" ✔ Success: {file_path!r} → s3://<bucket>/{key}")

        except requests.HTTPError as he:
            print(f"HTTP error for {file_path!r}: "
                  f"{he.response.status_code} – {he.response.text}",
                  file=sys.stderr)
            sys.exit(1)
        except Exception as ex:
            print(f"Error uploading {file_path!r}: {ex}", file=sys.stderr)
            sys.exit(1)

    print("\nAll done!")

if __name__ == '__main__':
    main()
```

> **Tip:** Adjust shebang and executable permissions for your OS.

### 3. Run the Upload

```bash
./upload_dicom.py \
  --api-endpoint https://api.example.com \
  --path /path/to/dicom-or-folder
```

- **Output:** Lists each file, the presigned URL key, and success confirmation.
- **Error Handling:** HTTP 4xx/5xx responses or connectivity issues will abort with an error message.

---

## Ingestion Workflow Example

1. **Prepare Files:** Collect DICOMs on local disk or network share.
2. **Script Invocation:** Python CLI requests presigned URL → uploads each file.
3. **S3 Storage:** Files land in a private S3 bucket with the returned key.
4. **DICOMweb STOW-RS:** Ingest pipeline reads from S3, validates, and registers studies.
5. **Post-Processing:** AI analysis triggers, and reports become available for delivery.

---

## Security & Compliance

- **HTTPS Encryption:** All API calls and file uploads occur over TLS.
- **Signed URLs:** S3 presigned URLs enforce time-limited, scoped upload permissions.
- **Audit Trails:** API access and ingestion logs captured with timestamps and user IDs.
- **Regulatory:** Meets HIPAA.

---

## Troubleshooting

| Symptom                       | Possible Cause                            | Recommended Action                              |
| ----------------------------- | ----------------------------------------- | ----------------------------------------------- |
| HTTP 401 / 403 on GET /upload | Invalid or missing API credentials        | Verify API Key/OAuth token and headers          |
| HTTP 4xx / 5xx on PUT to S3   | Expired or malformed presigned URL        | Retry script; check URL validity and clock skew |
| No network connectivity       | Firewall or proxy blocking HTTPS outbound | Allow HTTPS to S3 endpoints or proxy config     |
| Missing `requests` module     | Dependency not installed                  | Run `pip install requests`                      |

---

## FAQ

**Q: Can I integrate this into my own application instead of using the script?**

> Yes—simply call GET `/upload/` to obtain `url` and `key`, then perform an HTTP PUT of the DICOM file to `url` with `Content-Type: application/dicom`.

**Q: How many files can I upload concurrently?**

> We recommend batching no more than 20 parallel uploads to avoid S3 rate limits.

**Q: Can I upload multi-frame DICOMs or private tags?**

> Yes—the ingestion pipeline preserves all standard and private tags without modification.
