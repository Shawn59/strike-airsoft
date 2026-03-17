'use client';

import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // или другой способ подключения стилей antd
import styles from './MenuMobile.module.scss';

export const MenuMobile = () => {
  // Состояние для видимости Drawer
  const [visible, setVisible] = useState(false);

  // Функции открытия/закрытия
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  // Пункты меню
  const menuItems = [
    { key: '1', label: 'Главная' },
    { key: '2', label: 'О нас' },
    { key: '3', label: 'Услуги' },
    { key: '4', label: 'Контакты' },
  ];

  return (
    <div className={styles.menuMobile}>
      <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} className={styles.btn} />

      <Drawer
        title="Навигация"
        placement="left" // можно также 'right'
        onClose={onClose}
        open={visible}
      >
        {/* Меню внутри Drawer */}
        <Menu mode="inline" items={menuItems} onClick={onClose} style={{ border: 'none' }} />
      </Drawer>
    </div>
  );
};
