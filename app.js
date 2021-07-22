const app = new Vue({
    el:"#app",
    data:{
        nombre:"",
        numero:"",
        opcion:"",
        pais:["Estados Unidos", "Colombia"],
        cualBandera:["https://res.cloudinary.com/msolutionstech/image/upload/v1626934262/colombia_jy4iln.png","https://res.cloudinary.com/msolutionstech/image/upload/v1626934263/estados_u_sthqjm.png"],
        actual: 0,
        distinta:1,
        bandera: true,
        cambiar:false
    },


    methods:{
        cambiar__pais(){
            this.bandera = !this.bandera
            this.actual = this.distinta
            if(this.actual == 1){
                this.distinta =0
            }
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
        }

    }

})