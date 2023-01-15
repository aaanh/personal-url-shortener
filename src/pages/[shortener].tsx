import { useRouter } from "next/router";
import urlRoutePairs from "../db/url";
import { useEffect, useState } from "react";

const urlRoute = () => {
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
    <div className="flex h-screen w-screen items-center justify-center">
      <span className="italic">
        {urlRoutePairs.find((item) => item.source === shortener)?.destination
          ? `Redirecting to ` +
            urlRoutePairs.find((item) => item.source === shortener)?.destination
          : "Target not found in database. Redirecting to homepage."}
      </span>
    </div>
  );
};

export default urlRoute;
