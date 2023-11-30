import { useImageFallback } from '../../hooks';
import styles from './FallbackedImage.module.scss';

interface FallbackedImageProps{
  [key: string]: any;
}

export function FallbackedImage(props: FallbackedImageProps) {
  const onError = useImageFallback();
  return (
    <img onError={onError} {...props} />
  );
}