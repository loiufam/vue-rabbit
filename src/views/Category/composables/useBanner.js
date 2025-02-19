// 封装banner轮播图业务实现
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/api/category'

export function useBanner() {
  // 获取banner
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}
