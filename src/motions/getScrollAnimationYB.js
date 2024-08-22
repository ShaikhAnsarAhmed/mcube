export default function getScrollAnimationYB() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2, delay } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
        delay: delay,
      },
    }),
  };
}
