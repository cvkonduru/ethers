const ethers = require("ethers")
const env = require("dotenv").config()
const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/06ad6936699f4bd2887f8d4db7e2b613");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider)
const address = "0x6D24fE85fDD8A23D991623e63Fe3BDe8Ce236238"

/// getBalance method returns the ETH Balance of the address.
/// getBalance when provided with an argument "blockTag=latest", returns the ETH balance at the particular block height.

// Function to return the balance of the given account 
const getBalance = async (accountAddress) => {
    const balance = await provider.getBalance(accountAddress)
    console.log(balance.toNumber())
    // Ethers basically returns the details as a bigNumber. There are ways to convert bigNumber to a regular number
}

const getBlanceAtBlock = async(accountAddress, blockNumber) => {
    const balance = await provider.getBalance(accountAddress, blockNumber)
    console.log(balance.toNumber())
}

getBalance(address)
getBlanceAtBlock(address,"latest")