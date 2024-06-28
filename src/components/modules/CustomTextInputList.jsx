import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { RiDeleteBinLine, RiAddFill } from "@remixicon/react";

import { Button } from "../ui/button";

const CustomTextInputList = ({ name, form, label }) => {
  const handleAdd = (field) => {
    field.onChange([...field.value, ""]);
  };

  const handleChange = (e, field, index) => {
    const { value } = e.target;
    const newList = [...field.value];

    newList[index] = value;

    field.onChange(newList);
  };

  const handleRemove = (field, index) => {
    const newList = [...field.value];

    newList.splice(index, 1);

    field.onChange(newList);
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-base font-semibold">{label}</FormLabel>
          <FormControl>
            <div className="space-y-5">
              {field.value.map((item, index) => (
                <div className="flex items-center gap-1.5" key={index}>
                  <Input
                    value={item}
                    onChange={(e) => handleChange(e, field, index)}
                  />
                  <Button
                    className="rounded-full dark:bg-red-500 dark:hover:bg-red-600"
                    variant="destructive"
                    size="icon"
                    type="button"
                    onClick={() => handleRemove(field, index)}
                  >
                    <RiDeleteBinLine size={20} />
                  </Button>
                </div>
              ))}
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
          <Button
            className="w-fit flex items-center gap-0.5 text-sm font-semibold !mt-5 dark:text-accent-foreground"
            type="button"
            onClick={() => handleAdd(field)}
          >
            افزودن
            <RiAddFill size={20} />
          </Button>
        </FormItem>
      )}
    />
  );
};

export default CustomTextInputList;
