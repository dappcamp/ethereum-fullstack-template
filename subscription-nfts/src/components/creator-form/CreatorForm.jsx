import { Box, Button, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import * as React from 'react';
import { useContracts } from '../../contexts';

export default function CreatorForm() {
    const { nftSubContract } = useContracts();
    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');
    const [limitYN, setLimitYN] = React.useState(false);
    const [limit, setLimit] = React.useState(0);
    const [numTiers, setNumTiers] = React.useState(0);
    const [tierList, setTierList] = React.useState([]);
    const [expiring, setExpiration] = React.useState(false);
    const [expirationTimeline, setExpirationTimeline] = React.useState(0);
    const [expirationTimeUnit, setExpirationTimeUnit] = React.useState('');
    const [cost, setCost] = React.useState(0);
    const [currency, setCurrency] = React.useState('');
    const [mintAddress, setMintAddress] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    const mintNft = async (address) => {
        try {
            // will need to define this stuff
            // const txn = await nftSubContract.mint(address);
            // await txn.wait();
            console.log('try');

        } catch (e) {
            console.log(e);
        }
    }


    return (
        <Box
            component="form"
        >
            <div>
                <Grid container sx={{ pt: 2, pl: 4 }}>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Subscription Name
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Name"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleNameChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Limited Subscriptions
                            </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Subscription Limit</InputLabel>
                                <Select 
                                    sx={{ minWidth: 200 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Subscription Limit"
                                    // onChange={handleLimitChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Limit
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Max Number of Subs"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Number of Tiers
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Number of Tiers"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Tier Names
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Tier Name"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Expiring
                            </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Expiring?</InputLabel>
                                <Select
                                    sx={{ minWidth: 120 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Subscription Limit"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Expiration Timeline
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Expiration Timeline"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>    
                    </Grid>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Cost
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Number"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                                <Select
                                    sx={{ minWidth: 120 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Subscription Limit"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={1}>USDC</MenuItem>
                                    <MenuItem value={2}>ETH</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained"
                            onClick={() => mintNft(mintAddress)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}