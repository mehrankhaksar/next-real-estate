import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const CustomRadioButton = ({ name, form, label, list }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              className="grid grid-cols-2 sm:grid-cols-4"
              dir="rtl"
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {list.map((item, index) => (
                <div
                  className="flex justify-center items-center gap-1.5 text-primary bg-primary/20 p-2.5 rounded dark:text-accent-foreground dark:bg-accent"
                  key={index}
                >
                  <RadioGroupItem
                    id={index}
                    className="border-[1.5px]"
                    value={item.value}
                    checked={item.value === field.value}
                  />
                  <label className="text-sm font-semibold" htmlFor={index}>
                    {item.label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomRadioButton;
