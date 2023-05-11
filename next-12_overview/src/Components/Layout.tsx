import React from "react";
import LayoutStyles from "@/styles/Layout.module.css";
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={LayoutStyles.conatiner}>
        <main className={LayoutStyles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
