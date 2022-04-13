import { Wrapper, TwoButtons, ListStyles } from '../../component';
import { people, PeopleInterface } from 'data';

import { List, ListItemText, Typography, Button, Container } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Add from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [people_data, set_people] = useState([])

  useEffect(() => {
    let people_data = JSON.parse(localStorage.getItem('People'));
    if (!people_data) {
      const data = JSON.stringify(people);
      localStorage.setItem('People', data)
      people_data = data;
      set_people(JSON.parse(people_data))
    } else {
      set_people(people_data)
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <ListStyles>
          <Typography variant='h2' marginTop='50px'>
            People list
          </Typography>
          <List sx={{ marginTop: 10 }}>
            {
              people_data.map((people: PeopleInterface) => (<ListItemText key={people.id} primary={`key: ${people.id} name: ${people.name}`} />))
            }
          </List>
          <TwoButtons sx={{ marginTop: 15 }}>
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
  )
};

export default HomePage
