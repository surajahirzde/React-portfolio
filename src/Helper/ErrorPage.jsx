import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops, Some Error Happened</h1>
      <p>
        <strong>Error</strong> : {error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
