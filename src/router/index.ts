import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router' // 修改为 History 模式
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import mjlayout from '@/views/mj/layout.vue'
import sunoLayout from '@/views/suno/layout.vue'
import lumaLayout from '@/views/luma/layout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: 'chat/:uuid?', // 相对路径 (去掉/)
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/g',
    name: 'g',
    component: ChatLayout,
    redirect: '/g/g-2fkFE8rbu',
    children: [
      {
        path: ':gid', // 相对路径 (去掉/)
        name: 'GPTs',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/m',
    name: 'm',
    component: ChatLayout,
    redirect: '/m/gpt-3.5-turbo',
    children: [
      {
        path: ':gid', // 相对路径 (去掉/)
        name: 'Model',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/s',
    name: 's',
    component: ChatLayout,
    redirect: '/s/t',
    children: [
      {
        path: 't', // 相对路径 (去掉/)
        name: 'Setting',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/draw',
    name: 'Rootdraw',
    component: mjlayout,
    redirect: '/draw/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'draw',
        component: () => import('@/views/mj/draw.vue'),
      },
    ],
  },
  {
    path: '/music',
    name: 'music',
    component: sunoLayout,
    redirect: '/music/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'music',
        component: () => import('@/views/suno/music.vue'),
      },
    ],
  },
  {
    path: '/video',
    name: 'video',
    component: lumaLayout,
    redirect: '/video/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'video',
        component: () => import('@/views/luma/video.vue'),
      },
    ],
  },
  {
    path: '/dance',
    name: 'dance',
    component: lumaLayout,
    redirect: '/dance/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'dance',
        component: () => import('@/views/viggle/dance.vue'),
      },
    ],
  },
  {
    path: '/flow',
    name: 'flow',
    component: lumaLayout,
    redirect: '/flow/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'flow',
        component: () => import('@/views/viggle/flow.vue'),
      },
    ],
  },
  {
    path: '/wav',
    name: 'wav',
    component: lumaLayout,
    redirect: '/wav/index',
    children: [
      {
        path: ':uuid?', // 相对路径 (去掉/)
        name: 'wav',
        component: () => import('@/views/wav/wav.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHistory(), // 使用 History 模式
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
