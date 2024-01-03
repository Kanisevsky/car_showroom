"use client"

import { CustomButtonProps } from '@/app/types'
function CustomButton({title, btnType, containerStyles, handleClick}: CustomButtonProps) {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick} >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
