import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccout, WrapperHeaderIcon, WrapperHeaderSmall, WrapperStyleCombobox,WrapperTextCombobox, WrapperTypeText, WrapperTypeRow, WrapperTypeImg } from './style';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const HeaderComponent = () => {
  const arr = [
    { name: 'HOME', path: process.env.REACT_APP_PAGE_PATH_HOME_FIRST || '/' },
    { name: 'SCHEDULE', path: '/Schedule' },
    { name: 'MANAGE BOOKING', path: process.env.REACT_APP_PAGE_PATH_BOOKING_TICKET_MANAGER },
    { name: 'NEWS', path: process.env.REACT_APP_PAGE_PATH_NEWS },
    { name: 'INVOICE', path: process.env.REACT_APP_PAGE_PATH_INVOICE },
    { name: 'CONTACT', path: process.env.REACT_APP_PAGE_PATH_CONTACT }, 
    { name: 'ABOUT US', path: process.env.REACT_APP_PAGE_PATH_ABOUT_US },
  ];

  const arr2 = [
    { name: 'TRANG CHỦ', path: process.env.REACT_APP_PAGE_PATH_HOME_FIRST || '/' },
    { name: 'LỊCH TRÌNH', path: '/Schedule' },
    { name: 'TRA CỨU VỀ', path: process.env.REACT_APP_PAGE_PATH_BOOKING_TICKET_MANAGER },
    { name: 'TIN TỨC', path: process.env.REACT_APP_PAGE_PATH_NEWS },
    { name: 'HÓA ĐƠN', path: process.env.REACT_APP_PAGE_PATH_INVOICE },
    { name: 'LIÊN HỆ', path: process.env.REACT_APP_PAGE_PATH_CONTACT }, 
    { name: 'VỀ CHÚNG TÔI', path: process.env.REACT_APP_PAGE_PATH_ABOUT_US },
  ];

  const options1 = [
    {
      value: 'vietnam',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://futabus.vn/images/icons/vietnam.svg" alt="Vietnam Flag" style={{ width: '26px', marginRight: '8px' }} />
          VI
        </div>
      ),
    },
    {
      value: 'england',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://futabus.vn/images/icons/eng.svg" alt="England Flag" style={{ width: '26px', marginRight: '8px' }} />
          EN
        </div>
      ),
    },
  ];

  const options2 = [
    {
      value: 'android',
      label: (
        <Link to="https://play.google.com/store/apps/details?id=client.facecar.com">
            <div style={{ display: 'flex', alignItems: 'center' }}>ANDROID</div>
        </Link> 
      ),
    },
    {
      value: 'ios',
      label: (
        <Link to="https://apps.apple.com/vn/app/futa/id1126633800">
             <div style={{ display: 'flex', alignItems: 'center' }}>IOS </div>
        </Link>
      ),
    },
  ];


  const defaultOption21 = [{
    value: 'Tải ứng dụng',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://futabus.vn/images/icons/download_app.svg" alt="Download App" style={{ width: '26px', marginRight: '8px' }} />
        Tải ứng dụng
      </div>
    ),
  }];
  const defaultOption22 = [{
    value: 'Download App',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://futabus.vn/images/icons/download_app.svg" alt="Download App" style={{ width: '26px', marginRight: '8px' }} />
        Download App
      </div>
    ),
  }];
  // login/ logout
  const defaultOptionDNDK = {
    value: 'Đăng nhập/Đăng ký',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Đăng nhập/Đăng ký
      </div>
    ),
  };
  
  const defaultOptionInUp = {
    value: 'SignIn/SignUp',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        SignIn/SignUp
      </div>
    ),
  };
  
  const defaultOption1 = options1[0];
  const [value1, setValue1] = useState(defaultOption1);
  const [value2, setValue2] = useState(defaultOption21);
  const [value3, setValue3] = useState(defaultOptionDNDK);
  
  useEffect(() => {
    if (value1.value === 'vietnam') {
      setValue2(defaultOption21);
      setValue3(defaultOptionDNDK);
    } else {
      setValue2(defaultOption22);
      setValue3(defaultOptionInUp);
    }
  }, [value1]);

  const handleSelectChange1 = (selectedOption) => {
    setValue1(selectedOption);
  };

  const menuItems = value1.value === 'vietnam' ? arr2 : arr;

  return (
    <WrapperHeader gutter={20}>
      <Col span={9} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
        <WrapperStyleCombobox>
         <WrapperTextCombobox>
           <Select 
              options={options1} 
              defaultValue={defaultOption1}
              onChange={handleSelectChange1} 
              classNamePrefix="react-select"
             
            />
             </WrapperTextCombobox>
          <WrapperTextCombobox>
            <Select 
              options={options2} 
              defaultValue={value2}
              value={value2}
              classNamePrefix="react-select"
           
            />
          </WrapperTextCombobox>  
        </WrapperStyleCombobox>
      </Col>

      <Col span={6} style={{ display: 'flex', justifyContent: 'center', background: 'transparent' }}>
        <div className="logo-banner">
          <img
            alt="example"
            src="https://futabus.vn/_next/static/media/logo_new.8a0251b8.svg"
            style={{ width: '295px', height: '60px', marginBottom: '160px' }}
          />
        </div>
      </Col>
      
      <Col span={9} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
        <WrapperHeaderAccout>
          <WrapperHeaderIcon><UserOutlined /></WrapperHeaderIcon>
          <div>
            <WrapperHeaderSmall>{value3.label}</WrapperHeaderSmall>
          </div>
        </WrapperHeaderAccout>
      </Col>

      <WrapperTypeRow>
        {menuItems.map((item, index) => (
          <Col key={index} span={3} style={{ display: 'flex', background: 'transparent', justifyContent: 'center' }}>
            <WrapperTypeText>
              <Link 
                to={item.path} 
                className="text-link"
              >
                {item.name}
              </Link>
            </WrapperTypeText>
          </Col>
        ))}
      </WrapperTypeRow>

      <WrapperTypeImg>
        <img src="https://cdn.futabus.vn/futa-busline-web-cms-prod/web_ca16250b69/web_ca16250b69.png" alt="Image" />
      </WrapperTypeImg>
    </WrapperHeader>
  );
}

export default HeaderComponent;
