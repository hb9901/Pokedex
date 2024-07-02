interface MoveChipProps {
  label: string;
}

function MoveChip({ label }: MoveChipProps) {
  return (
    <div className="flex items-center justify-center text-sm font-bold text-blue-400 border border-blue-200 rounded-full px-2 py-0.5">
      {label}
    </div>
  );
}

export default MoveChip;
