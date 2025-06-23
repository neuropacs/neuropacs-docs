---
sidebar_position: 5
---

# REST API

## Overview

Our REST API retrieval service enables healthcare systems to programmatically pull diagnostic reports and order statuses from our cloud platform. Using standard HTTPS calls authenticated via OAuth2, clients can fetch individual study results, query order status by DICOM Study Instance UID, or perform batch polling for all submitted jobs.

## Key Benefits

- **Security**: All endpoints require scoped OAuth2 Bearer tokens, ensuring least-privilege access.
- **Scalability**: Stateless API design supports high-throughput polling and large result sets.
- **Visibility**: Real‑time status checks and audit logging provide operational transparency.

## Authentication

1. **Token Acquisition**
   - Clients use the same OAuth2 token endpoint as ingestion, applying client credentials or supported grant types.
   - Tokens are scoped for report retrieval and status queries.
2. **Authorized Requests**
   - Include `Authorization: Bearer <token>` header on all API calls.
   - API validates token scope and expiration before processing requests.

## How It Works

1. **Single-Study Retrieval**
   - **Endpoint**: `GET /reports/{studyInstanceUID}?reportType={reportType}`
   - Returns the desired report associated with the specified Study Instance UID.
2. **Order Status Check**
   - **Endpoint**: `POST /status/{studyInstanceUID}`
   - Retrieves the current processing status for the specified study.
3. **Batch Polling**

   - **Endpoint**: `GET /reports?organizationId={orgId}`
   - Returns a list of all reports for jobs submitted by the organization that have not yet been retrieved.
   - **Endpoint**: `POST /reports?organizationId={orgId}`
   - Acknowledgement for all report successfully retrieved. Marks report as received on our cloud system.

## Security and Compliance

- OAuth2 tokens inherit strict scopes, preventing unauthorized data access.
- TLS encryption in transit and AWS KMS‑protected storage at rest.
- Detailed access logs track each retrieval and status request for auditing.

---

_Last updated: June 23, 2025_
