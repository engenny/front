<template>
  <div class="hello">
    <!--CARDS-->
    <b-container class="bv-cards">
    <b-row>
      <b-col>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Default" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
    <b-container class="bv-cards">
    <b-row>
      <b-col>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Default" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
    <b-container class="bv-cards">
    <b-row>
      <b-col>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card header="Default" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld", 
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bv-cards{
  margin: 2rem auto;
}
h1{
  color: #fff;
  padding-top: 2rem;
}
</style>
