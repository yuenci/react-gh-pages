# How to deploy React App to github pages

Reference：

https://github.com/gitname/react-gh-pages


1. Build a new repo：

https://github.com/yuenci/react-gh-pages


2. Add dependence to local project

```bash
yarn add gh-pages
```


3. Set package.json

```json
{
    "name": "react_app",
    "private": true,
    "version": "0.0.0",
  + "homepage": "https://yuenci.github.io/react-gh-pages",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
      + "predeploy": "yarn build",
      + "deploy": "gh-pages -d build",
        "preview": "vite preview"
    },
}
"
```

homepage: https://{gitname}.github.io/{projectName}


4. vite.config.js

```
export default defineConfig({
  plugins: [react()],
+  build: {
+    outDir: 'build'
+  },
+  base: './',
})

```

5. Initialize git
```bash
init git
```

6. Add remote address

```bash
git remote add origin https://github.com/yuenci/react-gh-pages
```

7. Deploy
```bash
yarn deploy
```
