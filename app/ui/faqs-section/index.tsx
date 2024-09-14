'use client'
import React from "react";
import { FAQ } from "./faq";

interface IfaqData {
  title: string;
  content: string;
}

const faqData: IfaqData[] = [
  {
    title: "What is the main purpose of the JOIN token?",
    content: "Governance, staking, and access to exclusive features.",
  },
  {
    title: "What type of ecosystem does JOIN aim to create?",
    content: "An inclusive, and innovative ecosystem.",
  },
  {
    title: "How does JOIN intend to incorporate Web3 technology?",
    content: "By facilitating seamless interactions between users and decentralized applications (dApps).",
  },
  {
    title: "What is one of the primary objectives of the JOIN project?",
    content: "To empower creators by offering tools and opportunities within a decentralized ecosystem.",
  },
  {
    title: "How can I purchase JOIN?",
    content: "Simply connect your wallet, specify the amount of SOL or USDT you wish to spend on tokens, and click the 'buy' button. You can purchase tokens with a minimum of 0.001 SOL or 1 USDT. Once the presale concludes, you'll be able to claim your tokens.",
  },
  {
    title: "Which Blockchain network is the JOIN primarily built on?",
    content: "The JOIN token is built on the Solana network.",
  },
  {
    title: "How do I claim my Pre-sale tokens?",
    content: "After the presale ends, connect your wallet and click the 'claim' button. Once the transaction is complete, import the Join token address into your wallet to view your tokens.",
  },
  {
    title: "How can I store and manage my JOIN tokens?",
    content: "JOIN tokens can be stored and managed in compatible cryptocurrency wallets such as Trust Wallet.",
  },
];



export const FAQSSection: React.FC = () => {
  return (
    <section
      id="faqs"
      className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto pt-10 md:pt-20 pb-[4.375rem] md:pb-0"
    >
      <div className="flex flex-col gap-4">
        <div className="w-full mx-auto text-center">
          <h2 className="w-fit text-center mx-auto text-2xl sm:text-4xl md:text-5xl font-semibold flex items-center mb-[45px] mt-16">
            Frequently Asked Questions.
          </h2>
        </div>
        <div className="w-full mx-auto">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
