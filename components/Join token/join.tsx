import React from "react";
import Image from "next/image";
import join from "@/assets/images/join.png";
import join2 from "@/assets/images/joinx.png";

const JoinTokenComponent = () => {
  return (
    <div className="Join-token text-center">
      <h1 className="text-3xl font-bold p-[16px]">JOIN Token</h1>
      <div className="flex justify-center items-center my-4">
        <div className="text-lg">
          <p>The JOIN Token is the native utility token powering the</p>
          <p>entire Joinda ecosystem. Built on the Solana</p>
          <p>blockchain, it facilitates fast, low-cost, and secure</p>
          <p>transactions across social features, gaming,</p>
          <p>communities, quests, and premium services.</p>
        </div>

        <div className="flex w-18" >
         
          <Image
            src={join2}
            alt="image of JOIN token"
            width={400}
            height={200}
            className="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTokenComponent;
