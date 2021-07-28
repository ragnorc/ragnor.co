import ProgressiveImage from "react-progressive-image";

const Image = props => <ProgressiveImage
  src={"https://ik.imagekit.io/ragnor/" + props.path}
  placeholder={`
    https://ik.imagekit.io/ragnor/${props.path}?tr=bl-40,ql-50`}
>
  {(src) => <img {...props} src={src} alt="Image" />}
</ProgressiveImage>;

export default Image;
