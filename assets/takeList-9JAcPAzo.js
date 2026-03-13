import{c as G,d as $,L as O,o as N,r as n,b as d,a as h,e as F}from"./index-DHhv7soH.js";const J=$({name:"TakeList",components:{LayoutComponent:O},setup(){const c=n(1),o=n(""),i=n(""),p=n(""),y=n(!1),C=n(!1),m=n(!1),l=F([]),u=n({countries:{},global:{show:!1,message:""}}),S=d(()=>!o.value||!u.value.countries?null:u.value.countries[o.value]||null),x={korea:{name:"韓國",flag:"🇰🇷",implemented:!0},japan:{name:"日本",flag:"🇯🇵",implemented:!1},thailand:{name:"泰國",flag:"🇹🇭",implemented:!1},usa:{name:"美國",flag:"🇺🇸",implemented:!1},europe:{name:"歐洲",flag:"🇪🇺",implemented:!1}},g={must:[{id:"m1",name:"護照",checked:!1},{id:"m2",name:"錢包",checked:!1},{id:"m3",name:"信用卡",checked:!1},{id:"m4",name:"現金",checked:!1},{id:"m5",name:"手機",checked:!1},{id:"m6",name:"充電線",checked:!1},{id:"m7",name:"行動電源",checked:!1},{id:"m8",name:"機票 / 電子機票",checked:!1},{id:"m9",name:"旅遊保險",checked:!1},{id:"m10",name:"住宿資訊",checked:!1},{id:"m11",name:"eSIM / 網路",checked:!1},{id:"m12",name:"轉接頭",checked:!1}],categories:[{name:"🧴 洗漱用品",icon:"🧴",items:[{id:"t1",name:"牙刷",checked:!1},{id:"t2",name:"牙膏",checked:!1},{id:"t3",name:"洗面乳",checked:!1},{id:"t4",name:"洗髮精",checked:!1},{id:"t5",name:"沐浴乳",checked:!1},{id:"t6",name:"毛巾",checked:!1},{id:"t7",name:"梳子",checked:!1},{id:"t8",name:"刮鬍刀",checked:!1},{id:"t9",name:"指甲剪",checked:!1},{id:"t10",name:"化妝棉",checked:!1},{id:"t11",name:"卸妝水",checked:!1,gender:"female"},{id:"t12",name:"保養品",checked:!1,gender:"female"},{id:"t13",name:"防曬",checked:!1,gender:"female"},{id:"t14",name:"化妝品",checked:!1,gender:"female"}]},{name:"👕 衣物",icon:"👕",items:[{id:"c1",name:"內衣",checked:!1},{id:"c2",name:"內褲",checked:!1},{id:"c3",name:"襪子",checked:!1},{id:"c4",name:"T-shirt",checked:!1},{id:"c5",name:"外套",checked:!1},{id:"c6",name:"睡衣",checked:!1},{id:"c7",name:"拖鞋",checked:!1},{id:"c8",name:"保暖衣物",checked:!1,country:"korea"},{id:"c9",name:"圍巾",checked:!1,country:"korea"},{id:"c10",name:"手套",checked:!1,country:"korea"},{id:"c11",name:"絲襪",checked:!1,gender:"female"},{id:"c12",name:"裙子",checked:!1,gender:"female"},{id:"c13",name:"化妝包",checked:!1,gender:"female"}]},{name:"📱 電子用品",icon:"📱",items:[{id:"e1",name:"手機",checked:!1},{id:"e2",name:"充電線",checked:!1},{id:"e3",name:"行動電源",checked:!1},{id:"e4",name:"相機",checked:!1},{id:"e5",name:"相機電池",checked:!1},{id:"e6",name:"記憶卡",checked:!1},{id:"e7",name:"耳機",checked:!1},{id:"e8",name:"轉接頭",checked:!1}]},{name:"💊 醫藥用品",icon:"💊",items:[{id:"p1",name:"常備藥",checked:!1},{id:"p2",name:"感冒藥",checked:!1},{id:"p3",name:"腸胃藥",checked:!1},{id:"p4",name:"OK繃",checked:!1},{id:"p5",name:"防蚊液",checked:!1},{id:"p6",name:"維他命",checked:!1}]},{name:"✈️ 旅行用品",icon:"✈️",items:[{id:"tr1",name:"行李箱",checked:!1},{id:"tr2",name:"行李鎖",checked:!1},{id:"tr3",name:"行李秤",checked:!1},{id:"tr4",name:"旅行枕",checked:!1},{id:"tr5",name:"眼罩",checked:!1},{id:"tr6",name:"耳塞",checked:!1},{id:"tr7",name:"水壺",checked:!1},{id:"tr8",name:"折疊袋",checked:!1}]}]},M=d(()=>l.filter(e=>e.isMust)),b=d(()=>{const e=[],t=l.filter(s=>!s.isMust);return g.categories.forEach(s=>{const a=t.filter(v=>v.category===s.name);a.length>0&&e.push({name:s.name,icon:s.icon,items:a})}),e}),L=d(()=>p.value?b.value.map(e=>({...e,items:e.items.filter(t=>t.name.includes(p.value))})).filter(e=>e.items.length>0):b.value),r=d(()=>l.length),k=d(()=>l.filter(e=>e.checked).length),A=d(()=>r.value===0?0:Math.round(k.value/r.value*100)),E=(e,t)=>{if(h(t.clientX,t.clientY,"#10b981"),!x[e].implemented){alert("此國家清單即將推出！目前請選擇韓國 🇰🇷");return}o.value=e,c.value=2,f()},I=(e,t)=>{h(t.clientX,t.clientY,"#10b981"),i.value=e,c.value=3,w(),f()},w=()=>{const e=[];g.must.forEach(s=>{e.push({...s,isMust:!0,category:"🚨 絕對不能忘記"})}),g.categories.forEach(s=>{s.items.forEach(a=>{a.gender&&a.gender!==i.value||a.country&&a.country!==o.value||e.push({...a,isMust:!1,category:s.name})})});const t=localStorage.getItem("travel_packing_state");if(t){const s=JSON.parse(t);s.country===o.value&&s.gender===i.value&&e.forEach(a=>{const v=s.items.find(B=>B.id===a.id);v&&(a.checked=v.checked)})}l.splice(0,l.length,...e)},j=(e,t)=>{if(e.checked=!e.checked,k.value===r.value&&r.value>0)for(let s=0;s<5;s++)setTimeout(()=>{h(window.innerWidth/2+(Math.random()-.5)*200,window.innerHeight/2+(Math.random()-.5)*200,"#10b981")},s*100);f()},T=()=>{l.forEach(e=>e.checked=!0),f()},H=()=>{m.value=!0},P=()=>{localStorage.removeItem("travel_packing_state"),l.forEach(e=>e.checked=!1),m.value=!1,h(window.innerWidth/2,window.innerHeight/2,"#ef4444")},R=()=>{m.value=!1},f=()=>{const e={gender:i.value,step:c.value,items:l.map(t=>({id:t.id,checked:t.checked})),dark:document.body.classList.contains("dark")};localStorage.setItem("travel_packing_state",JSON.stringify(e))},_=()=>{const e=localStorage.getItem("travel_packing_state");if(e)try{const t=JSON.parse(e);i.value=t.gender||"",c.value=Number(t.step)||1,t.dark&&document.body.classList.add("dark"),c.value===3&&i.value&&w(),c.value===3&&(c.value=1)}catch(t){console.error("Failed to load state:",t),c.value=1}},z=async()=>{try{const e=await fetch(`/announcements.json?t=${Date.now()}`);if(!e.ok)throw new Error("Fetch failed");const t=await e.json();t&&(u.value={countries:t.countries||{},global:t.global||{show:!1,message:""}})}catch(e){console.error("無法載入公告資訊:",e)}};return N(()=>{_(),z()}),{currentStep:c,selectedCountry:o,selectedGender:i,searchQuery:p,countries:x,mustItems:M,filteredCategories:L,totalCount:r,packedCount:k,progressPercent:A,announcementConfig:u,currentCountryAnnouncement:S,isHeaderExpanded:y,peekingActive:C,showResetModal:m,selectCountry:E,selectGender:I,toggleItem:j,markAllPacked:T,resetList:H,confirmReset:P,cancelReset:R}},template:`
    <LayoutComponent title="OutTaiwan - 打包清單">
        <!-- Step 1: Select Country -->
        <div v-if="currentStep === 1" class="step-container">
            <h1 class="step-title">🌍 準備出發去哪裡？</h1>
            <p class="step-subtitle">選擇您的旅遊目的地，我們將為您準備專屬清單</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(country, key) in countries" :key="key" 
                     @click="selectCountry(key, $event)"
                     class="selection-card">
                    <div class="selection-icon">{{ country.flag }}</div>
                    <div class="text-2xl font-bold text-slate-800">{{ country.name }}</div>
                    <div v-if="!country.implemented" class="mt-2 text-sm text-slate-400 italic">(即將推出)</div>
                </div>
            </div>
        </div>

        <!-- Step 2: Select Gender -->
        <div v-if="currentStep === 2" class="step-container">
            <button @click="currentStep = 1" class="mb-8 text-slate-500 hover:text-slate-800 flex items-center justify-center mx-auto transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                重新選擇國家
            </button>
            <h1 class="step-title">👤 您的性別？</h1>
            <p class="step-subtitle">這能幫助我們提供更精確的個人用品建議</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div @click="selectGender('male', $event)" class="selection-card p-10">
                    <div class="selection-icon text-7xl">👨</div>
                    <div class="text-2xl font-bold text-slate-800">男性</div>
                </div>
                <div @click="selectGender('female', $event)" class="selection-card p-10">
                    <div class="selection-icon text-7xl">👩</div>
                    <div class="text-2xl font-bold text-slate-800">女性</div>
                </div>
            </div>
        </div>

        <!-- Step 3: Packing List -->
        <div v-if="currentStep === 3" class="max-w-5xl mx-auto">
            <!-- Country Announcement (Moved out of sticky header for better visibility) -->
            <div v-if="currentCountryAnnouncement && currentCountryAnnouncement.show" 
                 class="mb-6 py-3 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-2xl flex items-center overflow-hidden shadow-sm animate-fade-in">
                <div class="px-4 text-emerald-600">
                    <span class="text-xl">📢</span>
                </div>
                <div class="marquee-container flex-1 py-1">
                    <p class="marquee-content text-emerald-900 font-bold text-sm md:text-base">
                        {{ currentCountryAnnouncement.message }}
                        <span class="inline-block w-20"></span>
                        {{ currentCountryAnnouncement.message }}
                    </p>
                </div>
            </div>

            <!-- Header & Progress -->
            <div class="glass-card p-4 md:p-6 rounded-3xl shadow-lg mb-8 sticky top-0 z-50 -mx-4 px-6 pt-10 md:mx-0 md:px-6 md:pt-6 md:top-4">
                <!-- Title & Mobile Toggle -->
                <div class="flex items-center justify-between mb-2 md:mb-6">
                    <h1 class="text-xl md:text-2xl font-bold text-slate-800 flex items-center">
                        <span class="mr-2">{{ countries[selectedCountry].flag }}</span>
                        <span class="truncate max-w-[150px] sm:max-w-none">{{ countries[selectedCountry].name }} 清單</span>
                        <span class="ml-2 text-[10px] md:text-sm font-normal bg-slate-200 px-2 py-0.5 rounded-full text-slate-600 whitespace-nowrap">
                            {{ selectedGender === 'male' ? '👨' : '👩' }}
                        </span>
                    </h1>
                    
                    <!-- Mobile Toggle Button -->
                    <button @click="isHeaderExpanded = !isHeaderExpanded" 
                            class="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform" :class="{ 'rotate-180': isHeaderExpanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <!-- Collapsible Content (Always visible on MD+) -->
                <div :class="{ 'hidden': !isHeaderExpanded && currentStep === 3 }" class="md:block animate-fade-in">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-end mb-6 gap-4">
                        <div class="flex gap-2 w-full md:w-auto">
                            <button @click="markAllPacked" class="btn-primary flex-1 md:flex-none py-2 text-sm">
                                全部完成
                            </button>
                            <button @click="resetList" class="btn-secondary flex-1 md:flex-none py-2 text-sm">
                                重置清單
                            </button>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="mb-4">
                        <div class="flex justify-between text-[10px] md:text-sm font-medium text-slate-600 mb-1">
                            <span>打包進度</span>
                            <span>{{ packedCount }} / {{ totalCount }}</span>
                        </div>
                        <div class="w-full bg-slate-200 rounded-full h-2 md:h-3 overflow-hidden">
                            <div class="progress-bar-fill h-full bg-emerald-500" :style="{ width: progressPercent + '%' }"></div>
                        </div>
                    </div>

                    <!-- Search -->
                    <div class="relative">
                        <input v-model="searchQuery" type="text" placeholder="搜尋物品..." 
                               class="search-input py-2 pl-10 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-3 top-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 🚨 Absolute Must Forget Section -->
            <div class="bg-orange-500 rounded-3xl p-6 shadow-xl mb-8 text-white overflow-hidden relative">
                <div class="absolute -right-8 -top-8 text-white/10 text-9xl font-bold rotate-12 pointer-events-none">MUST</div>
                <h2 class="text-2xl font-bold mb-6 flex items-center">
                    <span class="mr-2">🚨</span> 絕對不能忘記 (Absolute Must)
                </h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div v-for="item in mustItems" :key="item.id" 
                         @click="toggleItem(item, $event)"
                         class="bg-white/20 hover:bg-white/30 p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-3 group"
                         :class="{ 'opacity-50': item.checked }">
                        <div class="custom-checkbox flex-shrink-0" :class="{ 'checked': item.checked }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="font-medium text-sm sm:text-base" :class="{ 'item-checked': item.checked }">{{ item.name }}</span>
                    </div>
                </div>
            </div>

            <!-- Categories -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="category in filteredCategories" :key="category.name" class="glass-card p-6 rounded-3xl shadow-lg">
                    <h3 class="text-xl font-bold mb-4 text-slate-800 flex items-center">
                        <span class="mr-2">{{ category.icon }}</span> {{ category.name }}
                    </h3>
                    <div class="space-y-2">
                        <div v-for="item in category.items" :key="item.id" 
                             @click="toggleItem(item, $event)"
                             class="flex items-center p-3 rounded-xl hover:bg-white/50 cursor-pointer transition-all group"
                             :class="{ 'bg-emerald-50/50': item.checked }">
                            <div class="custom-checkbox mr-3 flex-shrink-0" :class="{ 'checked': item.checked }">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-slate-700 font-medium" :class="{ 'item-checked': item.checked }">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty Search State -->
            <div v-if="filteredCategories.length === 0 && searchQuery" class="text-center py-20">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-bold text-slate-600">找不到相關物品</h3>
                <p class="text-slate-400">請嘗試其他關鍵字</p>
            </div>
        </div>

        <!-- Reset Confirmation Modal -->
        <div v-if="showResetModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="cancelReset"></div>
            <div class="glass-card p-8 rounded-3xl shadow-2xl max-w-sm w-full relative z-10 animate-scale-in">
                <div class="text-center">
                    <div class="text-5xl mb-4">⚠️</div>
                    <h3 class="text-2xl font-bold text-slate-800 mb-2">確定要重置嗎？</h3>
                    <p class="text-slate-600 mb-8">這將會清除您目前所有的打包進度，且無法復原。</p>
                    <div class="flex gap-4">
                        <button @click="cancelReset" class="btn-secondary flex-1 py-3">
                            取消
                        </button>
                        <button @click="confirmReset" class="btn-primary bg-red-500 hover:bg-red-600 border-red-600 flex-1 py-3">
                            確定重置
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </LayoutComponent>
  `});G(J).mount("#app");
