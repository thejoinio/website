"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { checkAllMissionsCompleted, MissionData } from "../missions";
import {
  GreenConicGradient,
  LoadingIndicator,
  LogoGradientMission,
  TickCircle,
  TimesIcon,
} from "@/app/assets/svg";
import { Button } from "../button";
import { renderDescription } from "@/app/utils/helper";
import joinToken from "@/app/assets/images/join-token.webp";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

interface ModalProps {
  isOpen: boolean;
  missionData: MissionData | undefined;
  onClose: () => void;
  setAllMissionsCompleted: Dispatch<SetStateAction<boolean>>;
}
interface ValidationState {
  [key: string]: { validating: boolean; validated: boolean };
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  missionData,
  onClose,
  setAllMissionsCompleted,
}) => {
  const { toast } = useToast();
  const [validationState, setValidationState] = useState<ValidationState>({});
  const [showMission1Form, setShowMission1Form] = useState(false);
  const [showMission2Form, setShowMission2Form] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [telegram_username, setTelegramUsername] = useState("");
  const [discord_tag, setDiscordTag] = useState("");

  const STORAGE_KEY = "validatedMissions";
  const VALIDATION_TIMEOUT = 10000;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMissions = localStorage.getItem(STORAGE_KEY);
      if (storedMissions) {
        const parsedValidatedMissions = JSON.parse(storedMissions);
        setValidationState((prevState) => ({
          ...prevState,
          ...Object.keys(parsedValidatedMissions).reduce((acc, key) => {
            acc[key] = {
              validating: false,
              validated: parsedValidatedMissions[key],
            };
            return acc;
          }, {} as ValidationState),
        }));
      }
    }
  }, []);

  const handleValidating = async (missionKey: string, missionLink: string) => {
    setValidationState((prevState) => ({
      ...prevState,
      [missionKey]: { validating: true, validated: false },
    }));
    window.open(missionLink, "_blank", "noopener,noreferrer");

    if (missionKey === "Mission-1") {
      setShowMission2Form(false);
      setShowMission1Form(true);
    } else if (missionKey === "Mission-2") {
      setShowMission1Form(false);
      setShowMission2Form(true);
    } else {
      setTimeout(() => {
        handleValidationSuccess(missionKey);
      }, VALIDATION_TIMEOUT);
    }
  };

  const handleValidation = async (missionKey: string) => {
    if (missionKey === "Mission-1" && !telegram_username) {
      toast({
        title: "❎No Telegram username entered.",
        description: "Please enter your Telegram username!",
      });
      return;
    }
    if (missionKey === "Mission-2" && !discord_tag) {
      toast({
        title: "❎No Discord username entered.",
        description: "Please enter your Discord username!",
      });
      return;
    }
    setSubmitting(true);
    try {
      const url =
     missionKey === "Mission-1"
       ? `http://teapot.thejoin.io/helper/verify-telegram/`
       : `http://teapot.thejoin.io/helper/verify-discord/`;

   const username =
     missionKey === "Mission-1" ? telegram_username : discord_tag;

   const response = await fetch(url, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ username }),
   });

      const data = await response.json();

      if (response.ok) {
        handleValidationSuccess(missionKey);
        setTelegramUsername(""),
        setDiscordTag("")
        setShowMission1Form(false)
        setShowMission2Form(false)
      } else {
        toast({
          title: "❎Verification failed",
          description: data.message || "Unable to perform the verification!",
        });
        setValidationState((prevState) => ({
          ...prevState,
          [missionKey]: { validating: false, validated: false },
        }));
      }

    } catch (error: any) {
      console.error("Validation error:", error);
      toast({
        title: "❎An error occurred",
        description: error.message,
      });
      setValidationState((prevState) => ({
        ...prevState,
        [missionKey]: { validating: false, validated: false },
      }));
    } finally {
      setSubmitting(false);
    }
  };

  const handleValidationSuccess = (missionKey: string) => {
    setValidationState((prevState) => {
      const newState = {
        ...prevState,
        [missionKey]: { validating: false, validated: true },
      };

      // Update localStorage with new validated missions
      if (typeof window !== "undefined") {
        const validatedMissions = Object.keys(newState).reduce(
          (acc, key) => {
            if (newState[key].validated) {
              acc[key] = true;
            }
            return acc;
          },
          {} as Record<string, boolean>,
        );

        localStorage.setItem(STORAGE_KEY, JSON.stringify(validatedMissions));
        setAllMissionsCompleted(checkAllMissionsCompleted(validatedMissions));
      }
      return newState;
    });
  };

  useEffect(() => {
    setShowMission2Form(false);
    setShowMission1Form(false);
    if (isOpen && missionData) {
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
  }, [isOpen, missionData]);

  if (!isOpen || !missionData) return null;

  const missionKey = `Mission-${missionData.id}`;
  const missionValidationState = validationState[missionKey] || {
    validating: false,
    validated: false,
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(4,20,29,0.70)] flex justify-center items-center z-50"
    >
      <div
        className="bg-[rgba(23,38,47,0.30)] bg-[url('/modal-bg.png')] bg-contain bg-no-repeat sm:bg-cover border border-[#666666CC] p-2 sm:p-7 rounded-[50px] backdrop-blur-[50px] relative w-[90%] max-w-[800px] h-fit flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={onClose}
          variant="ordinary"
          className="!absolute top-4 sm:top-[30px] right-4 sm:right-[30px]"
        >
          <TimesIcon />
        </Button>
        <div className="w-[90%] sm:w-3/4 mx-auto ">
          <div className="flex justify-center items-center mt-4">
            <LogoGradientMission className="hidden sm:block" />{" "}
            <span className="translate-y-0.5 ml-3 text-white text-3xl sm:text-5xl font-bold">
              Missions
            </span>
          </div>
          <div className="h-[5px] w-full my-4 sm:my-10 rounded-sm modal-underline-bg"></div>
          <h2 className="text-lg sm:text-[25px] mb-4 sm:mb-10 text-center break-words">
            {renderDescription(missionData.description, missionData.boldParts)}
            on{" "}
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
            <div className="border border-[#666] p-4 rounded-[10px] flex justify-center sm:justify-between mb-8 sm:mb-16">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="bg-[linear-gradient(112deg,rgba(4,20,29,0.40)_14.96%,rgba(14,127,184,0.40)_85.38%)] h-20 w-20 rounded-full">
                  <Image
                    src={joinToken}
                    alt="Join Token"
                    width={1050}
                    height={1050}
                    className="scale-75"
                  />
                </div>
                <div className="ml-0 sm:ml-2 mt-2 sm:mt-0">
                  <p className="text-xl text-center sm:text-left text-[#ffffffcc] font-bold mb-1">
                    {renderDescription(
                      missionData.description,
                      missionData.boldParts,
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
                  }}
                  className="transition duration-200 scale-100 hover:scale-90 active:scale-100"
                >
                  {missionData.icon}
                </a>
              </div>
            </div>
          )}
          {showMission1Form ? (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleValidation(missionKey);
            }}>
              <input
                type="text"
                value={telegram_username}
                onChange={(e) => setTelegramUsername(e.target.value)}
                placeholder="Your telegram username e.g joineco"
                className="w-full border border-[#666] p-3 transition duration-200 rounded-[10px] bg-transparent"
              />
              <Button
                disabled={submitting}
                type="submit"
                className="mx-auto mt-2 mb-4 sm:mb-8 scale-125 hover:scale-[1.2] active:scale-125"
              >
                {submitting ? (
                  <span className="scale-90">Submitting...</span>
                ) : (
                  <span className="scale-90 min-w-[80px]">Submit</span>
                )}
              </Button>
            </form>
          ) : showMission2Form ? (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleValidation(missionKey);
            }}>
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
                className="mx-auto mt-2 mb-4 sm:mb-8 scale-125 hover:scale-[1.2] active:scale-125"
              >
                {submitting ? (
                  <span className="scale-90">Submitting...</span>
                ) : (
                  <span className="scale-90 min-w-[80px]">Submit</span>
                )}
              </Button>
            </form>
          ) : (
            <Button
              disabled={missionValidationState.validating}
              onClick={() => {
                if (missionValidationState.validated) {
                  onClose();
                } else if (!missionValidationState.validating) {
                  handleValidating(missionKey, missionData.link);
                }
              }}
              className="mx-auto mt-2 mb-4 sm:mb-8 scale-125 hover:scale-[1.2] active:scale-125"
            >
              <span className="scale-75 sm:scale-90 min-w-[158px]">
                {missionValidationState.validating
                  ? "Validating..."
                  : missionValidationState.validated
                    ? "Close"
                    : `Follow on ${missionData.platform.name}`}
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
