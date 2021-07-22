const app = new Vue({
    el:"#app",
    data:{
        nombre:"",
        numero: "",
        opcion:"",
        pais:["Estados Unidos", "Colombia"],
        cualBandera:["https://res.cloudinary.com/msolutionstech/image/upload/v1626934262/colombia_jy4iln.png","https://res.cloudinary.com/msolutionstech/image/upload/v1626934263/estados_u_sthqjm.png"],
        actual: false,
        bandera: true,
        cambiar:false
    },


    methods:{
        cambiar__pais(){
            this.bandera = !this.bandera
            this.actual = !this.actual
            this.cambiar = !this.cambiar
        },

        toggleVentana(){
            this.cambiar = !this.cambiar
        }
    },

    computed:{
        telefono(){
            if(this.bandera){
                return "+57" + this.numero
            } return "+1" + this.numero
        },

        ventana(){
            if(this.cambiar){
                return "ventana"
            } return "ventana ventana__none"
        },

        cambiar__bandera(){
            if(this.actual == true){
                return 1
            } return 0
        },

        cambiar__bandera2(){
            if(this.actual == true){
                return 0
            } return 1
        },

        link(){
            return "https://wa.me/573144049124?text=Hola M SOLUTIONS TECH mi nombre es *" + this.nombre + "* , estoy interesado en saber sobre *" + this.opcion + "* para que me puedas contactar mi numero es: *" + this.telefono + this.numero + "*."
        }

    }

})