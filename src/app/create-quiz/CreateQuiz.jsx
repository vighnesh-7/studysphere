"use client"

import React  from 'react'
import GenerateQuiz from './_components/GenerateQuiz'
import { SiOpenai } from "react-icons/si";

const CreateQuiz = ({token}) => {



  return (
    <div className='border'>
      <div className="flex gap-20 p-5 justify-center items-center font-semibold cursor-pointer">
        <div className={` ${isActive2} flex items-center `} onClick={() => setCurrentIndex(2)}>
          <SiOpenai className='w-6 h-6' />&nbsp;
          Generate using Ai
        </div>
      </div>
      <hr className=' bg-slate-950 ' style={{ height: '1.5px' }} />
      <GenerateQuiz  token={token} />
    </div>
  )
}

export default CreateQuiz