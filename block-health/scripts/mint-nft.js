require("dotenv").config()
// const API_URL = process.env.API_URL

const API_URL = "https://eth-ropsten.alchemyapi.io/v2/lFCo02KeH5C84PkvTGAx5xFQ-G1B_bNn"
const PRIVATE_KEY = "cd9e5106abe9a20e1d4958326cf13a48b2dcd40b1c6468267e3eed78a9c7098e"
const PUBLIC_KEY = "0xf0798F6498F7c6C3aF8BEA680e0380a9928Ec787"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/Certification.sol/Certification.json")
const contractAddress = "0x67965ca5b29aa0daa178e500b4dce9ce4f8508f2"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  //the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': 500000,
      'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
        .then((signedTx) => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err, hash) {
            if (!err) {
                console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
                )
            } else {
                console.log(
                "Something went wrong when submitting your transaction:",
                err
                )
            }
            }
        )
        })
        .catch((err) => {
        console.log(" Promise failed:", err)
        })
  }

  mintNFT("https://gateway.pinata.cloud/ipfs/QmPEEHvS6QaCfkN7iGLxbfHYqTvMV8svCtbeUi72tEN9mK")