import React from "react";
import { useFormik } from "formik";

export default function Form({ setQuery }) {
  const clearFormData = () => {
    formik.setFieldValue("id", "");
    formik.setFieldValue("name", "");
  };
  const handleSearch = (data) => {
    console.log(data);
    data.id || data.name ? setQuery(data.id || data.name.toLowerCase()) : false;
    return clearFormData();
  };
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    onSubmit: handleSearch,
  });

  return (
    <>
      <div className=" flex mt-1 md:mt-0 sm:mx-auto sm:h-auto flex-col sm:my-0 bg-red-600 rounded-xl w-full  border-2 border-gray-800">
        <h3 className="mx-auto my-4 text-center text-white">Buscar Pokemon</h3>
        <form
          className="flex flex-col text-center w-10/12 mx-auto my-2 justify-center text-white"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-between content-center">
            <input
              onChange={formik.handleChange}
              value={formik.values.id}
              type="text"
              name="id"
              placeholder="ID"
              className=" w-full shadow-md  text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm rounded   p-1.5 border border-gray-500"
            />
          </div>

          <div className="flex justify-between content-center ">
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
              placeholder="Nombre"
              className=" w-full flex content-center shadow-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm rounded  p-1.5  my-2 border border-gray-500"
            />
          </div>

          <button
            className=" w-auto outline-0 rounded-md bg-green-700 px-2 py-2 text-white hover:bg-green-600 sm:text-sm my-5 mx-auto"
            type="submit"
          >
            Consultar
          </button>
        </form>
      </div>
    </>
  );
}
