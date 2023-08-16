import NextImage from 'next/image';
interface ImageProps {
  className?: string;
  alt: string;
  src: string | any;
  width?: number;
  height?: number;
}

const CustomImage = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: ImageProps) => (
  <div>
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className ={className}
      {...props}/>
  </div>
);

export default CustomImage;
