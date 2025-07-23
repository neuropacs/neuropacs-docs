---
sidebar_position: 4
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

1. **Retrieve OAuth2 Token**

   - **Endpoint**: `GET <oauth2_endpoint>/token`
   - Retrieves an short-lived (1 hour) OAuth2 bearer token for API authorization from our OAuth2 endpoint.
   - _Note: This token must be included in the 'Authorization' header._

2. **Order status check**
   - **Endpoint**: `GET /status?order_id={orderID}`
   - **Endpoint**: `GET /status?study_uid{studyInstanceUID}`
   - Retrieves the current processing status for the specified study UID/order ID.
   - _Note: If multiple orders correspond to a study UID, only the most recent is returned._
3. **Order ID retrieval**
   - **Endpoint**: `GET /orderId?study_uid={studyInstanceUID}`
   - Retrieves the order ID(s) corresponding to the specified study instance UID.
4. **Single-study result retrieval**
   - **Endpoint**: `GET /results?order_id={orderID}&report_type={reportType}`
   - **Endpoint**: `GET /results?study_uid={studyInstanceUID}&report_type={reportType}`
   - Returns the desired report associated with the specified study UID/order ID.
   - _Note: If multiple orders correspond to a study UID, only the most recent is returned._
5. **Single-study failure report retrieval**
   - **Endpoint**: `GET /failure-report?order_id={orderID}&report_type={reportType}`
   - **Endpoint**: `GET /failure-report?study_uid={studyInstanceUID}&report_type={reportType}`
   - Returns the desired failure report associated with the specified study UID/order ID.
   - _Note: If multiple orders correspond to a study UID, only the most recent is returned._
6. **Group-study report retrieval**
   - **Endpoint**: `GET /report?study_group={studyGroup}&report_type={reportType}`
   - Returns the desired report associated with the specified study group.
7. **Batch polling**
   - **Endpoint**: `GET /reports?organizationId={orgId}`
   - Returns a list of all reports for jobs submitted by the organization that have not yet been retrieved.
   - **Endpoint**: `POST /reports?organizationId={orgId}`
   - Acknowledgement for all report successfully retrieved. Marks report as received on our cloud system.

## Security and Compliance

- OAuth2 tokens inherit strict scopes, preventing unauthorized data access.
- TLS encryption in transit and AWS KMS‑protected storage at rest.
- Detailed access logs track each retrieval and status request for auditing.

---

_Last updated: July 16, 2025_
