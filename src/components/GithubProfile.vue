<template>
  <section class="profile">
    <div class="profile__info">
      <picture class="profile__picture">
        <img
          class="profile__img"
          :src="props.githubProfileData.avatar_url"
          alt="github-profile-img"
        >
      </picture>
      <div class="profile__name">
        <h1 class="profile__heading">
          {{ props.githubProfileData.name }}
        </h1>   
        <a
          class="profile__link" 
          :href="'https://github.com/' + props.githubProfileData.login"
        >
          @{{ props.githubProfileData.login }}
        </a>
        <div class="profile__date">
          Joined 
          {{ props.githubProfileData.created_at.getDate() }}
          {{ props.githubProfileData.created_at
            .toLocaleString('default', {'month': 'short'})
          }}
          {{ props.githubProfileData.created_at.getFullYear() }} 
        </div>
      </div>
    </div>
    <div class="profile__description">
      {{ showUserBio }}
    </div>

    <div class="profile__stats">
      <div class="profile__repos">
        <div class="profile__statText">
          Repos
        </div>
        <div class="profile__statNum">
          {{ props.githubProfileData.public_repos }}
        </div>
      </div>
      <div class="profile__followers">
        <div class="profile__statText">
          Followers
        </div>
        <div class="profile__statNum">
          {{ props.githubProfileData.followers }}
        </div>
      </div>
      <div class="profile__following">
        <div class="profile__statText">
          Following
        </div>
        <div class="profile__statNum">
          {{ props.githubProfileData.following }}
        </div>
      </div>
    </div>

    <div class="profile__userInfo">
      <GithubProfileDetail 
        :githubUserInfo="props.githubProfileData.location"
        filename="icon-location.svg"
        alt="location"
      />
      <GithubProfileDetail 
        :githubUserInfo="props.githubProfileData.blog"
        filename="icon-website.svg"
        :link="props.githubProfileData.blog"
        alt="blog"
      />
      <GithubProfileDetail 
        :githubUserInfo="props.githubProfileData.twitter_username"
        filename="icon-twitter.svg"
        alt="twitter"
      />
      <GithubProfileDetail 
        :githubUserInfo="props.githubProfileData.company"
        filename="icon-company.svg"
        alt="company"
      />
    </div>
  </section>
</template>

<script setup>
  import {computed, defineProps } from 'vue'
  import GithubProfileDetail from './GithubProfileDetail.vue'

  const props = defineProps({
    githubProfileData : {
      type: Object,
      required: true
    }
  })

  const showUserBio = computed(() => props.githubProfileData.bio || 'This profile has no bio available.')
    

</script>

<style scoped>
  .profile {
    width: 100%;
    background-color: var(--primary-clr);
    border-radius: var(--br);
    box-shadow: var(--box-shadow);
    padding: var(--spacer-xl) var(--spacer-md);
    margin-top: var(--spacer-lg);
  }

  .profile__info {
    display: flex;
  }

  .profile__name {
    display: flex;
    flex-direction: column;
    margin-left: var(--spacer-lg);   
  }
  
  .profile__img {
    max-width: 4.375rem;
    border-radius: 50%; 
    object-fit: cover;
  }

  .profile__heading {
    font-size: 1rem;
    color: var(--secondary-font-clr);
  }

  .profile__link {
    color: var(--button-clr);
  }

  .profile__description {
    font-size: var(--sm-fs);
    margin-top: var(--spacer-2xl);
  }

  .profile__stats {
    display: flex;
    justify-content: space-evenly;
    padding: var(--spacer-lg) var(--spacer-md); 
    background-color: var(--bg-clr);
    border-radius: var(--br);
    margin-top: var(--spacer-xl);
  }

  .profile__statText {
    font-size: var(--xs-fs); 
   }

  .profile__statNum {
    color: var(--secondary-font-clr);
    font-weight: var(--fw-bold);
    text-align: center;
    margin-top: var(--spacer-md);
  }

  .profile__userInfo {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacer-lg);
  }

  @media screen and (min-width: 767px){
    .profile {
      padding: var(--spacer-2xl) var(--spacer-2xl);
    }

    .profile__name {
      margin-left: var(--spacer-2xl);
    }

    .profile__heading{ 
      font-size: var(--h1-fs); 
    }
    
    .profile__img{
      max-width: 7.3125rem;
    }

    .profile__userInfo {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 40px 40px;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1024px){
    .profile__name {
      display: grid;
      grid-template-columns: 1fr 1.8fr;
      grid-template-rows: repeat(2, fit-content(100%));
      width: 100%;
    }

    .profile__heading {
      order: 1;
    }

    .profile__date {
      display: flex;
      align-items: center;
      justify-content: flex-end; 
      order: 2;
      max-height: 3rem;
    }

    .profile__link {
      order: 3;
    }

    .profile__description, .profile__stats, .profile__userInfo{
      margin-left: auto;
      max-width: calc(100% - 150px)
    }

    .profile__stats {
      margin-top: var(--spacer-2xl);
    }

    .profile__description {
      margin-top: -2rem;
    }

    .profile__userDetail:nth-last-child(-n + 2) {
      margin-left: var(--spacer-2xl);
    }
  }


</style>
