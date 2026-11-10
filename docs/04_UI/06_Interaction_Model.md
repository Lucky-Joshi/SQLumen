# Interaction Model

## Pointer Interactions

- Single click: select a node
- Double click: center the graph on a node
- Hover: highlight related SQL and edges
- Right click: open node details
- Mouse wheel: zoom
- Drag canvas: pan
- Drag node: reposition node

## Search

Search can locate:

- Tables
- Columns
- CTEs
- Nodes
- Warnings

Results should focus the relevant graph element and highlight the matching SQL.

## Keyboard Shortcuts

- `Ctrl + F`: search
- `Ctrl + Mouse Wheel`: zoom
- `Ctrl + Shift + R`: re-layout graph
- `Escape`: clear selection or close transient UI

All pointer actions must have keyboard-accessible equivalents where applicable.

## State Feedback

Selection, focus, loading, errors, unavailable AI, and warnings must have visible state changes. Graph interactions must not silently change the current context.