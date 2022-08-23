<template>
  <ThemeSwitcher/>
  <form class='searchForm'>
    <picture class='searchForm__picture'>
      <img class='searchForm__img' src='../assets/img/icon-search.svg'/>
    </picture> 
    <input 
       class='searchForm__input' 
       type='text' 
       placeholder='Search Github username... '
       name='query'
     />
    <button class='searchForm__button'>Search</button>
  </form>
  <GithubProfile/>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'
import GithubProfile from './GithubProfile.vue'

export default {
  name: 'GithubInput',
  components: {
    ThemeSwitcher,
    GithubProfile,
  }
}
</script>

<style>
  .searchForm__img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.45rem; 
    margin: auto 0;

  }
  .searchForm{ 
    position: relative; 
  }
  .searchForm__input{
    width: 100%;
    background-color: var(--primary-clr);
    padding: var(--spacer-lg) var(--spacer-md); 
    border-radius: var(--br);
    border: 1px solid var(--primary-clr);
    box-shadow: var(--box-shadow); 
    color: var(--primary-font-clr);
    padding-left: calc(var(--spacer-md) + var(--spacer-lg));
  }

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
