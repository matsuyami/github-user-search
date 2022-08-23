<template>
  <section class='theme'> 
    <h1 class='theme__heading'> devfinder </h1>
    <div class='theme__switcher'>
      <span class='theme__type'>dark</span>
      <picture class='theme__picture'>
        <img class='theme__img' src='../assets/img/icon-moon.svg'/> 
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
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
