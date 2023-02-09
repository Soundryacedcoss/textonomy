import "./App.css";
import data from "./textonomy.txt";
import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
function App() {
  const [dataArr, setDataArr] = useState([]);
  let obj = {};
  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((val) => {
        let temp = val.split("\n");
        temp.forEach((element) => {
          temp = element.split(" > ");
          createdNestedObj(obj, temp);
          setDataArr([...dataArr, obj]);
        });
      });
  }, []);
  var createdNestedObj = function DataInObj(base, name) {
    for (let i = 0; i < name.length; i++) {
      base = base[name[i]] = base[name[i]] || {};
    }
  };
  const handler = (obj, value, index) => {
    if (JSON.stringify(Object.keys(dataArr)).includes(parseInt(index + 1))) {
      dataArr.splice(index + 1, dataArr.length - 1, obj[value]);
      setDataArr([...dataArr]);
    } else {
      setDataArr([...dataArr, obj[value]]);
    }
  };
  return (
    <div className="App">
      <h2>Taxonomy</h2>
      {dataArr.length > 0 ? (
        <>
          {" "}
          {dataArr.map((obj, index) => (
            <Dropdown obj={obj} handler={handler} />
          ))}
        </>
      ) : null}
    </div>
  );
}
export default App;
