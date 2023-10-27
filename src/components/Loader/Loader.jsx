import { RotatingLines } from "react-loader-spinner";
import { LoaderWraper } from "./Loader.styled";

const Loader = () => {
  return (
      <LoaderWraper>
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderWraper>

  );
};

export default Loader;