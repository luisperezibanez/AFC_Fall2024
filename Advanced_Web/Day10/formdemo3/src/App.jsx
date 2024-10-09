import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"
import { object, string, number } from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

function App() {

  const userSchema = object({
    fname: string().required("Enter First name").max(5, "Must be less than 5 characters"),
    lname: string(),
    age: number().required("Enter your age").min(21, "Must be older than 21"),
    email: string()
        .required("Enter your email")
        .email("Must be a valid email address") // Validate email format

  })

  const { register, handleSubmit, setValue, reset, formState: { errors }} = useForm({
    resolver: yupResolver(userSchema)
  });

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
  }

  const onSubmit = (data) => {
    console.log(data)
    reset();
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">
          First Name:
          <input type="text" {...register("fname")} id="fname" onChange={handleChange}/>
          {errors.fname && <span className="error-message">{errors.fname.message}</span>}
        </label>
        <label htmlFor="lname">
          Last Name:
          <input type="text" {...register("lname")} id="lname" onChange={handleChange}/>
        </label>
        <label htmlFor="age">
          Age:
          <input type="number" {...register("age")} id="age" onChange={handleChange}/>
          {errors.age && <span className="error-message">{errors.age.message}</span>}
        </label>
        <label htmlFor="email">
          email:
          <input type="email" {...register("email")} id="email" onChange={handleChange}/>
        </label>
        <label htmlFor="pass">
          Password:
          <input type="password" {...register("pass")} id="pass" onChange={handleChange}/>
        </label>
        <button type="submit" className="button">Submit</button>
      </form>
    </>
  )
}

export default App
