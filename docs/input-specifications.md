---
sidebar_position: 4
sidebar_label: Input Specifications
---

# Input Specifications

All submitted imaging data must comply with the input specifications detailed below. Any datasets that fail to meet these requirements will be deemed unsuitable for processing and rejected.

**The required MRI sequence is a diffusion-weighted, single-shot spin echo-planar imaging (EPI) acquisition with whole-brain coverage.**

### MRI Acquisition Parameters

| Parameter                | Value        |
| ------------------------ | ------------ |
| Field strength, T        | 3            |
| Repetition time (TR), ms | 6000 – 17000 |
| Echo time (TE), ms       | 55 – 100     |
| In-plane resolution, mm² | 1.85 – 2.15  |
| Slice thickness, mm      | 2            |
| Slices, n                | 64 – 86      |
| Slice acquisition        | Interleaved  |
| Slice gap, mm            | 0            |
| Flip angle, degrees      | 90           |
| b-values, s/mm²          | 0, 1000      |
| b0 images, n             | ≥ 2          |
| Directions, n            | ≥ 30         |

### Supported DICOM Transfer Syntaxes

| UID                    | Name                                                  |
| ---------------------- | ----------------------------------------------------- |
| 1.2.840.10008.1.2      | Implicit VR Little Endian                             |
| 1.2.840.10008.1.2.1    | Explicit VR Little Endian                             |
| 1.2.840.10008.1.2.2    | Explicit VR Big Endian (Retired)                      |
| 1.2.840.10008.1.2.1.99 | Deflated Explicit VR Little Endian                    |
| 1.2.840.10008.1.2.4.70 | JPEG Lossless, Non-Hierarchical, 1st-Order Prediction |
| 1.2.840.10008.1.2.4.80 | JPEG-LS Lossless                                      |
| 1.2.840.10008.1.2.4.90 | JPEG 2000 Lossless Only                               |
| 1.2.840.10008.1.2.4.91 | JPEG 2000 (Lossless Only)                             |
| 1.2.840.10008.1.2.5    | RLE Lossless                                          |

### Supported DICOM Tags

| DICOM Tag                        | Value                                        |
| -------------------------------- | -------------------------------------------- |
| Patient Age (0010, 0010)         | Age of patient (e.g., "060Y", "048Y")        |
| Patient Sex (0010, 0040)         | Sex of patient (e.g., "F", "M")              |
| Sender AE Title (0008, 0055)     | Origin identifier (Application Entity title) |
| neuropacs™ Products (0019, 0021) | neuropacs™ product list                      |

---

_Last updated: September 2, 2025_
