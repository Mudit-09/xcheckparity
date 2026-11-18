import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkParity = (event) => {
    event.preventDefault();

    const value = Number(number.trim());

    if (number.trim() === "" || !Number.isFinite(value)) {
      setResult("Not a valid number!");
      return;
    }

    if (value % 2 === 0) {
      setResult(`The number ${number.trim()} is even!`);
    } else {
      setResult(`Oops, ${number.trim()} is odd!`);
    }
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Check Parity</h1>
        <p>Enter a number to check whether it is even or odd.</p>

        <form onSubmit={checkParity}>
          <input
            type="text"
            name="number"
            placeholder="Enter a number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />

          <button type="submit">Check</button>
        </form>

        {result && (
          <div className="result" role="status">
            {result}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
