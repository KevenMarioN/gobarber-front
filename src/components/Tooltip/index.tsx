import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip = ({title,children,className = ''} : TooltipProps) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;