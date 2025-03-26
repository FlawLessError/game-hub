import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Oops";
  let message = "There seems to be an error somewhere!";

  console.log(error instanceof Error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    title = "404";
    message = "The page you're looking for doesn't exists!";
  }

  return (
    <>
      <NavBar />
      <div className="container" data-type="wide">
        <ErrorMessage title={title} message={message} />
      </div>
    </>
  );
};

export default ErrorPage;
