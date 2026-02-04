import { useEffect, useMemo, useState } from "react";
import AppCard from "../components/AppCard";
import Loading from "../components/Loading";
import { appsData } from "../data/appsData";
import { FaSearch } from "react-icons/fa";
import AppError from "../assets/App-Error.png"

export default function Apps() {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => { 
    setSearching (true);
    const t = setTimeout(() => setSearching(false), 250); 
    return () => clearTimeout(t);
  }, [query]);

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return appsData;
    return appsData.filter((app) => app.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our All Applications
        </h1>
        <p className="mt-2 text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-gray-800 font-medium">
          ({filteredApps.length}) Apps Found
        </div>
        <div className="w-full sm:w-80">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <span className="text-gray-400">
              <FaSearch />
            </span>
            <input type="text" className="grow" placeholder="search Apps" value={query}
              onChange={(e) => setQuery(e.target.value)}/>
          </label>
        </div>
      </div>
      {searching ? (
        <Loading />
      ) : filteredApps.length === 0 ? (
        <div className="mt-12 text-center">
          <img
                      src={AppError}
                      alt="Page not found"
                      className="mx-auto w-72 max-w-full"
                    />
          <h2 className="text-2xl font-bold text-gray-900">No App Found</h2>
          <p className="mt-2 text-gray-600">Try a different keyword.</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
