
import { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function InputType() {

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />);


  const ChangeTypeInput = () => {
    if (type === "password") {
      setType("text")
      setIcon(<FaEye />)
    }
    else if (type === "text") {
      setType("password")
      setIcon(<FaEyeSlash />)
    }
  }


  return (
    <div className='h-screen justify-center items-center flex'>
      <div className='bg-orange-400 flex py-2 px-4 rounded-xl'>
        <input type={type} name='firstName' placeholder='Enter your Password' className='focus:outline-none bg-transparent placeholder:text-gray-500' />
        <span onClick={ChangeTypeInput} className='pt-1' >{icon}</span>
      </div>
    </div>
  )
}