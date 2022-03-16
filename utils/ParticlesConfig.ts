import { PolygonMaskType } from "tsparticles"
import { primaryColor, secondaryLightColor } from "../theme"

export const basicOptions = {
    fullScreen: false,
    backgroundMode: false,
    background: {
      color: {
        value: "none"
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },
    detectRetina: false,
    interactivity: {
      events: {
        onClick: {
          mode: "push"
        },
        onDiv: {
          selectors: "#repulse-div",
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6
        },
        grab: {
          distance: 400
        },
        slow: {
          factor: 1,
          radius: 0
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: {
          value: "#ffffff"
        },
        distance: 30,
        enable: true,
        opacity: 0.4
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200
          }
        },
        enable: true,
        outModes: {
          default: "bounce",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce"
        },
        speed: 1
      },
      number: {
        density: {
          area: 2000
        },
        value: 200
      },
      opacity: {
        value: {
          min: 0.05,
          max: 0.4
        },
        animation: {
          enable: true,
          minimumValue: 0.05
        }
      },
      size: {
        random: {
          enable: true
        },
        value: 1,
        animation: {
          speed: 40,
          minimumValue: 0.1
        }
      }
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: {
            value: "rgba(255,255,255,0.2)"
          },
          width: 0.5,
          opacity: 0.8
        }
      },
      enable: true,
      inline: {
        arrangement: "equidistant"
      },
      move: {
        radius: 10,
        type: "path"
      },
      position: {
        x: 50,
        y: 50,
      },
      scale: 0.8,
      type: "inline",
      url: "https://particles.js.org/images/smalldeer.svg"
    }
  }
 export const linkOptions = {
    preset: 'links',
    background: {
      color: 'none',
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
    },
    particles: {
      links: {
        distance: 150,
        enable: true,
      },
      move: {
        enable: true,
      },
      size: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
    },
    fullScreen: false,
    backgroundMode: true,
  }
 export const upgradedOptions = {
    background: {
      color: 'none',
    },
    fullScreen: false,
    backgroundMode: false,
    detectRetina: false,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'grab',
        },
        onDiv: {
          selectors: '#repulse-div',
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: ['bubble', 'connect'],
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 0.5,
          size: 12,
          color: primaryColor,
        },
        connect: {
          color: {
            value: primaryColor,
          },
          distance: 40,
          lineLinked: { opacity: 0.5 },
          radius: 60,
        },
        grab: {
          distance: 400,
        },
        slow: {
          factor: 1,
          radius: 0,
        },
      },
    },
    particles: {
      color: {
        value: primaryColor,
      },
      links: {
        color: {
          value: secondaryLightColor,
        },
        scale: 2,
        distance: 50,
        enable: true,
        opacity: 0.8,
      },
      move: {
        attract: {
          rotate: {
            x: 1000,
            y: 1200,
          },
        },
        enable: true,
        outModes: 'bounce' as const,
        speed: 1,
      },
      number: {
        density: {
          area: 20000,
        },
        value: 200,
      },
      opacity: {
        value: {
          min: 0.05,
          max: 0.8,
        },
        animation: {
          enable: true,
          minimumValue: 0.05,
        },
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 2,
        animation: {
          speed: 50,
          minimumValue: 0.1,
        },
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: {
            value: primaryColor,
          },
          width: 0.3,
          opacity: 0.5,
        },
      },
      enable: true,
      inline: {
        arrangement: 'equidistant' as const,
      },
      move: {
        radius: 30,
        type: 'path' as const,
      },
      scale: 0.8,
      type: 'inline' as PolygonMaskType,
      url: '/smalldeer.svg',
    },
  }
