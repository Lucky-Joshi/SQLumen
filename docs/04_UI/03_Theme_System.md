# Theme System

## Supported Themes

- Dark
- Light

Dark is the default.

## Semantic Colors

Components use semantic tokens rather than raw color values:

- Primary
- Secondary
- Accent
- Success
- Warning
- Danger
- Info
- Background
- Surface
- Border
- Text Primary
- Text Secondary
- Muted

## Rules

- Never hardcode colors in components.
- All components consume semantic tokens.
- Every semantic color must remain readable in both themes.
- Warning and danger states must not rely on color alone.
- User theme preference should persist locally.