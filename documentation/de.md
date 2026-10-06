<!-- ELUCENIA technical documentation · nihss · de · no clinical/professional/rights approval -->

# NIHSS (NIH-Schlaganfall-Skala)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/nihss)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### 1a. Bewusstseinslage

`n1a`

- `0` — 0 – Wach, reagiert sofort
- `1` — 1 – Nicht wach, aber durch minimale Stimulation erweckbar
- `2` — 2 – Nicht wach, erfordert wiederholte oder schmerzhafte Stimulation
- `3` — 3 – Nur Reflexantworten oder vollständig reaktionslos

### 1b. Fragen: Monat und Alter

`n1b`

- `0` — 0 – Beantwortet beide richtig
- `1` — 1 – Beantwortet eine richtig
- `2` — 2 – Keine richtige Antwort

### 1c. Aufforderungen: Augen öffnen und schließen; nichtparetische Hand schließen und öffnen

`n1c`

- `0` — 0 – Führt beide Aufgaben aus
- `1` — 1 – Führt eine Aufgabe aus
- `2` — 2 – Keine Aufgabe

### 2. Beste Blickbewegung (horizontal)

`n2`

- `0` — 0 – Normal
- `1` — 1 – Partielle Blickparese
- `2` — 2 – Erzwungene Blickdeviation oder vollständige Blickparese, durch das okulozephale Manöver nicht überwindbar

### 3. Gesichtsfelder

`n3`

- `0` — 0 – Kein Gesichtsfeldausfall
- `1` — 1 – Partielle Hemianopsie
- `2` — 2 – Vollständige Hemianopsie
- `3` — 3 – Beidseitige Hemianopsie (Blindheit, einschließlich kortikaler Blindheit)

### 4. Fazialisparese

`n4`

- `0` — 0 – Normale und symmetrische Bewegungen
- `1` — 1 – Geringe Parese (verstrichene Nasolabialfalte, Asymmetrie beim Lächeln)
- `2` — 2 – Partielle Parese (vollständig oder fast vollständig im unteren Gesicht)
- `3` — 3 – Vollständige Parese (oberes und unteres Gesicht) einer oder beider Seiten

### 5a. Motorik des linken Arms (90° sitzend oder 45° liegend, für 10 s)

`n5a`

- `0` — 0 – Kein Absinken für 10 s
- `1` — 1 – Absinken vor 10 s, ohne das Bett zu berühren
- `2` — 2 – Etwas Anstrengung gegen die Schwerkraft (sinkt auf das Bett)
- `3` — 3 – Keine Anstrengung gegen die Schwerkraft
- `4` — 4 – Keine Bewegung
- `UN` — UN – Nicht testbar: Amputation oder Schulterarthrodese; Grund im klinischen Formular dokumentieren

### 5b. Motorik des rechten Arms

`n5b`

- `0` — 0 – Kein Absinken für 10 s
- `1` — 1 – Absinken vor 10 s, ohne das Bett zu berühren
- `2` — 2 – Etwas Anstrengung gegen die Schwerkraft (sinkt auf das Bett)
- `3` — 3 – Keine Anstrengung gegen die Schwerkraft
- `4` — 4 – Keine Bewegung
- `UN` — UN – Nicht testbar: Amputation oder Schulterarthrodese; Grund im klinischen Formular dokumentieren

### 6a. Motorik des linken Beins (30° liegend, für 5 s)

`n6a`

- `0` — 0 – Kein Absinken für 5 s
- `1` — 1 – Absinken vor 5 s, ohne das Bett zu berühren
- `2` — 2 – Etwas Anstrengung gegen die Schwerkraft (sinkt auf das Bett)
- `3` — 3 – Keine Anstrengung gegen die Schwerkraft
- `4` — 4 – Keine Bewegung
- `UN` — UN – Nicht testbar: Amputation oder Hüftarthrodese; Grund im klinischen Formular dokumentieren

### 6b. Motorik des rechten Beins

`n6b`

- `0` — 0 – Kein Absinken für 5 s
- `1` — 1 – Absinken vor 5 s, ohne das Bett zu berühren
- `2` — 2 – Etwas Anstrengung gegen die Schwerkraft (sinkt auf das Bett)
- `3` — 3 – Keine Anstrengung gegen die Schwerkraft
- `4` — 4 – Keine Bewegung
- `UN` — UN – Nicht testbar: Amputation oder Hüftarthrodese; Grund im klinischen Formular dokumentieren

### 7. Extremitätenataxie (Finger-Nase- und Knie-Hacke-Versuch)

`n7`

- `0` — 0 – Nicht vorhanden
- `1` — 1 – In einer Gliedmaße vorhanden
- `2` — 2 – In zwei Gliedmaßen vorhanden
- `UN` — UN – Nicht testbar: Amputation oder Arthrodese; Grund im klinischen Formular dokumentieren

### 8. Sensibilität (Nadelstich)

`n8`

- `0` — 0 – Normal
- `1` — 1 – Leichter bis mittelschwerer Ausfall
- `2` — 2 – Schwerer oder vollständiger Ausfall

### 9. Beste Sprachleistung

`n9`

- `0` — 0 – Normal, keine Aphasie
- `1` — 1 – Leichte bis mittelschwere Aphasie
- `2` — 2 – Schwere Aphasie
- `3` — 3 – Stumm oder globale Aphasie

### 10. Dysarthrie

`n10`

- `0` — 0 – Normale Artikulation
- `1` — 1 – Leicht bis mittelschwer (mit Mühe verständlich)
- `2` — 2 – Schwer (unverständlich) oder anarthrisch
- `UN` — UN – Nicht testbar: Intubation oder anderes körperliches Hindernis für das Sprechen; Grund im klinischen Formular dokumentieren

### 11. Extinktion und Unaufmerksamkeit (Neglect)

`n11`

- `0` — 0 – Keine Veränderung
- `1` — 1 – Vernachlässigung oder Extinktion in einer Modalität
- `2` — 2 – Schwere Halbseitenvernachlässigung oder in mehreren Modalitäten

## Fassung der Methode

NIHSS: 15 Items, numerischer Gesamtwert 0–42; UN bei den im vollständigen Formular und den NINDS-CDEs zugelassenen Items; eine Untersuchung mit UN bleibt hier unvollständig, ohne Summe oder Umwandlung in 0

## Dokumentierte Formel

Addieren Sie die 15 Items in der Reihenfolge der Skala (ohne frühere Items nachträglich zu korrigieren). Bewerten Sie, was der Patient tut, nicht was er nach Einschätzung des Untersuchers tun könnte. Gesamtwert: 0 bis 42.

UN ist eine nichtnumerische Kategorie für die im vollständigen Formular beschriebenen Situationen bei motorischen Items, Ataxie und Dysarthrie. Die Oberfläche erlaubt diese Auswahl und kennzeichnet die Untersuchung als unvollständig, ohne Gesamtscore oder Umwandlung von UN in 0. Dokumentieren Sie den Grund im entsprechenden klinischen Formular. Diese Schutzfunktion bestätigt weder die vollständige Durchführung noch Abhängigkeiten zwischen Items, Sprachmaterialien oder die selbst verfassten Übersetzungen.

## Grenzen und Population

Strukturierte Beurteilung neurologischer Beeinträchtigung beim Schlaganfall. Ausgabe und Anweisungen jedes Items müssen im zugehörigen Formular geprüft werden. Die veröffentlichte brasilianische Anpassung und Untersucherübereinstimmung sind keine klinische Validierung dieser Implementierung oder ihrer neuen Übersetzungen. UN ist eine nichtnumerische Kategorie für die im vollständigen Formular beschriebenen Situationen bei motorischen Items, Ataxie und Dysarthrie. Die Oberfläche erlaubt diese Auswahl und kennzeichnet die Untersuchung als unvollständig, ohne Gesamtscore oder Umwandlung von UN in 0. Dokumentieren Sie den Grund im entsprechenden klinischen Formular. Diese Schutzfunktion bestätigt weder die vollständige Durchführung noch Abhängigkeiten zwischen Items, Sprachmaterialien oder die selbst verfassten Übersetzungen.

## Referenzen

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Kein messbares Defizit nach der NIHSS

Eine NIHSS von 0 schließt einen Schlaganfall nicht aus: Defizite der hinteren Zirkulation (Gangstörung, Vertigo, Dysphagie) werden niedrig bewertet.


### 2

Leichter Schlaganfall (1 bis 4 Punkte)

Beurteilen Sie, ob das Defizit behindernd ist: Ein niedriger NIHSS-Wert mit Aphasie oder Hemianopsie kann eine Reperfusion rechtfertigen.


### 3

Mäßiger Schlaganfall (5 bis 15 Punkte)

Eine große Gefäßokklusion (Angiotomographie) untersuchen, wenn Sie sich im Thrombektomie-Zeitfenster befinden.


### 4

Mäßiger bis schwerer Schlaganfall (16 bis 20 Punkte)

Hohe Wahrscheinlichkeit eines großen Gefäßverschlusses; höheres Risiko einer hämorrhagischen Transformation.


### 5

Schwerer Schlaganfall (21 bis 42 Punkte)

Ausgedehntes Defizit: zurückhaltende Prognose ohne Reperfusion.

