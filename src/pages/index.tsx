import axios from 'axios';

const HomePage = ({ people_data }) => (
  <div className='container'>
    <h1>Hello World with Next.js!</h1>
    <h2>User list</h2>
    <ul>
      {
        people_data.map((people) => (<li key={people}>{`key= ${people.id} name= ${people.name}`}</li>))
      }
    </ul>
  </div>
);

HomePage.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/people')

  return { people_data: response.data }
}

export default HomePage
