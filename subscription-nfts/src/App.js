import { useEffect, useState } from "react";
import Header from './components/all-pages/Header';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import CreatorBuyer from './components/creator-or-buyer/CreatorBuyer';
import CreatorForm from './components/creator-form/CreatorForm';
import BuyerSelectProject from './components/buyer/buyer-select-project/BuyerSelectProject';
import MintNFT from './components/buyer/mint-nft/MintNFT';
import PlanOptions from './components/buyer/plan-options/PlanOptions';
import MintConfirmation from "./components/buyer/mint-confirmation/MintConfirmation";
import { AccountContext, ContractsContext } from "./contexts";
import {
  networkName,
  getEthereumObject,
  setupEthereumEventListeners,
  getSignedContract,
  getCurrentAccount,
} from "./utils/common";

function App() {
  const [account, setAccount] = useState(null);
  // const [contracts, setContracts] = useState({
  //   campContract: null,
  //   dcWarriorsContract: null,
  //   stakingContract: null,
  // });


  const load = async () => {
    const ethereum = getEthereumObject();
    console.log('eth: ', ethereum);
    if (!ethereum) {
      return;
    }

    setupEthereumEventListeners(ethereum);

    // const campContract = getSignedContract(
    //   campContractAddr,
    //   campSolContract.abi
    // );
    // const dcWarriorsContract = getSignedContract(
    //   dappCampWarriorsContractAddr,
    //   nftSolContract.abi
    // );
    // const stakingContract = getSignedContract(
    //   stakingContractAddr,
    //   stakingSolContract.abi
    // );

    // if (!campContract || !dcWarriorsContract || !stakingContract) return;

    const currentAccount = await getCurrentAccount();
    // setContracts({ campContract, dcWarriorsContract, stakingContract });
    setAccount(currentAccount);
  };

  useEffect(() => {
    load();
  }, []);


  return (
    <AccountContext.Provider value={account}>
      {/* <ContractsContext.Provider value={contracts}> */}
        <BrowserRouter>
          <div>
            <Header />
            <nav
              style={{
                border: "solid 1px",
                padding: "10px",
                margin: "10px"
              }}
            >
              <Link to="/creator-or-buyer" style={{ padding: "5px", margin: "5px"}}>
                Creator or Buyer
              </Link>
              <Link to="/creator-form" style={{ padding: "5px", margin: "5px"}}>
                Creator Form
              </Link>
              <Link to="/select-project" style={{ padding: "5px", margin: "5px"}}>
                Select Project
              </Link>
              <Link to="/plan-options" style={{ padding: "5px", margin: "5px"}}>
                See Plan Options
              </Link>
              <Link to="/mint-nft" style={{ padding: "5px", margin: "5px"}}>
                Mint NFT
              </Link>
              <Link to="/mint-confirmation" style={{ padding: "5px", margin: "5px"}}>
                Mint Confirmation
              </Link>
            </nav>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/creator-or-buyer" element={<CreatorBuyer />} />
              <Route path="/creator-form" element={<CreatorForm />} />
              <Route path="/select-project" element={<BuyerSelectProject />} />
              <Route path="/plan-options" element={<PlanOptions />} />
              <Route path="/mint-nft" element={<MintNFT />} />
              <Route path="/mint-confirmation" element={<MintConfirmation />} />
            </Routes>
          </div>
        </BrowserRouter>
      {/* </ContractsContext.Provider> */}
    </AccountContext.Provider>
  );
}

export default App;

