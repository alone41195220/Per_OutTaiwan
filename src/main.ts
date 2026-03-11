import './index.css';

// @ts-ignore
const Vue = window.Vue;
// @ts-ignore
const THREE = window.THREE;
// @ts-ignore
const gsap = window.gsap;

if (!Vue || !THREE || !gsap) {
    console.error('Missing dependencies: Vue, THREE, or gsap is not loaded.');
} else {
    const { createApp, ref, reactive, computed, onMounted, watch } = Vue;

    createApp({
        setup() {
        const currentStep = ref(1);
        const selectedCountry = ref('');
        const selectedGender = ref('');
        const searchQuery = ref('');
        const isDarkMode = ref(false);
        const isMenuOpen = ref(false);
        const isHeaderExpanded = ref(false);
        const packingList = reactive([]);
        const announcementConfig = reactive({
            countries: {}
        });

        // Animal Logic
        const dogActive = ref(false);
        const birdActive = ref(false);
        const peekingActive = ref(false);
        
        const dogStyle = reactive({
            left: '-100px',
            transform: 'scaleX(1)'
        });

        const birdStyle = reactive({
            left: '-100px',
            transform: 'scaleX(1)'
        });

        const triggerAnimal = (activeState, styleObject, offset, baseDuration) => {
            if (activeState.value) return;

            const fromLeft = Math.random() > 0.5;
            const screenWidth = window.innerWidth;
            
            // 初始位置
            styleObject.left = fromLeft ? `-${offset}px` : `${screenWidth + offset}px`;
            
            // 轉向控制：由左向右時水平翻轉
            styleObject.transform = fromLeft ? 'scaleX(-1)' : 'scaleX(1)';
            
            activeState.value = true;

            gsap.to(styleObject, {
                left: fromLeft ? `${screenWidth + offset}px` : `-${offset}px`,
                // 增加隨機擾動，避免每次速度都一模一樣
                duration: baseDuration + Math.random() * 2, 
                ease: "power1.inOut", // 使用緩動函數讓啟動與停止更自然
                onComplete: () => {
                    activeState.value = false;
                }
            });
        };

        // 使用方式：
        const triggerDog = () => triggerAnimal(dogActive, dogStyle, 150, 7.5);  // 6 * 1.25 = 7.5
        const triggerBird = () => triggerAnimal(birdActive, birdStyle, 100, 15); // 12 * 1.25 = 15

        const triggerPeek = () => {
            peekingActive.value = true;
            setTimeout(() => {
                peekingActive.value = false;
            }, 2500);
        };

        // Randomly trigger animals - every 2 seconds
        setInterval(() => {
            if (Math.random() > 0.4) triggerDog();
            if (Math.random() > 0.5) triggerBird();
            if (Math.random() > 0.7) triggerPeek();
        }, 2000);

        // Particle Effect
        const createParticles = (x, y, color) => {
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = (Math.random() * 8 + 4) + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = color;
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                document.body.appendChild(particle);

                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 100 + 50;
                
                gsap.to(particle, {
                    x: Math.cos(angle) * velocity,
                    y: Math.sin(angle) * velocity,
                    opacity: 0,
                    scale: 0,
                    duration: 0.6 + Math.random() * 0.4,
                    ease: "power2.out",
                    onComplete: () => particle.remove()
                });
            }
        };

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
            if (event) {
                const rect = event.currentTarget.getBoundingClientRect();
                createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, '#3b82f6');
            }
            currentStep.value = 2;
            saveState();
        };

        const selectGender = (gender, event) => {
            selectedGender.value = gender;
            if (event) {
                const rect = event.currentTarget.getBoundingClientRect();
                createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, '#f59e0b');
            }
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
            
            // Flashy Interaction
            if (event) {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                
                if (item.checked) {
                    createParticles(x, y, '#10b981');
                    gsap.fromTo(event.currentTarget, 
                        { scale: 0.9, rotation: -2 },
                        { scale: 1, rotation: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" }
                    );
                } else {
                    createParticles(x, y, '#94a3b8');
                }
            }
            
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

        const goHome = () => {
            currentStep.value = 1;
            selectedCountry.value = '';
            selectedGender.value = '';
            isMenuOpen.value = false;
            saveState();
        };

        const showResetConfirm = ref(false);

        const resetList = () => {
            showResetConfirm.value = true;
        };

        const confirmReset = () => {
            localStorage.removeItem('travel_packing_state');
            packingList.forEach(item => item.checked = false);
            showResetConfirm.value = false;
        };

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            document.body.classList.toggle('dark', isDarkMode.value);
            saveState();
        };

        const saveState = () => {
            const state = {
                country: selectedCountry.value,
                gender: selectedGender.value,
                step: currentStep.value,
                items: packingList.map(item => ({ id: item.id, checked: item.checked })),
                dark: isDarkMode.value
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
                    isDarkMode.value = state.dark || false;
                    
                    if (isDarkMode.value) {
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
            console.log('App mounted, currentStep:', currentStep.value);
            loadState();
            fetchAnnouncements();
            initThree();
        });

        // Three.js Background
        const initThree = () => {
            const canvas = document.getElementById('three-canvas');
            if (!canvas) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // --- 1. 響應式配置 (調整手機版數量以確保效能) ---
            const isMobile = window.innerWidth < 768;
            const MAX_BUBBLES = isMobile ? 80 : 180; 
            const spreadX = isMobile ? 40 : 80; 

            // --- 2. 燈光系統 ---
            const ambientLight = new THREE.AmbientLight(0xffffff, isDarkMode.value ? 0.5 : 1.0);
            scene.add(ambientLight);
            const pointLight = new THREE.PointLight(0xffffff, isDarkMode.value ? 1.0 : 2.0);
            pointLight.position.set(20, 30, 20);
            scene.add(pointLight);

            // --- 3. 背景 A: 星空 (優化深度感與閃爍感) ---
            const starCount = 6000;
            const starGeometry = new THREE.BufferGeometry();
            const starPositions = new Float32Array(starCount * 3);
            for (let i = 0; i < starCount; i++) {
                starPositions[i * 3] = (Math.random() - 0.5) * 300;
                starPositions[i * 3 + 1] = (Math.random() - 0.5) * 300;
                starPositions[i * 3 + 2] = -50 - Math.random() * 200;
            }
            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starMaterial = new THREE.PointsMaterial({
                size: 0.18,
                color: 0xffffff,
                transparent: true,
                opacity: isDarkMode.value ? 0.9 : 0,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                sizeAttenuation: true // 讓遠近星星有大小落差，更具立體感
            });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            // --- 4. 背景 B: 幾何網格 (淺色模式加深線條) ---
            const geoNetGeometry = new THREE.IcosahedronGeometry(80, 2);
            const geoNetMaterial = new THREE.MeshBasicMaterial({
                color: isDarkMode.value ? 0x044e3a : 0x475569, // 淺色改用質感的石板灰藍
                wireframe: true,
                transparent: true,
                opacity: isDarkMode.value ? 0.25 : 0.15, // 提高淺色不透明度讓線條清晰
            });
            const geoNet = new THREE.Mesh(geoNetGeometry, geoNetMaterial);
            scene.add(geoNet);

            // --- 5. 核心：泡泡材質 (保持紮實質感) ---
            const bubbleGeometry = new THREE.SphereGeometry(1, 24, 24);
            const bubbleMaterial = new THREE.MeshPhysicalMaterial({
                color: isDarkMode.value ? 0x044e3a : 0x0284c7,
                transmission: 0.3,   
                opacity: isDarkMode.value ? 0.95 : 0.85, 
                transparent: true,
                roughness: 0.05,
                thickness: 2.5,      
                ior: 1.5,
                sheen: 1.0,          
                sheenColor: 0xffffff,
                specularIntensity: 1.2,
                depthWrite: false,
            });

            const bubbles = [];
            const resetBubble = (mesh) => {
                mesh.position.set(
                    (Math.random() - 0.5) * spreadX,
                    -50 - Math.random() * 50,
                    (Math.random() - 0.5) * 30
                );
                const s = Math.random() * (isMobile ? 1.0 : 1.8) + 0.5;
                mesh.scale.set(s, s, s);
                mesh.userData = { speed: Math.random() * 0.06 + 0.02, wobble: Math.random() * Math.PI * 2, popping: false };
                mesh.visible = true;
            };

            for (let i = 0; i < MAX_BUBBLES; i++) {
                const mesh = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
                resetBubble(mesh);
                scene.add(mesh);
                bubbles.push(mesh);
            }

            // --- 6. 破裂特效 ---
            const popParticles = [];
            const pop = (pos, color) => {
                const pCount = 15;
                const pGeom = new THREE.BufferGeometry();
                const pPos = new Float32Array(pCount * 3);
                const pVelo = [];
                for (let i = 0; i < pCount; i++) {
                    pPos[i*3]=pos.x; pPos[i*3+1]=pos.y; pPos[i*3+2]=pos.z;
                    pVelo.push({ x:(Math.random()-0.5)*0.5, y:(Math.random()-0.5)*0.5, z:(Math.random()-0.5)*0.5 });
                }
                pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
                const pMat = new THREE.PointsMaterial({ size: 0.12, color: color, transparent: true, opacity: 1.0 });
                const points = new THREE.Points(pGeom, pMat);
                scene.add(points);
                popParticles.push({ points, pVelo, life: 1.0 });
            };

            // --- 7. 動畫與平滑轉場 ---
            camera.position.z = 50;

            const animate = () => {
                requestAnimationFrame(animate);
                const isDark = isDarkMode.value;

                // 星空與網格的顏色、透明度平滑過渡
                starMaterial.opacity += ((isDark ? 0.9 : 0) - starMaterial.opacity) * 0.05;
                stars.rotation.y += 0.0001;

                geoNetMaterial.opacity += ((isDark ? 0.25 : 0.15) - geoNetMaterial.opacity) * 0.05;
                geoNetMaterial.color.lerp(new THREE.Color(isDark ? 0x044e3a : 0x475569), 0.05);
                geoNet.rotation.y += 0.0006;
                geoNet.rotation.z += 0.0003;

                // 泡泡顏色與環境光過渡
                bubbleMaterial.color.lerp(new THREE.Color(isDark ? 0x044e3a : 0x0284c7), 0.05);
                ambientLight.intensity += ((isDark ? 0.5 : 1.0) - ambientLight.intensity) * 0.05;

                // 泡泡運動邏輯
                bubbles.forEach(mesh => {
                    if (mesh.userData.popping) return;
                    mesh.position.y += mesh.userData.speed;
                    mesh.position.x += Math.sin(Date.now() * 0.001 + mesh.userData.wobble) * 0.02;
                    
                    if (mesh.position.y > 40) {
                        mesh.userData.popping = true;
                        pop(mesh.position, bubbleMaterial.color);
                        mesh.visible = false;
                        setTimeout(() => {
                            mesh.userData.popping = false;
                            resetBubble(mesh);
                        }, 500 + Math.random() * 2000);
                    }
                });

                // 粒子消失邏輯
                for (let i = popParticles.length - 1; i >= 0; i--) {
                    const p = popParticles[i];
                    p.life -= 0.03;
                    const posArr = p.points.geometry.attributes.position;
                    for (let j = 0; j < p.pVelo.length; j++) {
                        posArr.array[j*3] += p.pVelo[j].x;
                        posArr.array[j*3+1] += p.pVelo[j].y;
                        posArr.array[j*3+2] += p.pVelo[j].z;
                    }
                    posArr.needsUpdate = true;
                    p.points.material.opacity = p.life;
                    if (p.life <= 0) {
                        scene.remove(p.points);
                        p.points.geometry.dispose();
                        p.points.material.dispose();
                        popParticles.splice(i, 1);
                    }
                }

                renderer.render(scene, camera);
            };

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            animate();
        };

        return {
            isDarkMode,
            isMenuOpen,
            isHeaderExpanded,
            toggleDarkMode,
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
            goHome,
            resetList,
            showResetConfirm,
            confirmReset,
            dogActive,
            birdActive,
            peekingActive,
            dogStyle,
            birdStyle
        };
    }
}).mount('#app');
}
