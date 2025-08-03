import React from 'react';
import './App.css';

const App = () => {
  const element = "Office Space";
  const jsxatt = <img src="https://img.freepik.com/premium-photo/3d-rendering-business-meeting-working-room-office-building_105762-1134.jpg" width="25%" height="25%" alt="Office Space" />;

  const officeList = [
    { Name: "WeWork", Rent: 50000, Address: "Chennai" },
    { Name: "DBS", Rent: 75000, Address: "Bangalore" },
    { Name: "Spacy", Rent: 45000, Address: "Hyderabad" },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      {officeList.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index}>
            <h1>Name: {item.Name}</h1>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
