import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";

const CustomDatePicker = ({ name, form, label }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl>
            <DatePicker
              className="rmdp-mobile"
              style={{
                width: "50%",
                height: "35px",
                border: "none",
                boxShadow:
                  "0 1px 3px 0 hsl(221.2 83.2% 53.3%), 0 1px 2px -1px hsl(221.2 83.2% 53.3%)",
              }}
              containerStyle={{ width: "100%" }}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              value={field.value}
              onChange={(e) => {
                const date = new Date(e);
                field.onChange(date);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomDatePicker;
