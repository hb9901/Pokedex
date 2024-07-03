'use client'

import MovesModal from "@/components/Modal/MovesModal";
import { TMove } from "@/schemas/pokemon.type";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ModalContextValue = {
  open: (moves: TMove[]) => void;
  close: () => void;
};

const initialValue = {
  open: () => {},
  close: () => {}
}

const ModalContext = createContext<ModalContextValue>(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
  const [moves, setMoves] = useState<TMove[] | []>([]);
  const value = {
    open: (moves: TMove[]) => {
      setMoves(moves);
    },
    close: () => {
      setMoves([]);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {moves.length !== 0 && <MovesModal moves={moves} />}
    </ModalContext.Provider>
  );
}
