//(withRouter) used in classBased Components as a wrapper
import { useRouter } from "next/router";

//Since this folder contains a dynamic and static route
//any route that matched the static route will be skipped for the static route\
//i.e Staic route has more pirotity(higher-order)

const PortFolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The PortFolioProject Dynamic Page</h1>
    </div>
  );
};

export default PortFolioProjectPage;
