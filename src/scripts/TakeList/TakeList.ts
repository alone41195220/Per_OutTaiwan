import { createApp, defineComponent, ref, reactive, computed, onMounted, watch } from 'vue';
import { LayoutComponent, createParticles } from '../../Layout/Layout';
import '../../../css/index.css';

const TakeList = defineComponent({
  name: 'TakeList',
  components: {
    LayoutComponent
  },
  setup() {
    const currentStep = ref(1);
    const selectedCountry = ref('');
    const selectedGender = ref('');
    const searchQuery = ref('');
    const isHeaderExpanded = ref(false);
    const peekingActive = ref(false);
    const showResetModal = ref(false);
    const packingList = reactive([]);
    const announcementConfig = ref({
      countries: {} as any,
      global: { show: false, message: '' }
    });

    const currentCountryAnnouncement = computed(() => {
      if (!selectedCountry.value || !announcementConfig.value.countries) return null;
      return announcementConfig.value.countries[selectedCountry.value] || null;
    });

    const countries = {
      korea: { name: '韓國', flag: '🇰🇷', implemented: true },
      japan: { name: '日本', flag: '🇯🇵', implemented: false },
      thailand: { name: '泰國', flag: '🇹🇭', implemented: false },
      usa: { name: '美國', flag: '🇺🇸', implemented: false },
      europe: { name: '歐洲', flag: '🇪🇺', implemented: false }
    };

    const defaultItems = {
      must: [
        { id: 'm1', name: '護照', checked: false },
        { id: 'm2', name: '錢包', checked: false },
        { id: 'm3', name: '信用卡', checked: false },
        { id: 'm4', name: '現金', checked: false },
        { id: 'm5', name: '手機', checked: false },
        { id: 'm6', name: '充電線', checked: false },
        { id: 'm7', name: '行動電源', checked: false },
        { id: 'm8', name: '機票 / 電子機票', checked: false },
        { id: 'm9', name: '旅遊保險', checked: false },
        { id: 'm10', name: '住宿資訊', checked: false },
        { id: 'm11', name: 'eSIM / 網路', checked: false },
        { id: 'm12', name: '轉接頭', checked: false }
      ],
      categories: [
        {
          name: '🧴 洗漱用品',
          icon: '🧴',
          items: [
            { id: 't1', name: '牙刷', checked: false },
            { id: 't2', name: '牙膏', checked: false },
            { id: 't3', name: '洗面乳', checked: false },
            { id: 't4', name: '洗髮精', checked: false },
            { id: 't5', name: '沐浴乳', checked: false },
            { id: 't6', name: '毛巾', checked: false },
            { id: 't7', name: '梳子', checked: false },
            { id: 't8', name: '刮鬍刀', checked: false },
            { id: 't9', name: '指甲剪', checked: false },
            { id: 't10', name: '化妝棉', checked: false },
            { id: 't11', name: '卸妝水', checked: false, gender: 'female' },
            { id: 't12', name: '保養品', checked: false, gender: 'female' },
            { id: 't13', name: '防曬', checked: false, gender: 'female' },
            { id: 't14', name: '化妝品', checked: false, gender: 'female' }
          ]
        },
        {
          name: '👕 衣物',
          icon: '👕',
          items: [
            { id: 'c1', name: '內衣', checked: false },
            { id: 'c2', name: '內褲', checked: false },
            { id: 'c3', name: '襪子', checked: false },
            { id: 'c4', name: 'T-shirt', checked: false },
            { id: 'c5', name: '外套', checked: false },
            { id: 'c6', name: '睡衣', checked: false },
            { id: 'c7', name: '拖鞋', checked: false },
            { id: 'c8', name: '保暖衣物', checked: false, country: 'korea' },
            { id: 'c9', name: '圍巾', checked: false, country: 'korea' },
            { id: 'c10', name: '手套', checked: false, country: 'korea' },
            { id: 'c11', name: '絲襪', checked: false, gender: 'female' },
            { id: 'c12', name: '裙子', checked: false, gender: 'female' },
            { id: 'c13', name: '化妝包', checked: false, gender: 'female' }
          ]
        },
        {
          name: '📱 電子用品',
          icon: '📱',
          items: [
            { id: 'e1', name: '手機', checked: false },
            { id: 'e2', name: '充電線', checked: false },
            { id: 'e3', name: '行動電源', checked: false },
            { id: 'e4', name: '相機', checked: false },
            { id: 'e5', name: '相機電池', checked: false },
            { id: 'e6', name: '記憶卡', checked: false },
            { id: 'e7', name: '耳機', checked: false },
            { id: 'e8', name: '轉接頭', checked: false }
          ]
        },
        {
          name: '💊 醫藥用品',
          icon: '💊',
          items: [
            { id: 'p1', name: '常備藥', checked: false },
            { id: 'p2', name: '感冒藥', checked: false },
            { id: 'p3', name: '腸胃藥', checked: false },
            { id: 'p4', name: 'OK繃', checked: false },
            { id: 'p5', name: '防蚊液', checked: false },
            { id: 'p6', name: '維他命', checked: false }
          ]
        },
        {
          name: '✈️ 旅行用品',
          icon: '✈️',
          items: [
            { id: 'tr1', name: '行李箱', checked: false },
            { id: 'tr2', name: '行李鎖', checked: false },
            { id: 'tr3', name: '行李秤', checked: false },
            { id: 'tr4', name: '旅行枕', checked: false },
            { id: 'tr5', name: '眼罩', checked: false },
            { id: 'tr6', name: '耳塞', checked: false },
            { id: 'tr7', name: '水壺', checked: false },
            { id: 'tr8', name: '折疊袋', checked: false }
          ]
        }
      ]
    };

    const mustItems = computed(() => {
      return packingList.filter(item => item.isMust);
    });

    const categories = computed(() => {
      const cats = [];
      const otherItems = packingList.filter(item => !item.isMust);
      
      defaultItems.categories.forEach(defCat => {
        const items = otherItems.filter(item => item.category === defCat.name);
        if (items.length > 0) {
          cats.push({
            name: defCat.name,
            icon: defCat.icon,
            items: items
          });
        }
      });
      return cats;
    });

    const filteredCategories = computed(() => {
      if (!searchQuery.value) return categories.value;
      
      return categories.value.map(cat => ({
        ...cat,
        items: cat.items.filter(item => item.name.includes(searchQuery.value))
      })).filter(cat => cat.items.length > 0);
    });

    const totalCount = computed(() => packingList.length);
    const packedCount = computed(() => packingList.filter(item => item.checked).length);
    const progressPercent = computed(() => totalCount.value === 0 ? 0 : Math.round((packedCount.value / totalCount.value) * 100));

    const selectCountry = (key, event) => {
      createParticles(event.clientX, event.clientY, '#10b981');
      if (!countries[key].implemented) {
        alert('此國家清單即將推出！目前請選擇韓國 🇰🇷');
        return;
      }
      selectedCountry.value = key;
      currentStep.value = 2;
      saveState();
    };

    const selectGender = (gender, event) => {
      createParticles(event.clientX, event.clientY, '#10b981');
      selectedGender.value = gender;
      currentStep.value = 3;
      initializeList();
      saveState();
    };

    const initializeList = () => {
      const list = [];
      
      // Add Must items
      defaultItems.must.forEach(item => {
        list.push({ ...item, isMust: true, category: '🚨 絕對不能忘記' });
      });

      // Add Category items
      defaultItems.categories.forEach(cat => {
        cat.items.forEach(item => {
          // Filter by gender
          if (item.gender && item.gender !== selectedGender.value) return;
          // Filter by country
          if (item.country && item.country !== selectedCountry.value) return;
          
          list.push({ ...item, isMust: false, category: cat.name });
        });
      });

      // Merge with saved state if exists
      const saved = localStorage.getItem('travel_packing_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.country === selectedCountry.value && state.gender === selectedGender.value) {
          list.forEach(item => {
            const savedItem = state.items.find(si => si.id === item.id);
            if (savedItem) item.checked = savedItem.checked;
          });
        }
      }

      packingList.splice(0, packingList.length, ...list);
    };

    const toggleItem = (item, event) => {
      item.checked = !item.checked;
      
      if (packedCount.value === totalCount.value && totalCount.value > 0) {
        // Confetti for completion
        for(let i=0; i<5; i++) {
          setTimeout(() => {
            createParticles(window.innerWidth/2 + (Math.random()-0.5)*200, window.innerHeight/2 + (Math.random()-0.5)*200, '#10b981');
          }, i * 100);
        }
      }
      
      saveState();
    };

    const markAllPacked = () => {
      packingList.forEach(item => item.checked = true);
      saveState();
    };

    const resetList = () => {
      showResetModal.value = true;
    };

    const confirmReset = () => {
      localStorage.removeItem('travel_packing_state');
      packingList.forEach(item => item.checked = false);
      showResetModal.value = false;
      createParticles(window.innerWidth/2, window.innerHeight/2, '#ef4444');
    };

    const cancelReset = () => {
      showResetModal.value = false;
    };

    const saveState = () => {
      const state = {
        gender: selectedGender.value,
        step: currentStep.value,
        items: packingList.map(item => ({ id: item.id, checked: item.checked })),
        dark: document.body.classList.contains('dark')
      };
      localStorage.setItem('travel_packing_state', JSON.stringify(state));
    };

    const loadState = () => {
      const saved = localStorage.getItem('travel_packing_state');
      if (saved) {
        try {
          const state = JSON.parse(saved);
          selectedGender.value = state.gender || '';
          currentStep.value = Number(state.step) || 1;
          
          if (state.dark) {
            document.body.classList.add('dark');
          }

          if (currentStep.value === 3 && selectedGender.value) {
            initializeList();
          }

          if (currentStep.value === 3) {
            currentStep.value = 1;
          }
        } catch (e) {
          console.error('Failed to load state:', e);
          currentStep.value = 1;
        }
      }
    };

    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(`/announcements.json?t=${Date.now()}`);
        if (!response.ok) throw new Error('Fetch failed');
        const data = await response.json();
        
        if (data) {
          announcementConfig.value = {
            countries: data.countries || {},
            global: data.global || { show: false, message: '' }
          };
        }
      } catch (error) {
        console.error('無法載入公告資訊:', error);
      }
    };

    onMounted(() => {
      loadState();
      fetchAnnouncements();
    });

    return {
      currentStep,
      selectedCountry,
      selectedGender,
      searchQuery,
      countries,
      mustItems,
      filteredCategories,
      totalCount,
      packedCount,
      progressPercent,
      announcementConfig,
      currentCountryAnnouncement,
      isHeaderExpanded,
      peekingActive,
      showResetModal,
      selectCountry,
      selectGender,
      toggleItem,
      markAllPacked,
      resetList,
      confirmReset,
      cancelReset
    };
  },
  template: `
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
  `
});

createApp(TakeList).mount('#app');
