<template lang="">
  <div>
    <v-container class="mx-auto mt-5">
      <v-row class="text-center my-auto">
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="$store.state.time"
            label="Tempo Medio por Pessoa"
            outlined
            dark
            @click="Redirect"
            color="#0099ee"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="quantPersons"
            class="mt-n7"
            label="Pessoas a Frente"
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
            v-model="quantAttendant"
            class="mt-n7"
            label="Quantidade de Atendentes"
            outlined
            placeholder="Insira o numero de atendentes"
            type="number"
            dark
            color="#0099ee"
          ></v-text-field>
        </v-col>
        <v-col cols="12" v-if="this.select" class="ml-n3">
          <ul class="timerOutput">
            <li>
              <span>{{ FunCalc.horas }}</span>
              <div>hora(s)</div>
            </li>
            <li>
              <span>{{ FunCalc.minutos }}</span>
              <div>min.</div>
            </li>
            <li>
              <span>{{ FunCalc.segundos }}</span>
              <div>sec.</div>
            </li>
          </ul>
        </v-col>
        <v-col v-if="this.check" class="Erro">
          <span>Preencha os Campos Acima</span>
        </v-col>
        <v-col v-if="this.TimeCheck" class="timeCheckStyle">
          <span>Veja o Tempo Medio de Espera</span>
        </v-col>
      </v-row>
    </v-container>
     <v-btn
      depressed
      color="#0099ee"
      dark
      :class="`d-block text-center mx-auto mt-${this.margin} mb-8`"
      large
      @click="WaitTimeCalc"
    >
      {{ textBurron }}
    </v-btn>
  </div>
</template>
<script>
import calculo from '../utils/calculo.js';

export default {
  name: 'Timer',
  data: () => ({
      select: false,
      check: false,
      TimeCheck: false,
      quantPersons: "",
      quantAttendant: "",
      textBurron: "Calcular",
      margin: 3,
      FunCalc: null,
	}),
  methods: {
    WaitTimeCalc(){
        if ((this.quantPersons != "") && (this.quantAttendant != "") && (this.$store.state.tempoMedio != 0)) {

          if(this.select){
            this.Redirect();
          }
          this.FunCalc = calculo(Number(this.quantPersons), Number(this.quantAttendant), this.$store.state.tempoMedio);

          this.select = true;
          this.check = false;
          this.margin = 15;
          this.textBurron = "Calcular Novamente";
        } else { 
          if(this.TimeCheck){
            this.Redirect();
          }

          if (this.$store.state.tempoMedio == 0){
            this.TimeCheck = true;
            this.textBurron = "Calcular o Tempo Medio"
            this.margin = 8;
          } else { 
            this.check = true;
            this.margin = 8;
            this.textBurron = "Calcular";
            this.select = false;
          }}
    },

    Redirect(){
      this.$router.push('/');
      this.select = false;
    }
  },
};
</script>

<style>
li {
  list-style: none;
}

.timerOutput {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 5.3rem));
  justify-content: center;
  gap: 10px;
}

.timerOutput li {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  padding: 1rem;
  color: #09e;
  background: #1e1e1e;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.timerOutput li span {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 2.5rem;
}

.Erro span {
  color: rgb(255, 1, 1);
  font-size: 1.2rem;
  background: #222121;
  padding: .6rem;
  border-radius: .5rem;
}

.timeCheckStyle span {
  color: rgb(1, 255, 192);
  font-size: 1.2rem;
  background: #222121;
  padding: .6rem;
  border-radius: .5rem;
}
</style>
