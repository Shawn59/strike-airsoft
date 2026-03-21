import { Dialog } from '@mui/material';
import Image from 'next/image';

export const Modal = ({ data }) => {
  return (
    <Dialog open={!!data}>
      <Image fill src={data.img} alt={data.label} />
    </Dialog>
  );
};
