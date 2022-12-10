import React, { useState } from 'react';
import './Map.scss';
import { CONSTANTS } from '../../constants/enums';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import Rating from '@mui/lab';

export function Map({ coordinates, places, setBoundaries, setCoordinates }) {
    const [index, setIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const onEnter = (e) => setIsHovered(true);
    const onLeave = (e) => {
        setIsHovered(false);
        setIndex(null)
    };
    function onIndex(i) {
        setIndex(i);
    }
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBaS9Pxka-8NeBp8QFCNSDn98zSihvvSe0' }}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[ 50, 50, 50, 50 ]}
                options = {''}
                onChange = {(e) => {
                    setBoundaries({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
                onChildClick = {() => {}}
            >
                {
                    !places ? null :
                        places.map((p, i) => {
                            return <div className="marker-container" key={i} lat={Number(p.latitude)} lng={Number(p.longitude)}>
                                {
                                    isDesktop && (isHovered && index === i) ?
                                    <Paper elevation={3} className="paper"
                                        onMouseEnter={onEnter} onMouseLeave={onLeave}
                                    >
                                        <Typography variant="subtitle2" gutterBottom className="typography">
                                            { p.name }
                                        </Typography>
                                        <img alt={p.name} className="pointer" src={ p.photo ? p.photo.images.medium.url : CONSTANTS.DETAILS.IMAGE_PLACEHOLDER} />
                                    </Paper> :
                                    <LocationOnOutlined color="primary" fontSize="large"
                                        onMouseEnter={onEnter}  onMouseOver={() => onIndex(i)} onMouseLeave={onLeave}
                                    />
                                }
                            </div>
                        })
                }
            </GoogleMapReact>
        </div>
    );
}