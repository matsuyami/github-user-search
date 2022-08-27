<template>
  <section class='theme'> 
    <h1 class='theme__heading'> devfinder </h1>
    <div @click='changeTheme' class='theme__switcher'>
      <span class='theme__type'>{{nextTheme}}</span>
      <picture class='theme__picture'>
        <img v-if='nextTheme === "dark"' class='theme__img' src='../assets/img/icon-moon.svg'/> 
        <img v-else class='theme__img' src='../assets/img/icon-sun.svg'/> 
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      nextTheme: 'dark'
    }
  },
  methods: {
    changeTheme(){
      switch(this.nextTheme){
        case 'dark':
          this.nextTheme = 'light'
          document.body.classList.add('dark')
          break
        case 'light':
          this.nextTheme = 'dark'
          document.body.classList.remove('dark')
          break;
      }
    }
  },


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
