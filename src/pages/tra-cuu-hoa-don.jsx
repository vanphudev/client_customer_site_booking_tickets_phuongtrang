import React, { useState, useEffect } from "react";
import InputFormComponent from "../layouts/InputFormComponent/InputFormComponent";
import { Button, Row } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faSync } from '@fortawesome/free-solid-svg-icons';

const Invoice = () => {
   const [secretCode, setSecretCode] = useState('');
   const [verificationCode, setVerificationCode] = useState('');
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   useEffect(() => {
      if (secretCode.trim() !== '' && verificationCode.trim() !== '') {
         setIsButtonDisabled(false);  
      } else {
         setIsButtonDisabled(true);  
      }
   }, [secretCode, verificationCode]);

   return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '100px', justifyContent: 'center', background: '#fff', height: 'auto' }}>
         <div style={{ width: '448px', height: '313.08px', borderRadius: '6px', background: '#cccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
            <div style={{ color: '#EF5222', backgroundColor: 'transparent', marginLeft: '10px', marginBottom: '10px' }}>Tra cứu hóa đơn</div>
            
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f5f8', height: '35px', width: '35px', marginBottom: '5px', marginLeft: '10px', borderRadius: '5px' }}>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#ccc", fontSize: '16px' }} />
               </div>
               <InputFormComponent
                  style={{ height: '35px', width: '350px', marginBottom: '10px' }}
                  placeholder="Mã số bí mật"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}  
               />
            </div>
            
            <Row style={{ backgroundColor: 'transparent' }}>
               <img
                  alt="example"
                  src="data:image/jpeg;base64,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"
                  style={{ width: '180px', height: '45px', marginLeft: '10px', marginTop: '10px' }}
               />
               <FontAwesomeIcon icon={faSync} style={{ color: '#63E6BE', marginRight: '8px', backgroundColor: 'transparent', width: '41px', height: '41px', marginLeft: '20px', marginTop: '10px' }} />
            </Row>
            
            <InputFormComponent
               style={{ height: '35px', width: '400px', marginLeft: '10px', marginTop: '20px' }}
               placeholder="Nhập mã xác thực"
               value={verificationCode}
               onChange={(e) => setVerificationCode(e.target.value)}  
            />

            <div style={{ textAlign: 'center', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
               <Button
                  style={{ width: '125px', height: '38px', backgroundColor: '#5867dd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                  disabled={isButtonDisabled}  
               >
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff', marginRight: '8px', backgroundColor: 'transparent' }} />
                  <span style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '16px' }}>Tra cứu</span>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Invoice;
