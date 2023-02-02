import logo from "./logo.svg";
import "./App.css";
import data from "./textonomy.txt";
import { useEffect, useState } from "react";
function App() {
  const [dataArr, setDataArr] = useState([]);
  const [firstDropDwon, setFirstDropDown] = useState([]);
  const [secondDropDwon, setSecondDropDwon] = useState([]);
  const [option, setOption] = useState([]);
  useEffect(() => {
    fetch(data)
      .then((res) => res.text())
      .then((val) => setDataArr(val.split("\n")));
    if (dataArr.length > 0) {
      for (let i = 0; i < dataArr.length; i++) {
        if (!dataArr[i].includes(">")) {
          firstDropDwon.push(dataArr[i]);
          setFirstDropDown(firstDropDwon);
        }
      }
    }
  }, [dataArr.length]);

  var inObj = {};
  const MainCategoryChangeHandler = (e) => {
    let tempArr = [];
    let temp2Arr = [];
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].startsWith(e.target.value)) {
        tempArr.push(dataArr[i]);
      }
    }
    tempArr.map((val) => val.split(" > ").map((item) => temp2Arr.push(item)));
    console.log(temp2Arr);
    // for (let i = 0; i < tempArr.length; i++) {
    //   let temp = tempArr[i].split(">");
    //   temp2Arr.push(temp);
    // }
    // console.log(temp2Arr);
  };

  // console.log(secondDropDwon.slice(1, 1));
  // let temp = [];
  // for (let i = 0; i < secondDropDwon.length; i++) {
  //   console.log(secondDropDwon[i]);

  // }
  // let d = secondDropDwon
  //   .map(JSON.stringify)
  //   .filter((e, i, a) => i === a.indexOf(e))
  //   .map(JSON.parse);
  // console.log(d);
  // for (let i = 0; i < d.length; i++) {
  //   let temp = d.splice(i, 1);
  //   console.log(temp);
  // }
  return (
    <div className="App">
      <select
        name=""
        id=""
        class="form-select w-25 mx-5"
        onChange={MainCategoryChangeHandler}
      >
        <option value="">---select---</option>
        {firstDropDwon.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
      <select
        name=""
        id=""
        class="form-select w-25 mx-5"
        onChange={MainCategoryChangeHandler}
      >
        <option value="">---select---</option>
        {/* {secondDropDwon.map((val) => (
          <option value={val}>{val}</option>
        ))} */}
      </select>
    </div>
  );
}

export default App;
