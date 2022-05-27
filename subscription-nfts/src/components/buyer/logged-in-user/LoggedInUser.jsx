import { Grid, Paper, Typography } from "@mui/material";
import StyledImage from './styled-image/StyledImage';

const nftDetails = {
        name: 'NY Times',
        account: '0xb794f5ea0ba39494ce839613fffba74279579269',
        description: 'News subscription',
        tier: 'Basic',
        expiration: '1 year',
        price: '30'
}

const imageAddresses = {
    free: [
        'data:image/png;base64,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',
        'https://bestpaintingsforsale.com/UploadPic/Edvard%20Munch/big/the%20Scream%20white%20and%20black.JPG',
        'https://xaviernewswire.com/wp-content/uploads/2014/11/american-gothic-artic-dot-edu.jpg?w=144'
    ],
    subscriber: [
        'https://www.chilloutpoint.com/images/2011/09/mona-lisa-parodies/mona-lisa-parodies-32.jpg',
        'https://i.pinimg.com/236x/68/14/aa/6814aa4a0391e214d28b18953d2bcf32--the-scream-partner.jpg',
        'https://149360821.v2.pressablecdn.com/wp-content/uploads/2022/03/American-gothic-Minion-parody.jpg'
    ]
}

export default function LoggedInUser() {
    // Note: disable viewing of subscriber only when user doesn't have appropriate nft
    return (
        <Grid>
            <Paper style={{padding: "5px", width: '300px'}}>
                <Typography variant="h4">
                    Free:
                </Typography>
            </Paper>
            <Grid container style={{padding: "20px"}}>
                {imageAddresses.free.map((image) => {
                    return <StyledImage image={image} />
                })}
            </Grid>
            <Paper style={{padding: "5px", width: '300px'}}>
                <Typography variant="h4">
                    Subscribers Only:
                </Typography>
            </Paper>

            <Grid container style={{padding: "20px"}}>
                {imageAddresses.subscriber.map((image) => {
                    return <StyledImage image={image} />
                })}
            </Grid>
        </Grid>
    );
}