<template>
  <section class='profile'>
    <div class='profile__info'>
      <picture class='profile__picture'>
        <img class='profile__img' src='../assets/img/octocat.png' />
      </picture>
      <div class='profile__name'>
        <h2 class='profile__heading'> The Octocat </h2>   
        <a class='profile__link' href='#'>@octocat</a>
        <div class='profile__date'>Joined 25 Jan 2011</div>
      </div>
    </div>
    <div class='profile__description'>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
    </div>

    <div class='profile__stats'>
      <div class='profile__repos'>
        <div class='profile__statText'>Repos</div>
        <div class='profile__statNum'>8</div>
      </div>
      <div class='profile__followers'>
        <div class='profile__statText'>Followers</div>
        <div class='profile__statNum'>3938</div>
      </div>
      <div class='profile__following'>
        <div class='profile__statText'>Following</div>
        <div class='profile__statNum'>9</div>
      </div>
    </div>

    <div class='profile__links'>
      <div class='profile__linkDetail'>
        <picture>
          <img class='profile__linkImg' 
            src='../assets/img/icon-location.svg' alt='location'/>
        </picture>
        <div class='profile__linkInfo'>San Francisco</div>
        
      </div>
      <div class='profile__linkDetail'>
        <picture>
          <img class='profile__linkImg' 
            src='../assets/img/icon-website.svg' alt='website'/>
        </picture>
        <div class='profile__linkInfo'>
          <a href='#'>https://github.blog</a>
        </div>

      </div>
      <div class='profile__linkDetail'>
        <picture>
          <img class='profile__linkImg' 
            src='../assets/img/icon-twitter.svg' alt='twitter'/>
        </picture>
        <div class='profile__linkInfo'>Not Available</div>

      </div>
      <div class='profile__linkDetail'>
        <picture>
          <img class='profile__linkImg' 
            src='../assets/img/icon-company.svg' alt='work'/>
        </picture>
        <div class='profile__linkInfo'>@github</div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GithubProfile',
}
</script>

<style>
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

  .profile__links {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacer-lg);
  }


  .profile__linkDetail {
    display: flex;
    flex-direction: row;
    margin-top: var(--spacer-xs);
  }

  .profile__linkImg {
    width: var(--spacer-lg); 
    height: var(--spacer-lg); 
    object-fit: contain;
  }
  .profile__linkInfo {
    margin-left: var(--spacer-md);
  }

  .profile__linkInfo > a {
    text-decoration: none;
    color: var(--primary-font-clr);
  }

</style>
