import{c as s,d as i,L as n,r,a as d,b as c}from"./index-DppPVCsV.js";const u=i({name:"Home",components:{LayoutComponent:n},setup(){const e=r("all"),a=r([{id:"packing-list",title:"打包清單",description:"出國旅行必備物品清單，幫您輕鬆整理行李",icon:"🧳",category:"tool",link:"/Per_OutTaiwan/src/view/TakeList/TakeList.html",status:"active",tag:"🌍 支援多國"},{id:"turntable",title:"幸運轉盤",description:"猶豫不決嗎？讓轉盤幫您做決定！支援自定義獎項",icon:"🎡",category:"game",link:"/Per_OutTaiwan/src/view/Turntable/Turntable.html",status:"active",tag:"🎰 好運連連"},{id:"itinerary",title:"行程規劃",description:"即將推出",icon:"✈️",category:"tool",link:"#",status:"developing",tag:"🚧 開發中"},{id:"budget",title:"預算計算",description:"即將推出",icon:"💰",category:"tool",link:"#",status:"developing",tag:"🚧 開發中"}]),o=d(()=>e.value==="all"?a.value:a.value.filter(t=>t.category===e.value));return{activeCategory:e,filteredFeatures:o,handleFeatureClick:(t,l)=>{t.status!=="developing"&&(c(l.clientX,l.clientY,"#0f172a"),setTimeout(()=>{window.location.href=t.link},300))},setCategory:t=>{e.value=t}}},template:`
    <LayoutComponent title="OutTaiwan 功能選單">
      <!-- 首頁功能列表 -->
      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-black dark:text-white drop-shadow-sm">
            Elon Tools 😀
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            探索一系列實用工具與趣味遊戲，讓您的生活與旅行更加輕鬆有趣。
          </p>
        </div>
        
        <!-- 分類過濾按鈕 -->
        <div class="flex justify-center mb-16">
          <div class="glass-card p-1.5 rounded-2xl flex gap-1 border border-white/20 shadow-xl">
            <button 
              @click="setCategory('all')"
              :class="['px-8 py-2.5 rounded-xl transition-all duration-300 font-bold text-xl flex items-center justify-center', 
                       activeCategory === 'all' ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-white/10']"
              title="全部"
            >
              🏠
            </button>
            <button 
              @click="setCategory('tool')"
              :class="['px-8 py-2.5 rounded-xl transition-all duration-300 font-bold text-xl flex items-center justify-center', 
                       activeCategory === 'tool' ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-white/10']"
              title="工具"
            >
              🛠️
            </button>
            <button 
              @click="setCategory('game')"
              :class="['px-8 py-2.5 rounded-xl transition-all duration-300 font-bold text-xl flex items-center justify-center', 
                       activeCategory === 'game' ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-white/10']"
              title="遊戲"
            >
              🎮
            </button>
          </div>
        </div>

        <!-- 功能列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in filteredFeatures" :key="feature.id"
               @click="handleFeatureClick(feature, $event)" 
               :class="['feature-card glass-card p-8 rounded-3xl shadow-lg transition-all duration-500 group border border-white/20 relative overflow-hidden', 
                        feature.status === 'active' ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2' : 'opacity-60 cursor-not-allowed']">
            
            <!-- 背景裝飾 -->
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
            
            <div class="text-7xl mb-6 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{{ feature.icon }}</div>
            <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-3 text-center group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{{ feature.title }}</h2>
            <p class="text-slate-700 dark:text-slate-400 text-center mb-8 leading-relaxed h-12 overflow-hidden">{{ feature.description }}</p>
            
            <div class="flex justify-center">
              <span :class="['inline-flex items-center px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors', 
                            feature.status === 'active' ? 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-slate-100 dark:group-hover:text-slate-900' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500']">
                {{ feature.status === 'active' ? (feature.tag || '立即使用') : '即將推出' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  `});s(u).mount("#app");
