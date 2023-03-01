import { ethers } from "ethers";
import MockTokenABI from "../abi/MockToken.json";
import { MockToken } from "../genAddresses.json";
import { getContractEssentials } from "./helpers";

async function getMockTokenContract() {
  let { provider, signer } = await getContractEssentials();
  let address = MockToken;

  const mockTokenReadContract = new ethers.Contract(
    address,
    MockTokenABI,
    provider
  );

  let mockTokenWriteContract = mockTokenReadContract.connect(signer);

  return { mockTokenReadContract, mockTokenWriteContract };
}

export { getMockTokenContract };
