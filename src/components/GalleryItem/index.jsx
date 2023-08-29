import React from "react";
import { points } from "../../data";
import './style.scss'

export default function GalleryItem({ src, index, columnOffset }) {
  const values = points[index];

  if (!values) return null;

  const [row, column, spanRow, spanColumn] = values;
  return (
    <div
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn} `,
      }}
      className="gallery-item"
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
