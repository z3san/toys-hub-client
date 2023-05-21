import { useEffect } from "react";


const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || ToysHub `;
  }, [title]);
};

export default useTitle;
