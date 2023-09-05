import { createStore } from 'vuex'; // Mengimpor createStore dari Vue 3
import axios from 'axios'

const store = createStore({
  state() {
    return {
      list: [],
      listCity: [],
      city: [
        "KOTA BANDA ACEH",
        "KOTA LANGSA",
        "KOTA LHOKSEUMAWE",
        "KOTA SABANG",
        "KOTA SUBULUSSALAM",
        "KOTA BINJAI",
        "KOTA GUNUNGSITOLI",
        "KOTA MEDAN",
        "KOTA PADANGSIDEMPUAN",
        "KOTA PEMATANGSIANTAR",
        "KOTA SIBOLGA",
        "KOTA TANJUNGBALAI",
        "KOTA TEBING TINGGI",
        "KOTA BUKITTINGGI",
        "KOTA PADANG",
        "KOTA PADANGPANJANG",
        "KOTA PARIAMAN",
        "KOTA PAYAKUMBUH",
        "KOTA SAWAHLUNTO",
        "KOTA SOLOK",
        "KOTA DUMAI",
        "KOTA PEKANBARU",
        "KOTA BATAM",
        "KOTA TANJUNG PINANG",
        "KOTA JAMBI",
        "KOTA SUNGAI PENUH",
        "KOTA BENGKULU",
        "KOTA LUBUKLINGGAU",
        "KOTA PAGAR ALAM",
        "KOTA PALEMBANG",
        "KOTA PRABUMULIH",
        "KOTA PANGKAL PINANG",
        "KOTA BANDAR LAMPUNG",
        "KOTA METRO",
        "KOTA CILEGON",
        "KOTA SERANG",
        "KOTA TANGERANG",
        "KOTA TANGERANG SELATAN",
        "KOTA BANDUNG",
        "KOTA BANJAR",
        "KOTA BEKASI",
        "KOTA BOGOR",
        "KOTA CIMAHI",
        "KOTA CIREBON",
        "KOTA DEPOK",
        "KOTA SUKABUMI",
        "KOTA TASIKMALAYA",
        "KOTA JAKARTA",
        "KOTA MAGELANG",
        "KOTA PEKALONGAN",
        "KOTA SALATIGA",
        "KOTA SEMARANG",
        "KOTA SURAKARTA",
        "KOTA TEGAL",
        "KOTA YOGYAKARTA",
        "KOTA BATU",
        "KOTA BLITAR",
        "KOTA KEDIRI",
        "KOTA MADIUN",
        "KOTA MALANG",
        "KOTA MOJOKERTO",
        "KOTA PASURUAN",
        "KOTA PROBOLINGGO",
        "KOTA SURABAYA",
        "KOTA DENPASAR",
        "KOTA BIMA",
        "KOTA MATARAM",
        "KOTA KUPANG",
        "KOTA PONTIANAK",
        "KOTA SINGKAWANG",
        "KOTA BANJARBARU",
        "KOTA BANJARMASIN",
        "KOTA PALANGKARAYA",
        "KOTA BALIKPAPAN",
        "KOTA BONTANG",
        "KOTA SAMARINDA",
        "KOTA TARAKAN",
        "KOTA GORONTALO",
        "KOTA MAKASSAR",
        "KOTA PALOPO",
        "KOTA PAREPARE",
        "KOTA BAU-BAU",
        "KOTA KENDARI",
        "KOTA PALU",
        "KOTA BITUNG",
        "KOTA KOTAMOBAGU",
        "KOTA MANADO",
        "KOTA TOMOHON",
        "KOTA AMBON",
        "KOTA TUAL",
        "KOTA TERNATE",
        "KOTA TIDORE KEPULAUAN",
        "KOTA SOFIFI",
        "KOTA JAYAPURA",
        "KOTA SORONG"
      ]
    };
  },
  mutations: {
    setList(state, param) {
      state.list = param;
    },
    setListCity(state, param) {
        state.listCity = param;
      },
    setLocation(state, newLocation) {
        state.location = newLocation; // Menambahkan mutation untuk mengubah lokasi
      },
  },
  actions: {
    async fetchList(context) { // Gunakan "context" alih-alih "store"
      try {
        const today = new Date(); // Dapatkan tanggal saat ini
        const year = today.getFullYear(); // Dapatkan tahun saat ini
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Dapatkan bulan saat ini dalam format 2 digit
        const day = String(today.getDate()).padStart(2, '0'); // Dapatkan hari saat ini dalam format 2 digit
        var cityId = '';

        var apiUrl = `https://api.myquran.com/v1/sholat/jadwal/1301/${year}/${month}/${day}`;
        if (context.state.location != null) {
            const searchIdCity = `https://api.myquran.com/v1/sholat/kota/cari/${context.state.location}`;
            
            const responseCity =  await axios.get(searchIdCity).then((response) => {
                cityId = response.data.data[0].id;
        
            }
               
            );
           

            apiUrl = `https://api.myquran.com/v1/sholat/jadwal/${cityId}/${year}/${month}/${day}`;
        } 

        var response = await axios.get(apiUrl, {
        });
        console.log("response:", response.data.data.jadwal);
        context.commit("setList", [
            context.state.list,
            response.data.data.jadwal,
        ]);
        console.log("list:",  context.state.list);
        console.log("list:",  context.state.listCity);
        console.log("list subuh:", context.state.list[1].subuh);
      } catch (error) {
        alert(error);
      }
    },
    async fetchListCity(context) {
        try {
          const apiUrl = `https://api.myquran.com/v1/sholat/kota/semua`;
      
          const response = await axios.get(apiUrl);
          const listCity = response.data
          .map(item => item.lokasi)
          .filter(city => city.startsWith('KOTA '));
        
          context.commit("setListCity", listCity); // Gunakan mutation "setListCity" untuk mengisi state
        } catch (error) {
          alert(error);
        }
      },
  },
});

export default store;