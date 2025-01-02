import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';
import backgroundImagee from '../../images/about.jpeg'

const Banner = styled(Box)`
    background-image: url(${backgroundImagee});
    padding-top: 100px;
    width: 100%;
    height: 73vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
  @media (max-width: 800px) {
    height: 400px;
  }
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
        font-size: 18px;
  }
  @media (max-width: 900px) and (min-width: 800px){
    font-size: 14px;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const About = () => {

    return (
        <Box>
        <Banner>
        <Wrapper>
                <Text variant="h5">I am a recent graduate from Madan Mohan Malaviya University of Technology (MMMUT), eager to embark on a journey as a Software Engineer. With a strong foundation in software development and a passion for building innovative solutions, I have honed my skills in creating websites, desktop applications, and corporate software.

I thrive on challenges and am always excited to collaborate on meaningful projects. Some of my favorite projects are available for you to explore:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Shreya-Trigunayat" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                Whether you need something built or simply wish to discuss ideas, feel free to reach out to me via email:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="mailto:shreyatrigunayat@gmail.com" color="inherit" target="_blank">
                            <Email />
                        </Link>
                    </Box>  
                </Text>
            </Wrapper>
        </Banner>
            
        </Box>
    )
}

export default About;