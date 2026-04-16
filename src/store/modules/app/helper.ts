import { homeStore } from '@/store/homeStore'
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'appSetting'

export type Theme = 'light' | 'dark' | 'auto'

export type Language = 'zh-CN' | 'en-US'

export interface AppState {
  siderCollapsed: boolean
  theme: Theme
  language: Language
}

export function defaultSetting(): AppState {
   const userLang = navigator.language || navigator.userLanguage;
    let content:Language= 'en-US';
    if (userLang.startsWith('zh') || userLang.startsWith('zh')) {
        content =  'zh-CN'; // 简体中文
    }  else {
        content = 'en-US'; // 英语
    }
  return { siderCollapsed: false, theme: homeStore.myData.session.theme=='light'?'light': 'auto', language:  content }
}

export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: AppState): void {
  ss.set(LOCAL_NAME, setting)
}
