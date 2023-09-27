export const validations = (obj) =>{
    const err = {}
    if(obj.full_name == 0) err.full_name = "Nombre es requerido"
    if(obj.phone_number == 0) err.phone_number = "Numero es requerido"
    if(!Number(obj.phone_number)) err.phone_number = "Debe ser un numero"
    if(obj.phone_number == 0) err.phone_number = "Numero es requerido"
    if(obj.preferred_language == 0) err.preferred_language = "Idioma es requerido"
    if(obj.how_found == 0) err.how_found = "Esta pregunta es requerida"

    return err
}