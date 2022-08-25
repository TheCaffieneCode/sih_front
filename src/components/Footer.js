import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Logo from "../images/header_logo.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import ChatBot from 'react-simple-chatbot';
import img1 from '../images/imp/img1.png';
import img2 from '../images/imp/img2.png';
import img3 from '../images/imp/img3.png';
import img4 from '../images/imp/img4.png';
import img5 from '../images/imp/img5.png';
import img6 from '../images/imp/img6.png';
import img7 from '../images/imp/img7.png';
import img8 from '../images/imp/img8.png';
import img9 from '../images/imp/img9.png';
import img10 from '../images/imp/img10.png';
import img11 from '../images/imp/img11.png';
import img12 from '../images/imp/img12.png';
import img13 from '../images/imp/img13.png';
import img14 from '../images/imp/img14.png';

const Footer = () => {

  const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        trigger: '1',
    }, 
    {
        id: '1',
        message: 'Please write your username',
        trigger: '2',
    }, 
    {
        id: '2',
        user: true,
        trigger: '3',
    }, 
    {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
    },
    {
      id: '4',
      message: "You can fill contact form , thus we can contact you",
      end: true,
  }
];
  const ImportantLink = [
    {
      logo: img1,
      link: "https://niepmd.tn.nic.in/",
    },
    {
      logo: img2,
      link: "https://www.niepid.nic.in/",
    },
    {
      logo: img3,
      link: "http://nivh.gov.in/index.php",
    },
    {
      logo: img4,
      link: "https://thenationaltrust.gov.in/content/",
    },
    {
      logo: img5,
      link: "http://www.nhfdc.nic.in/",
    },
    {
      logo: img6,
      link: "https://www.islrtc.nic.in/",
    },
    {
      logo: img7,
      link: "https://www.alimco.in/",
    },
    {
      logo: img8,
      link: "https://www.niohkol.nic.in/",
    },
    {
      logo: img9,
      link: "http://www.svnirtar.nic.in/",
    },
    {
      logo: img10,
      link: "http://www.iphnewdelhi.in/Home.aspx?ReturnUrl=%2f",
    },
    {
      logo: img11,
      link: "https://www.ayjnihh.nic.in/",
    },
    {
      logo: img12,
      link: "https://www.nimhr.ac.in/",
    },
    {
      logo: img13,
      link: "https://www.rehabcouncil.nic.in/",
    },
    {
      logo: img14,
      link: "https://www.swavlambancard.gov.in/",
    },
  ]
  const settings = {
    infinite: true,
    // dots: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    // lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const Logos = [
    {
      id: 0,
      src: "https://www.swavlambancard.gov.in/images/logo-mygov.png",
      link: "http://india.gov.in/",
    },
    {
      id: 1,
      src: "https://www.swavlambancard.gov.in/images/logo-chied-commissioner-gov.png",
      link: "http://www.ccdisabilities.nic.in/",
    },
    {
      id: 2,
      src: "https://www.swavlambancard.gov.in/images/logo-india-gov.png",
      link: "https://mygov.in/",
    },
  ];
  const config = {
    botAvatar: "img.png",
    floating: true,
};
 
  return (
    <>
      <div className="mt-16">

        <h1 className="w-full text-2xl font-bold text-center">Important Links</h1>
        <div className="w-full h-42 p-4 overflow-y-hidden overflow-x-scroll">
        <Slider {...settings}>
          {ImportantLink.map(item=>{
              return(
                <div className="w-42 h-42 px-4 inline-block">
                  <a href={item.link}>
                    <img src={item.logo} alt="profilwe"/>
                  </a>
                </div>
              );
            })}
          </Slider>  
        </div>
      </div>
      <div>
      <ChatBot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
      />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {Logos.map((item, index) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div key={index}>
              <img src={item.src} alt="LOGO" />
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10 py-2 bg-gray-300 h-screen sm:h-[400px] md:h-[200px] w-full">
        <div className="">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-xl font-bold">सहदिव्या</h1>
          </div>
          <span className="">
            Here you can apply for the schemes and avail benifits.
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="px-3 py-1 font-semibold text-xl">Also Visit</span>
          <NavLinks text="Home" link="/" />
          <NavLinks text="Records" link="/record" />
          <NavLinks text="About Disabilities" link="/About-disablity/" />
          <NavLinks text="Profile" link="/profile" />
        </div>
        <div className="flex flex-col items-start">
          <span className="px-3 py-1 font-semibold text-xl">
            Important Links
          </span>
          <NavLinks text="Help" link="/help" />
          <NavLinks text="Contact Us" link="/contact-us" />
          <NavLinks text="Terms & Conditions" link="/terms-and-conditions/" />
          <div className="px-3 py-1 space-x-5">
            <FacebookIcon className="hover:cursor-pointer hover:text-blue-600 duration-300" />
            <InstagramIcon className="hover:cursor-pointer hover:text-pink-700 duration-300" />
            <TwitterIcon className="hover:cursor-pointer hover:text-blue-500 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const NavLinks = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-3 py-1 rounded-md hover:cursor-pointer hover:opacity-40 duration-300"
    >
      <div className="text-center">
        <div className="text-sm">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};
