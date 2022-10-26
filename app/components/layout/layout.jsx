import  Navbar  from "./Navbar";
import  Footer  from "./Footer";
import react from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
