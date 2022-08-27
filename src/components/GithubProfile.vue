<template>
  <section class='profile'>
    <div class='profile__info'>
      <picture class='profile__picture'>
        <img class='profile__img' :src='githubProfileData.avatar_url'/>
      </picture>
      <div class='profile__name'>
        <h2 class='profile__heading'>{{githubProfileData.name}}</h2>   
        <a class='profile__link' 
            :href="'https://github.com/' + githubProfileData.login">
            @{{githubProfileData.login}}
          </a>
        <div class='profile__date'>Joined 
        {{ githubProfileData.created_at.getDate() }}
        {{ githubProfileData.created_at
            .toLocaleString('default', {'month': 'short'})
        }}
        {{ githubProfileData.created_at.getFullYear() }} 
        </div>
      </div>
    </div>
    <div class='profile__description'>
      {{showUserBio(githubProfileData.bio)}}
    </div>

    <div class='profile__stats'>
      <div class='profile__repos'>
        <div class='profile__statText'>Repos</div>
        <div class='profile__statNum'>{{githubProfileData.public_repos}}</div>
      </div>
      <div class='profile__followers'>
        <div class='profile__statText'>Followers</div>
        <div class='profile__statNum'>{{githubProfileData.followers}}</div>
      </div>
      <div class='profile__following'>
        <div class='profile__statText'>Following</div>
        <div class='profile__statNum'>{{githubProfileData.following}}</div>
      </div>
    </div>

    <div class='profile__userInfo'>
      <div class='profile__userDetail'>
        <picture>
          <img :class='{inactive: !isValidUserInfo(githubProfileData.location)}'
                class='profile__userInfoImg' 
            src='../assets/img/icon-location.svg' alt='location'/>
        </picture>
        <div :class='{inactive: !isValidUserInfo(githubProfileData.location)}' 
              class='profile__userDetailInfo'>
                {{showUserInfo(githubProfileData.location)}}
        </div>
        
      </div>
      <div class='profile__userDetail'>
        <picture>
          <img :class='{inactive: !isValidUserInfo(githubProfileData.blog)}'
                class='profile__userInfoImg' 
            src='../assets/img/icon-website.svg' alt='website'/>
        </picture>
        <div :class='{inactive: !isValidUserInfo(githubProfileData.blog)}'
              class='profile__userDetailInfo'>
          <a :href='showUserInfo(githubProfileData.blog)'>{{showUserInfo(githubProfileData.blog)}}</a>
        </div>

      </div>
      <div class='profile__userDetail'>
        <picture>
          <img :class='{inactive: !isValidUserInfo(githubProfileData.twitter_username)}' 
                class='profile__userInfoImg' 
            src='../assets/img/icon-twitter.svg' alt='twitter'/>
        </picture>
        <div :class='{inactive: !isValidUserInfo(githubProfileData.twitter_username)}' 
              class='profile__userDetailInfo'>{{showUserInfo(githubProfileData.twitter_username)}}</div>

      </div>
      <div class='profile__userDetail'>
        <picture>
          <img :class='{inactive: !isValidUserInfo(githubProfileData.company)}' 
                class='profile__userInfoImg' 
            src='../assets/img/icon-company.svg' alt='work'/>
        </picture>
        <div :class='{inactive: !isValidUserInfo(githubProfileData.company)}' 
              class='profile__userDetailInfo'>{{showUserInfo(githubProfileData.company)}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GithubProfile',
  props: ['githubProfileData'],
  methods: {
    isValidUserInfo(info) {
      return (info === null || info === '') ? false : true 
    },
    showUserInfo(info){
      return (this.isValidUserInfo(info)) ? info : 'Not Available'
    },
    showUserBio(bio) {
      return (bio === null) ? 'This profile has no bio available.' : bio;
    },
  }
}
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
    justify-content: space-evenly;
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
    cursor: pointer;
  }

  .profile__userDetail{
    display: flex;
    flex-direction: row;
    margin-top: var(--spacer-xs);
  }

  .profile__userInfoImg{
    width: var(--spacer-lg); 
    height: var(--spacer-lg); 
    object-fit: contain;
  }
  .profile__userDetailInfo{
    margin-left: var(--spacer-md);
  }

  .profile__userDetailInfo > a {
    text-decoration: none;
    color: var(--primary-font-clr);
  }

  .profile__userDetailInfo:not(.inactive) > a:hover {
    text-decoration: underline;
  }


  .inactive{
    opacity: 0.5;
  }


</style>
