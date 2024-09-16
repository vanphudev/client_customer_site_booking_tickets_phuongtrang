import React from 'react';
import { WrapperTypeHeader, WrapperTypeText, WrapperImage, WrapperLinkContainer } from './styleInvoice';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList } from '@fortawesome/free-solid-svg-icons';

const HeaderInvoice = () => {
  const arr = [
    { name: 'Tra cứu Hóa đơn', path: '/Invoice', icon: <FontAwesomeIcon icon={faMagnifyingGlass} style={{ backgroundColor: 'transparent' }} /> },
    { name: 'Xác thực hóa đơn', path: '/AuthenticationInvoice', icon: <FontAwesomeIcon icon={faTableList} style={{ backgroundColor: 'transparent' }} /> },
  ];

  return (
    <WrapperTypeHeader>
      <Row style={{ width: '100%', backgroundColor: 'transparent', alignItems: 'center' }}>
        {/* Cột 1: Hình ảnh */}
        <WrapperImage>
          <img
            alt="example"
            src="https://futabus.vn/_next/static/media/logo_new.8a0251b8.svg"
            style={{ width: '133px', height: '35px' }}
          />
        </WrapperImage>

        {/* Cột 2: Mảng arr */}
        <WrapperLinkContainer>
          {arr.map((item, index) => (
            <WrapperTypeText key={index}>
              {/* Render icon trực tiếp ở đây */}
              <span  style={{ color: '#fff', marginRight: '8px', backgroundColor: '#ff4500' }}>
                {item.icon} {/* Icon render tại đây */}
              </span>
              <Link to={item.path} className="text-link">
                {item.name}
              </Link>
            </WrapperTypeText>
          ))}
        </WrapperLinkContainer>
      </Row>
    </WrapperTypeHeader>
  );
};

export default HeaderInvoice;
