<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Baihaqi</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" exact>Home</v-btn>
      <v-btn text to="/jadwal-sholat">Jadwal Sholat</v-btn>
    </v-app-bar>
    <v-main>
      <!-- Konten utama aplikasi akan ditampilkan di sini -->
      <router-view></router-view>
    </v-main>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :href="getIconLink(icon)"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Untuk mengontrol tampilan/drawer
      icons: [
      'mdi-github',
      
      'mdi-linkedin',
    
    ],
    };
  },
  methods: {
    getIconLink(icon) {
      // Di sini Anda bisa menentukan tautan (URL) untuk setiap ikon
      // Contoh, jika Anda ingin memberikan tautan ke profil GitHub Anda:
      if (icon === 'mdi-github') {
        return 'https://github.com/baihaqiyazid/';
      }
      if (icon === 'mdi-linkedin') {
        return 'https://www.linkedin.com/in/muhammad-yazid-baihaqi/';
      }
      // Tambahkan kondisi serupa untuk ikon lain jika diperlukan
      // Jika tidak, Anda dapat menghapus kondisi ini dan hanya memberikan URL sesuai kebutuhan.
    },
  }
};
</script>