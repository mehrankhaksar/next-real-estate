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
  label,
  textarea = false,
  type = "text",
  placeholder,
}) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea className="h-32 resize-none" {...field} />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomTextInput;
