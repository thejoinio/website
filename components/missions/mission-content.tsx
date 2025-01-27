'use client'
import Image from 'next/image';
import { renderDescription } from '@/lib/helper';
import joinToken from '@/assets/icons/join-token-raw.webp';

interface MissionContentProps {
  description: string;
  boldParts: string[];
  handle: string;
  link: string;
  icon: React.ReactNode;
  onValidating: () => void;
}

export const MissionContent: React.FC<MissionContentProps> = ({
  description,
  boldParts,
  handle,
  link,
  icon,
  onValidating,
}) => {
  return (
    <div className="border border-[#666] p-4 rounded-[10px] flex justify-center sm:justify-between mb-8 sm:mb-10">
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
            {renderDescription(description, boldParts).slice(1)}
          </p>
          <p className="text-xl font-semibold">
            <span className="text-[#8B98A5]">@{handle || "handle"}</span>
            <span className="px-2">•</span>
            <a
              href={link}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                onValidating();
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
          href={link}
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            onValidating();
          }}
          className="transition duration-200 scale-100 hover:scale-90 active:scale-100"
        >
          {icon}
        </a>
      </div>
    </div>
  );
};