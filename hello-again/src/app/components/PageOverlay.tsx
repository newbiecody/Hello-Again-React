'use client';
import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { isEventTargetDivElement } from "../utils";
import classNames from "classnames";

interface IPageOverlay {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  overwriteClassNames?: boolean;
}
const PageOverlay = ({
  children,
  isOpen,
  onClose,
  className,
  overwriteClassNames = false,
}: IPageOverlay) => {
  useEffect(() => {
    const handleKeyboardEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyboardEscape);
    return () => document.removeEventListener("keydown", handleKeyboardEscape);
  }, [onClose]);

  useEffect(() => {
    const handleMouseEscape = (event: MouseEvent) => {
      if (
        isEventTargetDivElement(event.target) &&
        event.target.getAttribute("id") === "overlay"
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleMouseEscape);
    return () => document.removeEventListener("click", handleMouseEscape);
  });

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      id="overlay"
      className={
        overwriteClassNames
          ? className
          : classNames(
              // "flex items-center justify-center",
              "absolute top-0 h-full w-screen bg-black bg-opacity-50",
              className
            )
      }
    >
      {children}
    </div>,
    document.body
  );
};

export default PageOverlay;
