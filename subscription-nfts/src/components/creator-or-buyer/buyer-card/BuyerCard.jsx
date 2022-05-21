import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BuyerCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    Do you want to purchase a subscription?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy Here</Button>
            </CardActions>
        </Card>
    );
}