import "./Button.scss";
import classNames from "classnames";
import { FC, ReactNode } from 'react'


interface ButtonProps {
    isPrimary?: boolean;
    isSecondary?: boolean;
    isTickets?: boolean;
    isFollow?: boolean;
    onClick?: () => void;
    texto?: string;
    children?: ReactNode;
  }

  const Button: FC<ButtonProps> = ({
    isPrimary,
    isSecondary,
    isTickets,
    isFollow,
    onClick,
    texto,
    children,
  }) => {
    const givenClassName = classNames({
      button: true,
      'button-primary': isPrimary,
      'button-secondary': isSecondary,
      'button-follow': isFollow,
      'button-tickets': isTickets,
    });

    return (
      <button className={givenClassName} onClick={onClick}>
        {texto}{children}
      </button>
    );
  };

  export default Button;