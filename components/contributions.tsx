import type { NextPage } from "next";
import { Button, Icon } from "@mui/material";

const Contributions: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col py-[27px] px-4 items-center justify-start gap-[36px]">
      <div className="self-stretch relative inline-block h-[51px] shrink-0">
        <p className="m-0">
          Yes, I’m the Dev who made OpenPulse converter.
        </p>
        <p className="m-0">
          The tool to use the BiFrost Pulse VR glove with games supported by OpenGloves Driver!
        </p>
      </div>
     
      <video  height="500" width="75%" controls src="DemoQT.ogv" ></video>
      <div className="relative w-[336px] h-[127px] shrink-0">
        <blockquote className="m-0 absolute top-[0px] left-[0px]">I’m looking for W2 employment. Experienced Dev across software disciplines. <a href="https://github.com/SparkleTech-VR/OpenPulseConverter/releases/tag/0.2.6">Check out the Repo here</a></blockquote >
      </div>
      <div className="w-[359px] h-14 shrink-0 overflow-hidden flex flex-row py-[9px] pr-0 pl-[7px] box-border items-center justify-start gap-[118px]">
        <Button
          variant="contained"
          color="primary"
          size="small"
          href="https://www.patreon.com/NotPublic"
          startIcon={<Icon>arrow_back_sharp</Icon>}
        >
          Support on Patreon!
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://buy.stripe.com/5kAbJS5ak7IK5c4145"
          target="_blank"
          endIcon={<Icon>arrow_forward_sharp</Icon>}
        >
          Donate
        </Button>
      </div>
    </div>
  );
};

export default Contributions;
