import ReduxProviders from "@/provider/ReduxProviders";
import { ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: React.FC<LayoutClientProps> = ({ children }) => {
  return <ReduxProviders>{children}</ReduxProviders>;
};
export default LayoutClient;
