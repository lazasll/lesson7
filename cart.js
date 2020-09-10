Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `<div class="cart-block" v-show="visibility">
                 <p v-if="!cartItems.length">Cart is empty</p>
                 <cart-item 
                 v-for="product of cartItems"  
                 :key="product.id_product"
                 :img="img"
                 :cart-item="product"></cart-item>
             </div>`
 });
 Vue.component('cart-item', {
     props: ['cartItem', 'img'],
     template: `<div class="cart-item" >
                     <div class="product-bio">
                         <img :src="img" alt="Some image">
                         <div class="product-desc">
                             <p class="product-title">{{cartItem.product_name}}</p>
                             <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                             <p class="product-single-price">$ {{cartItem.price}} each</p>
                         </div>
                     </div>
                     <div class="right-block">
                         <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                         <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                     </div>
                 </div>`
 });

 // catalog.json
[
    { "product_name": "Мышка", "price": 100 },
    { "product_name": "Клавиатура", "price": 200 },
    { "product_name": "Колонки", "price": 130 },
    { "product_name": "Наушники", "price": 150 },
    { "product_name": "Ноутбук", "price": 400 },
    { "product_name": "Коврик", "price": 150 },
    { "product_name": "Кресло", "price": 160 }
  ]

  // cart.json
[]