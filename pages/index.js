import Link from "next/link";

const HomePage = () => {
  return ( 
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* <Link replace href='/portfolio'>Portfolio</Link> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
