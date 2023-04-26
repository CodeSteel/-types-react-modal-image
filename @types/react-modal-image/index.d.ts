declare module "react-modal-image" {
  import * as React from "react";

  interface ModalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    small: string;
    large: string;
    alt?: string;
    hideDownload?: boolean;
    hideZoom?: boolean;
    hideRotate?: boolean;
    hideFullscreen?: boolean;
    download?: string;
    imageBackgroundColor?: string;
    zoomMargin?: number;
    shouldHideOnClickOutside?: boolean;
    shouldCloseOnEsc?: boolean;
    customModalStyles?: React.CSSProperties;
    customLoader?: React.ReactNode;
    className?: string;
  }

  export default function ModalImage(props: ModalImageProps): JSX.Element;
}
