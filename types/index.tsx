import { ReactNode } from "react";

export interface CustomButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}

export interface CardProps {
  className: string;
}
export interface FetchDataProps {
  url?: string;
  setUrl: (url: string) => void;
}
