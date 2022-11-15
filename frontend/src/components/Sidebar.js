import React from "react";

function Sidebar({ items, setItems }) {
  const handleClick = (event) => {
    let category = event.target.id;
    console.log(category);

    fetch("/api/items/category/" + category)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  const handleClickAll = (event) => {
    fetch("/api/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };
  return (
    <div className="sidebar">
      <button className="button-19" onClick={handleClickAll}>
        All
      </button>
      <button className="button-19" onClick={handleClick} id="coke">
        Coke
      </button>
      <button className="button-19" onClick={handleClick} id="deodorant">
        Deodorant
      </button>
      <button className="button-19" onClick={handleClick} id="pens">
        Pens
      </button>
    </div>
  );
}

export default Sidebar;
