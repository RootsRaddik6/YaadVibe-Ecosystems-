export default function LoadingOverlay({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/70 z-40 flex items-center justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-gray-400 border-t-transparent rounded-full"></div>
    </div>
  );
}
