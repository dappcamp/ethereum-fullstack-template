import { Typography } from "@mui/material";


const subDetails = {
        name: 'NY Times',
        account: '0xb794f5ea0ba39494ce839613fffba74279579269',
        description: 'News subscription',
        tier: 'Basic',
        expiration: '1 year',
        price: '30'
}

export default function CreatorConfirmation() {

    return (
        <div style={{ padding: "1rem 0", justifyContent: "center", maxWidth: "500px", padding: "20px" }}>
            <Typography variant="h5" paddingBottom="30px">Subscription created. Thank you for minting!</Typography>
            <Typography variant="body2">Name: {subDetails.name}</Typography>
            <Typography variant="body2">Description: {subDetails.description}</Typography>
            <Typography variant="body2">Tier: {subDetails.tier}</Typography>
            <Typography variant="body2">Expiration: {subDetails.expiration}</Typography>
            <Typography variant="body2">Price: {subDetails.price} USDC</Typography>
        </div>
    );
}