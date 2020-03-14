import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../component/Title";
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange
  } = context;
  //get unique type
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((value, key) => {
    return (
      <option value={value} key={key}>
        {value}
      </option>
    );
  });

  let people=getUnique(rooms,"capacity");
  people=people.map((value,key)=>{
  return <option key={key} value={value}>{value}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">room type</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guest */}
      </form>
    </section>
  );
}
