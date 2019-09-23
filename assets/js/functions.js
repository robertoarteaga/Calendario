    // MODAL PARA AGREGAR INTEGRANTE
    document.getElementById("addPerson").addEventListener("click",()=>{
        let modal1 = document.getElementById("modal1").style.display="flex";
        let modal2 = document.getElementById("modal2").style.display="none";
        let modal3 = document.getElementById("modal3").style.display="none";
    });
    // CERRAR MODAL UNO
    document.getElementById("close").addEventListener("click",()=>{
        var modal = document.getElementById("modal1").style.display="none";
    });
    // CERRAR MODAL DOS
    document.getElementById("close-two").addEventListener("click", ()=>{
        var modal = document.getElementById("modal2").style.display="none";
    });
    // CERRAR MODAL TRES
    document.getElementById("close-three").addEventListener("click", ()=>{
        var modal = document.getElementById("modal3").style.display="none";
    });
    // MODAL PARA CAMBIAR TAREA
    document.addEventListener('DOMContentLoaded', () => {
        for(let button of document.querySelectorAll('.btn-change')) {
            button.addEventListener('click', (e)=>{
                var modal = document.getElementById("modal2").style.display="flex";
                
            })
        }
    });
    // MODAL PARA CONFIRMAR TAREA
    document.addEventListener('DOMContentLoaded', () => {   
        for(let button of document.querySelectorAll('#btn-end')) {
            button.addEventListener('click', (e)=>{
                var modal = document.getElementById("modal3").style.display="flex";
            })
        }
    });

    