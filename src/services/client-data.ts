// Tipos para los datos del cliente
export interface ClientData {
  name: string
  phone: string
  email: string
  dataPolicyAccepted: boolean
}

// Respuesta del servicio
export interface ClientDataResponse {
  success: boolean
  message: string
  data?: any
}

/**
 * Servicio para enviar datos de clientes a Trap
 * Por ahora es un mock, pero aquí puedes implementar la integración real con Trap
 */
export const submitClientData = async (clientData: ClientData): Promise<ClientDataResponse> => {
  try {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Aquí iría la implementación real con Trap
    // Ejemplo de cómo podría ser:
    /*
    const response = await fetch('https://api.trap.com/webhooks/client-data', {
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
    */

    // Mock response por ahora
    console.log('Datos enviados a Trap:', clientData)
    
    return {
      success: true,
      message: 'Datos enviados exitosamente',
      data: {
        id: `client_${Date.now()}`,
        submittedAt: new Date().toISOString()
      }
    }
  } catch (error) {
    console.error('Error enviando datos a Trap:', error)
    
    return {
      success: false,
      message: 'Error al enviar los datos. Por favor intenta nuevamente.'
    }
  }
}

/**
 * Validar formato de teléfono colombiano
 */
export const validateColombianPhone = (phone: string): boolean => {
  const phoneRegex = /^3\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * Validar formato de email
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}