// Connecting to an ETH Blockchain through a service provider like Infura.

const ethers = require("ethers")
const env = require("dotenv").config()
const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/06ad6936699f4bd2887f8d4db7e2b613");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider)
const contractAddress = "0x60F58A5ea2F1a014a549E47B28916AE96E122C56"
const position = 5
// getStorageAt function returns bytes32 value of the position at address.
const getStorage = async (contract,position) => {
    const storage = await provider.getStorageAt(contract,position);
    console.log(storage);
}

getStorage(contractAddress,position)