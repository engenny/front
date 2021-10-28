<template>
  <div class="hello">
    <!--CARDS-->
    <b-container class="bv-cards">
      <b-row>
        <b-col>
          <b-card header="Valor Total das Multas" class="text-center">
            <b-card-text
              ><div class="name">R$ {{ this.totalMultas }}</div></b-card-text
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card header="Total de KM's percorridos" class="text-center">
            <b-card-text> {{ this.totalKm }} km's </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card header="Eixos" class="text-center">
            <b-card-text
              >Eixo X = Dias<br />Eixo Y = Quilometragem Total por
              dia</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <chart />
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import Chart from "./Chart.vue";

export default {
  components: { Chart },
  name: "Body",
  data() {
    return {
      routes: [],
      totalMultas: 0,
      totalKm: 0,
    };
  },
  created() {
    this.getRoutes();
  },
  computed: {
    ...mapGetters("routes", ["totalKm"]),
  },
  methods: {
    ...mapActions("routes", ["defineRoutes"]),
    getRoutes() {
      axios
        .get("https://6050b01f5346090017670430.mockapi.io/api/routes")
        .then((res) => {
          this.defineRoutes(res.data);
          let data = [];
          data = res.data;

          data.map((element) => {
            this.totalMultas = this.totalMultas + element.finesTotalAmount;
            this.totalKm = this.totalKm + (element.finalKm - element.initialKm);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bv-cards {
  margin: 2rem auto;
}
.card.text-center {
  background: #3f4584;
  color: #fff;
}
h1 {
  color: #fff;
  padding-top: 2rem;
}
</style>
