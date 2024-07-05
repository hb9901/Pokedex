"use client";

import { useModal } from "@/contexts/modal.context";
import { TMove } from "@/schemas/pokemon.type";

interface MovesBtnProps {
  moves: TMove[];
}
function MovesBtn({moves}:MovesBtnProps) {
  const modal = useModal();

  const handleBtnClick = () => {
    modal.open(moves);
  };

  return (
    <button
      className="bg-slate-500 font-bold px-5 py-2 text-white rounded-md"
      onClick={handleBtnClick}
    >
      기술 확인하기
    </button>
  );
}

export default MovesBtn;
