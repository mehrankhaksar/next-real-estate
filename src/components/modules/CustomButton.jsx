import { Button } from "../ui/button";

const CustomButton = ({
  containerStyles,
  variant,
  type = "button",
  disabled,
  handleClick,
  children,
}) => {
  return (
    <Button
      className={`text-base font-bold ${containerStyles}`}
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
