---
sidebar_position: 2
---

# VPN Direct Connect

## Overview

Our VPN-based report delivery solution enables secure, private connectivity for returning diagnostic results from our cloud services directly to healthcare institution endpoints such as PACS, EHR, VNA, and EDC systems via DICOM C-STORE or RESTful interfaces.

## Key Benefits

- **Secure Transmission**: Encrypted transport of diagnostic reports over dedicated VPN links.
- **Regulatory Compliance**: Aligns with HIPAA, FDA, and other healthcare data protection standards.
- **Seamless Integration**: Works with existing on-premises systems without major infrastructure changes.
- **Reliability**: Guaranteed delivery with acknowledgment tracking and retry logic.

## How It Works

1. **VPN Tunnel Configuration**
   - Establish a site-to-site or client VPN between our cloud environment and the hospital network.
   - Route report traffic through the VPN for isolation from public internet.
2. **Report Packaging**
   - Diagnostic findings are packaged as DICOM objects or FHIR bundles depending on target system capabilities.
3. **Delivery Protocols**
   - **C-STORE**: Pushes DICOM report objects directly into the institution’s PACS.
   - **HTTP/S REST**: Utilizes STOW-RS or FHIR APIs for EHR, VNA, or EDC ingestion.
4. **Acknowledgment and Tracking**
   - The receiving system confirms successful ingestion.
   - Our services log and monitor acknowledgments, retrying on transient failures.

## Security and Compliance

- VPN connections use strong encryption (IPsec, TLS) and mutual authentication.
- Role-based access controls restrict who can initiate report deliveries.
- Comprehensive audit trails capture transfer events for compliance reporting.

---

_Last updated: June 23, 2025_
