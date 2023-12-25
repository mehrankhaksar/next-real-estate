"use client";

import React from "react";

import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Trash2, Plus } from "lucide-react";

const CustomTextInputList = ({ form, name, containerStyles, label }) => {
  React.useEffect(() => {
    const newArray = form.getValues(name).filter((item) => item !== "");

    form.setValue(name, [...newArray]);
  }, [form.formState.isSubmitting]);

  const handleAdd = () => {
    form.setValue(name, [...form.getValues(name), ""]);
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newList = [...form.getValues(name)];

    newList[index] = value;
    form.setValue(name, newList);
  };

  const handleRemove = (index) => {
    const newList = [...form.getValues(name)];

    newList.splice(index, 1);
    form.setValue(name, newList);
  };

  return (
    <FormField
      name={name}
      render={() => (
        <FormItem className={containerStyles}>
          <FormLabel className="text-base font-extrabold">{label}</FormLabel>
          <div className="space-y-2.5">
            {form.getValues(name).length
              ? form.getValues(name).map((item, index) => (
                  <div className="flex items-center gap-2.5" key={index}>
                    <Input
                      className="shadow shadow-primary"
                      value={item}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <Button
                      className="w-fit h-fit p-2.5 rounded-full"
                      variant="destructive"
                      type="button"
                      onClick={() => handleRemove(index)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                ))
              : null}
          </div>
          <FormMessage />
          <Button
            className="w-fit inline-flex items-center font-bold"
            type="button"
            onClick={handleAdd}
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
