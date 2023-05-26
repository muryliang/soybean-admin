# how to add a new page
- add in src/typings/system.d.ts your page directory
- add src/views/xx/xx your index.vue and directorys
- add in src/locales/lang  both languages
- add in router/modules/ your page ts file, names must match directory
- add in src/view/index.ts the "import" code
- src/typings/page-route.d.ts will be changed by vite plugin automatically
- now you will see pages

# how to proxy to remote server
- add in .env-config.js serviceEnv the url,
- change src/typings/env.d.ts  proxyPatter if you needed
- in createViteProxy() that patter will be removed, then send to remote server by vite
- VITE_SERVICE_ENV set what proxy url to use, set in package.json's script section as env
- in src/service/request/index.ts we create a request handle using that proxy patter, and we can send

# login and axios related
- src/service/api/auth.ts handle login, currently use mockrequest, we can change to true server's request
- src/service/request/instance.ts is the axios instance, will inject requests and responses,
  - response should have message, code, data, and match success code and refresh code inside it
