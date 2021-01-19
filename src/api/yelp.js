import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ELIu-X_XivgA__AOhLfw4M_FcmUt6d_vYx2NZABYr5tiqmKnuc6lkXM37Uh-8ynG_j2c078wVT70jntmRePDxFmYBzq962nbUjmTFscwdAZ9AmbPIVbT4xSat50EYHYx'
    }
});
