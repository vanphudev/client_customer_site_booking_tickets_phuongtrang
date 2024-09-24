import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer__about">
                            <div className="footer__about__header">
                                <div className="footer__about__text">
                                    <h1>TRUNG TÂM TỔNG ĐÀI & CSKH</h1>
                                    <h6>1900 6067</h6>
                                </div>
                                <Link to="http://online.gov.vn/Home/WebDetails/14029">
                                     <img className="footer__about__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/logo_Sale_Noti_7dab1d54a1/logo_Sale_Noti_7dab1d54a1.png" alt="Logo"/>
                                </Link>
                               
                            </div>
                            <div className="footer__company-info">
                                <h1>CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES</h1>
                                <ul>
                                    <li className="contact-info">
                                        <span className="contact-label">ĐC:</span> <span className="contact-detail">Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam.</span>
                                    </li>
                                    <li className="contact-info">
                                        <span className="contact-label">Email:</span> <span className="contact-email">hotro@futa.vn</span>
                                    </li>
                                </ul>
                                <div className="contact-details">
                                    <div className="contact-info">
                                        <span className="contact-label">Điện thoại:</span> <span className="contact-detail">02838386852</span>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-label">Fax:</span> <span className="contact-detail">02838386852</span>
                                    </div>
                                </div>
                                <div className="footer__about__app__contact">
                                    <div className="footer__about__app">
                                        <div className="footer__about__app__contact__text">
                                            <h1>TẢI APP PUTA</h1>
                                        </div>
                                        <div className="footer__about__app__images">
                                            <Link to="https://play.google.com/store/apps/details?id=client.facecar.com">
                                                <img className="footer__about__app__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/CH_Play_712783c88a/CH_Play_712783c88a.svg" alt="CH Play Logo"/>
                                            </Link>
                                            <Link to="https://apps.apple.com/vn/app/futa/id1126633800">
                                                 <img className="footer__about__app__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/App_Store_60da92cb12/App_Store_60da92cb12.svg" alt="App Store Logo"/>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="footer__about__contact">
                                        <div className="footer__about__app__contact__text">
                                            <h1>LIÊN HỆ CHÚNG TÔI</h1>
                                        </div>
                                        <div className="footer__about__contact__images">
                                            <Link to="https://www.facebook.com/xephuongtrang">
                                            <img className="footer__about__contact__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/facebook_1830e1b97c/facebook_1830e1b97c.svg" alt="Facebook Logo"/>
                                            </Link>
                                            <Link to="https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber">
                                            <img className="footer__about__contact__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/youtube_d5ef476c0e/youtube_d5ef476c0e.svg" alt="YouTube Logo"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer__widget">
                            <div className="footer__widget__sections">
                                <div className="footer__widget__section">
                                    <h6>FUTA Bus Lines</h6>
                                    <ul>
                                        <li><Link to="">Về chúng tôi</Link></li>
                                        <li><Link to="">Lịch trình</Link></li>
                                        <li><Link to="">Tuyển dụng</Link></li>
                                        <li><Link to="">Tin tức & Sự kiện</Link></li>
                                        <li><Link to="">Mạng lưới văn phòng</Link></li>
                                    </ul>
                                </div>
                                <div className="footer__widget__section">
                                    <h6>Hỗ trợ</h6>
                                    <ul>
                                        <li><Link to="">Tra cứu thông tin đặt vé</Link></li>
                                        <li><Link to="">Điều khoản sử dụng</Link></li>
                                        <li><Link to="">Câu hỏi thường gặp</Link></li>
                                        <li><Link to="">Hướng dẫn đặt vé trên Web</Link></li>
                                        <li><Link to="">Hướng dẫn nạp tiền trên app</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer__Link">
                                    <div className="footer__Link__app__images">
                                        <Link to="https://futabus.vn/">
                                            <img className="footer__Link__app__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/Bus_Lines_817c989817/Bus_Lines_817c989817.svg" alt="CH Play Logo"/>
                                        </Link>
                                        <Link to="https://futaexpress.vn/">
                                            <img className="footer__Link__app__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/logo_futa_express_0ad93b22d3/logo_futa_express_0ad93b22d3.svg" alt="App Store Logo"/>
                                        </Link>
                                        <Link to="https://futaads.com/">
                                            <img className="footer__Link__app__img" src="https://cdn.futabus.vn/futa-busline-cms-dev/FUTA_Advertising_d0b60b3a45/FUTA_Advertising_d0b60b3a45.svg" alt="CH Play Logo"/>
                                        </Link>
                                        <Link to="https://futabus.vn/tin-tuc/tram-dung-chan-5-sao">
                                            <img className="footer__Link__app__img" src="https://cdn.futabus.vn/futa-busline-web-cms-prod/Tdcpl_1_5d2e395adc/Tdcpl_1_5d2e395adc.png" alt="App Store Logo"/>
                                        </Link>
                                    </div>
                            </div>
                    </div> 
                </div>

                 {/* footer bottom */}
                
            </div>
            <div className="footer__bottom">
                <div className="container_footer_bottom">
                    <div className="row">       
                        <div className="col-12 footer__bottom_about">
                            <ul>
                                <li>© 2023</li>
                                <li>Bản quyền thuộc về Công ty Cổ Phần Xe khách Phương Trang - FUTA Bus Lines 2023 </li>
                                <li> Chịu trách nhiệm quản lý nội dung: Ông Võ Duy Thành </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                    
            </div>
        </footer>
    );
};

export default memo(Footer);

