import { Button } from '@mui/material';
import { connectWallet } from '../../utils/common';

export default function ConnectWallet() {
    return (
        <Button
            variant="contained"
            onClick={connectWallet}
        >
            Connect Wallet
        </Button>
    );
}