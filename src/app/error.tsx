"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-primary">{error?.message}</h2>
          <p>Sorry for the inconvience</p>
          <button className="btn btn-primary" onClick={() => reset?.()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}