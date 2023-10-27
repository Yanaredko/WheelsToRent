import PropTypes from "prop-types";
import { PageNotFoundWraper } from "./PageNotFound.styled";

const PageNotFound = ({ errorMessage }) => {
  return (
    <PageNotFoundWraper>
      <h2>{errorMessage}</h2>
    </PageNotFoundWraper>
  );
};

export default PageNotFound;

PageNotFound.propTypes = {
  errorMessage: PropTypes.string,
};