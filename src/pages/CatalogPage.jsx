import { useSelector } from "react-redux";

import Catalog from "../components/CarCatalog/Catalog";

import { getCars } from "../redux/Selectors";

const CatalogPage = () => {
  const cars = useSelector(getCars);

  return (
    <>
      <Catalog cars={cars} />
    </>
  );
};

export default CatalogPage;