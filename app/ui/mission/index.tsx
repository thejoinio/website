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

function ButtonShapeLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="40"
      fill="none"
      viewBox="0 0 25 40"
      className="inline-flex absolute -left-[25px] group-hover:translate-x-[0.2px] translate-x-[0.9px] h-10"
    >
      <path
        fill="#1D1D1D"
        fillOpacity="0.05"
        d="M24.567 40c-2.434 0-4.692-.568-5.957-1.497L4.47 28.038c-5.401-3.998-5.401-12.079 0-16.076L18.61 1.496C19.875.567 22.133 0 24.567 0v40z"
      ></path>
      <path
        fill="url(#paint0_linear_1_3190)"
        fillOpacity="0.2"
        d="M24.567 40c-2.434 0-4.692-.568-5.957-1.497L4.47 28.038c-5.401-3.998-5.401-12.079 0-16.076L18.61 1.496C19.875.567 22.133 0 24.567 0v40z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_3190"
          x1="-5.101"
          x2="28.903"
          y1="8"
          y2="11.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8940FF"></stop>
          <stop offset="1" stopColor="#66FECB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function ButtonShapeRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="40"
      fill="none"
      viewBox="0 0 25 40"
      className="inline-flex absolute -right-[25px] -translate-x-[0.7px] h-10"
    >
      <path
        fill="#1D1D1D"
        fillOpacity="0.05"
        d="M.566 40c2.434 0 4.691-.568 5.957-1.497l14.14-10.465c5.401-3.998 5.401-12.079 0-16.076L6.523 1.496C5.257.567 3 0 .566 0v40z"
      ></path>
      <path
        fill="url(#paint0_linear_1_3195)"
        fillOpacity="0.2"
        d="M.566 40c2.434 0 4.691-.568 5.957-1.497l14.14-10.465c5.401-3.998 5.401-12.079 0-16.076L6.523 1.496C5.257.567 3 0 .566 0v40z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_3195"
          x1="23.708"
          x2="-2.936"
          y1="8"
          y2="10.234"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66FECB"></stop>
          <stop offset="1" stopColor="#8940FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

const FollowBtn = ({ isDone, onClick }: { isDone: boolean, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button
    onClick={onClick}
      style={{
        background:
          "linear-gradient(98deg, rgba(102, 254, 203, 0.20) 6.1%, rgba(137, 64, 255, 0.20) 103.66%), rgba(29, 29, 29, 0.05)",
      }}
      className="group relative inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 hover:scale-95 mx-[12px] h-10 px-2 text-[15px] font-semibold text-white w-[86px]"
    >
      <ButtonShapeLeft />
      {isDone ? (
        <span className="mt-0.5">Done</span>
      ) : (
        <>
          <span className="mt-0.5">Follow</span>{" "}
          <OutlineSend className="ml-2 mt-1" />
        </>
      )}
      <ButtonShapeRight />
    </button>
  );
};

export const Mission: React.FC<
  MissionProps & { onFollowClick: () => void; isMissionValidated: boolean }
> = ({
  platform,
  icon,
  link,
  description,
  boldParts,
  onFollowClick,
  isMissionValidated,
}) => {
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
          className="justify-center items-center"
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
