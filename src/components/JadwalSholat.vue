<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3">
                <v-autocomplete v-model="selectedItem" :items="items" label="City" hide-no-data
                    solo-inverted></v-autocomplete>
                <v-btn color="primary" @click="getSelectedValue">Submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <div>
        <v-row>
            <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="5" lg="2" class="mx-auto">
                <v-card class="mx-auto mt-15 mb-15" max-width="350">
                    <v-img :src="card.imageUrl" height="200px" cover></v-img>

                    <v-card-title>
                        {{ card.title }}
                    </v-card-title>

                    <v-card-subtitle>
                        {{ card.subtitle }}
                    </v-card-subtitle>

                    <v-card-actions>
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
    name: "JadwalSholat",
    async mounted() {
        await this.$store.dispatch("fetchList");
        this.updateCards();
    },
    data() {
        return {
            items: this.$store.state.city,
            selectedItem: 'KOTA JAKARTA',
            cards: [
            ],
        }
    },
    watch: {
    // Mengawasi perubahan pada listDariStore dan memanggil updateCards saat perubahan terdeteksi
    listDariStore: "updateCards",
  },
    methods: {
        updateCards() {
            this.cards = [
                {
                    imageUrl: 'src/assets/quran.jpg',
                    title: `Shubuh ${this.$store.state.list[1].subuh}`,
                    subtitle: 'Keutamaan Sholat Shubuh',
                    show: false,
                    content: "Rasulullah SAW mendoakan umatnya yang bergegas dalam melaksanakan shalat Subuh, sebagaimana disebutkan dalam suatu hadits, ''Ya Allah berkahilah umatku selama mereka senang bangun Subuh.'' (HR Tirmizi, Abu Daud, Ahmad dan Ibnu Majah)."
                },
                {
                    imageUrl: 'src/assets/quran.jpg',
                    title: `Dzuhur ${this.$store.state.list[1].dzuhur}`,
                    subtitle: 'Keutamaan Sholat Dzuhur',
                    show: false,
                    content: "Terapi Jantung dan melancarkan Pencernaan. Menurut kaidah ilmu kesehatan China, waktu yang paling tepat untuk Terapi Jantung adalah jam 11.00-13.00 Siang sehingga dengan melaksanakan Shalat Zuhur, relaksasi akan tercapai melalui air wudhu sehingga perlahan panas jantung akan kembali normal."
                },
                {
                    imageUrl: 'src/assets/quran.jpg',
                    title: `Ashar ${this.$store.state.list[1].ashar}`,
                    subtitle: 'Keutamaan Sholat Ashar',
                    show: false,
                    content: "Shalat Ashar memiliki keutamaan luar biasa, termasuk masuk surga bagi yang mengerjakannya bersama Shalat Shubuh, perlindungan dari neraka, dan pahala dua kali lipat. Malaikat juga menyaksikannya, dan shalat ini membedakan orang beriman dari munafik. Dengan itu, Shalat Ashar adalah ibadah penting dalam Islam."
                },
                {
                    imageUrl: 'src/assets/quran.jpg',
                    title: `Maghrib ${this.$store.state.list[1].maghrib}`,
                    subtitle: 'Keutamaan Sholat Maghrib',
                    show: false,
                    content: "Shalat Ashar memiliki keutamaan luar biasa, termasuk masuk surga bagi yang mengerjakannya bersama Shalat Shubuh, perlindungan dari neraka, dan pahala dua kali lipat. Malaikat juga menyaksikannya, dan shalat ini membedakan orang beriman dari munafik. Dengan itu, Shalat Ashar adalah ibadah penting dalam Islam."
                },
                {
                    imageUrl: 'src/assets/quran.jpg',
                    title: `Isya ${this.$store.state.list[1].isya}`,
                    subtitle: 'Keutamaan Sholat Isya',
                    show: false,
                    content: "Shalat Ashar memiliki keutamaan luar biasa, termasuk masuk surga bagi yang mengerjakannya bersama Shalat Shubuh, perlindungan dari neraka, dan pahala dua kali lipat. Malaikat juga menyaksikannya, dan shalat ini membedakan orang beriman dari munafik. Dengan itu, Shalat Ashar adalah ibadah penting dalam Islam."
                },
                // Tambahkan data untuk kartu lainnya di sini
            ];
        },
        getJadwal() {
            this.$store.dispatch("fetchList");
        },
        toggleCard(index) {
            this.cards[index].show = !this.cards[index].show; // Mengubah nilai show menjadi kebalikannya
        },
        setLocation(newLocation) {
            this.$store.commit("setLocation", newLocation); // Menggunakan commit untuk mengubah lokasi di dalam store
        },

        getCity() {
            this.$store.dispatch("fetchListCity");
        },
        getSelectedValue() {
            if (this.selectedItem !== null) {
                // Lakukan tindakan dengan item yang dipilih di sini
                console.log('Item yang dipilih:', this.selectedItem);
                this.$store.commit("setLocation", this.selectedItem);
                this.getJadwal();
            }
        },
    },
    computed: {
        listDariStore() {
            return this.$store.state.list;
        },
    },

};
</script>