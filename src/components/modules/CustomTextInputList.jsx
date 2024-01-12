import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Trash2, Plus } from "lucide-react";

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
        <FormItem className="flex-1">
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <FormControl>
            <div className="space-y-2.5">
              {field.value.length
                ? field.value.map((item, index) => (
                    <div className="flex items-center gap-2.5" key={index}>
                      <Input
                        className="shadow shadow-primary"
                        value={item}
                        onChange={(e) => handleChange(e, field, index)}
                      />
                      <Button
                        className="w-fit h-fit p-2.5 rounded-full"
                        variant="destructive"
                        type="button"
                        onClick={() => handleRemove(field, index)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  ))
                : null}
            </div>
          </FormControl>
          <FormMessage />
          <Button
            className="w-fit inline-flex items-center font-bold"
            type="button"
            onClick={() => handleAdd(field)}
          >
            افزودن
            <Plus size={18} />
          </Button>
        </FormItem>
      )}
    />
  );
};

export default CustomTextInputList;
