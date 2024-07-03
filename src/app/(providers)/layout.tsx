import { ModalProvider } from "@/contexts/modal.context";
import QueryProvider from "@/providers/QueryProvider";
import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ModalProvider>{children}</ModalProvider>
    </QueryProvider>
  );
}

export default ProvidersLayout;
