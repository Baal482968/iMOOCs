<template lang="html">
  <div id="header">
    <b-row>
        <b-col>
          <router-link to="/">
            <b-img center
                  src="https://i.imgur.com/6xGSKiP.png"
                  fluid alt="Responsive image"
                  id="pic" 
                  width="400 px"
            />
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/login">
            <b-button>Login</b-button>
          </router-link>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

#pic{
  max-height: 100px;
}
</style>
