import { TMove } from "@/schemas/pokemon.type";

interface MovesModalProps {
  moves: TMove[] | [];
}

function MovesModal({ moves }: MovesModalProps) {
  console.log(moves)
  return <div>MovesModal</div>;
}

export default MovesModal;
