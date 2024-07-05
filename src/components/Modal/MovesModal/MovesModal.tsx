"use client";
import MoveChip from "@/components/Chip/MoveChip";
import { useModal } from "@/contexts/modal.context";
import { TMove } from "@/schemas/pokemon.type";
import BackDrop from "../BackDrop";

interface MovesModalProps {
  moves: TMove[] | [];
}

function MovesModal({ moves }: MovesModalProps) {
  const modal = useModal();
  const handleCloseBtnClick = () => {
    modal.close();
  };

  return (
    <BackDrop>
      <div className="bg-white flex flex-col items-center rounded-md">
        <div className="bg-blue-300 flex flex-col items-center p-4 rounded-t-md w-full">
          <h5 className="font-bold text-xl">기술 목록</h5>
        </div>
        <div className=" grid grid-cols-6 gap-x-1 gap-y-1.5 p-4">
          {moves.map((move, index) => (
            <MoveChip key={index} label={move.move.korean_name} />
          ))}
        </div>
        <button
          className="bg-blue-300 px-7 py-0.5 mb-4 text-white rounded-md"
          onClick={handleCloseBtnClick}
        >
          닫기
        </button>
      </div>
    </BackDrop>
  );
}

export default MovesModal;
