# Página de Captura de Datos

Esta página permite capturar información básica de clientes potenciales con un formulario simple y elegante.

## Características

- **Formulario responsivo** que se adapta a diferentes tamaños de pantalla
- **Validación en tiempo real** usando Formik y Yup
- **Diseño consistente** con el resto del sitio web
- **Integración preparada para Trap** (actualmente en modo mock)
- **Accesibilidad** con etiquetas apropiadas y navegación por teclado

## Campos del formulario

1. **Nombre completo** (requerido)
2. **Teléfono** (requerido, formato colombiano: 3XXXXXXXXX)
3. **Correo electrónico** (requerido, formato válido)
4. **Autorización de políticas de datos** (requerido, checkbox)

## Integración con Trap

Para integrar con Trap, modifica el archivo `src/services/client-data.ts`:

```typescript
// Reemplaza la función submitClientData con tu implementación real
export const submitClientData = async (clientData: ClientData): Promise<ClientDataResponse> => {
  try {
    const response = await fetch('TU_URL_DE_TRAP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TRAP_API_KEY}`
      },
      body: JSON.stringify({
        name: clientData.name,
        phone: clientData.phone,
        email: clientData.email,
        dataPolicyAccepted: clientData.dataPolicyAccepted,
        source: 'sagrada-cura-website',
        timestamp: new Date().toISOString()
      })
    })

    if (!response.ok) {
      throw new Error('Error al enviar datos a Trap')
    }

    const result = await response.json()
    
    return {
      success: true,
      message: 'Datos enviados exitosamente',
      data: result
    }
  } catch (error) {
    return {
      success: false,
      message: 'Error al enviar los datos. Por favor intenta nuevamente.'
    }
  }
}
```

## Variables de entorno necesarias

Agrega estas variables a tu archivo `.env.local`:

```env
TRAP_API_KEY=tu_api_key_de_trap
TRAP_WEBHOOK_URL=tu_url_de_webhook_de_trap
```

## Estilos

Los estilos están definidos en `src/styles/global.scss` en la sección `CLIENT DATA CAPTURE PAGE` y mantienen la consistencia visual con el resto del sitio.

## Accesibilidad

- Etiquetas semánticas apropiadas
- Mensajes de error claros
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para enlaces

## Uso

La página está disponible en `/captura-datos` y puede ser enlazada desde cualquier parte del sitio.