import { Box, Skeleton } from '@mui/material';

export const SwiperReviewsSkeletons = () => {
  const skeletonSX = {
    width: 500,
    height: 300,
    borderRadius: '12px',
    backgroundColor: '#cecece',
    // если ширина экрана меньше 1200px, переопределяем
    '@media (max-width: 1200px)': {
      width: 300,
      height: 200,
    },
  };

  return (
    <Box
      sx={{
        borderRadius: '12px',
        display: 'grid',
        gap: '32px',
        overflow: 'hidden',
        gridAutoFlow: 'column',
        '@media (max-width: 1200px)': {
          gap: '24px',
        },
      }}
    >
      <Skeleton variant="rectangular" sx={skeletonSX} />
      <Skeleton variant="rectangular" sx={skeletonSX} />
      <Skeleton variant="rectangular" sx={skeletonSX} />
      <Skeleton variant="rectangular" sx={skeletonSX} />
    </Box>
  );
};
