/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/button";
import { renderDescription } from "@/lib/helper";
import { GreenConicGradient, LogoGradientMission, TickCircle } from "@/assets/svg";
import Image from "next/image";
import joinToken from "@/assets/icons/join-token-raw.webp";
import { useEffect, useState } from "react";

interface ValidationState {
    [key: string]: { validating: boolean; validated: boolean };
  }
interface MissionContentProps {
  missionData: any;
  validationState: ValidationState;
  handleValidating: (missionKey: string, missionLink: string) => void;
  handleValidation: (missionKey: string) => void;
  missionKey: string;
  submitting: boolean;
  telegram_username: string;
  discord_tag: string;
  setTelegramUsername: React.Dispatch<React.SetStateAction<string>>;
  setDiscordTag: React.Dispatch<React.SetStateAction<string>>;
  setValidationState: React.Dispatch<React.SetStateAction<ValidationState>>
  // showMission1Form: boolean;
  // showMission2Form: boolean;
}

export const MissionContent: React.FC<MissionContentProps> = ({
  missionData,
  validationState,
  handleValidating,
  handleValidation,
  missionKey,
  submitting,
  telegram_username,
  discord_tag,
  setTelegramUsername,
  setDiscordTag,
  setValidationState
  // showMission1Form,
  // showMission2Form
}) => {
  console.log('mke', missionKey)
  const [showMission1Form, setShowMission1Form] = useState(false);
  const [showMission2Form, setShowMission2Form] = useState(false);

  console.log('showM1', showMission1Form)
  console.log('showM2', showMission2Form)

  const missionValidationState = validationState[missionKey] || {
    validating: false,
    validated: false,
  };

  const handleShowMissionForm = (missionKey: string) => {
    if (missionKey === "Mission-1") {
      setShowMission1Form(true);
      setShowMission2Form(false);
    } else if (missionKey === "Mission-2") {
      setShowMission2Form(true);
      setShowMission1Form(false);
    }
  };

  useEffect(() => {
        setShowMission2Form(false);
        setShowMission1Form(false);
        if (missionData) {
          const missionKey = `Mission-${missionData.id}`;
          setValidationState((prevState) => {
            // If the mission is already validated, keep its state
            if (prevState[missionKey]?.validated) {
              return prevState;
            }
            // Otherwise, reset only this mission's state
            return {
              ...prevState,
              [missionKey]: { validating: false, validated: false },
            };
          });
        }
      }, [setValidationState, missionData]);

  return (
    <div className="w-[90%] sm:w-3/4 mx-auto">
      <div className="flex justify-center items-center mt-4">
        <LogoGradientMission className="hidden sm:block" />{" "}
        <span className="translate-y-0.5 ml-3 text-white text-3xl sm:text-5xl font-bold">
          Missions
        </span>
      </div>
      <div className="h-[5px] w-full my-4 sm:my-10 rounded-sm modal-underline-bg"></div>
      <h2 className="text-lg sm:text-[25px] mb-4 sm:mb-10 text-center break-words">
        {renderDescription(missionData.description, missionData.boldParts)} on{" "}
        <span className={missionData.platform.textColor}>
          {missionData.platform.name}
        </span>
      </h2>
      {missionValidationState.validated ? (
        <div>
          <div className="relative flex mx-auto scale-75 sm:scale-100 w-fit mt-4 sm:mt-10 mb-6 sm:mb-14">
            <GreenConicGradient />
            <TickCircle className="absolute translate-x-5 translate-y-5" />
          </div>
        </div>
      ) : (
        <div className="border border-[#666] p-4 rounded-[10px] flex justify-center sm:justify-between mb-8 sm:mb-12 2xl:mb-16">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="bg-[linear-gradient(112deg,rgba(4,20,29,0.40)_14.96%,rgba(14,127,184,0.40)_85.38%)] h-20 w-20 rounded-full">
              <Image
                src={joinToken}
                alt="Join Token"
                width={1050}
                height={1050}
                className="scale-75 rounded-full"
              />
            </div>
            <div className="ml-0 sm:ml-2 mt-2 sm:mt-0">
              <p className="text-xl text-center sm:text-left text-[#ffffffcc] font-bold mb-1">
                {renderDescription(
                  missionData.description,
                  missionData.boldParts
                ).slice(1)}
              </p>
              <p className="text-xl font-semibold">
                <span className="text-[#8B98A5]">
                  @{missionData.handle || "handle"}
                </span>
                <span className="px-2">•</span>
                <a
                  href={missionData.link}
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault();
                    handleValidating(missionKey, missionData.link);
                    handleShowMissionForm(missionKey)
                  }}
                  className="text-[#6AC9FB] hover:underline transition duration-200"
                >
                  Follow
                </a>
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <a
              href={missionData.link}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                handleValidating(missionKey, missionData.link);
                handleShowMissionForm(missionKey)
              }}
              className="transition duration-200 scale-100 hover:scale-90 active:scale-100"
            >
              {missionData.icon}
            </a>
          </div>
        </div>
      )}
      {showMission1Form ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleValidation(missionKey);
          }}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <input
            type="text"
            value={telegram_username}
            onChange={(e) => setTelegramUsername(e.target.value)}
            placeholder="Your Telegram username e.g joineco"
            className="w-full border border-[#666] p-3 transition duration-200 rounded-[10px] bg-transparent"
          />
          <Button
            disabled={submitting}
            type="submit"
            className="mx-auto mt-2 mb-4 sm:mb-8"
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      ) : showMission2Form ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleValidation(missionKey);
          }}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <input
            type="text"
            value={discord_tag}
            onChange={(e) => setDiscordTag(e.target.value)}
            placeholder="Your Discord username e.g joineco"
            className="w-full border border-[#666] p-3 transition duration-200 rounded-[10px] bg-transparent"
          />
          <Button
            disabled={submitting}
            type="submit"
            className="mx-auto mt-2 mb-4 sm:mb-8"
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      ) : (
        <div className="flex justify-center">
          <Button
            disabled={missionValidationState.validating || missionValidationState.validated}
            onClick={() =>
              handleValidating(missionKey, missionData.link)
            }
            className="mx-auto mt-2 mb-4 sm:mb-8"
          >
            {missionValidationState.validating
              ? "Validating..."
            : missionValidationState.validated
              ? "Validated"
              : `Follow on ${missionData.platform.name}`}
          </Button>
        </div>
      )}
    </div>
  );
};
