import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { appsData } from "../data/appsData";
import { installApp, isInstalled } from "../utils/storage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === Number(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (app) setInstalled(isInstalled(app.id));
  }, [app]);

  // ❌ App not found (Figma page 6)
  if (!app) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
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
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 rounded-2xl object-cover"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="mt-1 text-gray-500">{app.companyName}</p>

          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <span>⭐ {app.ratingAvg}</span>
            <span>⬇ {app.downloads.toLocaleString()}</span>
            <span>📝 {app.reviews.toLocaleString()} reviews</span>
            <span>📦 {app.size}MB</span>
          </div>

          <button
            className={`btn mt-6 ${
              installed
                ? "btn-disabled"
                : "bg-purple-600 hover:bg-purple-700 text-white border-none"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>

      {/* Review Chart */}
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

      {/* Toast */}
      <div
        id="install-toast"
        className="hidden fixed bottom-6 right-6 alert alert-success shadow-lg"
      >
        App Installed Successfully!
      </div>
    </div>
  );
}
