import React, { useRef } from 'react';
import Box from '@mui/material/Box';

interface IHeartAnimationProps {
  children: React.ReactElement;
  onClick: (event: MouseEvent) => void;
}

const HeartAnimation: React.FunctionComponent<IHeartAnimationProps> = ({
  children,
  onClick,
}) => {
  const ref = useRef();
  function handleClick() {
    // console.log(ref);
    const div = window.document.createElement('div');
    div.setAttribute('class', 'heart');
    div.style.transform = `scale(${Math.random() * 0.5 + 0.5}) rotate(${
      Math.random() * 360
    }deg)`;

    ref.current.appendChild(div);
    setTimeout(() => {
      if (div) {
        div.remove();
      }
    }, 1000);
  }
  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
        zIndex: 99,

        '& .heart': {
          color: '#e2264d',
          filter: 'none',
          willChange: 'font-size',
          animation: 'heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49) infinite',

          alignSelf: 'center',
          position: 'relative',
          fontSize: '2em',
          /*  filter: grayscale(1); */
          userSelect: 'none',
          cursor: 'pointer',
        },

        '& .heart:before, & .heart:after': {
          animation: 'inherit',
          animationTimingFunction: 'ease-out',
        },

        '& .heart:before': {
          willChange: 'transform, border-width, border-color',
          animationName: 'bubble',
        },

        '& .heart:after': {
          willChange: 'opacity, box-shadow',
          animationName: 'sparkles',
        },

        '& .heart::before': {
          position: 'absolute',
          zIndex: '-1',
          top: '50%',
          left: '50%',
          borderRadius: '50%',
          content: '""',

          boxSizing: 'border-box',
          margin: '-2.25rem',
          border: 'solid 2.25rem #e2264d',
          width: '4.5rem',
          height: '4.5rem',
          transform: 'scale(0)',
        },

        '& .heart::after': {
          position: 'absolute',
          zIndex: '-1',
          top: '50%',
          left: '50%',
          borderRadius: '50%',
          content: '""',

          margin: '-0.1875rem',
          width: '0.375rem',
          height: '0.375rem',
          boxShadow:
            '0.32476rem -3rem 0 -0.1875rem #ff8080, -0.32476rem -2.625rem 0 -0.1875rem #ffed80, 2.54798rem -1.61656rem 0 -0.1875rem #ffed80, 1.84982rem -1.89057rem 0 -0.1875rem #a4ff80, 2.85252rem 0.98418rem 0 -0.1875rem #a4ff80, 2.63145rem 0.2675rem 0 -0.1875rem #80ffc8, 1.00905rem 2.84381rem 0 -0.1875rem #80ffc8, 1.43154rem 2.22414rem 0 -0.1875rem #80c8ff, -1.59425rem 2.562rem 0 -0.1875rem #80c8ff, -0.84635rem 2.50595rem 0 -0.1875rem #a480ff, -2.99705rem 0.35095rem 0 -0.1875rem #a480ff, -2.48692rem 0.90073rem 0 -0.1875rem #ff80ed, -2.14301rem -2.12438rem 0 -0.1875rem #ff80ed, -2.25479rem -1.38275rem 0 -0.1875rem #ff8080',
        },

        '@keyframes heart': {
          '0%, 17.5%': {
            fontSize: 0,
          },
        },

        '@keyframes bubble': {
          '15%': {
            transform: 'scale(1)',
            borderColor: '#cc8ef5',
            borderWidth: '2.25rem',
            opacity: 0.3,
          },
          '30%, 100%': {
            transform: 'scale(1)',
            borderColor: '#cc8ef5',
            borderWidth: 0,
            opacity: 0.1,
          },
        },

        '@keyframes sparkles': {
          '0%,20%': {
            opacity: 0,
          },
          '25%': {
            opacity: 1,
            boxShadow:
              '0.32476rem -2.4375rem 0 0rem #ff8080, -0.32476rem -2.0625rem 0 0rem #ffed80, 2.1082rem -1.26585rem 0 0rem #ffed80, 1.41004rem -1.53985rem 0 0rem #a4ff80, 2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8, 0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff, -1.35019rem 2.0552rem 0 0rem #80c8ff, -0.60229rem 1.99916rem 0 0rem #a480ff, -2.44865rem 0.22578rem 0 0rem #a480ff, -1.93852rem 0.77557rem 0 0rem #ff80ed, -1.70323rem -1.77366rem 0 0rem #ff80ed, -1.81501rem -1.03204rem 0 0rem #ff8080',
          },
        },
      }}
      onClick={(e) => {
        onClick(e);
        handleClick();
      }}
    >
      {children}

      <div
        style={{
          position: 'absolute',
          width: '1em',
          height: '1em',
          // background: 'red',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          lineHeight: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ref={ref}
      />
    </Box>
  );
};

export default HeartAnimation;
