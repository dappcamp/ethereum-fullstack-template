import { Paper } from '@mui/material';

export default function StyledImage({image}) {
    console.log('image: ', image)
    return (  
        <Paper variant="outlined" style={{marginLeft: "20px", marginRight: "20px", padding: "5px"}}>
            <img style={{height: "200px", maxWidth: "200px"}} src={image} />
        </Paper>    
    );
}