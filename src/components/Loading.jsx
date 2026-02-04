export default function Loading() {
    return (
        <div className="flex flex-col items-center gap-3 py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm text-gray-500">Loading...</p>
        </div>
    );
}
