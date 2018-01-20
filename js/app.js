var calculadora= {
    init: function (){
      this.detectarTecla()
    },
      detectarTecla: function(){
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
}
calculadora.init()
