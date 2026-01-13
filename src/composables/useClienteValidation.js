import { reactive, computed } from 'vue';

export function useClienteValidation() {
  const errors = reactive({
    razon_social: '',
    email_contacto: '',
    email_confirmacion: '',
    rut: '',
    telefono: '',
    nombre_contacto: ''
  });

  // --- Helpers de Validación ---

  const validateEmailFormat = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateRutChileno = (rut) => {
    if (!rut) return true; // Opcional, si viene vacío se asume válido en formato (pero se controla required fuera)
    
    // Limpiar puntos y guión
    let valor = rut.replace(/\./g, '').replace(/-/g, '');
    
    // Validar largo mínimo
    if (valor.length < 8) return false;

    // Aislar cuerpo y dígito verificador
    const cuerpo = valor.slice(0, -1);
    const dv = valor.slice(-1).toUpperCase();

    // Validar que cuerpo sea número
    if (!/^\d+$/.test(cuerpo)) return false;

    // Calcular DV esperado
    let suma = 0;
    let multiplo = 2;

    for (let i = 1; i <= cuerpo.length; i++) {
      const index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalculado = '';
    
    if (dvEsperado === 11) dvCalculado = '0';
    else if (dvEsperado === 10) dvCalculado = 'K';
    else dvCalculado = dvEsperado.toString();

    return dvCalculado === dv;
  };

  const formatRut = (rut) => {
    if (!rut) return '';
    let valor = rut.replace(/\./g, '').replace(/-/g, '');
    if (valor.length < 2) return rut;
    
    const cuerpo = valor.slice(0, -1);
    const dv = valor.slice(-1).toUpperCase();
    
    // Formatear con puntos y guión (opcional según requerimiento, el usuario pidió "normalizar sin puntos" internamente, pero visualmente suele ser mejor con. 
    // Requerimiento dice: "Normalizar internamente (sin puntos, con guion, DV en mayúscula)."
    // Cumpliremos estrictamente: cuerpo + '-' + dv
    return `${cuerpo}-${dv}`;
  };

  const validateTelefonoChileno = (fono) => {
    if (!fono) return true; // Opcional
    // Aceptar +569XXXXXXXX o 9XXXXXXXX
    // Eliminar espacios
    const limpio = fono.replace(/\s/g, '');
    
    // Regex: ^(\+?56)?9\d{8}$
    // Expl: Opcional +56, obligatorio 9, obligatorio 8 dígitos más.
    return /^(\+?56)?9\d{8}$/.test(limpio);
  };

  const formatTelefono = (fono) => {
    if (!fono) return '';
    let limpio = fono.replace(/\s/g, '');
    
    // Si empieza con 9 y tiene 9 dígitos, agregar +56
    if (/^9\d{8}$/.test(limpio)) {
      return `+56${limpio}`;
    }
    // Si ya tiene +569... devolver tal cual (normalizado sin espacios)
    if (/^\+569\d{8}$/.test(limpio)) {
      return limpio;
    }
    // Si tiene 569... (sin +)
    if (/^569\d{8}$/.test(limpio)) {
      return `+${limpio}`;
    }
    
    return limpio;
  };

  // --- Funciones de validación expuestas ---

  const validateField = (field, value, formRef = null) => {
    // Reset error
    errors[field] = '';
    const val = typeof value === 'string' ? value.trim() : value;

    switch (field) {
      case 'razon_social':
        if (!val) {
          errors.razon_social = 'La razón social es obligatoria';
        } else if (val.length > 100) {
          errors.razon_social = 'La razón social no puede superar los 100 caracteres';
        }
        break;

      case 'nombre_contacto':
        if (val && val.length > 100) {
          errors.nombre_contacto = 'El nombre no puede superar los 100 caracteres';
        }
        break;

      case 'email_contacto':
        if (!val) {
          errors.email_contacto = 'El correo electrónico es obligatorio';
        } else if (!validateEmailFormat(val)) {
          errors.email_contacto = 'Formato de correo electrónico inválido';
        }
        // Validar coincidencia si existe el campo de confirmación
        if (formRef && formRef.email_confirmacion && val !== formRef.email_confirmacion) {
           // No marcamos error aquí, se marca en confirmación o ambos, 
           // pero el requerimiento dice "Los correos no coinciden".
           // Lo ideal es validarlo cuando cambie confirmación o al final.
        }
        break;

      case 'email_confirmacion':
        if (!val) {
            errors.email_confirmacion = 'Debes confirmar el correo electrónico';
        } else if (formRef && val !== formRef.email_contacto) {
            errors.email_confirmacion = 'Los correos no coinciden';
        }
        break;

      case 'rut':
        if (val) {
          if (!validateRutChileno(val)) {
            errors.rut = 'RUT inválido';
          }
        }
        // Si es obligatorio, agregar check aquí. Asumimos opcional por defecto salvo config.
        break;

      case 'telefono':
        if (val) {
            if (!validateTelefonoChileno(val)) {
                errors.telefono = 'Formato inválido. Usa +569XXXXXXXX o 9XXXXXXXX';
            }
        }
        break;
    }
  };

  const validateAll = (form) => {
    // Ejecutar validaciones individuales
    validateField('razon_social', form.razon_social);
    validateField('email_contacto', form.email_contacto);
    validateField('email_confirmacion', form.email_confirmacion, form);
    validateField('rut', form.rut);
    validateField('telefono', form.telefono);
    validateField('nombre_contacto', form.nombre_contacto);

    // Retornar true si no hay errores
    return !Object.values(errors).some(msg => msg.length > 0);
  };

  // Normalizadores para aplicar al guardar/enviar
  const normalizeData = (form) => {
    return {
        ...form,
        razon_social: form.razon_social?.trim(),
        nombre_contacto: form.nombre_contacto?.trim(),
        rut: formatRut(form.rut),
        telefono: formatTelefono(form.telefono)
    };
  };

  return {
    errors,
    validateField,
    validateAll,
    normalizeData
  };
}
