import { ModalProvider } from "@/contexts/modal.context";
import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default ProvidersLayout;
