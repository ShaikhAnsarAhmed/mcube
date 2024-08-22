export default function getScrollAnimationXL() {
  return {
    offscreen: {
      x: -150,
      opacity: 0,
    },
    onscreen: ({ duration = 2, delay } = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
        delay: delay,
      },
    }),
  };
}
