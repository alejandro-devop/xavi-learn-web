interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Picture: React.FC<PictureProps> = ({ alt, ...props }) => {
  return <img {...props} alt={alt} />;
};

export default Picture;
