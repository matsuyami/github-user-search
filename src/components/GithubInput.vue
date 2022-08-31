<template>
  <div class="githubInput">
    <ThemeSwitcher />
    <form
      class="searchForm"
      @submit.prevent
    >
      <picture class="searchForm__picture">
        <img
          class="searchForm__img"
          src="../assets/img/icon-search.svg"
          alt="search-icon"
        >
      </picture> 
      <input 
        v-model="query" 
        class="searchForm__input" 
        type="text"
        placeholder="Search Github username... "
        name="query"
      >
      <button
        class="searchForm__button"
        @click="getGithubUserData"
      >
        Search
      </button>
      <span
        v-if="isError"
        class="searchForm__error"
      >No results</span>
    </form>
    <GithubProfile :github-profile-data="githubProfileData" />
  </div>
</template>

<script setup>
  import ThemeSwitcher from './ThemeSwitcher.vue'
  import GithubProfile from './GithubProfile.vue'
  import { Octokit } from 'octokit'
  import { ref, reactive } from 'vue'

  const query = ref('') 
  const isError = ref(null)

  const githubProfileData = reactive({
    avatar_url: require('../assets/img/octocat.png'),
    created_at: new Date('January 25, 2021'),
    name: 'The Octocat',
    login: 'octocat',
    bio: 'This profile has no bio available.',
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: 'San Francisco',
    twitter_username: 'Not Available',
    company: '@github',
    blog: 'https://github.blog',
  })

  const getGithubUserData = async () => {
    isError.value = null
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN 
    const octokit = new Octokit({ auth: ACCESS_TOKEN }) 
    try {
      const response = await octokit.request('GET /users/{username}', {
        username: query.value
      })
      Object.assign(githubProfileData, response.data)
      githubProfileData.created_at = new Date(response.data.created_at)
    } catch (error){
        isError.value = error.status === 404
    }
  }
</script>

<style>
  .searchForm{ 
    position: relative; 
  }

  .searchForm__img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.45rem; 
    margin: auto 0;

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
    cursor: pointer;
    color: var(--white);
    font-weight: var(--fw-bold);
    font-size: inherit;
    border: 0;
    top: 0.5rem;
    right: 0.45rem;
  }

  .searchForm__button:hover {
    opacity: 0.5;
  }

  .searchForm__error{
    position: absolute;
    background-color: var(--primary-clr);
    padding-left: 0.3rem;
    color: red;
    top: 1.1rem;
    right: 6rem;
  }

  @media screen and (min-width: 767px){
    .searchForm__img {
      padding-left: 1rem;
    }

    .searchForm__input {
      padding-left: calc(var(--spacer-2xl) + var(--spacer-2xl));
    }
  }
</style>
