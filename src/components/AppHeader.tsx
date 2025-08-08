'use client';

import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MenuProps } from 'antd';

import './AppHeader.scss';

const items: MenuProps['items'] = [
  { key: '/', label: <Link href="/">Home</Link> },
  { key: '/about', label: <Link href="/about">About</Link> },
  { key: '/services', label: <Link href="/services">Services</Link> },
  { key: '/contact', label: <Link href="/contact">Contact</Link> },
];

export default function AppHeader() {
  const pathname = usePathname();
  const selectedKey =
    items?.find(i => typeof i?.key === 'string' && pathname.startsWith(i.key as string))?.key ?? '/';

  return (
    <header className="app-header">
      <div className="container header-container">
        <Link href="/" className="navbar-brand">Aqqaru</Link>
      </div>
      <Menu mode="horizontal" selectedKeys={[String(selectedKey)]} items={items} />
    </header>
  );
}
