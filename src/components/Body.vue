<template>
  <div class="hello">
    <!--CARDS-->
    <b-container class="bv-cards">
    <b-row>
      <b-col>
        <b-card header="Multas por dia" class="text-center">
          <b-card-text><div class="name">
            {{totalKm[0].finalKm - totalKm[0].initialKm}}
          </div></b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Total de Km percorridos" class="text-center">
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
        <b-card header="Default" class="text-center">
          <b-card-text>{{totalKm[0].finalKm - totalKm[0].initialKm}}</b-card-text>
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
