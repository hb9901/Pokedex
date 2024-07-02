"use client";
import { useModal } from "@/contexts/modal.context";
import { MouseEvent, PropsWithChildren } from "react";

function BackDrop({ children }: PropsWithChildren) {
  const modal = useModal();
  const handleBackClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      modal.close();
    }
  };

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 flex items-center justify-center"
      onClick={(e) => handleBackClick(e)}
    >
      {children}
    </div>
  );
}

export default BackDrop;
