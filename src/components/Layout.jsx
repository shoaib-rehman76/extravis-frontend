import { Wrapper } from "../Shared/Wrapper";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
      </Wrapper>
      {children}
    </>
  );
};
