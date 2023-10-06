let libros = [];
let imageUrl;
let mostrar = document.getElementById('infolibro');

//aqui guardaremos la imagen
let $imgPreview;


frmbook.addEventListener("submit", function (e) {
    e.preventDefault();

    // if (validarCampos()) {
        // Obtener los valores de los campos
        let libro = {
            libroId: document.getElementById('txtlibroid').value,
            titulo: document.getElementById('titulo').value,
            nombreAutor: document.getElementById('nombreautor').value,
            apellidoAutor: document.getElementById('apellidoautor').value,
            categoria: document.getElementById('categoria').value,
            precio: document.getElementById('precio').value,
            image: imageUrl
        }

        libros.push(libro)
        GuardarLocalStorage();
        frmbook.reset();
    // }
});

function GuardarLocalStorage(){
    localStorage.setItem('libros', JSON.stringify(libros));
    Mostrar();
}

function Mostrar(){
    mostrar.innerHTML = ''
    libros = JSON.parse(localStorage.getItem('libros'));

    if (libros === null) {
        libros = []
    } else {
       libros.forEach((valor, i) =>{
            mostrar.innerHTML +=  `<td class="img">
            <img width="100%" id="image" src="${valor.image}">
        </td>
        <td>
            ${valor.libroId}
        </td>
        <td>
            ${valor.titulo}
        </td>
        <td>
            ${valor.nombreAutor}
        </td>
        <td>
            ${valor.apellidoAutor}
        </td>
        <td>
            ${valor.categoria}
        </td>
        <td>
            ${valor.precio}
        </td>`;
             })
    }
} 


function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	imageUrl = objectURL;
                
}