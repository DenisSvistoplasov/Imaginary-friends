import { SyntheticEvent } from "react";
import defaultImg from '../assets/images/defaultFriendImage.webp';

export function useImageFallback() {
  return (e:SyntheticEvent) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = defaultImg;
  };
}