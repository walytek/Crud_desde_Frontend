console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
descripcion:"",
nombre:"",
tipo_vino:"",
stock:0,
precio:0,
url:'https://maxoleodev.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data)
this.id=data.id
this.descripcion=data.descripcion,
this.nombre = data.nombre,
this.tipo_vino=data.tipo_vino,
this.stock=data.stock
this.precio=data.precio
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
descripcion:this.descripcion,    
nombre:this.nombre,
precio: this.precio,
stock: this.stock,
tipo_vino:this.tipo_vino
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./productoss.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')