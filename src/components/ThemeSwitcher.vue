<template>
  <section class="theme"> 
    <h1 class="theme__heading">
      devfinder
    </h1>
    <div
      class="theme__switcher"
      @click="changeTheme"
    >
      <span class="theme__type">
        <span v-if="currentTheme ===&quot;light&quot;">dark</span>
        <span v-else>light</span>
      </span>
      <picture class="theme__picture">
        <img
          v-if="currentTheme === &quot;light&quot;"
          class="theme__img"
          src="../assets/img/icon-moon.svg"
          alt="moon"
        > 
        <img
          v-else
          class="theme__img"
          src="../assets/img/icon-sun.svg"
          alt="sun"
        > 
      </picture>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  const THEME = 'theme'

  const getStoredTheme = () => {
    const defaultTheme='light'
    const currentTheme = localStorage.getItem(THEME)
    return (currentTheme) ? currentTheme : defaultTheme 
  }

  const initializeTheme = () => {
    const storedTheme = getStoredTheme()
    document.body.classList.add(storedTheme)
    return storedTheme
  }

  const currentTheme = ref(initializeTheme())
  const setStoredTheme = (currentTheme) => localStorage.setItem(THEME, currentTheme)

  const swapThemeClasses = (newTheme) => {
    document.body.classList.remove(currentTheme.value)
    currentTheme.value = newTheme 
    document.body.classList.add(newTheme)
    setStoredTheme(currentTheme.value)
  }

  const changeTheme = () => {
    const light = 'light'
    const dark = 'dark'
    switch(currentTheme.value){
      case light:
        swapThemeClasses(dark)
        break;
      case dark:
        swapThemeClasses(light)
        break
    }
  }
</script>

<style>
  .theme {
    display: flex;
    flex-direction: row;
    margin-bottom: var(--spacer-xl);
    justify-content: space-between;
  }

  .theme__heading{
    color: var(--secondary-font-clr);
    font-size: var(--h1-fs);
  }

  .theme__switcher {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .theme__switcher:hover{
    filter: brightness(0.5);
  }

  .theme__type {
    text-transform: uppercase;
    font-weight: var(--fw-bold);
    margin-right: var(--spacer-md);
    letter-spacing: 2.5px;
  }

  .theme__img {
    vertical-align: sub;
  }

</style>
