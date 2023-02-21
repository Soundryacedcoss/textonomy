import React, { useEffect } from "react";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import data from "../textonomy.txt";
export const LandingPage = () => {
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
    if (JSON.stringify(Object.keys(dataArr)).includes(index + 1)) {
      dataArr.splice(index + 1, dataArr.length - 1, obj[value]);
      setDataArr([...dataArr]);
    } else {
      setDataArr([...dataArr, obj[value]]);
    }
  };
  return (
    <div>
      {dataArr.length > 0 ? (
        <>
          {" "}
          {dataArr.map((obj, index) => (
            <Dropdown obj={obj} handler={handler} index={index} key={index} />
          ))}
        </>
      ) : null}
    </div>
  );
};
