import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";
import crazy_logo from "../../assets/Crazy-Goat-2.png";
import { ethers } from "ethers";
import { SiweMessage } from "siwe";

export default function Navbar() {
  const app = useSelector((state) => state.app);
  const domain = window.location.host;
  const origin = window.location.origin;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  function createSiweMessage(address, statement) {
    const message = new SiweMessage({
      address,
      statement,
      uri: origin,
    });
    return message.prepareMessage();
  }

  async function signInWithEthereum() {
    const message = createSiweMessage(
      await signer.getAddress(),
      "Sign in with Ethereum to the app."
    );
    console.log(await signer.signMessage(message));
  }

  return (
    <>
      <header className="h-24 w-screen bg-black flex items-center">
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
            <div
              className="flex items-center space-x-2 text-[#0a1f2f] px-5 h-11 text-[1rem] bg-[#02E111] rounded font-semibold cursor-pointer"
              onClick={signInWithEthereum}
            >
              <p>Sign</p>
              <FaWallet size={20} />
            </div>
          </div>
          <div className="block md:hidden text-white">
            <GiHamburgerMenu size={25} />
          </div>
        </div>
      </header>
    </>
  );
}
