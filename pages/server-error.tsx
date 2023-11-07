const ServerError = () => {
  return <div>server-error</div>;
};

export const getServerSideProps = async (context: any) => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  if (Math.random() > 0.5) throw new Error("err");

  return { props: {} };
};

export default ServerError;
