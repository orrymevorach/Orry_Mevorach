import React, { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { colors } from 'utils/constants';
import styles from './particles.module.scss';

export default function ParticlesContainer({
  opacity = 0.5,
  color = '#ffffff',
}) {
  const { pink, blue } = colors;
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = container => {
    // console.log(container);
  };
  if (init)
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className={styles['full-page']}
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
              value: 100,
            },
            color: {
              value: [pink, blue],
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.5,
              },
            },
            size: {
              value: {
                min: 0.3,
                max: 5,
              },
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
