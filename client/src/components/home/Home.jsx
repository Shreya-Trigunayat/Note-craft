import {Grid} from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home= ()=>{
    return (
        <>
            <Banner/>
            <Grid container>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                   <Categories/>
                </Grid>
                <Grid container item xs={12} md={6} sm={12} lg={9}>
                    <Posts/>
                </Grid>
            </Grid>
        </>
    )
}
export default Home;