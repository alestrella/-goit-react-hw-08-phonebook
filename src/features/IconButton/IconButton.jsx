import PropTypes from 'prop-types';
import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ children, onClick, title }) => (
  <ButtonStyled type="button" title={title} onClick={onClick}>
    {children}
  </ButtonStyled>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propsTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default IconButton;
