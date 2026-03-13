import{c as G,d as $,L as O,o as F,r,a as c,b as v,e as N}from"./index-W4l4sIzX.js";const J=$({name:"TakeList",components:{LayoutComponent:O},setup(){const l=r(1),i=r(""),d=r(""),g=r(""),y=r(!1),C=r(!1),m=r(!1),n=N([]),u=r({countries:{},global:{show:!1,message:""}}),S=c(()=>!i.value||!u.value.countries?null:u.value.countries[i.value]||null),k={korea:{name:"韓國",flag:"🇰🇷",implemented:!0},japan:{name:"日本",flag:"🇯🇵",implemented:!1},thailand:{name:"泰國",flag:"🇹🇭",implemented:!1},usa:{name:"美國",flag:"🇺🇸",implemented:!1},europe:{name:"歐洲",flag:"🇪🇺",implemented:!1}},x={must:[{id:"m1",name:"護照",checked:!1},{id:"m2",name:"錢包",checked:!1},{id:"m3",name:"信用卡",checked:!1},{id:"m4",name:"現金",checked:!1},{id:"m5",name:"手機",checked:!1},{id:"m6",name:"充電線",checked:!1},{id:"m7",name:"行動電源",checked:!1},{id:"m8",name:"機票 / 電子機票",checked:!1},{id:"m9",name:"旅遊保險",checked:!1},{id:"m10",name:"住宿資訊",checked:!1},{id:"m11",name:"eSIM / 網路",checked:!1},{id:"m12",name:"轉接頭",checked:!1}],categories:[{name:"🧴 洗漱用品",icon:"🧴",items:[{id:"t1",name:"牙刷",checked:!1},{id:"t2",name:"牙膏",checked:!1},{id:"t3",name:"洗面乳",checked:!1},{id:"t4",name:"洗髮精",checked:!1},{id:"t5",name:"沐浴乳",checked:!1},{id:"t6",name:"毛巾",checked:!1},{id:"t7",name:"梳子",checked:!1},{id:"t8",name:"刮鬍刀",checked:!1},{id:"t9",name:"指甲剪",checked:!1},{id:"t10",name:"化妝棉",checked:!1},{id:"t11",name:"卸妝水",checked:!1,gender:"female"},{id:"t12",name:"保養品",checked:!1,gender:"female"},{id:"t13",name:"防曬",checked:!1,gender:"female"},{id:"t14",name:"化妝品",checked:!1,gender:"female"}]},{name:"👕 衣物",icon:"👕",items:[{id:"c1",name:"內衣",checked:!1},{id:"c2",name:"內褲",checked:!1},{id:"c3",name:"襪子",checked:!1},{id:"c4",name:"T-shirt",checked:!1},{id:"c5",name:"外套",checked:!1},{id:"c6",name:"睡衣",checked:!1},{id:"c7",name:"拖鞋",checked:!1},{id:"c8",name:"保暖衣物",checked:!1,country:"korea"},{id:"c9",name:"圍巾",checked:!1,country:"korea"},{id:"c10",name:"手套",checked:!1,country:"korea"},{id:"c11",name:"絲襪",checked:!1,gender:"female"},{id:"c12",name:"裙子",checked:!1,gender:"female"},{id:"c13",name:"化妝包",checked:!1,gender:"female"}]},{name:"📱 電子用品",icon:"📱",items:[{id:"e1",name:"手機",checked:!1},{id:"e2",name:"充電線",checked:!1},{id:"e3",name:"行動電源",checked:!1},{id:"e4",name:"相機",checked:!1},{id:"e5",name:"相機電池",checked:!1},{id:"e6",name:"記憶卡",checked:!1},{id:"e7",name:"耳機",checked:!1},{id:"e8",name:"轉接頭",checked:!1}]},{name:"💊 醫藥用品",icon:"💊",items:[{id:"p1",name:"常備藥",checked:!1},{id:"p2",name:"感冒藥",checked:!1},{id:"p3",name:"腸胃藥",checked:!1},{id:"p4",name:"OK繃",checked:!1},{id:"p5",name:"防蚊液",checked:!1},{id:"p6",name:"維他命",checked:!1}]},{name:"✈️ 旅行用品",icon:"✈️",items:[{id:"tr1",name:"行李箱",checked:!1},{id:"tr2",name:"行李鎖",checked:!1},{id:"tr3",name:"行李秤",checked:!1},{id:"tr4",name:"旅行枕",checked:!1},{id:"tr5",name:"眼罩",checked:!1},{id:"tr6",name:"耳塞",checked:!1},{id:"tr7",name:"水壺",checked:!1},{id:"tr8",name:"折疊袋",checked:!1}]}]},M=c(()=>n.filter(e=>e.isMust)),b=c(()=>{const e=[],t=n.filter(a=>!a.isMust);return x.categories.forEach(a=>{const s=t.filter(f=>f.category===a.name);s.length>0&&e.push({name:a.name,icon:a.icon,items:s})}),e}),E=c(()=>g.value?b.value.map(e=>({...e,items:e.items.filter(t=>t.name.includes(g.value))})).filter(e=>e.items.length>0):b.value),o=c(()=>n.length),p=c(()=>n.filter(e=>e.checked).length),L=c(()=>o.value===0?0:Math.round(p.value/o.value*100)),j=(e,t)=>{if(v(t.clientX,t.clientY,"#10b981"),!k[e].implemented){alert("此國家清單即將推出！目前請選擇韓國 🇰🇷");return}i.value=e,l.value=2,h()},A=(e,t)=>{v(t.clientX,t.clientY,"#10b981"),d.value=e,l.value=3,w(),h()},w=()=>{const e=[];x.must.forEach(a=>{e.push({...a,isMust:!0,category:"🚨 絕對不能忘記"})}),x.categories.forEach(a=>{a.items.forEach(s=>{s.gender&&s.gender!==d.value||s.country&&s.country!==i.value||e.push({...s,isMust:!1,category:a.name})})});const t=localStorage.getItem("travel_packing_state");if(t){const a=JSON.parse(t);a.country===i.value&&a.gender===d.value&&e.forEach(s=>{const f=a.items.find(_=>_.id===s.id);f&&(s.checked=f.checked)})}n.splice(0,n.length,...e)},I=(e,t)=>{if(e.checked=!e.checked,p.value===o.value&&o.value>0)for(let a=0;a<5;a++)setTimeout(()=>{v(window.innerWidth/2+(Math.random()-.5)*200,window.innerHeight/2+(Math.random()-.5)*200,"#10b981")},a*100);h()},P=()=>{n.forEach(e=>e.checked=!0),h()},z=()=>{m.value=!0},T=()=>{localStorage.removeItem("travel_packing_state"),n.forEach(e=>e.checked=!1),m.value=!1,v(window.innerWidth/2,window.innerHeight/2,"#ef4444")},B=()=>{m.value=!1},h=()=>{const e={gender:d.value,step:l.value,items:n.map(t=>({id:t.id,checked:t.checked})),dark:document.body.classList.contains("dark")};localStorage.setItem("travel_packing_state",JSON.stringify(e))},H=()=>{const e=localStorage.getItem("travel_packing_state");if(e)try{const t=JSON.parse(e);d.value=t.gender||"",l.value=Number(t.step)||1,t.dark&&document.body.classList.add("dark"),l.value===3&&d.value&&w(),l.value===3&&(l.value=1)}catch(t){console.error("Failed to load state:",t),l.value=1}},R=async()=>{try{const e=await fetch(`/announcements.json?t=${Date.now()}`);if(!e.ok)throw new Error("Fetch failed");const t=await e.json();t&&(u.value={countries:t.countries||{},global:t.global||{show:!1,message:""}})}catch(e){console.error("無法載入公告資訊:",e)}};return F(()=>{H(),R()}),{currentStep:l,selectedCountry:i,selectedGender:d,searchQuery:g,countries:k,mustItems:M,filteredCategories:E,totalCount:o,packedCount:p,progressPercent:L,announcementConfig:u,currentCountryAnnouncement:S,isHeaderExpanded:y,peekingActive:C,showResetModal:m,selectCountry:j,selectGender:A,toggleItem:I,markAllPacked:P,resetList:z,confirmReset:T,cancelReset:B}},template:`
    <LayoutComponent title="OutTaiwan - 打包清單">
        <!-- Step 1: Select Country -->
        <div v-if="currentStep === 1" class="step-container py-12">
            <h1 class="text-4xl md:text-5xl font-black text-center mb-4 text-slate-900 dark:text-white">準備出發去哪裡？</h1>
            <p class="text-center text-slate-700 dark:text-slate-300 mb-12 text-lg">選擇您的旅遊目的地，我們將為您準備專屬清單</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(country, key) in countries" :key="key" 
                     @click="selectCountry(key, $event)"
                     class="selection-card glass-card p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                    <div class="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">{{ country.flag }}</div>
                    <div class="text-2xl font-bold text-slate-800 dark:text-white text-center">{{ country.name }}</div>
                    <div v-if="!country.implemented" class="mt-2 text-sm text-slate-400 dark:text-slate-500 italic text-center">(即將推出)</div>
                </div>
            </div>
        </div>

        <!-- Step 2: Select Gender -->
        <div v-if="currentStep === 2" class="step-container py-12">
            <button @click="currentStep = 1" class="mb-8 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center mx-auto transition-colors font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                重新選擇國家
            </button>
            <h1 class="text-4xl md:text-5xl font-black text-center mb-4 text-slate-900 dark:text-white">您的性別？</h1>
            <p class="text-center text-slate-700 dark:text-slate-300 mb-12 text-lg">這能幫助我們提供更精確的個人用品建議</p>
 
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div @click="selectGender('male', $event)" class="selection-card glass-card p-12 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                    <div class="text-8xl mb-6 text-center group-hover:scale-110 transition-transform">👨</div>
                    <div class="text-3xl font-bold text-slate-800 dark:text-white text-center">男性</div>
                </div>
                <div @click="selectGender('female', $event)" class="selection-card glass-card p-12 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                    <div class="text-8xl mb-6 text-center group-hover:scale-110 transition-transform">👩</div>
                    <div class="text-3xl font-bold text-slate-800 dark:text-white text-center">女性</div>
                </div>
            </div>
        </div>

        <!-- Step 3: Packing List -->
        <div v-if="currentStep === 3" class="max-w-5xl mx-auto py-8">
            <!-- Country Announcement -->
            <div v-if="currentCountryAnnouncement && currentCountryAnnouncement.show" 
                 class="mb-8 py-4 bg-slate-100 dark:bg-slate-800/50 border-l-4 border-slate-900 dark:border-slate-400 rounded-r-3xl flex items-center overflow-hidden shadow-sm animate-fade-in">
                <div class="px-5 text-slate-900 dark:text-slate-400">
                    <span class="text-2xl">📢</span>
                </div>
                <div class="marquee-container flex-1 py-1">
                    <p class="marquee-content text-slate-900 dark:text-slate-100 font-black text-base">
                        {{ currentCountryAnnouncement.message }}
                        <span class="inline-block w-20"></span>
                        {{ currentCountryAnnouncement.message }}
                    </p>
                </div>
            </div>

            <!-- Header & Progress -->
            <div class="glass-card p-6 md:p-8 rounded-[2.5rem] shadow-xl mb-10 sticky top-4 z-50 border border-white/20">
                <!-- Title & Mobile Toggle -->
                <div class="flex items-center justify-between mb-6">
                    <h1 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center">
                        <span class="mr-3">{{ countries[selectedCountry].flag }}</span>
                        <span class="truncate">{{ countries[selectedCountry].name }} 清單</span>
                        <span class="ml-3 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full uppercase tracking-widest">
                            {{ selectedGender === 'male' ? 'MALE 👨' : 'FEMALE 👩' }}
                        </span>
                    </h1>
                    
                    <!-- Mobile Toggle Button -->
                    <button @click="isHeaderExpanded = !isHeaderExpanded" 
                            class="md:hidden p-3 text-slate-500 dark:text-slate-400 hover:bg-white/10 rounded-2xl transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300" :class="{ 'rotate-180': isHeaderExpanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
 
                <!-- Collapsible Content -->
                <div :class="{ 'hidden': !isHeaderExpanded }" class="md:block animate-in fade-in slide-in-from-top-4 duration-300">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div class="flex gap-3 w-full md:w-auto">
                            <button @click="markAllPacked" class="flex-1 md:flex-none px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-600/30">
                                全部完成
                            </button>
                            <button @click="resetList" class="flex-1 md:flex-none px-6 py-3 bg-white/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600 rounded-2xl font-bold text-sm hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95">
                                重置清單
                            </button>
                        </div>
                        
                        <!-- Progress Bar (Desktop) -->
                        <div class="hidden md:block flex-1 max-w-xs ml-8">
                            <div class="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                <span>打包進度</span>
                                <span>{{ progressPercent }}% ({{ packedCount }}/{{ totalCount }})</span>
                            </div>
                            <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
                                <div class="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500" :style="{ width: progressPercent + '%' }"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Progress Bar (Mobile) -->
                    <div class="md:hidden mb-6">
                        <div class="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                            <span>打包進度</span>
                            <span>{{ progressPercent }}%</span>
                        </div>
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
                            <div class="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500" :style="{ width: progressPercent + '%' }"></div>
                        </div>
                    </div>
 
                    <!-- Search -->
                    <div class="relative">
                        <input v-model="searchQuery" type="text" placeholder="搜尋物品..." 
                               class="w-full py-4 pl-12 pr-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-4 top-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
 
            <!-- 🚨 Absolute Must Forget Section -->
            <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] p-8 shadow-2xl mb-12 text-white overflow-hidden relative group">
                <div class="absolute -right-12 -top-12 text-white/10 text-[12rem] font-black rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-700">MUST</div>
                <h2 class="text-3xl font-black mb-8 flex items-center relative z-10">
                    <span class="mr-3">🚨</span> 絕對不能忘記
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                    <div v-for="item in mustItems" :key="item.id" 
                         @click="toggleItem(item, $event)"
                         class="bg-white/15 hover:bg-white/25 p-5 rounded-2xl cursor-pointer transition-all flex items-center gap-4 group/item"
                         :class="{ 'opacity-50': item.checked }">
                        <div class="w-6 h-6 rounded-lg border-2 border-white/50 flex items-center justify-center transition-all group-hover/item:border-white" :class="{ 'bg-white border-white': item.checked }">
                            <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="font-bold text-lg" :class="{ 'line-through opacity-70': item.checked }">{{ item.name }}</span>
                    </div>
                </div>
            </div>
 
            <!-- Categories -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="category in filteredCategories" :key="category.name" class="glass-card p-8 rounded-[2.5rem] shadow-xl border border-white/20">
                    <h3 class="text-2xl font-black mb-6 text-slate-900 dark:text-white flex items-center">
                        <span class="mr-3 p-2 bg-slate-100 dark:bg-slate-800 rounded-2xl">{{ category.icon }}</span> {{ category.name }}
                    </h3>
                    <div class="space-y-3">
                        <div v-for="item in category.items" :key="item.id" 
                             @click="toggleItem(item, $event)"
                             class="flex items-center p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group border border-transparent"
                             :class="{ 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-900/20': item.checked }">
                            <div class="w-6 h-6 rounded-lg border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all group-hover:border-slate-900 dark:group-hover:border-slate-400" :class="{ 'bg-slate-900 border-slate-900 dark:bg-slate-400 dark:border-slate-400': item.checked }">
                                <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white dark:text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="ml-4 text-slate-900 dark:text-slate-200 font-bold text-lg" :class="{ 'line-through opacity-50': item.checked }">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty Search State -->
            <div v-if="filteredCategories.length === 0 && searchQuery" class="text-center py-20">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-bold text-slate-600 dark:text-slate-400">找不到相關物品</h3>
                <p class="text-slate-400">請嘗試其他關鍵字</p>
            </div>
        </div>

        <!-- Reset Confirmation Modal -->
        <div v-if="showResetModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="cancelReset"></div>
            <div class="glass-card p-8 rounded-3xl shadow-2xl max-w-sm w-full relative z-10 animate-scale-in">
                <div class="text-center">
                    <div class="text-5xl mb-4">⚠️</div>
                    <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">確定要重置嗎？</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-8">這將會清除您目前所有的打包進度，且無法復原。</p>
                    <div class="flex gap-4">
                        <button @click="cancelReset" class="flex-1 py-3 bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95">
                            取消
                        </button>
                        <button @click="confirmReset" class="flex-1 py-3 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-red-500/20">
                            確定重置
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </LayoutComponent>
  `});G(J).mount("#app");
