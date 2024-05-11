import React from "react";
import Card from "./Card";
import Data from "./Data";

export default function Cards() {
  const cards = Data.map((item, key) => {
    return <Card item={item} key={key} />;
  });
  return <div className="cards">{cards}</div>;
}
