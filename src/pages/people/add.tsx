import { ContainerStyles, FormStyles } from './styles/addStyles';
import { Wrapper } from './styles/styles';

import { Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Fab, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { string, object } from 'yup'
import { ArrowBack } from '@mui/icons-material';
import Router from 'next/router';

type People = {
  name: string;
  gender: any;
}

const schema = object().shape({
  name: string().required('Insert name'),
  gender: string().required('Insert gender'),
})

const voltar = () => {
  const { pathname } = Router;
  if (pathname === '/people/add') Router.back()
}

const HomePage = () => {
  const handleSubmit = async (values) => {
    const data = await axios.post('http://localhost:3000/api/people/add', values, {
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'multipart/form-data, application/json',
      }
    })
  }

  return (
    <Wrapper>
      <Container>
        <ContainerStyles>
          <Typography variant="h2">
            People add
          </Typography>
          <Formik
            initialValues={{name: '', gender: ''}}
            onSubmit={handleSubmit}
          >
            {({errors, values, handleChange}) => (
            <Form encType="multipart/form-data">
              <FormStyles>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  margin="normal"
                  type="text"
                  onChange={handleChange}
                  helperText={errors.name}
                  required
                  sx={{ m: 1, minWidth: 120 }}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }} required>
                  <InputLabel id="select-label">Gender</InputLabel>
                  <Select
                    id="gender"
                    label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem key='Male' value="Male">Male</MenuItem>
                    <MenuItem key='Female' value="Female">Female</MenuItem>
                    <MenuItem key='Other' value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" type="submit" size="medium" sx={{ m: 2, minWidth: 80 }}>
                  Enviar
                </Button>
              </FormStyles>
            </Form>
            )}
          </Formik>
          <Fab variant="extended" color="primary" aria-label="add" onClick={voltar}>
            <ArrowBack />
            Voltar
          </Fab>
        </ContainerStyles>
      </Container>
    </Wrapper>
  )
};

export default HomePage
