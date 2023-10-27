import Catalog from "../components/CarCatalog/Catalog";
import { useSelector } from "react-redux";
import { getFavorite } from "../redux/Selectors";

const Favorite = () => {
  const cars = useSelector(getFavorite);

  return <>{cars && <Catalog fav={true} cars={cars} />}</>;
};

export default Favorite;