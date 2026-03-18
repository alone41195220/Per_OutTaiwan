import{c as _,d as D,L as Q,o as q,r as l,a as d,b as v,e as J}from"./index-DppPVCsV.js";const N=D({name:"TakeList",components:{LayoutComponent:Q},setup(){const o=l(1),r=l(""),i=l(""),k=l(""),g=l("All"),p=l({}),C=l(!1),S=l(!1),m=l(!1),n=J([]),h=l({countries:{},global:{show:!1,message:""}}),M=d(()=>!r.value||!h.value.countries?null:h.value.countries[r.value]||null),w={korea:{name:"韓國",flag:"🇰🇷",implemented:!0},japan:{name:"日本",flag:"🇯🇵",implemented:!1},thailand:{name:"泰國",flag:"🇹🇭",implemented:!1},usa:{name:"美國",flag:"🇺🇸",implemented:!1},europe:{name:"歐洲",flag:"🇪🇺",implemented:!1}},x={must:[{id:"m1",name:"護照",checked:!1},{id:"m2",name:"手機",checked:!1},{id:"m3",name:"錢包",checked:!1},{id:"m4",name:"信用卡",checked:!1},{id:"m5",name:"網路卡/ESIM",checked:!1},{id:"m6",name:"錢(台幣/外幣)",checked:!1}],categories:[{name:"其他重要物品",icon:"💼",items:[{id:"i1",name:"登機證(可以申請記得先申請)",checked:!1},{id:"i2",name:"證件(身分證 健保卡)",checked:!1},{id:"i3",name:"行動電源",checked:!1},{id:"i4",name:"雨傘",checked:!1},{id:"i5",name:"萬國轉接頭",checked:!1},{id:"i6",name:"充電頭2顆",checked:!1},{id:"i7",name:"充電線2條(記得拿一條跟行動電源放一起)",checked:!1}]},{name:"包包",icon:"🎒",items:[{id:"b1",name:"後背包",checked:!1},{id:"b2",name:"側背包",checked:!1},{id:"b3",name:"收納腰包",checked:!1},{id:"b4",name:"行李替大~包 (掛行李箱上那個)",checked:!1},{id:"b5",name:"壓縮袋",checked:!1}]},{name:"衣物",icon:"👕",items:[{id:"c1",name:"衣服(記得帶睡衣) [幾夜]",checked:!1},{id:"c2",name:"褲子(記得帶睡褲) [幾夜]",checked:!1},{id:"c3",name:"內褲 [幾天]",checked:!1},{id:"c4",name:"內衣 [幾天]",checked:!1},{id:"c5",name:"襪子 [幾天]",checked:!1},{id:"c6",name:"拖鞋/涼鞋/布鞋",checked:!1},{id:"c7",name:"外套",checked:!1},{id:"c8",name:"帽子",checked:!1}]},{name:"盥洗用品",icon:"🧴",items:[{id:"t1",name:"牙刷牙膏",checked:!1},{id:"t2",name:"洗面乳",checked:!1},{id:"t3",name:"護髮乳",checked:!1},{id:"t4",name:"洗臉巾",checked:!1},{id:"t5",name:"隱形眼鏡+清洗液",checked:!1},{id:"t6",name:"髒衣袋",checked:!1},{id:"t7",name:"壓縮毛巾",checked:!1},{id:"t8",name:"牙籤",checked:!1},{id:"t9",name:"頸枕",checked:!1},{id:"t10",name:"眼罩",checked:!1},{id:"t11",name:"耳塞",checked:!1}]},{name:"文具用品/3C/備品",icon:"📱",items:[{id:"s1",name:"小剪刀(記得丟行李箱)",checked:!1},{id:"s2",name:"膠帶",checked:!1},{id:"s3",name:"筆",checked:!1},{id:"s4",name:"耳機",checked:!1},{id:"s5",name:"自拍棒",checked:!1},{id:"s6",name:"絕緣膠帶",checked:!1},{id:"s7",name:"飲料提袋",checked:!1},{id:"s8",name:"環保袋",checked:!1},{id:"s9",name:"衛生紙",checked:!1},{id:"s10",name:"濕紙巾",checked:!1},{id:"s11",name:"垃圾袋",checked:!1}]},{name:"藥品",icon:"💊",items:[{id:"p1",name:"小護士",checked:!1},{id:"p2",name:"防蚊液",checked:!1},{id:"p3",name:"木瓜霜",checked:!1},{id:"p4",name:"生理食鹽水",checked:!1},{id:"p5",name:"眼藥水",checked:!1},{id:"p6",name:"止痛藥",checked:!1},{id:"p7",name:"ok蹦",checked:!1},{id:"p8",name:"棉花棒",checked:!1}]},{name:"化妝品",icon:"💄",items:[{id:"mk1",name:"防曬",checked:!1},{id:"mk2",name:"粉底液+刀",checked:!1},{id:"mk3",name:"粉餅+海綿",checked:!1},{id:"mk4",name:"定妝液",checked:!1},{id:"mk5",name:"定妝粉",checked:!1},{id:"mk6",name:"腮紅",checked:!1},{id:"mk7",name:"眼影+刷具",checked:!1},{id:"mk8",name:"眉粉",checked:!1},{id:"mk9",name:"眼線筆",checked:!1},{id:"mk10",name:"睫毛膏+夾",checked:!1},{id:"mk11",name:"口紅",checked:!1},{id:"mk12",name:"卸妝水+巾",checked:!1},{id:"mk13",name:"梳子",checked:!1},{id:"mk14",name:"髮油",checked:!1},{id:"mk15",name:"香水",checked:!1},{id:"mk16",name:"髮圈",checked:!1},{id:"mk17",name:"鏡子",checked:!1}]},{name:"保養品",icon:"✨",items:[{id:"sk1",name:"化妝水",checked:!1},{id:"sk2",name:"蘆薈膠",checked:!1},{id:"sk3",name:"乳液",checked:!1}]}]},j=d(()=>n.filter(e=>e.isMust)),y=d(()=>{const e=[],t=n.filter(a=>!a.isMust);return x.categories.forEach(a=>{const s=t.filter(O=>O.category===a.name);s.length>0&&e.push({name:a.name,icon:a.icon,items:s})}),e}),I=d(()=>{let e=y.value;return g.value!=="All"&&(e=e.filter(t=>t.name===g.value)),k.value&&(e=e.map(t=>({...t,items:t.items.filter(a=>a.name.includes(k.value))})).filter(t=>t.items.length>0)),e}),A=e=>{p.value[e]=!p.value[e]},c=d(()=>n.length),b=d(()=>n.filter(e=>e.checked).length),E=d(()=>c.value===0?0:Math.round(b.value/c.value*100)),L=(e,t)=>{if(v(t.clientX,t.clientY,"#10b981"),!w[e].implemented){alert("此國家清單即將推出！目前請選擇韓國 🇰🇷");return}r.value=e,o.value=2,f()},P=(e,t)=>{v(t.clientX,t.clientY,"#10b981"),i.value=e,o.value=3,z(),f()},u=()=>`travel_packing_${r.value}_${i.value}`,z=()=>{const e=[];x.must.forEach(a=>{e.push({...a,isMust:!0,category:"🚨 絕對不能忘記"})}),x.categories.forEach(a=>{a.items.forEach(s=>{"gender"in s&&s.gender!==i.value||"country"in s&&s.country!==r.value||e.push({...s,isMust:!1,category:a.name})})});const t=localStorage.getItem(u());if(t)try{const a=JSON.parse(t);e.forEach(s=>{a.includes(s.id)&&(s.checked=!0)})}catch(a){console.error("Failed to parse saved items",a)}n.splice(0,n.length,...e)},B=(e,t)=>{if(e.checked=!e.checked,b.value===c.value&&c.value>0)for(let a=0;a<5;a++)setTimeout(()=>{v(window.innerWidth/2+(Math.random()-.5)*200,window.innerHeight/2+(Math.random()-.5)*200,"#10b981")},a*100);f()},T=()=>{n.forEach(e=>e.checked=!0),f()},$=()=>{m.value=!0},H=()=>{localStorage.removeItem(u()),n.forEach(e=>e.checked=!1),m.value=!1,v(window.innerWidth/2,window.innerHeight/2,"#ef4444")},R=()=>{m.value=!1},f=()=>{if(r.value&&i.value&&o.value===3){const e=n.filter(t=>t.checked).map(t=>t.id);e.length>0?localStorage.setItem(u(),JSON.stringify(e)):localStorage.removeItem(u())}},F=()=>{o.value=1,r.value="",i.value=""},G=async()=>{try{const e=await fetch(`/Per_OutTaiwan/announcements.json?t=${Date.now()}`);if(!e.ok)throw new Error("Fetch failed");const t=await e.json();t&&(h.value={countries:t.countries||{},global:t.global||{show:!1,message:""}})}catch(e){console.error("無法載入公告資訊:",e)}};return q(()=>{F(),G()}),{currentStep:o,selectedCountry:r,selectedGender:i,searchQuery:k,selectedCategoryFilter:g,expandedCategories:p,categories:y,countries:w,mustItems:j,filteredCategories:I,totalCount:c,packedCount:b,progressPercent:E,announcementConfig:h,currentCountryAnnouncement:M,isHeaderExpanded:C,peekingActive:S,showResetModal:m,selectCountry:L,selectGender:P,toggleCategory:A,toggleItem:B,markAllPacked:T,resetList:$,confirmReset:H,cancelReset:R}},template:`
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
                            {{ selectedGender === 'male' ? '👨' : '👩' }}
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
 
                    <!-- Search & Filter -->
                    <div class="flex flex-col sm:flex-row gap-4">
                        <!-- Dropdown -->
                        <select v-model="selectedCategoryFilter" class="py-4 px-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none transition-all dark:text-white font-bold appearance-none cursor-pointer">
                            <option value="All">全部類別</option>
                            <option v-for="cat in categories" :key="cat.name" :value="cat.name">{{ cat.icon }} {{ cat.name }}</option>
                        </select>

                        <!-- Search -->
                        <div class="relative flex-1">
                            <input v-model="searchQuery" type="text" placeholder="搜尋物品..." 
                                   class="w-full py-4 pl-12 pr-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-4 top-4.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
 
            <!-- 🚨 Absolute Must Forget Section -->
            <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] p-8 shadow-2xl mb-12 text-white overflow-hidden relative group">
                <div class="absolute -right-12 -top-12 text-white/10 text-[12rem] font-black rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-700">MUST</div>
                <h2 class="text-3xl font-black mb-8 flex items-center relative z-10">
                    <span class="mr-3">🚨</span> 絕對不能忘記
                    <div v-if="mustItems.length > 0 && mustItems.every(i => i.checked)" class="ml-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm animate-in zoom-in duration-300" title="已完成">
                        <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                <div v-for="category in filteredCategories" :key="category.name" 
                     class="glass-card rounded-[2rem] shadow-xl border overflow-hidden transition-all duration-300"
                     :class="category.items.length > 0 && category.items.every(i => i.checked) ? 'border-emerald-400/50 dark:border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-900/10' : 'border-white/20'">
                    <h3 @click="toggleCategory(category.name)" class="text-xl md:text-2xl font-black p-5 md:p-6 text-slate-900 dark:text-white flex items-center justify-between cursor-pointer group hover:bg-white/10 dark:hover:bg-slate-800/50 transition-colors m-0">
                        <div class="flex items-center">
                            <span class="mr-3 p-2 bg-slate-100 dark:bg-slate-800 rounded-2xl">{{ category.icon }}</span> 
                            {{ category.name }}
                            <div v-if="category.items.length > 0 && category.items.every(i => i.checked)" class="ml-3 w-7 h-7 md:w-8 md:h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center animate-in zoom-in duration-300" title="已完成">
                                <svg class="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 transition-transform duration-300" :class="{ 'rotate-180': expandedCategories[category.name] }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </h3>
                    <div v-show="expandedCategories[category.name]" class="px-5 pb-5 md:px-6 md:pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
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
  `});_(N).mount("#app");
