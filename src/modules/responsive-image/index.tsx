/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { SerializedStyles } from "@emotion/react";
import { Blurhash } from "react-blurhash";
// import { flipImageUrl } from "@src/utils/functions";
import { imageWrapper, styledBlurHash } from "./styles";
import { IIMAGE_DIMENSIONS } from "./types";

interface IResponsiveBlurImageProps {
  alt: string;
  title?: string;
  src: string;

  height: number | string;
  width: number | string;
  styles?: SerializedStyles;

  imageDimensionType: keyof IIMAGE_DIMENSIONS;
  imageByPixelDensity: boolean;

  options?: {
    blurhash: string;
    fetchpriority?: "auto" | "high" | "low";
    onClick?: () => void;
    loading?: "eager" | "lazy";
    sizes?: string;
    fallBackImgUrl?: string;
  };
}

const ResponsiveBlurImage = (props: IResponsiveBlurImageProps) => {
  const {
    height: imgHeight,
    width: imgWidth,
    styles: imageStyles = "",
    alt: imgAltText,
    title: imgTitle,
    src: imgSrc,
    imageDimensionType,
    imageByPixelDensity = false,
    options: {
      loading,
      fetchpriority,
      blurhash: imageBlurhash,
      onClick,
      sizes,
    } = {},
    ...rest
  } = props;

  const [isLoaded, setLoaded] = useState(false); //used for blurhash
  const handleLoad = () => {
    setLoaded(true);
  };
  const MEDIA_QUERY = {
    MWEB: "(max-width: 719px)",
    TAB: "(min-width: 720px)",
    DWEB: "(min-width: 1024px)",
  };

  const handleImageDimensions = (type?: string) => {
    try {
      // if (imageByPixelDensity)
      //     return `${flipImageUrl(imgSrc, DWEB_IMAGE_DIMENSIONS[imageDimensionType])} 3x,${flipImageUrl(
      //         imgSrc,
      //         TAB_IMAGE_DIMENSIONS[imageDimensionType]
      //     )} 2x,${flipImageUrl(imgSrc, MWEB_IMAGE_DIMENSIONS[imageDimensionType])} 1x`;

      // switch (type) {
      //         return `${flipImageUrl(imgSrc, MWEB_IMAGE_DIMENSIONS[imageDimensionType])}`;
      //     case "(min-width: 720px)":
      //         return `${flipImageUrl(imgSrc, TAB_IMAGE_DIMENSIONS[imageDimensionType])}`;
      //     case "(min-width: 1024px)":
      //         return `${flipImageUrl(imgSrc, DWEB_IMAGE_DIMENSIONS[imageDimensionType])}`;
      // default:
      return imgSrc;
      // }d
    } catch {
      return imgSrc;
    }
  };

  return (
    <div css={[imageWrapper, imageStyles]} data-testid="fotL46qZi6csHEEVQDgBMD">
      {imageByPixelDensity ? (
        <img
          title={imgTitle || imgAltText}
          alt={imgAltText}
          src={imgSrc}
          onLoad={handleLoad}
          loading={loading}
          //   fetchpriority={fetchpriority}
          height={imgHeight}
          width={imgWidth}
          onClick={onClick}
          srcSet={handleImageDimensions()}
          sizes={
            sizes ||
            `${MEDIA_QUERY.DWEB},${MEDIA_QUERY.TAB},${MEDIA_QUERY.MWEB}`
          }
        />
      ) : (
        <picture>
          <source
            media={MEDIA_QUERY.DWEB}
            srcSet={handleImageDimensions(MEDIA_QUERY.DWEB)}
          />
          <source
            media={MEDIA_QUERY.TAB}
            srcSet={handleImageDimensions(MEDIA_QUERY.TAB)}
          />
          <source
            media={MEDIA_QUERY.MWEB}
            srcSet={handleImageDimensions(MEDIA_QUERY.MWEB)}
          />

          <img
            title={imgTitle || imgAltText}
            alt={imgAltText}
            src={imgSrc}
            onLoad={handleLoad}
            loading={loading}
            // fetchpriority={fetchpriority}
            height={imgHeight}
            width={imgWidth}
            onClick={onClick}
            {...rest}
          />
        </picture>
      )}
      {!isLoaded && imageBlurhash && (
        <div data-testid="8iwfe5wCpEdsNMJ6gDWdBE">
          <Blurhash
            css={styledBlurHash}
            height={imgHeight}
            width={imgWidth}
            hash={imageBlurhash}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
    </div>
  );
};
export default ResponsiveBlurImage;
