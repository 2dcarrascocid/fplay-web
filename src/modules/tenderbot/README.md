# Módulo Tender Bot - Frontend

Este módulo implementa el flujo de suscripción para el producto Tender Bot.

## Estructura
- **components/**: Componentes UI específicos (PlanCard, ClienteForm, CheckoutSummary).
- **pages/**: Vistas principales (CheckoutView [Wizard], PagoExito, PagoFallo).
- **services/**: Lógica de comunicación con API (tenderbotService).
- **stores/**: Gestión de estado con Pinia (useTenderbotStore).

## Flujo (Wizard)
1. **Selección de Plan**: Carga planes desde `GET /tenderbot/planes`.
2. **Registro Cliente**: 
   - Crea cliente (`POST /tenderbot/clientes`).
   - Crea suscripción (`POST /tenderbot/suscripciones`).
   - Obtiene pago pendiente.
3. **Pago**: 
   - Muestra resumen.
   - Inicia Webpay Plus (actualmente mockeado en servicio, listo para endpoint real).

## Variables de Entorno
Asegúrate de tener configurada la URL base de la API:
```
VITE_API_URL=http://localhost:3000
```
(Por defecto usa localhost:3000 si no se define)

## Pruebas
Para probar el flujo completo:
1. Navegar a `/tenderbot/checkout`.
2. Seleccionar un plan.
3. Llenar formulario (email debe ser único).
4. Dar click en "Continuar al Pago".
5. Dar click en "Pagar con Webpay Plus" (simula redirección tras 1s).
