---
sidebar_position: 3
---

# SFTP

## Overview

The SFTP retrieval option enables healthcare facilities to securely fetch diagnostic reports from our cloud platform using standard SFTP protocols. This method integrates seamlessly with existing file transfer workflows and provides reliable access to results.

## Key Benefits

- **Security**: Encrypted SSH channels and key-based authentication safeguard PHI.
- **Consistency**: Familiar SFTP tools maintain existing operational processes.
- **Scalability**: Handles large volumes of results through organized folder hierarchies.

## How It Works

1. **Provisioning Access**
   - Receive SFTP endpoint and account credentials, including input/output directory structure.
   - Register SSH public key for secure authentication.
2. **Navigating Result Directories**
   - After processing, reports appear in the designated `output/` folder, organized by study ID.
   - Each study folder contains desired output reports.
3. **Downloading Reports**
   - Connect via SFTP to the provided endpoint.
   - Navigate to `output/<study_id>/` and download the available files.
   - Optionally, automate retrieval using scripts or SFTP clients.

## Security and Compliance

- SSH key-based access enforces strong authentication and encryption.
- Directory permissions restrict access to designated report folders.
- Transfer activity is logged for audit and compliance reporting.

---

_Last updated: June 23, 2025_
