---
sidebar_position: 3
---

# SFTP

## Overview

Our SFTP ingestion option provides a straightforward, secure method for healthcare facilities to transfer DICOM studies to our cloud platform. Leveraging standard SFTP clients and key-based authentication, this integration fits easily into existing workflows.

## Key Benefits

- **Security**: SSH key-based access and encrypted channels protect PHI in transit.
- **Simplicity**: Utilizes familiar SFTP tools—no specialized software required.
- **Reliability**: Automatic processing triggers upon upload, with status notifications.
- **Scalability**: Supports parallel uploads and large datasets through directory-based organization.

## How It Works

1. **Provisioning Access**
   - Receive SFTP endpoint, account credentials, and upload directory structure.
   - Register SSH public key for authentication.
2. **Uploading Studies**
   - Place each study as a zipped archive into the designated input folder.
   - Our ingestion service detects new uploads and begins processing automatically.
3. **Processing & Acknowledgment**
   - Files are validated, ingested, and stored securely in our data lake.
   - Status updates and notifications are logged and available via our dashboard or API.

## Tips

- Identical studies with the same StudyInstanceID uploaded within a 5 minute period will be overwritten

## Security and Compliance

- All connections enforce SSH encryption and strict host verification.
- Access controls restrict user permissions to assigned directories.
- Detailed audit logs record file transfers and processing events for compliance.

---

_Last updated: June 25, 2025_
