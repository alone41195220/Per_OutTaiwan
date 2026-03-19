import{c as oe,d as ie,L as ne,r as a,o as de,a as d,b as h,e as ce}from"./index-CWxIQ23c.js";const me=ie({name:"TakeList",components:{LayoutComponent:ne},setup(){const z=typeof window<"u"?window.innerWidth<768:!1,c=a(1),i=a(""),n=a(""),m=a(""),y=a("All"),g=a({}),S=a(!1),H=a(!1),T=a(!z),$=a(!1),f=a(!1),E=a(!1),x=a(""),p=a("🚨 絕對不能忘記"),o=ce([]),k=a({countries:{},global:{show:!1,message:""}}),D=d(()=>!i.value||!k.value.countries?null:k.value.countries[i.value]||null),A={korea:{name:"韓國",flag:"🇰🇷",implemented:!0},japan:{name:"日本",flag:"🇯🇵",implemented:!1},thailand:{name:"泰國",flag:"🇹🇭",implemented:!1},usa:{name:"美國",flag:"🇺🇸",implemented:!1},europe:{name:"歐洲",flag:"🇪🇺",implemented:!1}},b={must:[{id:"m1",name:"護照",checked:!1},{id:"m2",name:"手機",checked:!1},{id:"m3",name:"錢包",checked:!1},{id:"m4",name:"信用卡",checked:!1},{id:"m5",name:"網路卡/ESIM",checked:!1},{id:"m6",name:"錢(台幣/外幣)",checked:!1}],categories:[{name:"其他重要物品",icon:"💼",items:[{id:"i1",name:"登機證(可以申請記得先申請)",checked:!1},{id:"i2",name:"證件(身分證 健保卡)",checked:!1},{id:"i3",name:"行動電源",checked:!1},{id:"i4",name:"雨傘",checked:!1},{id:"i5",name:"萬國轉接頭",checked:!1},{id:"i6",name:"充電頭2顆",checked:!1},{id:"i7",name:"充電線2條(記得拿一條跟行動電源放一起)",checked:!1}]},{name:"包包",icon:"🎒",items:[{id:"b1",name:"後背包",checked:!1},{id:"b2",name:"側背包",checked:!1},{id:"b3",name:"收納腰包",checked:!1},{id:"b4",name:"行李替大~包 (掛行李箱上那個)",checked:!1},{id:"b5",name:"壓縮袋",checked:!1}]},{name:"衣物",icon:"👕",items:[{id:"c1",name:"衣服(記得帶睡衣) [幾夜]",checked:!1},{id:"c2",name:"褲子(記得帶睡褲) [幾夜]",checked:!1},{id:"c3",name:"內褲 [幾天]",checked:!1},{id:"c4",name:"內衣 [幾天]",checked:!1},{id:"c5",name:"襪子 [幾天]",checked:!1},{id:"c6",name:"拖鞋/涼鞋/布鞋",checked:!1},{id:"c7",name:"外套",checked:!1},{id:"c8",name:"帽子",checked:!1}]},{name:"盥洗用品",icon:"🧴",items:[{id:"t1",name:"牙刷牙膏",checked:!1},{id:"t2",name:"洗面乳",checked:!1},{id:"t3",name:"護髮乳",checked:!1},{id:"t4",name:"洗臉巾",checked:!1},{id:"t5",name:"隱形眼鏡+清洗液",checked:!1},{id:"t6",name:"髒衣袋",checked:!1},{id:"t7",name:"壓縮毛巾",checked:!1},{id:"t8",name:"牙籤",checked:!1},{id:"t9",name:"頸枕",checked:!1},{id:"t10",name:"眼罩",checked:!1},{id:"t11",name:"耳塞",checked:!1}]},{name:"文具用品/3C/備品",icon:"📱",items:[{id:"s1",name:"小剪刀(記得丟行李箱)",checked:!1},{id:"s2",name:"膠帶",checked:!1},{id:"s3",name:"筆",checked:!1},{id:"s4",name:"耳機",checked:!1},{id:"s5",name:"自拍棒",checked:!1},{id:"s6",name:"絕緣膠帶",checked:!1},{id:"s7",name:"飲料提袋",checked:!1},{id:"s8",name:"環保袋",checked:!1},{id:"s9",name:"衛生紙",checked:!1},{id:"s10",name:"濕紙巾",checked:!1},{id:"s11",name:"垃圾袋",checked:!1}]},{name:"藥品",icon:"💊",items:[{id:"p1",name:"小護士",checked:!1},{id:"p2",name:"防蚊液",checked:!1},{id:"p3",name:"木瓜霜",checked:!1},{id:"p4",name:"生理食鹽水",checked:!1},{id:"p5",name:"眼藥水",checked:!1},{id:"p6",name:"止痛藥",checked:!1},{id:"p7",name:"ok蹦",checked:!1},{id:"p8",name:"棉花棒",checked:!1}]},{name:"化妝品",icon:"💄",items:[{id:"mk1",name:"防曬",checked:!1},{id:"mk2",name:"粉底液+刀",checked:!1},{id:"mk3",name:"粉餅+海綿",checked:!1},{id:"mk4",name:"定妝液",checked:!1},{id:"mk5",name:"定妝粉",checked:!1},{id:"mk6",name:"腮紅",checked:!1},{id:"mk7",name:"眼影+刷具",checked:!1},{id:"mk8",name:"眉粉",checked:!1},{id:"mk9",name:"眼線筆",checked:!1},{id:"mk10",name:"睫毛膏+夾",checked:!1},{id:"mk11",name:"口紅",checked:!1},{id:"mk12",name:"卸妝水+巾",checked:!1},{id:"mk13",name:"梳子",checked:!1},{id:"mk14",name:"髮油",checked:!1},{id:"mk15",name:"香水",checked:!1},{id:"mk16",name:"髮圈",checked:!1},{id:"mk17",name:"鏡子",checked:!1}]},{name:"保養品",icon:"✨",items:[{id:"sk1",name:"化妝水",checked:!1},{id:"sk2",name:"蘆薈膠",checked:!1},{id:"sk3",name:"乳液",checked:!1}]}]},O=d(()=>{let e=o.filter(t=>t.isMust);return m.value&&(e=e.filter(t=>t.name.includes(m.value))),e}),B=d(()=>{const e=[],t=o.filter(s=>!s.isMust);return b.categories.forEach(s=>{let r=t.filter(l=>l.category===s.name);m.value&&(r=r.filter(l=>l.name.includes(m.value))),r.length>0&&e.push({name:s.name,icon:s.icon,items:r})}),e}),R=d(()=>{let e=B.value;return y.value!=="All"&&(e=e.filter(t=>t.name===y.value)),e}),F=e=>{g.value[e]=!g.value[e]},u=d(()=>o.length),C=d(()=>o.filter(e=>e.checked).length),G=d(()=>u.value===0?0:Math.round(C.value/u.value*100)),N=(e,t)=>{if(h(t.clientX,t.clientY,"#10b981"),!A[e].implemented){alert("此國家清單即將推出！目前請選擇韓國 🇰🇷");return}i.value=e,c.value=2,v()},J=(e,t)=>{h(t.clientX,t.clientY,"#10b981"),n.value=e,c.value=3,Y(),v()},w=()=>`travel_packing_${i.value}_${n.value}`,_=()=>`travel_packing_custom_${i.value}_${n.value}`,W=()=>{const e=o.filter(t=>t.isCustom);localStorage.setItem(_(),JSON.stringify(e))},V=()=>{if(!x.value.trim())return;const e=p.value==="🚨 絕對不能忘記",t={id:`custom_${Date.now()}`,name:x.value.trim(),checked:!1,isMust:e,category:p.value,isCustom:!0};o.push(t),W(),x.value="",E.value=!1,e?S.value=!0:g.value[p.value]=!0},Q=e=>{const t=o.findIndex(s=>s.id===e);t>-1&&(o.splice(t,1),W(),v())},Y=()=>{const e=[];b.must.forEach(r=>{e.push({...r,isMust:!0,category:"🚨 絕對不能忘記"})}),b.categories.forEach(r=>{r.items.forEach(l=>{"gender"in l&&l.gender!==n.value||"country"in l&&l.country!==i.value||e.push({...l,isMust:!1,category:r.name})})});const t=localStorage.getItem(_());if(t)try{JSON.parse(t).forEach(l=>{e.push(l)})}catch(r){console.error("Failed to parse custom items",r)}const s=localStorage.getItem(w());if(s)try{const r=JSON.parse(s);e.forEach(l=>{r.includes(l.id)&&(l.checked=!0)})}catch(r){console.error("Failed to parse saved items",r)}o.splice(0,o.length,...e)},q=(e,t)=>{if(e.checked=!e.checked,C.value===u.value&&u.value>0)for(let s=0;s<5;s++)setTimeout(()=>{h(window.innerWidth/2+(Math.random()-.5)*200,window.innerHeight/2+(Math.random()-.5)*200,"#10b981")},s*100);v()},K=()=>{o.forEach(e=>e.checked=!0),v()},X=()=>{f.value=!0},U=()=>{localStorage.removeItem(w()),o.forEach(e=>e.checked=!1),f.value=!1,h(window.innerWidth/2,window.innerHeight/2,"#ef4444")},Z=()=>{f.value=!1},ee=()=>{for(let e=0;e<8;e++)setTimeout(()=>{h(window.innerWidth/2+(Math.random()-.5)*400,window.innerHeight/2+(Math.random()-.5)*400,e%2===0?"#10b981":"#6366f1")},e*150)},v=()=>{if(i.value&&n.value&&c.value===3){const e=o.filter(t=>t.checked).map(t=>t.id);e.length>0?localStorage.setItem(w(),JSON.stringify(e)):localStorage.removeItem(w())}},te=()=>{c.value=1,i.value="",n.value=""},ae=a(!1),I=a(localStorage.getItem("weatherCity")||"Taipei"),L=a(null),M=a(!1),j=[{id:"Tokyo",name:"東京",lat:35.6895,lon:139.6917},{id:"Seoul",name:"首爾",lat:37.5665,lon:126.978},{id:"Bangkok",name:"曼谷",lat:13.7563,lon:100.5018},{id:"Paris",name:"巴黎",lat:48.8566,lon:2.3522},{id:"London",name:"倫敦",lat:51.5074,lon:-.1278},{id:"New York",name:"紐約",lat:40.7128,lon:-74.006},{id:"Taipei",name:"台北",lat:25.033,lon:121.5654}],P=async()=>{const e=j.find(t=>t.id===I.value)||j[6];M.value=!0;try{const s=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lon}&current_weather=true`)).json();L.value=s.current_weather}catch(t){console.error("天氣載入失敗:",t)}finally{M.value=!1}},se=e=>{const t=e.target;I.value=t.value,localStorage.setItem("weatherCity",t.value),P()},re=e=>e===0?"☀️":e===1||e===2||e===3?"⛅":e>=45&&e<=48?"🌫️":e>=51&&e<=67?"🌧️":e>=71&&e<=77?"❄️":e>=80&&e<=82?"🌦️":e>=85&&e<=86?"🌨️":e>=95?"⛈️":"☁️",le=async()=>{try{const e=await fetch(`/Per_OutTaiwan/announcements.json?t=${Date.now()}`);if(!e.ok)throw new Error("Fetch failed");const t=await e.json();t&&(k.value={countries:t.countries||{},global:t.global||{show:!1,message:""}})}catch(e){console.error("無法載入公告資訊:",e)}};return de(()=>{te(),le(),P()}),{currentStep:c,selectedCountry:i,selectedGender:n,searchQuery:m,selectedCategoryFilter:y,expandedCategories:g,categories:B,countries:A,mustItems:O,mustItemsExpanded:S,isCelebrationExpanded:H,filteredCategories:R,totalCount:u,packedCount:C,progressPercent:G,announcementConfig:k,currentCountryAnnouncement:D,isHeaderExpanded:T,peekingActive:$,showResetModal:f,showAddItemModal:E,newItemName:x,newItemCategory:p,defaultItems:b,addCustomItem:V,removeCustomItem:Q,isWeatherMenuOpen:ae,selectedWeatherCity:I,weatherData:L,isWeatherLoading:M,weatherCities:j,selectCountry:N,selectGender:J,toggleCategory:F,toggleItem:q,markAllPacked:K,resetList:X,celebrateMore:ee,confirmReset:U,cancelReset:Z,selectWeatherCity:se,getWeatherIcon:re}},template:`
    <LayoutComponent title="OutTaiwan - 打包清單">
        <!-- Weather Floating Button & Panel -->
        <div class="fixed bottom-8 left-8 z-40 flex flex-col-reverse items-start gap-4">
            <!-- Weather Toggle Button -->
            <button @click="isWeatherMenuOpen = !isWeatherMenuOpen" 
                    class="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border-4 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/40 text-slate-900 dark:text-slate-300 shadow-black/10 dark:shadow-black/40 dark:border-slate-400/40 dark:shadow-[0_0_20px_rgba(148,163,184,0.3)]">
                <!-- Glow effect for dark mode -->
                <div class="absolute inset-0 hidden dark:block bg-slate-400/10 animate-pulse"></div>
                
                <svg v-if="!isWeatherMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Weather Panel -->
            <transition 
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform -translate-x-8 opacity-0"
                enter-to-class="transform translate-x-0 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform translate-x-0 opacity-100"
                leave-to-class="transform -translate-x-8 opacity-0"
            >
                <div v-if="isWeatherMenuOpen" 
                     class="w-72 glass-card p-6 rounded-3xl border border-white/20 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                    <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <span>🌍</span> 目的地天氣
                    </h3>
                    
                    <div class="mb-4">
                        <select @change="selectWeatherCity" :value="selectedWeatherCity"
                                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-800 dark:text-white font-bold appearance-none cursor-pointer">
                            <option v-for="city in weatherCities" :key="city.id" :value="city.id">
                                {{ city.name }}
                            </option>
                        </select>
                    </div>

                    <div v-if="isWeatherLoading" class="flex justify-center py-6">
                        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
                    </div>
                    
                    <div v-else-if="weatherData" class="bg-white/40 dark:bg-slate-800/40 rounded-2xl p-4 text-center border border-white/20">
                        <div class="text-5xl mb-2">{{ getWeatherIcon(weatherData.weathercode) }}</div>
                        <div class="text-3xl font-black text-slate-800 dark:text-white mb-1">
                            {{ Math.round(weatherData.temperature) }}°C
                        </div>
                        <div class="text-sm text-slate-600 dark:text-slate-400 font-bold">
                            風速: {{ weatherData.windspeed }} km/h
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Step 1: Select Country -->
        <div v-if="currentStep === 1" class="step-container py-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(country, key) in countries" :key="key" 
                     @click="selectCountry(key, $event)"
                     class="selection-card glass-card p-8 rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                    <div class="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">{{ country.flag }}</div>
                    <div class="text-2xl font-bold text-slate-800 dark:text-white text-center">{{ country.name }}</div>
                    <div v-if="!country.implemented" class="mt-2 text-sm text-slate-600 dark:text-slate-500 italic text-center">(即將推出)</div>
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
            <div class="bg-gradient-to-br from-white/95 to-indigo-50/95 dark:from-slate-900/95 dark:to-indigo-950/95 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(99,102,241,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.4)] mb-10 sticky top-4 z-50 border-2 border-indigo-500/20 dark:border-indigo-400/20">
                <!-- Title & Mobile Toggle -->
                <div @click="isHeaderExpanded = !isHeaderExpanded" class="flex items-center justify-between mb-6 cursor-pointer select-none group/header">
                    <h1 class="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 flex items-center">
                        <span class="mr-3 text-slate-900 dark:text-white">{{ countries[selectedCountry].flag }}</span>
                        <span class="truncate">{{ countries[selectedCountry].name }} 清單</span>
                        <span class="ml-3 text-xs font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-200 dark:border-indigo-700/50">
                            {{ selectedGender === 'male' ? '👨' : '👩' }}
                        </span>
                    </h1>
                    
                    <!-- Toggle Button -->
                    <div class="p-3 text-indigo-500 dark:text-indigo-400 group-hover/header:bg-indigo-100 dark:group-hover/header:bg-indigo-900/50 rounded-2xl transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300" :class="{ 'rotate-180': isHeaderExpanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
 
                <!-- Collapsible Content -->
                <div v-show="isHeaderExpanded" class="animate-in fade-in slide-in-from-top-4 duration-300">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div class="flex flex-wrap gap-3 w-full md:w-auto">
                            <button @click="showAddItemModal = true" class="flex-1 md:flex-none px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-500/30">
                                新增物品
                            </button>
                            <button @click="markAllPacked" class="flex-1 md:flex-none px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-600/30">
                                全部完成
                            </button>
                            <button @click="resetList" class="flex-1 md:flex-none px-6 py-3 bg-white/50 dark:bg-slate-800/50 text-indigo-900 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl font-bold text-sm hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95">
                                重置清單
                            </button>
                        </div>
                        
                        <!-- Progress Bar (Desktop) -->
                        <div class="hidden md:block flex-1 max-w-xs ml-8">
                            <div class="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                                <span>打包進度</span>
                                <span :class="progressPercent === 100 ? 'text-emerald-500' : ''">{{ progressPercent }}% ({{ packedCount }}/{{ totalCount }})</span>
                            </div>
                            <div class="w-full bg-indigo-100 dark:bg-indigo-900/50 rounded-full h-3 overflow-hidden shadow-inner">
                                <div class="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 transition-all duration-1000 ease-out" :style="{ width: progressPercent + '%' }"></div>
                            </div>
                        </div>
                    </div>

                    <!-- All Done Celebration Block -->
                    <transition 
                        enter-active-class="transition duration-500 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                    >
                        <div v-if="progressPercent === 100 && totalCount > 0" 
                             class="mb-12 rounded-[3rem] bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden group transition-all duration-500">
                            
                            <!-- Header / Toggle Area -->
                            <div @click="isCelebrationExpanded = !isCelebrationExpanded" 
                                 class="p-8 cursor-pointer flex items-center justify-between select-none">
                                <div class="flex items-center gap-6">
                                    <div class="text-5xl md:text-6xl animate-bounce">🎉</div>
                                    <div>
                                        <h2 class="text-2xl md:text-4xl font-black tracking-tight">太棒了！全部打包完成</h2>
                                        <p v-if="!isCelebrationExpanded" class="text-emerald-950 dark:text-emerald-50 text-sm opacity-80">您的行李已經準備就緒...</p>
                                    </div>
                                </div>
                                <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500"
                                     :class="{ 'rotate-180': !isCelebrationExpanded }">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Collapsible Content -->
                            <transition
                                enter-active-class="transition duration-500 ease-out"
                                enter-from-class="transform -translate-y-4 opacity-0"
                                enter-to-class="transform translate-y-0 opacity-100"
                            >
                                <div v-show="isCelebrationExpanded" class="px-8 pb-8 pt-0">
                                    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                                        <p class="text-emerald-950 dark:text-emerald-50 text-lg md:text-xl opacity-90 flex-1">您的行李已經準備就緒，可以安心出發囉！✈️</p>
                                        <div class="flex gap-4">
                                            <button @click.stop="celebrateMore" class="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-black hover:bg-emerald-50 transition-all active:scale-95 shadow-xl">
                                                再慶祝一次
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </transition>

                            <!-- Background Decoration -->
                            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
                            <div class="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl pointer-events-none"></div>
                        </div>
                    </transition>

                    <!-- Progress Bar (Mobile) -->
                    <div class="md:hidden mb-6">
                        <div class="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                            <span>打包進度</span>
                            <span :class="progressPercent === 100 ? 'text-emerald-500' : ''">{{ progressPercent }}%</span>
                        </div>
                        <div class="w-full bg-indigo-100 dark:bg-indigo-900/50 rounded-full h-3 overflow-hidden shadow-inner">
                            <div class="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 transition-all duration-1000 ease-out" :style="{ width: progressPercent + '%' }"></div>
                        </div>
                    </div>
 
                    <!-- Search & Filter -->
                    <div class="flex flex-col sm:flex-row gap-4">
                        <!-- Dropdown -->
                        <select v-model="selectedCategoryFilter" class="py-4 px-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-indigo-100 dark:border-indigo-800/50 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-800 dark:text-white font-bold appearance-none cursor-pointer">
                            <option value="All">全部類別</option>
                            <option v-for="cat in categories" :key="cat.name" :value="cat.name">{{ cat.icon }} {{ cat.name }}</option>
                        </select>

                        <!-- Search -->
                        <div class="relative flex-1">
                            <input v-model="searchQuery" type="text" placeholder="搜尋物品..." 
                                   class="w-full py-4 pl-12 pr-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-indigo-100 dark:border-indigo-800/50 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-800 dark:text-white font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-4 top-4.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
 
            <!-- 🚨 Absolute Must Forget Section - Redesigned as a Block -->
            <div v-if="mustItems.length > 0" class="glass-card rounded-3xl md:rounded-[2.5rem] shadow-xl border-2 border-red-500/20 mb-12 overflow-hidden transition-all duration-500"
                 :class="{ 'bg-emerald-50/10 dark:bg-emerald-900/5 border-emerald-500/20': mustItems.every(i => i.checked) }">
                
                <!-- Section Header -->
                <div @click="mustItemsExpanded = !mustItemsExpanded" 
                     class="p-5 md:p-8 flex items-center justify-between cursor-pointer group select-none transition-colors"
                     :class="mustItemsExpanded ? 'bg-red-50/30 dark:bg-red-900/10' : ''">
                    <div class="flex items-center gap-3 md:gap-4">
                        <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500">
                            <span class="text-lg md:text-xl">🚨</span>
                        </div>
                        <div class="flex items-center gap-2 md:gap-3">
                            <h2 class="text-lg md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight whitespace-nowrap">絕對不能忘記</h2>
                            <span class="text-xs md:text-sm font-bold text-red-600 dark:text-red-400 bg-red-100/50 dark:bg-red-900/30 px-2 py-0.5 rounded-lg"
                                  :class="{ 'text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/30': mustItems.every(i => i.checked) }">
                                {{ mustItems.filter(i => i.checked).length }} / {{ mustItems.length }}
                            </span>
                        </div>
                    </div>
                    <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center transition-transform duration-500"
                         :class="{ 'rotate-180': mustItemsExpanded }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <transition 
                    enter-active-class="transition duration-500 ease-out"
                    enter-from-class="transform -translate-y-4 opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition duration-300 ease-in"
                    leave-from-class="transform translate-y-0 opacity-100"
                    leave-to-class="transform -translate-y-4 opacity-0"
                >
                    <div v-show="mustItemsExpanded" class="px-6 pb-6 md:px-8 md:pb-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <template v-for="item in mustItems" :key="item.id">
                                <div @click="toggleItem(item, $event)" 
                                     class="group relative p-5 md:p-6 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden border-2"
                                     :class="[
                                        item.checked 
                                        ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60' 
                                        : 'bg-white dark:bg-slate-900 border-red-600/20 dark:border-red-500/30 shadow-md hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10'
                                     ]">
                                    
                                    <div class="relative flex items-center gap-4">
                                        <!-- Custom Checkbox -->
                                        <div class="flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-500"
                                             :class="[
                                                item.checked 
                                                ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/40' 
                                                : 'bg-red-50 dark:bg-red-900/20 border-red-600/10 group-hover:border-red-600'
                                             ]">
                                            <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <div v-else class="w-2.5 h-2.5 rounded-full bg-red-600/30 group-hover:bg-red-600 group-hover:scale-125 transition-all duration-300"></div>
                                        </div>
                                        
                                        <div class="flex-1 min-w-0">
                                            <span class="block font-black text-lg md:text-xl transition-all duration-500 truncate" 
                                                  :class="[
                                                    item.checked 
                                                    ? 'text-slate-400 line-through' 
                                                    : 'text-slate-900 dark:text-white group-hover:translate-x-1'
                                                  ]">
                                                {{ item.name }}
                                            </span>
                                        </div>

                                        <button v-if="item.isCustom" @click.stop="removeCustomItem(item.id)" class="text-slate-300 hover:text-red-600 transition-all p-2 -mr-2 hover:scale-125">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </transition>
            </div>
 
            <!-- Categories -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                <div v-for="category in filteredCategories" :key="category.name" 
                     class="glass-card rounded-[2.5rem] shadow-xl border overflow-hidden transition-all duration-500"
                     :class="category.items.length > 0 && category.items.every(i => i.checked) ? 'border-emerald-400/50 dark:border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-900/10' : 'border-white/20 dark:border-white/5'">
                    
                    <div @click="toggleCategory(category.name)" 
                         class="p-6 md:p-8 flex items-center justify-between cursor-pointer group select-none transition-colors"
                         :class="expandedCategories[category.name] ? 'bg-slate-50/50 dark:bg-slate-800/20' : ''">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                {{ category.icon }}
                            </div>
                            <div>
                                <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white m-0">{{ category.name }}</h3>
                                <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">
                                    {{ category.items.filter(i => i.checked).length }} / {{ category.items.length }} ITEMS
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div v-if="category.items.length > 0 && category.items.every(i => i.checked)" 
                                 class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-in zoom-in duration-500">
                                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-500"
                                 :class="{ 'rotate-180': expandedCategories[category.name] }">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <transition 
                        enter-active-class="transition duration-500 ease-out"
                        enter-from-class="transform -translate-y-4 opacity-0"
                        enter-to-class="transform translate-y-0 opacity-100"
                        leave-active-class="transition duration-300 ease-in"
                        leave-from-class="transform translate-y-0 opacity-100"
                        leave-to-class="transform -translate-y-4 opacity-0"
                    >
                        <div v-show="expandedCategories[category.name]" class="px-6 pb-6 md:px-8 md:pb-8 space-y-3">
                            <div v-for="item in category.items" :key="item.id" 
                                 @click="toggleItem(item, $event)"
                                 class="flex items-center p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group border border-transparent"
                                 :class="{ 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-900/10 dark:border-white/5': item.checked }">
                                <div class="w-7 h-7 rounded-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all group-hover:border-slate-900 dark:group-hover:border-slate-400" 
                                     :class="{ 'bg-slate-900 border-slate-900 dark:bg-slate-100 dark:border-slate-100': item.checked }">
                                    <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white dark:text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <span class="ml-4 text-slate-900 dark:text-slate-200 font-bold text-lg transition-all" 
                                      :class="{ 'line-through opacity-60 translate-x-1 text-slate-500': item.checked }">
                                    {{ item.name }}
                                </span>
                                
                                <button v-if="item.isCustom" @click.stop="removeCustomItem(item.id)" class="ml-auto text-slate-600 dark:text-slate-300 hover:text-red-500 transition-all p-2 -mr-2 hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        </div>
                    </transition>
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

        <!-- Add Item Modal -->
        <div v-if="showAddItemModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showAddItemModal = false"></div>
            <div class="glass-card p-8 rounded-3xl shadow-2xl max-w-sm w-full relative z-10 animate-scale-in">
                <div class="text-center mb-6">
                    <div class="text-5xl mb-4">✨</div>
                    <h3 class="text-2xl font-bold text-slate-800 dark:text-white">新增自訂物品</h3>
                </div>
                <div class="space-y-4 mb-8 text-left">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">物品名稱</label>
                        <input v-model="newItemName" @keyup.enter="addCustomItem" type="text" placeholder="例如：護照套..." class="w-full py-3 px-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900 dark:text-white font-bold">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">選擇分類</label>
                        <select v-model="newItemCategory" class="w-full py-3 px-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900 dark:text-white font-bold appearance-none cursor-pointer">
                            <option value="🚨 絕對不能忘記">🚨 絕對不能忘記 (置頂)</option>
                            <option v-for="cat in defaultItems.categories" :key="cat.name" :value="cat.name">{{ cat.icon }} {{ cat.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="flex gap-4">
                    <button @click="showAddItemModal = false" class="flex-1 py-3 bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95">
                        取消
                    </button>
                    <button @click="addCustomItem" class="flex-1 py-3 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                        確認新增
                    </button>
                </div>
            </div>
        </div>
    </LayoutComponent>
  `});oe(me).mount("#app");
