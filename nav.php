   
<nav class="fixed top-0 left-0 right-0 z-10 px-8 bg-indigo-900" x-data="{ open: false }">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
                <!-- Mobile menu button-->
                <button x-on:click="open = true" class="inline-flex items-center justify-center p-2 text-yellow-400 rounded-md hover:text-yellow-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!-- Icon when menu is closed. -->

                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Icon when menu is open. -->
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex items-center justify-between flex-1 sm:items-stretch sm:justify-between">
                <!-- logotipo -->
                <a href="/" class="flex items-center flex-shrink-0">
                    <img class="block w-auto h-10 lg:hidden" src="assets/img/logo.png" alt="Workflow">
                    <img class="hidden w-auto h-10 lg:block" src="assets/img/logo.png">
                </a>
                <div class="hidden md:block md:ml-6">
                    <div class="flex w-full space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <!-- <a href="#" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">Dashboard</a> -->
                        <a href="/" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Home</a>
                        <a href="#experience" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Experience</a>
                        <a href="#education" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Education</a>
                        <a href="#skills" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Skills</a>
                        <a href="#portfolio" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Portfolio</a>
						<a href="https://blog.jimmytzuc.com" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options nav-link js-scroll-trigger"  aria-current="page">Blog</a>
                        <a href="resources/descargas.php" class="flex justify-center px-3 py-2 text-sm font-medium text-yellow-400 rounded-md hover:bg-red-700 hover:text-yellow-300 nav-options"  aria-current="page">My CV</a>
                    </div>

                </div>
            </div>
            
        </div>
    </div>


    <div class="md:hidden" x-show="open" x-on:click.away="open = false">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!-- <a href="#" class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">Dashboard</a> -->
            <a href="/" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md" aria-current="page">Inicio</a>
            <a href="#experience" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">Experince</a>
            <a href="#education" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">Education</a>
            <a href="#skills" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">Skills</a>
            <a href="#portfolio" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">Portfolio</a>
            <a href="https://blog.jimmytzuc.com" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">Blog</a>
            <a href="resources/descargas.php" class="block px-3 py-2 text-base font-medium text-yellow-400 bg-gray-900 rounded-md nav-options nav-link js-scroll-trigger" aria-current="page">My CV</a>
        </div>
    </div>
</nav>