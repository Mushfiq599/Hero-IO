import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  useRouteError(); // keeps router happy
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Oops, page not found!</h1>
      <p className="text-gray-500">The page you are looking for is not available.</p>
      <Link className="btn btn-primary" to="/">Go Back!</Link>
    </div>
  );
}
