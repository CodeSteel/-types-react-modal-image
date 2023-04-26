import * as React from "react";
import ModalImage, { ModalImageProps } from "react-modal-image";

const props: ModalImageProps = {
  small: "https://example.com/image-small.jpg",
  large: "https://example.com/image-large.jpg",
  alt: "Example Image",
  hideDownload: true,
  hideZoom: true,
  hideRotate: true,
  hideFullscreen: true,
  download: "https://example.com/image-download.jpg",
  imageBackgroundColor: "#000",
  zoomMargin: 10,
  shouldHideOnClickOutside: true,
  shouldCloseOnEsc: true,
  customModalStyles: { width: "50%", height: "50%" },
  customLoader: <div>Loading...</div>,
  className: "example-class",
};

<ModalImage {...props} />;
