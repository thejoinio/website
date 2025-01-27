/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { checkAllMissionsCompleted } from ".";
import {
  GreenConicGradient,
  LogoGradientMission,
  TickCircle,
} from "@/assets/svg";
import { Button } from "@/components/button";
import { renderDescription } from "@/lib/helper";
import { useToast } from "@/hooks/use-toast";
import { MissionData } from "./data";
import { BaseModal } from "../modal";
import { MissionForm } from "./mission-form";
import { MissionContent } from "./mission-content";

interface MissionModalProps {
  isOpen: boolean;
  missionData: MissionData | undefined;
  onClose: () => void;
  setAllMissionsCompleted: Dispatch<SetStateAction<boolean>>;
}

interface ValidationState {
  [key: string]: { validating: boolean; validated: boolean };
}

export const MissionModal: React.FC<MissionModalProps> = ({
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
        setTelegramUsername("");
        setDiscordTag("");
        setShowMission1Form(false);
        setShowMission2Form(false);
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
    } catch (error: unknown) {
      console.error("Validation error:", error);
      toast({
        title: "❎An error occurred",
        description:
          error instanceof Error ? error.message : "Unknown error occurred",
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

      if (typeof window !== "undefined") {
        const validatedMissions = Object.keys(newState).reduce((acc, key) => {
          if (newState[key].validated) {
            acc[key] = true;
          }
          return acc;
        }, {} as Record<string, boolean>);

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
        if (prevState[missionKey]?.validated) {
          return prevState;
        }
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

  const ValidationButton = () => (
    <div className="flex justify-center">
      <Button
        disabled={missionValidationState.validating}
        onClick={() => {
          if (missionValidationState.validated) {
            onClose();
          } else if (!missionValidationState.validating) {
            handleValidating(missionKey, missionData.link);
          }
        }}
        className="mx-auto mt-2 mb-4 sm:mb-8"
      >
        <span className="scale-75 sm:scale-90 min-w-[158px]">
          {missionValidationState.validating
            ? "Validating..."
            : missionValidationState.validated
            ? "Close"
            : `Follow on ${missionData.platform.name}`}
        </span>
      </Button>
    </div>
  );
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="w-[90%] sm:w-3/4 mx-auto">
        <div className="flex justify-center items-center mt-4">
          <LogoGradientMission className="hidden sm:block" />
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
            <div className="relative flex mx-auto scale-75 sm:scale-100 w-fit mt-4 sm:mt-10 mb-6 sm:mb-10">
              <GreenConicGradient />
              <TickCircle className="absolute translate-x-5 translate-y-5" />
            </div>
            <ValidationButton />
          </div>
        ) : showMission1Form ? (
          <>
            <MissionContent
              description={missionData.description}
              boldParts={missionData.boldParts}
              handle={missionData.handle}
              link={missionData.link}
              icon={missionData.icon}
              onValidating={() =>
                handleValidating(missionKey, missionData.link)
              }
            />
            <MissionForm
              type="telegram"
              username={telegram_username}
              onUsernameChange={setTelegramUsername}
              onSubmit={(e: any) => {
                e.preventDefault();
                handleValidation(missionKey);
              }}
              submitting={submitting}
            />
          </>
        ) : showMission2Form ? (
          <>
            <MissionContent
              description={missionData.description}
              boldParts={missionData.boldParts}
              handle={missionData.handle}
              link={missionData.link}
              icon={missionData.icon}
              onValidating={() =>
                handleValidating(missionKey, missionData.link)
              }
            />
            <MissionForm
              type="discord"
              username={discord_tag}
              onUsernameChange={setDiscordTag}
              onSubmit={(e: any) => {
                e.preventDefault();
                handleValidation(missionKey);
              }}
              submitting={submitting}
            />
          </>
        ) : (
          <>
            <MissionContent
              description={missionData.description}
              boldParts={missionData.boldParts}
              handle={missionData.handle}
              link={missionData.link}
              icon={missionData.icon}
              onValidating={() =>
                handleValidating(missionKey, missionData.link)
              }
            />
            <ValidationButton />
          </>
        )}
      </div>
    </BaseModal>
  );
};
