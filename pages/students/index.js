import Students from '../../components/students';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { students: data }
  };
}

export default Students;
