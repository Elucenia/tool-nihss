<!-- ELUCENIA technical documentation · nihss · it · no clinical/professional/rights approval -->

# NIHSS (scala dell’ictus del NIH)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/nihss)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### 1a. Livello di coscienza

`n1a`

- `0` — 0 – Vigile, risponde prontamente
- `1` — 1 – Non vigile, ma si sveglia con stimolo minimo
- `2` — 2 – Non vigile, richiede stimoli ripetuti o dolorosi
- `3` — 3 – Solo risposte riflesse o totalmente non responsivo

### 1b. Domande: mese ed età

`n1b`

- `0` — 0 – Risponde correttamente a entrambe
- `1` — 1 – Risponde correttamente a una
- `2` — 2 – Nessuna risposta corretta

### 1c. Comandi: aprire e chiudere gli occhi; chiudere e aprire la mano non paretica

`n1c`

- `0` — 0 – Esegue entrambi i compiti
- `1` — 1 – Esegue un compito
- `2` — 2 – Nessun compito

### 2. Miglior sguardo coniugato (orizzontale)

`n2`

- `0` — 0 – Normale
- `1` — 1 – Paralisi parziale dello sguardo
- `2` — 2 – Deviazione forzata o paralisi totale dello sguardo non superata dalla manovra oculocefalica

### 3. Campi visivi

`n3`

- `0` — 0 – Nessuna perdita visiva
- `1` — 1 – Emianopsia parziale
- `2` — 2 – Emianopsia completa
- `3` — 3 – Emianopsia bilaterale (cecità, anche corticale)

### 4. Paralisi facciale

`n4`

- `0` — 0 – Movimenti normali e simmetrici
- `1` — 1 – Paralisi minore (appiattimento del solco nasolabiale, asimmetria al sorriso)
- `2` — 2 – Paralisi parziale (totale o quasi totale della metà inferiore del volto)
- `3` — 3 – Paralisi completa (volto superiore e inferiore) di uno o entrambi i lati

### 5a. Motricità del braccio sinistro (90° seduto o 45° supino, per 10 s)

`n5a`

- `0` — 0 – Nessuna caduta per 10 s
- `1` — 1 – Caduta prima di 10 s senza toccare il letto
- `2` — 2 – Qualche sforzo contro la gravità (cade sul letto)
- `3` — 3 – Nessuno sforzo contro la gravità
- `4` — 4 – Nessun movimento
- `UN` — UN – Non valutabile: amputazione o artrodesi della spalla; registrare il motivo nel modulo clinico

### 5b. Motricità del braccio destro

`n5b`

- `0` — 0 – Nessuna caduta per 10 s
- `1` — 1 – Caduta prima di 10 s senza toccare il letto
- `2` — 2 – Qualche sforzo contro la gravità (cade sul letto)
- `3` — 3 – Nessuno sforzo contro la gravità
- `4` — 4 – Nessun movimento
- `UN` — UN – Non valutabile: amputazione o artrodesi della spalla; registrare il motivo nel modulo clinico

### 6a. Motricità della gamba sinistra (30° supino, per 5 s)

`n6a`

- `0` — 0 – Nessuna caduta per 5 s
- `1` — 1 – Caduta prima di 5 s senza toccare il letto
- `2` — 2 – Qualche sforzo contro la gravità (cade sul letto)
- `3` — 3 – Nessuno sforzo contro la gravità
- `4` — 4 – Nessun movimento
- `UN` — UN – Non valutabile: amputazione o artrodesi dell’anca; registrare il motivo nel modulo clinico

### 6b. Motricità della gamba destra

`n6b`

- `0` — 0 – Nessuna caduta per 5 s
- `1` — 1 – Caduta prima di 5 s senza toccare il letto
- `2` — 2 – Qualche sforzo contro la gravità (cade sul letto)
- `3` — 3 – Nessuno sforzo contro la gravità
- `4` — 4 – Nessun movimento
- `UN` — UN – Non valutabile: amputazione o artrodesi dell’anca; registrare il motivo nel modulo clinico

### 7. Atassia degli arti (indice-naso e tallone-ginocchio)

`n7`

- `0` — 0 – Assente
- `1` — 1 – Presente in un arto
- `2` — 2 – Presente in due arti
- `UN` — UN – Non valutabile: amputazione o artrodesi; registrare il motivo nel modulo clinico

### 8. Sensibilità (puntura di spillo)

`n8`

- `0` — 0 – Normale
- `1` — 1 – Perdita da lieve a moderata
- `2` — 2 – Perdita grave o totale

### 9. Miglior linguaggio

`n9`

- `0` — 0 – Normale, senza afasia
- `1` — 1 – Afasia da lieve a moderata
- `2` — 2 – Afasia grave
- `3` — 3 – Muto o afasia globale

### 10. Disartria

`n10`

- `0` — 0 – Articolazione normale
- `1` — 1 – Da lieve a moderata (comprensibile con difficoltà)
- `2` — 2 – Grave (inintelligibile) o anartrico
- `UN` — UN – Non valutabile: intubazione o altro ostacolo fisico alla produzione del linguaggio parlato; registrare il motivo nel modulo clinico

### 11. Estinzione e disattenzione (neglect)

`n11`

- `0` — 0 – Nessuna alterazione
- `1` — 1 – Disattenzione o estinzione in una modalità
- `2` — 2 – Emidisattenzione grave o in più di una modalità

## Edizione del metodo

NIHSS: 15 item, totale numerico 0–42; UN negli item consentiti dal modulo completo e dai CDE NINDS; una valutazione con UN rimane incompleta qui, senza totale né conversione in 0

## Formula documentata

Sommare i 15 item nell’ordine della scala (senza tornare a correggere gli item precedenti). Valutare ciò che il paziente fa, non ciò che l’esaminatore ritiene che possa fare. Totale: da 0 a 42.

UN è una categoria non numerica nelle situazioni specifiche degli item motori, di atassia e disartria del modulo completo. L’interfaccia consente di selezionarla e segnala una valutazione incompleta, senza punteggio totale né conversione di UN in 0. Registrare il motivo nel modulo clinico corrispondente. Questa protezione non valida la somministrazione completa, le dipendenze tra item, i materiali linguistici né le traduzioni redatte dagli autori.

## Limiti e popolazione

Valutazione strutturata della compromissione neurologica nell’ictus. L’edizione e le istruzioni di ogni item devono essere verificate nel modulo corrispondente. L’adattamento brasiliano pubblicato e l’accordo tra esaminatori non equivalgono alla validazione clinica di questa implementazione né delle sue nuove traduzioni. UN è una categoria non numerica nelle situazioni specifiche degli item motori, di atassia e disartria del modulo completo. L’interfaccia consente di selezionarla e segnala una valutazione incompleta, senza punteggio totale né conversione di UN in 0. Registrare il motivo nel modulo clinico corrispondente. Questa protezione non valida la somministrazione completa, le dipendenze tra item, i materiali linguistici né le traduzioni redatte dagli autori.

## Riferimenti

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Nessun deficit misurabile alla NIHSS

Una NIHSS di 0 non esclude un ictus: i deficit della circolazione posteriore (andatura, vertigine, disfagia) ottengono pochi punti.


### 2

Ictus lieve (1 a 4 punti)

Valutare se il deficit è disabilitante: una NIHSS bassa con afasia o emianopsia può giustificare la riperfusione.


### 3

Ictus moderato (5 a 15 punti)

Indagare un’occlusione di grosso vaso (angiotomografia) se si è nella finestra per la trombectomia.


### 4

Ictus moderato-grave (16 a 20 punti)

Alta probabilità di occlusione di grosso vaso; maggiore rischio di trasformazione emorragica.


### 5

Ictus grave (21 a 42 punti)

Deficit esteso: prognosi riservata senza riperfusione.

