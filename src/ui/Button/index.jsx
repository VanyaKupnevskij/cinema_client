import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { COLORS } from '../../styles/variablesJs';
import styled from 'styled-components';

function Button({ className, isLink = false, linkPath = '/', children, handleClick }) {
  const _className = `${styles.button} ${className}`;

  return isLink ? (
    <Link to={linkPath} className={_className} onClick={handleClick}>
      {children}
    </Link>
  ) : (
    <button className={_className} onClick={handleClick}>
      {children}
    </button>
  );
}

const SecondaryButton = styled(Button)`
  background-color: ${COLORS.secondary_color};
  &:hover {
    background-color: ${COLORS.secondary_dark_color};
  }
`;

export { SecondaryButton };

export default Button;
