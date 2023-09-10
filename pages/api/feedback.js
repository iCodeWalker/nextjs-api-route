// from here we don't export a react component,
// instead we create a function to handle incoming request,
// this function receives two arguments : request object and response object

function handler(req, res) {
  // here we can execute any server side code
  // any code we write here will never end up in client side code bundling, just as code written in
  // getServerSideProps.

  res.status(200).json({
    message: "This Works",
  });
}

export default handler;
