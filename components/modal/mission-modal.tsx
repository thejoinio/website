"use client";
import React, { useEffect, useState } from "react";
import { checkAllMissionsCompleted } from "../missions";
import { useToast } from "@/hooks/use-toast";
import { BaseModal } from ".";
import { MissionContent } from "./mission-content";
import { MissionData } from "../missions/data";

interface ModalProps {
  isOpen: boolean;
  missionData: MissionData | undefined;
  onClose: () => void;
  setAllMissionsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ValidationState {
    [key: string]: { validating: boolean; validated: boolean };
  }

export const MissionModal: React.FC<ModalProps> = ({
  isOpen,
  missionData,
  onClose,
  setAllMissionsCompleted,
}) => {
  const { toast } = useToast();
  const [validationState, setValidationState] = useState<ValidationState>({});
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

  const handleValidating = (missionKey: string, missionLink: string) => {
    setValidationState((prevState) => ({
      ...prevState,
      [missionKey]: { validating: true, validated: false },
    }));
    window.open(missionLink, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      handleValidationSuccess(missionKey);
    }, VALIDATION_TIMEOUT);
  };

  // const handleValidating = async (missionKey: string, missionLink: string) => {
  //   setShowMission1Form(false);
  //   setShowMission2Form(false);
  //   setValidationState((prevState) => ({
  //     ...prevState,
  //     [missionKey]: { validating: true, validated: false },
  //   }));
  //   window.open(missionLink, "_blank", "noopener,noreferrer");

  //   if (missionKey === "Mission-1") {
  //     setShowMission2Form(false);
  //     setShowMission1Form(true);
  //   } else if (missionKey === "Mission-2") {
  //     setShowMission1Form(false);
  //     setShowMission2Form(true);
  //   } else {
  //     setTimeout(() => {
  //       handleValidationSuccess(missionKey);
  //     }, VALIDATION_TIMEOUT);
  //   }
  // };

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
        //@ts-expect-error unknown
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
          {} as Record<string, boolean>
        );

        localStorage.setItem(STORAGE_KEY, JSON.stringify(validatedMissions));
        setAllMissionsCompleted(checkAllMissionsCompleted(validatedMissions));
      }
      return newState;
    });
  };


  if (!isOpen || !missionData) return null;

  const missionKey = `Mission-${missionData.id}`;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <MissionContent
        missionData={missionData}
        validationState={validationState}
        setValidationState={setValidationState}
        handleValidating={handleValidating}
        handleValidation={handleValidation}
        // showMission1Form={showMission1Form}
        // showMission2Form={showMission2Form}
        missionKey={missionKey}
        submitting={submitting}
        telegram_username={telegram_username}
        discord_tag={discord_tag}
        setTelegramUsername={setTelegramUsername}
        setDiscordTag={setDiscordTag}
      />
    </BaseModal>
  );
};
