import * as React from 'react';

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps): React.ReactNode;
