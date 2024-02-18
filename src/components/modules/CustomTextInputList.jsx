import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { Trash2, Plus } from "lucide-react";

import CustomButton from "./CustomButton";

const CustomTextInputList = ({ name, form, containerStyles, label }) => {
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
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl>
            <div className="space-y-2.5">
              {field.value.length
                ? field.value.map((item, index) => (
                    <div className="flex items-center gap-1.5" key={index}>
                      <Input
                        className="shadow shadow-primary"
                        value={item}
                        onChange={(e) => handleChange(e, field, index)}
                      />
                      <CustomButton
                        containerStyles="w-fit h-fit p-2.5 rounded-full"
                        variant="destructive"
                        handleClick={() => handleRemove(field, index)}
                      >
                        <Trash2 size={18} />
                      </CustomButton>
                    </div>
                  ))
                : null}
            </div>
          </FormControl>
          <FormMessage />
          <CustomButton
            containerStyles="w-fit inline-flex items-center gap-0.5 text-sm"
            handleClick={() => handleAdd(field)}
          >
            افزودن
            <Plus size={16} strokeWidth={3} />
          </CustomButton>
        </FormItem>
      )}
    />
  );
};

export default CustomTextInputList;
