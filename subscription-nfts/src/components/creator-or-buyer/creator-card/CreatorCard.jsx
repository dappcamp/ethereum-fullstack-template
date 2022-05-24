import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CreatorCard() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/creator-form");
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    Do you want to create a new subscription type?
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={handleClick}
                >Create Subscription</Button>
            </CardActions>
        </Card>
    );
}