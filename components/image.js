import ProgressiveImage from "react-progressive-image";

export default ({ className, path }) => (
  <ProgressiveImage
    src={"https://ik.imagekit.io/ragnor/" + path}
    placeholder={`
      https://ik.imagekit.io/ragnor/${path}?tr=bl-40,ql-50`}
  >
    {(src) => <img className={className} src={src} alt="Image" />}
  </ProgressiveImage>
);
