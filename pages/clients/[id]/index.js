import { useRouter } from "next/router";

const ClientsProjectsPage = () => {
    const router = useRouter();

    console.log(router.query);

    const loadProjectHandler = () => {
      //load-data.....

      //router.reload
      //router.replace('/clients/victor/projecta');
      router.push('/clients/victor/projecta');
    }

  return (
    <div>
      <h1>The Project in a Given Clients</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectsPage;
