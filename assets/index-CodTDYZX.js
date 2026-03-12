(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();const W=window.Vue,n=window.THREE,G=window.gsap;function I(){const u=document.getElementById("three-canvas");if(!u)return;const i=new n.Scene,d=new n.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),l=new n.WebGLRenderer({canvas:u,alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=window.innerWidth<768,r=t?80:180,c=t?40:80,x=new n.AmbientLight(16777215,.5);i.add(x);const m=new n.PointLight(16777215,1);m.position.set(20,30,20),i.add(m);const A=6e3,k=new n.BufferGeometry,f=new Float32Array(A*3);for(let e=0;e<A;e++)f[e*3]=(Math.random()-.5)*300,f[e*3+1]=(Math.random()-.5)*300,f[e*3+2]=-50-Math.random()*200;k.setAttribute("position",new n.BufferAttribute(f,3));const L=new n.PointsMaterial({size:.18,color:16777215,transparent:!0,opacity:.9,blending:n.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),s=new n.Points(k,L);i.add(s);const w=new n.IcosahedronGeometry(80,2),g=new n.MeshBasicMaterial({color:282170,wireframe:!0,transparent:!0,opacity:.25}),h=new n.Mesh(w,g);i.add(h);const v=new n.SphereGeometry(1,24,24),M=new n.MeshPhysicalMaterial({color:282170,transmission:.3,opacity:.95,transparent:!0,roughness:.05,thickness:2.5,ior:1.5,sheen:1,sheenColor:16777215,specularIntensity:1.2,depthWrite:!1}),D=[],C=e=>{e.position.set((Math.random()-.5)*c,-50-Math.random()*50,(Math.random()-.5)*30);const o=Math.random()*(t?1:1.8)+.5;e.scale.set(o,o,o),e.userData={speed:Math.random()*.06+.02,wobble:Math.random()*Math.PI*2,popping:!1},e.visible=!0};for(let e=0;e<r;e++){const o=new n.Mesh(v,M);C(o),i.add(o),D.push(o)}const P=[],E=(e,o)=>{const a=new n.BufferGeometry,B=new Float32Array(45),O=[];for(let b=0;b<15;b++)B[b*3]=e.x,B[b*3+1]=e.y,B[b*3+2]=e.z,O.push({x:(Math.random()-.5)*.5,y:(Math.random()-.5)*.5,z:(Math.random()-.5)*.5});a.setAttribute("position",new n.BufferAttribute(B,3));const V=new n.PointsMaterial({size:.12,color:o,transparent:!0,opacity:1}),S=new n.Points(a,V);i.add(S),P.push({points:S,pVelo:O,life:1})};d.position.z=50;const z=()=>{requestAnimationFrame(z),s.rotation.y+=1e-4,h.rotation.y+=6e-4,h.rotation.z+=3e-4,D.forEach(e=>{e.userData.popping||(e.position.y+=e.userData.speed,e.position.x+=Math.sin(Date.now()*.001+e.userData.wobble)*.02,e.position.y>40&&(e.userData.popping=!0,E(e.position,M.color),e.visible=!1,setTimeout(()=>{e.userData.popping=!1,C(e)},500+Math.random()*2e3)))});for(let e=P.length-1;e>=0;e--){const o=P[e];o.life-=.03;const y=o.points.geometry.attributes.position;for(let a=0;a<o.pVelo.length;a++)y.array[a*3]+=o.pVelo[a].x,y.array[a*3+1]+=o.pVelo[a].y,y.array[a*3+2]+=o.pVelo[a].z;y.needsUpdate=!0,o.points.material.opacity=o.life,o.life<=0&&(i.remove(o.points),o.points.geometry.dispose(),o.points.material.dispose(),P.splice(e,1))}l.render(i,d)};window.addEventListener("resize",()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}),z()}const{createApp:H,ref:p,onMounted:T,defineComponent:F,watch:j}=W;F({name:"LayoutComponent",props:{title:{type:String,default:"OutTaiwan"}},template:`
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
    `,setup(u){const i=p(!1),d=p(!1),l=p(!1),t=p(!1),r=p(!1),c=p({left:"-100px",transform:"scaleX(1)"}),x=p({left:"-100px",transform:"scaleX(1)"}),m=(s,w,g,h)=>{if(s.value)return;const v=Math.random()>.5,M=window.innerWidth;w.left=v?`-${g}px`:`${M+g}px`,w.transform=v?"scaleX(-1)":"scaleX(1)",s.value=!0,G.to(w,{left:v?`${M+g}px`:`-${g}px`,duration:h+Math.random()*2,ease:"power1.inOut",onComplete:()=>{s.value=!1}})},A=()=>m(l,c,150,7.5),k=()=>m(t,x,100,15),f=()=>{r.value=!0,setTimeout(()=>{r.value=!1},2500)};setInterval(()=>{Math.random()>.4&&A(),Math.random()>.5&&k(),Math.random()>.7&&f()},2e3);const L=()=>{i.value=!i.value,document.body.classList.toggle("dark",i.value),localStorage.setItem("darkMode",i.value?"true":"false")};return T(()=>{document.title=u.title,I();const s=localStorage.getItem("darkMode")==="true";i.value=s,s&&document.body.classList.add("dark")}),j(()=>u.title,s=>{document.title=s}),{isDarkMode:i,isMenuOpen:d,dogActive:l,birdActive:t,peekingActive:r,dogStyle:c,birdStyle:x,toggleDarkMode:L}}});
