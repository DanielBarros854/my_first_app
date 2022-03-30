import { Wrapper, TwoButtons, ListStyles } from '../../component';
import { PeopleInterface } from 'data';

import axios from 'axios';
import { ArrowBack, Add } from '@mui/icons-material';
import { List, ListItemText, Typography, Button, Container } from '@mui/material';

const HomePage = ({ people_data }) => (
  <Wrapper>
    <Container>
      <ListStyles>
        <Typography variant='h2'>
          People list
        </Typography>
        <List>
          {
            people_data.map((people: PeopleInterface) => (<ListItemText key={people.id} primary={`key= ${people.id} name= ${people.name}`} />))
          }
        </List>
        <TwoButtons>
          <Button variant="contained" href='/'>
            <ArrowBack />
            Back
          </Button>
          <Button variant="contained" href='/people/add'>
            <Add sx={{ mr: 1 }} />
            Add people
          </Button>
        </TwoButtons>
      </ListStyles>
    </Container>
  </Wrapper>
);

HomePage.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/people/getAll')

  return { people_data: response.data }
}

export default HomePage
