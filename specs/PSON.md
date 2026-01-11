# PSON - Performance Science Object Notation

**Version:** 1.0.0
**Author:** ZETA AE (ADI EKTA)
**Status:** Active Specification

---

## Overview

PSON (Performance Science Object Notation) is a declarative notation system designed to transform structured content into research-grade PDF documents. Each PSON file represents a single page or section that can be bundled into complete publications.

## Architecture

```
┌─────────────────────────────────────────┐
│              JSON Layer                 │
│         (Human Readable)                │
│    chapter-XX.json                      │
├─────────────────────────────────────────┤
│              PSON Layer                 │
│      (Rendering Instructions)           │
│    chapter-XX.pson                      │
├─────────────────────────────────────────┤
│           PDF Output                    │
│     (Research Grade Document)           │
└─────────────────────────────────────────┘
```

## File Structure

### JSON Layer (.json)
Human-readable content layer containing:
- Raw text content.
- Metadata.
- Semantic structure.

### PSON Layer (.pson)
Rendering specification layer containing:
- Typography definitions.
- Layout instructions.
- Code translations (Zeta ↔ Earth).
- Attribution rules.

---

## PSON Specification

### 1. Document Header

```pson
@pson 1.0
@type page | section | chapter | book
@id <unique-identifier>
@parent <parent-id> | null
```

### 2. Metadata Block

```pson
@meta {
  title: <string>
  subtitle: <string> | null
  author: <string>
  attribution: <string>
  version: <semver>
  created: <ISO-8601>
  modified: <ISO-8601>
  language: earth | zeta | dual
  classification: public | restricted | sacred
}
```

### 3. Typography Block

```pson
@typography {
  font_primary: Lato | Arial | Helvetica | <custom>
  font_secondary: <font-name>
  font_code: JetBrains Mono | Fira Code | <monospace>

  size_title: <pt>
  size_heading: <pt>
  size_body: <pt>
  size_caption: <pt>
  size_code: <pt>

  line_height: <ratio>
  paragraph_spacing: <pt>

  color_primary: <hex>
  color_secondary: <hex>
  color_accent: <hex>
  color_code_bg: <hex>
}
```

### 4. Layout Block

```pson
@layout {
  page_size: A4 | Letter | <custom>
  orientation: portrait | landscape
  margins: {
    top: <mm>
    bottom: <mm>
    left: <mm>
    right: <mm>
  }
  columns: 1 | 2
  header: true | false
  footer: true | false
  page_numbers: true | false
}
```

### 5. Content Blocks

#### Section Definition
```pson
@section <id> {
  type: title | heading | subheading | body | code | quote | note | attribution
  content: <string> | @ref(<json-path>)
  style: <style-override>
}
```

#### Dual Language (Zeta/Earth)
```pson
@dual <id> {
  zeta: <zeta-code-content>
  earth: <plain-english-content>
  display: zeta | earth | both | toggle
}
```

#### Code Block
```pson
@code <id> {
  language: zeta | python | javascript | <lang>
  content: <code-string>
  caption: <string> | null
  line_numbers: true | false
}
```

#### Attribution Block
```pson
@attribution {
  source: <string>
  author: <string>
  license: <license-type>
  notes: <string> | null
}
```

### 6. Rendering Directives

```pson
@render {
  output: pdf | html | print
  quality: draft | standard | high | archival
  embed_fonts: true | false
  compress: true | false
}
```

---

## Data Types

| Type | Description | Example |
|------|-------------|---------|
| `<string>` | UTF-8 text | `"Hello World"` |
| `<pt>` | Points (typography) | `12` |
| `<mm>` | Millimeters | `25` |
| `<hex>` | Hex color | `#00f0ff` |
| `<ratio>` | Decimal ratio | `1.5` |
| `<semver>` | Semantic version | `1.0.0` |
| `<ISO-8601>` | Date/time | `2026-01-11T00:00:00Z` |

---

## Zeta Language Codes

Zeta codes are symbolic representations used in interdimensional communication.

| Zeta Code | Earth Translation | Domain |
|-----------|-------------------|--------|
| `ΔΨ` | Consciousness Shift | Mind |
| `ΩΣ` | Frequency Alignment | Signal |
| `ΦΘ` | Sacred Geometry | Form |
| `ΛΠ` | Temporal Flow | Time |
| `ΞΥ` | Energy Transfer | Force |
| `ΑΩ` | Beginning-End Cycle | Existence |
| `ΣΔ` | Change Integration | Evolution |
| `ΘΦ` | Divine Proportion | Harmony |

---

## Example PSON File

```pson
@pson 1.0
@type page
@id chapter-01-page-01
@parent chapter-01

@meta {
  title: "The Awakening"
  subtitle: "Introduction to Mindful Partnership"
  author: "ZETA AE (ADI EKTA)"
  attribution: "EM: Ekta Mindfulness"
  version: 1.0.0
  created: 2026-01-11T00:00:00Z
  modified: 2026-01-11T00:00:00Z
  language: dual
  classification: public
}

@typography {
  font_primary: Lato
  font_secondary: Lato
  font_code: JetBrains Mono
  size_title: 24
  size_heading: 18
  size_body: 11
  size_caption: 9
  size_code: 10
  line_height: 1.6
  paragraph_spacing: 12
  color_primary: #1a1a2e
  color_secondary: #4a4a5e
  color_accent: #00f0ff
  color_code_bg: #f5f5f5
}

@layout {
  page_size: A4
  orientation: portrait
  margins: {
    top: 25
    bottom: 25
    left: 30
    right: 30
  }
  columns: 1
  header: true
  footer: true
  page_numbers: true
}

@section title {
  type: title
  content: @ref(content.title)
}

@section intro {
  type: body
  content: @ref(content.introduction)
}

@dual concept-1 {
  zeta: "ΔΨ → ΩΣ : ΦΘ"
  earth: "Consciousness shifts toward frequency alignment through sacred geometry"
  display: both
}

@attribution {
  source: "Mindfulness Of Wife (MOW)"
  author: "ZETA AE (ADI EKTA)"
  license: CC-BY-NC-SA-4.0
  notes: "Dhamma Relationships & Communication Technology"
}

@render {
  output: pdf
  quality: high
  embed_fonts: true
  compress: false
}
```

---

## Bundling

Multiple PSON files are bundled into a complete book using a manifest.

```pson
@pson 1.0
@type book
@id mindfulness-of-wife

@manifest {
  title: "Mindfulness Of Wife"
  chapters: [
    @include(chapter-01.pson)
    @include(chapter-02.pson)
    @include(chapter-03.pson)
  ]
  toc: auto | manual
  index: true | false
}
```

---

## Processing Pipeline

1. **Parse** - Read JSON content layer.
2. **Transform** - Apply PSON rendering rules.
3. **Validate** - Check structure and references.
4. **Render** - Generate PDF output.
5. **Bundle** - Combine multiple pages/chapters.

---

## License

This specification is released under CC-BY-NC-SA-4.0.

**ZETA AE (ADI EKTA)™ - EM: Ekta Mindfulness**
