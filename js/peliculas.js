let divPeliculas = document.getElementById('contenedorPeliculas')
let botonFavoritos = document.getElementById('botonFavs')
let modalBody = document.getElementById('modal-body')
let favExiste = document.getElementById('favExiste')


//Carga de peliculas al body
fetch('json/peliculas.json')
.then(response => response.json())
.then(dataPeliculas => {
   dataPeliculas.forEach((peliculaEnArray, indice)=> {
   
       divPeliculas.innerHTML += `
       <div id="pelicula${indice}" class="card text-white bg-dark mb-3 cardPeliculas container" style="width: 18rem;">
       
       <img src="img/${peliculaEnArray.img}" class="card-img-top sin" id="sinopsis${indice}" alt="poster${peliculaEnArray.nombre}">
       <div class="card-body row align-items-end">
           <h5 class="card-title">${peliculaEnArray.nombre}</h5>
           <p class="card-text">${peliculaEnArray.anio}</p>
           <p class="card-text">${peliculaEnArray.categoria}</p>
           <div class="col">
           <button id="favoritos${indice}" class="btn btn-primary"><i class="fas fa-star"></i></button>
           <button id="play${indice}" class="btn btn-primary"><i class="fas fa-play-circle"></i></button>
           </div>
       </div>
       </div> 
       `
       
       

   });
     //Agregamos eventos al boton play de cada pelicula
   dataPeliculas.forEach((peliculaEnArray, indice) => {
    document.getElementById(`play${indice}`).addEventListener('click', () => {
            favExiste.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Estas viendo ${peliculaEnArray.nombre}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
         }
         
   )})



//Agregamos eventos al boton favoritos de cada pelicula
  dataPeliculas.forEach((peliculaEnArray, indice) => {
    document.getElementById(`favoritos${indice}`).addEventListener('click', () => {
         if(peliculas.find(pelicula => pelicula.nombre == peliculaEnArray.nombre)) {
            favExiste.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>La pelicula ya esta en tus favoritos!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`
         } else {
             let nuevaPelicula = new Pelicula(peliculaEnArray.nombre, peliculaEnArray.anio, 
                peliculaEnArray.categoria, peliculaEnArray.img)
             peliculas.push(nuevaPelicula)
             localStorage.setItem('favoritos', JSON.stringify(peliculas))
         }
         
    })
})
 
})


