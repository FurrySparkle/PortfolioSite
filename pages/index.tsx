import type { NextPage } from "next";
import Header from "../components/header";
import Contributions from "../components/contributions";
import dynamic from "next/dynamic";


const FrameComponent: NextPage = () => {

  




  return (
    <div className="relative bg-darkslategray w-full overflow-hidden flex flex-col items-start justify-start gap-[19px] text-center text-[16px] text-white font-inter">
      <Header />
      
      <Contributions />
      <div className="self-stretch flex flex-col items-center justify-start gap-[19px] text-sm font-roboto">
        <div className="relative text-[40px] font-karla inline-block w-[400px] h-[82px] shrink-0">
          Previous Work:
        </div>

        <a
          className="[text-decoration:none] relative w-[400px] h-[186px] shrink-0 overflow-hidden text-left text-[inherit]"
          href="https://www.twitch.tv/yesterdaytodayai/"
        >
          <div className="absolute top-[67px] left-[6px] tracking-[0.4px] leading-[24px] uppercase inline-block w-[396px] h-[108px]">
            <p className="m-0">
              Bury Me Software is a small indie team focused on PlayStation Games.
            </p>
            <p className="m-0">
              This is my main project currently.Please enjoy this Project as much as my friends and I do.
            </p>
          </div>
          <img
            className="absolute top-[5px] left-[0px] w-28 h-[62px] object-cover"
            alt=""
            src="/BuryMeLogo.png"
          />
        </a>


        <a
          className="[text-decoration:none] relative w-[400px] h-[142px] shrink-0 overflow-hidden text-left text-[inherit]"
          href="https://madao.io/"
        >
          <img
            className="absolute top-[26px] left-[0px] w-[106px] h-[89px] object-cover"
            alt=""
            src="/yanglogopng-1@2x.png"
          />
          <div className="absolute top-[26px] left-[92px] tracking-[0.4px] leading-[24px] uppercase inline-block w-[308px] h-[103px]">
            {`Mutual Aid DAO has been Aiding people in our community for 2 years. I built their current production website! `}
            <a
              className="text-[inherit]"
              href="https://madao.io/"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                https://madao.io/
              </span>
            </a>
          </div>
        </a>
        <a
          className="[text-decoration:none] relative w-[400px] h-[186px] shrink-0 overflow-hidden text-left text-[inherit]"
          href="https://airsupportpurifier.com/"
        >
          <div className="absolute top-[67px] left-[6px] tracking-[0.4px] leading-[24px] uppercase inline-block w-[396px] h-[108px]">
            <p className="m-0">
              Air Support is developing a 20$ high flow Air purifier and
              shifting the HVAC discussion to include bio-conditioning!
            </p>
            <p className="m-0">
              While this was a beta release I did put it together in the same
              meeting this website was discussed
            </p>
          </div>
          <img
            className="absolute top-[5px] left-[0px] w-28 h-[62px] object-cover"
            alt=""
            src="/aspbox-1@2x.png"
          />
        </a>
        <a className="[text-decoration:none] relative w-[400px] h-[114px] shrink-0 overflow-hidden text-xl text-[inherit]"
        href="https://github.com/FurrySparkle/PortfolioSite/blob/main/public/Resume.rtf" target="_blank" >
          <div className="absolute top-[15px] left-[29px] tracking-[0.4px] leading-[24px] uppercase inline-block w-[335px] h-[127px]">
            <p className="m-0">
              For my full work history please download my Resume here |
            </p>
            <p className="m-0">Resume.rtf</p>
          </div>
        </a>
        <div className="w-[400px] h-[123px] shrink-0 overflow-hidden flex flex-col py-3 px-[47px] box-border items-start justify-start text-xl">
          <div className="relative tracking-[0.4px] leading-[24px] uppercase inline-block w-[299px] h-[83px] shrink-0">
            Special Thanks to ConvAi, Epic Games, and all the marketplace
            creators.
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(FrameComponent), {ssr: false})

