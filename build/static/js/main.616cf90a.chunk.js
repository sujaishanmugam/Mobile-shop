(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c.n(n),s=c(25),a=c.n(s),r=(c(49),c(11)),o=(c(50),c(51),c(41)),l=c.n(o),j=c(42),d=c.n(j),h=c(20),b=c(2),u=Object(n.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(b.jsx)(u.Provider,{value:Object(n.useReducer)(t,c),children:i})},m=function(){return Object(n.useContext)(u)},O=c(34),x=(O.a.initializeApp({apiKey:"AIzaSyDfdMsFrw15AdT3QWIn0I0IopMyH5cN2DM",authDomain:"the-mobile-shop-5ed08.firebaseapp.com",projectId:"the-mobile-shop-5ed08",storageBucket:"the-mobile-shop-5ed08.appspot.com",messagingSenderId:"141335843825",appId:"1:141335843825:web:a705822cb4d2a95bdeea50",measurementId:"G-9DDLRXT6X8"}).firestore(),O.a.auth());var _=function(){var e=m(),t=Object(r.a)(e,2),c=t[0],n=c.basket,i=c.user;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsx)("div",{className:"header__brand",children:Object(b.jsxs)("h2",{children:["The Mobile Shop ",Object(b.jsx)("span",{children:"."})]})})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{className:"header__searchInput",type:"text"}),Object(b.jsx)(l.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(h.b,{to:!i&&"/login",style:{textDecoration:"none"},children:Object(b.jsxs)("div",{onClick:function(){i&&x.signOut()},className:"header__option",children:[Object(b.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",i?i.email:"Guest"]}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:i?"Sign Out":"Sign In"})]})}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(d.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(61),c(62);var g=function(e){var t=e.id,c=e.title,n=e.image,i=e.price,s=e.rating,a=m(),o=Object(r.a)(a,2),l=o[0].basket,j=o[1];return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"\u20b9"}),Object(b.jsx)("strong",{children:i})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:n,alt:""}),Object(b.jsx)("button",{onClick:function(){(null===l||void 0===l?void 0:l.length)<10?j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i,rating:s}}):alert("Only ten items can be added to basket")},children:"Add to Basket"})]})};var v=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0];return t[1],Object(n.useEffect)((function(){fetch("http://localhost:3000/products")}),[c]),Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home__container",children:[Object(b.jsx)("img",{className:"home__image",src:"https://llounge.in/wp-content/uploads/2020/11/IN_r1307_r1306_Marketing_Page_L_FFH-1500_01._CB419228453_.jpg",alt:"Banner"}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(g,{id:"1",title:"New Apple iPhone 12 (128GB) - White",price:81900,image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",rating:5}),Object(b.jsx)(g,{id:"2",title:"New Apple iPhone 12 pro (128GB) - Gold",price:58e3,image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1605202304/Croma%20Assets/Communication/Mobiles/Images/8952382717982.png",rating:3})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(g,{id:"3",title:"New Apple iPhone SE (64GB) - White",price:25e3,image:"https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1605338373/Croma%20Assets/Communication/Mobiles/Images/8943053111326.png",rating:4}),Object(b.jsx)(g,{id:"4",title:"New Apple iPhone 11 (128GB) - Jet Black",price:38e3,image:"https://t.infibeam.com/img/othe/0441617/f7/50/iphone11b2.jpg.47e0aef750.989x250x250.jpg",rating:2}),Object(b.jsx)(g,{id:"5",title:"New Apple iPhone XR (128GB) - Blue",price:4e4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwDCKm9TcOiSOh11oA3kXboV1LGyNnwWWTw&usqp=CAU",rating:3})]}),Object(b.jsx)("div",{className:"home__row",children:Object(b.jsx)(g,{id:"6",title:"iPhone 12",price:79e3,image:"https://finc.b-cdn.net/itech/products/iphone-12a.jpg?width=600",rating:4})})]})})};c(63),c(64);var f=function(e){var t=e.id,c=e.image,n=e.title,i=e.price,s=e.rating,a=m(),o=Object(r.a)(a,2),l=o[0].subTotal,j=o[1];return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"\u20b9"}),Object(b.jsx)("strong",{children:i})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(b.jsx)("button",{className:"checkoutProduct__basket",onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){(null===l||void 0===l?void 0:l.length)<1?j({type:"ADD_TO_SUBTOTAL",item:{id:t,title:n,image:c,price:i,rating:s}}):alert("Each person can only check out one device at a time.")},children:"Add to Subtotal"})]})]})},N=(c(65),c(28)),y=c.n(N),k=c(30),S=c(17),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},A=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(S.a)(Object(S.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(S.a)(Object(S.a)({},e),{},{basket:[]});case"ADD_TO_SUBTOTAL":return Object(S.a)(Object(S.a)({},e),{},{subTotal:[].concat(Object(k.a)(e.subTotal),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(k.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(S.a)(Object(S.a)({},e),{},{basket:n});case"SET_USER":return Object(S.a)(Object(S.a)({},e),{},{user:t.user});default:return e}},C=c(10);var w=function(){var e,t=Object(C.f)(),c=m(),n=Object(r.a)(c,1)[0].subTotal;return Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(y.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/G/02/img15/SeptEye19/desktop/iphone11pro1._CB436763248_.jpg",alt:""}),Object(b.jsxs)("p",{children:["Subtotal (",null===n||void 0===n?void 0:n.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:(e=n,null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(b.jsx)("button",{onClick:function(e){return t.push("/payment")},children:"Proceed to Checkout"})]})};var E=function(){var e=m(),t=Object(r.a)(e,1)[0],c=t.basket,n=t.user;return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:"https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp-hero-banner-ios-update.image.large_2x.jpg",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(b.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),c.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(w,{})})]})},B=(c(67),c(29));var I=function(){var e=m(),t=Object(r.a)(e,2),c=t[0],n=c.subTotal,i=c.user;return t[1],Object(b.jsx)("div",{className:"payment",children:Object(b.jsxs)("div",{className:"payment__container",children:[Object(b.jsxs)("h1",{children:["Checkout (",Object(b.jsxs)(h.b,{to:"/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Delivery Address"})}),Object(b.jsxs)("div",{className:"payment__address",children:[Object(b.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(b.jsx)("p",{children:"NO 40 Marina beach"}),Object(b.jsx)("p",{children:"Chennai,India"})]})]}),Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Review Items and Delivery"})}),Object(b.jsx)("div",{className:"payment__items",children:n.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(b.jsx)("div",{className:"payment__section"}),Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Payment Method"})}),Object(b.jsx)("div",{className:"payment__details",children:Object(b.jsxs)("form",{children:[Object(b.jsx)(B.CardElement,{}),Object(b.jsxs)("div",{className:"payment__priceContainer",children:[Object(b.jsx)(y.a,{renderText:function(e){return Object(b.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:T(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(b.jsx)("button",{children:"Buy Now"})]})]})})]})})};c(68);var P=function(){var e=Object(C.f)(),t=Object(n.useState)(""),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),l=o[0],j=o[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(b.jsxs)("h2",{className:"login__brand",children:["The Mobile Shop ",Object(b.jsx)("span",{children:"."})]})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(i,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton ",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree to the Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(i,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){alert(e.message)}))},className:"login__registerButton",children:"Create your The mobile shop account"})]})]})},D=c(43),M=Object(D.a)("pk_test_51IkP0SSEqTd6aS60ul6xQlbHAsW36wbBN83qJ7jZNhx8vdT7u2W9s6Nly8I9GyyQUxrJQgU4fxnWNaiADfVcSWcX00ElhTWJUS");var R=function(){var e=m(),t=Object(r.a)(e,2),c=t[0].user,i=t[1];return Object(n.useEffect)((function(){x.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),i(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{path:"/login",children:Object(b.jsx)(P,{})}),c?Object(b.jsxs)(C.a,{path:"/checkout",children:[Object(b.jsx)(_,{}),Object(b.jsx)(E,{})]}):Object(b.jsx)(P,{}),Object(b.jsxs)(C.a,{path:"/payment",children:[Object(b.jsx)(_,{}),Object(b.jsx)(B.Elements,{stripe:M,children:Object(b.jsx)(I,{})})]}),Object(b.jsxs)(C.a,{path:"/",children:[Object(b.jsx)(_,{}),Object(b.jsx)(v,{})]})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{initialState:{basket:[],subTotal:[],user:null},reducer:A,children:Object(b.jsx)(R,{})})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.616cf90a.chunk.js.map