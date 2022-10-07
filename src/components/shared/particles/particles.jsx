import React, { useCallback } from 'react';
import Particles from 'react-particles';
import './particles.scss';
import { loadFull } from 'tsparticles';
import { colors } from '@constants';

export default function ParticlesContainer({
  opacity = 0.5,
  color = '#ffffff',
}) {
  const { pink, blue } = colors;
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="full-page"
      options={{
        particles: {
          links: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          shape: {
            type: 'circle',
          },
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: [pink, blue],
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
