import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ data }) {
    let navigate = useNavigate();
    
    function handleClick() {
        navigate("/plan-options")
    }

    return (
        <Grid item>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5">
                        {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {data.account}
                    </Typography>
                    <Typography variant="body2">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={handleClick}
                    >Select Project</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}