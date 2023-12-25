import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

import { p2e } from "@/utils/numberConverter";

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
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl className="shadow shadow-primary">
            {textarea ? (
              <Textarea
                className="h-[150px] resize-none"
                onChange={(e) => form.setValue(name, p2e(e.target.value))}
                {...field}
              />
            ) : (
              <Input
                type={type}
                min={name === "price" ? 1 : null}
                onChange={(e) => form.setValue(name, p2e(e.target.value))}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomTextInput;
