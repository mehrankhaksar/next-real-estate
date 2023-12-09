import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const CustomTextInput = ({
  name,
  form,
  containerStyles,
  label,
  textarea = false,
  type,
}) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl className="shadow shadow-primary">
            {textarea ? (
              <Textarea
                className="h-[150px] resize-none"
                type={type}
                {...field}
              />
            ) : (
              <Input type={type} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomTextInput;
