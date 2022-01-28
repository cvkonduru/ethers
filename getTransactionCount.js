// Connecting to an ETH Blockchain through a service provider like Infura.

const ethers = require("ethers")
const env = require("dotenv").config()
const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/06ad6936699f4bd2887f8d4db7e2b613");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider)
const address = "0xdd8eBa4604D2a9C6c77e4bC557B1884119174726"

// getTransactionCount function returns the number of txs the address has ever sent.
const getTxCount = async (accountAddress) => {
    const txCount = await provider.getTransactionCount(accountAddress)
    console.log(txCount)
}

getTxCount(address)
