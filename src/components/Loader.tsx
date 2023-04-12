export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="loader ease-linear rounded-full border-t-8 border-gray-200 h-6 w-6 mr-3 animate-spin"></div>
      <div className="text-gray-700 text-lg font-semibold">Loading...</div>
    </div>
  );
}
