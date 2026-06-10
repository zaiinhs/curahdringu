import { Box } from "@chakra-ui/react";
import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";
import { HeadComponent } from "../Head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <HeadComponent title={title} description={description} />
      <NavbarComponent />
      <Box as="main" flex="1">
        {children}
      </Box>
      <FooterComponent />
    </Box>
  );
};
