import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const CustomImageInput = ({
  name,
  form,
  containerStyles,
  label,
  inputStyles,
}) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl className="shadow shadow-primary">
            <Input
              className={inputStyles}
              type="file"
              onChange={(e) => {
                if (e?.target?.files?.[0]) {
                  const file = e.target.files[0];

                  const reader = new FileReader();
                  reader.onloadend = () => {
                    field.onChange(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomImageInput;
