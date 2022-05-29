import NavBar from "../components/NavBar";
import { useAccount } from "../contexts";

export default function Layout({ children }) {
  const account = useAccount();

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}