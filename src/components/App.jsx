import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchCarsThunk } from "../redux/Operations";

const HomePage = lazy(() => import("../pages/HomePage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;