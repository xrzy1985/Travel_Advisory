import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import './Header.scss';

export function Header() {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar" >
                <Typography variant="h5" className="title">
                    Travel Advisor
                </Typography>
                <div className="search-container">
                    <Typography variant="h6" className="title">
                        Explore new and exciting places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className="search">
                            <div className="searchIcon">
                                <Search></Search>
                            </div>
                            <InputBase
                                placeholder="Search" 
                                className="inputComponent"
                            />
                        </div>
                    {/* </Autocomplete> */}
                </div>
            </Toolbar>
        </AppBar>
    );
}