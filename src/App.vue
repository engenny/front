<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="">

          <b-button v-b-toggle.sidebar-variant>Filtros</b-button>
          <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </div>
          </b-sidebar>

        <img src="@/assets/logo.png" class="img-fluid"/>
        <b-navbar-brand href="#">Oi, tiririca</b-navbar-brand>
        
        <b-avatar src="https://placekitten.com/300/300"></b-avatar>
      </b-navbar>

    </div>
    <!--router-view CHAMA VIEWS-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #2B2A69;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 5rem;
}

#nav {
  background-color: #171C41;
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
