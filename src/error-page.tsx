import { useRouteError } from "react-router-dom";

interface RouterError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error: RouterError = useRouteError() as RouterError;
	console.log(`Error: ${error}`);
  return (
    <div id="error-page" className="text-custom-text-100">
      <h1 className="text-light-gray">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
