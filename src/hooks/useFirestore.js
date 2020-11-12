import { useState, useEffect } from "react";
import { db } from "../config/fbConfig";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = db.collection(collection).onSnapshot((snap) => {
      let docs = [];
      snap.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDocs(docs);
    });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
