import React, { useState, useEffect, useRef } from "react";
import "../../css/inputForm.css";

const InputForm = ({ onFetch }) => {
  const [display, setDisplay] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  let countriesList = [];

  useEffect(() => {
    async function getCountriesList() {
      const url = `https://corona.lmao.ninja/v2/countries`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          data.map((country) =>
            countriesList.push(country.country.toLowerCase())
          );
        })
        .catch((err) => console.log(err));
    }
    getCountriesList();
    setCountries(countriesList);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateCountry = (country) => {
    setSearch(country);
    setDisplay(false);
  };

  console.log(display);
  return (
    <React.Fragment>
      <div ref={wrapperRef} className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Enter Country
          </span>
        </div>

        <input
          type="text"
          className="form-control"
          id="country"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={search}
          onClick={() => {
            if (display === false) setDisplay(!display);
          }}
          onChange={(event) => setSearch(event.target.value)}
        ></input>

        {display && (
          <ul className="autoContainer">
            {
              countries
                .filter((country) => country.indexOf(search.toLowerCase()) > -1)
                .map((value, i) => {
                  return (
                    <li
                      onClick={() => updateCountry(value)}
                      className="option"
                      key={i}
                      tabIndex="0"
                    >
                      {value}
                    </li>
                  );
                })}
          </ul>
        )}
      </div>

      <button onClick={() => onFetch()} className="btn btn-primary btn-sm m-2">
        Get Data
      </button>
    </React.Fragment>
  );
};

export default InputForm;
