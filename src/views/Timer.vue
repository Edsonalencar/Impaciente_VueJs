<template lang="">
  <div>
    <v-container class="mx-auto mt-6">
      <v-row class="text-center my-auto">
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="this.$store.state.time"
            label="Tempo Medio por Pessoa"
            outlined
            dark
            color="#0099ee"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            class="mt-n7"
            label="Pessoas a frente"
            outlined
            placeholder="Ex: 5"
            type="number"
            dark
            color="#0099ee"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            class="mt-n7"
            label="Quantidade de Atendentes"
            outlined
            placeholder="Insira o numero de atendentes"
            type="number"
            dark
            color="#0099ee"
          ></v-text-field>
        </v-col>
        <v-col cols="12" v-if="this.select">
          <span id="timerOutput"></span>
        </v-col>
      </v-row>
    </v-container>
     <v-btn
      depressed
      color="#0099ee"
      dark
      class="d-block text-center mx-auto mt-5"
      large
      @click="this.$store.commit('WaitTimeCalc')"
    >
      Calcular
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Timer',

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      quantPersons: 0,
      quantAttendant: 0,
      waitTime: 0,
      select: false,
    };
  },
};
</script>

<style>
  #timerOutput{
    font-size: 3rem;
    padding: 1rem;
    color: #09e;
    background: #1e1e1e;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    text-align: center;
  }
</style>
