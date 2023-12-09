import { FormField, FormItem, FormLabel } from "../ui/form";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";

const CustomDatePicker = ({ name, form, label }) => {
  const handleChange = (e) => {
    const date = new Date(e);

    form.setValue(name, date);
  };

  return (
    <FormField
      name={name}
      render={() => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <DatePicker
            className="rmdp-mobile"
            style={{
              height: "35px",
              fontWeight: "bold",
              border: "none",
              boxShadow:
                "0 1px 3px 0 hsl(221.2 83.2% 53.3%), 0 1px 2px -1px hsl(221.2 83.2% 53.3%)",
            }}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={form.getValues(name)}
            onChange={handleChange}
          />
        </FormItem>
      )}
    />
  );
};

export default CustomDatePicker;
