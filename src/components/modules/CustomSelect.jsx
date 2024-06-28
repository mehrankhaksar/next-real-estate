import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
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
          <Select dir="rtl" value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={label} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {list.map((item) => (
                <SelectItem
                  className="cursor-pointer"
                  value={item.value}
                  key={item.id}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
