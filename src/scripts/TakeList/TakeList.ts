import { defineComponent, ref, reactive, computed, onMounted, watch } from 'vue';
import { MainLayout } from '../../Layout/MainLayout';

export default defineComponent({
  name: 'TakeList',
  components: {
    MainLayout
  },
  setup() {
    const currentStep = ref(1);
    const selectedCountry = ref('');
    const selectedGender = ref('');
    const searchQuery = ref('');
    const isHeaderExpanded = ref(false);
    const packingList = reactive([]);
    const announcementConfig = reactive({
      countries: {}
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
      if (!countries[key].implemented) {
        alert('此國家清單即將推出！目前請選擇韓國 🇰🇷');
        return;
      }
      selectedCountry.value = key;
      currentStep.value = 2;
      saveState();
    };

    const selectGender = (gender, event) => {
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
      localStorage.removeItem('travel_packing_state');
      packingList.forEach(item => item.checked = false);
    };

    const saveState = () => {
      const state = {
        country: selectedCountry.value,
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
          selectedCountry.value = state.country || '';
          selectedGender.value = state.gender || '';
          currentStep.value = Number(state.step) || 1;
          
          if (state.dark) {
            document.body.classList.add('dark');
          }

          if (currentStep.value === 3 && selectedCountry.value && selectedGender.value) {
            initializeList();
          } else if (currentStep.value === 3) {
            currentStep.value = 1; // Reset if missing data
          }
        } catch (e) {
          console.error('Failed to load state:', e);
          currentStep.value = 1;
        }
      }
    };

    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('./announcements.json');
        const data = await response.json();
        announcementConfig.countries = data.countries;
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
      selectCountry,
      selectGender,
      toggleItem,
      markAllPacked,
      resetList
    };
  }
});
