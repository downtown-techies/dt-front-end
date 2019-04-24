import * as React from 'react';

const getPath = ( props ) => {
  const { 
    fill, 
    altFill,
    name 
  } = props; 


  // alphabetized
  switch (name) {
    case 'carrotDown':
      return ( <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Icon/Accordion-Arrow"
            transform="translate(-6.000000, -8.000000)"
            fill={fill}
            fillRule="nonzero"
          >
            <polygon
              id="Shape"
              points="7.41 8.84 12 13.42 16.59 8.84 18 10.25 12 16.25 6 10.25"
            />
          </g>
        </g>
      );
    case 'carrotUp':
      return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Icon/Accordion-Arrow-Copy"
            transform="translate(-6.000000, -8.000000)"
            fill={fill}
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
    case 'email':
      // recommended viewBox: 0 0 512 512
      return (
        <>
        <path 
          fill={fill} 
          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
        </>
      );
    case 'facebook':
      // recommended viewBox: 0 0 448 512
      return (
        <>
        <path 
          fill={fill} 
          d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
        </>
      );
    case 'instagram':
      // recomended viewBox: 0 0 448 512
      return (
        <>
        <path 
          fill={fill} 
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </>
      );
    case 'linkedIn':
      return (
        <>
        <path
          fill={fill}
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </>
      );

    case 'meetup':
      return ( <>
          <path 
            fill={fill} 
            d="M99 414.3c1.1 5.7-2.3 11.1-8 12.3-5.4 1.1-10.9-2.3-12-8-1.1-5.4 2.3-11.1 7.7-12.3 5.4-1.2 11.1 2.3 12.3 8zm143.1 71.4c-6.3 4.6-8 13.4-3.7 20 4.6 6.6 13.4 8.3 20 3.7 6.3-4.6 8-13.4 3.4-20-4.2-6.5-13.1-8.3-19.7-3.7zm-86-462.3c6.3-1.4 10.3-7.7 8.9-14-1.1-6.6-7.4-10.6-13.7-9.1-6.3 1.4-10.3 7.7-9.1 14 1.4 6.6 7.6 10.6 13.9 9.1zM34.4 226.3c-10-6.9-23.7-4.3-30.6 6-6.9 10-4.3 24 5.7 30.9 10 7.1 23.7 4.6 30.6-5.7 6.9-10.4 4.3-24.1-5.7-31.2zm272-170.9c10.6-6.3 13.7-20 7.7-30.3-6.3-10.6-19.7-14-30-7.7s-13.7 20-7.4 30.6c6 10.3 19.4 13.7 29.7 7.4zm-191.1 58c7.7-5.4 9.4-16 4.3-23.7s-15.7-9.4-23.1-4.3c-7.7 5.4-9.4 16-4.3 23.7 5.1 7.8 15.6 9.5 23.1 4.3zm372.3 156c-7.4 1.7-12.3 9.1-10.6 16.9 1.4 7.4 8.9 12.3 16.3 10.6 7.4-1.4 12.3-8.9 10.6-16.6-1.5-7.4-8.9-12.3-16.3-10.9zm39.7-56.8c-1.1-5.7-6.6-9.1-12-8-5.7 1.1-9.1 6.9-8 12.6 1.1 5.4 6.6 9.1 12.3 8 5.4-1.5 9.1-6.9 7.7-12.6zM447 138.9c-8.6 6-10.6 17.7-4.9 26.3 5.7 8.6 17.4 10.6 26 4.9 8.3-6 10.3-17.7 4.6-26.3-5.7-8.7-17.4-10.9-25.7-4.9zm-6.3 139.4c26.3 43.1 15.1 100-26.3 129.1-17.4 12.3-37.1 17.7-56.9 17.1-12 47.1-69.4 64.6-105.1 32.6-1.1.9-2.6 1.7-3.7 2.9-39.1 27.1-92.3 17.4-119.4-22.3-9.7-14.3-14.6-30.6-15.1-46.9-65.4-10.9-90-94-41.1-139.7-28.3-46.9.6-107.4 53.4-114.9C151.6 70 234.1 38.6 290.1 82c67.4-22.3 136.3 29.4 130.9 101.1 41.1 12.6 52.8 66.9 19.7 95.2zm-70 74.3c-3.1-20.6-40.9-4.6-43.1-27.1-3.1-32 43.7-101.1 40-128-3.4-24-19.4-29.1-33.4-29.4-13.4-.3-16.9 2-21.4 4.6-2.9 1.7-6.6 4.9-11.7-.3-6.3-6-11.1-11.7-19.4-12.9-12.3-2-17.7 2-26.6 9.7-3.4 2.9-12 12.9-20 9.1-3.4-1.7-15.4-7.7-24-11.4-16.3-7.1-40 4.6-48.6 20-12.9 22.9-38 113.1-41.7 125.1-8.6 26.6 10.9 48.6 36.9 47.1 11.1-.6 18.3-4.6 25.4-17.4 4-7.4 41.7-107.7 44.6-112.6 2-3.4 8.9-8 14.6-5.1 5.7 3.1 6.9 9.4 6 15.1-1.1 9.7-28 70.9-28.9 77.7-3.4 22.9 26.9 26.6 38.6 4 3.7-7.1 45.7-92.6 49.4-98.3 4.3-6.3 7.4-8.3 11.7-8 3.1 0 8.3.9 7.1 10.9-1.4 9.4-35.1 72.3-38.9 87.7-4.6 20.6 6.6 41.4 24.9 50.6 11.4 5.7 62.5 15.7 58.5-11.1zm5.7 92.3c-10.3 7.4-12.9 22-5.7 32.6 7.1 10.6 21.4 13.1 32 6 10.6-7.4 13.1-22 6-32.6-7.4-10.6-21.7-13.5-32.3-6z"/> 
        </>
      );
    case 'menu':
      return (
        <>
          <path 
            fill={fill}
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </>
      );
    case 'minusCircle':
      return (
        <path
          fill={fill}
          d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.69,6.48a.06.06,0,0,1-.06.06H3.37a.06.06,0,0,1-.06-.06V5.81a.06.06,0,0,1,.06-.06H8.63a.06.06,0,0,1,.06.06Z"
        />
      );
    case 'plusCircle':
      return (
        <path
          fill={fill}
          d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.69,6.48a.06.06,0,0,1-.06.06H6.39V8.78a0,0,0,0,1,0,.05H5.66a0,0,0,0,1,0-.05V6.54H3.37a.06.06,0,0,1-.06-.06V5.81a.06.06,0,0,1,.06-.06H5.61V3.51a0,0,0,0,1,0,0h.68a0,0,0,0,1,0,0V5.75H8.63a.06.06,0,0,1,.06.06Z"
        />
      );
    case 'twitter':
      return (
        <>
          <path 
            fill={fill} 
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /> 
        </>
      );
    case 'mobileLogo':
      return (
        <>
          <path fill={fill} d="M23.46,14.49A10.81,10.81,0,0,1,12.66,25.3h-5a1,1,0,0,1-1-1V21.53a1,1,0,0,1,1.07-.9,1,1,0,0,1,.89.9v1.81h4a8.87,8.87,0,0,0,.51-17.73,4.34,4.34,0,0,0-.51,0h-4v11a1,1,0,0,1-1.06.9,1,1,0,0,1-.9-.9V4.66a1,1,0,0,1,1-1h5A10.81,10.81,0,0,1,23.46,14.49Z" transform="translate(-6.71 -3.68)"/>
          <path fill={fill} d="M46.36,4.78a1.08,1.08,0,0,1-1.1,1.07H38.13v18.5a1.08,1.08,0,1,1-2.16,0V5.85H28.85a1.08,1.08,0,0,1-1.1-1.06h0a1.08,1.08,0,0,1,1.07-1.1H45.29A1.09,1.09,0,0,1,46.36,4.78Z" transform="translate(-6.71 -3.68)"/>
        </>
      );
    case 'altLogo':
      return (
        <>
          <path fill={fill} d="M315.57-213.53a.9.9,0,0,1-.89.88.88.88,0,0,1-.81-.53.09.09,0,0,1,0-.07L311.7-220a.91.91,0,0,1,.56-1.1.91.91,0,0,1,1.13.58l2.12,6.61A.93.93,0,0,1,315.57-213.53Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M330.53-220l-4.31,13.19a.84.84,0,0,1-.8.6h0a.87.87,0,0,1-.8-.55l-1.63-4h0l-1.84-4.47h0l-1.85,4.47h0l-.77,1.74-.06.11h0l-.85,2a.87.87,0,0,1-.16.3.87.87,0,0,1-1.23.1h0a.88.88,0,0,1-.27-.93l.94-2.31.05-.1,1.54-3.75,1.35-3.37.44-1a.77.77,0,0,1,.22-.31.82.82,0,0,1,.58-.22.9.9,0,0,1,.59.22.77.77,0,0,1,.22.31l1.81,4.4,1.59,3.86,3.54-10.89a.91.91,0,0,1,1.1-.58.89.89,0,0,1,.63,1.1Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M235.54-213.53a.89.89,0,0,1-.89.88.89.89,0,0,1-.81-.53v-.07L231.68-220a.9.9,0,0,1,.56-1.1.91.91,0,0,1,1.13.58l2.12,6.61A1.14,1.14,0,0,1,235.54-213.53Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M250.51-220l-4.31,13.19a.86.86,0,0,1-.8.61h0a.87.87,0,0,1-.81-.55l-1.68-4h0l-1.84-4.47h0l-1.85,4.47h0l-.72,1.75a.24.24,0,0,1-.06.11h0l-.84,2a.9.9,0,0,1-.17.3.87.87,0,0,1-1.23.1h0a.9.9,0,0,1-.27-.93l.95-2.31,0-.1,1.55-3.75,1.35-3.37.43-1a.87.87,0,0,1,.22-.31.84.84,0,0,1,.58-.22.94.94,0,0,1,.6.22.87.87,0,0,1,.22.31l1.81,4.4,1.59,3.86,3.53-10.89a.92.92,0,0,1,1.11-.58.9.9,0,0,1,.62,1.1S250.52-220,250.51-220Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M284.82-208.66a.87.87,0,0,1,.12,1.23v0a3.58,3.58,0,0,1-5.06.37,3.58,3.58,0,0,1-1.25-2.69v-9.62h-.79a.88.88,0,0,1-.8-1,.88.88,0,0,1,.8-.8h.83v-2.82a.88.88,0,0,1,.89-.88.87.87,0,0,1,.88.87h0v2.83h3.12a.87.87,0,0,1,.95.79.86.86,0,0,1-.79,1h-3.28v9.62a1.82,1.82,0,0,0,1.82,1.8,1.73,1.73,0,0,0,1.35-.64A.89.89,0,0,1,284.82-208.66Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M389.47-214.52H396c-.33-2.85-2.24-4.8-4.92-4.83h-.2a5,5,0,0,0-4.79,4,2.4,2.4,0,0,0-.12.53v.09a.51.51,0,0,1,0,.24h0a6.51,6.51,0,0,0-.06.88,5.14,5.14,0,0,0,.06.88h0a.57.57,0,0,0,0,.18l0,.24a1,1,0,0,0,.06.25l.06.25c0,.09.06.18.1.27a1.57,1.57,0,0,0,.1.28,2.87,2.87,0,0,0,.18.4,4.45,4.45,0,0,0,.26.48h0a3.81,3.81,0,0,0,.29.41c.11.14.22.28.34.41a3.57,3.57,0,0,0,.28.27,1.27,1.27,0,0,0,.25.21s0,0,0,0l.16.13.37.25.32.17h0l.36.16a3,3,0,0,0,.39.14l.22.07.38.08a2,2,0,0,0,.43.07h.56a5.08,5.08,0,0,0,.67,0h0l.33-.06.33-.06.31-.1a4,4,0,0,0,.68-.26l.21-.1.31-.19.27-.19a2.31,2.31,0,0,0,.24-.2,4.74,4.74,0,0,0,.91-1c-.13.17-.27.34-.41.49a5,5,0,0,0,.58-.79.89.89,0,0,1,1.23-.29.89.89,0,0,1,.29,1.23c-.08.12-.16.21-.23.33v0l-.25.34-.16.19-.17.19a3.14,3.14,0,0,1-.31.32c-.1.1-.2.2-.31.29a1.81,1.81,0,0,1-.23.18l-.33.24a6,6,0,0,1-.68.43c-.23.12-.48.23-.73.33h-.06l-.35.11a7.1,7.1,0,0,1-4.23,0,6,6,0,0,1-1.35-.59c-.21-.12-.41-.26-.61-.4a6.14,6.14,0,0,1-.82-.71,6.31,6.31,0,0,1-.71-.84,7.18,7.18,0,0,1-.74-1.29,7.81,7.81,0,0,1-.46-1.39c-.06-.25-.1-.49-.14-.75a8.92,8.92,0,0,1-.08-1.16v-.9a8.51,8.51,0,0,1,.17-1,1.08,1.08,0,0,1,.1-.35c0-.12.06-.21.09-.31s.12-.35.19-.52a7.24,7.24,0,0,1,.75-1.4c.11-.15.21-.29.32-.42l.27-.32.11-.12.33-.33a3.73,3.73,0,0,1,.3-.26c.07-.05.13-.11.2-.15l.15-.12.4-.25a3.38,3.38,0,0,1,.41-.24l.15-.07a2.81,2.81,0,0,1,.35-.17l.11,0c.17-.06.34-.13.51-.18a5.12,5.12,0,0,1,.56-.15l.57-.1a5.87,5.87,0,0,1,.59-.05h.6a6.48,6.48,0,0,1,5.6,3.68,8.66,8.66,0,0,1,.84,3.78.89.89,0,0,1-.89.88h-7.52a.89.89,0,0,1-.88-.88.89.89,0,0,1,.88-.89Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M459.63-214.52h6.54c-.33-2.85-2.24-4.8-4.92-4.83h-.2a5,5,0,0,0-4.79,4,2.4,2.4,0,0,0-.12.53v.09a.51.51,0,0,1,0,.24h0a6.51,6.51,0,0,0-.06.88,5.14,5.14,0,0,0,.06.88h0a.57.57,0,0,0,0,.18l0,.24a1,1,0,0,0,.06.25l.06.25c0,.09.06.18.1.27a1.57,1.57,0,0,0,.1.28,2.87,2.87,0,0,0,.18.4,4.45,4.45,0,0,0,.26.48h0a3.81,3.81,0,0,0,.29.41c.11.14.22.28.34.41a3.57,3.57,0,0,0,.28.27,1.27,1.27,0,0,0,.25.21s0,0,0,0l.16.13.37.25.32.17h0l.36.16a3,3,0,0,0,.39.14l.22.07.38.08a2,2,0,0,0,.43.07h.56a5.08,5.08,0,0,0,.67,0h0l.33-.06.33-.06.31-.1a4,4,0,0,0,.68-.26l.21-.1.31-.19.27-.19a2.31,2.31,0,0,0,.24-.2,4.74,4.74,0,0,0,.91-1c-.13.17-.27.34-.41.49a5,5,0,0,0,.58-.79.89.89,0,0,1,1.23-.29.89.89,0,0,1,.29,1.23c-.08.12-.16.21-.23.33v0l-.25.34-.16.19-.17.19a3.14,3.14,0,0,1-.31.32c-.1.1-.2.2-.31.29a1.81,1.81,0,0,1-.23.18,3.43,3.43,0,0,1-.33.24,6,6,0,0,1-.68.43c-.23.12-.48.23-.73.33h-.06l-.35.11a7.1,7.1,0,0,1-4.23,0,6,6,0,0,1-1.35-.59c-.21-.12-.41-.26-.61-.4a6.14,6.14,0,0,1-.82-.71,6.31,6.31,0,0,1-.71-.84,7.18,7.18,0,0,1-.74-1.29,7.81,7.81,0,0,1-.46-1.39c-.06-.25-.1-.49-.14-.75a8.92,8.92,0,0,1-.08-1.16,4.71,4.71,0,0,1,0-.75.38.38,0,0,1,0-.15,6.87,6.87,0,0,1,.17-1,1.39,1.39,0,0,1,.09-.35c0-.12.06-.21.09-.31l.19-.52a6.77,6.77,0,0,1,.76-1.4,3.32,3.32,0,0,1,.32-.42,3.21,3.21,0,0,1,.27-.32l.1-.12.33-.33a3.88,3.88,0,0,1,.31-.26,1.39,1.39,0,0,1,.19-.15l.16-.12.39-.25a3.38,3.38,0,0,1,.41-.24l.16-.07a2.26,2.26,0,0,1,.35-.17l.1,0c.17-.06.34-.13.52-.18a4.94,4.94,0,0,1,.55-.15l.57-.1a5.82,5.82,0,0,1,.6-.05h.6a6.47,6.47,0,0,1,5.59,3.68,8.39,8.39,0,0,1,.84,3.78.88.88,0,0,1-.89.88h-7.54a.88.88,0,0,1-.88-.88.88.88,0,0,1,.88-.89Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M445.84-206.17a.9.9,0,0,1-.88-.89V-220a.9.9,0,0,1,.88-.86.88.88,0,0,1,.89.86v12.94a.87.87,0,0,1-.87.89Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M203.71-215.93a9.76,9.76,0,0,1-9.75,9.76h-4.48a.87.87,0,0,1-.89-.87v-2.53a.89.89,0,0,1,1-.81.89.89,0,0,1,.81.81v1.63H194a8,8,0,0,0,8.24-7.77,8,8,0,0,0-7.77-8.24h-4.06V-214a.89.89,0,0,1-1,.81.9.9,0,0,1-.81-.81V-224.8a.87.87,0,0,1,.87-.89H194a9.76,9.76,0,0,1,9.76,9.76Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M225.83-213.67v0a.9.9,0,0,1-1,.81.9.9,0,0,1-.81-.81h0a5.68,5.68,0,0,0-5.71-5.65,5.68,5.68,0,0,0-5.64,5.72,5.67,5.67,0,0,0,5.71,5.64,5.69,5.69,0,0,0,4.94-2.93.87.87,0,0,1,1.22-.24.87.87,0,0,1,.4.73,1.36,1.36,0,0,1-.07.35l-.08.15a7.46,7.46,0,0,1-10.2,2.69,7.46,7.46,0,0,1-2.7-10.2,7.45,7.45,0,0,1,10.2-2.69A7.46,7.46,0,0,1,225.83-213.67Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M305.85-213.67v0a.89.89,0,0,1-1,.81.9.9,0,0,1-.81-.81h0a5.68,5.68,0,0,0-5.72-5.64,5.68,5.68,0,0,0-5.64,5.72,5.68,5.68,0,0,0,5.72,5.64,5.66,5.66,0,0,0,4.92-2.92.88.88,0,0,1,1.23-.24.86.86,0,0,1,.39.73,1,1,0,0,1-.06.35l-.08.15a7.47,7.47,0,0,1-10.21,2.67,7.45,7.45,0,0,1-2.68-10.2,7.46,7.46,0,0,1,10.21-2.68,7.45,7.45,0,0,1,3.69,6.41Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M380.94-224.8a.86.86,0,0,1-.88.85h-5.73v14.84a.88.88,0,0,1-.87.88.87.87,0,0,1-.87-.87h0v-14.84h-5.72a.85.85,0,0,1-.88-.84h0a.87.87,0,0,1,.87-.89h13.19a.88.88,0,0,1,.89.87Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M269.78-214.74v7.68a.86.86,0,0,1-.87.87.86.86,0,0,1-.87-.87v-7.68c0-2.65-1.75-4.61-4.15-4.61a4.48,4.48,0,0,0-4.42,4.53v5a.87.87,0,0,1-.87.87.87.87,0,0,1-.87-.87v-10.41a.87.87,0,0,1,.87-.87.87.87,0,0,1,.87.87v1a6.1,6.1,0,0,1,4.42-1.86,5.63,5.63,0,0,1,4.31,1.91A6.66,6.66,0,0,1,269.78-214.74Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M349.81-214.74v7.68a.87.87,0,0,1-.87.88.87.87,0,0,1-.87-.87h0v-7.68c0-2.65-1.75-4.61-4.15-4.61a4.48,4.48,0,0,0-4.43,4.53v5a.87.87,0,0,1-.87.87.87.87,0,0,1-.87-.87v-10.41a.87.87,0,0,1,.87-.87.87.87,0,0,1,.87.87v1a6.11,6.11,0,0,1,4.43-1.86,5.65,5.65,0,0,1,4.31,1.91A6.71,6.71,0,0,1,349.81-214.74Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M437.33-214.74v7.68a.87.87,0,0,1-.86.89h0a.89.89,0,0,1-.89-.89v-7.68a4.34,4.34,0,0,0-4.25-4.61,4.37,4.37,0,0,0-4.29,4.61v5.58a.89.89,0,0,1-1,.81.9.9,0,0,1-.81-.81V-224.8a.9.9,0,0,1,.88-.89.88.88,0,0,1,.92.84v5.53a5.86,5.86,0,0,1,4.28-1.78A6.07,6.07,0,0,1,437.33-214.74Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M417.9-209.13a6.84,6.84,0,0,1-5.69,3,7.11,7.11,0,0,1-7-7.46c0-4.26,3-7.46,7-7.46a6.83,6.83,0,0,1,4.3,1.45.69.69,0,0,1,.13.11.85.85,0,0,1,.26.62.9.9,0,0,1-.91.88.93.93,0,0,1-.59-.25h0a5.14,5.14,0,0,0-3.18-1.06,5.41,5.41,0,0,0-5.31,5.72,5.38,5.38,0,0,0,5.31,5.69,5,5,0,0,0,4.25-2.18.89.89,0,0,1,1.24-.14.88.88,0,0,1,.2,1.14Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M484.74-210.48a4.22,4.22,0,0,1-1.27,2.95,5,5,0,0,1-3.6,1.35,5.67,5.67,0,0,1-2.34-.48l-.09,0-.1-.06a.86.86,0,0,1-.39-.73.88.88,0,0,1,.88-.89,1,1,0,0,1,.34.07,3.72,3.72,0,0,0,1.7.36c2,0,3.1-1.3,3.1-2.54,0-1.63-1-2-3.29-2.62-1.93-.5-4.37-1.11-4.37-4a4,4,0,0,1,1.19-2.76,4.73,4.73,0,0,1,3.37-1.28,4.43,4.43,0,0,1,4.18,2.36.85.85,0,0,1-.38,1.14l0,0a.89.89,0,0,1-1.19-.41h0a2.69,2.69,0,0,0-2.57-1.35,2.51,2.51,0,0,0-2.79,2.29c0,1.35.89,1.72,3,2.24C482.06-214.35,484.74-213.67,484.74-210.48Z" transform="translate(-129.75 227.91)" />
          <path fill={fill} d="M159-206.7a.22.22,0,0,1-.23-.22h0v-4.16a.23.23,0,0,1,.23-.23H167V-215H154.75a.24.24,0,0,1-.23-.23h0v-3.92h-3.68v3.92a.23.23,0,0,1-.23.23H146.8v3.69h8a.23.23,0,0,1,.23.23h0v4.14a.23.23,0,0,1-.23.23h-8.27a.23.23,0,0,1-.23-.23h0v-3.91h-8.06a.23.23,0,0,1-.23-.23v-4.15a.22.22,0,0,1,.22-.23h8.06v-12h-3.67v8.07a.23.23,0,0,1-.23.23h-8.08v3.92a.22.22,0,0,1-.22.23H130.2v7.84h12.27a.23.23,0,0,1,.21.25.23.23,0,0,1-.21.21H130a.22.22,0,0,1-.22-.23h0v-8.3a.22.22,0,0,1,.22-.23h3.93v-3.92a.23.23,0,0,1,.23-.23h8.07v-8.07a.23.23,0,0,1,.23-.23h4.14a.23.23,0,0,1,.23.23h0v12.22h3.58v-3.91a.23.23,0,0,1,.23-.23h4.14a.23.23,0,0,1,.23.23v3.91h12.26a.23.23,0,0,1,.23.23h0v4.15a.22.22,0,0,1-.22.23h-8.06v3.92a.21.21,0,0,1-.22.23Zm-12.17-.46h7.81v-3.69H146.8Zm-8.29-4.14h7.82V-215H138.5Z" transform="translate(-129.75 227.91)" />
        </>
      );
    default:
      return <path />;
  }
};

export default getPath;
