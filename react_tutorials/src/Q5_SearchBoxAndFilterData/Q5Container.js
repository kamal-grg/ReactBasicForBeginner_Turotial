import { useEffect, useState } from "react";
import ListBox from "./ListBox";
import SearchBox from "./SearchBox";

export default function Q5Container(props) {
  const arr = [
    { name: "Ram" },
    { name: "Hari" },
    { name: "Hira" },
    { name: "Kamal" },
    { name: "Arun" },
    { name: "John" },
  ];
  const [list, setList] = useState([]);
  const [filterlist, setFilterList] = useState([]);

  //one time load
  useEffect(() => {
    setList([...arr]);
  }, []);

  const onChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 0) {
      setList(
        list.filter((n) =>
          n.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    } else {
      setList([...arr]);
    }
  };
  return (
    <>
      <h1>Filter List</h1>
      <SearchBox onChange={onChange} />
      <ListBox data={list} />
    </>
  );
}
