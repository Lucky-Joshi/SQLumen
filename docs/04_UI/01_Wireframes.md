# Wireframes

## Design Philosophy

SQLUMEN should feel like a professional developer tool rather than a generic dashboard.

Primary inspirations:

- VS Code
- Postman
- GitHub
- Figma

---

## Main Layout

```text
+-------------------------------------------------------------+
|                         Top Navigation                      |
+-------------------------------------------------------------+
|        SQL Editor        |          Graph View              |
|                          |                                  |
|                          |                                  |
|                          |                                  |
+-------------------------------------------------------------+
|                    Analysis Panel                           |
| Warnings | Statistics | Optimization | AI Explanation       |
+-------------------------------------------------------------+
| Status: Dialect | Parser | Graph Version | AI Status         |
+-------------------------------------------------------------+
```

## Left Panel

SQL Editor:

- Monaco Editor
- Syntax highlighting
- Line numbers
- Source-linked error markers

## Center Panel

Interactive Graph:

- Zoom
- Pan
- Mini map
- Node inspector
- Layout controls

## Right Panel

Tabbed view:

- Statistics
- Optimization
- AI
- Execution Plan
- Query Smells

## Bottom Status Bar

Shows:

- Current dialect
- Parser version
- Graph version
- Rows parsed
- Warning count
- AI status

The layout must remain usable when optional AI or EXPLAIN data is unavailable.