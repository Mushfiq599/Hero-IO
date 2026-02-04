import { useNavigate } from "react-router-dom";
import { formatDownloads, formatRating } from "../utils/format";
import { IoDownloadOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

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
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-2 items-center gap-4">
        <div className="w-63 h-56 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900">{app.title}</h3>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="flex items-center rounded px-1 py-1 gap-1 bg-gray-100 text-green-400">
              <IoDownloadOutline />
              {formatDownloads(app.downloads)}
            </span>
            <span className="flex items-center gap-1 bg-gray-100 rounded px-1 py-1 text-orange-300">
              <FaStar />
              {formatRating(app.ratingAvg)}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
