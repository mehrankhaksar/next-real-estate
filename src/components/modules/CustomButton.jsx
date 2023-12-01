import { Button } from "../ui/button";

import Loader from "./Loader";

const CustomButton = ({ signUp, disabled }) => {
  return (
    <Button
      className="w-full text-base font-bold"
      type="submit"
      disabled={disabled}
    >
      {disabled ? <Loader /> : signUp ? "ثبت نام" : "ورود"}
    </Button>
  );
};

export default CustomButton;
