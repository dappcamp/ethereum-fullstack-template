import Header from './components/all-pages/Header';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import CreatorBuyer from './components/creator-or-buyer/CreatorBuyer';
import CreatorForm from './components/creator-form/CreatorForm';
import BuyerSelectProject from './components/buyer/buyer-select-project/BuyerSelectProject';
import MintNFT from './components/buyer/mint-nft/MintNFT';
import PlanOptions from './components/buyer/plan-options/PlanOptions';

function App() {
  return (
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
          <Link to="/mint-nft" style={{ padding: "5px", margin: "5px"}}>
            Mint NFT
          </Link>
          <Link to="/plan-options" style={{ padding: "5px", margin: "5px"}}>
            See Plan Options
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/creator-or-buyer" element={<CreatorBuyer />} />
          <Route path="/creator-form" element={<CreatorForm />} />
          <Route path="/select-project" element={<BuyerSelectProject />} />
          <Route path="/mint-nft" element={<MintNFT />} />
          <Route path="/plan-options" element={<PlanOptions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
