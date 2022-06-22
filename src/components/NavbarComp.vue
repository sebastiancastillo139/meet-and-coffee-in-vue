<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="align-middle">
    <b-navbar-brand href="#">
      <img
        src="../assets/icon.svg"
        class="favicon d-inline-block align-middle w-25"
        alt="Kitten"
      />
      <h2 class="d-inline-block align-middle ml-5">Meet & Coffee</h2>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#ubicacion">Ubicación</b-nav-item>
        <b-nav-item href="#">Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>

.favicon{
  color: antiquewhite;
}
</style>