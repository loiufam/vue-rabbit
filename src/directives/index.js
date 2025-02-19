
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([{isIntersecting}]) => {
            // 进入可视区域
            if (isIntersecting) {
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}
