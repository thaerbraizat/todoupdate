import React, { useState, useEffect } from "react";

export const settingContext = React.createContext();

function settingsContext(props) {
  const [elementsPerPage, setElementsPerPage] = useState(2);
  const [showCompleted, setShowCompleted] = useState(false);
  const [detectStorge, setDetectStorge] = useState(0);

  function holdValues(e) {
    e.preventDefault();
    const obj = {
      elementsPerPage: e.target.pageNumber.value,
      showCompleted: e.target.incomplete.value,
    };
    localStorage.setItem("settings", JSON.stringify(obj));
    setDetectStorge(detectStorge + 1);
  }

  useEffect(() => {
    let localData = localStorage.getItem("settings");
    if (localData) {
      let settings = JSON.parse(localData);
      setElementsPerPage(Number(settings.elementsPerPage));
      if (settings.showCompleted == "true") {
        setShowCompleted(true);
      }
      if (settings.showCompleted == "false") {
        setShowCompleted(false);
      }
    }
  }, [detectStorge]);

  const state = {
    elementsPerPage,
    showCompleted,
    detectStorge,
    setShowCompleted,
    setElementsPerPage,
    holdValues,
  };

  return (
    <settingContext.Provider value={state}>
      {props.children}
    </settingContext.Provider>
  );
}

export default settingsContext;