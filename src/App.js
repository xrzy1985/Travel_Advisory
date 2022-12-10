import React, { useEffect, useState } from 'react';
// HTTP
import { getPlaces } from './services/http';
// components
import { Header } from './components/header/Header';
import { Map } from './components/map/Map';
import { Places } from './components/places/Places';
// scss
import { CssBaseline, Grid } from '@mui/material';
import './index.scss';

export function App() {
    const [boundaries, setBoundaries] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        if (boundaries) {
            getPlaces(boundaries.sw, boundaries.ne).then(data => {
                if (data) {
                    setPlaces(data);
                }
            });
        }
    }, [coordinates, boundaries]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} className="grid">
                <Grid item={true} xs={12} md={4}>
                    <Places places={places}/>
                </Grid>
                <Grid item={true} xs={12} md={8}>
                    <Map 
                        coordinates={coordinates}
                        places={places}
                        setBoundaries={setBoundaries}
                        setCoordinates={setCoordinates}/>
                </Grid>
            </Grid>
        </>
    );
}