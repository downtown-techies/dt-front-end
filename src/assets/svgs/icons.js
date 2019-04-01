import * as React from 'react';

const getPath = ( name, props ) => {
  switch (name) {
    case 'carrotUp':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Icon/Accordion-Arrow-Copy"
            transform="translate(-6.000000, -8.000000)"
            fill="#7770FC"
            fillRule="nonzero"
          >
            <polygon
              id="Shape"
              transform="translate(12.000000, 12.455000) scale(1, -1) translate(-12.000000, -12.455000) "
              points="7.41 8.75 12 13.33 16.59 8.75 18 10.16 12 16.16 6 10.16"
            />
          </g>
        </g>
      );
    case 'carrotDown':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Icon/Accordion-Arrow"
            transform="translate(-6.000000, -8.000000)"
            fill="#7770FC"
            fillRule="nonzero"
          >
            <polygon
              id="Shape"
              points="7.41 8.84 12 13.42 16.59 8.84 18 10.25 12 16.25 6 10.25"
            />
          </g>
        </g>
      );
    case 'plusCircle':
      return (
        <path
          fill="#243647"
          d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.69,6.48a.06.06,0,0,1-.06.06H6.39V8.78a0,0,0,0,1,0,.05H5.66a0,0,0,0,1,0-.05V6.54H3.37a.06.06,0,0,1-.06-.06V5.81a.06.06,0,0,1,.06-.06H5.61V3.51a0,0,0,0,1,0,0h.68a0,0,0,0,1,0,0V5.75H8.63a.06.06,0,0,1,.06.06Z"
        />
      );
    case 'minusCircle':
      return (
        <path
          fill="#243647"
          d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.69,6.48a.06.06,0,0,1-.06.06H3.37a.06.06,0,0,1-.06-.06V5.81a.06.06,0,0,1,.06-.06H8.63a.06.06,0,0,1,.06.06Z"
        />
      );
    case 'menu':
      return (
        <>
          <path 
            fill="none" 
            d="M0 0h24v24H0V0z"
          />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </>
      );
    default:
      return <path />;
  }
};

export default getPath;
