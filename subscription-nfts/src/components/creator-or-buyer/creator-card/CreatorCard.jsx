import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CreatorCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    Do you want to create a new subscription type?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Create Subscription</Button>
            </CardActions>
        </Card>
    );
}