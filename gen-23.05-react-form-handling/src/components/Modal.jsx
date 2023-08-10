import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  judul: yup.string().required(),
  artis: yup.string().required(),
  tahun: yup
    .number()
    .integer("Tahun tidak boleh berbentuk desimal")
    .positive("Tahun tidak boleh negatif")
    .required(),
});

const Modal = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data, event) => {
    console.log(data);
    // setIsFormOpen(false);
  };
  return (
    <div className="w-full h-screen bg-black bg-opacity-50 absolute z-10 top-0 left-0 flex justify-center items-center px-52">
      <div className="bg-white rounded w-full flex flex-col py-12 px-20">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            {errors.judul?.message}
            <input
              type="text"
              id="judul"
              {...register("judul")}
              className="border outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="artist" className="font-bold">
              Artist
            </label>
            {errors.artis?.message}
            <input
              type="text"
              id="artis"
              {...register("artis")}
              className="border outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="year" className="font-bold">
              Year
            </label>
            {errors.tahun?.message}
            <input
              type="text"
              id="tahun"
              {...register("tahun")}
              className="border outline-none p-1"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 rounded text-white py-2 px-4 font-bold hover:bg-yellow-600 transition ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
