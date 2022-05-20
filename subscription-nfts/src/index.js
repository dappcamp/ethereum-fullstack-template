import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreatorBuyer from './components/creator-or-buyer/CreatorBuyer';
import CreatorForm from './components/creator-form/CreatorForm';
import ProvideProjectId from './components/buyer/provide-project-id/ProvideProjectId';
import MintNFT from './components/buyer/mint-nft/MintNFT';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/creator-or-buyer" element={<CreatorBuyer />} />
      <Route path="/creator-form" element={<CreatorForm />} />
      <Route path="/provide-id" element={<ProvideProjectId />} />
      <Route path="/mint-nft" element={<MintNFT />} />
    </Routes>
  </BrowserRouter>
);
