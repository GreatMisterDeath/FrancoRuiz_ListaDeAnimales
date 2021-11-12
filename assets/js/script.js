class Propietario
{
    constructor(pNombrePropietario, pDireccion, pTelefono)
    {
        this.nombrePropietario = pNombrePropietario;
        this.direccion = pDireccion;
        this.telefono = pTelefono;
    }
    datosPropietario()
    {
        return `• El nombre del dueño es <strong>${this.nombrePropietario}</strong> con domicilio en <strong>${this.direccion}</strong> y el numero de contacto es <strong>${this.telefono}</strong>`
    }
}

class Animal extends Propietario
{
    constructor(pNombrePropietario, pDireccion, pTelefono, pTipo)
    {
        super(pNombrePropietario, pDireccion, pTelefono)
        this.tipo = pTipo
    }
    get getTipo()
    {
        return `• El tipo de mascota es un <strong>${this.tipo}</strong>`
    }
}

class Mascota extends Animal
{
    constructor(pNombrePropietario, pDireccion, pTelefono, pTipo, pNombreMascota, pEnfermedad)
    {
        super(pNombrePropietario, pDireccion, pTelefono, pTipo)
        this.nombreMascota = pNombreMascota
        this.enfermedad = pEnfermedad
    }
    get getNombreMascota()
    {
        return this.nombreMascota;
    }
    set setNombreMascota(nuevoNombreMascota)
    {
        this.nombreMascota = () =>
        {
            return nuevoNombreMascota
        }
    }
    get getEnfermedadMascota()
    {
        return this.enfermedad;
    }
    set setEnfermedadMascota(nuevaEnfermedad)
    {
        this.enfermedad = () =>
        {
            return nuevaEnfermedad
        }
    }
}

var formulario = document.querySelector('form');

var inscribir = (event) =>
{
    event.preventDefault();

    let nombrePropietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    if (tipo == "Perro")
    {
        var perro = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad)
        datosMascota = perro;
    }
    else if (tipo == "Gato")
    {
        var gato = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad)
        datosMascota = gato;
    }
    else
    {
        var conejo = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad)
        datosMascota = conejo;
    }

    document.getElementById('resultado').innerHTML = `${datosMascota.datosPropietario()}<br>${datosMascota.getTipo} su nombre es <strong>${datosMascota.getNombreMascota}</strong> y su enfermedad es <strong>${datosMascota.getEnfermedadMascota}</strong>`
}

formulario.addEventListener('submit', inscribir);
