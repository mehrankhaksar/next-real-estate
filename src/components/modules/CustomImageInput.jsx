import { FormField, FormItem, FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";

const CustomImageInput = ({ name, form, label, inputStyles }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            <Input
              className={inputStyles}
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const file = e.target.files[0];

                  const reader = new FileReader();

                  reader.onloadend = () => {
                    field.onChange(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomImageInput;
