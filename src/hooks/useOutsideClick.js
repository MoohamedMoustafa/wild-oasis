import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
      console.log("pressed");
    }

    document.addEventListener("click", handleOutsideClick, listenCapturing);

    return () =>
      document.removeEventListener(
        "click",
        handleOutsideClick,
        listenCapturing,
      );
  }, [handler, listenCapturing]);

  return ref;
}
