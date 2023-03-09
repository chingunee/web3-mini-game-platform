import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import crazy_logo from "../../assets/Crazy-Goat-2.png";

export default function Navbar() {
  const app = useSelector((state) => state.app);

  return (
    <>
      <header className="h-24 w-screen bg-black flex items-center">
        {/* <header className="h-24 w-screen bg-gradient-to-r from-[#04865A] to-[#000809] flex items-center"> */}
        <div className="xl:container w-full xl:px-20 md:px-12 px-4 mx-auto flex justify-between items-center">
          <Link to="/">
            <img className="h-40" src={crazy_logo} alt="img" />
          </Link>
          <div className="hidden md:flex items-center text-white space-x-8 font-semibold font-body text-lg">
            {!app.isOrganizer && <Link to="/organizer-form">REGISTER</Link>}
            {app.isOrganizer && <Link to="/create-tournament">CREATE</Link>}
            <Link to="/games">GAMES</Link>
            <Link to="/tournaments">TOURNAMENTS</Link>
            <Link to="/leaderboard">LEADER BOARD</Link>
          </div>
          <div className="block md:hidden text-white">
            <GiHamburgerMenu size={25} />
          </div>
        </div>
      </header>
    </>
  );
}
