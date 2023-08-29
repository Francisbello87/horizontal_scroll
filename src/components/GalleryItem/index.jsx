import React from "react";
import { points } from "../../data";
import "./style.scss";


export default function GalleryItem({ src, index, columnOffset }) {
  const values = points[index];

  if (!values) return null;

  const [row, column, spanRow, spanColumn] = values;
  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };
  return (
    <div
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn} `,
      }}
      className="gallery-item"
      data-scroll
      data-scroll-speed={getScrollIndex()}
    >
      <div className="gallery-item-image">
        <div
          style={{ backgroundImage: `url(${src})` }}
          className=" gallery-item-imginner"
        ></div>
      </div>
    </div>
  );
}
