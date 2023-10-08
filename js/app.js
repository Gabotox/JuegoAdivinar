var elnumero = Math.floor(Math.random()*10+1);
var minumero = document.getElementById("input1").value;



function cambiar(){

    
minumero = document.getElementById("input1").value;
    

    if (minumero > elnumero) {
          Swal.fire({
            icon: 'error',
            title: 'Muy alto, intenta de nuevo',
            showConfirmButton: false,
            timer: 1000
          })
          
    } else {	
        Swal.fire({
            icon: 'error',
            title: 'Muy bajo, intenta de nuevo',
            showConfirmButton: false,
            timer: 1000
          })
          
    }
    
   

    var minumero = document.getElementById("input1").value;
    


    if (minumero == elnumero){
        Swal.fire({
            title: 'Adivinaste el número secreto',
            width: 400,
            padding: '0.5rem',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("../img/cat.gif")
              left top
              no-repeat
            `
          })
    }
        
        if (minumero == "") {
            Swal.fire({
                icon: 'error',
                title: 'Ingresa un número primero',
                showConfirmButton: false,
                timer: 1500
              })
            }

}
