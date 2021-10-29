<template>
  <div>
    <v-container>
      <v-row class="text-center my-auto">
        <v-col cols="12" class="mt-10 ml-n3">
          <ul class="stopWatch">
            <li>
              <span>{{ hh }}</span>
              <div>hora(s)</div>
            </li>
            <li>
              <span>{{ mm }}</span>
              <div>min.</div>
            </li>
            <li>
              <span>{{ ss }}</span>
              <div>sec.</div>
            </li>
            <li>
              <span>{{ ms }}</span>
              <div>mil sec.</div>
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <v-btn
            class="margin-button"
            fab
            dark
            x-large
            color="#09e"
            elevation="1"
            @click="Start"
            outlined
          >
            <v-icon dark size="3.5rem">
              {{ playerIcon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',

  data: () => ({
      playerIcon: 'mdi-play',
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      time: 0,
      cron: null,
    }),

  methods: {
    Start() {
      if (this.playerIcon === 'mdi-play') {
        this.playerIcon = 'mdi-pause';

        this.cron = setInterval(() => { this.timer(); }, 10);
      } else {
        if (this.$store.state.tempoMedio != 0){
          this.playerIcon = 'mdi-play';
          clearInterval(this.cron);
          this.$router.push('/timer');
          this.$store.state.time = `${this.hh}:${this.mm}:${this.ss}`;
          this.hh = 0;
          this.mm = 0;
          this.ss = 0;
          this.ms = 0;
        }
      }
    },
    timer() {
      this.ms += 1;

      if (this.ms === 100) {
        this.ms = 0;
        this.ss += 1;
      }

      if ((this.ss === 15) && (this.ms === 0)) {
        this.$store.state.tempoMedio += 0.25;
        console.log(this.$store.state.tempoMedio)
      }

      if ((this.ss === 30) && (this.ms === 0)) {
        this.$store.state.tempoMedio += 0.25;
        console.log(this.$store.state.tempoMedio)
      }

      if ((this.ss === 45) && (this.ms === 0)) {
        this.$store.state.tempoMedio += 0.25;
        console.log(this.$store.state.tempoMedio)
      }

      if ((this.ss === 59) && (this.ms === 0)) {
        this.$store.state.tempoMedio += 0.25;
        console.log(this.$store.state.tempoMedio)
      }

      if (this.ss === 59) {
        this.ss = 0;
        this.mm += 1;
      }

      if (this.mm === 59) {
        this.mm = 0;
        this.hh += 0;
      }
    },
  },
});
</script>
<style>
li {
  list-style: none;
}

.stopWatch {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 10rem));
  justify-content: center;
  gap: 10px;
}

.stopWatch li {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  padding: 1rem;
  color: #09e;
  background: #1e1e1e;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.stopWatch li span {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 4rem;
}

.margin-button {
  margin-top: 8rem;
}

@media (max-width: 716px) {
  .stopWatch {
    grid-template-columns: repeat(auto-fit, minmax(2rem, 8rem));
  }
}

@media (max-width: 588px) {
  .stopWatch {
    grid-template-columns: repeat(auto-fit, minmax(2rem, 6rem));
  }
}

@media (max-width: 462px) {
  .stopWatch {
    grid-template-columns: repeat(auto-fit, minmax(2rem, 4.5rem));
  }
  .stopWatch li span {
    font-size: 2.5rem;
  }
  .stopWatch li {
    font-size: .6rem;
  }
}

@media (max-width: 365px) {
  .stopWatch {
    grid-template-columns: repeat(auto-fit, minmax(2rem, 7rem));
  }
}
</style>
