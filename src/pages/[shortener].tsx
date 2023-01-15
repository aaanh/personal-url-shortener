import { useRouter } from "next/router";
import urlRoutePairs from "../db/url";
import { useEffect } from "react";

export default function UrlRoute() {
  const router = useRouter();
  const { shortener } = router.query;

  useEffect(() => {
    const url = urlRoutePairs.find(
      (item) => item.source === shortener
    )?.destination;
    if (url) {
      setTimeout(function () {
        router.push(url);
      }, 3000);
    } else {
      setTimeout(function () {
        router.push("/");
      }, 3000);
    }
  });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <div className="text-6xl italic">
        {urlRoutePairs.find((item) => item.source === shortener)?.destination
          ? `Redirecting to ` +
            urlRoutePairs.find((item) => item.source === shortener)?.destination
          : "Target not found in database. Redirecting to homepage."}
      </div>
      <div>
        <a
          className="btn-primary btn-sm btn"
          href={
            urlRoutePairs.find((item) => item.source === shortener)?.destination
          }
        >
          Click here to redirect immediately.
        </a>
      </div>
    </div>
  );
}
