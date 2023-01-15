import { create } from "domain";

function createUrlRouting({ key = 0, source = "", destination = "" } = {}) {
  return {
    source, // source pathname from your domain, e.g. shortener.me.sh/ggl
    destination, // full URL to redirect to, e.g. https://www.google.com
  };
}

const urlRoutePairs = [
  createUrlRouting({
    source: "ggl",
    destination: "https://www.google.com",
  }),
  createUrlRouting({
    source: "fb",
    destination: "https://www.facebook.com/sudojournalctl",
  }),
  createUrlRouting({
    source: "tw",
    destination: "https://twitter.com/yeetusmagus",
  }),
  createUrlRouting({
    source: "gh",
    destination: "https://github.com/aaanh",
  }),
  createUrlRouting({
    source: "ln",
    destination: "https://en.wikipedia.org/wiki/Light_novel",
  }),
];

export default urlRoutePairs;
