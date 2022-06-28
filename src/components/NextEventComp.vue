<template>
  <section>
    <h2 class="fw-bolder pb-4 pt-0">PRÓXIMA CHARLA</h2>

    <b-card no-body class="overflow-hidden mx-auto my-4 py-3 bg-warning">
      <b-row no-gutters class="mx-auto">
        <b-col md="3">
          <b-card-img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Maria_Teresa_Rafaela_of_Spain_by_Jacopo_Amigoni.jpg"
            alt="Image"
            class="rounded-0 img-speaker"
          ></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body>
            <b-card-text class="align-middle px-4 my-4">
              <h3 class="fw-bolder">Big Data para Noobs</h3>
              <h4>Rafaela Valdez</h4>
              <h5>
                Data scientist, phD Theoriccal Physics, Carneige Mellon
                University
              </h5>
              <p>
                En esta charla revisaremos las técnicas y tecnologías que hacen
                que sea económico hacer frente a los datos de una escala
                extrema.
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<style scoped>
.img-speaker {
  width: 20vw; /* width of container */
  height: 20vw; /* height of container */
  object-fit: cover;
  border: 0.5em solid black;
}
</style>
