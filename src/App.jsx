import { useEffect, useState } from "react";
import Home from "./pages/Home";
import WorkCategory from "./pages/WorkCategory";
import { workCategories } from "./data/projects";

const categoryByPath = new Map(workCategories.map((category) => [category.slug, category]));

function normalizePathname(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

function App() {
  const [path, setPath] = useState(() => normalizePathname(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePathname(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const category = categoryByPath.get(path);

  if (category) {
    return <WorkCategory category={category} />;
  }

  return <Home />;
}

export default App;