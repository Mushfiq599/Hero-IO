import { formatDownloads, formatRating } from "../utils/format";

export default function InstalledAppCard({ app, onUninstall }) {
  return (
    <div className="bg-white rounded-xl border p-4 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{app.title}</h3>
        <p className="text-xs text-gray-500 truncate">{app.companyName}</p>

        <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <span className="opacity-70">⬇</span>
            {formatDownloads(app.downloads)}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {formatRating(app.ratingAvg)}
          </span>
        </div>
      </div>

      <button
        onClick={() => onUninstall(app.id)}
        className="btn btn-sm btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        Uninstall
      </button>
    </div>
  );
}
