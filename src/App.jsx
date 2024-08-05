import { useState } from "react";
import "./App.css";

const ValidateNumber = () => {
  const [number, setNumber] = useState();
  const handleNumberInput = (event) => {
    setNumber(event.target.value);
  };
  const clickHandler = () => {
    const atIndex = number.split("").length;
    if (atIndex === 10) {
      alert("Valid phone number.");
    } else {
      alert("Invalid phone number. Please enter 10 digits.");
    }
  };

  return (
    <div>
      <label for="numberInput">Enter your phone number:</label>
      <input id="numberInput" type="number" onChange={handleNumberInput} />
      <button onClick={clickHandler}>Validate Phone Number</button>
    </div>
  );
};

const CheckPassword = () => {
  const [password, setPassword] = useState();
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const clickPassword = () => {
    const passwordLength = password.split("").length;
    if (passwordLength >= 8) {
      alert("Password strength: Strong");
    } else {
      alert("Password strength: Weak");
    }
  };

  return (
    <div>
      <label for="password">Enter your password:</label>
      <input id="password" type="password" onChange={handlePasswordInput} />
      <button onClick={clickPassword}>Check Password Strength</button>
    </div>
  );
};

const CalculateAge = () => {
  const [age, setAge] = useState();
  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };

  const clickAge = () => {
    const dob = new Date(age);
    const month = Date.now() - dob.getTime();
    const ageDay = new Date(month);
    const year = ageDay.getUTCFullYear();
    const userAge = Math.abs(year - 1970);
    if (userAge) {
      alert(`Your are ${userAge} years old.`);
    } else alert("Please select a date.");
  };

  return (
    <div>
      <label for="ageInput">Enter your birthdate:</label>
      <input id="ageInput" type="date" onChange={handleAgeInput} />
      <button onClick={clickAge}>Calculate Age</button>
    </div>
  );
};

const FavColor = () => {
  const [color, setColor] = useState("");
  const [previousColor, setPreviousColor] = useState("");
  const [displayColor, setDisplayColor] = useState("");

  const handleColorInput = (event) => {
    setColor(event.target.value);
  };

  const handleClick = () => {
    setDisplayColor(color);
    setPreviousColor(color);
  };

  return (
    <div>
      <label htmlFor="colorInput">Enter your favorite color:</label>
      <input id="colorInput" value={color} onChange={handleColorInput} />
      <button onClick={handleClick}>Display Color</button>
      {displayColor && <p>Your favorite color is {previousColor}.</p>}
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [displaySearch, setDisplaySearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    setDisplaySearch(search);
  };

  return (
    <div>
      <label htmlFor="searchInput">Enter your search query:</label>
      <input id="searchInput" value={search} onChange={handleSearchInput} />
      <button onClick={handleSearch}>Search</button>
      {displaySearch && <p>Searching for: {displaySearch}</p>}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ValidateNumber />
      <br />
      <CheckPassword />
      <br />
      <CalculateAge />
      <br />
      <FavColor />
      <br />
      <Search />
    </main>
  );
}
