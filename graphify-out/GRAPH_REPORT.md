# Graph Report - fplay-web  (2026-10-07)

## Corpus Check
- 48 files · ~101,621 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 166 nodes · 163 edges · 26 communities (12 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3788e2e5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.js
- package.json
- dependencies
- CheckoutView.vue
- ValidacionPago.vue
- ClienteForm.vue
- PlanCard.vue
- AppHeader.vue
- Home.vue
- Fair Play Chile
- FairPlay - Club
- Módulo Tender Bot - Frontend
- BaseInput.vue
- api.js
- ui.js

## God Nodes (most connected - your core abstractions)
1. `FairPlay - Club` - 8 edges
2. `Fair Play Chile` - 6 edges
3. `Módulo Tender Bot - Frontend` - 5 edges
4. `scripts` - 4 edges
5. `updateHead()` - 4 edges
6. `generarPdf()` - 3 edges
7. `tenderbotService` - 3 edges
8. `🛠️ Instalación y Configuración` - 3 edges
9. `@emailjs/browser` - 2 edges
10. `axios` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (26 total, 3 thin omitted)

### Community 0 - "index.js"
Cohesion: 0.09
Nodes (11): router, app, form, router, router, routes, injectJsonLd(), updateHead() (+3 more)

### Community 1 - "package.json"
Cohesion: 0.12
Nodes (15): devDependencies, vite, @vitejs/plugin-vue, vue-router, name, private, scripts, build (+7 more)

### Community 2 - "dependencies"
Cohesion: 0.13
Nodes (15): axios, @emailjs/browser, emailjs-com, jspdf, dependencies, axios, @emailjs/browser, emailjs-com (+7 more)

### Community 3 - "CheckoutView.vue"
Cohesion: 0.18
Nodes (5): montoCalculado, props, { planes, selectedPlan, selectedPeriodicidad, montoPromocional, cliente, suscripcion, pago, loading, error, currentStep }, store, useTenderbotStore

### Community 4 - "ValidacionPago.vue"
Cohesion: 0.21
Nodes (10): errorMsg, formatFecha(), formatMonto(), generarPdf(), loading, route, success, transaccion (+2 more)

### Community 5 - "ClienteForm.vue"
Cohesion: 0.22
Nodes (6): useClienteValidation(), emit, { errors, validateField, validateAll, normalizeData }, form, handleSubmit(), props

### Community 6 - "PlanCard.vue"
Cohesion: 0.20
Nodes (8): emit, emitSelect(), etiquetaPeriodo, mostrarPrecioNormal, precioNormal, precioPromocional, props, selectedMode

### Community 7 - "AppHeader.vue"
Cohesion: 0.22
Nodes (5): year, closeMenu(), { event }, handleNavClick(), isMenuOpen

### Community 9 - "Fair Play Chile"
Cohesion: 0.22
Nodes (8): 🎨 Estilos, 📂 Estructura del Proyecto, Fair Play Chile, 📧 Formulario de Contacto, 🛠️ Instalación y Configuración, Pasos, Prerrequisitos, 🚀 Tecnologías

### Community 10 - "FairPlay - Club"
Cohesion: 0.22
Nodes (8): 🌐 API Integration, 🔑 Autenticación, 👨‍💻 Autor, 🚀 Características, FairPlay - Club, 📝 Notas de Desarrollo, 🎨 Páginas Disponibles, 🛠️ Tecnologías

### Community 11 - "Módulo Tender Bot - Frontend"
Cohesion: 0.33
Nodes (5): Estructura, Flujo (Wizard), Módulo Tender Bot - Frontend, Pruebas, Variables de Entorno

### Community 12 - "BaseInput.vue"
Cohesion: 0.67
Nodes (3): emits, model, props

## Knowledge Gaps
- **68 isolated node(s):** `name`, `version`, `private`, `type`, `dev` (+63 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 106 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _68 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09333333333333334 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._