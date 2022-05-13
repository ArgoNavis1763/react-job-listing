import Card from "./components/Card.js";
import Header from "./components/Header.js";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    APICall();
  });

  const APICall = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/7fc468a9-da47-4476-b139-ad77e363e310"
      );
      const data = await response.json();
      setFilters(data);
    } catch (error) {
      return "Error";
    }
  };
  return (
    <div className="bg-[#effafa] min-h-screen flex flex-col gap-5 items-center text-base">
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-5">
        {filters.map((job) => {
          return (
            <Card
              id={job.id}
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              // onClick={(event) => setFilters(event.target.value)}
              tools={job.tools}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
