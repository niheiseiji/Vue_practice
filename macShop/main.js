// Vueインスタンスを生成
var vm = new Vue({
    el: '#app',
    data: {
        // 値を定義する部分（処理を書かない）
        product: 'Macbook Pro',
        image: './assets/img1.jpg',
        price: 248800,
        inStock: 5,
        details: [
            "第9世代の2.6GHz 6コアIntel Core i7プロセッサ",
            "Turbo Boost使用時最大4.5GHz",
            "AMD Radeon Pro 5300M（4GB GDDR6メ‍モ‍リ搭載）",
            "16GB 2,666MHz DDR4メモリ",
            "512GB SSDストレージ¹"
        ],
        monitorSize: "16インチ",
        variants: [
            {
                variantId: 100,
                variantColor: 'gray',
                variantImage: './assets/img1.jpg',
                variantPrice: 248800
            },
            {
                variantId: 200,
                variantColor: "silver",
                variantImage: './assets/img2.jpg',
                variantPrice: 288800
            }
        ],
        totalPrice: 0,
        cart: 0,
    },
    methods: {
        // 関数を定義
        addToCart: function() {
            this.cart += 1
            this.inStock -= 1
            this.totalPrice += this.price
        },
        updateProduct: function(variantImage, variantPrice) {
            this.image = variantImage
            this.price = variantPrice
        },
        sampleMethods: function() {
            return 'sample method'
        }
    },
    computed: {
        // computedはプロパティ
        installmentPayment: function() {
            return Math.floor(this.price / 24)
        },
        sampleComputed: function() {
            return 'sample computed';
        }
    },
    filters: {
        // filtersはtextフォーマット処理を担当
        numberDeli: function(value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
})