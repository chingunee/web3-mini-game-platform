// import { ethers } from "ethers";
// import MNFTAbi from "../abi/MNFT.json";
// import { MNFT } from "../genAddresses.json";
// import { getContractEssentials } from "./helpers";

// async function getMNFTContract() {
//   let { provider, signer } = await getContractEssentials();
//   let address = MNFT;

//   const mnftReadContract = new ethers.Contract(address, MNFTAbi, provider);

//   let mnftWriteContract = mnftReadContract.connect(signer);

//   return { mnftReadContract, mnftWriteContract };
// }

// export { getMNFTContract };
