# CDAD V2.1 --- Manual de Usuario Rápido

> **Human First. AI Accelerated.**
>
> **Cuando el contexto no gobierna a la IA, la IA gobierna la
> solución.**

## 0. Antes de empezar: qué hace realmente CDAD

CDAD V2.1 introduce un **workspace gobernado** para que puedas trabajar
con agentes de IA sin entregarles, por accidente, la autoridad sobre la
arquitectura.

Hay una idea que debes tener clara:

> **CDAD hace que la gobernabilidad sea parte natural del flujo de
> trabajo, no una tarea adicional que tengas que recordar todo el
> tiempo.**

Esto es intencional. En la práctica, CDAD puede **ocultar parte de la
complejidad de la gobernabilidad al usuario**: tú trabajas con tu agente
y con tu proyecto; CDAD se encarga de poner límites, conservar el
contexto y obligar a pasar por el proceso correcto cuando una decisión
importante cambia.

**No significa que la IA decida por ti. Significa exactamente lo
contrario: CDAD protege tu autoridad.**

La regla de oro:

> **La IA puede analizar, proponer y ejecutar. La autoridad sobre las
> decisiones gobernadas sigue siendo humana.**

------------------------------------------------------------------------

# 1. El flujo completo, al callo

En V2.1 piensa así:

``` text
TÚ
 │
 ├─ 1. Defines qué quieres
 │
 ├─ 2. Delegas trabajo al agente
 │
 ▼
AGENTE
 │
 ├─ analiza
 ├─ implementa lo que está permitido
 └─ propone cambios cuando toca
 │
 ▼
TÚ
 │
 ├─ revisas
 ├─ aceptas / rechazas
 └─ autorizas el cambio
 │
 ▼
CDAD
 │
 ├─ registra la decisión
 ├─ actualiza el contexto gobernado
 ├─ mantiene el mapa arquitectónico
 └─ protege lo aprobado
```

## Regla simple

**Si es implementación rutinaria → delega.**

**Si cambia una decisión gobernada → proposal → revisión humana →
aceptación → ADR/contexto.**

------------------------------------------------------------------------

# 2. Primer uso: Bootstrap

Si tienes un proyecto existente:

### Paso 1 --- Ten listo tu diseño

Idealmente deja en la raíz del proyecto un documento con:

-   visión;
-   objetivo;
-   requisitos;
-   arquitectura;
-   stack;
-   restricciones;
-   reglas importantes.

Puede ser Markdown, TXT, Word, PDF u otro formato habitual.

El documento debe representar una decisión suficientemente madura. **No
le pidas a CDAD que adivine una arquitectura que todavía no has
decidido.**

Si no tienes documento de diseño, puedes definir el contexto conversando
con el agente.

### Paso 2 --- Delega el Bootstrap

Con tu ADE/agente dile, por ejemplo:

``` text
Clone CDAD Bootstrap and bootstrap the project.
```

El agente debe:

1.  inspeccionar el proyecto;
2.  identificar el documento fuente;
3.  detectar conflictos;
4.  evitar adivinar;
5.  mapear la información al contexto CDAD;
6.  preguntarte lo que falta;
7.  mostrarte el resultado;
8.  pedir tu confirmación.

------------------------------------------------------------------------

# 3. Las DOS confirmaciones que debes hacer

Este punto es importante.

CDAD no mezcla estas dos decisiones.

## Confirmación A --- ¿Mi diseño está listo?

El agente te preguntará, directa o indirectamente:

> ¿Este diseño representa realmente lo que quieres construir?

Si **NO**:

``` text
No
→ corriges el diseño
→ vuelves a revisar
```

Si **SÍ**:

``` text
Acepto el diseño
```

Entonces CDAD puede utilizarlo como fuente.

------------------------------------------------------------------------

## Confirmación B --- ¿CDAD entendió correctamente mi solución?

Después de analizar el diseño, CDAD construirá el contexto gobernado.

Debes revisar que represente correctamente tu intención:

-   visión;
-   arquitectura;
-   stack;
-   principios;
-   restricciones;
-   glosario.

Si algo está mal:

``` text
NO
→ corriges / aclaras
→ el agente vuelve a mapear
```

Si está bien:

``` text
SÍ, el contexto representa mi solución
```

**Recién aquí queda listo para congelar.**

------------------------------------------------------------------------

# 4. Revisa el workspace

Después del Bootstrap tendrás, como mínimo, una estructura similar a:

``` text
/
├── AGENTS.md
├── CDAD-COMPLETION.md
├── CHANGE-REQUEST.md
├── INDEX.md
├── SOURCE-BRIEF.*
└── cdad/
    ├── README.md
    ├── adr/
    ├── context/
    ├── docs/
    ├── proposals/
    └── scripts/
```

No muevas ni redistribuyas arbitrariamente los archivos CDAD.

`SOURCE-BRIEF.*` conserva la fuente original utilizada para construir el
contexto.

------------------------------------------------------------------------

# 5. El archivo que mirarás más: `cdad/context/stack.md`

Este archivo es tu **mapa rápido de arquitectura**.

Sirve para responder:

> **¿Qué es este sistema y cómo está armado?**

Incluye vistas como:

1.  stack tecnológico;
2.  componentes y relaciones;
3.  topología de despliegue;
4.  observabilidad;
5.  reglas de dependencias;
6.  historial de cambios arquitectónicos.

### Importante

**No edites `stack.md` directamente para cambiar una decisión
gobernada.**

El mapa es un **resultado del proceso de gobierno**, no la puerta de
entrada.

------------------------------------------------------------------------

# 6. Freeze: aquí comienza el régimen gobernado

Cuando hayas revisado y aceptado el contexto:

``` text
cdad/scripts/cdad-freeze.sh
```

El Freeze ratifica el contexto.

A partir de ese momento, CDAD entra en el régimen gobernado:

``` text
ANTES DEL FREEZE

Agente
  ↓
puede preparar contexto
```

``` text
DESPUÉS DEL FREEZE

Agente
  ↓
lee contexto gobernado
  ↓
NO puede modificarlo directamente
```

Esto es fundamental.

**La protección no depende solamente de que el agente "prometa" respetar
una regla.**

CDAD busca que la restricción sea realmente aplicable.

------------------------------------------------------------------------

# 7. Ahora sí: delega trabajo a la IA

Una vez congelado el contexto puedes trabajar normalmente con tu ADE.

Por ejemplo:

``` text
Implementa el endpoint de clientes siguiendo la arquitectura
y las restricciones definidas por CDAD.
```

O:

``` text
Implementa esta User Story.
No cambies decisiones arquitectónicas.
```

El agente puede:

-   analizar;
-   escribir código;
-   crear tests;
-   modificar archivos de implementación;
-   ejecutar herramientas;
-   investigar dentro del contexto permitido.

## No necesitas crear un Change Request para todo

Esto es muy importante.

**Una tarea normal de implementación NO necesita proposal.**

Ejemplo:

``` text
Agregar validación de email
Crear unit tests
Refactorizar una función
Corregir un bug
Agregar logging
```

Si no cambia una decisión gobernada, **trabaja normalmente**.

------------------------------------------------------------------------

# 8. ¿Cuándo debo usar `CHANGE-REQUEST.md`?

Úsalo cuando quieras cambiar algo que CDAD considera gobernado.

Por ejemplo:

-   cambiar una tecnología;
-   cambiar una decisión arquitectónica;
-   cambiar una integración;
-   modificar una restricción;
-   cambiar una relación entre componentes;
-   modificar una decisión registrada en un ADR;
-   introducir una modificación que afecte el mapa arquitectónico.

La puerta de entrada es siempre:

``` text
CHANGE-REQUEST.md
```

------------------------------------------------------------------------

# 9. Cómo hacer un Change Request

Abre:

``` text
CHANGE-REQUEST.md
```

Explica, en términos simples:

``` text
¿Qué quiero cambiar?
¿Por qué?
¿Qué lo provocó?
¿Qué parte afecta?
¿Cuál es el impacto?
¿Cuál es el riesgo?
¿Qué prioridad tiene?
```

Después dile al agente:

``` text
Process the change request.
```

No necesitas decirle qué archivo de `cdad/` debe modificar.

**Esa es precisamente la gracia del proceso.**

------------------------------------------------------------------------

# 10. ¿Qué hace el agente con el Change Request?

El agente analiza la solicitud y genera una **Proposal**.

La Proposal debe permitirte entender:

-   decisión actual;
-   cambio solicitado;
-   cambio propuesto;
-   motivo;
-   impacto;
-   riesgos;
-   alternativas;
-   filas del mapa arquitectónico que cambiarían.

Conceptualmente:

``` text
CHANGE-REQUEST.md
       │
       ▼
   PROPOSAL
       │
       ▼
 REVISIÓN HUMANA
```

------------------------------------------------------------------------

# 11. Tu trabajo con una Proposal

Aquí es donde tú mandas.

Lee la Proposal y decide:

## Aceptar

Si estás de acuerdo:

``` text
Acepto la proposal.
```

El proceso puede continuar hacia la actualización de la decisión
correspondiente.

## Rechazar

Si no estás de acuerdo:

``` text
Rechazo la proposal.
```

No se cambia la arquitectura.

## Pedir cambios

Si la idea es correcta pero la propuesta está incompleta:

``` text
Request changes.
```

El agente debe corregir la Proposal.

------------------------------------------------------------------------

# 12. La regla más importante de CDAD

**Nunca aceptes una Proposal solo porque la generó la IA.**

La IA propone.

**Tú decides.**

CDAD existe precisamente para mantener esa frontera.

``` text
AI
 │
 ├── analiza
 ├── propone
 └── recomienda
       │
       ▼
     HUMANO
       │
       ├── acepta
       ├── rechaza
       └── pide cambios
```

------------------------------------------------------------------------

# 13. Después de aceptar: ADR

Cuando una Proposal representa una nueva decisión arquitectónica, esa
decisión debe quedar registrada como **ADR (Architecture Decision
Record)**.

La secuencia conceptual es:

``` text
Proposal
   ↓
Human Approval
   ↓
ADR
   ↓
Architecture / Context Update
   ↓
Map Update
```

El objetivo es que posteriormente puedas responder:

> ¿Por qué hicimos esto?

Y no solamente:

> ¿Quién escribió este código?

------------------------------------------------------------------------

# 14. El mapa arquitectónico debe seguir la decisión

Si una decisión aceptada cambia la arquitectura, el mapa también debe
reflejarla.

``` text
ADR
 ↓
Cambio arquitectónico
 ↓
stack.md / architecture.md
```

No hagas el cambio "a mano por fuera".

La relación entre decisión y arquitectura debe permanecer trazable.

------------------------------------------------------------------------

# 15. Qué hacer cuando el agente intenta cambiar algo protegido

Si CDAD está correctamente configurado y congelado, el agente debería
quedar bloqueado cuando intente modificar directamente contenido
gobernado.

Por ejemplo:

``` text
Agent
  ↓
edita cdad/context/stack.md
  ↓
BLOCKED
```

Eso es correcto.

No debes solucionar el problema:

``` text
"desactivando la protección"
```

Si el cambio es legítimo:

``` text
CHANGE-REQUEST.md
      ↓
PROPOSAL
      ↓
TU APROBACIÓN
      ↓
ADR / CONTEXTO
```

------------------------------------------------------------------------

# 16. ¿Qué significa "delegar"?

Delegar en CDAD significa:

> **Entregar a la IA la ejecución de un trabajo dentro de límites que tú
> ya definiste.**

No significa:

> "Haz lo que quieras con la arquitectura."

Ejemplo correcto:

``` text
Implementa la autenticación usando el patrón
definido en el contexto CDAD.
```

Ejemplo peligroso:

``` text
Diseña libremente la arquitectura y haz los cambios que estimes.
```

En el segundo caso estás entregando a la IA una autoridad que CDAD
justamente intenta evitar.

------------------------------------------------------------------------

# 17. ¿Qué significa "aceptar"?

Aceptar significa **autorizar una decisión**, no simplemente decir "se
ve bien".

Cuando aceptas una Proposal estás diciendo:

> **Estoy de acuerdo con esta modificación y autorizo que pase al
> proceso gobernado.**

Por eso debes revisar al menos:

-   qué cambia;
-   por qué cambia;
-   impacto;
-   riesgos;
-   alternativas;
-   efecto arquitectónico.

------------------------------------------------------------------------

# 18. El ciclo normal de trabajo

En el día a día:

``` text
┌──────────────────────┐
│      IDEA / TASK     │
└──────────┬───────────┘
           │
           ▼
       ¿Cambia una
       decisión
       gobernada?
        /       \
      NO         SÍ
      │           │
      ▼           ▼
   DELEGA      CHANGE REQUEST
      │           │
      ▼           ▼
   IMPLEMENTA   PROPOSAL
      │           │
      │           ▼
      │        REVISAS
      │        /  |  \
      │       /   |   \
      │    acepta rechaza cambios
      │       │
      │       ▼
      │      ADR
      │       │
      │       ▼
      │   CONTEXTO / MAPA
      │       │
      └───────┴──────► CONTINÚA
                         │
                         ▼
                      TEST / CI
```

------------------------------------------------------------------------

# 19. Regla práctica para no complicarte

Usa esta pregunta:

> **¿Estoy cambiando código o estoy cambiando una decisión?**

### Si estás cambiando código

``` text
DELEGA → IMPLEMENTA → TESTEA → CI
```

### Si estás cambiando una decisión

``` text
CHANGE REQUEST
      ↓
PROPOSAL
      ↓
REVISA
      ↓
ACEPTA / RECHAZA / CAMBIOS
      ↓
ADR
      ↓
ACTUALIZA CONTEXTO
      ↓
IMPLEMENTA
```

------------------------------------------------------------------------

# 20. Qué NO debes hacer

### ❌ Editar directamente el contexto congelado

No hagas:

``` text
editar cdad/context/stack.md
```

para saltarte el proceso.

### ❌ Crear una copia para esquivar la protección

No:

``` text
cdad/context/stack-new.md
```

para introducir una decisión fuera del flujo.

### ❌ Desactivar los guardrails

No deshabilites la protección para que el agente pueda hacer el cambio.

### ❌ Pedir una Proposal para cada línea de código

CDAD no pretende burocratizar la implementación.

### ❌ Aceptar sin leer

La aprobación humana es parte del mecanismo de gobierno.

------------------------------------------------------------------------

# 21. Checklist rápido del usuario

## Al comenzar un proyecto

-   [ ] Tengo un diseño o estoy dispuesto a definirlo con el agente.
-   [ ] Ejecuto el Bootstrap.
-   [ ] Confirmo que el diseño está listo.
-   [ ] Reviso el contexto generado.
-   [ ] Confirmo que representa mi intención.
-   [ ] Ejecuto Freeze.
-   [ ] Verifico que la protección funciona.

## Durante el desarrollo

-   [ ] Delego tareas normales.
-   [ ] No modifico directamente el contexto gobernado.
-   [ ] Si una tarea cambia una decisión, uso `CHANGE-REQUEST.md`.
-   [ ] Reviso la Proposal.
-   [ ] Acepto, rechazo o pido cambios.
-   [ ] La decisión aceptada queda registrada.
-   [ ] El mapa arquitectónico permanece consistente.

------------------------------------------------------------------------

# 22. La filosofía CDAD en una frase

> **Tú defines la intención. CDAD protege la intención. La IA acelera la
> implementación.**

O, todavía más directo:

``` text
HUMANO
   ↓
INTENCIÓN
   ↓
CDAD
   ↓
CONTEXTO GOBERNADO
   ↓
IA
   ↓
IMPLEMENTACIÓN
```

**CDAD no gobierna el código.**

**CDAD gobierna el conocimiento y las decisiones que conducen al
código.**

------------------------------------------------------------------------

# 23. Referencia rápida

  Situación                            Qué haces
  ------------------------------------ -----------------------------
  Nuevo proyecto                       Bootstrap
  Tengo diseño                         Confirmo que está terminado
  CDAD generó contexto                 Lo reviso y confirmo
  Contexto correcto                    Freeze
  Tarea rutinaria                      Delego
  Bug normal                           Delego
  Unit tests                           Delego
  Refactor sin cambio arquitectónico   Delego
  Cambio de arquitectura               `CHANGE-REQUEST.md`
  Proposal generada                    Reviso
  Estoy de acuerdo                     Acepto
  No estoy de acuerdo                  Rechazo
  Falta información                    Pido cambios
  Nueva decisión arquitectónica        ADR
  Contexto congelado                   No lo edito directamente
  Cambio legítimo después de Freeze    Vuelvo al flujo gobernado

------------------------------------------------------------------------

## 24. En resumen: tus 6 acciones

Si quieres recordar solo una cosa, recuerda esto:

``` text
1. DEFINE
   Tú defines la intención.

2. DELEGA
   Entregas la implementación a la IA.

3. REVISA
   Si la IA propone una decisión, tú la revisas.

4. ACEPTA / RECHAZA
   Tú mantienes la autoridad.

5. GOBIERNA
   Las decisiones aceptadas quedan en ADR + contexto.

6. PROTEGE
   Freeze impide que la IA cambie silenciosamente lo acordado.
```

> **Human First. AI Accelerated.**
>
> **Context is the Source of Truth.**
