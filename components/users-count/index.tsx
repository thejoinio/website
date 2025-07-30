"use client";

import React, { useState, useEffect } from 'react';

const NumberOfUsers: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCurrentNumber(data.number);

      } catch (e) {
        console.error("Failed to fetch number:", e);
        setError("Failed to load data.");
      }
    };

    fetchNumber();
    setLoading(false);
  }, []);

  if (error) {
    return (
      <p className="text-sm font-medium bg-[linear-gradient(84deg,#6065A4_-33.49%,#0F1625_37.89%,#6065A4_117.87%)] p-2.5 rounded-lg px-3">
      4260+ Joined
    </p>
  );
  }

  if (loading || currentNumber === null) {
    return <p className="text-sm font-medium bg-[linear-gradient(84deg,#6065A4_-33.49%,#0F1625_37.89%,#6065A4_117.87%)] p-2.5 rounded-lg px-3">Loading...</p>;
  }

  return (
      <p className="text-sm font-medium bg-[linear-gradient(84deg,#6065A4_-33.49%,#0F1625_37.89%,#6065A4_117.87%)] p-2.5 rounded-lg px-3">
      {currentNumber}+ Joined
    </p>
  );
};

export default NumberOfUsers;