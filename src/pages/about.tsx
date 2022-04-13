import { Wrapper, Page } from "../component";

import { Container, Typography, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

const About = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Page>
          <Typography variant="h2" marginTop={'50px'}>
            About us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum lorem pellentesque tincidunt lacus lectus fames ligula amet mauris, a dapibus quam tellus id cubilia euismod odio tincidunt, tristique odio hendrerit donec est inceptos lacus tristique fermentum. consectetur etiam velit ac facilisis consectetur imperdiet vitae, nostra tellus duis arcu aptent quisque aenean quam, cras himenaeos pharetra diam dictum iaculis. ad lectus nullam integer, nulla sodales interdum dictum, sagittis ac. facilisis amet torquent ullamcorper mattis commodo fames ad cubilia, torquent eget dictum leo mollis pulvinar lorem ullamcorper euismod, himenaeos orci lectus eu etiam praesent maecenas. platea vitae rhoncus iaculis erat blandit fusce ut etiam nam ut ipsum aenean, consectetur consequat fermentum vitae morbi lobortis fames tortor ut platea porta.
          </Typography>
          <Typography variant="body1">
            Potenti porttitor lobortis etiam pharetra vel mattis scelerisque feugiat, aliquam risus lobortis ligula conubia integer tincidunt, semper gravida habitant sit purus magna nostra. porta luctus sodales eu duis curabitur volutpat molestie, netus at ut in nullam vestibulum, semper consectetur donec integer faucibus consequat. sit cubilia odio quam dolor sodales viverra lobortis, orci massa vivamus risus taciti integer auctor, elementum mauris elementum magna scelerisque feugiat. scelerisque netus platea metus enim ornare mi scelerisque orci morbi dui, libero eu varius aptent etiam imperdiet neque vel venenatis, faucibus odio vitae molestie auctor euismod sagittis feugiat condimentum.
          </Typography>
          <Button variant="contained" href='/'>
            <ArrowBack />
            Voltar
          </Button>
        </Page>
      </Container>
    </Wrapper>
  )
}

export default About;
