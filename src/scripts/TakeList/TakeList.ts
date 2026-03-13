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
  `
});

createApp(TakeList).mount('#app');
