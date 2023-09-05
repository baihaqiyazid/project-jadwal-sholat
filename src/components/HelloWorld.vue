<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
  </v-carousel>
  <div>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4" lg="3" class="mx-auto">
        <v-card class="mx-auto mt-15 mb-15" max-width="344">
          <v-img :src="card.imageUrl" height="200px" cover></v-img>

          <v-card-title>
            {{ card.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ card.subtitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleCard(index)"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text>
                {{ card.content }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show: false,
      cards: [
        {
          imageUrl: '/quran.jpg',
          title: 'Kewajiban Sholat',
          subtitle: '(QS. Al-Baqarah: 43)',
          show: false,
          content: "Wa aqiimush shalaata wa aatuz zakaata warka'uu ma'ar raaki'iin.Dan dirikanlah sholat, dan keluarkanlah zakat, dan tunduklah rukuk bersama orang-orang yang rukuk.' (QS. Al-Baqarah: 43)."
        },
        {
          imageUrl: '/sholat_card.jpg',
          title: 'Hadist Nabi Muhammad SAW',
          subtitle: '(HR. Imam Bukhari dan Muslim dari Abdurrahman bin Auf)',
          show: false,
          content: "Rasulullah SAW bersabda: 'Islam didirikan di atas lima dasar, yaitu: memberi kesaksian bahwa tiada Tuhan selain Allah dan Nabi Muhammad adalah utusan Allah, mendirikan sholat, menunaikan zakat, berpuasa di bulan Ramadhan, dan melaksanakan ibadah haji ke Baitullah.' (HR. Imam Bukhari dan Muslim dari Abdurrahman bin Auf)."
        },
        {
          imageUrl: '/hikmah_sholat.jpg',
          title: 'Hikmah Sholat',
          subtitle: 'Hikmah Sholat',
          show: false,
          content: "Meningkatkan ketakwaan kita kepada Allah SWT, memberikan ketenangan dalam diri baik lahir maupun batin, mendapatkan kecintaan kepada Allah SWT, mencegah perbuatan keji dan mungkar,sholat akan menyucikan dan membersihkan jiwa."
        },
        // Tambahkan data untuk kartu lainnya di sini
      ],
      items: [
        {
          src: '/caro.jpg',
        },
        {
          src: '/caro2.jpg',
        },
        {
          src: '/caro3.jpg',
        },
      ],
    }
  },
  methods: {
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show; // Mengubah nilai show menjadi kebalikannya
    },
    getJadwal() {
      this.$store.dispatch("fetchList");
    },

    // this.getCity()

   
  },
   mounted() {
      this.getJadwal();
    }
}
</script>