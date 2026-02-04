import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import notFound from "../assets/error-404.png";

export default function ErrorPage() {
  useRouteError(); // keeps router happy

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center">
          {/* الصورة هنا — change path */}
          <img
            src={notFound}
            alt="Page not found"
            className="mx-auto w-72 max-w-full"
          />

          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900">
            Oops, page not found!
          </h1>

          <p className="mt-2 text-gray-600">
            The page you are looking for is not available.
          </p>

          <Link
            to="/"
            className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md mt-6 px-10"
          >
            Go Back!
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
