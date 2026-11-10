# Node System

Every recognized SQL element becomes a graph node with a stable identity, label, type, metadata, and source location when available.

| Node | Shape | Color family |
| --- | --- | --- |
| Table | Rectangle | Blue |
| Join | Diamond | Purple |
| Filter | Hexagon | Orange |
| Aggregate | Rounded rectangle | Green |
| Window function | Circle | Pink |
| Sort | Rectangle | Yellow |
| Limit | Capsule | Red |
| CTE | Stacked card | Cyan |
| Subquery | Dashed rectangle | Gray |

Shapes and labels must distinguish nodes even without color perception.

## Interactions

- Hover: soft glow and related-edge emphasis
- Single click: select node and highlight SQL
- Double click: focus graph on node
- Right click: open node details
- Keyboard focus: show the same selection state as pointer interaction

Node details should expose the node type, relevant metadata, source location, and related warnings.