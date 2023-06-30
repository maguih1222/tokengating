# Verbwire Simple Token Gating Example

This project demonstrates a very simple example of tokengating. The user connects their wallet to a webpage and can then enter information about a contract address. They will then receive a prompt that verifies whether their wallet holds an NFT from the given contract address or not. This project utilizes Next.js as well as the Verbwire JavaScript SDK.

## Prerequisites

Before running the project, ensure that you have the following dependencies installed:
- Node.js
- npm (Node Package Manager)
- Metamask Account (or some other wallet of your choice)

In addition, you'll need a Verbwire API Key. You can get a free API key [HERE](https://www.verbwire.com/auth/register)

## Steps to Run the Program Locally

1. In the env file, `.env`, input your Verbwire API key under the `VERBWIRE_API_KEY` element.

2. If you don't already have an NFT in your wallet as well as its contract address, you can mint an NFT [HERE](https://docs.verbwire.com/reference/post_nft-mint-mintfromfile).  Make sure you include your wallet address under the `recipientAddress` field!

If you don't already have a contract address to mint an NFT with, you can either deploy one via the Verbwire API or use the Verbwire dashboard to click to deploy. You can find a video demonstration of the latter example [HERE](https://www.youtube.com/watch?v=qeKoEA8Wn64). Make sure your contract address' chain is on mainnet, polygon, polygonMumbai, or goerli, as those are the chains this project supports.

3. From your command prompt, type in the following to start the program:

    ```bash
    npm run dev
    ```

4. Open your browser and go to `localhost:3000`. Connect your wallet to the webpage and enter the contract address you want to use as well as the chain it is on, and click the "Verify Ownership of NFT" button to see your result!

You can also watch this video tutorial [HERE]([https://docs.verbwire.com/reference/post_nft-mint-mintfromfile](https://www.youtube.com/watch?v=w3QGic64QfM&ab_channel=maguih1222)https://www.youtube.com/watch?v=w3QGic64QfM&ab_channel=maguih1222) if needed which showcases a runthrough of the project.
