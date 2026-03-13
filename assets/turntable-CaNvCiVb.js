import{c as q,d as D,L as _,o as F,n as h,f as G,r,b as W}from"./index-D5Q_20HY.js";const H=D({name:"Turntable",components:{LayoutComponent:_},setup(){const C=r(!0),M=r({show:!1,message:""}),x=r(null),S=r(null),u=r(!1),s=r([{text:"100萬",color:"#fbbf24",level:1},{text:"10萬",color:"#94a3b8",level:2},{text:"1萬",color:"#d97706",level:3},{text:"銘謝惠顧",color:"#f1f5f9",level:0},{text:"銘謝惠顧",color:"#e2e8f0",level:0},{text:"銘謝惠顧",color:"#cbd5e1",level:0}]),v=r(""),p=r(0),f=r(null),z=r(!1);let g=0,d=0;const I=.988,B=5e-4,j=(t,e)=>{let o=parseInt(t.slice(1,3),16)+e,a=parseInt(t.slice(3,5),16)+e,l=parseInt(t.slice(5,7),16)+e;return o=Math.max(0,Math.min(255,o)),a=Math.max(0,Math.min(255,a)),l=Math.max(0,Math.min(255,l)),`#${o.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}`},c=()=>{const t=x.value;if(!t)return;const e=t.getContext("2d",{alpha:!0});if(!e)return;const o=document.documentElement.classList.contains("dark"),a=t.width/2,l=t.height/2,n=Math.min(a,l)-20,i=Math.PI*2/s.value.length;e.clearRect(0,0,t.width,t.height),e.save(),e.beginPath(),e.arc(a,l,n+5,0,Math.PI*2),e.shadowBlur=30,e.shadowColor=o?"rgba(96, 165, 250, 0.3)":"rgba(0, 0, 0, 0.1)",e.fillStyle=o?"#0f172a":"#ffffff",e.fill(),e.restore(),s.value.forEach((b,$)=>{const k=g+$*i,E=k+i;e.save(),e.beginPath(),e.moveTo(a,l),e.arc(a,l,n,k,E);const y=e.createRadialGradient(a,l,0,a,l,n);y.addColorStop(0,b.color),y.addColorStop(1,j(b.color,-15)),e.fillStyle=y,e.fill(),e.strokeStyle=o?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.4)",e.lineWidth=1.5,e.stroke(),e.save(),e.translate(a,l),e.rotate(k+i/2),e.textAlign="right",b.level===1?(e.shadowBlur=8,e.shadowColor="#fff",e.fillStyle="#92400e"):e.fillStyle=o?"#f1f5f9":"#334155",e.font=`bold ${Math.max(14,n*.08)}px "Inter", system-ui, sans-serif`,e.fillText(b.text,n-25,6),e.restore(),e.restore()}),e.save(),e.beginPath(),e.arc(a,l,28,0,Math.PI*2);const m=e.createLinearGradient(a-20,l-20,a+20,l+20);m.addColorStop(0,o?"#334155":"#f8fafc"),m.addColorStop(1,o?"#0f172a":"#cbd5e1"),e.fillStyle=m,e.shadowBlur=15,e.shadowColor="rgba(0,0,0,0.4)",e.fill(),e.beginPath(),e.arc(a,l,6,0,Math.PI*2),e.fillStyle="#10b981",e.fill(),e.restore()},L=()=>{u.value||(f.value=null,u.value=!0,d=Math.random()*.45+.35,window.threeBg&&(window.threeBg.targetSpeed=8),requestAnimationFrame(P))},P=()=>{g+=d,d*=I,window.threeBg&&(window.threeBg.currentSpeed=1+d*15),c(),d>B?requestAnimationFrame(P):(u.value=!1,d=0,window.threeBg&&(window.threeBg.targetSpeed=1),R())},R=()=>{const t=Math.PI*2/s.value.length,e=(g%(Math.PI*2)+Math.PI*2)%(Math.PI*2),o=Math.PI*1.5;let a=-1;for(let l=0;l<s.value.length;l++){const n=(e+l*t)%(Math.PI*2),i=(n+t)%(Math.PI*2);if(n<i){if(o>=n&&o<=i){a=l;break}}else if(o>=n||o<=i){a=l;break}}a!==-1&&(f.value=s.value[a],z.value=!0,f.value.level===1&&(W(window.innerWidth/2,window.innerHeight/2,"#fbbf24"),window.threeBg&&typeof window.threeBg.celebrate=="function"&&window.threeBg.celebrate()))},T=()=>{if(!v.value)return;const t=["#f87171","#fb923c","#fbbf24","#34d399","#60a5fa","#818cf8","#a78bfa","#f472b6"],e=t[Math.floor(Math.random()*t.length)];s.value.push({text:v.value,color:e,level:p.value}),v.value="",p.value=0,h(c)},A=t=>{s.value.length<=2||(s.value.splice(t,1),h(c))},O=()=>{s.value=[{text:"阿寶Pay 100萬",color:"#fbbf24",level:1},{text:"阿寶Pay 10萬",color:"#94a3b8",level:2},{text:"阿寶Pay 1萬",color:"#d97706",level:3},{text:"銘謝惠顧",color:"#f1f5f9",level:0},{text:"銘謝惠顧",color:"#e2e8f0",level:0},{text:"銘謝惠顧",color:"#cbd5e1",level:0}],h(c)},w=()=>{const t=x.value,e=S.value;if(!t||!e)return;const o=Math.min(e.clientWidth,500);t.width=o,t.height=o,c()};return F(()=>{w(),window.addEventListener("resize",w),new MutationObserver(()=>{c()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),h(()=>{fetch(`/Per_OutTaiwan/announcements.json?t=${Date.now()}`).then(e=>e.json()).then(e=>{e.turntable&&(M.value=e.turntable)}).catch(e=>console.error(e))})}),G(()=>{window.removeEventListener("resize",w)}),{canvasRef:x,containerRef:S,isSpinning:u,prizes:s,newItemText:v,newItemLevel:p,result:f,showResultModal:z,isSettingsOpen:C,announcement:M,spin:L,addPrize:T,removePrize:A,resetToDefault:O}},template:`<LayoutComponent title="幸運轉盤">
      <div class="max-w-6xl mx-auto px-4 py-8 relative">
        
        <!-- 公告欄 -->
        <div v-if="announcement.show" 
             class="mb-8 py-4 bg-slate-100 dark:bg-slate-800/50 border-l-4 border-indigo-600 dark:border-indigo-400 rounded-r-3xl flex items-center overflow-hidden shadow-sm animate-fade-in">
            <div class="px-5 text-indigo-600 dark:text-indigo-400">
                <span class="text-2xl">📢</span>
            </div>
            <div class="marquee-container flex-1 py-1">
                <p class="marquee-content text-slate-900 dark:text-slate-100 font-black text-base">
                    {{ announcement.message }}
                    <span class="inline-block w-20"></span>
                    {{ announcement.message }}
                </p>
            </div>
        </div>

        <!-- 手機版設定切換按鈕 -->
        <button 
          @click="isSettingsOpen = !isSettingsOpen"
          class="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-black dark:hover:bg-white transition-all active:scale-90"
        >
          <svg v-if="!isSettingsOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex flex-col lg:flex-row gap-8 items-start">
          
          <!-- 左側：轉盤區域 -->
          <div class="flex-1 w-full flex flex-col items-center" ref="containerRef">
            <div class="turntable-container mb-8 relative">
              <div class="pointer"></div>
              <canvas id="turntableCanvas" ref="canvasRef" class="max-w-full h-auto"></canvas>
            </div>
            
            <button 
              @click="spin" 
              :disabled="isSpinning"
              class="neon-btn px-12 py-4 rounded-full text-white text-xl md:text-2xl font-bold uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 bg-slate-900 hover:bg-black shadow-lg shadow-black/20"
            >
              {{ isSpinning ? '旋轉中...' : '開始抽獎' }}
            </button>
          </div>
  
          <!-- 右側：設定區域 -->
          <transition 
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-x-full opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-full opacity-0"
          >
            <div 
              v-if="isSettingsOpen"
              class="w-full lg:w-96 glass-card p-6 rounded-3xl border border-white/20 shadow-2xl sticky top-8 z-30"
            >
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-slate-800 dark:text-white">轉盤設定</h2>
                <button @click="isSettingsOpen = false" class="hidden lg:block text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-bold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">新增獎項</label>
                <div class="flex flex-col gap-3">
                  <input 
                    v-model="newItemText" 
                    type="text" 
                    placeholder="輸入獎項名稱..."
                    @keyup.enter="addPrize"
                    class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                  <div class="flex gap-2">
                    <select 
                      v-model="newItemLevel"
                      class="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option :value="0">普通獎</option>
                      <option :value="3">三等獎</option>
                      <option :value="2">二等獎</option>
                      <option :value="1">一等獎</option>
                    </select>
                    <button 
                      @click="addPrize"
                      class="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold hover:bg-black dark:hover:bg-white transition-all active:scale-95 shadow-lg shadow-black/20"
                    >
                      新增
                    </button>
                  </div>
                </div>
              </div>
  
              <div class="mb-2">
                <div class="flex justify-between items-center mb-4">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">目前獎項 ({{ prizes.length }})</label>
                  <button @click="resetToDefault" class="text-xs font-bold text-slate-900 dark:text-slate-100 hover:underline">重置預設</button>
                </div>
                <div class="max-h-[40vh] lg:max-h-96 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  <div v-for="(prize, index) in prizes" :key="index" 
                       class="flex items-center justify-between p-3 rounded-xl transition-all group border"
                       :class="[
                         prize.level === 1 ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 
                         prize.level === 2 ? 'bg-slate-400/10 border-slate-400/50' : 
                         prize.level === 3 ? 'bg-orange-600/10 border-orange-600/50' : 
                         'bg-white/30 dark:bg-slate-800/30 border-white/10 hover:border-slate-900/30 dark:hover:border-slate-100/30'
                       ]">
                    <div class="flex items-center gap-3">
                      <div class="w-5 h-5 rounded-full shadow-inner border border-white/20" :style="{ backgroundColor: prize.color }"></div>
                      <div class="flex flex-col">
                        <span class="text-sm font-bold" :class="prize.level === 1 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-700 dark:text-slate-200'">{{ prize.text }}</span>
                        <span v-if="prize.level > 0" :class="['text-[10px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded-md inline-block w-fit mt-0.5', 
                                                               prize.level === 1 ? 'bg-amber-500 text-white' : 
                                                               prize.level === 2 ? 'bg-slate-400 text-white' : 
                                                               'bg-orange-600 text-white']">
                          {{ prize.level === 1 ? '一等獎' : prize.level === 2 ? '二等獎' : '三等獎' }}
                        </span>
                      </div>
                    </div>
                    <button @click="removePrize(index)" class="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- 桌面版展開按鈕 (當設定關閉時) -->
          <button 
            v-if="!isSettingsOpen"
            @click="isSettingsOpen = true"
            class="hidden lg:flex absolute top-8 right-4 w-12 h-12 glass-card rounded-full items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white border border-white/20 shadow-lg transition-all hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 結果彈窗 -->
      <div v-if="showResultModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="glass-card max-w-sm w-full p-8 rounded-3xl border border-white/20 text-center animate-in fade-in zoom-in duration-300">
          <div class="text-6xl mb-4">🎉</div>
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">恭喜中獎！</h3>
          <div class="text-4xl font-black text-slate-900 dark:text-slate-100 mb-6">{{ result?.text }}</div>
          <button 
            @click="showResultModal = false"
            class="w-full py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-black dark:hover:bg-white transition-colors shadow-lg"
          >
            太棒了！
          </button>
        </div>
      </div>
    </LayoutComponent>`});q(H).mount("#app");
