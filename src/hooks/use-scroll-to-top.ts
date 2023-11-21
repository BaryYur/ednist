export function useScrollToTop() {
  const scrollToTop = () => {
    // @ts-ignore
    document.querySelector("body").scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return { scrollToTop }
}