import{c as e,d as s,L as l,a}from"./index-COxtbxWP.js";const o=s({name:"Home",components:{LayoutComponent:l},setup(){return{goToPackingList:t=>{a(t.clientX,t.clientY,"#10b981"),window.location.href="TakeList.html"}}},template:`
    <LayoutComponent title="OutTaiwan 功能選單">
      <!-- 首頁功能列表 -->
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">Elon Tools😀</h1>
        <p class="text-center text-slate-600 mb-12">選擇您需要的功能</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Packing List 功能卡 -->
          <div @click="goToPackingList" 
               class="feature-card glass-card p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-all group border border-white/20">
            <div class="text-6xl mb-4 text-center">🧳</div>
            <h2 class="text-2xl font-bold text-slate-800 mb-2 text-center">打包清單</h2>
            <p class="text-slate-600 text-center mb-6">出國旅行必備物品清單，幫您輕鬆整理行李</p>
            <div class="flex justify-center">
              <span class="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                🌍 支援多國
              </span>
            </div>
          </div>

          <!-- 其他功能預留位置 -->
          <div class="feature-card glass-card p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-all group border border-white/20 opacity-50">
            <div class="text-6xl mb-4 text-center">✈️</div>
            <h2 class="text-2xl font-bold text-slate-800 mb-2 text-center">行程規劃</h2>
            <p class="text-slate-600 text-center mb-6">即將推出</p>
            <div class="flex justify-center">
              <span class="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                🚧 開發中
              </span>
            </div>
          </div>

          <div class="feature-card glass-card p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-all group border border-white/20 opacity-50">
            <div class="text-6xl mb-4 text-center">💰</div>
            <h2 class="text-2xl font-bold text-slate-800 mb-2 text-center">預算計算</h2>
            <p class="text-slate-600 text-center mb-6">即將推出</p>
            <div class="flex justify-center">
              <span class="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                🚧 開發中
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  `});e(o).mount("#app");
