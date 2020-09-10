const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        showCart: false,
        userSearch: '',
        imgCart: 'https://placehold.it/50x100',
        filtered: [],
        cartItems: [],
        products: [],
        imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                    } else {
                        let prod = Object.assign({quantity: 1}, product);
                        this.cartItems.push(prod);
                    }
                    }
                })
        },
        remove(product){
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result){
                        if(product.quantity > 1){
                            product.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    }
                })
        },
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
        makeGETRequest(url, callback) {
            ...
        },
          makePOSTRequest(url, data, callback) {
            let xhr;
        
            if (window.XMLHttpRequest) {
              xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                callback(xhr.responseText);
              }
            }
        
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        
            xhr.send(data);
        },
    },
    mounted(){
        
        this.makeGETRequest(`/catalogData`, (goods) => {
        this.goods = JSON.parse(goods);
        this.filteredGoods = JSON.parse(goods);
        }),
        
    }
})