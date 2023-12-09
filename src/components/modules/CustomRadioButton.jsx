import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const CustomRadioButton = ({
  name,
  form,
  containerStyles,
  label,
  radioItemsList,
}) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              className="flex items-center gap-5"
              dir="rtl"
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {radioItemsList.map((item, index) => (
                <FormItem
                  className="flex items-center gap-1.5 font-bold text-primary bg-primary/20 py-1.5 px-3 rounded"
                  key={index}
                >
                  <FormControl>
                    <RadioGroupItem
                      className="border-[1.5px]"
                      value={item.value}
                    />
                  </FormControl>
                  <FormLabel className="font-bold">{item.label}</FormLabel>
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
