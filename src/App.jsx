import { useState } from "react";
import data from "./data.json";
import Info from "./Info";
import Selectors from "./Selectors";
import Footer from "./Footer";

function App() {
  const [selectors, setSelectors] = useState([]);

  function addSelected(name) {
    if (!selectors.includes(name)) {
      setSelectors((sl) => [...sl, name]);
    }
  }

  function removeSelector(name) {
    setSelectors(selectors.filter((sl) => sl !== name));
  }

  function clear() {
    setSelectors([]);
  }

  const fitted = data.filter((d) => {
    const all = [d.role, d.level, ...d.languages, ...d.tools];
    if (selectors.every((e) => all.includes(e))) return true;
  });

  return (
    <>
      <div className="panel">
        <Selectors
          selectors={selectors}
          removeSelector={removeSelector}
          clear={clear}
        />

        {(selectors.length === 0 ? data : fitted).map((d) => (
          <Info
            key={d.id}
            company={d.company}
            logo={d.logo}
            new={d.new}
            featured={d.featured}
            position={d.position}
            role={d.role}
            level={d.level}
            postedAt={d.postedAt}
            contract={d.contract}
            location={d.location}
            languages={d.languages}
            tools={d.tools}
            addSelected={addSelected}
          />
        ))}
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
