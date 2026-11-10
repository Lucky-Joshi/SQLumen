# Animations

Animations should communicate state and never distract from SQL analysis.

## Animation Patterns

- Graph load: fade and scale
- Node hover: soft glow
- Node selection: restrained pulse
- Warnings: slide in
- AI response: typing fade

## Timing

- Standard duration: `150–250ms`
- No animation longer than `400ms`
- Use consistent easing across components

## Accessibility

Disable or simplify nonessential animation when `prefers-reduced-motion` is enabled. State changes must remain understandable without motion.

## Performance

Animations must not block editing, graph interaction, or keyboard input. Avoid animating large graph layouts when a concise state transition is sufficient.