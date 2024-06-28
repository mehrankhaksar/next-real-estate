"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Form } from "../ui/form";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { provinces, cities, categories } from "@/constants/lists";

import CustomTextInput from "./CustomTextInput";
import CustomSelect from "./CustomSelect";
import CustomRadioButton from "./CustomRadioButton";
import CustomDatePicker from "./CustomDatePicker";
import CustomTextInputList from "./CustomTextInputList";
import { DotsLoader } from "./CustomLoaders";

const AdvertisementForm = ({ advertisement }) => {
  const [ad, setAd] = React.useState(null);
  const [filteredCities, setFilteredCities] = React.useState([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      price: "",
      phoneNumber: "",
      province: "",
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
      setAd(advertisement);
    }
  }, []);

  React.useEffect(() => {
    form.reset({
      ...ad,
      constructionDate: new Date(advertisement?.constructionDate),
    });
  }, [ad]);

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
        toast.success(data.message, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });

        setTimeout(() => {
          router.push("/dashboard/my-advertisements");
          router.refresh();
        }, 1500);
      } else {
        toast.error(data.error, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });
      }
    } else {
      const res = await fetch("/api/dashboard/add-advertisement", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.message) {
        toast.success(data.message, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });

        setTimeout(() => {
          router.push("/dashboard/my-advertisements");
          router.refresh();
        }, 1500);
      } else {
        toast.error(data.error, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-2.5 sm:gap-5 sm:grid-cols-2"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CustomTextInput name="title" form={form} label="عنوان آگهی" />
        <CustomTextInput name="price" form={form} label="قیمت" />
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
        <div className="col-span-full">
          <CustomTextInput
            name="description"
            form={form}
            label="توضیحات"
            textarea
          />
        </div>
        <CustomRadioButton
          name="category"
          form={form}
          label="دسته بندی"
          list={categories}
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
            label="امکانات رفاهی"
          />
          <Separator className="hidden sm:block" orientation="vertical" />
          <CustomTextInputList name="rules" form={form} label="قوانین" />
        </div>

        <Button
          className="col-span-full font-semibold dark:text-accent-foreground"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <DotsLoader />
          ) : (
            `${advertisement ? "ویرایش" : "ثبت"} آگهی`
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AdvertisementForm;
