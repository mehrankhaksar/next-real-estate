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
              className="grid grid-cols-2 lg:grid-cols-4"
              dir="rtl"
              value={field.value}
              onValueChange={field.onChange}
            >
              {list.map((item, index) => (
                <FormItem
                  className="flex justify-center items-center gap-1.5 text-primary bg-primary/20 p-2.5 rounded dark:text-accent-foreground dark:bg-accent"
                  key={index}
                >
                  <FormControl>
                    <RadioGroupItem
                      className="border-[1.5px]"
                      value={item.value}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-semibold">
                    {item.label}
                  </FormLabel>
                </FormItem>
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
