interface AbilityChipProps {
  label: string;
}

function AbilityChip({ label }: AbilityChipProps) {
  return (
    <div className="flex items-center justify-center text-sm font-bold text-blue-700 border border-blue-700 rounded-full px-2 py-0.5">
      {label}
    </div>
  );
}

export default AbilityChip;
