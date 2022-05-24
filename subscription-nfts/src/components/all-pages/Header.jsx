import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { connectWallet } from '../../utils/common';
import { useAccount, useContracts } from '../../contexts';
import Address from './Address';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const account = useAccount();
  const isMetamaskConnected = !!account;
  const { nftSubContract } = useContracts();
  let navigate = useNavigate();

  useEffect(() => {
    if (isMetamaskConnected) {
      navigate("/creator-or-buyer")
    }
  }, [account, isMetamaskConnected, nftSubContract]);

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Subscription NFTs
            </Typography>
            {!isMetamaskConnected && (
              <Button 
                color="inherit"
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            )}
            {isMetamaskConnected && (
                <Address
                  address={account}
                />
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
}