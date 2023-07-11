import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Box marginTop={225}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
