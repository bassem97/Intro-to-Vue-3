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
            <h1>{{ product }}</h1>
            <p v-if="inventory === 0">Out of stock</p>
            <p v-else-if="inventory <= 10 ">Almost sold out!</p>
            <p v-else>In Stock</p>
            <p v-show="onSale">On Sale</p>
            
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div
              v-for="variant in variants"
              :key="variant.id"
              @mouseover="updateImage(variant)"
              class="color-circle"
              :class="{ active: variant.id === selectedVariant }"
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

            <div v-for="size in sizes">{{ size }}</div>
          </div>
        </div>
      </div>
    `,

  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      image: "./assets/images/socks_green.jpg",
      inStock: true,
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
    updateImage(variant) {
      this.image = variant.image;
      this.selectedVariant = this.variants.find((v) => v.id === variant.id).id;
    },
  },
});
