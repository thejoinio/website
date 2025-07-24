import { Toast, ToasterToast } from "@/hooks/use-toast";
import { Dispatch, SetStateAction } from "react";

export const renderDescription = (
  description = "No description",
  boldParts = ["No bold part"]
) => {
  return description.split(" ").map((word, index) => {
    if (boldParts.includes(word)) {
      return (
        <span key={index} className="font-bold -mt-[1px]">
          {word}&nbsp;
        </span>
      );
    }
    return (
      <span key={index} className="font-normal">
        {word}&nbsp;
      </span>
    );
  });
};

export const handleSubmit = async ({
  event,
  setStatus,
  toast,
  email,
  resetEmail,
  type,
}: {
  event: React.FormEvent<HTMLFormElement>;
  email: string;
  type: "thejoin-waitlist" | "thejoin-whitelist" | "thejoin-subscribe";
  setStatus: Dispatch<SetStateAction<"loading" | "idle" | "success" | "error">>;
  toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
}
resetEmail: () => void;
}) => {
  event.preventDefault();
  setStatus("loading");

  if (!email) {
    setStatus("idle");
    toast({
      title: "❎ No email entered",
      description: "Please enter YOUR email address.",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setStatus("idle");
    toast({
      title: "❎ Invalid email",
      description: "Please enter a valid email address.",
    });
    return;
  }

  try {
    const response = await fetch(
      "https://teapot.thejoin.io/helper/submit-email/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: email, campaign: type }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStatus("success");
      resetEmail();
      toast({
        title: "✅Success",
        description:
          "Email submitted successfully! Check your inbox for more information.",
      });
    } else {
      setStatus("error");
      console.error(
        "Failed to submit email:",
        data.address || response.statusText
      );
      toast({
        title: "❎Failed to submit email",
        description: data.address || data.campaign[0] || "Failed to submit email, try again later!",
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    setStatus("error");
    toast({
      title: "❎An error occurred",
      description: error.message,
    });
    console.error("An error occurred while submitting the email:", error);
  }
};
