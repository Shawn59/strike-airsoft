import dynamic from 'next/dynamic';
const ModalImage = dynamic(() => import('@/features/Modals/ui/ModalImage/ModalImage').then((mod) => mod.ModalImage), {
  ssr: false,
});

export const DynamicModalImage = () => {
  return;
};
