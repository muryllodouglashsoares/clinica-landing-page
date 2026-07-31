import { useRef, useState } from "react";

/**
 * Drag-to-reveal before/after comparison. Returns the viewport ref to attach
 * to the container, the current split position (0–100), and pointer handlers.
 * Clamped to 2–98% so the handle never fully hides either image.
 */
export function useBeforeAfterSlider(initialPosition = 50) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const draggingRef = useRef(false);

  const moveTo = (clientX: number) => {
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setPosition(pct);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    viewportRef.current?.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) moveTo(e.clientX);
  };
  const endDrag = () => {
    draggingRef.current = false;
  };

  return {
    viewportRef,
    position,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
    },
  };
}
