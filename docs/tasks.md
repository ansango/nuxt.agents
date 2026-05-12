# Demo Tasks — AI Agents Boilerplate

Lista de tareas para demostrar el flujo de trabajo de los agentes de IA configurados en este proyecto (`frontend-engineer` → `nuxt-vue-developer` + `tailwind-css-designer` + `vitest-tester`).

---

## 1. Layout & Estructura

- [ ] Crear un layout base (`app/layouts/default.vue`) con header, main y footer
- [ ] Crear un layout alternativo `blank.vue` para páginas de auth (sin nav)
- [ ] Añadir `app/error.vue` con diseño propio para errores 404 y 500

---

## 2. Componentes UI Base

- [ ] `AppButton` — variantes `primary`, `secondary`, `ghost`; tamaños `sm`, `md`, `lg`; estado `loading` y `disabled`
- [ ] `AppInput` — label, placeholder, mensaje de error, estado disabled
- [ ] `AppBadge` — variantes de color (info, success, warning, danger)
- [ ] `AppCard` — slot para header, body y footer; variante con borde y con sombra
- [ ] `AppModal` — trap de foco, cierre con Escape, backdrop con click
- [ ] `AppAlert` — tipos info / success / warning / error; dismissible
- [ ] `AppAvatar` — imagen con fallback a iniciales; tamaños sm / md / lg
- [ ] `AppSpinner` — indicador de carga accesible con `aria-label`
- [ ] `AppTooltip` — aparece en hover/focus; posiciones top, bottom, left, right
- [ ] `AppDropdown` — menú desplegable accesible con teclado

---

## 3. Navegación

- [ ] `AppNavbar` — logo, links de navegación, menú de usuario, responsive (hamburger en móvil)
- [ ] `AppSidebar` — navegación lateral colapsable con iconos y etiquetas
- [ ] `AppBreadcrumb` — generado automáticamente desde la ruta activa
- [ ] `AppTabs` — navegación por pestañas con router-link o estado local

---

## 4. Páginas

- [ ] `/` — Home: hero section + grid de cards de características
- [ ] `/about` — Sobre el proyecto: texto + timeline
- [ ] `/login` — Formulario de inicio de sesión con validación
- [ ] `/register` — Formulario de registro con validación
- [ ] `/dashboard` — Layout con sidebar + widgets de métricas (usa layout `default`)
- [ ] `/dashboard/settings` — Formulario de configuración de perfil
- [ ] `/404` — Página de error personalizada

---

## 5. Composables

- [ ] `useTheme` — toggle dark/light mode; persiste en `localStorage`
- [ ] `useToast` — sistema de notificaciones toast (add, remove, auto-dismiss)
- [ ] `useMediaQuery` — reactivo a breakpoints (`isMobile`, `isTablet`, `isDesktop`)
- [ ] `usePagination` — lógica de paginación reutilizable (page, pageSize, total)

---

## 6. Tests (Vitest + @nuxt/test-utils)

- [ ] Tests unitarios para `usePagination` → `test/unit/usePagination.spec.ts`
- [ ] Tests unitarios para `useToast` → `test/unit/useToast.spec.ts`
- [ ] Tests de componente para `AppButton` → `test/nuxt/AppButton.spec.ts`
- [ ] Tests de componente para `AppInput` (validación) → `test/nuxt/AppInput.spec.ts`
- [ ] Tests de componente para `AppModal` (foco y cierre) → `test/nuxt/AppModal.spec.ts`
- [ ] Tests de página `/login` con mock de composable de auth → `test/nuxt/LoginPage.spec.ts`
