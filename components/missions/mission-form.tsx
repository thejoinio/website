import React from 'react';
import { Button } from '../button';

interface MissionFormProps {
  type: 'telegram' | 'discord';
  username: string;
  onUsernameChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitting: boolean;
}

export const MissionForm: React.FC<MissionFormProps> = ({
  type,
  username,
  onUsernameChange,
  onSubmit,
  submitting,
}) => {
  const placeholder = type === 'telegram' 
    ? "Your telegram username e.g joineco"
    : "Your Discord username e.g joineco";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 justify-center">
      <input
        type="text"
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-[#666] p-3 transition duration-200 rounded-[10px] bg-transparent"
      />
      <Button
        disabled={submitting}
        type="submit"
        className="mx-auto mt-2 mb-4"
      >
        {submitting ? (
          <span className="scale-90">Submitting...</span>
        ) : (
          <span className="scale-90 min-w-[80px]">Submit</span>
        )}
      </Button>
    </form>
  );
};