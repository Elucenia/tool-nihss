<!-- ELUCENIA technical documentation · nihss · es · no clinical/professional/rights approval -->

# NIHSS (escala de ictus del NIH)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/nihss)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### 1a. Nivel de conciencia

`n1a`

- `0` — 0 – Alerta, responde con prontitud
- `1` — 1 – No alerta, pero despierta con estímulo mínimo
- `2` — 2 – No alerta, requiere estímulo repetido o doloroso
- `3` — 3 – Solo respuestas reflejas o totalmente sin respuesta

### 1b. Preguntas: mes y edad

`n1b`

- `0` — 0 – Responde ambas correctamente
- `1` — 1 – Responde una correctamente
- `2` — 2 – Ninguna correcta

### 1c. Órdenes: abrir y cerrar los ojos; cerrar y abrir la mano no parética

`n1c`

- `0` — 0 – Realiza ambas tareas
- `1` — 1 – Realiza una tarea
- `2` — 2 – Ninguna tarea

### 2. Mejor mirada conjugada (horizontal)

`n2`

- `0` — 0 – Normal
- `1` — 1 – Parálisis parcial de la mirada
- `2` — 2 – Desviación forzada o parálisis total de la mirada no superada con la maniobra oculocefálica

### 3. Campos visuales

`n3`

- `0` — 0 – Sin pérdida visual
- `1` — 1 – Hemianopsia parcial
- `2` — 2 – Hemianopsia completa
- `3` — 3 – Hemianopsia bilateral (ceguera, incluida la cortical)

### 4. Parálisis facial

`n4`

- `0` — 0 – Movimientos normales y simétricos
- `1` — 1 – Parálisis menor (borramiento del surco nasolabial, asimetría al sonreír)
- `2` — 2 – Parálisis parcial (total o casi total de la mitad inferior de la cara)
- `3` — 3 – Parálisis completa (cara superior e inferior) de uno o ambos lados

### 5a. Función motora del brazo izquierdo (90° sentado o 45° tumbado, durante 10 s)

`n5a`

- `0` — 0 – Sin caída durante 10 s
- `1` — 1 – Caída antes de 10 s sin tocar la cama
- `2` — 2 – Algún esfuerzo contra la gravedad (cae hasta la cama)
- `3` — 3 – Ningún esfuerzo contra la gravedad
- `4` — 4 – Ningún movimiento
- `UN` — UN – No evaluable: amputación o artrodesis del hombro; registre el motivo en el formulario clínico

### 5b. Función motora del brazo derecho

`n5b`

- `0` — 0 – Sin caída durante 10 s
- `1` — 1 – Caída antes de 10 s sin tocar la cama
- `2` — 2 – Algún esfuerzo contra la gravedad (cae hasta la cama)
- `3` — 3 – Ningún esfuerzo contra la gravedad
- `4` — 4 – Ningún movimiento
- `UN` — UN – No evaluable: amputación o artrodesis del hombro; registre el motivo en el formulario clínico

### 6a. Función motora de la pierna izquierda (30° tumbado, durante 5 s)

`n6a`

- `0` — 0 – Sin caída durante 5 s
- `1` — 1 – Caída antes de 5 s sin tocar la cama
- `2` — 2 – Algún esfuerzo contra la gravedad (cae hasta la cama)
- `3` — 3 – Ningún esfuerzo contra la gravedad
- `4` — 4 – Ningún movimiento
- `UN` — UN – No evaluable: amputación o artrodesis de la cadera; registre el motivo en el formulario clínico

### 6b. Función motora de la pierna derecha

`n6b`

- `0` — 0 – Sin caída durante 5 s
- `1` — 1 – Caída antes de 5 s sin tocar la cama
- `2` — 2 – Algún esfuerzo contra la gravedad (cae hasta la cama)
- `3` — 3 – Ningún esfuerzo contra la gravedad
- `4` — 4 – Ningún movimiento
- `UN` — UN – No evaluable: amputación o artrodesis de la cadera; registre el motivo en el formulario clínico

### 7. Ataxia de extremidades (dedo-nariz y talón-rodilla)

`n7`

- `0` — 0 – Ausente
- `1` — 1 – Presente en una extremidad
- `2` — 2 – Presente en dos extremidades
- `UN` — UN – No evaluable: amputación o artrodesis; registre el motivo en el formulario clínico

### 8. Sensibilidad (pinchazo)

`n8`

- `0` — 0 – Normal
- `1` — 1 – Pérdida leve a moderada
- `2` — 2 – Pérdida grave o total

### 9. Mejor lenguaje

`n9`

- `0` — 0 – Normal, sin afasia
- `1` — 1 – Afasia leve a moderada
- `2` — 2 – Afasia grave
- `3` — 3 – Mudo o afasia global

### 10. Disartria

`n10`

- `0` — 0 – Articulación normal
- `1` — 1 – Leve a moderada (comprensible con dificultad)
- `2` — 2 – Grave (ininteligible) o anártrico
- `UN` — UN – No evaluable: intubación u otra barrera física para hablar; registre el motivo en el formulario clínico

### 11. Extinción e inatención (negligencia)

`n11`

- `0` — 0 – Ninguna alteración
- `1` — 1 – Inatención o extinción en una modalidad
- `2` — 2 – Heminegligencia grave o en más de una modalidad

## Edición del método

NIHSS: 15 ítems, total numérico 0–42; UN en los ítems permitidos por el formulario completo y los CDE de NINDS; una evaluación con UN queda incompleta aquí, sin total ni conversión a 0

## Fórmula documentada

Sume los 15 ítems en el orden de la escala (sin volver para corregir ítems anteriores). Puntúe lo que el paciente hace, no lo que el examinador cree que puede hacer. Total: 0 a 42.

UN es una categoría no numérica en las situaciones específicas de los ítems motores, de ataxia y de disartria del formulario completo. La interfaz permite seleccionarla y señala que la evaluación está incompleta, sin puntuación total ni conversión de UN a 0. Registre el motivo en el formulario clínico correspondiente. Esta protección no valida la administración completa, las dependencias entre ítems, los materiales de lenguaje ni las traducciones autorales.

## Límites y población

Evaluación estructurada del déficit neurológico en el ictus. La edición y las instrucciones de cada ítem deben comprobarse en el formulario correspondiente. La adaptación brasileña publicada y la concordancia entre examinadores no equivalen a validación clínica de esta implementación ni de sus nuevas traducciones. UN es una categoría no numérica en las situaciones específicas de los ítems motores, de ataxia y de disartria del formulario completo. La interfaz permite seleccionarla y señala que la evaluación está incompleta, sin puntuación total ni conversión de UN a 0. Registre el motivo en el formulario clínico correspondiente. Esta protección no valida la administración completa, las dependencias entre ítems, los materiales de lenguaje ni las traducciones autorales.

## Referencias

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Sin déficit medible en la NIHSS

Una NIHSS de 0 no excluye un ictus: los déficits de circulación posterior (marcha, vértigo, disfagia) puntúan poco.


### 2

Ictus leve (1 a 4 puntos)

Evalúe si el déficit es incapacitante: una NIHSS baja con afasia o hemianopsia puede justificar reperfusión.


### 3

Ictus moderado (5 a 15 puntos)

Investigue oclusión de gran vaso (angiotomografía) si está dentro de la ventana de trombectomía.


### 4

Ictus moderado a grave (16 a 20 puntos)

Alta probabilidad de oclusión de gran vaso; mayor riesgo de transformación hemorrágica.


### 5

Ictus grave (21 a 42 puntos)

Déficit extenso: pronóstico reservado sin reperfusión.

