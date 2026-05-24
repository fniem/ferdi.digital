import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to) {
    if (to.hash) {
      const target = document.querySelector(to.hash);
      if (target) {
        const main = document.querySelector("main");
        if (main) {
          main.scrollTop = (target as HTMLElement).offsetTop;
        }
      }
      return false;
    }

    const main = document.querySelector("main");
    if (main) {
      main.scrollTop = 0;
    }
    return { top: 0, left: 0 };
  },
};
