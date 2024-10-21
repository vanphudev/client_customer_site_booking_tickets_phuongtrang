import React from "react";
import './style.scss';

const AnNhon = [
  {from: "An Nhơn",to: "TP. Hồ Chí Minh",type: "Giường",distance: "639km",time: "11 giờ 30 phút"},
  {from: "An Nhơn",to: "TP. Hồ Chí Minh",type: "Giường",distance: "660km",time: "13 giờ 46 phút"},
  {from: "An Nhơn",to: "TP. Hồ Chí Minh",type: "---",distance: "627km",time: "10 giờ 7 phút"}
];
const BacLieu = [
  {from: "Bảo Lộc",to: "TP. Hồ Chí Minh",type: "Giường",distance: "756km",time: "16 giờ 38 phút"}
];
const BaoLoc = [
  { from: "Bảo Lộc",type: "Limousine",distance: "650km",time: "15 giờ 30 phút"},
  {from: "Bảo Lộc",to: "Đà Nẵng",type: "Giường",distance: "756km",time: "16 giờ 38 phút"},
  {from: "Bảo Lộc",to: "Huế",type: "Giường",distance: "827km", time: "19 giờ"},
  {from: "Bảo Lộc",to: "Huế",type: "Limousine",distance: "900km",time: "18 giờ 30 phút"},
  {from: "Bảo Lộc",to: "Quảng Ngãi",type: "---",distance: "---",time: ""},
  {from: "Bảo Lộc", to: "TP. Hồ Chí Minh",type: "Limousine", distance: "165km", time: "5 giờ 21 phút"}
];

const BenTre = [
  {
    from: "Bến Tre",
    to: "TP. Hồ Chí Minh",
    type: "Limousine",
    distance: "75km",
    time: "5 giờ 21 phút"
  }
];

const BinhDuong = [
  {
    from: "Bình Dương",
    to: "Bình Dương",
    type: "Limousine",
    distance: "260km",
    time: "5 giờ 26 phút"
  },
  {
    from: "Bình Dương",
    to: "Cà Mau",
    type: "Limousine",
    distance: "317km",
    time: "6 giờ 21 phút"
  },
  {
    from: "Bình Dương",
    to: "Cà Mau",
    type: "Limousine",
    distance: "380km",
    time: "7 giờ 37 phút"
  },
  {
    from: "Bình Dương",
    to: "Hà Tiên",
    type: "Limousine",
    distance: "352km",
    time: "8 giờ 30 phút"
  },
  {
    from: "Bình Dương",
    to: "Rạch Giá",
    type: "Limousine",
    distance: "272km",
    time: "6 giờ 35 phút"
  },
  {
    from: "Bình Dương",
    to: "Sóc Trăng",
    type: "Limousine",
    distance: "255km",
    time: "5 giờ 26 phút"
  },
  {
    from: "Bình Dương",
    to: "Vĩnh Thuận (Kiên Giang)",
    type: "Gường",
    distance: "311km",
    time: "8 giờ"
  }
];
const BinhSon = [
  {
    from: "Bình Sơn",
    to: "Bảo Lộc",
    type: "Limousine",
    distance: "650km",
    time: "15 giờ 30 phút"
  }
];
const BuDang = [
  {
    from: "Bù Đăng",
    to: "TP. Hồ Chí Minh",
    type: "Limousine",
    distance: "163km",
    time: "5 giờ 30 phút"
  }
];
const BuonMaThuot = [
  {from: "Buôn Ma Thuột",to: "TP. Hồ Chí Minh",type: "---",distance: "---",time: ""},
  {from: "Buôn Ma Thuột",to: "TP. Hồ Chí Minh",type: "Gường",distance: "330km",time: "9 giờ 30 phút"},
  {from: "Buôn Ma Thuột",to: "TP. Hồ Chí Minh", type: "Gường",distance: "354km",time: "8 giờ"},
  {from: "Buôn Ma Thuột",to: "TP. Hồ Chí Minh",type: "Gường",distance: "435km",time: "9 giờ"
  }
];
const BXAnSương = [
  { from: "BX An Sương",to: "TP. Hồ Chí Minh",type: "Gường",distance: "966km",time: "20 giờ"},
  {from: "BX An Sương",to: "Quảng Ngãi",type: "Gường",distance: "820km",time: "16 giờ 37 phút"}
];
const CaMau = [
  { from: "Cà Mau",to: "Bình Dương",type: "Limousine",distance: "380km", time: "7 giờ 37 phút"},
  {from: "Cà Mau",to: "Bình Dương",type: "Limousine",distance: "317km",time: "6 giờ 21 phút"},
  {from: "Cà Mau",to: "Cần Thơ",type: "---",distance: "143km",time: "4 giờ"},
  {
    from: "Cà Mau",
    to: "Cần Thơ",
    type: "Gường",
    distance: "135km",
    time: "3 giờ"
  },
  {
    from: "Cà Mau",
    to: "Châu Đốc",
    type: "Gường",
    distance: "236km",
    time: "6 giờ 30 phút"
  },
  {
    from: "Cà Mau",
    to: "TP. Hồ Chí Minh",
    type: "Gường",
    distance: "282km",
    time: "6 giờ 30 phút"
  },
  {
    from: "Cà Mau",
    to: "TP. Hồ Chí Minh",
    type: "Gường",
    distance: "302km",
    time: "8 giờ"
  },
  {
    from: "Cà Mau",
    to: "TP. Hồ Chí Minh",
    type: "Limousine",
    distance: "311km",
    time: "8 giờ"
  }
];
const CamRanh = [
  {
    from: "Cam Ranh",
    to: "Đà Nẵng",
    type: "Gường",
    distance: "568km",
    time: "10 giờ 4 phút"
  },
  {
    from: "Cam Ranh",
    to: "TP. Hồ Chí Minh",
    type: "Gường",
    distance: "350km",
    time: "9 giờ"
  }
];
const CanTho = [
  {
    from: "Cần Thơ",
    to: "Cà Mau",
    type: "",
    distance: "144km",
    time: "4 giờ"
  },
  {
    from: "Cần Thơ",
    to: "Cà Mau",
    type: "Gường",
    distance: "135km",
    time: "3 giờ 33 phút"
  },
  {
    from: "Cần Thơ",
    to: "Châu Đốc",
    type: "",
    distance: "115km",
    time: "4 giờ 30 phút"
  },
  {
    from: "Cần Thơ",
    to: "Đà Lạt",
    type: "Gường",
    distance: "459km",
    time: "11 giờ"
  },
  {
    from: "Cần Thơ",
    to: "Châu Đốc",
    type: "Gường",
    distance: "166km",
    time: "5 giờ 30 phút"
  },
  {
    from: "Cần Thơ",
    to: "Châu Đốc",
    type: "Gường",
    distance: "190km",
    time: "4 giờ 4 phút"
  },
];
const CaoLanh = [
  {
    from: "Cao Lãnh",
    to: "TP. Hồ Chí Minh",
    type: "Gường",
    distance: "144km",
    time: "3 giờ"
  }
];
const ChauDoc = [
  {
    from: "Châu Đốc",
    to: "Cà Mau",
    type: "Gường",
    distance: "326km",
    time: "6 giờ 30 phút"
  },
  {
    from: "Châu Đốc",
    to: "Cần Thơ",
    type: "",
    distance: "115km",
    time: "4 giờ 30 phút"
  },
  {
    from: "Châu Đốc",
    to: "TP. Hồ Chí Minh",
    type: "Gường",
    distance: "240km",
    time: "6 giờ 15 phút"
  }
];
const DaLat = [
  {from: "Đà Lạt",to: "Cần Thơ",type: "Gường",distance: "457km",time: "11 giờ"},
  {from: "Đà Lạt", to: "Đà Nẵng",type: "Gường",distance: "757km",time: "17 giờ"},
  {from: "Đà Lạt",to: "Huế",type: "Gường",distance: "843km",time: "17 giờ"},
  {from: "Đà Lạt",to: "Nha Trang",type: "Limousine", distance: "130km", time: "4 giờ"},
  {from: "Đà Lạt", to: "Nha Trang", type: "---", distance: "137km",time: "4 giờ"},
  {from: "Đà Lạt", to: "Phan Thiết", type: "Limousine",distance: "163km",time: "4 giờ"},
  {from: "Đà Lạt", to: "Quảng Ngãi", type: "Gường",distance: "511km",time: "10 giờ 49 phút"},
  {from: "Đà Lạt", to: "TP. Hồ Chí Minh", type: "Limousine",distance: "310km",time: "8 giờ"},
  {from: "Đà Lạt", to: "TP. Hồ Chí Minh", type: "Limousine",distance: "305km",time: "8 giờ"},
  { from: "Đà Lạt", to: "TP. Hồ Chí Minh", type: "Gường",distance: "293km",time: "8 giờ"},
  {from: "Đà Lạt", to: "TP. Hồ Chí Minh", type: "Gường",distance: "294km",time: "8 giờ"},
  { from: "Đà Lạt", to: "TP. Hồ Chí Minh", type: "Gường",distance: "320km",time: "8 giờ"},
  { from: "Đà Lạt", to: "Vũng Tàu", type: "Limousine",distance: "318km",time: "9 giờ"}
];
const DaNang = [
  { from: "Đà Nẵng",to: "Bảo Lộc",type: "Gường",distance: "756km",time: "16 giờ 38 phút"},
  { from: "Đà Nẵng",to: "BX An Sương",type: "Gường",distance: "966km",time: "20 giờ"},
  { from: "Đà Nẵng",to: "Cam Ranh",type: "Gường",distance: "568km",time: "10 giờ 4 phút"},
  { from: "Đà Nẵng",to: "Đà Lạt",type: "Gường",distance: "666km",time: "17 giờ"},
  { from: "Đà Nẵng",to: "Đắk Nông",type: "Gường",distance: "636km",time: "12 giờ 12 phút"},
  { from: "Đà Nẵng",to: "Hà Nội",type: "Gường",distance: "736km",time: "14 giờ 38 phút"},
  { from: "Đà Nẵng",to: "Hà Nội",type: "Gường",distance: "766km",time: "18 giờ"},
  { from: "Đà Nẵng",to: "Nha Trang",type: "Gường",distance: "528km",time: "9 giờ 25 phút"},
  { from: "Đà Nẵng",to: "Nha Trang",type: "Gường",distance: "543km",time: "12 giờ"},
  { from: "Đà Nẵng",to: "Quy Nhơn",type: "---",distance: "---",time: ""},
  { from: "Đà Nẵng",to: "TP. Hồ Chí Minh",type: "Gường",distance: "957km",time: "20 giờ"},
  { from: "Đà Nẵng",to: "TP. Hồ Chí Minh",type: "Gường",distance: "850km",time: "20 giờ"}
];
const DaiLoc = [
  { from: "Đại Lộc",to: "TP. Hồ Chí Minh",type: "Gường",distance: "942km",time: "17 giờ 29 phút"}
];
const DaiNgai = [
  { from: "Đại Ngãi",to: "TP. Hồ Chí Minh",type: "Gường",distance: "230km",time: "6 giờ"}
];
const DakNong = [
  { from: "Đăk Nông",to: "Bảo Lộc",type: "Gường",distance: "636km",time: "12 giờ 12 phút"}
];
const DiLinh = [
  { from: "Di Linh",to: "TP. Hồ Chí Minh",type: "Limousine",distance: "198km",time: "6 giờ"}
];
const DonDuong = [
  { from: "Đơn Dương",to: "TP. Hồ Chí Minh",type: "Limousine",distance: "290km",time: "8 giờ "}
];
const DuyenHai = [
  { from: "Duyên Hải",to: "TP. Hồ Chí Minh",type: "Limousine",distance: "253km",time: "5 giờ "}
];
const GiaLai = [
  { from: "Gia Lai",to: "TP. Hồ Chí Minh",type: "Gường",distance: "515km",time: "12 giờ"}
];
const HaNoi= [
  { from: "Hà Nội",to: "Đà Nẵng",type: "Gường",distance: "763km",time: "14 giờ 38 phút"},
  { from: "Hà Nội",to: "Đà Nẵng",type: "Gường",distance: "764km",time: "18 giờ"},
  { from: "Hà Nội",to: "Huế",type: "Gường",distance: "654km",time: "12 giờ 50 phút"},
  { from: "Hà Nội",to: "Nam Định",type: "",distance: "79km",time: "2 giờ 30 phút"}
];


const ScheduleCard = ({ routes }) => {
  // Kiểm tra số lượng tuyến trong routes
  const shouldApplyScroll = routes.length > 3;

  return (
    <div className="schedule-card">
      <div
        className="flex w-full flex-col gap-[6px] text-left"
        style={shouldApplyScroll ? { height: '140px', overflowY: 'auto' } : {}}
      >
        {routes.map((route, index) => (
          <div className="ant-row items-center" key={index}>
            <div className="ant-col ant-col-6">
              <span className="font-medium text-orange">{route.from}</span>
              <img src="https://futabus.vn/images/icons/ic_double_arrow.svg" alt="arrow" className="mx-2" />
              <span>{route.to}</span>
            </div>
            <div className="ant-col ant-col-2">{route.type}</div>
            <div className="ant-col ant-col-3">{route.distance}</div>
            <div className="ant-col ant-col-4">{route.time}</div>
            <div className="ant-col ant-col-2">---</div>
            <div className="button-container">
            <button type="button" className="ant-btn ant-btn-round ant-btn-default button-default">
              <span>Tìm tuyến xe</span>
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RouteList = ({ routes }) => {
  const groupedRoutes = routes.reduce((acc, route) => {
    const from = route.from;
    if (!acc[from]) {
      acc[from] = [];
    }
    acc[from].push(route);
    return acc;
  }, {});

  return (
    <div className="route-list">
      {Object.keys(groupedRoutes).map((from, index) => (
        <ScheduleCard key={index} routes={groupedRoutes[from]} />
      ))}
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="wrapper-container-left">
        <div className="input-group">
          <div className="icon-search">
            <img src="https://futabus.vn/images/icons/search.svg" alt="search icon" />
            <input type="text" placeholder="Nhập điểm đi" className="input-field" />
          </div>
          <img className="switch-location" src="https://futabus.vn/images/icons/switch_location.svg" alt="switch location icon" />
          <div className="icon-search">
            <img src="https://futabus.vn/images/icons/search.svg" alt="search icon" />
            <input type="text" placeholder="Nhập điểm đến" className="input-field" />
          </div>
        </div>
      </div>
      <div className="schedule-card">
        <div className="schedule-header flex w-full flex-col gap-[6px] text-left">
          <div className="ant-row items-center">
            <div className="ant-col ant-col-6"><h2>Tuyến xe</h2></div>
            <div className="ant-col ant-col-2">Loại xe</div>
            <div className="ant-col ant-col-3">Quãng đường</div>
            <div className="ant-col ant-col-4">Thời gian hành trình</div>
            <div className="ant-col ant-col-2">Giá vé</div>
            <div className="button-container">
              <button type="button" className="ant-btn ant-btn-round ant-btn-default button-default">
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="route-container">
        <div className="route-list-container">
          <RouteList routes={AnNhon} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BacLieu} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BaoLoc} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BenTre} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BinhDuong} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BinhSon} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BuDang} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BuonMaThuot} />
        </div>
        <div className="route-list-container">
          <RouteList routes={BXAnSương} />
        </div>
        <div className="route-list-container">
          <RouteList routes={CaMau} />
        </div>
        <div className="route-list-container">
          <RouteList routes={CamRanh} />
        </div>
        <div className="route-list-container">
          <RouteList routes={CanTho} />
        </div>
        <div className="route-list-container">
          <RouteList routes={CaoLanh} />
        </div>
        <div className="route-list-container">
          <RouteList routes={ChauDoc} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DaLat} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DaNang} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DaiLoc} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DaiNgai} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DakNong} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DiLinh} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DonDuong} />
        </div>
        <div className="route-list-container">
          <RouteList routes={DuyenHai} />
        </div>
        <div className="route-list-container">
          <RouteList routes={GiaLai} />
        </div>
        <div className="route-list-container">
          <RouteList routes={HaNoi} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
