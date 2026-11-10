# Scope and Non-Goals

## MVP Scope

Version 1 focuses on SQL understanding rather than SQL execution.

The application accepts SQL text and optionally accepts schema definitions and execution plans.

No live database connection is required.

---

# Included

## Query Parsing

- SELECT
- JOIN
- WHERE
- GROUP BY
- HAVING
- ORDER BY
- LIMIT
- CTE
- Subqueries
- Window Functions

---

## Visualization

- Query Flow Graph
- Interactive Nodes
- Highlight SQL Sections
- Graph Navigation

---

## Analysis

- Table detection
- Join detection
- Filter detection
- Aggregation detection
- Window function detection

---

## Optimization

Rule-based suggestions only.

---

## AI

Optional explanation layer.

AI never generates diagrams.

---

# Out of Scope

The following are intentionally excluded from Version 1.

## Database Connections

No PostgreSQL connection.

No MySQL connection.

No SQL Server connection.

---

## Query Execution

Queries are never executed.

---

## Automatic Cost Estimation

Impossible without database statistics.

---

## Automatic Index Detection

Requires database metadata.

---

## Authentication

No login system.

---

## Collaboration

No shared workspaces.

---

## Query History Sync

Only local history.

---

## Real-Time Monitoring

Not supported.

---

## Schema Discovery

Users provide schema manually.

---

## Multi-user Support

Single user application.

---

## Mobile Application

Desktop/Web only.

---

# Design Philosophy

Every feature must answer:

"Does this help users understand SQL better?"

If not, it belongs in a future release.