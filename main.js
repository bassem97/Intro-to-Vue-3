const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 11,
      onSale: true,

      description: "A pair of warm, fuzzy socks",
      url: "https://www.google.com",
    };
  },
});
