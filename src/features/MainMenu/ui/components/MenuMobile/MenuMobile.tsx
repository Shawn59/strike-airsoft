'use client';

import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // или другой способ подключения стилей antd

export const MainMenuMobile = () => {
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
    <div>
      {/* Кнопка-бургер, видимая на мобильных */}
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        className="burger-button"
        styles={{ marginTop: '72px' }}
      >
        Меню
      </Button>

      {/* Выдвижная панель */}
      <Drawer
        title="Навигация"
        placement="left" // можно также 'right'
        onClose={onClose}
        open={visible}
        /*  width={250} // ширина панели*/
        /*bodyStyle={{ padding: 0 }} // убираем лишние отступы*/
      >
        {/* Меню внутри Drawer */}
        <Menu
          mode="inline"
          items={menuItems}
          onClick={onClose} // закрывать меню после клика (опционально)
          style={{ border: 'none' }}
        />
      </Drawer>
    </div>
  );
};
