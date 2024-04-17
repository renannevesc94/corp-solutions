import { ReactNode } from "react";
import "./container.css";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <section className="container">{children}</section>;
}

export default Container;
