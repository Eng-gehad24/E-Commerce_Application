import React from 'react'
import Slider from "react-slick";
import img1 from "../images/41nN4nvKaAL._AC_SY200_.jpg"
import img2 from "../images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
import img3 from "../images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg"
import img4 from "../images/zhab.jpg"
import img5 from "../images/baby.jpg"
export default function MainSlider() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows:false
  };
  return (
    <>
    <div className="row overflow-hidden w-100 mx-auto mt-5">
      <div className="col-6 p-0">
      <Slider {...settings}>
      <div>
        <img src={img1} alt={img1}className='w-50  my-5 ms-5' />
      </div>
    <div>
        <img src={img4} alt={img4}className='w-50  my-5 ms-5' />
      </div>
      <div>
      <img src={img5} alt={img5} className='w-50  my-5 ms-5'/>
      </div>
    </Slider>
      </div>
      <div className="col-6 p-0 mt-5">
      <img src={img2} alt={img2} className='w-50 ' />
      <div className="col-md-6">
      <img src={img3} alt={img3} className='w-100' />
      </div>
     
      </div>
    </div>
    </>
  )
}