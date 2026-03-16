/*
=====================================================
CURSOR GLOW
Crea un halo luminoso que sigue el cursor del usuario
=====================================================
*/

import { useEffect } from "react";

export default function CursorGlow() {

  useEffect(() => {

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const moveGlow = (e) => {

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";

    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      document.body.removeChild(glow);
    };

  }, []);

  return null;

}