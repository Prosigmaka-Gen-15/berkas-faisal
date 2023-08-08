import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Modal = ({ id, onCloseModal }) => {
  console.log(id);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const getSongData = () => {
    axios.get("http://localhost:3000/songs/" + id).then((res) => {
      console.log(res.data);
      setValue("title", res.data.title);
      setValue("artist", res.data.artist);
      setValue("year", res.data.year);
    });
  };

  const onSubmit = async (data) => {
    try {
      if (id > 0) {
        await axios.patch("http://localhost:3000/songs/" + id, data);
      } else {
        await axios.post("http://localhost:3000/songs", data);
      }
      navigate("/");
      onCloseModal();
    } catch (error) {
      alert(error);
      console.log(error);
    }
    window.location.reload();
    window.alert("Successful!");
  };

  useEffect(() => {
    if (id > 0) getSongData();
  }, []);

  return (
    <div className="w-full h-screen bg-black bg-opacity-50 absolute z-10 top-0 left-0 flex justify-center items-center px-52">
      <div className="bg-white rounded w-full flex flex-col py-12 px-20 relative">
        <div className="absolute top-5 right-5">
          <i
            className="fa-solid cursor-pointer fa-xmark text-2xl"
            onClick={onCloseModal}
          ></i>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="border outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="artist" className="font-bold">
              Artist
            </label>
            <input
              type="text"
              id="artist"
              {...register("artist")}
              className="border outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="year" className="font-bold">
              Year
            </label>
            <input
              type="number"
              id="year"
              {...register("year")}
              className="border outline-none p-1"
              pattern="[0-9]+"
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
