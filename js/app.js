var calculadora = {
    init: function() {
      this.reducirTecla(),
      this.mostrarPantalla("0"),
      this.recibirTecla()
      this.interno,
      this.borrarPantalla()
    },
    interno: {
        numeroT: 0,
        numeroA: 0,
        numeroB: 0,
        intento: 0,
        operador: "",
        resultado: "0",
        signo: 0,
        punto: 0
          },
    teclaIgual: function() {
        var self = this
        if (self.interno.intento = 2) {
            self.interno.numeroB = self.interno.numeroT
        }
        var o = this.interno.operador
        var a = parseFloat(this.interno.numeroA)
        var b = parseFloat(this.interno.numeroB)
        var resultado = 0
        switch (o) {
            case "mas":
                resultado = a + b
                break;
            case "menos":
                resultado = a - b
                break;
            case "por":
                resultado = a * b
                break;
            case "dividido":
                resultado = a / b
                break;
            case "raiz":
                resultado = Math.sqrt(a)
                break;
        }
        this.interno.numeroA = 0
        this.interno.numeroB = 0
        this.interno.numeroT = resultado
        self.interno.intento = 0
        resultado = resultado.toString()
        this.validarTam(resultado)
    },
    borrarPantalla: function() {
        var self = this
        var p = document.getElementById('display')
        var teclaOn = document.getElementById('on')
        teclaOn.addEventListener('click', function() {
            p.innerHTML = self.interno.resultado
            self.interno.numeroA = 0
            self.interno.numeroB = 0
            self.interno.numeroT = 0
            self.interno.intento = 0
            self.interno.operador=""
            self.interno.resultado ="0"
            self.interno.signo=0
            self.interno.punto=0
        })
    },
    recibirOperador: function(o) {
        this.interno.operador = o
        var p = document.getElementById('display')
        p.innerHTML = ''
    },
    validarTam: function(c) {
      if (c.length>8){
          var n=c.indexOf(".")
          console.log(n+" N")
          var fijar=1
          if(n>0 && n<=2){ fijar=6}
          if(n>2 && n<=3){ fijar=5}
          if(n>3 && n<5){ fijar=3}
          if(n>6){ fijar=2}

          var a=parseFloat(c)
          console.log(fijar+"FIJAR")
            c=a.toFixed(fijar)
        }
        var self = this
        self.mostrarPantalla(c)
    },
    mostrarPantalla: function(obj) {
      console.log(obj)
        var p = document.getElementById('display')
      if(isNaN(obj)!=true){
        p.innerHTML = obj
        }
        else {
          p.innerHTML="Calc-Err"
        }
    },
    limpiarPantalla: function(a, b) {
        var self = this
        self.interno.operador = a
        if (b == 0) {  self.interno.numeroA = self.interno.numeroT    }
        if (b == 2) { self.interno.numeroB = self.interno.numeroT     }
        self.interno.intento = 2
        self.interno.numeroT = 0
        self.interno.punto = 0
        var p = document.getElementById('display')
        p.innerHTML = ""
    },
    recibirTecla: function() {
        var self = this
        var teclas = document.getElementsByClassName('tecla')
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener('click', function(ev) {
                this.id
                self.obtenerTecla(this.id, )
            })
        }
    },
    obtenerTecla: function(a) {
        var self = this
        var numRecibido
        if (a == "mas" || a == "menos" || a == "por" || a == "dividido") {
            self.limpiarPantalla(a, self.interno.intento)
        } else if (a == "igual") {
            self.teclaIgual()
        } else if (a == "sign") {
            if (self.interno.signo == 0) {
                self.interno.numeroT = "-" + self.interno.numeroT
                self.interno.signo = 1
            } else {
                self.interno.numeroT = self.interno.numeroT.substring(1, self.interno.numeroT.length)
                self.interno.signo = 0
            }
            self.validarTam(self.interno.numeroT)

        } else if (a == "punto") {
            if (self.interno.punto == 0) {
                self.interno.numeroT = self.interno.numeroT + "."
                self.interno.punto = 1
                self.validarTam(self.interno.numeroT)
            }
        } else if (a == "raiz") {
          self.interno.numeroA = self.interno.numeroT
          this.interno.operador=a
            self.teclaIgual(a)
        } else {
            if (a != "sign" || a != "punto") {
              var p = document.getElementById('display').innerText
              if(p.length<8){
                self.interno.numeroT = self.interno.numeroT + a
                self.interno.numeroT = self.validarCero(self.interno.numeroT)
                self.validarTam(self.interno.numeroT)
                }
            }
        }
    },
    validarCero: function(c) {
        var self = this
        if (self.interno.punto == 0) {
            if (c[0] == "0") {
                c = c.substring(1, c.length)
            }
        }
        return c
    },
    reducirTecla: function() {
        var self = this
        var wmin = 5
        var hmin = 4
        var teclas = document.getElementsByClassName('tecla')
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener('mousedown', function(ev) {
                var tPress = this
                if (tPress.id != "mas") {
                    var wOrigin = tPress.clientWidth
                    var hOrigin = tPress.clientHeight
                    tPress.style.width = (wOrigin - wmin) + "px"
                    tPress.style.height = (hOrigin - hmin) + "px"
                } else {
                    var wOrigin = tPress.clientWidth
                    var hOrigin = tPress.clientHeight
                    tPress.style.width = (wOrigin - 3) + "px"
                }
            })
            teclas[i].addEventListener('mouseup', function(ev) {
                var tPress = this
                if (tPress.id != "mas") {
                    var wOrigin = tPress.clientWidth
                    var hOrigin = tPress.clientHeight
                    tPress.style.width = (wOrigin + wmin) + "px"
                    tPress.style.height = (hOrigin + hmin) + "px"
                } else {
                    var wOrigin = tPress.clientWidth
                    var hOrigin = tPress.clientHeight
                    tPress.style.width = (wOrigin + wmin) + "px"
                }
            })
        }
    }
} //End Calculadora OBJ
calculadora.init()
