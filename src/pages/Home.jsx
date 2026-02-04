import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import { appsData } from "../data/appsData";

function StatCard({ value, label }) {
  return (
    <div className="bg-white/10 rounded-2xl px-6 py-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-white/80">{label}</div>
    </div>
  );
}

export default function Home() {
  const topApps = appsData.slice(0, 8);

  return (
    <div className="w-full">
      {/* HERO / BANNER (Figma Page 1) */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            We Build{" "}
            <span className="text-purple-600">Productive&nbsp;Apps</span>
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md"
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>

            <a
              className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP (Figma Page 1 purple section) */}
      <section className="bg-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-center text-white font-semibold text-lg md:text-xl">
            Trusted by Millions, Built for You
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard value="29.6M" label="Total Downloads" />
            <StatCard value="906K" label="Total Reviews" />
            <StatCard value="132+" label="Apps Published" />
          </div>
        </div>
      </section>

      {/* TRENDING APPS (Figma Page 1) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trending Apps
          </h2>
          <p className="mt-2 text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/apps"
            className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md px-10"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}

