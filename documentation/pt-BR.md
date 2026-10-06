<!-- ELUCENIA technical documentation · nihss · pt-BR · no clinical/professional/rights approval -->

# NIHSS (escala de AVC do NIH)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/nihss)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### 1a. Nível de consciência

`n1a`

- `0` — 0 – Alerta, responde com prontidão
- `1` — 1 – Não alerta, mas desperta com estímulo mínimo
- `2` — 2 – Não alerta, requer estímulo repetido ou doloroso
- `3` — 3 – Só respostas reflexas ou totalmente irresponsivo

### 1b. Perguntas: mês e idade

`n1b`

- `0` — 0 – Responde as duas corretamente
- `1` — 1 – Responde uma corretamente
- `2` — 2 – Nenhuma correta

### 1c. Comandos: abrir e fechar os olhos; fechar e abrir a mão não parética

`n1c`

- `0` — 0 – Realiza as duas tarefas
- `1` — 1 – Realiza uma tarefa
- `2` — 2 – Nenhuma tarefa

### 2. Melhor olhar conjugado (horizontal)

`n2`

- `0` — 0 – Normal
- `1` — 1 – Paralisia parcial do olhar
- `2` — 2 – Desvio forçado ou paralisia total que não vence a manobra oculocefálica

### 3. Campos visuais

`n3`

- `0` — 0 – Sem perda visual
- `1` — 1 – Hemianopsia parcial
- `2` — 2 – Hemianopsia completa
- `3` — 3 – Hemianopsia bilateral (cegueira, inclusive cortical)

### 4. Paralisia facial

`n4`

- `0` — 0 – Movimentos normais e simétricos
- `1` — 1 – Paralisia menor (apagamento do sulco nasolabial, assimetria ao sorrir)
- `2` — 2 – Paralisia parcial (total ou quase total da face inferior)
- `3` — 3 – Paralisia completa (face superior e inferior) de um ou dos dois lados

### 5a. Motor do braço esquerdo (90° sentado ou 45° deitado, por 10 s)

`n5a`

- `0` — 0 – Sem queda por 10 s
- `1` — 1 – Queda antes de 10 s, sem tocar a cama
- `2` — 2 – Algum esforço contra a gravidade (cai até a cama)
- `3` — 3 – Nenhum esforço contra a gravidade
- `4` — 4 – Nenhum movimento
- `UN` — UN – Não testável: amputação ou artrodese do ombro; registre o motivo no formulário clínico

### 5b. Motor do braço direito

`n5b`

- `0` — 0 – Sem queda por 10 s
- `1` — 1 – Queda antes de 10 s, sem tocar a cama
- `2` — 2 – Algum esforço contra a gravidade (cai até a cama)
- `3` — 3 – Nenhum esforço contra a gravidade
- `4` — 4 – Nenhum movimento
- `UN` — UN – Não testável: amputação ou artrodese do ombro; registre o motivo no formulário clínico

### 6a. Motor da perna esquerda (30° deitado, por 5 s)

`n6a`

- `0` — 0 – Sem queda por 5 s
- `1` — 1 – Queda antes de 5 s, sem tocar a cama
- `2` — 2 – Algum esforço contra a gravidade (cai até a cama)
- `3` — 3 – Nenhum esforço contra a gravidade
- `4` — 4 – Nenhum movimento
- `UN` — UN – Não testável: amputação ou artrodese do quadril; registre o motivo no formulário clínico

### 6b. Motor da perna direita

`n6b`

- `0` — 0 – Sem queda por 5 s
- `1` — 1 – Queda antes de 5 s, sem tocar a cama
- `2` — 2 – Algum esforço contra a gravidade (cai até a cama)
- `3` — 3 – Nenhum esforço contra a gravidade
- `4` — 4 – Nenhum movimento
- `UN` — UN – Não testável: amputação ou artrodese do quadril; registre o motivo no formulário clínico

### 7. Ataxia de membros (index-nariz e calcanhar-joelho)

`n7`

- `0` — 0 – Ausente
- `1` — 1 – Presente em um membro
- `2` — 2 – Presente em dois membros
- `UN` — UN – Não testável: amputação ou artrodese; registre o motivo no formulário clínico

### 8. Sensibilidade (picada de agulha)

`n8`

- `0` — 0 – Normal
- `1` — 1 – Perda leve a moderada
- `2` — 2 – Perda grave ou total

### 9. Melhor linguagem

`n9`

- `0` — 0 – Normal, sem afasia
- `1` — 1 – Afasia leve a moderada
- `2` — 2 – Afasia grave
- `3` — 3 – Mudo ou afasia global

### 10. Disartria

`n10`

- `0` — 0 – Articulação normal
- `1` — 1 – Leve a moderada (compreensível com dificuldade)
- `2` — 2 – Grave (ininteligível) ou anártrico
- `UN` — UN – Não testável: intubação ou outra barreira física à fala; registre o motivo no formulário clínico

### 11. Extinção e desatenção (negligência)

`n11`

- `0` — 0 – Nenhuma alteração
- `1` — 1 – Desatenção ou extinção em uma modalidade
- `2` — 2 – Hemidesatenção grave ou em mais de uma modalidade

## Edição do método

NIHSS: 15 itens, total numérico 0–42; UN nos itens permitidos pelo formulário completo e CDE NINDS; avaliação com UN fica incompleta aqui, sem soma nem conversão para 0

## Fórmula documentada

Soma dos 15 itens, na ordem da escala (sem voltar para corrigir itens anteriores). Pontue o que o paciente faz, não o que o examinador acha que ele consegue fazer. Total: 0 a 42.

UN é uma categoria não numérica nas situações específicas dos itens motores, de ataxia e de disartria do formulário completo. A interface permite selecioná-la e sinaliza avaliação incompleta, sem pontuação total e sem converter UN em 0. Registre o motivo no formulário clínico correspondente. Essa proteção não valida a administração completa, as dependências entre itens, os materiais de linguagem nem as traduções autorais.

## Limites e população

Avaliação estruturada do comprometimento neurológico em AVC. A edição e as instruções de cada item devem ser conferidas no formulário correspondente. A adaptação brasileira publicada e a concordância entre examinadores não equivalem a validação clínica desta implementação nem de suas novas traduções. UN é uma categoria não numérica nas situações específicas dos itens motores, de ataxia e de disartria do formulário completo. A interface permite selecioná-la e sinaliza avaliação incompleta, sem pontuação total e sem converter UN em 0. Registre o motivo no formulário clínico correspondente. Essa proteção não valida a administração completa, as dependências entre itens, os materiais de linguagem nem as traduções autorais.

## Referências

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Sem déficit mensurável pela NIHSS

Uma NIHSS 0 não exclui AVC: déficits de circulação posterior (marcha, vertigem, disfagia) pontuam pouco.


### 2

AVC leve (1 a 4 pontos)

Avalie se o déficit é incapacitante: um NIHSS baixo com afasia ou hemianopsia pode justificar reperfusão.


### 3

AVC moderado (5 a 15 pontos)

Investigue oclusão de grande vaso (angiotomografia) se estiver na janela de trombectomia.


### 4

AVC moderado a grave (16 a 20 pontos)

Alta probabilidade de oclusão de grande vaso; maior risco de transformação hemorrágica.


### 5

AVC grave (21 a 42 pontos)

Déficit extenso: prognóstico reservado sem reperfusão.

