import React, { useState } from 'react';
import { Input, Form, Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const InputWrapper = ({ placeholder, type = 'input', ...rest }) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    setIsTouched(true);
  };

  const isError = isTouched && !value;

  return (
    <Form.Item
    validateStatus={isError ? 'error' : ''}
    help={isError ? `Vui lòng nhập lại ${placeholder.toLowerCase()}` : ''}
    style={{ position: 'relative', width: '100%' }}
  >
    {type === 'textarea' ? (
      <textarea
        value={value}
        onChange={handleChange}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        style={{ 
          width: '100%', 
          height: '100px', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          padding: '5px', 
          boxSizing: 'border-box', 
          paddingRight: '30px' 
        }}
        {...rest}
      />
    ) : (
      <Input
        value={value}
        onChange={handleChange}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        style={{ paddingRight: '30px' }} 
        {...rest}
      />
    )}
    {value && (
      <Tooltip title="Xóa dữ liệu">
        <CloseCircleOutlined
          onClick={handleClear}
          style={{
            position: 'absolute',
            left: 'auto',
            top: type === 'textarea' ? '100px' : '50%', // Đảm bảo đúng vị trí cho cả Input và textarea
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: '#ff4d4f',
            zIndex: 1,
          }}
        />
      </Tooltip>
    )}
  </Form.Item>
  
  );
};

export default InputWrapper;
