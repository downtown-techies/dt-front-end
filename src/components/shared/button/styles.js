import styled from '../../../theme';
import { css } from '../../../theme';

const base = css`
  background-color: black;
  border-radius: 0.5rem;
  color: #fff;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    box-shadow: 0 2px 20px rgba(36, 54, 71, 0.8);
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: 50% 100%;
  }

  :hover {
    background-color: black;

    &:after {
      opacity: 1;
      transform: scale(0.9);
    }
  }
`;

export const baseStyles = css`
  display: inline-block;
  font-family: 'Akkurat', sans-serif;
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1em 1.2em;
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:disabled {
    background-color: black;
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: black;
    }

    &:after {
      display: none;
    }
  }
`;

export const buttonStyles = {
  outlined: css`
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0 0.2rem black;
    color: black;
    transition: background-color 0.25s ease, color 0.25s ease;

    &:hover {
      background: black;
      color: #fff;
    }
  `,
  text: css`
    font-size: 1em;
    font-weight: 700;
    border: 0;
    padding: 0;
    background-color: transparent;
    color: black;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -0.25em;
      border-bottom: 1px solid currentColor;
      width: 100%;
    }

    &:hover {
      color: black;
    }
  `,
  'icon-toggle': css`
    width: 100%;
    display: flex;
    align-items: baseline;
    font-size: 1em;
    border: 0;
    padding: 0;
    background-color: transparent;
    text-align: left;

    &:hover {
      color: black;
    }
  `,
  toggle: css`
    font-size: 1em;
    border: 0;
    padding: 0;
    background-color: transparent;
    text-align: left;

    &:hover {
      color: black;
    }
  `,
  full: css`
    ${base}
    width: 100%;
  `,
  default: css`
    ${base}
  `,
};

export const StyledButton = styled.button`
  ${baseStyles}
  ${({ buttonStyle = 'default' }) => buttonStyles[buttonStyle]}
`;
