import { Box, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import * as React from 'react';

export default function CreatorForm() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
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
                                onChange={handleChange}
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
                                    // onChange={handleChange}
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
                    <Grid>
                        <Typography variant="h5">
                            Pricing
                        </Typography>
                    </Grid>
                    <Grid container spacing={6} sx={{ pt: 2, pb: 2 }}>
                        <Grid item>
                            <Typography variant="h5">
                                Recurring
                            </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Recurring?</InputLabel>
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
                    </Grid>
                    <Grid container  spacing={6} sx={{ pt: 2, pb: 2 }}> 
                        <Grid item>
                            <Typography variant="h5">
                                Timeline
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
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Time Unit</InputLabel>
                                <Select
                                    sx={{ minWidth: 120 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Subscription Limit"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={1}>Days</MenuItem>
                                    <MenuItem value={2}>Weeks</MenuItem>
                                    <MenuItem value={3}>Months</MenuItem>
                                    <MenuItem value={4}>Years</MenuItem>
                                </Select>
                            </FormControl>
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
                </Grid>
            </div>
        </Box>
    );
}