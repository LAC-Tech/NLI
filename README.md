# Natural Location Identifier (NLI) API

Reference implementation of Natural Location Identifiers, ISO 8000-118.

The **NLI API** provides utilities for creating, encoding, decoding, and managing **Natural Location Identifiers (NLI)**. These identifiers can represent geographical locations and storey-specific data in a standardized format.

---

## Functions

### `create(lat: number, long: number, elevation: Elevation): NLI`

Creates an NLI from latitude, longitude, and elevation.

#### Parameters:

- `lat` (_number_): Latitude of the location.
- `long` (_number_): Longitude of the location.
- `elevation` (_Elevation_): Elevation of the location.

#### Returns:

- `NLI`: A Natural Location Identifier.

---

### `encode(nli: NLI): string`

Encodes an `NLI` into a standalone ISO-compliant string with a prefix.

#### Parameters:

- `nli` (_NLI_): The Natural Location Identifier to encode.

#### Returns:

- `string`: The encoded ISO-compliant string.

---

### `decode(s: string): NLI`

Decodes a string into an `NLI`.

#### Parameters:

- `s` (_string_): The encoded string to decode.

#### Returns:

- `NLI`: The decoded Natural Location Identifier.

---

### `encodeTUID(nli: StoreyNLI): string`

Encodes a `StoreyNLI` for use within a TUID.

#### Parameters:

- `nli` (_StoreyNLI_): The Storey-specific Natural Location Identifier.

#### Returns:

- `string`: The encoded string for use in a TUID.

---

### `decodeTUID(s: string): StoreyNLI`

Decodes a string into a `StoreyNLI`.

#### Parameters:

- `s` (_string_): The encoded TUID string.

#### Returns:

- `StoreyNLI`: The decoded Storey-specific Natural Location Identifier.

---

## Types

### `NLI`

Represents a **Natural Location Identifier**. For details on its structure, refer to the [`types.d.ts`](./types.d.ts) file.

---

### `StoreyNLI`

Represents a **Storey-specific Natural Location Identifier**. Refer to the [`types.d.ts`](./types.d.ts) file for more details.

---

### `Elevation`

Represents the **elevation** of a location. Refer to the [`types.d.ts`](./types.d.ts) file for the expected structure.

---

## Usage

```javascript
import { create, encode, decode, encodeTUID, decodeTUID } from "nli"

// Example: Create and encode an NLI
const nli = create(37.7749, -122.4194, { storey: 3 })
const encoded = encode(nli)
console.log(encoded)

// Example: Decode a standalone NLI
const decoded = decode(encoded)
console.log(decoded)

// Example: Encode and decode a StoreyNLI for TUID
const storeyNli = { ...decoded, storey: 5 }
const tuidEncoded = encodeTUID(storeyNli)
console.log(tuidEncoded)

const tuidDecoded = decodeTUID(tuidEncoded)
console.log(tuidDecoded)
```
