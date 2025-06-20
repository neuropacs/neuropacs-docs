---
sidebar_position: 2
---

# VPN Direct Connect

## Overview

As an imaging facility administrator, this guide walks you through configuring your on‑prem network and PACS to send DICOM studies securely over a VPN or Direct Connect link to your cloud DICOMweb STOW‑RS service. You’ll:

- Obtain network connection parameters from your cloud vendor
- Configure your VPN appliance or Direct Connect router
- Update routing and firewall rules
- Set up and test your PACS DICOMweb STOW‑RS destination
- Monitor and troubleshoot transfers

## Prerequisites

- Public IP address and ASN for your facility’s network
- On‑prem VPN appliance (e.g., Cisco, Juniper) or Direct Connect‑capable router
- Connection details from your cloud provider:
  - VPN configuration file or Direct Connect interface/VLAN settings
  - Peer gateway IP(s), shared secret, and BGP info (if applicable)
- TLS certificates or credentials for DICOMweb authentication
- PACS system with DICOMweb STOW‑RS capability
- Approved maintenance window for changes

## 1. Obtain Connection Details

1. **Request from your cloud vendor**:
   - Site‑to‑Site VPN config (or Direct Connect LOA and router guide)
   - Peer gateway IP addresses and shared secret (VPN) or VLAN/BGP settings (DX)
2. **Schedule maintenance** and confirm change approvals.

## 2. Configure Your Network Device

1. **VPN Appliance**:
   - Import the provided VPN configuration into your device’s management console.
   - Verify the public IP, shared secret, and encryption settings.
2. **Direct Connect Router**:
   - Apply interface parameters and BGP ASN as per your vendor’s LOA.
   - Verify BGP peering with the cloud gateway.

## 3. Update Routing & Firewall Rules

- **Routing**:
  - Add a static route (or BGP) for the cloud DICOMweb CIDR through your VPN/DX interface.
- **Firewall**:
  - Allow outbound TCP port 443 to the cloud endpoint IP range.
  - Restrict traffic to only your vendor’s network.
- **TLS Setup**:
  - Install the CA bundle if using mTLS.
  - Securely store and reference your client certificates.

## 4. Verify Network Connectivity

On a test workstation within your network:

```bash
ping <cloud-gateway-ip>
traceroute <cloud-gateway-ip>
openssl s_client -connect <cloud-gateway-ip>:443 -CAfile ca-bundle.pem
```

Ensure you see a successful TLS handshake and ICMP replies.

## 5. Configure Your PACS for STOW‑RS

1. **Access PACS settings** and locate **DICOMweb Destinations ▶︎ STOW**.
2. **Create a new destination**:
   - **Label**: Cloud STOW‑RS
   - **URL**: `https://<your-cloud-domain>/dicomweb/studies`
   - **Authentication**: Choose mTLS (upload cert/key) or Basic Auth (enter user/pass)
   - **Timeout**: Set ≥300 seconds for large studies
3. **Save** and **restart** the PACS transfer service if required.

## 6. Test DICOMweb STOW‑RS Transfers

### Manual ‘curl’ Test

```bash
curl -X POST https://<your-cloud-domain>/dicomweb/studies \
     -H "Content-Type: application/dicom" \
     --cert client.crt --key client.key --cacert ca-bundle.pem \
     --data-binary @test-image.dcm
```

Verify a 200-series response and check your cloud portal for the study.

### PACS‑Driven Test

1. In your PACS UI, select a study and choose **Send via Cloud STOW‑RS**.
2. Monitor PACS transfer logs for success.
3. Confirm study availability on the cloud viewer or query interface.

## 7. Monitor & Troubleshoot

- **VPN/DX logs**: Ensure the tunnel or BGP session is up.
- **Firewall logs**: Check for blocked HTTPS traffic.
- **PACS logs**: Look for HTTP error codes and certificate errors.
- **Network captures**: Use `tcpdump` to trace packets over your secure link.

### Common Issues

| Symptom                    | Likely Cause                    | Recommended Action                            |
| -------------------------- | ------------------------------- | --------------------------------------------- |
| TLS handshake failures     | Certificate mismatch or expired | Validate cert chain and expiration dates      |
| Transfer timeouts          | Latency or firewall blocking    | Increase timeouts; verify firewall allows 443 |
| 400/404/500 HTTP responses | URL or payload error            | Confirm endpoint path and payload format      |

## Next Steps

- Configure automatic transfers in your PACS.
- Set up monitoring alerts for failed transfers.

_Last updated: June 16, 2025_
