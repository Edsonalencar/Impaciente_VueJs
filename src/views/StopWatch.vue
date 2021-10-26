<template>
  <div>
    <v-container>
      <v-row class="text-center my-auto">
        <v-col cols="12" class="mt-10 stopWatch">
          <span class="count">{{ hh }}</span>
          <span class="count" id="minute">{{ mm }}</span>
          <span class="count">{{ ss }}</span>
          <span class="count milli" id="millesecund">{{ ms }}</span>
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

  data() {
    return {
      playerIcon: 'mdi-play',
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      cron: null,
    };
  },
  methods: {
    Start() {
      if (this.playerIcon === 'mdi-play') {
        this.playerIcon = 'mdi-pause';

        this.cron = setInterval(() => { this.timer(); }, 10);
      } else {
        this.playerIcon = 'mdi-play';
        clearInterval(this.cron);
        this.$router.push('/timer');
        this.$store.state.time = `${this.hh}:${this.mm}:${this.ss}`;
        this.$store.state.averageTime = this.ss;
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
      }
    },
    timer() {
      this.ms += 1;

      if (this.ms === 100) {
        this.ms = 0;
        this.ss += 1;
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
.count {
  font-size: 8rem;
  color: #09e;
}

.stopWatch span{
  font-family: Georgia, "Times New Roman", Times, serif;
  padding: 1rem;
  color: #09e;
  background: #1e1e1e;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
}

#minute {
  margin-left: .5rem;
  margin-right: .5rem;
}

#millesecund {
  margin-left: .5rem;
}
.margin-button {
  margin-top: 8rem;
}

@media (max-width: 584px) {
  .count {
    font-size: 2rem;
    color: #0099ee;
  }
  .margin-button {
    margin-top: 30vh;
}
}
</style>
