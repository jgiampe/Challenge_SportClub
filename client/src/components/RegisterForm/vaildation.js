export default function validation(data) {
  const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const regexNumber = /^[0-9]+$/;
  const regexNombre = /^[a-zA-Z\s]+$/;
  let errors = {
    nombre: '', 
    apellido: '', 
    dni: '', 
    nacimiento: '', 
    email: '', 
    celular: '',
  };

  function isOver18(date) {
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18);
    return date <= minDate;
  }

  if (data.nombre !== undefined) {
    if (!data.nombre) errors.nombre = "Debe ingresar un nombre";
    else if (!regexNombre.test(data.nombre))
      errors.nombre = "Solo se aceptan letras";
  }

  if (data.apellido !== undefined) {
    if (!data.apellido) errors.apellido = "Debe ingresar un apellido";
    else if (!regexNombre.test(data.apellido))
      errors.apellido = "Solo se aceptan letras";
  }

  if (data.dni !== undefined) {
    if (!data.dni) errors.dni = "Debe ingresar un dni";
    else if (!regexNumber.test(data.dni.toString()))
      errors.dni = "Solo se aceptan números";
    else if (data.dni<1000000 || data.dni>99999999)
      errors.dni = "Debe ingresar un dni valido";
  }


  if (data.nacimiento !== undefined) {
    if (!data.nacimiento) errors.nacimiento = "Debe ingresar una fecha de nacimiento";
    else if (!isOver18(data.nacimiento))
      errors.nacimiento  = "Debes ser mayor de edad";
  }


  if (data.email !== undefined) {
    if (!data.email) errors.email = "Debe ingresar un email";
    else if (!regexEmail.test(data.email))
      errors.email = "Debe ingresar un email valido";
  }

  if (data.celular !== undefined) {
    if (!data.celular) errors.celular = "Debe ingresar un celular";
    else if (!regexNumber.test(data.celular.toString()))
      errors.celular = "Solo se aceptan números";
    else if (data.celular<1100000000 || data.celular>9999999999)
      errors.celular = "Debe ingresar un celular valido";
  }
    
  

  return errors;
}