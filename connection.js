// Connecting to an ETH Blockchain through a service provider like Infura.

const ethers = require("ethers")
const env = require("dotenv").config()
const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/06ad6936699f4bd2887f8d4db7e2b613");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider)

// Provider is only used for Reading from the blockchain.
// Signer can be used to write to the blockchain as well.
const blockNumber = async () => {
    const blockNumber = await provider.getBlockNumber()
    console.log("Block Number is : ",blockNumber)   
}

blockNumber()








