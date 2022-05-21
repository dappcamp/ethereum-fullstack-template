import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function PricingOptions({ pricing }) {
    // const [priceChoice, setPriceChoice] = React.useState(0);

    // const handleChange = (event) => {
    //     setPriceChoice(event.target.value);
    // }
    
    return (
       <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                //   value={priceChoice}
                //   onChange={handleChange}
                label="Price"
                >
                    {pricing.map((price) => {
                        return (
                            <MenuItem>
                                ${price.price} / {price.timeFrame}     
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    );
}