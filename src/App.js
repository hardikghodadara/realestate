import { useState } from "react";
import DisplayProperties from "./components/RealestateData";
import SearchHeader from "./components/SearchHeader";
import DATA from "./data";
import "./index.css";
function App() {
  const [data, setData] = useState(DATA);
  const onClearFilter = () => {
    setData(DATA);
  };
  const onUpdateFilter = ({ location, price, propertyType, moveInDate }) => {
    let tempData = [...DATA];

    if (location) {
      if (!location.value.toLowerCase().includes("select")) {
        tempData = tempData.filter((property) => {
          return property.address
            .toLowerCase()
            .includes(location.value.toLowerCase());
        });
      }
    }

    if (price) {
      if (!price.value.toLowerCase().includes("select")) {
        let min = +price.value.split("-")[0].split("$")[1];
        let max = +price.value.split("-")[1].split("$")[1];
        tempData = tempData.filter((property) => {
          return property.price >= min && property.price <= max;
        });
      }
    }

    if (propertyType) {
      console.log(propertyType);
      if (!propertyType.value.toLowerCase().includes("select")) {
        tempData = tempData.filter((property) => {
          return property.propertytype
            .toLowerCase()
            .includes(propertyType.value.toLowerCase());
        });
      }
    }

    if (moveInDate) {
      console.log(moveInDate);
      tempData = tempData.filter((property) => {
        console.log(new Date(property.moveindate) < new Date(moveInDate));
        return new Date(property.moveindate) < moveInDate;
      });
    }
    console.log(tempData.length);
    setData(tempData);
  };
  return (
    <div className="App">
      <h1> Search Properties for Rent...</h1>
      <SearchHeader
        onUpdateFilter={onUpdateFilter}
        onClearFilter={onClearFilter}
      />
      <DisplayProperties data={data} />
    </div>
  );
}

export default App;
