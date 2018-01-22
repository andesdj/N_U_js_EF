var calculadora= {
    init: function (){
    //  this.reducirTecla(),
    //this.mostrarPantalla(),
    //  this.teclaIgual(),
    //this.detectarTecla()
    this.borrarPantalla()
    },
    interno:{
        numeroA:0,
        numeroB:0,
        operador:"",
        resultado:""
    },
    teclaIgual: function(a,b,o){
      switch (o) {
        case "mas":
          var resultado= a+b
          break;

        case "menos":
          var resultado= a-b
          break;

        case "por":
          var resultado= a*b
          break;

        case "dividido":
          var resultado= a/b
          break;
        default:
          var resultado=0
          break;
        }
      this.mostrarPantalla(resultado)
},

    borrarPantalla: function(){
        var p=document.getElementById('display')
        var teclaOn    = document.getElementById('on')
        teclaOn.addEventListener('click', function(){
        p.innerHTML='0'
        // limpiar Variables
        })
    },

      mostrarPantalla: function(obj){
        var self=this
          var p=document.getElementById('display')
          p.innerHTML=obj
      },
      detectarTecla: function (){
        var self= this


      },
      reducirTecla: function(){
      var self  = this
      var teclas    = document.getElementsByClassName('tecla')
      for (var i=0;i<teclas.length;i++) {
            teclas[i].addEventListener('mousedown', function(ev){
                    var teclaPress=this
                    console.log(teclaPress.id)
                  })
            teclas[i].addEventListener('mouseup', function(ev){
                      var teclaPress=this
                    })
                }
      }
} //End Calculadora OBJ
calculadora.init()
