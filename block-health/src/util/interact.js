import { pinJSONToIPFS } from "./pinata.js";
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const fromWalletID = '0xb884BeeeED09B787d12253058c55cdA07DBB6FEa'
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


export async function mintNFT(targetWalletID) {

  if (targetWalletID == fromWalletID) {
    return 1;
  }

  let name = "BlockHealthMint"
  let url = "https://gateway.pinata.cloud/ipfs/QmPEEHvS6QaCfkN7iGLxbfHYqTvMV8svCtbeUi72tEN9mK"
  let description = "Block Health Test Mint"

  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  let contract = await new web3.eth.Contract(contractABI, targetWalletID);

  const transactionParameters = {
    to: targetWalletID, // Required except during contract publications.
    from: fromWalletID, // must match user's active address.
    gas: 600000,
    data: contract.methods
      .mintNFT(fromWalletID, tokenURI)
      .encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(transactionParameters, PRIVATE_KEY)
  signPromise
      .then((signedTx) => {
      web3.eth.sendSignedTransaction(
          signedTx.rawTransaction, 
          function (err, hash) {
          if (!err) {
            console.log("Mint Success")
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
      });
  return (await signPromise).transactionHash
};