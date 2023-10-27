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
  const [startMiles, setStartMiles] = useState("");
  const [endMiles, setEndMiles] = useState("");

  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);

  const loading = useSelector(getLoading);

  useEffect(() => {
    setFilteredCars(Array.isArray(cars) ? cars : []); // Перевірка на масив та ініціалізація порожнього масиву, якщо не масив
  }, [cars]);

  const minPrice = 30;
  const maxPrice = 500;

  const priceOptions = makes
  .filter((item) => item >= minPrice)
  .map((item) => ({ label: item, value: item }));

  const clear = () => {
    setModel("");
    setPrice("");
    setStartMiles("");
    setEndMiles("");
    setFilteredCars(Array.isArray(cars) ? cars : []); // Оновлення filteredCars, щоб завжди був масив
  };

  const search = () => {
    setPage(1);
    let arr = Array.isArray(cars) ? [...cars] : []; // Тут також перевірка на масив та створення копії cars якщо це масив

    switch (true) {
      case model !== "" && !/^[a-zA-Z\s]+$/i.test(model):
        alert("Car brand should contain only EN letters !");
        return;

      case price !== "":
        const priceValue = Number(price);
        if (priceValue < minPrice) {
          alert(`Price cannot be less than ${minPrice}!`);
          return;
        } else if (priceValue > maxPrice) {
          alert(`Price cannot be greater than ${maxPrice}!`);
          return;
        }

        arr = arr
          .filter(({ rentalPrice }) => Number(rentalPrice.substr(1)) <= priceValue)
          .sort((a, b) => a.rentalPrice - b.rentalPrice);
        break;

      case startMiles === "" && endMiles !== "":
        arr = arr.filter(({ mileage }) => mileage <= endMiles);
        break;

      case startMiles !== "" && endMiles === "":
        arr = arr.filter(({ mileage }) => mileage >= startMiles);
        break;

      case startMiles > endMiles && endMiles !== "":
        alert("Mileage is incorrect!");
        return;

      case startMiles !== "" && endMiles !== "":
        const startMilesInt = parseInt(startMiles, 10);
        const endMilesInt = parseInt(endMiles, 10);
        if (!Number.isInteger(startMilesInt) || !Number.isInteger(endMilesInt)) {
          alert(
            "Mileage must be an integer without decimals, in the range from 1000 to 6620!"
          );
          return;
        }
        if (startMilesInt < 1000 || endMilesInt > 6620) {
          alert("Mileage should be in the range of 1000 to 6620!");
          return;
        }
        arr = arr.filter(
          ({ mileage }) => mileage >= startMiles && mileage <= endMiles
        );
        break;

      default:
        arr.sort((a, b) => {
          const priceA = Number(a.rentalPrice.substr(1));
          const priceB = Number(b.rentalPrice.substr(1));

          if (priceA === priceB) {
            return a.mileage - b.mileage;
          }

          return priceA - priceB;
        });
    }

    setFilteredCars(arr);

    if (model !== "" || price !== "" || startMiles !== "" || endMiles !== "") {
      if (filteredCars.length === 0) {
        alert("No cars matching your criteria found.");
      }
    }

    return arr;
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
                  placeholder="Enter the text"
                  options={makes}
                  onChange={(event) => setModel(event.value)}
                  classNamePrefix={"select"}
                  value={model === "" ? "" : { value: model, label: model }}
                />
              </Label>
              <Label>
                <FormName>Price/ 1 hour</FormName>
                <StyledSelectPrice
                  placeholder="To $"
                  options={priceOptions}
                  onChange={(event) => setPrice(event.value)}
                  classNamePrefix={"select"}
                  value={
                    price === "" ? "" : { value: price, label: `To ${price}$` }
                  }
                />
              </Label>
              <Label>
                <FormName>Сar mileage / km</FormName>
                <MileageInputsWraper>
                  <WrapperLeft>
                    From
                    <MileageInput
                      type="text"
                      onChange={(event) => setStartMiles(event.target.value)}
                    />
                  </WrapperLeft>
                  <WrapperRight>
                    To
                    <MileageInput
                      type="text"
                      onChange={(event) => setEndMiles(event.target.value)}
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


export default Catalog
