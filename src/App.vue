<template>
  <div id="app">
    
    <div id="nav">
      <b-row>
      <b-navbar toggleable="lg">       
          <b-navbar-nav class="mr-auto">
            <img src="@/assets/logo.png" class="img-fluid"/>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em><b-avatar src="https://placekitten.com/300/300"></b-avatar></em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>     
      </b-navbar>
      </b-row>
    </div>
    
    <!--router-view CHAMA VIEWS-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #7D7CE3;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 5rem;
}

#nav {
  background-color: #3F4584;
  .navbar{
    padding: 1.5rem 2rem;
  }
  .img-fluid{
    padding: 0 1rem;
  }
  a {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    color: #C95780;
  }
}
</style>
