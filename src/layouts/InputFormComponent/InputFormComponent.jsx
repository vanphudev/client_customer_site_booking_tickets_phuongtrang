import React, { useState } from 'react'
import { Input } from 'antd'
import { WrapperInputStyle } from './style'

const InputFormComponent = ({placeholder='Nhập Text', ...rest }) => {
    const [valueInput, setvalueInput]=useState('')
  return (
    <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rest} />
  )
}

export default InputFormComponent