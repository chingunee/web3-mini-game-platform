import React, { useState, useRef, useEffect } from "react";

import stepImg1 from "../../assets/stepImg1.png";
import stepImg2 from "../../assets/stepImg2.png";
import stepImg3 from "../../assets/stepImg3.png";
import offerImg1 from "../../assets/offerImg1.png";
import offerImg2 from "../../assets/offerImg2.png";
import offerImg3 from "../../assets/offerImg3.png";
import offerImg4 from "../../assets/offerImg4.png";

import StepCard from "../components/StepCard";
import RoadmapCard from "../components/RoadmapCard";
import OfferCard from "../components/OfferCard";

import bg from "../../assets/back.png";

import { UseWindowSize } from "../components/UseWindowSize";
import Footer from "../components/Footer";

export default function HomePage() {
  const elemRef = useRef(null);
  const size = UseWindowSize();

  const [isHoveredCard, setIsHoveredCard] = useState({
    id: null,
    hover: false,
  });
  const [isHoveredMember, setIsHoveredMember] = useState({
    id: null,
    hover: false,
  });

  const [cardHeight, setCardHeight] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (elemRef.current) {
      setCardHeight(elemRef.current?.clientHeight);
    }
  }, [size]);

  const toggleHoverCard = (id, state) => {
    setIsHoveredCard({ id: id, hover: state });
  };

  const toggleHoverMemberCard = (id, state) => {
    setIsHoveredMember({ id: id, hover: state });
  };

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        // className="object-cover lg:h-screen w-screen py-20 lg:py-0"
        className="bg-hero bg-no-repeat bg-cover bg-center  object-cover lg:h-screen w-screen py-20 lg:py-0 z-1"
      >
        <div className="h-full xl:container xl:px-20 md:px-12 px-4 mx-auto flex flex-col md:flex-row items-center space-y-20 md:space-y-0">
          <div className="w-full md:w-1/2 text-white font-body"></div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-[#000000] to-[#434343] "> */}
      <div className="bg-[#18181b]">
        <div className="xl:container xl:px-20 md:px-12 px-4 mx-auto h-full w-full md:py-32 py-10 font-body flex flex-col items-center space-y-4">
          <p className="text-[#02E111] font-semibold md:text-5xl text-lg">
            What is Web 3.0 Tournament?
          </p>
          <h1 className="text-white font-bold md:text-lg text-sm text-center">
            Here are a few reason why you should play games with CRAZY GOAT
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:pt-16 pt-10 space-y-6 md:space-y-0">
            <div className="md:w-1/4">
              <StepCard
                id="1"
                toggle={toggleHoverCard}
                isHover={isHoveredCard}
                step="1"
                title="Transparency"
                img={stepImg1}
                desc="All participants can see and verify the rules, and there is no need to rely on a third party to enforce them."
              />
            </div>
            <div className="md:w-1/4">
              <StepCard
                id="2"
                toggle={toggleHoverCard}
                isHover={isHoveredCard}
                step="2"
                title="Security"
                img={stepImg2}
                desc="The code cannot be tampered with or hacked, and the results of the tournament are final and cannot be altered"
              />
            </div>
            <div className="md:w-1/4">
              <StepCard
                id="3"
                toggle={toggleHoverCard}
                isHover={isHoveredCard}
                step="3"
                title="Cost-effective"
                img={stepImg3}
                desc="Participants can receive higher payouts and entry fees can be lower. And supports all of the ERC20 tokens"
              />
            </div>
          </div>
          {/* <div className="pt-10">
            <button className="bg-[#02E111] text-[#0a1f2f] hover:text-[#28dbd1] hover:border-[#28dbd1] hover:skew-x-0 duration-300 border border-transparent hover:bg-[#0a1f2f] font-semibold text-lg h-14 px-8 rounded -skew-x-6">
              Participate
            </button>
          </div> */}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#000000] to-[#434343]">
        <div className="xl:container xl:px-20 md:px-12 px-4 mx-auto h-full w-full md:py-20 py-10 font-body flex flex-col items-center space-y-4">
          <p className="text-[#02E111] font-semibold md:text-2xl text-lg">
            Explore
          </p>
          <h1 className="text-white font-bold md:text-5xl text-2xl">
            Our Roadmap
          </h1>
          <div className="hidden md:flex pt-10 w-full justify-between space-x-8">
            <div
              ref={elemRef}
              className={`w-1/2 flex flex-col space-y-[13rem] mt-[13rem]`}
            >
              <RoadmapCard
                title="Website Creation"
                step="02"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                    numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                    alias reiciendis cupiditate facere aliquid iusto inventore!"
              />
              <RoadmapCard
                title="Website Creation"
                step="04"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                    numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                    alias reiciendis cupiditate facere aliquid iusto inventore!"
              />
            </div>
            <div
              className={`p-1 h-[${cardHeight * 5}rem] bg-[#0a1f2f] rounded`}
            >
              <div className={`bg-[#02E111] w-3 h-[30rem] rounded`}></div>
            </div>
            <div className="w-1/2 flex flex-col space-y-[13rem]">
              <RoadmapCard
                title="Website Creation"
                step="01"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                    numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                    alias reiciendis cupiditate facere aliquid iusto inventore!"
              />
              <RoadmapCard
                title="Website Creation"
                step="03"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                    numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                    alias reiciendis cupiditate facere aliquid iusto inventore!"
              />
              <RoadmapCard
                title="Website Creation"
                step="05"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                    numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                    alias reiciendis cupiditate facere aliquid iusto inventore!"
              />
            </div>
          </div>
          <div className="flex flex-col pt-10 md:hidden w-full space-y-6">
            <RoadmapCard
              title="Website Creation"
              step="01"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                alias reiciendis cupiditate facere aliquid iusto inventore!"
            />
            <RoadmapCard
              title="Website Creation"
              step="02"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                alias reiciendis cupiditate facere aliquid iusto inventore!"
            />
            <RoadmapCard
              title="Website Creation"
              step="03"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                alias reiciendis cupiditate facere aliquid iusto inventore!"
            />
            <RoadmapCard
              title="Website Creation"
              step="04"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                alias reiciendis cupiditate facere aliquid iusto inventore!"
            />
            <RoadmapCard
              title="Website Creation"
              step="05"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium! Dolores maxime 
                                numquam animi saepe sapiente tempora, veritatis velit delectus debitis provident dolore 
                                alias reiciendis cupiditate facere aliquid iusto inventore!"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#000000] to-[#434343]">
        <div className="xl:container xl:px-20 md:px-12 px-4 mx-auto h-full w-full md:py-32 py-10 font-body flex flex-col items-center space-y-4">
          <p className="text-[#28dbd1] font-semibold md:text-2xl text-lg">
            Benefits
          </p>
          <h1 className="text-white font-bold md:text-5xl text-2xl text-center">
            What We Offer
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-center md:pt-16 pt-10 lg:space-x-6 space-y-6 lg:space-y-0">
            <div className="lg:w-1/4 md:w-1/2 px-4 lg:px-0">
              <OfferCard
                title="Cross Chain"
                img={offerImg1}
                desc="Lorem ipsum dolor, sit amet consec tetur adipisicing elit. 
                                Provident eius eaque aspernatur amet "
              />
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-4 lg:px-0">
              <OfferCard
                title="Stack Pad"
                img={offerImg2}
                desc="Lorem ipsum dolor, sit amet consec tetur adipisicing elit. 
                                Provident eius eaque aspernatur amet "
              />
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-4 lg:px-0">
              <OfferCard
                title="Multi Layer"
                img={offerImg3}
                desc="Lorem ipsum dolor, sit amet consec tetur adipisicing elit. 
                                Provident eius eaque aspernatur amet "
              />
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-4 lg:px-0">
              <OfferCard
                title="Elite Projects"
                img={offerImg4}
                desc="Lorem ipsum dolor, sit amet consec tetur adipisicing elit. 
                                Provident eius eaque aspernatur amet"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
