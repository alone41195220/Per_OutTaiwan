
// @ts-ignore
const Vue = window.Vue;
// @ts-ignore
const THREE = window.THREE;
// @ts-ignore
const gsap = window.gsap;

export function initThreeBackground() {
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
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
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // --- 4. 背景 B: 幾何網格 (淺色模式加深線條) ---
    const geoNetGeometry = new THREE.IcosahedronGeometry(80, 2);
    const geoNetMaterial = new THREE.MeshBasicMaterial({
        color: 0x044e3a,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
    });
    const geoNet = new THREE.Mesh(geoNetGeometry, geoNetMaterial);
    scene.add(geoNet);

    // --- 5. 核心：泡泡材質 (保持紮實質感) ---
    const bubbleGeometry = new THREE.SphereGeometry(1, 24, 24);
    const bubbleMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x044e3a,
        transmission: 0.3,   
        opacity: 0.95, 
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

    // --- 7. 動畫 ---
    camera.position.z = 50;

    const animate = () => {
        requestAnimationFrame(animate);

        stars.rotation.y += 0.0001;
        geoNet.rotation.y += 0.0006;
        geoNet.rotation.z += 0.0003;

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
}

export function createParticles(x, y, color) {
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
}

const { createApp, ref, onMounted, defineComponent, watch } = Vue;

// Define Layout Component
const LayoutComponent = defineComponent({
    name: 'LayoutComponent',
    props: {
        title: {
            type: String,
            default: 'OutTaiwan'
        }
    },
    template: `
        <div class="app-bg"></div>
        <canvas id="three-canvas" class="three-canvas"></canvas>

        <div id="app" v-cloak class="relative z-10 min-h-screen py-8 px-4 md:px-8">
            <!-- Collapsible Floating Menu -->
            <div class="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-[100]">
                <!-- Menu Items (Collapsible) -->
                <div v-if="isMenuOpen" class="flex flex-col gap-3 mb-1 animate-slide-up">
                    <!-- Theme Toggle -->
                    <button @click="toggleDarkMode" 
                            class="w-14 h-14 rounded-full flex items-center justify-center transition-all glass-card hover:scale-110 active:scale-95 shadow-2xl group border border-white/20">
                        <span v-if="isDarkMode" class="text-2xl">☀️</span>
                        <span v-else class="text-2xl">🌙</span>
                        <span class="absolute right-16 bg-slate-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {{ isDarkMode ? '切換亮色模式' : '切換深色模式' }}
                        </span>
                    </button>
                </div>

                <!-- Main Menu Toggle Button -->
                <button @click="isMenuOpen = !isMenuOpen" 
                        class="w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border-4 border-white/30">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Flying Bird -->
            <div class="flying-bird" v-if="birdActive" :style="birdStyle">
                <span class="bird-emoji">🕊️</span>
            </div>

            <!-- Running Dog -->
            <div class="running-dog" v-if="dogActive" :style="dogStyle">
                <span class="dog-emoji">🐕</span>
                <div class="dog-dust"></div>
            </div>

        <!-- Content Area -->
            <div id="content-area">
                <slot></slot>
            </div>
        </div>

        <!-- Footer -->
        <footer class="mt-20 pb-24 text-center text-slate-400 text-sm">
            <p>© 2026 Elon提醒出國玩記得注意荷包 ✈️</p>
        </footer>
    `,
    setup(props) {
        const isDarkMode = ref(false);
        const isMenuOpen = ref(false);
        const dogActive = ref(false);
        const birdActive = ref(false);
        const peekingActive = ref(false);
        
        const dogStyle = ref({
            left: '-100px',
            transform: 'scaleX(1)'
        });

        const birdStyle = ref({
            left: '-100px',
            transform: 'scaleX(1)'
        });

        const triggerAnimal = (activeState, styleObject, offset, baseDuration) => {
            if (activeState.value) return;

            const fromLeft = Math.random() > 0.5;
            const screenWidth = window.innerWidth;
            
            styleObject.left = fromLeft ? `-${offset}px` : `${screenWidth + offset}px`;
            styleObject.transform = fromLeft ? 'scaleX(-1)' : 'scaleX(1)';
            activeState.value = true;

            gsap.to(styleObject, {
                left: fromLeft ? `${screenWidth + offset}px` : `-${offset}px`,
                duration: baseDuration + Math.random() * 2, 
                ease: "power1.inOut",
                onComplete: () => {
                    activeState.value = false;
                }
            });
        };

        const triggerDog = () => triggerAnimal(dogActive, dogStyle, 150, 7.5);
        const triggerBird = () => triggerAnimal(birdActive, birdStyle, 100, 15);

        const triggerPeek = () => {
            peekingActive.value = true;
            setTimeout(() => {
                peekingActive.value = false;
            }, 2500);
        };

        // Randomly trigger animals
        setInterval(() => {
            if (Math.random() > 0.4) triggerDog();
            if (Math.random() > 0.5) triggerBird();
            if (Math.random() > 0.7) triggerPeek();
        }, 2000);

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            document.body.classList.toggle('dark', isDarkMode.value);
            localStorage.setItem('darkMode', isDarkMode.value ? 'true' : 'false');
        };

        // Update document title when title prop changes
        onMounted(() => {
            document.title = props.title;
            // Initialize Three.js background
            initThreeBackground();
            
            // Load dark mode preference
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            isDarkMode.value = savedDarkMode;
            if (savedDarkMode) {
                document.body.classList.add('dark');
            }
        });
        
        watch(() => props.title, (newTitle) => {
            document.title = newTitle;
        });

        return {
            isDarkMode,
            isMenuOpen,
            dogActive,
            birdActive,
            peekingActive,
            dogStyle,
            birdStyle,
            toggleDarkMode
        };
    }
});

// Export Layout Component
export { LayoutComponent };
