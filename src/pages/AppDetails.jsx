import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { appsData } from "../data/appsData";
import { installApp, isInstalled } from "../utils/storage";
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,} from "recharts";
import AppError from "../assets/App-Error.png"
import Star from "../assets/icon-ratings.png"
import Downloads from "../assets/icon-downloads.png"
import Reviews from "../assets/icon-review.png"
import { formatDownloads } from "../utils/format";

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === Number(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (app) setInstalled(isInstalled(app.id));
  }, [app]);

  if (!app) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <img
            src={AppError}
            alt="App not found"
            className="mx-auto w-72 max-w-full"
          />
        <h1 className="text-4xl font-bold">OPPS!</h1>
        <p className="mt-2 text-gray-600">APP NOT FOUND</p>
        <Link to="/apps" className="btn btn-primary mt-6">
          Go Back
        </Link>
      </div>
    );
  }

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    document.getElementById("install-toast")?.classList.remove("hidden");
    setTimeout(
      () =>
        document.getElementById("install-toast")?.classList.add("hidden"),
      2000
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-80 h-80 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="mt-1 text-gray-500 pb-4 border-b border-gray-300">Developed by <span className="text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {app.companyName}</span>
              </p>

          <div className="mt-4 flex flex-wrap text-sm gap-10">
            <span className="grid text-center text-4xl font-extrabold pt-4">
              <img
            src={Downloads}
            alt="downloads"
            className="mx-auto w-8 max-w-full py-4"
          />
              {formatDownloads(app.downloads)}
              <span className="text-sm font-normal text-gray-500">Downloads</span>
              </span>
              
            <span className="grid text-center text-4xl font-extrabold pt-4">
              <img
            src={Star}
            alt="star"
            className="mx-auto w-8 max-w-full py-4"
          /> 
          {app.ratingAvg}
          <span className="text-sm font-normal text-gray-500">Average Ratings</span>
          </span>
            
            <span className="grid text-center text-4xl font-extrabold pt-4">
              <img
            src={Reviews}
            alt="Reviews"
            className="mx-auto w-8 max-w-full py-4"
          />
              {app.reviews}
              <span className="text-sm font-normal text-gray-500">Total Reviews</span>
              </span>
          </div>

          <button
            className={`btn mt-6 ${
              installed
                ? "btn-disabled"
                : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now ( ${app.size}MB)`}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        id="install-toast"
        className="hidden fixed bottom-6 right-6 alert alert-success shadow-lg"
      >
        App Installed Successfully!
      </div>
    </div>
  );
}
