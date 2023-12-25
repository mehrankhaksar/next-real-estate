import { Button } from "../ui/button";

import { DotsLoader } from "./Loaders";

const CustomButton = ({ containerStyles, disabled, children }) => {
  return (
    <Button
      className={`w-full text-base font-bold ${containerStyles}`}
      type="submit"
      disabled={disabled}
    >
      {disabled ? <DotsLoader /> : children}
    </Button>
  );
};

export default CustomButton;
