import type { NextPage } from "next";
import { Button, Icon } from "@mui/material";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-mediumseagreen h-[76px] shrink-0 overflow-hidden flex flex-row pt-[13px] pb-[9px] pr-0 pl-2.5 box-border items-center justify-start gap-[49px] text-center text-19xl text-white font-karla">
      <div className="relative inline-block w-[218px] h-[54px] shrink-0">
        Sheridan.VIP
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://devsheridan.substack.com/"
        target="_blank"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        NewsLetter SignUp
      </Button>
    </div>
  );
};

export default Header;
