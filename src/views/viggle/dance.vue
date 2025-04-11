 <script setup lang="ts">
 import DcInput from './dcInput.vue';
 import DcList from './dcList.vue';

 </script>
    <style>
        :root {
            --bg-color: #f5f5f7;
            --text-color: #1d1d1f;
            --card-bg: #ffffff;
            --accent-color: #0071e3;
            --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        h1 {
            font-size: 48px;
            font-weight: 600;
            margin: 0;
            letter-spacing: -0.5px;
        }
        
        .subtitle {
            font-size: 24px;
            font-weight: 300;
            color: #86868b;
            margin-top: 10px;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .feature-card {
            background: var(--card-bg);
            border-radius: 18px;
            padding: 40px 30px;
            text-align: center;
            box-shadow: var(--card-shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #f5f5f7 0%, #e1e1e6 100%);
        }
        
        .feature-icon svg {
            width: 40px;
            height: 40px;
        }
        
        .feature-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        
        .feature-desc {
            font-size: 16px;
            color: #86868b;
            margin: 0;
        }
        
        footer {
            text-align: center;
            margin-top: 80px;
            color: #86868b;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 36px;
            }
            
            .subtitle {
                font-size: 18px;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<template>
    <div class="container">
        <header>
            <h1>CMG Workflow</h1>
            <p class="subtitle">友AI工作流工具包</p>
        </header>
        
        <div class="features-grid">
            <a href="https://dev.nexthubs.fun/form/avatar" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0071e3">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 class="feature-title">数字人</h3>
                <p class="feature-desc">创建数字人智能口播</p>
            </a>
            
            <a href="https://dev.nexthubs.fun/form/poster" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#34c759">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="feature-title">社交媒体海报</h3>
                <p class="feature-desc">设计精美的社交媒体封面</p>
            </a>
            
            <a href="/translation" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff9500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                </div>
                <h3 class="feature-title">自动翻译</h3>
                <p class="feature-desc">快速准确的多语言翻译</p>
            </a>
            
            <a href="https://dev.nexthubs.fun/form/flux" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5856d6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                </div>
                <h3 class="feature-title">Flux绘画</h3>
                <p class="feature-desc">创意无限的绘画工具</p>
            </a>
            
            <a href="/speech-to-text" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff2d55">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <h3 class="feature-title">语音转文本</h3>
                <p class="feature-desc">将语音内容转换为文字</p>
            </a>
            
            <a href="https://dev.nexthubs.fun/form/tts" class="feature-card">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#af52de">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                    </svg>
                </div>
                <h3 class="feature-title">文本转语音</h3>
                <p class="feature-desc">将文字转换为自然语音</p>
            </a>
        </div>
        
        <footer>
            <p>© 2025 CMG Workflow. All rights reserved.</p>
        </footer>
    </div>
</template> 
