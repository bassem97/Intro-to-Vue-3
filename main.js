const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,

      description: "A pair of warm, fuzzy socks",
      url: "https://www.google.com",
    };
  },
});
