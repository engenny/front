<template>
  <div class="apex-chart">
    <apexchart
      width="100%"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
#apexchartsvuechartxexample text {
  color: #fff;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
import axios from "axios";
import { mapActions } from "vuex";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  name: "chart",
  data: function () {
    return {
      routes: [],
      dadosTotalKm: [],
      chartOptions: {
        colors: ["#3F4584", "#FFFF39", "#C95780"],
        legend: { show: true },
        theme: {
          palette: "palette4",
        },
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            1992, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1998, 1998, 1998,
            1998,
          ],
        },
      },
      series: [
        {
          name: "Quilometragem total por dia",
          data: [
            30, 40, 35, 50, 49, 60, 70, 91, 91, 91, 91, 91, 30, 40, 35, 50, 49,
            60, 70, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
          ],
        },
        {
          name: "Media de quilometros por dia",
          data: [91, 91, 91, 91, 91, 60, 70, 91, 91, 91, 91, 91],
        },
        {
          name: "Valor total das multas por dia",
          data: [91, 91, 91, 91, 91, 60, 70, 91, 91, 91, 91, 91],
        },
      ],
    };
  },
  created() {
    this.getRoutes();
  },
  computed: {
    TotalKm() {
      return this.$store.getters["routes/totalKm"];
    },
  },
  watch: {
    TotalKm(n) {
      this.DadostotalKm = n;
      this.chartOptions = {
        ...this.chartOptions,
        xaxis: {
          categories: [
            this.DadostotalKm[0].date,
            this.DadostotalKm[2].date,
            this.DadostotalKm[4].date,
            this.DadostotalKm[6].date,
            this.DadostotalKm[8].date,
            this.DadostotalKm[10].date,
            this.DadostotalKm[12].date,
            this.DadostotalKm[14].date,
            this.DadostotalKm[16].date,
            this.DadostotalKm[18].date,
            this.DadostotalKm[20].date,
            this.DadostotalKm[22].date,
            this.DadostotalKm[24].date,
            this.DadostotalKm[26].date,
            this.DadostotalKm[28].date,
          ],
        },
        // (this.DadostotalKm[0].finalKm - this.DadostotalKm[0].initialKm) + (this.DadostotalKm[1].finalKm - this.DadostotalKm[1].initialKm) /  2,
        // (this.DadostotalKm[2].finalKm - this.DadostotalKm[2].initialKm) + (this.DadostotalKm[3].finalKm - this.DadostotalKm[3].initialKm) /  2,
        // (this.DadostotalKm[4].finalKm - this.DadostotalKm[4].initialKm) + (this.DadostotalKm[5].finalKm - this.DadostotalKm[5].initialKm) /  2,
        // (this.DadostotalKm[6].finalKm - this.DadostotalKm[6].initialKm) + (this.DadostotalKm[7].finalKm - this.DadostotalKm[7].initialKm) /  2,
        // (this.DadostotalKm[8].finalKm - this.DadostotalKm[8].initialKm) + (this.DadostotalKm[9].finalKm - this.DadostotalKm[9].initialKm) /  2,
        // (this.DadostotalKm[10].finalKm - this.DadostotalKm[10].initialKm) + (this.DadostotalKm[11].finalKm - this.DadostotalKm[11].initialKm) /  2,
        // (this.DadostotalKm[12].finalKm - this.DadostotalKm[12].initialKm) + (this.DadostotalKm[13].finalKm - this.DadostotalKm[13].initialKm) /  2,
        // (this.DadostotalKm[14].finalKm - this.DadostotalKm[14].initialKm) + (this.DadostotalKm[15].finalKm - this.DadostotalKm[15].initialKm) /  2,
        // (this.DadostotalKm[16].finalKm - this.DadostotalKm[16].initialKm) + (this.DadostotalKm[17].finalKm - this.DadostotalKm[17].initialKm) /  2,
        // (this.DadostotalKm[18].finalKm - this.DadostotalKm[18].initialKm) + (this.DadostotalKm[19].finalKm - this.DadostotalKm[19].initialKm) /  2,
        // (this.DadostotalKm[20].finalKm - this.DadostotalKm[20].initialKm) + (this.DadostotalKm[21].finalKm - this.DadostotalKm[21].initialKm) /  2,
      };
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          {
            name: "Quilometragem total por dia",
            data: [
              this.DadostotalKm[0].finalKm -
                this.DadostotalKm[0].initialKm +
                (this.DadostotalKm[1].finalKm - this.DadostotalKm[1].initialKm),
              this.DadostotalKm[2].finalKm -
                this.DadostotalKm[2].initialKm +
                (this.DadostotalKm[3].finalKm - this.DadostotalKm[3].initialKm),
              this.DadostotalKm[4].finalKm -
                this.DadostotalKm[4].initialKm +
                (this.DadostotalKm[5].finalKm - this.DadostotalKm[5].initialKm),
              this.DadostotalKm[6].finalKm -
                this.DadostotalKm[6].initialKm +
                (this.DadostotalKm[7].finalKm - this.DadostotalKm[7].initialKm),
              this.DadostotalKm[8].finalKm -
                this.DadostotalKm[8].initialKm +
                (this.DadostotalKm[9].finalKm - this.DadostotalKm[9].initialKm),
              this.DadostotalKm[10].finalKm -
                this.DadostotalKm[10].initialKm +
                (this.DadostotalKm[11].finalKm -
                  this.DadostotalKm[11].initialKm),
              this.DadostotalKm[12].finalKm -
                this.DadostotalKm[12].initialKm +
                (this.DadostotalKm[13].finalKm -
                  this.DadostotalKm[13].initialKm),
              this.DadostotalKm[14].finalKm -
                this.DadostotalKm[14].initialKm +
                (this.DadostotalKm[15].finalKm -
                  this.DadostotalKm[15].initialKm),
              this.DadostotalKm[16].finalKm -
                this.DadostotalKm[16].initialKm +
                (this.DadostotalKm[17].finalKm -
                  this.DadostotalKm[17].initialKm),
              this.DadostotalKm[18].finalKm -
                this.DadostotalKm[18].initialKm +
                (this.DadostotalKm[19].finalKm -
                  this.DadostotalKm[19].initialKm),
              this.DadostotalKm[20].finalKm -
                this.DadostotalKm[20].initialKm +
                (this.DadostotalKm[21].finalKm -
                  this.DadostotalKm[21].initialKm),
              this.DadostotalKm[22].finalKm -
                this.DadostotalKm[22].initialKm +
                (this.DadostotalKm[23].finalKm -
                  this.DadostotalKm[23].initialKm),
              this.DadostotalKm[24].finalKm -
                this.DadostotalKm[24].initialKm +
                (this.DadostotalKm[25].finalKm -
                  this.DadostotalKm[25].initialKm),
              this.DadostotalKm[26].finalKm -
                this.DadostotalKm[26].initialKm +
                (this.DadostotalKm[27].finalKm -
                  this.DadostotalKm[27].initialKm),
              this.DadostotalKm[28].finalKm -
                this.DadostotalKm[28].initialKm +
                (this.DadostotalKm[29].finalKm -
                  this.DadostotalKm[29].initialKm),
            ],
          },
          {
            name: "Media de quilometros por dia",
            data: [
              this.DadostotalKm[0].finalKm -
                this.DadostotalKm[0].initialKm +
                (this.DadostotalKm[1].finalKm -
                  this.DadostotalKm[1].initialKm) /
                  2,
              this.DadostotalKm[2].finalKm -
                this.DadostotalKm[2].initialKm +
                (this.DadostotalKm[3].finalKm -
                  this.DadostotalKm[3].initialKm) /
                  2,
              this.DadostotalKm[4].finalKm -
                this.DadostotalKm[4].initialKm +
                (this.DadostotalKm[5].finalKm -
                  this.DadostotalKm[5].initialKm) /
                  2,
              this.DadostotalKm[6].finalKm -
                this.DadostotalKm[6].initialKm +
                (this.DadostotalKm[7].finalKm -
                  this.DadostotalKm[7].initialKm) /
                  2,
              this.DadostotalKm[8].finalKm -
                this.DadostotalKm[8].initialKm +
                (this.DadostotalKm[9].finalKm -
                  this.DadostotalKm[9].initialKm) /
                  2,
              this.DadostotalKm[10].finalKm -
                this.DadostotalKm[10].initialKm +
                (this.DadostotalKm[11].finalKm -
                  this.DadostotalKm[11].initialKm) /
                  2,
              this.DadostotalKm[12].finalKm -
                this.DadostotalKm[12].initialKm +
                (this.DadostotalKm[13].finalKm -
                  this.DadostotalKm[13].initialKm) /
                  2,
              this.DadostotalKm[14].finalKm -
                this.DadostotalKm[14].initialKm +
                (this.DadostotalKm[15].finalKm -
                  this.DadostotalKm[15].initialKm) /
                  2,
              this.DadostotalKm[16].finalKm -
                this.DadostotalKm[16].initialKm +
                (this.DadostotalKm[17].finalKm -
                  this.DadostotalKm[17].initialKm) /
                  2,
              this.DadostotalKm[18].finalKm -
                this.DadostotalKm[18].initialKm +
                (this.DadostotalKm[19].finalKm -
                  this.DadostotalKm[19].initialKm) /
                  2,
              this.DadostotalKm[20].finalKm -
                this.DadostotalKm[20].initialKm +
                (this.DadostotalKm[21].finalKm -
                  this.DadostotalKm[21].initialKm) /
                  2,
              this.DadostotalKm[22].finalKm -
                this.DadostotalKm[22].initialKm +
                (this.DadostotalKm[23].finalKm -
                  this.DadostotalKm[23].initialKm) /
                  2,
              this.DadostotalKm[24].finalKm -
                this.DadostotalKm[24].initialKm +
                (this.DadostotalKm[25].finalKm -
                  this.DadostotalKm[25].initialKm) /
                  2,
              this.DadostotalKm[26].finalKm -
                this.DadostotalKm[26].initialKm +
                (this.DadostotalKm[27].finalKm -
                  this.DadostotalKm[27].initialKm) /
                  2,
              this.DadostotalKm[28].finalKm -
                this.DadostotalKm[28].initialKm +
                (this.DadostotalKm[29].finalKm -
                  this.DadostotalKm[29].initialKm) /
                  2,
            ],
          },
          {
            name: "Valor total das multas por dia",
            data: [
              this.DadostotalKm[0].finesTotalAmount +
                this.DadostotalKm[1].finesTotalAmount,
              this.DadostotalKm[2].finesTotalAmount +
                this.DadostotalKm[3].finesTotalAmount,
              this.DadostotalKm[4].finesTotalAmount +
                this.DadostotalKm[5].finesTotalAmount,
              this.DadostotalKm[6].finesTotalAmount +
                this.DadostotalKm[7].finesTotalAmount,
              this.DadostotalKm[8].finesTotalAmount +
                this.DadostotalKm[9].finesTotalAmount,
              this.DadostotalKm[10].finesTotalAmount +
                this.DadostotalKm[11].finesTotalAmount,
              this.DadostotalKm[12].finesTotalAmount +
                this.DadostotalKm[13].finesTotalAmount,
              this.DadostotalKm[14].finesTotalAmount +
                this.DadostotalKm[15].finesTotalAmount,
              this.DadostotalKm[16].finesTotalAmount +
                this.DadostotalKm[17].finesTotalAmount,
              this.DadostotalKm[18].finesTotalAmount +
                this.DadostotalKm[19].finesTotalAmount,
              this.DadostotalKm[20].finesTotalAmount +
                this.DadostotalKm[21].finesTotalAmount,
              this.DadostotalKm[22].finesTotalAmount +
                this.DadostotalKm[23].finesTotalAmount,
              this.DadostotalKm[24].finesTotalAmount +
                this.DadostotalKm[25].finesTotalAmount,
              this.DadostotalKm[26].finesTotalAmount +
                this.DadostotalKm[27].finesTotalAmount,
              this.DadostotalKm[28].finesTotalAmount +
                this.DadostotalKm[29].finesTotalAmount,
            ],
          },
        ],
      };

      // (this.DadostotalKm[0].finesTotalAmount + this.DadostotalKm[1].finesTotalAmount),
      // (this.DadostotalKm[2].finesTotalAmount + this.DadostotalKm[3].finesTotalAmount),
      // (this.DadostotalKm[4].finesTotalAmount + this.DadostotalKm[5].finesTotalAmount),
      // (this.DadostotalKm[6].finesTotalAmount + this.DadostotalKm[7].finesTotalAmount),
      // (this.DadostotalKm[8].finesTotalAmount + this.DadostotalKm[9].finesTotalAmount),
      // (this.DadostotalKm[10].finesTotalAmount + this.DadostotalKm[11].finesTotalAmount),
      // (this.DadostotalKm[12].finesTotalAmount + this.DadostotalKm[13].finesTotalAmount),
      // (this.DadostotalKm[14].finesTotalAmount + this.DadostotalKm[15].finesTotalAmount),
    },
  },
  methods: {
    ...mapActions("routes", ["defineRoutes"]),
    getRoutes() {
      axios
        .get("https://6050b01f5346090017670430.mockapi.io/api/routes")
        .then((res) => {
          this.defineRoutes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
