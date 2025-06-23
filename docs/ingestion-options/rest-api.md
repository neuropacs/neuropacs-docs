---
sidebar_position: 5
---

# REST API

## Overview

Our REST API ingestion option allows healthcare providers to upload DICOM imaging data securely and efficiently using AWS S3 presigned URLs. This approach leverages standard HTTPS calls to transfer files directly to cloud storage, enabling seamless integration with existing workflows.

## Key Benefits

- **Security**: All endpoints require scoped OAuth2 Bearer tokens, ensuring least-privilege access. Time-limited, scoped presigned URLs ensure only authorized uploads.
- **Flexibility**: Compatible with standard HTTP clients, PACS, and custom tooling. Firewall friendly.

## Authentication

1. **Token Acquisition**

   - Client authenticates with our OAuth2 token endpoint using client credentials or other supported grant types.
   - A short-lived Bearer token is issued, scoped specifically for presigned URL generation and upload access.

2. **Authorized Requests**
   - Include the token in the `Authorization: Bearer <token>` header when calling the presigned URL endpoint.
   - Our API validates the token’s scope and expiration before issuing presigned URLs.

## How It Works

1. **Retrieve OAuth2 Token**
   - Client requests token from our OAuth2 endpoint.
   - Our service returns a time-limited, scoped token to be included in later requests.
2. **URL Generation**
   - Client requests a presigned URL from our API.
   - Our service returns a time-limited, write-only S3 presigned URL.
3. **Data Upload**
   - Client performs an HTTP PUT to the presigned URL, uploading DICOM files directly to S3.
   - Optional multipart upload supports large datasets.
4. **Notification & Ingestion**
   - S3 event triggers invoke ingestion workflows to validate and process the study.
   - Processed data is stored in our secure data lake and made available for analysis.

## Security and Compliance

- OAuth2 token authentication
- Presigned URLs expire to limit exposure.
- Role-based IAM policies enforce least privilege for URL generation and storage access.
- All data in transit and at rest is encrypted using AWS-managed keys.
- Detailed audit logs capture URL issuance and upload events for compliance monitoring.

---

_Last updated: June 23, 2025_
