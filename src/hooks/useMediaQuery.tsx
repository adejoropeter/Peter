import  { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Initial check
    setValue(mediaQuery.matches);

    function handleChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    // Add the event listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return value;
};

export default useMediaQuery;
