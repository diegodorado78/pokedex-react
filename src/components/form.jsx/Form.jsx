import React from 'react'
import pokeball from '../../assets/pokeball.png'
import { useFormik } from "formik";

export default function Form() {
 const clearFormData = () => {
  formik.setFieldValue("id", '');
  formik.setFieldValue("name", '');
 }
 const handleSearch = (data) => {
  console.log(data);
  data.id || data.name ? setQuery(data.id || data.name.toLowerCase()) : false;
  return clearFormData()
 }
 const formik = useFormik({
  initialValues: {
   id: '',
   name: ''
  },
  onSubmit: handleSearch,
 })

  return (
    <>
    <div className='md:w-8/12 flex m-1 sm:mx-auto sm:h-auto flex-col sm:my-0 bg-white rounded-xl'>
     <img width='200px' className='mx-auto rounded-full shadow-2xl' src={pokeball} alt="poke-logo" />
     <h3 className='mx-auto my-4'>Buscar Pokemon</h3>
     <form className='flex flex-col text-center w-10/12 mx-auto my-2 justify-center' onSubmit={formik.handleSubmit}>
      <div className='flex justify-between'>
       <label htmlFor="id" className='w-3/12 my-auto'> Id</label>
       <input onChange={formik.handleChange} value={formik.values.id} type="text" name='id' className=' w-8/12 shadow-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm rounded   p-1.5 border border-gray-500' />
      </div>

      <div className='flex justify-between content-center'>
       <label className=' w-3/12 my-auto ' htmlFor="name"> Nombre </label>
       <input onChange={formik.handleChange} value={formik.values.name} type="text" name='name' className='w-8/12  flex content-center shadow-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm rounded  p-1.5 wy-auto my-2 border border-gray-500' />
      </div>

      <button className=" w-auto outline-0 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 sm:text-sm my-5 mx-auto"
       type='submit'>Enviar</button>
     </form>
    </div>

    </>
  )
}
