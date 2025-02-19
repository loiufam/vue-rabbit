// 封装分类业务实现
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  // 获取分类
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => {
    getCategory()
  })

  onBeforeRouteUpdate( (to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
