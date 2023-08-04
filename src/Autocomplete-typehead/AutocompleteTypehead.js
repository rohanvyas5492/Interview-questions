import React, { useEffect, useState } from "react";

const cityNames = [
  "Amsterdam",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Tokyo",
  "Washington DC",
  "Zurich",
  "Copenhagen",
  "Helsinki",
  "Madrid",
  "Reykjavik",
  "Stockholm",
  "Vancouver",
  "Vienna",
  "Zagreb",
  "Budapest",
  "Dublin",
  "Hamburg",
  "Krakow",
  "Lisbon",
  "Ljubljana",
];

export default function AutocompleteTypehead() {
  const [cities, setCities] = useState(cityNames);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    if(searchItem.length > 0){
        setCities(cities.filter(city => city.includes(searchItem)));
    }else{
        setCities(cityNames);
    }
     
  },[searchItem])



  return (
    <>
      <h1>AutocompleteTypehead</h1>
      <input type="text" placeholder="Type to Search" onChange={(e) => setSearchItem(e.target.value)}/>
      <div>
        <ul>
          {cities.map((city) => {
            return <li>{city}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
