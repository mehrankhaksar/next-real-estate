import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

import { e2p, p2e } from "@/utils/helperFunctions";

const CustomTextInput = ({
  name,
  form,
  containerStyles,
  label,
  textarea = false,
}) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl className="shadow shadow-primary">
            {textarea ? (
              <Textarea
                className="h-[150px] resize-none"
                value={e2p(field.value)}
                onChange={(e) => field.onChange(p2e(e.target.value))}
              />
            ) : (
              <Input
                value={e2p(field.value)}
                onChange={(e) => field.onChange(p2e(e.target.value))}
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
