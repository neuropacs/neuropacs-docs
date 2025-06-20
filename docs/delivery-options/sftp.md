---
sidebar_position: 3
---

# SFTP

## Usage Guide

This guide explains how to securely upload and retrieve DICOM studies via SFTP with neuropacs. Follow these steps as an imaging facility administrator:

### 1-A. Prerequisites

Before you can connect to our SFTP service, ensure you have:

- **SSH Public Key** (ED25519, RSA, or ECDSA):
  - ED25519: `ssh-ed25519`
  - RSA: `rsa-sha2-256` or `rsa-sha2-512`
  - ECDSA: `ecdsa-sha2-nistp256`, `ecdsa-sha2-nistp384`, or `ecdsa-sha2-nistp521`
- **SFTP Credentials** provided by neuropacs:
  - Hostname: `<server-id>.server.transfer.<region>.amazonaws.com`
  - Port: `22`
  - Username: your assigned username (e.g., `PH1234_SITE07_USER`)
- **Private Key File** corresponding to your public key (e.g., `~/.ssh/id_ed25519`)

> ⚠️ Share your public key with neuropacs support before proceeding.

### 1-B. Establishing a Connection

You can connect via a GUI client (FileZilla) or the command line.

#### FileZilla (SFTP Client)

1. Open **FileZilla**, go to **File ▶︎ Site Manager**.
2. Click **New Site**, name it “neuropacs SFTP”.
3. Under **General**:
   - **Protocol**: SFTP
   - **Host**: `<server-id>.server.transfer.<region>.amazonaws.com`
   - **Port**: `22`
   - **Logon Type**: Key file
   - **User**: your assigned username
   - **Key file**: path to your private key (e.g., `~/.ssh/id_ed25519`)
4. Click **Connect**.

#### Command Line (`sftp`)

```bash
sftp -i ~/.ssh/id_ed25519 \
     -o StrictHostKeyChecking=no \
     PH1234_SITE07_USER@<server-id>.server.transfer.<region>.amazonaws.com
```

Upon success, you will land in your home directory, which contains `input/` and `output/` folders.

### 1-C. Uploading a Study Group

Each study must reside in its own uniquely named zip file (e.g., a UUID). Failure to isolate studies will prevent processing.

1. **Navigate** into the study input `input/<study_id>/input` directory.
2. **Upload** all zip files for that study into this folder.

After each upload, neuropacs will begin processing immediately.

### 1-D. Retrieving Results

When processing completes (typically within 2–3 hours), you can download results:

1. **Connect** via SFTP as before.
2. **Enter** the `output/` directory.
3. **Identify** your study folder suffixed with `_out` (e.g., `123e4567-e89b-12d3-a456-426614174000_out`).
4. **Download** the contents:
   - `prediction.png` — visual diagnostic report
   - `prediction.txt` - textual diagnostic report
   - `aidp.csv` — quantitative CSV report across 132 brain regions

### Tips & Troubleshooting

- **Permission Denied**: Ensure your private key permissions are `600` (`chmod 600 ~/.ssh/id_ed25519`).
- **Connection Timeout**: Verify your institution’s firewall allows outbound TCP port 22.

---

_Last updated: June 16, 2025_
