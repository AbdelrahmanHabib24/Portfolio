// Store the particles configuration separately
let particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#000000", // Default color for light mode
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#000000",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
};

// Initialize particles
particlesJS('particles-js', particlesConfig);

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  function applyDarkMode(isDarkMode) {
    body.classList.toggle('dark', isDarkMode); // Toggle dark class
    updateParticleColors(isDarkMode);
  }

  function updateParticleColors(isDarkMode) {
    if (particlesConfig.particles) {
      particlesConfig.particles.color.value = isDarkMode ? '#ffffff' : '#000000';
      particlesConfig.particles.line_linked.color = isDarkMode ? '#ffffff' : '#000000';
    }
    // Update particles colors without reinitializing if possible
    particlesJS('particles-js', particlesConfig); 
  }

  // Check and apply the system's preferred color scheme on load
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  applyDarkMode(prefersDarkScheme.matches);

  // Listen for system color scheme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    applyDarkMode(e.matches);
  });

  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = !body.classList.contains('dark');
    applyDarkMode(isDarkMode);
  });
});
