import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const CustomSelect = ({ name, form, label, list }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <Select
            dir="rtl"
            defaultValue={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger className="shadow shadow-primary">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {list.map((item) => (
                <SelectItem value={item.name} key={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
