<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="align-middle" sticky>
    <b-navbar-brand href="#">
      <img
        src="../assets/icon.svg"
        class="favicon d-inline-block align-bottom mx-3" 
        alt="Kitten"
      />
      <h2 class="d-inline-block align-middle">Meet & Coffee</h2>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="my-2 me-0 ms-auto">
        <b-nav-item href="#location">Ubicación</b-nav-item>
        <b-nav-item href="#next_talk">Próxima Charla</b-nav-item>
        <b-nav-item href="#previous_talk">Charlas Anteriores</b-nav-item>
        <b-nav-item href="#contacts">Contacto</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.favicon {
  color: white;
  max-height: fit-content;
  max-width: 3em;
}

</style>
