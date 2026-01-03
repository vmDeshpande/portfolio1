"use client"

import AnimatedCursor from "react-animated-cursor"

export default function AnimatedCursorProvider() {
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)

  if (isTouchDevice) return null

  return (
    <AnimatedCursor
      /* Inner dot */
      innerSize={10}
      innerScale={1}
      innerStyle={{
        backgroundColor: "white",
      }}

      /* Outer ring */
      outerSize={42}
      outerScale={1.2}
      outerAlpha={1}
      outerStyle={{
        border: "2px solid white",
        backgroundColor: "transparent",
      }}

      /* Interaction */
      clickables={[
        "a",
        "button",
        "[role='button']",
        "input",
        "textarea",
        "select",
      ]}
    />
  )
}
