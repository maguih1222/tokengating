import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  const [return1, setReturn1] = useState(null);
  const { address } = useAccount();

  //Contract Address textbox
  const [contractAddress, setContractAddress] = useState(
    "Enter Contract Address..."
  );
  const change = (event) => {
    setContractAddress(event.target.value);
  };

  const click = async () => {
    var list = document.getElementById("list");
    var chain = list.value;

    const postData = async () => {
      const response = await fetch("/api/verifier", {
        method: "POST",
        body: JSON.stringify({
          address: address,
          contractAddress: contractAddress,
          chain: chain,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en-US",
        },
      }).catch(function (error) {
        console.log("Error: ", error);
      });

      return response.json();
    };

    const valueFromCall = await postData();
    setReturn1(valueFromCall.returnValue);
  };

  return (
    <div className="App">
      <ConnectButton />
      <button onClick={click}>Verify Ownership of NFT</button>
      <input onChange={change} value={contractAddress}></input>
      <select name="chains" id="list">
        <option disabled hidden selected>
          Pick a chain...
        </option>
        <option value="mainnet">mainnet</option>
        <option value="polygon">polygon</option>
        <option value="polygonMumbai">polygonMumbai</option>
        <option value="goerli">goerli</option>
      </select>
      <div>{return1}</div>
    </div>
  );
}
export default App;
