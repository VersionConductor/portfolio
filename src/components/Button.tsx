import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    type: 'button' | 'submit' | 'reset';
    props?: string | number | {};
}

const Button: React.FC<ButtonProps> = ({
        children,
        className = '',
        type = 'button',
        ...props
    }) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}

export default Button
