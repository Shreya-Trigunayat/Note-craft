
import { Box, styled, Typography, Link } from '@mui/material';
import {Email } from '@mui/icons-material';
import backgroundImage from '../../images/contact.jpeg'

const Banner = styled(Box)`
    background-image:  url(${backgroundImage});
    padding-top: 100px;
    width: 100%;
    height: 70vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    @media (max-width: 1110px) and (min-width: 900px){
        font-size: 30px;
  }
  @media (max-width: 900px) and (min-width: 800px){
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
const Typo= styled(Typography)`
  @media (max-width: 1110px) and (min-width: 900px){
        font-size: 40px;
  }
  @media (max-width: 900px) and (min-width: 800px){
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`


const Contact = () => {
    return (
        <Box>
            <Banner>
            <Wrapper>
                <Typo variant="h3">Getting in touch is easy!</Typo>    
                <Text variant="h5">
                send me an Email 
                    <Link href="mailto:shreyatrigunayat@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
            </Banner>
        </Box>
    );
}

export default Contact;