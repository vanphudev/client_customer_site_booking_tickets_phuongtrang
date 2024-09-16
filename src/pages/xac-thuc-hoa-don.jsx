import React, {useState, useEffect}from "react";
import InputFormComponent from "../layouts/InputFormComponent/InputFormComponent";
import { Button, Row } from "antd";
//import { ReactComponent as SearchIcon } from '../assets/images/svg/searchIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'; 
import { faSync} from '@fortawesome/free-solid-svg-icons'; 
const Invoice = () => {
   const [fileCode, setFileCode] = useState('');
   const [vertification, setVertification] = useState('');
   const [isButtonDisable, setIsButtonDisable] = useState(true);

   useEffect(() => {
      if (fileCode.trim() !== '' && vertification.trim() !== '') {
         setIsButtonDisable(false);
      } else {
         setIsButtonDisable(true);
      }
   }, [fileCode, vertification]);

   return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '100px', justifyContent: 'center', background: '#fff', height: 'auto' }}>
         <div style={{ width: '448px', height: '313.08px', borderRadius: '6px', background: '#cccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
            <div style={{ color: '#EF5222', backgroundColor: 'transparent', marginLeft: '10px', marginBottom: '10px'}}>Xác thực hóa đơn</div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent'}}>
                <InputFormComponent style={{ height: '35px', width: '360px', marginBottom: '10px', marginLeft: '10px' }} placeholder="Chọn file XML" value={fileCode} onChange={(e) => setFileCode(e.target.value)} />
               <div  style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center',  backgroundColor: '#f4f5f8',  height: '35px',   width: '35px',    marginBottom: '5px',  marginRight: '10px',borderRadius: '5px'}}>
                  <FontAwesomeIcon icon={faPaperclip}  style={{ color: "#0d0d0d",  fontSize: '16px'}} />
               </div>
            </div>
            <Row style={{ backgroundColor: 'transparent' }}>
               <img
                  alt="example"
                  src="data:image/jpeg;base64,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"
                  style={{ width: '180px', height: '45px', marginLeft: '10px', marginTop: '10px' }}
               />
                 <FontAwesomeIcon icon={faSync} style={{ color: '#63E6BE', marginRight: '8px', backgroundColor: 'transparent', width: '41px', height: '41px', marginLeft: '20px', marginTop: '10px'}} />
            </Row>
            <InputFormComponent style={{ height: '35px', width: '400px', marginLeft: '10px', marginTop: '20px'}} placeholder="Nhập mã xác thực" value={vertification} onChange={(e)=> setVertification(e.target.value)} />
            
            <div style={{ textAlign: 'center', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
               <Button style={{ width: '125px', height: '38px', backgroundColor: '#5867dd', display: 'flex', alignItems: 'center', justifyContent: 'center' }} disabled={isButtonDisable} >
                  {/* <SearchIcon style={{ width: '24px', height: '24px', color: '#fff', marginRight: '8px' }} /> */}
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff', marginRight: '8px', backgroundColor: 'transparent' }} />
                  <span style={{ backgroundColor: 'transparent', color: '#fff', fontSize: '16px' }}>Tra cứu</span>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Invoice;
