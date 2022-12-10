import React from 'react';
import './Places.scss';
import { CONSTANTS } from '../../constants/enums';
import { Details } from '../details/Details';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

export function Places({ places }) {
    const capitalize = (string) => {
        return !string ? '' : string.charAt(0).toUpperCase() + string.slice(1)
    };
    // const [places] = useState(CONSTANTS.PLACES.PLACES);
    const [ratings] = useState(CONSTANTS.PLACES.RATINGS);
    const [rating, setRating] = useState('');
    const [types] = useState(CONSTANTS.PLACES.TYPES);
    const [type, setType] = useState(types[0]);
    

    return (
        <div className="container">
            <Typography variant="h6">
                { CONSTANTS.PLACES.HEADING }
            </Typography>
            <FormControl variant="standard" className="form-control">
                <InputLabel>{ CONSTANTS.PLACES.TYPE }</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    {
                        types.map((t, i) => {
                            return <MenuItem key={i} value={t}>{capitalize(t)}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <FormControl variant="standard" className="form-control">
                <InputLabel>{ CONSTANTS.PLACES.RATING }</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    {
                        ratings.map((r, i) => {
                            return <MenuItem key={i} value={r.rating}>{r.msg}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Grid container spacing={3} className="list">
                {
                    places?.filter(p => p.name).map((p, i) => {
                        return <Grid item key={i} xs={12}>
                            <Details place={ p }/>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
}