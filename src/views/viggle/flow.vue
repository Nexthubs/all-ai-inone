<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 创建对iframe的引用
const iframeRef = ref(null);

// 刷新iframe内容的函数
const refreshIframe = () => {
  if (iframeRef.value) {
    // 方法1: 重新加载iframe (适用于大多数情况)
    iframeRef.value.src = iframeRef.value.src;
    
    // 方法2: 如果iframe内有contentWindow，可以尝试内部刷新
    // if (iframeRef.value.contentWindow) {
    //   iframeRef.value.contentWindow.location.reload();
    // }
  }
};

// 监听来自侧边栏的刷新事件
const handleRefreshEvent = () => {
  refreshIframe();
};

onMounted(() => {
  // 添加自定义事件监听器
  window.addEventListener('refresh-flow-iframe', handleRefreshEvent);
});

onUnmounted(() => {
  // 移除事件监听器以防内存泄漏
  window.removeEventListener('refresh-flow-iframe', handleRefreshEvent);
});
</script>
<template>
  <div class="w-full h-full">
    <iframe 
      ref="iframeRef"
      src="https://flow.nexthubs.cn" 
      frameborder="0" 
      class="w-full h-full"
    ></iframe>
  </div>
</template>
