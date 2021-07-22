const app = new Vue({
    el:"#app",
    data:{
        nombre:"",
        numero:"",
        opcion:"",
        pais:["Colombia", "Estados Unidos"],
        cualBandera:["https://res.cloudinary.com/msolutionstech/image/upload/v1626934262/colombia_jy4iln.png","https://res.cloudinary.com/msolutionstech/image/upload/v1626934263/estados_u_sthqjm.png"],
        actual: 0,
        bandera: true,
    },


    methods:{
        cambiar__pais(){
            this.bandera = !this.bandera
            this.actual +1
            if(this.actual>=2){
                this.actual =0
            }
        },
    },

    computed:{
        telefono(){
            if(this.bandera){
                return "+57" + this.numero
            } return "+1" + this.numero
        },

    }

})