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

import { RiCalendarLine } from "@remixicon/react";

const CustomDatePicker = ({ name, form, label }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <RiCalendarLine className="absolute top-1/2 -translate-y-1/2 right-2.5 pointer-events-none" />
              <DatePicker
                className="rmdp-mobile"
                containerClassName="w-full h-10"
                inputClass="w-[50%] sm:w-full md:w-[50%] text-left bg-inherit py-2 px-3 border border-solid border-input rounded-md"
                calendarPosition="bottom-right"
                calendar={persian}
                locale={persian_fa}
                value={field.value}
                onChange={(e) => {
                  const date = new Date(e);
                  field.onChange(date);
                }}
              />
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomDatePicker;
