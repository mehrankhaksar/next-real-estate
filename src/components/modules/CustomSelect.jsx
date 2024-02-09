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

const CustomSelect = ({ name, form, containerStyles, label, list }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
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
                  <SelectItem value={item.value} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
