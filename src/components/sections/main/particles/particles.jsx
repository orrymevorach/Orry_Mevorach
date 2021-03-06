import React, { useContext } from 'react';
import Particles from 'react-particles-js';
import { ScreenWidthContext } from '@root/context/screenWidthContext';

export default function ParticlesContainer({ opacity = 0.4 }) {
  const { isSectionMobile } = useContext(ScreenWidthContext);
  return (
    <Particles
      height={isSectionMobile ? '100vh' : '82vh'}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#ffffff',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: opacity,
            random: true,
          },
          size: {
            value: 4,
            random: true,
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: '#ffffff',
            opacity: 0.6,
            width: 1,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
