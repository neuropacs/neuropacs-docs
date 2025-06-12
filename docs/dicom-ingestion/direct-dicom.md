---
sidebar_position: 2
---

# Direct-Connect DICOM Ingestion (VPN + C-STORE)

> Secure, high-volume PACS integration via an always-on VPN tunnel and standard DICOM C-STORE protocol.

---

## Executive Summary

- **Continuous Flow:** Images transfer automatically from your PACS to our cloud as soon as they arrive.
- **Enterprise Security:** Encrypted VPN tunnel (AES-256) meets HIPAA/GDPR requirements.
- **Scalable Throughput:** Handles hundreds of studies per hour without manual intervention.
- **Operational SLAs:** Guaranteed 99.9% connectivity uptime and sub-minute ingestion latency.

---

## Technical Overview

| Component                 | Detail                                          |
| ------------------------- | ----------------------------------------------- |
| **VPN Type**              | Site-to-Site IPsec (AES-256) or OpenVPN client  |
| **DICOM Protocol**        | C-STORE over TCP/IP                             |
| **Local AE Title (SCU)**  | `LOCAL_AE`                                      |
| **Remote AE Title (SCP)** | `REMOTE_AE`                                     |
| **Remote IP/Port**        | `10.0.0.X:104` (assigned via VPN)               |
| **Firewall**              | Allow TCP on port 104 between PACS & VPN subnet |

---

## Architecture Diagram

```text
┌──────────┐           ┌───────────┐           ┌──────────────────┐
│ Your     │──VPN────▶│ VPN Gateway│──Private──▶│ Cloud Ingest Node│
│ PACS     │  Tunnel  │ (IPsec)    │  Network   │ (DICOM SCP)      │
│ (SCU)    │          └───────────┘           │ AE=REMOTE_AE     │
│ AE=LOCAL │                                   └──────────────────┘
└──────────┘
      │
      └─► C-STORE to AE “REMOTE_AE” over VPN
```

---

## Prerequisites

### IT & Security Approval

- VPN peer credentials or certificates
- Firewall rule to allow TCP/104 (or custom port)

### PACS Administration

- Rights to add/configure AE Titles
- DCMTK or equivalent DICOM toolkit installed for testing

### Onboarding Details (from our team)

- VPN endpoint (IP or DNS)
- Shared secret or certificates
- Assigned VPN subnet & remote-AE address

---

## Step-by-Step Configuration

### 1. Establish the VPN Tunnel

You may use IPsec on your edge firewall/router or deploy an AWS Client VPN endpoint.

**Configure Site-to-Site IPsec**

- **Encryption:** AES-256, SHA-256
- **Endpoints:**
  - **Local:** your public IP
  - **Remote:** `vpn.example.com` (provided)

**Verify Connectivity**

```bash
ping 10.0.0.X        # should respond in <10 ms
traceroute 10.0.0.X  # confirm route via VPN tunnel
```

### 2. Define AE Titles in Your PACS

| Role                   | AE Title    | IP Address | Port  |
| ---------------------- | ----------- | ---------- | ----- |
| **SCU (Your PACS)**    | `LOCAL_AE`  | —          | any   |
| **SCP (Cloud Ingest)** | `REMOTE_AE` | `10.0.0.X` | `104` |

- **GE Centricity:** Admin → DICOM → Add Remote AE
- **Sectra PACS:** Configuration → Network → Remote DICOM Connector
- **Orthanc:** Edit `dicom.json` → add `"REMOTE_AE"` entry

### 3. Send a Test C-STORE

```bash
storescu \
  --aet LOCAL_AE \
  --aec REMOTE_AE \
  10.0.0.X 104 \
  /path/to/sample-study/*.dcm
```

- **Success:**
  - Terminal shows “C-STORE Success”
  - Study appears in our portal within seconds
- **Failure:**
  - Check VPN status, AE spelling, and firewall logs

---

## Ingestion Workflow Example

1. **Acquire Study** on scanner → images land in PACS.
2. **PACS auto‑routes** new studies to AE `REMOTE_AE`.
3. **Cloud Ingest Node** receives via C-STORE → acknowledges.
4. **Ingestion Pipeline** validates tags, normalizes metadata, stores raw DICOM in S3/EFS.
5. **Downstream Processes** trigger (AI analysis, report generation).

---

## Security & Compliance

- **In‑flight Encryption:** All DICOM traffic travels within the VPN—no public‑internet exposure.
- **Audit Logging:** Every C-STORE transaction is logged with timestamp, AE Titles, and patient identifiers.
- **Regulatory:** Meets HIPAA and GDPR; Business Associate Agreement (BAA) available.

---

## Troubleshooting

| Symptom                    | Possible Cause             | Recommended Action                          |
| -------------------------- | -------------------------- | ------------------------------------------- |
| No ping to `10.0.0.X`      | VPN down                   | Restart VPN; verify credentials/certs       |
| `storescu` timeout         | Firewall blocking port 104 | Open TCP/104 between PACS & VPN subnet      |
| “Unknown AE Title” error   | AE mismatch                | Confirm AE Titles in PACS & ingest node     |
| Delayed ingestion (>5 min) | Packet loss or congestion  | Check VPN bandwidth; increase MTU if needed |

---

## FAQ

**Q: Can we use a different port?**

> Yes—just update firewall rules and AE configurations accordingly.

**Q: How often should we rotate VPN certificates?**

> Follow your internal security policies; coordinate rotations with our Ops team.

**Q: What if we have multiple PACS sites?**

> Assign each site a unique `LOCAL_AE`; all can point to the same `REMOTE_AE`.
