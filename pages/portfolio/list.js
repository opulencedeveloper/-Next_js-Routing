//Since this folder contains a dynamic route and this route(static route)
//any route that matched the static route will be skipped for the this route
//i.e Staic route has more pirotity(higher-order)

const ListPage = () => {
    return (
      <div>
        <h1>The List Page</h1>
      </div>
    );
  };
  
  export default ListPage;
  