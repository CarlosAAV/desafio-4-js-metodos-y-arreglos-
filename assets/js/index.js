const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];
function clearCampos() {
  let numCuartos = document.getElementById("num-cuartos");
  let metrosDesde = document.getElementById("metros-desde");
  let metrosHasta = document.getElementById("metros-hasta");

  numCuartos.value = ""
  metrosDesde.value = ""
  metrosHasta.value = ""
  cargarPropiedades(propiedadesJSON)

}

window.onload = function () {
  cargarPropiedades(propiedadesJSON)
}
function cargarPropiedades(listadoPropiedades) {
  let html = '';
  let contenedorPropiedades = document.querySelector(".propiedades");
  for (let propiedad of listadoPropiedades) {
    html += `<div class="propiedad">
                <div class="img"
                style="background-image: url('${propiedad.src}')">
                </div>
                  <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                    <p>cuartos: ${propiedad.rooms}</p>
                    <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                  </section>
              </div>`
  }
  document.querySelector('#total').innerHTML = listadoPropiedades.length

  contenedorPropiedades.innerHTML = html;
}


//validacion formulario de filtrado
function validarCampos() {
  let numCuartos = document.getElementById("num-cuartos");
  let metrosDesde = document.getElementById("metros-desde");
  let metrosHasta = document.getElementById("metros-hasta");


  if (numCuartos.value == '') {
    alert('campo obligatorio')
    numCuartos.focus()
    document.querySelector('#campo1').style.display = 'inline';
    return false

  } else if (metrosDesde.value == '') {
    alert('campo obligatorio')
    metrosDesde.focus()
    document.querySelector('#campo2').style.display = 'inline';
    return false
  } else if (metrosHasta.value == '') {
    alert('campo obligatorio')
    metrosHasta.focus()
    document.querySelector('#campo3').style.display = 'inline';
    return false
  } else {

    let nuevoListado = propiedadesJSON.filter((propiedad) => {
      return propiedad.rooms == parseInt(numCuartos.value) && propiedad.m >= parseInt(metrosDesde.value) && propiedad.m <= parseInt(metrosHasta.value)

    })
    console.log(nuevoListado)
    cargarPropiedades(nuevoListado)
  }
}
document.querySelector("#buscar").addEventListener('click', function () {
  validarCampos();
});





