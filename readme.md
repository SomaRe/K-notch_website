## TODO
- [ ] Need a square logo for using as favicon
- [ ] voice/pronounication for knotch word

### Build device details
- OS: Windows 11


### Tailwind CSS
https://tailwindcss.com/blog/standalone-cli

**Create a tailwind.config.js file**
```bash
./tailwindcss init
```

**Start a watcher**
```bash
./tailwindcss -i static/styles/input.css -o static/styles/output.css --watch
```

**Compile and minify your CSS for production**
```bash
./tailwindcss -i static/styles/input.css -o static/styles/output.css --minify
```

**Add plugins**
```js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
```

**command to watch css**
```bash
./tailwindcss -i styles/input.css -o styles/output.css --watch
```

**command to minify css(production)**
```bash
./tailwindcss -i styles/input.css -o styles/output.css --minify
```