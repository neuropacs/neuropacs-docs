---
sidebar_position: 2
---

# VPN Direct Connect

## Overview

We provide a secure VPN-based connectivity option that allows healthcare institutions to establish a private network tunnel between their on-premises PACS system and our cloud services. This integration supports DICOM standard protocols C-STORE and STOW-RS to facilitate reliable image and metadata transmission.

## Key Benefits

- **Enhanced Security**: Encrypted communication over a private VPN tunnel.
- **Compliance**: Meets HIPAA and industry security requirements.
- **Performance**: Low-latency data transfer for real-time workflows.
- **Simplicity**: Minimal changes to existing PACS infrastructure.

## How It Works

1. **VPN Tunnel Establishment**
   - A site-to-site or client VPN is configured between the hospital network and our cloud environment.
   - IP routing ensures that PACS traffic is directed through the tunnel.
2. **DICOM Protocol Support**
   - **C-STORE**: Traditional DICOM push mechanism for sending studies from PACS to cloud.
   - **STOW-RS**: RESTful DICOM web service for modern HTTP-based transfers.
3. **Integration Workflow**
   - PACS pushes images via C-STORE or STOW-RS through the VPN tunnel.
   - Our cloud services automatically ingest, process, and store the incoming studies.
   - Acknowledgements and status updates are returned to the PACS system over the same secure channel.

## Tips

- Identical studies with the same StudyInstanceID uploaded within a 5 minute period will be overwritten

## Security and Compliance

- All VPN connections use industry-standard encryption (e.g., IPsec, TLS).
- Access controls and network segmentation enforce strict isolation.
- Audit logs track all DICOM transactions for compliance reporting.

---

_Last updated: June 25, 2025_
