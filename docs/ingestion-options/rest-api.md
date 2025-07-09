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

   - **Endpoint**: `GET <oauth2_endpoint>/token`
   - Retrieves an short-lived (1 hour) OAuth2 bearer token for API authorization from our OAuth2 endpoint.
   - _Note: This token must be included in the 'Authorization' header._

2. **Generate Presigned URL**

   - **Endpoint**: `GET /upload`
   - Retrieves a a time-limited, scoped, write-only presigned URL.

3. **Upload Single Instance**

   - **Endpoint**: `PUT <presigned_url>`
   - Uploads a single instance to our encrypted cloud data lake.
   - _Note: Individual instances are associated with a study via DICOM metadata on our cloud services. This endpoint does not required authorization header._

4. **Add Metadata to Order**

   - **Endpoint**: `PATCH /add-metadata?order_id={orderID}`
   - **Endpoint**: `PATCH /add-metadata?study_uid{studyInstanceUID}`
   - Add JSON metadata to an active order.
   - _Note: An order will fail after 15 minutes without the required metadata. Include the necessary metadata in DICOM tags or use this endpoint._

## Tips

- Identical studies with the same StudyInstanceID uploaded within a 5 minute period will be overwritten

## Security and Compliance

- OAuth2 token authentication
- Presigned URLs expire to limit exposure.
- Role-based IAM policies enforce least privilege for URL generation and storage access.
- All data in transit and at rest is encrypted using AWS-managed keys.
- Detailed audit logs capture URL issuance and upload events for compliance monitoring.

---

_Last updated: June 25, 2025_
