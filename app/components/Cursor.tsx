"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const bubblePos = useRef({ x: 0, y: 0 });

  // Bubble text displayed
  const [bubbleText, setBubbleText] = useState<string>("");
  const [targetText, setTargetText] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Move cursor instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${mouse.current.x}px, ${mouse.current.y}px)
          translate(-50%, -50%)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      // Smooth bubble movement
      bubblePos.current.x += (mouse.current.x - bubblePos.current.x) * 0.2;
      bubblePos.current.y += (mouse.current.y - bubblePos.current.y) * 0.2;

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `
          translate(${bubblePos.current.x + 25}px, ${
          bubblePos.current.y + 25
        }px)
        `;
      }

      // Hover detection
      const el = document.elementFromPoint(
        mouse.current.x,
        mouse.current.y
      ) as HTMLElement | null;

      if (el?.closest("a, button, [data-cursor='hover']")) {
        cursorRef.current?.classList.add("hovered");

        const title =
          el.closest("[data-title]")?.getAttribute("data-title") ?? null;
        setTargetText(title); // update target text
        if (title) bubbleRef.current?.classList.add("visible");
      } else {
        cursorRef.current?.classList.remove("hovered");
        bubbleRef.current?.classList.remove("visible");
        setTargetText(null); // fade out
      }

      // Update bubble text only if targetText changes and visible
      if (bubbleRef.current?.classList.contains("visible")) {
        setBubbleText(targetText ?? "");
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [targetText]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={bubbleRef} className="cursor-bubble">
        {bubbleText}
      </div>
    </>
  );
}
