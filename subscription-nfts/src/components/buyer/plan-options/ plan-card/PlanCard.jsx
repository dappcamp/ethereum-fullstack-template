import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PricingOptions from './pricing-options/PricingOptions';

export default function PlanCard({ plan }) {
    return (
        <Grid item xs={4} >
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5">
                        {plan.name}
                    </Typography>
                    <PricingOptions pricing={plan.pricing} />
                    <Typography variant="body1">
                        Expiration Date: {plan.expirationDate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Select Project</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}