import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const CustomRadioButton = ({ name, form, label, radioItemsList }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              className="flex items-center gap-5"
              dir="rtl"
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {radioItemsList.map((item, index) => (
                <div
                  className="flex items-center gap-1.5 text-primary bg-primary/20 p-3 rounded"
                  key={index}
                >
                  <RadioGroupItem
                    className="border-[1.5px]"
                    value={item.value}
                    checked={item.value === field.value}
                  />
                  <span className="text-sm font-bold">{item.label}</span>
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
