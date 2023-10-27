import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { MainContainer } from "./Layout.styled";


const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;