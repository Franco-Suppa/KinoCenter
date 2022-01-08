
function cargaModal(favoritosStorage) {
    modalBody.innerHTML = " "
    favoritosStorage.forEach((peliculaFavorito, indice)=> {
        modalBody.innerHTML +=
        ` <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/${peliculaFavorito.img}" class="img-fluid rounded-start" alt="${peliculaFavorito.nombre} poster">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${peliculaFavorito.nombre}</h5>
              <p class="card-text">${peliculaFavorito.anio}</p>
              <p class="card-text"><small class="text-muted">${peliculaFavorito.categoria}</small></p>
              <button id="playFav${indice}" class="btn btn-primary"><i class="fas fa-play-circle"></i></button>
              <button id="eliminarFav${indice}" class="btn btn-primary"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
      `
    }) 

                 // Boton Eliminar de favoritos
                 favoritosStorage.forEach((peliculaFavorito, indice)=> {
                    let botonEliminar = document.getElementById(`eliminarFav${indice}`)
                    botonEliminar.addEventListener('click', ()=> {
                        peliculas.splice(indice, 1)
                        localStorage.setItem('favoritos', JSON.stringify(peliculas)) 
                        favoritosStorage = JSON.parse(localStorage.getItem('favoritos'))
                        cargaModal(favoritosStorage)
                      })
                  }) 

                   //Agregamos eventos al boton play de cada pelicula en favoritos
   favoritosStorage.forEach((peliculaFavorito, indice) => {
    document.getElementById(`playFav${indice}`).addEventListener('click', () => {
            favExiste.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Estas viendo ${peliculaFavorito.nombre}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
         }
         
   )})
}






botonFavoritos.addEventListener('click', () => {
    let favoritosStorage = JSON.parse(localStorage.getItem('favoritos'))
    cargaModal(favoritosStorage)

})


let verAleatorio = document.getElementById("aleatorio").addEventListener('click', () => {
  let favoritosStorage = JSON.parse(localStorage.getItem('favoritos'))
  let maxAleatorio = Object.keys(favoritosStorage).length
  let peliculaNumAl = Math.floor(Math.random() * maxAleatorio)
  console.log(peliculaNumAl)
  favExiste.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Estas viendo ${favoritosStorage[peliculaNumAl].nombre}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
         
})

//Formulario
let formulario = document.getElementById('formMensaje')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    formulario.reset()
})
