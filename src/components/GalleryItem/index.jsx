import React, {useRef} from "react";
import { points } from "../../data";
import useOnScreen from "../../hooks/useOnScreen";
import cn from 'classnames'
import "./style.scss";



export default function GalleryItem({ src, index, columnOffset }) {
  const values = points[index];
const ref = useRef(null)
  const onScreen = useOnScreen(ref)
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
      ref={ref}
      className="gallery-item"
      data-scroll
      data-scroll-speed={getScrollIndex()}
    >
      <div className={cn("gallery-item-image", {reveal: onScreen})}>
        <div
          style={{ backgroundImage: `url(${src})` }}
          className=" gallery-item-imginner"
        ></div>
      </div>
    </div>
  );
}
