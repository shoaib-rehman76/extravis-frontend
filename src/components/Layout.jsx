import { Wrapper } from "../Shared/Wrapper";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
      </Wrapper>
      {children}
      <Footer />
    </>
  );
};
