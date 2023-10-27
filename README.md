WheelsToRent Application

This is the README for the WheelsToRent application, which is designed for a
company that provides car rental services in Ukraine. The application consists
of three main pages: a home page, a car catalog page, and a favorites page.
Below, we provide an overview of the technical specifications and features of
the application.

Technical Specifications

The application is built using React and utilizes React Router for routing.
Redux is used for state management. Axios is used for making API requests. The
application fetches data from a mock API service provided by
https://mockapi.io/. The mock API includes a resource called "adverts" with the
following fields: id, year, make, model, type, img, description,
fuelConsumption, engineSize, accessories, functionalities, rentalPrice,
rentalCompany, address, rentalConditions, and mileage. The application features
responsive and semantically valid fixed-width design. Pagination is implemented
on the backend, with 12 advertisements displayed per page. Features

Home Page The home page provides a general description of the services offered
by the company.

Car Catalog Page The car catalog page displays a list of cars with various
specifications.

Favorites Page The favorites page displays advertisements that the user has
added to their favorites. Users can add or remove advertisements from their
favorites list. The page retains the user's favorite selections even after a
page refresh.

Add to Favorites: Users can click a heart-shaped button on an advertisement to
add it to their favorites. The button color changes to indicate that it's a
favorite. Remove from Favorites: If an advertisement is already in the
favorites, clicking the heart-shaped button again will remove it from the list,
and the button color reverts to its original state.

Modal Window Clicking the "Learn more" button on an advertisement opens a modal
window with detailed information about the car and its rental conditions. Users
can close the modal window by clicking an "X" button, clicking outside the modal
(backdrop), or pressing the "Esc" key.

Contact Button The "Rental car" button functions as a link and allows users to
contact the company via the provided phone number (+380730000000).

Routing

The application uses React Router to define the following routes:

/: Home page with a general description of the company's services. /catalog: Car
catalog page with filtering options. /favorites: Favorites page displaying the
user's saved advertisements. If a user accesses a route that doesn't exist, they
will be redirected to the home page.
