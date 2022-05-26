import { Typography } from "@mui/material";

const nftDetails = {
        name: 'NY Times',
        account: '0xb794f5ea0ba39494ce839613fffba74279579269',
        description: 'News subscription',
        tier: 'Basic',
        expiration: '1 year',
        price: '30'
}

export default function MintConfirmation() {

    return (
        <div style={{ padding: "1rem 0", justifyContent: "center", maxWidth: "500px", padding: "20px" }}>
            <Typography variant="h5" paddingBottom="30px">Subscription confirmed. Thank you for minting!</Typography>
            <Typography variant="body2">Name: {nftDetails.name}</Typography>
            <Typography variant="body2">Description: {nftDetails.description}</Typography>
            <Typography variant="body2">Tier: {nftDetails.tier}</Typography>
            <Typography variant="body2">Expiration: {nftDetails.expiration}</Typography>
            <Typography variant="body2">Price: {nftDetails.price} USDC</Typography>
        </div>
    );
}