var calculadora= {
    init: function (){
    //  this.reducirTecla(),
    //this.mostrarPantalla(),
    //  this.teclaIgual(),
    //this.asignarNum1()
    this.interno,
    this.borrarPantalla()
    },
    interno:{
        numeroA:0,
        numeroB:0,
        intent:0,
        operador:"",
        resultado:""
    },
    cambiarNum: function(a,b,o){
      this.interno.numeroA=a,
      this.interno.numeroB=b,
      this.interno.operador=o
    },
    teclaIgual: function(){
      var o=this.interno.operador
      switch (o) {
        case "mas":
          var resultado= this.interno.numeroA +this.interno.numeroB
          break;

        case "menos":
            var resultado= this.interno.numeroA  - this.interno.numeroB
          break;

        case "por":
              var resultado= this.interno.numeroA * this.interno.numeroB
          break;

        case "dividido":
              var resultado= this.interno.numeroA + this.interno.numeroB
          break;
        default:
          var resultado=0
          break;
        }
      this.mostrarPantalla(resultado)
},

    borrarPantalla: function(){
        var self=this
        var p=document.getElementById('display')
        var teclaOn    = document.getElementById('on')
        teclaOn.addEventListener('click', function(){
        p.innerHTML='0'
        // limpiar Variables
        this.interno.numeroA=100
        })
    },

      recibirOperador: function(o){
        this.interno.operador=o
        var p=document.getElementById('display')
            p.innerHTML=''
      },
      mostrarPantalla: function(obj){
        //Validar los 8 caracteres
        var self=this
          var p=document.getElementById('display')
          p.innerHTML=obj
      },
      asignarNum1: function (){
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
