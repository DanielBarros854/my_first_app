import axios from 'axios';

const HomePage = ({ dados }) => (
    <div className='container'>
      <h1>Hello World with Next.js!</h1>
      <h2>Bem vindo {dados.name}</h2>
    </div>
);

HomePage.getInitialProps = async () => {
  console.log(process.env.API_KEY)
  const response = await axios.post(
    process.env.API_KEY,
    { name: 'Daniel Barros' }
    )

  return { dados: response.data }
}

export default HomePage
