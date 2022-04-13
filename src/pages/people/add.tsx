import { ContainerStyles, FormStyles, Wrapper } from '../../component';

import { Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Form, Formik } from 'formik';
import { string, object } from 'yup'

type People = {
  name: string;
  gender: any;
}

const schema = object().shape({
  name: string().required('Insert name'),
  gender: string().required('Insert gender'),
})

const HomePage = () => {
  const handleSubmit = async (values: People) => {
    const peoples = JSON.parse(localStorage.getItem('People'));
    peoples.push({
      id: (peoples.length + 1).toString(),
      name: values.name,
      gender: values.gender,
    })
    localStorage.setItem('People', JSON.stringify(peoples));
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
            validationSchema={schema}
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
                  Submit
                </Button>
              </FormStyles>
            </Form>
            )}
          </Formik>
          <Button variant="contained" href='/people'>
          <ArrowBack />
            Back
          </Button>
        </ContainerStyles>
      </Container>
    </Wrapper>
  )
};

export default HomePage
