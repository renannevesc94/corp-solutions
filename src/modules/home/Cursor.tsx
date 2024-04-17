import React, { useState, useEffect } from "react";
import guiaLeitura from "../modal-acessibilidade/assets/guia-leitura.png";

const Cursor: React.FC = () => {
  const [posicaoCursor, setPosicaoCursor] = useState({ x: 0, y: 0 });
  const [imagemOffset, setImagemOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const atualizaPosicaoCursor = (event: MouseEvent) => {
      setPosicaoCursor({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", atualizaPosicaoCursor);

    const img = document.getElementById("cursor-img") as HTMLImageElement;
    if (img) {
      const offsetLeft = img.width / 2;
      const offsetTop = img.height / 2;
      setImagemOffset({ x: -offsetLeft, y: -offsetTop });
    }

    return () => {
      document.removeEventListener("mousemove", atualizaPosicaoCursor);
    };
  }, []);

  const OFFSET_Y = -10;

  return (
    <div
      style={{
        position: "fixed",
        left: posicaoCursor.x + imagemOffset.x,
        top: posicaoCursor.y + imagemOffset.y + OFFSET_Y,
      }}
    >
      <img
        id="cursor-img"
        src={guiaLeitura}
        style={{ width: "500px", height: "auto" }}
      />
    </div>
  );
};

export default Cursor;
