"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Form } from "../ui/form";
import { Separator } from "../ui/separator";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { provinces, cities, categories } from "@/constants/lists";

import CustomTextInput from "./CustomTextInput";
import CustomSelect from "./CustomSelect";
import CustomRadioButton from "./CustomRadioButton";
import CustomDatePicker from "./CustomDatePicker";
import CustomTextInputList from "./CustomTextInputList";
import CustomButton from "./CustomButton";
import { DotsLoader } from "./CustomLoaders";

const AdvertisementForm = ({ advertisement }) => {
  const [filteredCities, setFilteredCities] = React.useState([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      price: "",
      phoneNumber: "",
      province: advertisement?.province || provinces[0].value,
      city: "",
      address: "",
      realEstate: "",
      description: "",
      category: "villa",
      amenities: [],
      rules: [],
      constructionDate: new Date(),
    },
  });

  React.useEffect(() => {
    if (advertisement) {
      form.reset({
        ...advertisement,
        constructionDate: new Date(advertisement.constructionDate),
      });
    }
  }, []);

  React.useEffect(() => {
    const province = provinces.find(
      (item) => item.value === form.getValues("province")
    );

    const filteredCities = cities.filter(
      (item) => item.province_id === province?.id
    );
    setFilteredCities([...filteredCities]);
  }, [form.watch("province")]);

  const onSubmit = async (values) => {
    if (advertisement) {
      const res = await fetch("/api/dashboard/edit-advertisement", {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.message) {
        form.reset();
        toast.success(data.message);
        router.refresh();
      } else {
        toast.error(data.error);
      }
    } else {
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
        router.refresh();
      } else {
        toast.error(data.error);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-2.5 sm:grid-cols-2 sm:gap-5"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CustomTextInput name="title" form={form} label="عنوان آگهی" />
        <CustomTextInput name="price" form={form} label="قیمت (تومان)" />
        <CustomTextInput name="phoneNumber" form={form} label="شماره تماس" />
        <CustomSelect
          name="province"
          form={form}
          label="استان"
          list={provinces}
        />
        {filteredCities.length ? (
          <CustomSelect
            name="city"
            form={form}
            label="شهر"
            list={filteredCities}
          />
        ) : null}
        <CustomTextInput name="address" form={form} label="آدرس" />
        <CustomTextInput name="realEstate" form={form} label="بنگاه" />
        <CustomTextInput
          name="description"
          form={form}
          containerStyles="col-span-full"
          label="توضیخات"
          textarea
        />
        <CustomRadioButton
          name="category"
          form={form}
          label="دسته بندی"
          radioItemsList={categories}
        />
        <CustomDatePicker
          name="constructionDate"
          form={form}
          label="تاریخ ساخت"
        />
        <div className="col-span-full flex flex-col sm:flex-row gap-5 sm:gap-10 mb-5">
          <CustomTextInputList
            name="amenities"
            form={form}
            containerStyles="flex-1"
            label="امکانات رفاهی"
          />
          <Separator className="hidden sm:block" orientation="vertical" />
          <CustomTextInputList
            name="rules"
            form={form}
            containerStyles="flex-1"
            label="قوانین"
          />
        </div>
        <CustomButton
          containerStyles="col-span-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <DotsLoader />
          ) : (
            `${advertisement ? "ویرایش" : "ثبت"} آگهی`
          )}
        </CustomButton>
      </form>
    </Form>
  );
};

export default AdvertisementForm;
