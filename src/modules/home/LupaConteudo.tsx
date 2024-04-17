import React, { ReactNode } from "react";

import { useAcessibility } from "../../providers/AccessibilityProvider";

interface LupaConteudoProps {
  children: ReactNode;
}

const LupaConteudo: React.FC<LupaConteudoProps> = ({ children }) => {
  const { lupaConteudo } = useAcessibility();

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (lupaConteudo) {
      const text = event.currentTarget.textContent;
      console.log(text);
    }
  };

  return <div onMouseOver={handleMouseOver}>{children}</div>;
};

export default LupaConteudo;
