const body = document.querySelector('body');

const createNav = () => {
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('bg-zinc-50', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
  nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
      <h1 class="dark:text-white text-zinc-700 text-xl uppercase font-bold">Todo App</h1>
      <!-- desktop layout -->
      <div class="hidden md:flex gap-4 p-4">
        <a href="/signup/" class="hover:dark:bg-slate-700 hover:bg-zinc-100 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Registro</a>
        <a href="/login/" class="hover:dark:bg-slate-700 hover:bg-zinc-100 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Login</a>
      </div>

      <!-- Mobile layout -->
      <!-- btn mobile -->
      <svg id="nav-btn" class="md:hidden w-8 h-8 cursor-pointer dark:text-white text-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <!-- Sidebar mobile -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-500/70 dark:bg-slate-900/70 backdrop-blur-sm ease-in duration-500">
        <div class="absolute top-0 right-0 bottom-0 w-[60%] bg-zinc-100 dark:bg-slate-700 flex flex-col gap-4 p-4">
          <a href="/signup/" class="hover:dark:bg-slate-600 hover:bg-zinc-200 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Registro</a>
          <a href="/login/" class="hover:dark:bg-slate-600 hover:bg-zinc-200 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Login</a>
        </div>
      </div>
    </div>
  `;

  const navBtn = nav.children[0].children[2];
  const navSidebar = nav.children[0].children[3];

  navBtn.addEventListener('click', e => {
    if (navSidebar.classList.contains('w-[0%]')) {
      navSidebar.classList.remove('w-[0%]', '-right-8');
      navSidebar.classList.add('w-full', 'right-0');
    } else {
      navSidebar.classList.add('w-[0%]', '-right-8');
      navSidebar.classList.remove('w-full', 'right-0');
    }
  });

  body.append(nav);

};

const createNavSignup = () => {
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('bg-zinc-50', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
  nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
      <h1 class="dark:text-white text-zinc-700 text-xl uppercase font-bold">Todo App</h1>
      <!-- desktop layout -->
      <div class="hidden md:flex gap-4 p-4">
        <a href="/login/" class="hover:dark:bg-slate-700 hover:bg-zinc-100 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Login</a>
      </div>

      <!-- Mobile layout -->
      <!-- btn mobile -->
      <svg id="nav-btn" class="md:hidden w-8 h-8 cursor-pointer dark:text-white text-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <!-- Sidebar mobile -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-500/70 dark:bg-slate-900/70 backdrop-blur-sm ease-in duration-500">
        <div class="absolute top-0 right-0 bottom-0 w-[60%] bg-zinc-100 dark:bg-slate-700 flex flex-col gap-4 p-4">
          <a href="/login/" class="hover:dark:bg-slate-600 hover:bg-zinc-200 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Login</a>
        </div>
      </div>
    </div>
  `;

  const navBtn = nav.children[0].children[2];
  const navSidebar = nav.children[0].children[3];

  navBtn.addEventListener('click', e => {
    if (navSidebar.classList.contains('w-[0%]')) {
      navSidebar.classList.remove('w-[0%]', '-right-8');
      navSidebar.classList.add('w-full', 'right-0');
    } else {
      navSidebar.classList.add('w-[0%]', '-right-8');
      navSidebar.classList.remove('w-full', 'right-0');
    }
  });

  body.append(nav);

};

const createNavLogin = () => {
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('bg-zinc-50', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
  nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
      <h1 class="dark:text-white text-zinc-700 text-xl uppercase font-bold">Todo App</h1>
      <!-- desktop layout -->
      <div class="hidden md:flex gap-4 p-4">
        <a href="/signup/" class="hover:dark:bg-slate-700 hover:bg-zinc-100 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Registro</a>
      </div>

      <!-- Mobile layout -->
      <!-- btn mobile -->
      <svg id="nav-btn" class="md:hidden w-8 h-8 cursor-pointer dark:text-white text-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <!-- Sidebar mobile -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-500/70 dark:bg-slate-900/70 backdrop-blur-sm ease-in duration-500">
        <div class="absolute top-0 right-0 bottom-0 w-[60%] bg-zinc-100 dark:bg-slate-700 flex flex-col gap-4 p-4">
          <a href="/signup/" class="hover:dark:bg-slate-600 hover:bg-zinc-200 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Registro</a>
        </div>
      </div>
    </div>
  `;

  const navBtn = nav.children[0].children[2];
  const navSidebar = nav.children[0].children[3];

  navBtn.addEventListener('click', e => {
    if (navSidebar.classList.contains('w-[0%]')) {
      navSidebar.classList.remove('w-[0%]', '-right-8');
      navSidebar.classList.add('w-full', 'right-0');
    } else {
      navSidebar.classList.add('w-[0%]', '-right-8');
      navSidebar.classList.remove('w-full', 'right-0');
    }
  });

  body.append(nav);

};

const createNavApp = () => {
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('bg-zinc-50', 'dark:bg-slate-800', 'h-20', 'fixed', 'top-0', 'left-0', 'right-0', 'shadow');
  nav.innerHTML = `
    <div class="flex justify-between items-center h-full px-4">
      <h1 class="dark:text-white text-zinc-700 text-xl uppercase font-bold">Todo App</h1>
      <!-- desktop layout -->
      <div class="hidden md:flex gap-4 p-4">
        <button class="hover:dark:bg-slate-700 hover:bg-zinc-100 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Cerrar Sesion</button>
      </div>

      <!-- Mobile layout -->
      <!-- btn mobile -->
      <svg id="nav-btn" class="md:hidden w-8 h-8 cursor-pointer dark:text-white text-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <!-- Sidebar mobile -->
      <div id="nav-sidebar" class="md:hidden fixed top-20 w-[0%] -right-8 bottom-0 bg-zinc-500/70 dark:bg-slate-900/70 backdrop-blur-sm ease-in duration-500">
        <div class="absolute top-0 right-0 bottom-0 w-[60%] bg-zinc-100 dark:bg-slate-700 flex flex-col gap-4 p-4">
          <button class="hover:dark:bg-slate-600 hover:bg-zinc-200 rounded-lg p-2 dark:text-white text-zinc-700 font-semibold ease-in duration-300">Cerrar Sesion</button>
        </div>
      </div>
    </div>
  `;

  const desktopLogout = (nav.children[0].children[1].children[0]);
  const mobileLogout = (nav.children[0].children[3].children[0].children[0].children[0]);

  //cerrar sesion para pc
  desktopLogout.addEventListener("click", async e => {
    await axios.get("/api/Logout");
    window.location.pathname = "/";
  });

  //cerrar sesoin para telefonoa
  mobileLogout.addEventListener("click", async e => {
    await axios.get("/api/Logout");
    window.location.pathname = "/";
  });

  //ubicacion de los botones de cerrar sesion
  const navBtn = nav.children[0].children[2];
  const navSidebar = nav.children[0].children[3];

  navBtn.addEventListener('click', e => {
    if (navSidebar.classList.contains('w-[0%]')) {
      navSidebar.classList.remove('w-[0%]', '-right-8');
      navSidebar.classList.add('w-full', 'right-0');
    } else {
      navSidebar.classList.add('w-[0%]', '-right-8');
      navSidebar.classList.remove('w-full', 'right-0');
    }
  });

  body.append(nav);

};



if (window.location.pathname === '/') {
  createNav();
} else if (window.location.pathname === '/signup/') {
  createNavSignup();
} else if (window.location.pathname === '/login/') {
  createNavLogin();
} else if (window.location.pathname.includes('/api/')) {
  createNavApp();
}