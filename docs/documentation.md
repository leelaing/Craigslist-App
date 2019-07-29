# Lee's Vue/Nuxt Docs

## Nuxt JS Project Setup and Configuration

- [Homebrew Mac Installation](https://brew.sh/)

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Node JS

### Check Node Version

```bash
  node -v
```

### Install NPX before Nuxt CLI

- [Install NPX](https://www.npmjs.com/package/npx)

```bash
  sudo npm i -g npx
```

- [Node JS Global Installation (MacOS)](https://nodejs.org/en/)

## VuePress

- [VuePress Global Installation](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)

### Create NEW VuePress Project

```bash
# install globally
yarn global add vuepress # OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

- [VuePress Local Installation](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project)

```bash
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

## Markdown

### [Markdown Cheatsheet Link](https://www.markdownguide.org/cheat-sheet/)

````markdown
Heading # H1

## H2

### H3

Bold **bold text**
Italic _italicized text_
Blockquote > blockquote
Ordered List 1. First item

2. Second item
3. Third item
   Unordered List - First item

- Second item
- Third item
  Code `code`
  Horizontal Rule ---
  Link [title](https://www.example.com)
  Image ![alt text](image.jpg)
  Table | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |
  Fenced Code Block ```
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }

```
Footnote	Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
Heading ID	### My Great Heading {#custom-id}
Definition List	term
: definition
Strikethrough	~~The world is flat.~~
Task List	- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```
````

## Nuxt JS

- [Nuxt JS Global Installation](https://www.markdownguide.org/cheat-sheet/)

- [Create New Nuxt JS Project](https://nuxtjs.org/guide/installation/)

### Create NEW Nuxt Project

```bash
cd <development directory>

create-nuxt-app <project-name>
```

### Configure Nuxt Options

```bash
Project name (test-app)

Project description (My sublime Nuxt.js project)

Author name (Your name <email>)

Choose the package manager (Use arrow keys)
❯ Yarn
  Npm

Choose UI framework (Use arrow keys)
❯ None
  Ant Design Vue
  Bootstrap Vue
  Buefy
  Bulma
  Element
  iView
  Tachyons
  Tailwind CSS
  Vuetify.js

Choose custom server framework (Use arrow keys)
❯ None (Recommended)
  AdonisJs
  Express
  Fastify
  Feathers
  hapi
  Koa
  Micro

Choose Nuxt.js modules
 ◉ Axios
❯◉ Progressive Web App (PWA) Support

Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ ESLint
 ◯ Prettier

Choose test framework (Use arrow keys)
❯ None
  Jest
  AVA

Choose rendering mode (Use arrow keys)
❯ Universal (SSR)
  Single Page App

...  Building App (Takes a few minutes)

Successfully created project test-app

  To get started:

	cd test-app
	yarn dev

  To build & start for production:

	cd test-app
	yarn build
	yarn start
```

## Open Project in Code Editor

- [Configure VSCode to open from Terminal](https://code.visualstudio.com/docs/setup/mac)

```bash
cd <project directory>

code .
```

## Adding Font Awesome Icons

### Add Node_Modules

- [nuxt-fontawesome NPM Docs](https://www.npmjs.com/package/nuxt-fontawesome)

```bash
npm i nuxt-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons

(or)

yarn add nuxt-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons

```

### Add CDN to nuxt.config.js

```json
head: {
    script: [{ src: 'https://kit.fontawesome.com/23729673df.js' }]
}
```

## Adding Global CSS File to Nuxt JS

### Create "css/main.css" in Root directory

### Modify nuxt.config.js

```js
/*
   ** Global CSS
   */
  css: ['@/css/main.css'],
```

### "css/main.css" Starting Contents

```css
/* 
This is where all the Globally Controlled CSS is written
*/
html {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Source
      Sans Pro, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
```

# Firebase Integration

## Firebase Authentication

### Create a "Services" Folder in root directory
