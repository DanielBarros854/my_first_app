import { Wrapper, Page, TwoButtons } from "../component";
import { Container, Typography, Button } from "@mui/material";

const HomePage = () => (
  <Wrapper>
    <Container maxWidth="lg">
      <Page>
        <Typography variant="h2" marginTop='50px'>
          Hello World with Next.js!
        </Typography>
        <TwoButtons>
        <Button
          sx={{ fontSize: 20 }}
          color="primary"
          href='/people'
          variant="contained"
        >
          People
        </Button>
        <Button
          sx={{ fontSize: 20 }}
          href='/about'
          color="primary"
          variant="contained"
        >
          About
        </Button>
      </TwoButtons>
    </Page>
  </Container>
  </Wrapper >
);

export default HomePage
