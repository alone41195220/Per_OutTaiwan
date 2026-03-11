import './index.css';

// @ts-ignore
const { createApp, ref, reactive, computed, onMounted, watch } = Vue;
// @ts-ignore
const THREE = window.THREE;
// @ts-ignore
const gsap = window.gsap;

createApp({
    setup() {
        const currentStep = ref(1);
        const selectedCountry = ref('');
        const selectedGender = ref('');
        const searchQuery = ref('');
        const isDarkMode = ref(false);
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

        const triggerDog = () => {
            if (dogActive.value) return;
            
            const fromLeft = Math.random() > 0.5;
            dogStyle.left = fromLeft ? '-150px' : (window.innerWidth + 150) + 'px';
            // Flip the scaleX: if fromLeft is true (moving L->R), flip to face right.
            dogStyle.transform = fromLeft ? 'scaleX(-1)' : 'scaleX(1)';
            dogActive.value = true;

            gsap.to(dogStyle, {
                left: fromLeft ? (window.innerWidth + 150) + 'px' : '-150px',
                duration: 2.5 + Math.random() * 2.5, // Speed -20% (Duration +25%)
                ease: "none",
                onComplete: () => {
                    dogActive.value = false;
                }
            });
        };

        const triggerBird = () => {
            if (birdActive.value) return;
            
            const fromLeft = Math.random() > 0.5;
            birdStyle.left = fromLeft ? '-100px' : (window.innerWidth + 100) + 'px';
            // Flip the scaleX: if fromLeft is true (moving L->R), flip to face right.
            birdStyle.transform = fromLeft ? 'scaleX(-1)' : 'scaleX(1)';
            birdActive.value = true;

            gsap.to(birdStyle, {
                left: fromLeft ? (window.innerWidth + 100) + 'px' : '-100px',
                duration: 5 + Math.random() * 3.75, // Speed -20% (Duration +25%)
                ease: "power1.inOut",
                onComplete: () => {
                    birdActive.value = false;
                }
            });
        };

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
                const response = await fetch('/announcements.json');
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
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, isDarkMode.value ? 0.3 : 0.6);
            scene.add(ambientLight);
            const pointLight = new THREE.PointLight(0xffffff, isDarkMode.value ? 0.8 : 1.2);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Sci-fi Starfield
            const starCount = 5000; // Increased
            const starGeometry = new THREE.BufferGeometry();
            const starPositions = new Float32Array(starCount * 3);
            const starSizes = new Float32Array(starCount);
            for (let i = 0; i < starCount; i++) {
                starPositions[i * 3] = (Math.random() - 0.5) * 150;
                starPositions[i * 3 + 1] = (Math.random() - 0.5) * 150;
                starPositions[i * 3 + 2] = (Math.random() - 0.5) * 150;
                starSizes[i] = Math.random();
            }
            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
            
            const starMaterial = new THREE.PointsMaterial({ 
                color: isDarkMode.value ? 0xffffff : 0x475569, 
                size: 0.25, 
                transparent: true, 
                opacity: isDarkMode.value ? 0.8 : 0.6, 
                blending: isDarkMode.value ? THREE.AdditiveBlending : THREE.NormalBlending
            });
            const stars = new THREE.Points(starGeometry, starMaterial);
            stars.frustumCulled = false; // Prevent stars from being culled
            scene.add(stars);

            renderer.setClearColor(0x000000, 0); // Ensure transparent background

            // Bubbles
            const bubbles = [];
            const bubbleGeometry = new THREE.SphereGeometry(1, 64, 64);

            const createBubble = () => {
                const material = new THREE.MeshPhysicalMaterial({
                    transmission: isDarkMode.value ? 0.7 : 0.2, 
                    thickness: 1.0,         
                    roughness: 0.1,         
                    ior: 1.45,              
                    iridescence: 1.0,       
                    iridescenceIOR: 1.6,    
                    sheen: 1.0,             
                    transparent: true,
                    opacity: isDarkMode.value ? 0.8 : 0.9, 
                    color: isDarkMode.value ? 0x00b399 : 0x0284c7 
                });
                
                const mesh = new THREE.Mesh(bubbleGeometry, material);
                
                const resetBubble = (b) => {
                    b.position.set(
                        (Math.random() - 0.5) * 50,
                        -25,
                        (Math.random() - 0.5) * 25
                    );
                    const s = Math.random() * 2.5 + 1.2; 
                    b.scale.set(s, s, s);
                    
                    b.userData = {
                        speed: Math.random() * 0.04 + 0.015,
                        wobble: Math.random() * Math.PI * 2,
                        popping: false
                    };
                    b.visible = true;
                };

                resetBubble(mesh);
                scene.add(mesh);
                return { mesh, reset: () => resetBubble(mesh) };
            };

            const popParticles = [];
            const pop = (bubbleMesh) => {
                const count = bubbleMesh.geometry.attributes.position.count;
                const positions = bubbleMesh.geometry.attributes.position.array;
                
                const particleGeom = new THREE.BufferGeometry();
                const particlePositions = new Float32Array(count * 3);
                const velocities = new Float32Array(count * 3);
                
                const bubblePos = bubbleMesh.position.clone();
                const bubbleScale = bubbleMesh.scale.x;

                for (let i = 0; i < count; i++) {
                    const x = positions[i * 3];
                    const y = positions[i * 3 + 1];
                    const z = positions[i * 3 + 2];
                    
                    // Initial position
                    particlePositions[i * 3] = x * bubbleScale + bubblePos.x;
                    particlePositions[i * 3 + 1] = y * bubbleScale + bubblePos.y;
                    particlePositions[i * 3 + 2] = z * bubbleScale + bubblePos.z;
                    
                    // Velocity outwards
                    velocities[i * 3] = x * (Math.random() * 0.1 + 0.05);
                    velocities[i * 3 + 1] = y * (Math.random() * 0.1 + 0.05);
                    velocities[i * 3 + 2] = z * (Math.random() * 0.1 + 0.05);
                }
                
                particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
                
                const particleMat = new THREE.PointsMaterial({ 
                    size: 0.04, 
                    color: isDarkMode.value ? 0x00b399 : 0x38bdf8,
                    transparent: true,
                    opacity: 0.7,
                    blending: isDarkMode.value ? THREE.AdditiveBlending : THREE.NormalBlending
                });
                
                const particles = new THREE.Points(particleGeom, particleMat);
                scene.add(particles);
                
                popParticles.push({
                    mesh: particles,
                    velocities: velocities,
                    life: 1.0,
                    geom: particleGeom,
                    mat: particleMat
                });
            };

            for (let i = 0; i < 35; i++) { // Increased bubble count
                bubbles.push(createBubble());
            }

            // Mouse interaction
            const mouse = new THREE.Vector2();
            window.addEventListener('mousemove', (e) => {
                mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            });

            camera.position.z = 15;

            const animate = () => {
                requestAnimationFrame(animate);
                
                // Update theme properties (only on change would be better, but keeping it here for simplicity with a check)
                const targetAmbient = isDarkMode.value ? 0.3 : 1.2;
                const targetPoint = isDarkMode.value ? 0.8 : 2.5;
                const targetStarOpacity = isDarkMode.value ? 0.8 : 0.6;
                const targetStarColor = isDarkMode.value ? 0xffffff : 0x475569;
                
                if (ambientLight.intensity !== targetAmbient) {
                    ambientLight.intensity = targetAmbient;
                    pointLight.intensity = targetPoint;
                    starMaterial.opacity = targetStarOpacity;
                    starMaterial.color.setHex(targetStarColor);
                    starMaterial.blending = isDarkMode.value ? THREE.AdditiveBlending : THREE.NormalBlending;
                    starMaterial.needsUpdate = true;
                }
                
                stars.rotation.y += 0.00015;
                stars.rotation.x += 0.00008;
                
                bubbles.forEach(b => {
                    const targetBubbleOpacity = isDarkMode.value ? 0.8 : 0.9;
                    const targetBubbleColor = isDarkMode.value ? 0x00b399 : 0x0284c7;
                    const targetTransmission = isDarkMode.value ? 0.7 : 0.2;

                    if (b.mesh.material.opacity !== targetBubbleOpacity) {
                        b.mesh.material.opacity = targetBubbleOpacity;
                        b.mesh.material.color.setHex(targetBubbleColor);
                        b.mesh.material.transmission = targetTransmission;
                    }
                    
                    if (b.mesh.userData.popping) return;

                    b.mesh.position.y += b.mesh.userData.speed;
                    b.mesh.position.x += Math.sin(Date.now() * 0.001 + b.mesh.userData.wobble) * 0.01;
                    b.mesh.rotation.x += 0.01;

                    // Pop logic
                    if (b.mesh.position.y > 20 || (Math.random() > 0.998 && b.mesh.position.y > 0)) {
                        b.mesh.userData.popping = true;
                        gsap.to(b.mesh.scale, {
                            x: b.mesh.scale.x * 1.3,
                            y: b.mesh.scale.y * 1.3,
                            z: b.mesh.scale.z * 1.3,
                            duration: 0.1,
                            onComplete: () => {
                                pop(b.mesh);
                                b.mesh.visible = false;
                                setTimeout(() => {
                                    b.reset();
                                }, 800 + Math.random() * 1000);
                            }
                        });
                    }
                });

                // Update pop particles
                for (let i = popParticles.length - 1; i >= 0; i--) {
                    const p = popParticles[i];
                    p.life -= 0.02;
                    if (p.life <= 0) {
                        scene.remove(p.mesh);
                        p.geom.dispose();
                        p.mat.dispose();
                        popParticles.splice(i, 1);
                        continue;
                    }

                    const posAttr = p.geom.getAttribute('position');
                    for (let j = 0; j < posAttr.count; j++) {
                        posAttr.setX(j, posAttr.getX(j) + p.velocities[j * 3]);
                        posAttr.setY(j, posAttr.getY(j) + p.velocities[j * 3 + 1]);
                        posAttr.setZ(j, posAttr.getZ(j) + p.velocities[j * 3 + 2]);
                    }
                    posAttr.needsUpdate = true;
                    p.mat.opacity = p.life * 0.6;
                }

                scene.rotation.y += (mouse.x * 0.05 - scene.rotation.y) * 0.05;
                scene.rotation.x += (-mouse.y * 0.05 - scene.rotation.x) * 0.05;
                
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
