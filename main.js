const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inStock: false,
      inventory: 11,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
      isActive: false,
      activeClass: "active",
      selectedVariant: 2234,

      description: "A pair of warm, fuzzy socks",
      url: "https://www.google.com",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart === 0 ? (this.cart = 0) : (this.cart -= 1);
    },
    updateImage(variant) {
      this.image = variant.image;
      this.selectedVariant = this.variants.find((v) => v.id === variant.id).id;
    },
  },
});
