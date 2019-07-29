# Vue Components

## Create a Global Component Registry

### plugins/Global.js

```js
import Vue from 'vue'

// Import to be used Global Components
import Navbar from '~/components/Navbar'

// Vue.use Definition
Vue.use('Navbar', Navbar)

// Export Components
const components = {
  Navbar
}

// Register Components
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
```

### Add Plugin to Nuxt.Config.js

```js
plugins: ['@/plugins/Global.js'],
```

### Add Element to Vue Template

```html
<Navbar />
```

# Custom Components

## ICON (Font-Awesome)

### Icon.vue

```html
<template>
  <v-flex>
    <v-icon
      :class="`${iconstyle} fa-${name} icon-${size} ${color}--text`"
    ></v-icon>
  </v-flex>
</template>

<script>
  export default {
    props: ['iconstyle', 'size', 'color', 'name']
  }
</script>

<style scoped>
  .icon-sm {
    font-size: 20px;
  }

  .icon-md {
    font-size: 30px;
  }

  .icon-lg {
    font-size: 40px;
  }
</style>
```

## Round Button with ICON

### IconBtn.vue

```html
<template>
  <v-flex class="btnContainer">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          v-on="on"
          :to="`${route}`"
          :class="`mybtn ${color} ${shade} ${iconColor}--text`"
        >
          <Icon
            size="sm"
            :color="`${iconColor}`"
            :iconstyle="`${iconStyle}`"
            :name="`${iconName}`"
          />
        </v-btn>
      </template>
      <span>{{tooltip}}</span>
    </v-tooltip>
  </v-flex>
</template>

<script>
  export default {
    props: [
      'iconStyle',
      'iconName',
      'iconColor',
      'shade',
      'color',
      'height',
      'width',
      'route',
      'tooltip'
    ]
  }
</script>

<style scoped>
  .v-btn.mybtn {
    padding-top: 0px;
    min-width: 0;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid black;
    border-radius: 20px;
  }
  .v-btn.mybtn:hover {
    color: black;
    background-color: white;
    border-radius: 5px;
  }
  .btnContainer {
    vertical-align: middle;
  }
</style>
```

## Navbar (Extended) with Round Buttons

### Navbar.vue

```html
<template>
  <div>
    <v-toolbar
      app
      :class="`${toolbarColor}`"
      :extended="extended"
      :dense="dense"
      :collapse="collapse"
      :flat="flat"
      :extension-height="extensionHeight"
    >
      <template v-if="extended" #extension>
        <v-toolbar-items v-for="ext in exts" :key="ext.name">
          <IconBtn
            :route="`${ext.route}`"
            class="pa-1"
            :color="`${toolbarColor}`"
            :shade="`${btnShade}-3`"
            :iconStyle="`${ext.iconStyle}`"
            :iconName="`${ext.iconName}`"
            iconColor="white"
            :tooltip="`${ext.name}`"
          />
        </v-toolbar-items>
      </template>

      <v-toolbar-title>{{websiteTitle}}</v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          flat
          @click="extended = !extended"
          :class="`mybtn ${color} ${shade} ${iconColor}--text`"
        >
          <ChevronUpBtn
            v-if="!extended"
            size="sm"
            color="black"
            :shade="`darken-3`"
          />
          <ChevronDownBtn v-if="extended" size="sm" color="black" />
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="menu in menus" :key="menu.name">
        <IconBtn
          :route="`${menu.route}`"
          class="pa-1"
          :color="`${toolbarColor}`"
          :shade="`${btnShade}-3`"
          :iconStyle="`${menu.iconStyle}`"
          :iconName="`${menu.iconName}`"
          iconColor="white"
          :tooltip="`${menu.name}`"
        />
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Extended
        extended: true,
        extendedSlot: true,
        prominent: false,
        dense: true,
        collapse: false,
        flat: true,
        extensionHeight: 55,
        // Normal
        websiteTitle: 'BIG2TINY.com',
        toolbarColor: 'orange',
        toolbarShade: 'lighten-1',
        btnShade: 'darken',
        menus: [
          {
            iconName: 'chevron-up',
            iconStyle: 'fas',
            name: 'Home',
            route: '/',
            themeColor: 'blue'
          }
        ],
        exts: [
          {
            iconName: 'home',
            iconStyle: 'fas',
            name: 'Home',
            route: '/',
            themeColor: 'blue'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .v-btn.mybtn {
    padding-top: 0px;
    min-width: 0;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }
  .v-btn.mybtn:hover {
    color: black;
    background-color: white;
    border-radius: 5px;
  }
  .btnContainer {
    vertical-align: middle;
  }
</style>
```

## Dragable Items

### Dragable.vue

```html
<template>
  <v-container fluid class="main">
    <h1 class="header">Dragable</h1>
    <v-container fluid class="lists">
      <v-container fluid class="list">
        <v-container fluid class="list-item" draggable="true"
          >List-Item 1</v-container
        >
        <v-container fluid class="list-item" draggable="true"
          >List-item 2</v-container
        >
        <v-container fluid class="list-item" draggable="true"
          >List-item 3</v-container
        >
      </v-container>
      <v-container class="list"></v-container>
      <v-container class="list"></v-container>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    mounted() {
      const list_items = document.querySelectorAll('.list-item')
      const lists = document.querySelectorAll('.list')

      let draggedItem = null

      for (let i = 0; i < list_items.length; i++) {
        const item = list_items[i]

        item.addEventListener('dragstart', function(e) {
          console.log('dragstart', e)
          draggedItem = this
        })

        for (let l = 0; l < lists.length; l++) {
          const list = lists[l]
        }
      }
    }
  }
</script>

<style scoped>
  * {
    margin-top: 150px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  .main {
    margin-top: 50px;
    width: 100vw;
    height: 80vh;
    margin-top: 50px;
    display: flex;
    flex-flow: column;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }

  .lists {
    display: flex;
    flex: 1;
    width: 100%;
    overflow-x: scroll;
  }
  .list {
    display: flex;
    flex-flow: column;
    flex: 1;
    width: 100%;
    min-width: 250px;
    max-width: 350px;
    height: 100%;
    min-height: 150px;
    margin: 0px 15px;
    padding: 8px;
    transition: all 0.2s linear;
    background-color: rgb(255, 220, 155);
    padding: 5px;
  }
  .list-item {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: orangered;
    padding: 15px 20px;
    text-align: center;
    margin: 4px 0;
  }
</style>
```
