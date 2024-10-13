"use client";
import Image from "next/image";
import { useState } from "react";
import { countriesData, selectedCountryOption } from "./data";

interface SelectCountryProps {
  country: string;
  setCountry: (country: string) => void;
  gridCols?: number;
}

export const SelectCountry: React.FC<SelectCountryProps> = ({
  country,
  setCountry,
  gridCols,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

 
  const filteredLanguages = countriesData.filter((option) =>
    option.country.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const selectedCountry = selectedCountryOption(country);

  return (
    <div className={`relative w-full`}>
      <button
        type="button"
        className={`w-full flex items-center justify-between mx-auto shadow bg-transparent h-12 py-1 sm:py-3 rounded-xl border outline-none text-white placeholder:!text-white/50 font-medium text-sm sm:text-2xl px-2 sm:px-4`}
        onClick={() => setIsOpen(!isOpen)}
      ><>
        {selectedCountry ? (
          <span className="flex items-center">
            <Image
              src={`https://flagcdn.com/16x12/${selectedCountry.flag}.png`}
              alt=""
              width={16}
              height={12}
              className="w-4 h-3 mr-3"
              unoptimized={true}
            />
            <span className="font-medium">{selectedCountry.country}</span>
          </span>
        ) : (
          <span>Select a country</span>
        )}
        </>
        <span
          className={`${
            isOpen ? "rotate-180" : ""
          } transition duration-200 ml-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className={`absolute z-10 shadow border rounded-lg w-full`}>
          <input
            type="text"
            placeholder="Search country..."
            className="w-full px-3 py-2 border-b focus:outline-none rounded-t-lg bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul
            className={`grid ${
              gridCols
                ? `grid-cols-[${gridCols}]`
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3"
            } w-full h-fit max-h-72 md:max-h-40 overflow-y-auto bg-primary outline-primary outline-offset-4 rounded-b-lg`}
          >
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((option) => (
                <li
                  key={option.key}
                  className={`${
                     "hover:decoration-white underline underline-offset-2 decoration-transparent transition duration-200 opacity-100 cursor-pointer"
                  } px-3 py-2 flex items-center`}
                  onClick={() => {
                    setCountry(option.country);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={`https://flagcdn.com/16x12/${option.flag}.png`}
                    alt=""
                    className="w-4 h-3 mr-2"
                    width={16}
                    height={12}
                    unoptimized={true}
                  />
                  <span>{option.country}</span>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-white cursor-not-allowed">
                Not found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
