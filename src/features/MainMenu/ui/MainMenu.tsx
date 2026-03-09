'use server';
import { Menu } from 'entities/Menu';
import { items } from '../lib/getItem';

export const MainMenu = () => <Menu items={items} />;
