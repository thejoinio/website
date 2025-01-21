import React, { JSX } from "react";
import {
  OutlineSend,
} from "@/assets/svg";
import { Button } from "@/components/button";
import { renderDescription } from "@/lib/helper";

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
  MissionProps & { onFollowClick: () => void; isMissionValidated: boolean }
> = ({
  platform,
  icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  link,
  description,
  boldParts,
  onFollowClick,
  isMissionValidated,
}) => {
  return (
    <div className="flex px-4 md:px-0 mb-10">
      <div className="px-9 py-3 md:min-h-[70px] w-full gradient-border-mission relative flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-white flex items-center">
          <div className="flex flex-col xs:hidden items-center">
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
          <p className="hidden xs:flex items-center whitespace-nowrap">
            {renderDescription(description, boldParts)}on
            {icon}
            <span className={`font-bold ${platform.textColor}`}>
              {platform.name}
            </span>
          </p>
        </div>
        <Button
          variant="primary"
          className="justify-center items-center h-11"
          onClick={onFollowClick}
        >
          {isMissionValidated ? (
            <span className="min-w-[86px]">Done</span>
          ) : (
            <span className="flex items-center justify-center min-w-[86px] gap-2">
              <span className="">Follow </span> <OutlineSend className="mt-0.5" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};
