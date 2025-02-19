<script setup>
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试面板组件 -->
  <HomePanel title="新鲜好物" subTitle="为你推荐新鲜好物">
    <div>
      <h4>新鲜水果</h4>
      <p>新鲜水果，新鲜好味道</p>
    </div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="热销商品推荐">
    <div>
      <h4>热销商品</h4>
      <p>热销商品，热销好价格</p>
    </div>
  </HomePanel>
</template>
