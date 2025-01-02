
import {Box, Typography, styled} from '@mui/material';
import backgroundImage from '../../images/banner.jpeg';
import '../../App.css';

const Container= styled(Box)`
  display:flex;
   align-items:center;
   justify-content: center;
   margin-top: 70px;
`
const Image= styled(Box)`
   background-image: url(${backgroundImage});
   height: 40vh;
   z-index:-1;
   display:flex;
   align-items:center;
   justify-content: center;
   flex-direction: column;
   opacity: 0.8;
   width: 100vw;
   @media (max-width: 1000px) and (min-width: 500px) {
    height: 45vh;
    width: 100vw;
  }
  @media (max-width: 500px){
    height: 30vh;
    width: 100vw;
  }
`
const Heading= styled(Typography)`
    font-size: 60px;
    font-weight:500;
    color: black;
    margin-top: 30px;
    margin-bottom: 20px;
    line-height: 1;
    font-family:  "'Feeling Passionate', sans-serif";
    @media  (max-width: 1000px) and (min-width: 500px) {
        font-size: 40px;
        font-weight:600;
  }
  @media (max-width: 500px) and (min-width: 350px){
    font-size: 30px;
        font-weight:600;
  }
  @media(max-width: 350px){
    font-size: 20px;
        font-weight:600;
  }
`
const SubHeading= styled(Typography)`
     font-size: 20px;
     @media (max-width: 1000px) and (min-width: 500px) {
        font-size: 15px;
  }
  @media (max-width: 500px){
    font-size: 10px;

  }
     
`

const Banner= ()=>{
    return (
      <Container>
        <Image>
            <Heading>Your Thoughts, Organized</Heading>
            <SubHeading>Smart, fast, and secure – everything you need in a notes app.</SubHeading>
        </Image>
      </Container>
    )
}
export default Banner;