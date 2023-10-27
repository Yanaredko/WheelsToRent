import { useEffect, useState } from "react";
import CarItem from "../CarItem/CarItem";
import {
  FormWraper,
  List,
  SearchBtn,
  FormName,
  StyledSelectBrand,
  StyledSelectPrice,
  MileageInputsWraper,
  Label,
  LoadMoreBtn,
  WrapperLeft,
  WrapperRight,
  MileageInput,
} from "./Catalog.styled";

import makes from "../../../src/makes.json";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useSelector } from "react-redux";
import { getLoading } from "../../redux/Selectors";
import Loader from "../Loader/Loader";

export function createArrayWithStep(number, step) {
  const resultArray = [];
  for (let i = step; i <= number; i += step) {
    resultArray.push(i.toString());
  }
  return resultArray;
}

const cardsPerPage = 12;

const Catalog = ({ cars, fav }) => {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [priceStep, setPriceStep] = useState(10); // Додали state для цінового кроку
  const [startMiles, setStartMiles] = useState("");
  const [endMiles, setEndMiles] = useState("");

  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const loading = useSelector(getLoading);

  useEffect(() => {
    setFilteredCars(Array.isArray(cars) ? cars : []);
  }, [cars]);

  const minPrice = 30;
  const maxPrice = 500;

  const priceStepOptions = createArrayWithStep(maxPrice - minPrice, 10).map((step) => ({
    label: `${step}$`,
    value: step,
  }));

  const clear = () => {
    setModel("");
    setPrice("");
    setPriceStep(10); // Скидаємо ціновий крок до значення за замовчуванням
    setStartMiles("");
    setEndMiles("");
    setFilteredCars(Array.isArray(cars) ? cars : []);
  };

  const search = () => {
    setPage(1);
    let arr = Array.isArray(cars) ? [...cars] : [];

    // Фільтрація за маркою авто
    if (selectedBrand !== "") {
      arr = arr.filter(({ brand }) => brand === selectedBrand);
    }

    // Фільтрація за ціною
    if (price !== "") {
      const priceValue = Number(price);
      if (priceValue < minPrice) {
        alert(`Price cannot be less than ${minPrice}!`);
        return;
      } else if (priceValue > maxPrice) {
        alert(`Price cannot be greater than ${maxPrice}!`);
        return;
      }
      arr = arr.filter(({ rentalPrice }) => {
        const rentalPriceValue = Number(rentalPrice.substr(1));
        return rentalPriceValue <= priceValue;
      });
    }

    // Фільтрація за пробігом
    if (startMiles !== "" && endMiles !== "") {
      const startMilesInt = parseInt(startMiles, 10);
      const endMilesInt = parseInt(endMiles, 10);
      if (!Number.isInteger(startMilesInt) || !Number.isInteger(endMilesInt)) {
        alert("Mileage must be an integer without decimals, in the range from 1000 to 6620!");
        return;
      }
      if (startMilesInt < 1000 || endMilesInt > 6620) {
        alert("Mileage should be in the range of 1000 to 6620!");
        return;
      }
      arr = arr.filter(({ mileage }) => mileage >= startMiles && mileage <= endMiles);
    }

    setFilteredCars(arr);

    if (selectedBrand !== "" || price !== "" || (startMiles !== "" && endMiles !== "")) {
      if (filteredCars.length === 0) {
        alert("No cars matching your criteria found.");
      }
    }
  };

  const paginatedCars = filteredCars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(filteredCars.length / cardsPerPage);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FormWraper>
            <Label>
              <FormName>Car brand</FormName>
              <StyledSelectBrand
                placeholder="Select a car brand"
                options={makes}
                onChange={(selectedOption) => setSelectedBrand(selectedOption.value)}
                classNamePrefix={"select"}
                value={selectedBrand}
              />
            </Label>
            <Label>
              <FormName>Price/ 1 hour</FormName>
              <StyledSelectPrice
                placeholder="To $"
                options={priceStepOptions}
                onChange={(selectedOption) => setPrice(selectedOption.value)}
                classNamePrefix={"select"}
                value={price}
              />
            </Label>
            <Label>
              <FormName>Сar mileage / km</FormName>
              <MileageInputsWraper>
                <WrapperLeft>
                  From
                  <MileageInput
                    type="text"
                    onChange={(event) => setStartMiles(parseInt(event.target.value, 10))}
                  />
                </WrapperLeft>
                <WrapperRight>
                  To
                  <MileageInput
                    type="text"
                    onChange={(event) => setEndMiles(parseInt(event.target.value, 10))}
                  />
                </WrapperRight>
              </MileageInputsWraper>
            </Label>
            <SearchBtn type="button" onClick={search}>
              Search
            </SearchBtn>
            <SearchBtn type="button" onClick={clear}>
              Clear
            </SearchBtn>
          </FormWraper>
          {filteredCars.length > 0 ? (
            <>
              <List>
                {paginatedCars.map((car) => (
                  <CarItem key={car.id} fav={fav} car={car} />
                ))}
              </List>
              {totalPages !== page && (
                <LoadMoreBtn onClick={getPage} type="button">
                  Load more
                </LoadMoreBtn>
              )}
            </>
          ) : (
            <PageNotFound errorMessage="Opps... Something went wrong... Cars not found" />
          )}
        </>
      )}
    </>
  );
};

export default Catalog;
