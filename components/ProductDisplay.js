app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <a :href="url">
          <img :src="image" alt="green shoes" />
        </a>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of stock</p>
        
        <p><b>Shipping</b >: {{ shipping }}</p>
        
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :class="{ active: index === selectedVariant }"
            :style="{ backgroundColor: variant.color }"
        ></div>
        <button
            class="button"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
        >
          <span v-on:click="addToCart">+</span>Add to Cart
          <span v-on:click="removeFromCart">-</span>
        </button>

      </div>
    </div>
    </div>
    `,

  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      isActive: false,
      activeClass: "active",

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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },

  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      return this.premium ? "Free" : 2.99;
    },
  },
});
