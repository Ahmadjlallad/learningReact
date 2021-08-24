import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
// * NOTE react Warn us that we should add a key prop to the image element.
// * NOTE so next time when user add new image react will look at the key prop
//  * and render only the new image.
// FIXME: - // * - so I did add an key prop to the image element based on the images id property.
const ImageList = (props) => {
  const imagesWillGetRendered = props.images.map((img) => (
    <ImageCard image={img} key={img.id} />
  ));
  return <div className="image-list">{imagesWillGetRendered}</div>;
};
export default ImageList;
