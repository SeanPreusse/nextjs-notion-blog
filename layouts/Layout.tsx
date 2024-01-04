import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from './Navbar';
import { MetaHead } from '@/layouts/MetaHead'; // Import MetaHead without MetaHeadProps

interface LayoutProps {
  children: ReactNode;
  date: string;
  imageUrl: string;
  title: string;
  description: string;
  ogUrl: string;
}

export function Layout(props: LayoutProps) {
  const { children, date, imageUrl, title, description, ogUrl } = props;

  return (
    <>
      <MetaHead // Use MetaHead without passing MetaHeadProps
        date={date}
        imageUrl={imageUrl}
        description={description}
        ogUrl={ogUrl}
        title={title}
      />
      <Header />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}
