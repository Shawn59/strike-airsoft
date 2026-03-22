'use client';

import { FC } from 'react';

export const IFrame: FC<IFrame> = ({ src, onLoad }) => <iframe src={src} frameBorder="0" onLoad={onLoad} />;
