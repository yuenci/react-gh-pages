# How to deploy React App to github pages

Reference：

https://github.com/gitname/react-gh-pages


### 1. Build a new repo(without readme/license) and get the url：

https://github.com/yuenci/react-gh-pages

### 2. Add dependence to local project

```bash
$ yarn add gh-pages
```

### 3. Set package.json

```diff
{
    "name": "react_app",
    "private": true,
    "version": "0.0.0",
+   "homepage": "https://yuenci.github.io/react-gh-pages",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
+       "predeploy": "yarn build",
+       "deploy": "gh-pages -d build"
        
    },
}
```

homepage: https://{gitname}.github.io/{projectName}

### 4. vite.config.js

```diff
export default defineConfig({
  plugins: [react()],
+  build: {
+    outDir: 'build'
+  },
+  base: './',
})

```

### 5. Initialize git
```bash
$ git init
```

### 6. Add remote address

```bash
$ git remote add origin https://github.com/yuenci/react-gh-pages
```

### 7. Deploy
```bash
$ yarn deploy
```
