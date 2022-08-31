<template>
  <div class="profile__userDetail">
    <picture>
      <img
        :class="{inactive: isInactive()}"
        class="profile__userInfoImg" 
        :src="require(`../assets/img/${props.filename}`)"
        :alt="props.alt"
        :href="'https://' + props.githubUserInfo"
      >
    </picture>
    <div
      :class="{inactive: isInactive()}" 
      class="profile__userDetailInfo"
    >
    <a v-if="linkExists()" :href="'https://' + props.link">{{ showUserInfo }}</a>
    <span v-else> {{showUserInfo}} </span>
    </div>
  </div>
</template>

<script setup>
  import { computed, defineProps } from 'vue'

  const props = defineProps({
    githubUserInfo : {
      type: String,
      required: false
    },

    filename: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: false
    }
    
  })
  
  const linkExists= () => (props.link) ? true : false
  const isInactive = () => (props.githubUserInfo) ? false : true 
  const showUserInfo = computed(() => props.githubUserInfo || 'Not Available' )
</script>

<style scoped>

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
    cursor: pointer;
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
