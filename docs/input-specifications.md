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

### DICOM Tags

| DICOM Tag                          | Value                                        |
| ---------------------------------- | -------------------------------------------- |
| Patient Age (0010, 0010)           | Age of patient (e.g., "060Y", "048Y")        |
| Patient Sex (0010, 0040)           | Sex of patient (e.g., "F", "M")              |
| Sender AE Title (0008, 0055)       | Origin identifier (Application Entity title) |
| neuropacs™ Product ID (0019, 0021) | neuropacs™ product identifier                |
| neuropacs™ ID (0019, 0019)         | **Optional** custom UUIDv4 order ID          |

**Tip:** If a custom ID is provided, neuropacs™ will use this identifier instead of generating our own. **The provided ID must be a unique, valid UUIDv4 (e.g., "97abb53a-b7d6-4001-bbda-8b69007a2e1b").**

---

_Last updated: July 18, 2025_
