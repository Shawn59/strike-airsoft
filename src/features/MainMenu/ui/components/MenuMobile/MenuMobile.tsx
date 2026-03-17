'use client';

import React, { FC, useState } from 'react';
import styles from './MenuMobile.module.scss';
import { Box, Button, SwipeableDrawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import type { IMenu } from '@/features/MainMenu/ui/components/Menu.types';
import Link from 'next/link';
import Image from 'next/image';

export const MenuMobile: FC<IMenu> = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  if (!data) return;

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={styles.menuMobile}>
      <Button onClick={openMenu} className={styles.btn}>
        <MenuIcon className={styles.icon} />
      </Button>

      <SwipeableDrawer open={open} onClose={closeMenu} className={styles.menuMobileContent}>
        <Box sx={{ width: 220 }} role="presentation" onClick={closeMenu}>
          <List>
            <Link className={styles.logoContainer} href={'/'}>
              <Image src={'/logo.svg'} alt={'логотип кс'} width={56} height={56} />
            </Link>

            {data.map((item) => (
              <Link key={item.id} href={item.link}>
                <ListItemButton className={styles.item}>
                  <ListItemIcon className={styles.itemIcon}>
                    {<Image src={item.iconSrc} alt={''} width={40} height={40} />}
                  </ListItemIcon>

                  <ListItemText className={styles.label} primary={item.label} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};
