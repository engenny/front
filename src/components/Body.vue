<template>
  <div class="hello">
    <!--CARDS-->
    <b-container class="bv-cards">
    <b-row>
      <b-col>
        <b-card header="Valor Total das Multas" class="text-center">
          <b-card-text><div class="name">
            {{
            totalKm[0].finesTotalAmount +
            totalKm[1].finesTotalAmount +
            totalKm[2].finesTotalAmount +
            totalKm[3].finesTotalAmount +
            totalKm[4].finesTotalAmount +
            totalKm[5].finesTotalAmount +
            totalKm[6].finesTotalAmount +
            totalKm[7].finesTotalAmount +
            totalKm[8].finesTotalAmount +
            totalKm[9].finesTotalAmount +
            totalKm[10].finesTotalAmount +
            totalKm[11].finesTotalAmount +
            totalKm[12].finesTotalAmount +
            totalKm[13].finesTotalAmount +
            totalKm[14].finesTotalAmount +
            totalKm[15].finesTotalAmount +
            totalKm[16].finesTotalAmount +
            totalKm[17].finesTotalAmount +
            totalKm[18].finesTotalAmount +
            totalKm[19].finesTotalAmount +
            totalKm[20].finesTotalAmount +
            totalKm[21].finesTotalAmount +
            totalKm[22].finesTotalAmount +
            totalKm[23].finesTotalAmount +
            totalKm[24].finesTotalAmount +
            totalKm[25].finesTotalAmount +
            totalKm[26].finesTotalAmount +
            totalKm[27].finesTotalAmount +
            totalKm[28].finesTotalAmount +
            totalKm[29].finesTotalAmount 
             }}
          </div></b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Total de KM's percorridos" class="text-center">
          <b-card-text>
            {{
              (totalKm[0].finalKm - totalKm[0].initialKm) + 
              (totalKm[1].finalKm - totalKm[1].initialKm) +
              (totalKm[2].finalKm - totalKm[2].initialKm) +
              (totalKm[3].finalKm - totalKm[3].initialKm) +
              (totalKm[4].finalKm - totalKm[4].initialKm) +
              (totalKm[5].finalKm - totalKm[5].initialKm) +
              (totalKm[6].finalKm - totalKm[6].initialKm) +
              (totalKm[7].finalKm - totalKm[7].initialKm) +
              (totalKm[8].finalKm - totalKm[8].initialKm) +
              (totalKm[9].finalKm - totalKm[9].initialKm) +
              (totalKm[10].finalKm - totalKm[10].initialKm) +
              (totalKm[11].finalKm - totalKm[11].initialKm) +
              (totalKm[12].finalKm - totalKm[12].initialKm) +
              (totalKm[13].finalKm - totalKm[13].initialKm) +
              (totalKm[14].finalKm - totalKm[14].initialKm) +
              (totalKm[15].finalKm - totalKm[15].initialKm) +
              (totalKm[16].finalKm - totalKm[16].initialKm) +
              (totalKm[17].finalKm - totalKm[17].initialKm) +
              (totalKm[18].finalKm - totalKm[18].initialKm) +
              (totalKm[19].finalKm - totalKm[19].initialKm) +
              (totalKm[20].finalKm - totalKm[20].initialKm) +
              (totalKm[21].finalKm - totalKm[21].initialKm) +
              (totalKm[22].finalKm - totalKm[22].initialKm) +
              (totalKm[23].finalKm - totalKm[23].initialKm) +
              (totalKm[24].finalKm - totalKm[24].initialKm) +
              (totalKm[25].finalKm - totalKm[25].initialKm) +
              (totalKm[26].finalKm - totalKm[26].initialKm) +
              (totalKm[27].finalKm - totalKm[27].initialKm) +
              (totalKm[28].finalKm - totalKm[28].initialKm) +
              (totalKm[29].finalKm - totalKm[29].initialKm) 
            }}
            </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Eixos" class="text-center">
          <b-card-text>Eixo X = Dias<br>Eixo Y = Quilometragem Total por dia</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
    <b-container>
    <chart/>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
import Chart from './Chart.vue';

export default {
  components: { Chart },
  name: "Body", 
  data() {
     return {
       routes: [],
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
          this.defineRoutes(res.data)
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
.bv-cards{
  margin: 2rem auto;
}
.card.text-center {
	background: #3F4584;
  color: #fff;
}
h1{
  color: #fff;
  padding-top: 2rem;
}
</style>
