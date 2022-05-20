import Header from './components/all-pages/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
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
        <Link to="/provide-id">Provide Project ID</Link>
        <Link to="/mint-nft">Mint NFT</Link>
      </nav>
    </div>
  );
}

export default App;
