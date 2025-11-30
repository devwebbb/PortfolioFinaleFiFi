// utils/animations.js
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

/**
 * fadeIn(direction, delay) génère des variants pour Framer Motion
 * direction: 'up' | 'down' | 'left' | 'right'
 * delay: délai en secondes avant le début de l'animation
 */
export const fadeIn = (direction = 'up', delay = 0) => {
  let x = 0
  let y = 0

  switch (direction) {
    case 'up': y = 50; break
    case 'down': y = -50; break
    case 'left': x = 50; break
    case 'right': x = -50; break
  }

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        delay,
        duration: 0.6,
      },
    },
  }
}
