import axios from 'axios';
import { CONSTANTS } from '../constants/enums';

export async function getPlaces(sw, ne) {
    const options = {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
        },
        headers: {
            'X-RapidAPI-Key': CONSTANTS.AXIOS.KEY,
            'X-RapidAPI-Host': CONSTANTS.AXIOS.GET_PLACES.HOST
        }
    };
    try {
        const { data: { data }} = await axios.get(CONSTANTS.AXIOS.GET_PLACES.URL, options);
        console.log(data);
        return data ? data : {};
    } catch (err) {
        console.error(err);
    }
}