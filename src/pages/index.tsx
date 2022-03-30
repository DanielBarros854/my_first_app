import { Wrapper, Page, TwoButtons } from "../component";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const HomePage = ({ people_data }) => (
  <Wrapper>
    <Container maxWidth="lg">
      <Page>
        <Typography variant="h2" color="initial" marginTop='50px'>
          Hello World with Next.js!
        </Typography>
        <TwoButtons>
        <Button
          sx={{ fontSize: 20 }}
          color="primary"
          href='/people'
        >
          People
        </Button>
        <Button
          sx={{ fontSize: 20 }}
          color="primary"
          href='/about'
        >
          About
        </Button>
      </TwoButtons>
    </Page>
  </Container>
  </Wrapper >
);

export default HomePage

{/* <div className='container'>
<h1>Hello World with Next.js!</h1>
<ul>
  <li>
    <Link href='/people'>
    <a>People</a>
    </Link>
  </li>
  <li>
    <Link href='/about'>
    <a>About</a>
    </Link>
  </li>
</ul>
</div> */}
