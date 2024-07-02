import { PropsWithChildren } from "react";

type DetailForm = {
  label: string;
};

function DetailForm({ label, children }: PropsWithChildren<DetailForm>) {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <span className="font-bold">{label}:</span>
      {children}
    </div>
  );
}

export default DetailForm;
