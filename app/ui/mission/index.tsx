import {
  OutlineSend,
  ShapedBorderLeft,
  ShapedBorderRight,
} from "@/app/assets/svg";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import shape from "@/app/assets/pattern-right.png";
import { renderDescription } from "@/app/utils/helper";

interface Platform {
  name: string;
  textColor: string;
}

interface MissionProps {
  platform: Platform;
  icon: JSX.Element;
  link: string;
  description: string;
  boldParts: string[];
}

export const Mission: React.FC<
  MissionProps & { onFollowClick: () => void }
> = ({ platform, icon, link, description, boldParts, onFollowClick }) => {
  return (
    <div className="flex px-4 md:px-0 mb-10">
      <div className="flex md:block w-[40px]">
        <ShapedBorderLeft className="hidden md:block" />
        <Image
          src={shape}
          alt=""
          width={121}
          height={210}
          className="block md:hidden rotate-180 translate-x-[1px]"
        />
      </div>
      <div className="md:h-[70px] w-full border-gradient flex flex-col md:flex-row justify-between items-center">
        <div className="text-white flex items-center">
          <div className="flex flex-col sm:hidden items-center">
            <span className="whitespace-nowrap">
              {renderDescription(description, boldParts)}
            </span>
            <p className="flex items-center">
              on
              {icon}
              <span
                className={`flex items-center font-bold ${platform.textColor}`}
              >
                {platform.name}
              </span>
            </p>
          </div>
          <p className="hidden sm:flex items-center whitespace-nowrap">
            {renderDescription(description, boldParts)}on
            {icon}
            <span className={`font-bold ${platform.textColor}`}>
              {platform.name}
            </span>
          </p>
        </div>
        <Button
          variant="shaped-gradient"
          className="flex justify-center items-center"
          onClick={onFollowClick}
        >
          <span className="p-2">Follow </span> <OutlineSend />
        </Button>
      </div>
      <div className="flex md:block w-[40px] -translate-x-[1px]">
        <ShapedBorderRight className="hidden md:block" />
        <Image
          src={shape}
          alt=""
          width={121}
          height={210}
          className="block md:hidden"
        />
      </div>
    </div>
  );
};
