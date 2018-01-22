var calculadora= {
    init: function (){
    this.reducirTecla(),
    this.mostrarPantalla("0"),
    //  this.teclaIgual(),
    this.recibirTecla()
    this.interno,
    this.borrarPantalla()
    //this.obtenerTecla()
    },
    interno:{
        numeroT:0,
        numeroA:0,
        numeroB:0,
        intento:0,
        operador:"",
        resultado:"0",
        signo:""
    },

    teclaIgual: function(){
      var self=this

      if(self.interno.intento=2){
        self.interno.numeroB=self.interno.numeroT
      }

      var o=this.interno.operador
      var a=Number(this.interno.numeroA)
      var b=Number(this.interno.numeroB)
      var resultado=0
      switch (o) {
          case "mas":
            resultado= a + b
            break;

          case "menos":
              resultado= a  - b
            break;

          case "por":
                resultado= a * b
            break;

          case "dividido":
                resultado= a / b
            break;

            default:
          }
        this.interno.numeroA=0
        this.interno.numeroB=0
        this.interno.numeroT=resultado
        self.interno.intento=0
        resultado=resultado.toString()
        this.mostrarPantalla(resultado)
},

    borrarPantalla: function(){
        var self=this
        var p=document.getElementById('display')
        var teclaOn    = document.getElementById('on')
        teclaOn.addEventListener('click', function(){
        p.innerHTML=  self.interno.resultado
        // limpiar Variables
        self.interno.numeroA=0
        self.interno.numeroB=0
        self.interno.numeroT=0
        self.interno.intento=0
        })
    },

      recibirOperador: function(o){
        this.interno.operador=o
        console.log("Operador"+this.interno.operador)
        var p=document.getElementById('display')
            p.innerHTML=''
      },
      validarTam: function (c){
        var self=this
        self.mostrarPantalla(c)
      },
      mostrarPantalla: function(obj){ //Recibe string
        var p=document.getElementById('display')
        p.innerHTML=obj
      },
      limpiarPantalla:  function(a,b){
        var self=this
        self.interno.operador=a
        if(b==0){self.interno.numeroA=self.interno.numeroT}
        if(b==2){self.interno.numeroB=self.interno.numeroT}
        self.interno.intento=2
        self.interno.numeroT=0
        var p=document.getElementById('display')
        p.innerHTML=""
      },
      recibirTecla: function (){
        var self  = this
        var teclas = document.getElementsByClassName('tecla')
        for (var i=0;i<teclas.length;i++) {
            teclas[i].addEventListener('click', function(ev){
              this.id
              self.obtenerTecla(this.id,self.interno.intento)
            })
        }
      },
      obtenerTecla: function(a,b){
        var self=this
        var numRecibido

         if(a=="mas"|| a=="menos" || a=="por" || a=="dividido"){
           self.limpiarPantalla(a,self.interno.intento)
         } else if(a=="igual"){
            self.teclaIgual()
         } else if (a=="signo"){
      //     self.teclaIgual()
            console.log("signo")
         }else if (a=="raiz"){
              console.log("raiz")
         } else {
          self.interno.numeroT=self.interno.numeroT+a
          self.interno.numeroT= self.validarCero(self.interno.numeroT)
          console.log(self.interno.numeroT)
          self.validarTam(self.interno.numeroT)
           }
      },


      validarCero: function(c){
        if(c[0]=="0"){
          c=c.substring(1,c.length)
          console.log (c)
        }
        return c
      },
      reducirTecla: function(){
      var self  = this
      var wmin=5
      var hmin=2
      var teclas    = document.getElementsByClassName('tecla')
      for (var i=0;i<teclas.length;i++) {
            teclas[i].addEventListener('mousedown', function(ev){


                    var tPress=this
                  if(tPress.id!="mas"){
                    var wOrigin=tPress.clientWidth
                    var hOrigin=tPress.clientHeight
                    tPress.style.width=(wOrigin-wmin)+"px"
                    tPress.style.height=(hOrigin-hmin)+"px"
                  } else {
                    var wOrigin=tPress.clientWidth
                    var hOrigin=tPress.clientHeight
                    tPress.style.width=(wOrigin-2)+"px"
                    tPress.style.height=(hOrigin-2)+"px"
                  }


                  })
            teclas[i].addEventListener('mouseup', function(ev){
                      var tPress=this
                      if(tPress.id!="mas"){
                          var wOrigin=tPress.clientWidth
                          var hOrigin=tPress.clientHeight
                          tPress.style.width=(wOrigin+wmin)+"px"
                          tPress.style.height=(hOrigin+hmin)+"px"
                    } else {
                      var wOrigin=tPress.clientWidth
                      var hOrigin=tPress.clientHeight
                      tPress.style.width=(wOrigin+2)+"px"
                      tPress.style.height=(hOrigin+2)+"px"


                    }
                    })
                }
      }
} //End Calculadora OBJ
calculadora.init()
