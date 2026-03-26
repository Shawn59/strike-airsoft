'use client';

import { FC, useCallback, useState } from 'react';
import { Skeleton } from '@mui/material';

export const IFrame: FC<IFrame> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const finishLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#cecece',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      <iframe
        src={src}
        frameBorder="0"
        onLoad={finishLoad}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
