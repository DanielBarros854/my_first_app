import Link from "next/link";


const HomePage = ({ people_data }) => (
  <div className='container'>
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
  </div>
);

export default HomePage
