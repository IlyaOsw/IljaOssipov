import React from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "black",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "attract",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 250,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#808080",
          },
          links: {
            color: "#808080",
            distance: 200,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "triangle ",
          },
          size: {
            value: { min: 1, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
