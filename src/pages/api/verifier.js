const verbwire = require("verbwire")(process.env.VERBWIRE_API_KEY);

async function compareAddresses(address1, address2, c) {
  let compareInfo = {
    walletAddress: address1,
    contractAddress: address2,
    chain: c,
  };

  return verbwire.data.isWalletHolderOfToken(compareInfo);
}

export default function handler(req, res) {
  const walletAddress = req.body.address;
  const contractAddress = req.body.contractAddress;
  const chain = req.body.chain;
  compareAddresses(walletAddress, contractAddress, chain).then(async function (
    response
  ) {
    if (response.isWalletHolderOfToken) {
      return res
        .status(200)
        .send({ returnValue: "You have an NFT from this contract address!" });
    } else {
      return res.status(200).send({
        returnValue: "You do not have an NFT from this contract address...",
      });
    }
  });
}
