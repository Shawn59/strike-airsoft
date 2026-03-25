'use client';

import { FC, useCallback, useState } from 'react';
import { Skeleton } from '@mui/material';

export const IFrame: FC<IFrame> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const skeletonSX = {
    width: '100%',
    height: '100%',
    backgroundColor: '#cecece',
  };

  const finishLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <Skeleton variant="rectangular" sx={skeletonSX} />}
      <iframe src={src} frameBorder="0" onLoad={finishLoad} />
    </>
  );
};
