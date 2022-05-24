import { Typography } from "@mui/material";
import ConnectWallet from "../connect-wallet/ConnectWallet";

export default function HomePage() {
    return (
        <div style={{ padding: "1rem 0", justifyContent: "center", maxWidth: "500px", padding: "20px" }}>
            <Typography variant="h5" paddingBottom="30px">Subscribe to your favorite content!</Typography>
            <ConnectWallet></ConnectWallet>
        </div>
    );
}