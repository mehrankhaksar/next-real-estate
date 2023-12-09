import { Button } from "../ui/button";

import Loader from "./Loader";

const CustomButton = ({ containerStyles, disabled, children }) => {
  return (
    <Button
      className={`w-full text-base font-bold ${containerStyles}`}
      type="submit"
      disabled={disabled}
    >
      {disabled ? <Loader /> : children}
    </Button>
  );
};

export default CustomButton;
