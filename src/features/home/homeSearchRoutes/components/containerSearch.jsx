import React from "react";
import {Radio} from "antd";
import {Select} from "antd";
import "../styles/styleSearch.scss";
import "../styles/styleOverrideAnt.scss";
import switch_location from "../../../../assets/icons/home/switch_location.svg";
import arrow_down_select from "../../../../assets/icons/home/arrow_down_select.svg";
import circle_checkbox_checked from "../../../../assets/icons/home/circle_checkbox_checked.svg";

const handleChange = (value) => {
   console.log(`selected ${value}`);
};
const ContainerSearch = () => {
   return (
      <>
         <section className='layout relative flex flex-col pt-40 2lg:pt-[28rem]'>
            <div className='home-search absolute z-30'>
               <div className='card-box-shadown relative mx-auto mb-10  h-[250px] w-full cursor-pointer rounded-xl object-cover 2lg:flex'>
                  <img
                     alt='Landing page banner'
                     className='transition-all duration-200 card-box-shadown relative mx-auto mb-10 h-[250px] w-full cursor-pointer rounded-xl object-cover 2lg:flex'
                     src='https://cdn.futabus.vn/futa-busline-web-cms-prod/web_ca16250b69/web_ca16250b69.png'
                     style={{position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent"}}
                  />
               </div>
               <div className='search-form m-2 font-medium 2lg:m-auto xl:w-[1128px]'>
                  <div className='flex items-center justify-between text-[15px]'>
                     <Radio.Group name='radiogroup' defaultValue={1}>
                        <Radio value={1} checked={true}>
                           One-way
                        </Radio>
                        <Radio value={2}>Round-trip</Radio>
                     </Radio.Group>
                     <span className=' cursor-pointer font-medium text-orange 2lg:contents'>
                        <a target='_blank' rel='noreferrer' href='/huong-dan-dat-ve-tren-web'>
                           Ticket booking guide
                        </a>
                     </span>
                  </div>
                  <div className='grid grid-cols-1 pb-4 pt-4 2lg:grid-cols-2 2lg:gap-4'>
                     <div className='relative flex justify-center 2lg:gap-4'>
                        <div className='flex-1'>
                           <label>Origin</label>
                           <div className='input-search item-start mt-1 flex w-full cursor-pointer font-medium 2lg:items-center undefined text-base 2lg:text-lg '>
                              <span className='max-w-[140px] truncate 2lg:max-w-[220px]'>
                                 An Nhơn
                                 <div className='text-[13px] font-normal leading-[15px] text-[#4A4A4A]' />
                              </span>
                           </div>
                        </div>
                        <img
                           className='switch-location bottom-6 h-8 w-8 2lg:bottom-3 2lg:h-10 2lg:w-10'
                           src={switch_location}
                           alt='switch location icon'
                        />
                        <div className='flex-1 text-right 2lg:text-left'>
                           <label>Destination</label>
                           <div className='input-search item-start mt-1 flex w-full cursor-pointer font-medium 2lg:items-center justify-end 2lg:justify-start text-base 2lg:text-lg '>
                              <span className='max-w-[140px] truncate 2lg:max-w-[220px]'>
                                 TP. Hồ Chí Minh
                                 <div className='text-[13px] font-normal leading-[15px] text-[#4A4A4A]' />
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className='divide my-3 2lg:hidden' />
                     <div className='flex'>
                        <div className='mr-4 flex flex-1 flex-col'>
                           <label>Depature date</label>
                           <div className='input-search item-start mt-1 flex w-full cursor-pointer font-medium 2lg:items-center undefined text-base 2lg:text-lg '>
                              <span className='max-w-[140px] truncate 2lg:max-w-[220px]'>
                                 01/09/2024
                                 <div className='text-[13px] font-normal leading-[15px] text-[#4A4A4A]'>
                                    <span>Sunday</span>
                                 </div>
                              </span>
                           </div>
                        </div>
                        <div className='flex flex-1 flex-col false'>
                           <label>Tickets</label>
                           <Select
                              defaultValue='lucy'
                              onChange={handleChange}
                              variant='normal'
                              single={false}
                              suffixIcon={
                                 <img width={"32px"} height={"32px"} src={arrow_down_select} alt='circle checkbox' />
                              }
                              menuItemSelectedIcon={<img src={circle_checkbox_checked} alt='circle checkbox' />}
                              className='select-search mt-1 border-none 2lg:block '
                              options={[
                                 {
                                    value: "jack",
                                    label: "Jack",
                                 },
                                 {
                                    value: "lucy",
                                    label: "Lucy",
                                 },
                                 {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                 },
                              ]}
                           />
                           <div className='select-search mt-2 flex w-14 items-center justify-between 2lg:hidden'>
                              <span>1</span>
                              <img alt='' width='32px' height='32px' src='/images/icons/arrow_down_select.svg' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='relative flex w-full justify-center'>
                     <button className='absolute z-10 h-12 rounded-full bg-orange px-20 text-base text-white transition duration-200'>
                        Search trip
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContainerSearch;
