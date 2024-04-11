import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};
