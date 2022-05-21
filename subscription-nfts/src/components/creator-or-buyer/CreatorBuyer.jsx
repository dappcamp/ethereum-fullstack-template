import { Grid } from '@mui/material';
import BuyerCard from './buyer-card/BuyerCard';
import CreatorCard from './creator-card/CreatorCard';

export default function CreatorBuyer() {
    return (
        <Grid container justifyContent="center" spacing ={6}>
            <Grid item >
                <BuyerCard />
            </Grid>
            <Grid item >
                <CreatorCard />
            </Grid>
        </Grid>
    );
}