import {
  ButtonWraper,
  HomeContent,
  HomeContentText,
  LearnMore,
  HomeName
} from "./Home.styled";

function Home() {
  return (
      <HomeContent>
        <HomeContentText>
        <HomeName>Wheels To Rent</HomeName>
        <h2>Your dreams, our wheels!</h2>
        <p>
        At Wheels To Rent, we're not just another car rental service; we're your passport to unforgettable journeys.
        </p>
          <ButtonWraper>
            <LearnMore to="/catalog">Wheels To Rent Catalog</LearnMore>
          </ButtonWraper>
        </HomeContentText>

      </HomeContent>
   
  );
}

export default Home;