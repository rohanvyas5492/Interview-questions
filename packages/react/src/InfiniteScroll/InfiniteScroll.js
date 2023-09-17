import { useEffect, useRef, useState } from "react";
import "./styles.css";
const people = ["Jesse", "John", "Jesse", "John", "Jesse"];

export default function InfiniteScroll() {
  const [data, setData] = useState(people);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const temp = Array.from(Array(5).keys(), (n) => "Akarsh");
        setData((prevData) => [...prevData, ...temp]);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div className="App">
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={`${i}_${val}`}>
              <td>{i}</td>
              <td>{val}</td>
            </tr>
          ))}
          <tr ref={ref}>Loading...</tr>
        </tbody>
      </table>
    </div>
  );
}
