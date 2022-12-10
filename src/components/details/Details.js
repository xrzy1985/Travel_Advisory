import React from 'react';
import './Details.scss';
import { CONSTANTS } from '../../constants/enums'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import PhoneOn from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';

export function Details({ place }) {
    console.log(place);
    return (
        <Card elevation={6}>
            <CardMedia
                image={ place.photo ? place.photo.images.medium.url : CONSTANTS.DETAILS.IMAGE_PLACEHOLDER }
                style={{ height: 200 }} />
            <CardContent>
                <Typography gutterBottom variant="h6">{ place.name }</Typography>
                {   !place?.cuisine ? null :
                    place.cuisine.map((p,i) => {
                        return <Chip key={`${p.name}_${i}`} size="small" label={p.name} className="chip"></Chip>
                    })
                }
                {   place?.price_level ?
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{ place.price_level }</Typography>
                    </Box> : null
                }
                {   place?.ranking ?
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">{ place.ranking }</Typography>
                    </Box> : null
                }
                {
                    place?.awards?.map((award, i) => {
                        return <Box my={1} key={`box_${i}`} display="flex" alignItems="center" justifyContent="space-between">
                            <img alt={ award.display_name } key={`img_${i}`} src={ award.images.small }  />
                            <Typography variant="subtitle2" color="textSecondary">{ award.diplay_name }</Typography>
                        </Box>
                    })
                }
                {
                    !place?.address ? null :
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className="subtitle">
                        <LocationOn/>{place.address}
                    </Typography>
                }
                {
                    !place?.phone ? null :
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className="space">
                        <PhoneOn/>{place.phone}
                    </Typography>
                }
                {
                    !place?.web_url ? null :
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle1">Links</Typography>
                        <CardActions>
                            {   !place.web_url ? null :
                                <Button size="small" color="primary" onClick={() => {
                                    window.open(place.web_url, '_blank');
                                }}>
                                    Trip Advisor
                                </Button>
                            }
                            {   !place.website ? null :
                                <Button size="small" color="primary" onClick={() => {
                                    window.open(place.website, '_blank');
                                }}>
                                    Website
                                </Button>
                            }
                        </CardActions>
                    </Box>
                }
            </CardContent>
        </Card>
    );
}