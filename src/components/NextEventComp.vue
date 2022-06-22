<template>
  <section id="proxima_charla">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Woman_with_vintage_bike.jpg/768px-Woman_with_vintage_bike.jpg"
            alt="Image"
            class="rounded-0 img-speaker"
          ></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body title="Proxima charla:">
            <b-card-text>
              <h3>Big Data para Noobs</h3>
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
