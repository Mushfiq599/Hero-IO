import { useNavigate } from "react-router-dom";
import { formatDownloads, formatRating } from "../utils/format";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apps/${app.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left"
      aria-label={`Open details for ${app.title}`}
    >
      <div className="bg-white rounded-xl border hover:shadow-md transition p-4 flex items-center gap-4">
        {/* Image */}
        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{app.title}</h3>

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
      </div>
    </button>
  );
}
