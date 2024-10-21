import React, { useState } from 'react';
import { Button, Row, Col, Form } from "antd";
import InputWrapper from '../layouts/InputFormComponent/InputWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const Contact = () => {
  // State để quản lý việc mở/đóng của droplist
  const [isOpen, setIsOpen] = useState(false);

  // Hàm toggle để bật/tắt droplist
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const options1 = [
    {
      value: 'FUTA BUS LINES',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', width: '200px', marginTop: '10px',marginRight: '40px', marginLeft: '20px', borderRadius: '8px'}}>FUTA BUS LINES</div>
      ),
    },];
  const defaultOption1 = options1[0];
  const [value1, setValue1] = useState(defaultOption1);

  // Button nofication
  const [name, setName] = useState('');
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [phone, setPhone] = useState('');
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  const [title, setTitle] = useState('');
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [Note, setNote] = useState('');
  const [isNoteTouched, setIsNoteTouched] = useState(false);

  // Validation logic
  const isNameError = isNameTouched && !name;
  const isEmailError = isEmailTouched && !email;
  const isPhoneError = isPhoneTouched && !phone;
  const isTitleError = isTitleTouched && !title;
  const isNoteError = isNoteTouched && !Note;

  const handleSubmit = () => {
    // Do something when the form is submitted
    setIsNameTouched(true);
    setIsEmailTouched(true);
    setIsPhoneTouched(true);
    setIsTitleTouched(true);
    setIsNoteTouched(true);

    if (name && email && phone) {
      console.log("Form is valid");
    }
  };
  return (
    
    <Row gutter={16}>
     {/* Cột đầu tiên */}
     <Col span={9}>
        <div style={{ fontSize: '18px', color: '#000000',fontWeight: 'bold', backgroundColor: 'transparent', marginTop: '20px', marginLeft: '310px' }}>
          Liên hệ với chúng tôi
        </div>
        {/* Đây là phần để click mở nội dung */}
        <div style={{ display: 'flex', alignItems: 'center', color: '#000000', backgroundColor: 'transparent', marginTop: '10px', marginRight: '100px', cursor: 'pointer' }}
            onClick={toggleDropdown} 
          >
            <FontAwesomeIcon icon={faCaretRight} style={{color: "#bbbcbf", marginLeft: '320px'}} />
            <span style={{ marginLeft: '10px' }}>FUTA BUS LINES</span>
        </div>

        {/* Phần nội dung droplist sẽ hiển thị khi isOpen === true */}
        {isOpen && (
         <div style={{ marginLeft: '330px', marginTop: '10px', padding: '10px', backgroundColor: '#fff' }}>
         <p style={{ color: '#EF5222', fontSize: '18px' }}>
           CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES
         </p>
         <ul style={{ padding: '0', listStyleType: 'none' }}> {/* Xóa dấu chấm và padding của ul */}
           <li style={{ marginBottom: '10px' }}>Địa chỉ: <span style={{fontWeight: 'bold'}}>01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam</span></li>
           <li style={{ marginBottom: '10px' }}>Websize: <a href='https://futabus.vn/' style={{ color: '#000000' }} target="_blank" rel="noopener noreferrer">https://futabus.vn/</a></li>
           <li style={{ marginBottom: '10px' }}>Điện thoại: 02838386852</li>
           <li style={{ marginBottom: '10px' }}>Fax: 02838386852</li>
           <li style={{ marginBottom: '10px' }}>Email: hotro@futabus.vn</li>
           <li style={{ marginBottom: '10px' }}>Hotline: 19006067</li>
         </ul>
       </div>
       
        )}
      </Col>

      {/* Cột thứ hai */}
      <Col span={15} style={{ borderRadius: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px', justifyContent: 'center', background: '#fff', height: 'auto', marginRight: '290px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#EF5222',fontWeight: 'bold', backgroundColor: 'transparent', marginBottom: '10px', marginRight: '350px' }}>
            <img src="https://futabus.vn/images/icons/mail_send.svg" alt="Download App" style={{ width: '26px', marginRight: '8px' }} />
            Gửi thông tin liên hệ đến chúng tôi
          </div>
          <div style={{ width: '691px', height: '525px', borderRadius: '6px', background: '#f9f9f9', display: 'flex', flexDirection: 'column',  marginTop: '2px'  }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent'}}>
              <Select
                options={options1}
                defaultValue={defaultOption1}
                value={value1}
                onChange={(selectedOption) => setValue1(selectedOption)}
                isDisabled={true} 
                styles={{
                  container: (provided) => ({ ...provided, marginLeft: '2px' }), 
                }}
              />
              <Form.Item
                validateStatus={isNameError ? 'error' : ''}
                help={isNameError ? 'Vui lòng nhập họ và tên' : ''}
                onChange={(e) => setName(e.target.value)}
                style={{ marginLeft: '20px', width: '300px', marginTop: '25px' }} 
              >
                <InputWrapper style={{ height: '40px', width: '310px', marginLeft: '5px', marginTop: '25px'  }} placeholder="Họ và tên" />
              </Form.Item>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', marginTop: '2px' }}> {/* Giảm khoảng cách */}
              <Form.Item
                validateStatus={isEmailError ? 'error' : ''}
                help={isEmailError ? 'Vui lòng nhập Email' : ''}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: '10px', width: '320px' }} 
              >
                <InputWrapper style={{ height: '40px', width: '320px', marginLeft: '5px' }} placeholder="Email" />
              </Form.Item>
              <Form.Item
                validateStatus={isPhoneError ? 'error' : ''}
                help={isPhoneError ? 'Vui lòng nhập Điện thoại' : ''}
                onChange={(e) => setPhone(e.target.value)}
                style={{ marginLeft: '10px', width: '320px' }} 
              >
                <InputWrapper style={{ height: '40px', width: '315px', marginLeft: '5px' }} placeholder="Điện thoại" />
              </Form.Item>
            </div>

            <Form.Item
              validateStatus={isTitleError ? 'error' : ''}
              help={isTitleError ? 'Vui lòng nhập tiêu đề' : ''}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: '10px', width: '320px', marginTop: '0.5px' }} 
            >
              <InputWrapper style={{ height: '40px', width: '650px', marginLeft: '5px', marginTop: '5px' }} placeholder="Nhập tiêu đề" />
            </Form.Item>

            <Form.Item
              validateStatus={isNoteError ? 'error' : ''}
              help={isNoteError ? 'Vui lòng nhập ghi chú' : ''}
              onChange={(e) => setNote(e.target.value)}
              style={{ marginLeft: '10px', width: '320px', marginTop: '0.5px' }} 
            >
              <InputWrapper
                style={{
                  width: '650px',
                  height: '100px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '10px',
                  boxSizing: 'border-box',
                  marginTop: '0.5px', 
                  backgroundColor: '#fff',
                  marginLeft: '5px',
                  transition: 'border-color 0.3s'
                }}
                placeholder="Nhập ghi chú"
                onBlur={(e) => e.target.style.borderColor = '#fff'}
              />
            </Form.Item>

            <div style={{ textAlign: 'center', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <Button onClick={handleSubmit} style={{ width: '125px', height: '38px', backgroundColor: '#ff4500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '16px' }}>Gửi</span>
              </Button>
            </div>
          </div>

        </div>
      </Col>
    </Row>
  );
};

export default Contact;
