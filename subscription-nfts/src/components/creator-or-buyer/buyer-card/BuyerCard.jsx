import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function BuyerCard() {
    let navigate = useNavigate();
    function handleClick() {
        console.log('clicked');
        navigate("/select-project");
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    Do you want to purchase a subscription?
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={handleClick}
                >Buy Here</Button>
            </CardActions>
        </Card>
    );
}