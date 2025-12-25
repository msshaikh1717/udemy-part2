// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

const URL = `https://api.frankfurter.app/latest`;

function AppCurrencyConverterChanllenge() {
  const [input, setInput] = useState("");
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchCurrency() {
      if (!input) return;
      setIsLoading(true);
      const res = await fetch(
        `${URL}?amount=${input}&from=${fromCurr}&to=${toCurr}`
      );
      const data = await res.json();
      setResult(data?.rates?.[toCurr]);
      setIsLoading(false);
    }
    fetchCurrency();
  }, [input, fromCurr, toCurr]);

  return (
    <div style={{ color: "#fff" }}>
      <input
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(+e.target.value)}
        disabled={isLoading}
      />
      <span>FROM</span>
      <select
        disabled={isLoading}
        value={fromCurr}
        onChange={(e) => setFromCurr(e.target.value)}
      >
        <option>USD</option>
        <option>INR</option>
        <option>EUR</option>
        <option>CAD</option>
      </select>
      <span>TO</span>
      <select
        disabled={isLoading}
        value={toCurr}
        onChange={(e) => setToCurr(e.target.value)}
      >
        <option>CAD</option>
        <option>EUR</option>
        <option>INR</option>
        <option>USD</option>
      </select>
      <h1>{result}</h1>
    </div>
  );
}

export default AppCurrencyConverterChanllenge;
