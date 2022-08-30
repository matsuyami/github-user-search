<template>
  <button class="searchForm__button">
    Search
  </button>
</template>

<script>
  export default {
    name: 'SearchButton',
  }
</script>

<style scoped>
  .searchForm__button{
    position: absolute;
    background-color: var(--button-clr);
    padding: var(--spacer-sm) var(--spacer-sm); 
    border-radius: var(--br); 
    color: var(--white);
    font-weight: var(--fw-bold);
    font-size: inherit;
    border: 0;
    top: 0.5rem;
    right: 0.45rem;
  }
</style>
