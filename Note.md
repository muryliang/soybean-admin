# how to add a new page
- add in src/typings/system.d.ts your page directory
- add src/views/xx/xx your index.vue and directorys
- add in src/locales/lang  both languages
- add in router/modules/ your page ts file, names must match directory
- add in src/view/index.ts the "import" code
- src/typings/page-route.d.ts will be changed by vite plugin automatically
- now you will see pages
