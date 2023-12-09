"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Form } from "../ui/form";
import { Separator } from "../ui/separator";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { provinces, cities, radioItemsList } from "@/constants/list";

import CustomTextInput from "./CustomTextInput";
import CustomSelect from "./CustomSelect";
import CustomRadioButton from "./CustomRadioButton";
import CustomTextInputList from "./CustomTextInputList";
import CustomDatePicker from "./CustomDatePicker";
import CustomButton from "./CustomButton";

const AddAdvertisementForm = ({ formStyles }) => {
  const [filteredCities, SetFilteredCities] = React.useState([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      provinces: "",
      cities: "",
      address: "",
      phoneNumber: "",
      price: "",
      realEstate: "",
      category: "",
      amenities: [],
      rules: [],
      constructionDate: new Date(),
    },
  });

  const onSubmit = async (values) => {
    const res = await fetch("/api/dashboard/add-advertisement", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.message) {
      form.reset();
      toast.success(data.message);
      router.push("/dashboard/my-advertisements");
    } else {
      toast.error(data.error);
    }
  };

  React.useEffect(() => {
    const province = provinces.find(
      (item) => item.name === form.getValues("provinces")
    );

    const filteredCities = cities.filter(
      (item) => item.province_id === province?.id
    );
    SetFilteredCities([...filteredCities]);
  }, [form.watch("provinces")]);

  return (
    <Form {...form}>
      <form
        className={formStyles}
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CustomTextInput
          name="title"
          form={form}
          label="عنوان آگهی"
          type="text"
        />
        <CustomTextInput
          name="phoneNumber"
          form={form}
          label="شماره تماس"
          type="text"
        />
        <CustomTextInput
          name="price"
          form={form}
          label="قیمت (تومان)"
          type="text"
        />
        <CustomSelect
          name="provinces"
          form={form}
          label="استان"
          list={provinces}
        />
        {filteredCities.length ? (
          <CustomSelect
            name="cities"
            form={form}
            label="شهر"
            list={filteredCities}
          />
        ) : null}
        <CustomTextInput name="address" form={form} label="آدرس" type="text" />
        <CustomTextInput
          name="realEstate"
          form={form}
          label="بنگاه"
          type="text"
        />
        <CustomTextInput
          name="description"
          form={form}
          containerStyles="col-span-full"
          label="توضیخات"
          textarea
          type="text"
        />
        <CustomRadioButton
          name="category"
          form={form}
          containerStyles="col-start-1"
          label="دسته بندی"
          radioItemsList={radioItemsList}
        />
        <CustomDatePicker
          name="constructionDate"
          form={form}
          label="تاریخ ساخت"
        />
        <div className="col-span-full flex gap-10 mb-5">
          <CustomTextInputList
            form={form}
            name="amenities"
            containerStyles="w-full flex flex-col"
            label="امکانات رفاهی"
          />
          <Separator orientation="vertical" />
          <CustomTextInputList
            form={form}
            name="rules"
            containerStyles="w-full flex flex-col"
            label="قوانین"
          />
        </div>
        <CustomButton
          containerStyles="col-span-full"
          disabled={form.formState.isSubmitting}
        >
          ثبت آگهی
        </CustomButton>
      </form>
    </Form>
  );
};

export default AddAdvertisementForm;
