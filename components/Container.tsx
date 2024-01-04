import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-5xl px-4 mx-auto md:px-8">{children}</div>;
}
