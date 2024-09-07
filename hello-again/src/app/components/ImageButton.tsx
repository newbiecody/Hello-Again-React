import classNames from "classnames";
import Image from "next/image";

const IMAGE_SIZE_MAPPING = {
  xs: "h-[80px] w-[80px]",
  sm: "h-[160px] w-[160px]",
  md: "h-[320px] w-[320px]",
  lg: "h-[480px] w-[480px]",
};

interface IImageButton {
  src: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
}
export default function ImageButton({ src, size = "md", onClick}: IImageButton) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames('overflow-hidden',
        IMAGE_SIZE_MAPPING[size]
      )}
      onClick={onClick}
    >
      <Image
        width={500}
        height={500}
        src={src}
        alt={"Home"}
      />
    </div>
  );
}
