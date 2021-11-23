import React, { useState } from "react";

function Fact() {
  const api = "https://catfact.ninja/fact";

  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    setFact(data);
    setLoading(false);
  };
  return (
    <div className="fact">
      {loading ? (
        <div className='loading'>loading...</div>
      ) : (
        fact && (
          <p>
            <i>{fact.fact}</i>
          </p>
        )
      )}
      {!loading ? (
        <div className='button'>
          <button onClick={getFact}>Get fact</button>{" "}
        </div>
      ) : (
        ""
      )}
    
    </div>
  );
}

export default Fact;
