<template>
  <main id='app'>
  <Suspense>
    <GithubInput/>
  </Suspense>
  </main>
</template>

<script>
import GithubInput from './components/GithubInput.vue'

export default {
  name: 'App',
  components: {
    GithubInput,
  }
}
</script>

<style>
  @import './assets/styles/main.css';
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff);
  }

  #app {
    width: 100%; 
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: var(--spacer-xl) var(--spacer-lg);
    background-color: var(--bg-clr);
    color: var(--primary-font-clr);
  }
</style>
