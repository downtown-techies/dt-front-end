import styled, { css } from '../../../theme';

export const StyledDropdown = styled.span`
  position: relative;
`;

export const DropdownButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 2.4rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    background-color: 'lightgray';
  }

  :focus {
    outline: none;
  }

  ${props =>
    props.isOpen
      ? css`
          &,
          &:hover {
            background-color: 'gray';
            border-radius: 0.5rem 0.5rem 0 0;
          }
        `
      : ''}
`;

const openStyles = css`
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  pointer-events: auto;
`;

export const DropdownPanel = styled.div`
  background-color: #fff;
  position: absolute;
  top: 100%;
  width: 100%;
  opacity: 0;
  transform: translateY(-1rem);
  visibility: hidden;
  pointer-events: none;
  transition: all 0.125s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  will-change: transform, opacity;
  z-index: 2;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  ${props => (props.isOpen ? openStyles : '')};
`;

