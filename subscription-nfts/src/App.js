import Header from './components/all-pages/Header';
import { Link, Route, Router, Routes, BrowserRouter } from 'react-router-dom';
// import { Switch } from 'react-router';
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
            margin: "1rem",
          }}
        >
          <Link to="/creator-or-buyer">Creator or Buyer</Link>
          <Link to="/creator-form">Creator Form</Link>
          <Link to="/select-project">Provide Project ID</Link>
          <Link to="/mint-nft">Mint NFT</Link>
          <Link to="/plan-options">See Plan Options</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/creator-or-buyor" element={<CreatorBuyer />} />
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
