import { useImageFallback } from '../../hooks';

interface FallbackedImageProps{
  [key: string]: any;
}

export function FallbackedImage(props: FallbackedImageProps) {
  const onError = useImageFallback();
  return (
    <img alt='fallback' onError={onError} {...props} />
  );
}