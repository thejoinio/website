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
    content: "JOIN token is a utility token used for transactions, staking, rewards, and unlocking exclusive features across the Joinda ecosystem.",
  },
  {
    title: "What type of ecosystem does JOIN aim to create?",
    content: "JOIN powers an inclusive, user-driven Web2-Web3 ecosystem that blends social networking, gaming, and digital finance in one integrated experience.",
  },
  {
    title: "How does JOIN intend to incorporate Web3 technology?",
    content: "JOIN enables seamless interactions with decentralized features like communities, quests, token-based incentives, wallet integrations, and staking, bridging users with dApps.",
  },
  {
    title: "What is one of the primary objectives of the JOIN project?",
    content: "To empower users and creators by enabling monetization, ownership, and visibility through blockchain-powered tools and rewards.",
  },
  {
    title: "How can I purchase JOIN Token?",
    content: "During the presale, simply connect your wallet, select SOL or USDT, input the amount, and click ‘Buy’. The minimum is 0.001 SOL or 1 USDT. After the presale, tokens will be claimable.",
  },
  {
    title: "Which Blockchain network is the JOIN primarily built on?",
    content: "JOIN token is built on the Solana network, chosen for its speed, low transaction costs, and scalability.",
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



export default function FAQSSection () {
  return (
    <section
      id="faqs"
      className="faqs-section relative pb-[4.375rem] md:pb-[50px] overflow-hidden"
    >
      <div className="faqs relative flex flex-col gap-4 w-full max-w-[1440px] px-5 md:px-10 lg:px-20 mx-auto">
        <div className="w-full mx-auto text-center">
          <h2 className="w-fit text-center mx-auto font-medium flex items-center mb-5 xs:mb-[30px] mt-16 text-2xl/normal xs:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full mx-auto">
          {faqData.map((faq, index) => (
            <FAQ key={index} idx={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
