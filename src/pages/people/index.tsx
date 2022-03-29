import { Wrapper } from './styles/styles';
import { PeopleInterface } from 'data';

import axios from 'axios';
import Container from '@mui/material/Container'
import AddIcon from '@mui/icons-material/Add';
import { List, ListItemText, Typography, Button, Fab } from '@mui/material';
import Router from 'next/router';
import { ListStyles } from './styles/indexStyles';

const Add = () => {
  const { pathname } = Router;
  if (pathname === '/people') Router.push('people/add')
}


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
        <Fab variant="extended" color="primary" aria-label="add" onClick={Add}>
          <AddIcon sx={{ mr: 1 }} />
          Add people
        </Fab>
      </ListStyles>
    </Container>
  </Wrapper>
);

HomePage.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/people/peoples')

  return { people_data: response.data }
}

export default HomePage
