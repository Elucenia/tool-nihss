<!-- ELUCENIA technical documentation · nihss · fr · no clinical/professional/rights approval -->

# NIHSS (échelle d’AVC du NIH)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/nihss)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### 1a. Niveau de conscience

`n1a`

- `0` — 0 – Alerte, répond rapidement
- `1` — 1 – Non alerte, mais s’éveille avec une stimulation minimale
- `2` — 2 – Non alerte, nécessite des stimulations répétées ou douloureuses
- `3` — 3 – Réponses réflexes uniquement ou absence totale de réponse

### 1b. Questions : mois et âge

`n1b`

- `0` — 0 – Répond correctement aux deux
- `1` — 1 – Répond correctement à une
- `2` — 2 – Aucune réponse correcte

### 1c. Consignes : ouvrir et fermer les yeux ; fermer et ouvrir la main non parétique

`n1c`

- `0` — 0 – Effectue les deux tâches
- `1` — 1 – Effectue une tâche
- `2` — 2 – Aucune tâche

### 2. Meilleur regard conjugué (horizontal)

`n2`

- `0` — 0 – Normal
- `1` — 1 – Paralysie partielle du regard
- `2` — 2 – Déviation forcée ou paralysie totale du regard non corrigée par la manœuvre oculocéphalique

### 3. Champs visuels

`n3`

- `0` — 0 – Aucune perte visuelle
- `1` — 1 – Hémianopsie partielle
- `2` — 2 – Hémianopsie complète
- `3` — 3 – Hémianopsie bilatérale (cécité, y compris corticale)

### 4. Paralysie faciale

`n4`

- `0` — 0 – Mouvements normaux et symétriques
- `1` — 1 – Paralysie mineure (effacement du sillon nasogénien, asymétrie du sourire)
- `2` — 2 – Paralysie partielle (totale ou quasi totale de la moitié inférieure du visage)
- `3` — 3 – Paralysie complète (visage supérieur et inférieur) d’un ou des deux côtés

### 5a. Motricité du bras gauche (90° assis ou 45° couché, pendant 10 s)

`n5a`

- `0` — 0 – Aucune chute pendant 10 s
- `1` — 1 – Chute avant 10 s sans toucher le lit
- `2` — 2 – Un certain effort contre la pesanteur (retombe sur le lit)
- `3` — 3 – Aucun effort contre la pesanteur
- `4` — 4 – Aucun mouvement
- `UN` — UN – Non testable : amputation ou arthrodèse de l’épaule ; consignez le motif dans le formulaire clinique

### 5b. Motricité du bras droit

`n5b`

- `0` — 0 – Aucune chute pendant 10 s
- `1` — 1 – Chute avant 10 s sans toucher le lit
- `2` — 2 – Un certain effort contre la pesanteur (retombe sur le lit)
- `3` — 3 – Aucun effort contre la pesanteur
- `4` — 4 – Aucun mouvement
- `UN` — UN – Non testable : amputation ou arthrodèse de l’épaule ; consignez le motif dans le formulaire clinique

### 6a. Motricité de la jambe gauche (30° couché, pendant 5 s)

`n6a`

- `0` — 0 – Aucune chute pendant 5 s
- `1` — 1 – Chute avant 5 s sans toucher le lit
- `2` — 2 – Un certain effort contre la pesanteur (retombe sur le lit)
- `3` — 3 – Aucun effort contre la pesanteur
- `4` — 4 – Aucun mouvement
- `UN` — UN – Non testable : amputation ou arthrodèse de la hanche ; consignez le motif dans le formulaire clinique

### 6b. Motricité de la jambe droite

`n6b`

- `0` — 0 – Aucune chute pendant 5 s
- `1` — 1 – Chute avant 5 s sans toucher le lit
- `2` — 2 – Un certain effort contre la pesanteur (retombe sur le lit)
- `3` — 3 – Aucun effort contre la pesanteur
- `4` — 4 – Aucun mouvement
- `UN` — UN – Non testable : amputation ou arthrodèse de la hanche ; consignez le motif dans le formulaire clinique

### 7. Ataxie des membres (doigt-nez et talon-genou)

`n7`

- `0` — 0 – Absent
- `1` — 1 – Présent dans un membre
- `2` — 2 – Présent dans deux membres
- `UN` — UN – Non testable : amputation ou arthrodèse ; consignez le motif dans le formulaire clinique

### 8. Sensibilité (piqûre)

`n8`

- `0` — 0 – Normal
- `1` — 1 – Perte légère à modérée
- `2` — 2 – Perte sévère ou totale

### 9. Meilleur langage

`n9`

- `0` — 0 – Normal, sans aphasie
- `1` — 1 – Aphasie légère à modérée
- `2` — 2 – Aphasie sévère
- `3` — 3 – Mutisme ou aphasie globale

### 10. Dysarthrie

`n10`

- `0` — 0 – Articulation normale
- `1` — 1 – Légère à modérée (compréhensible avec difficulté)
- `2` — 2 – Sévère (inintelligible) ou anarthrique
- `UN` — UN – Non testable : intubation ou autre obstacle physique à la parole ; consignez le motif dans le formulaire clinique

### 11. Extinction et inattention (négligence)

`n11`

- `0` — 0 – Aucune anomalie
- `1` — 1 – Inattention ou extinction dans une modalité
- `2` — 2 – Héminégligence sévère ou dans plusieurs modalités

## Édition de la méthode

NIHSS : 15 items, total numérique 0–42 ; UN dans les items autorisés par le formulaire complet et les CDE NINDS ; une évaluation avec UN reste incomplète ici, sans total ni conversion en 0

## Formule documentée

Additionnez les 15 items dans l’ordre de l’échelle (sans revenir corriger les items précédents). Cotez ce que fait le patient, et non ce que l’examinateur pense qu’il peut faire. Total : 0 à 42.

UN est une catégorie non numérique dans les situations spécifiques des items moteurs, d’ataxie et de dysarthrie du formulaire complet. L’interface permet de la sélectionner et signale une évaluation incomplète, sans total ni conversion de UN en 0. Consignez le motif dans le formulaire clinique correspondant. Cette protection ne valide ni l’administration complète, ni les dépendances entre items, ni les supports de langage, ni les traductions rédigées.

## Limites et population

Évaluation structurée de l’atteinte neurologique dans l’AVC. L’édition et les instructions de chaque item doivent être vérifiées dans le formulaire correspondant. L’adaptation brésilienne publiée et la concordance entre examinateurs n’équivalent pas à une validation clinique de cette implémentation ni de ses nouvelles traductions. UN est une catégorie non numérique dans les situations spécifiques des items moteurs, d’ataxie et de dysarthrie du formulaire complet. L’interface permet de la sélectionner et signale une évaluation incomplète, sans total ni conversion de UN en 0. Consignez le motif dans le formulaire clinique correspondant. Cette protection ne valide ni l’administration complète, ni les dépendances entre items, ni les supports de langage, ni les traductions rédigées.

## Références

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
