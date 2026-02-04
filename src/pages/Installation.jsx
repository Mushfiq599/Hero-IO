import { useEffect, useMemo, useState } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import { getInstalledApps, uninstallApp } from "../utils/storage";

export default function Installation() {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    setInstalled(getInstalledApps());
  }, []);

  const sortedInstalled = useMemo(() => {
    const list = [...installed];
    if (sort === "high-low") list.sort((a, b) => b.downloads - a.downloads);
    if (sort === "low-high") list.sort((a, b) => a.downloads - b.downloads);
    return list;
  }, [installed, sort]);

  const showToast = (msg) => {
    const el = document.getElementById("install-page-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden");
    setTimeout(() => el.classList.add("hidden"), 2000);
  };

  const handleUninstall = (id) => {
    uninstallApp(id);
    const updated = getInstalledApps();
    setInstalled(updated);
    showToast("App Uninstalled Successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Installation
        </h1>
        <p className="mt-2 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-gray-800 font-medium">
          ({installed.length}) Installed Apps
        </div>

        <div className="w-full sm:w-64">
          <select
            className="select select-bordered w-full"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="high-low">High - Low</option>
            <option value="low-high">Low - High</option>
          </select>
        </div>
      </div>
      {sortedInstalled.length === 0 ? (
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            No Installed Apps
          </h2>
          <p className="mt-2 text-gray-600">
            Install an app from the details page first.
          </p>
        </div>
      ) : (
        <div className=" w-full mt-10 grid grid-cols-1 gap-4">
          {sortedInstalled.map((app) => (
            <InstalledAppCard
              key={app.id}
              app={app}
              onUninstall={handleUninstall}
            />
          ))}
        </div>
      )}
      <div
        id="install-page-toast"
        className="hidden fixed bottom-6 right-6 alert alert-info shadow-lg"
      >
        Done
      </div>
    </div>
  );
}
