<!-- ELUCENIA technical documentation · nihss · en · no clinical/professional/rights approval -->

# NIHSS (NIH Stroke Scale)

[conditions, sources and permissions](https://elucenia.org/en/tools/nihss)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### 1a. Level of consciousness

`n1a`

- `0` — 0 – Alert, responds promptly
- `1` — 1 – Not alert, but arouses with minimal stimulation
- `2` — 2 – Not alert, requires repeated or painful stimulation
- `3` — 3 – Only reflex responses or completely unresponsive

### 1b. Questions: month and age

`n1b`

- `0` — 0 – Answers both correctly
- `1` — 1 – Answers one correctly
- `2` — 2 – Neither correct

### 1c. Commands: open and close eyes; grip and release the nonparetic hand

`n1c`

- `0` — 0 – Performs both tasks
- `1` — 1 – Performs one task
- `2` — 2 – Neither task

### 2. Best gaze (horizontal)

`n2`

- `0` — 0 – Normal
- `1` — 1 – Partial gaze palsy
- `2` — 2 – Forced deviation or total gaze palsy not overcome by the oculocephalic maneuver

### 3. Visual fields

`n3`

- `0` — 0 – No visual loss
- `1` — 1 – Partial hemianopia
- `2` — 2 – Complete hemianopia
- `3` — 3 – Bilateral hemianopia (blindness, including cortical)

### 4. Facial palsy

`n4`

- `0` — 0 – Normal and symmetric movements
- `1` — 1 – Minor paralysis (flattened nasolabial fold, asymmetry on smiling)
- `2` — 2 – Partial paralysis (total or near-total lower facial paralysis)
- `3` — 3 – Complete paralysis (upper and lower face) on one or both sides

### 5a. Left arm motor function (90° sitting or 45° supine, for 10 s)

`n5a`

- `0` — 0 – No drift for 10 s
- `1` — 1 – Drift before 10 s without touching the bed
- `2` — 2 – Some effort against gravity (falls to the bed)
- `3` — 3 – No effort against gravity
- `4` — 4 – No movement
- `UN` — UN – Untestable: amputation or shoulder joint fusion; document the reason on the clinical form

### 5b. Right arm motor function

`n5b`

- `0` — 0 – No drift for 10 s
- `1` — 1 – Drift before 10 s without touching the bed
- `2` — 2 – Some effort against gravity (falls to the bed)
- `3` — 3 – No effort against gravity
- `4` — 4 – No movement
- `UN` — UN – Untestable: amputation or shoulder joint fusion; document the reason on the clinical form

### 6a. Left leg motor function (30° supine, for 5 s)

`n6a`

- `0` — 0 – No drift for 5 s
- `1` — 1 – Drift before 5 s without touching the bed
- `2` — 2 – Some effort against gravity (falls to the bed)
- `3` — 3 – No effort against gravity
- `4` — 4 – No movement
- `UN` — UN – Untestable: amputation or hip joint fusion; document the reason on the clinical form

### 6b. Right leg motor function

`n6b`

- `0` — 0 – No drift for 5 s
- `1` — 1 – Drift before 5 s without touching the bed
- `2` — 2 – Some effort against gravity (falls to the bed)
- `3` — 3 – No effort against gravity
- `4` — 4 – No movement
- `UN` — UN – Untestable: amputation or hip joint fusion; document the reason on the clinical form

### 7. Limb ataxia (finger-to-nose and heel-to-shin)

`n7`

- `0` — 0 – Absent
- `1` — 1 – Present in one limb
- `2` — 2 – Present in two limbs
- `UN` — UN – Untestable: amputation or joint fusion; document the reason on the clinical form

### 8. Sensory function (pinprick)

`n8`

- `0` — 0 – Normal
- `1` — 1 – Mild to moderate loss
- `2` — 2 – Severe or total loss

### 9. Best language

`n9`

- `0` — 0 – Normal, no aphasia
- `1` — 1 – Mild to moderate aphasia
- `2` — 2 – Severe aphasia
- `3` — 3 – Mute or global aphasia

### 10. Dysarthria

`n10`

- `0` — 0 – Normal articulation
- `1` — 1 – Mild to moderate (understandable with difficulty)
- `2` — 2 – Severe (unintelligible) or anarthric
- `UN` — UN – Untestable: intubation or another physical barrier to speech; document the reason on the clinical form

### 11. Extinction and inattention (neglect)

`n11`

- `0` — 0 – No abnormality
- `1` — 1 – Inattention or extinction in one modality
- `2` — 2 – Severe hemi-inattention or in more than one modality

## Method edition

NIHSS: 15 items, numeric total 0–42; UN in items permitted by the full form and NINDS CDEs; an assessment with UN is incomplete here, with no total or conversion to 0

## Documented formula

Add the 15 items in scale order (do not return to correct earlier items). Score what the patient does, not what the examiner thinks the patient can do. Total: 0 to 42.

UN is a nonnumeric category in the specific situations described for the motor, ataxia and dysarthria items of the full form. The interface allows it to be selected and flags the assessment as incomplete, without a total score or converting UN to 0. Document the reason on the corresponding clinical form. This safeguard does not validate complete administration, dependencies between items, language materials or the authored translations.

## Limits and population

Structured assessment of neurological impairment in stroke. The edition and instructions for each item must be checked in the corresponding form. The published Brazilian adaptation and interexaminer agreement do not amount to clinical validation of this implementation or its new translations. UN is a nonnumeric category in the specific situations described for the motor, ataxia and dysarthria items of the full form. The interface allows it to be selected and flags the assessment as incomplete, without a total score or converting UN to 0. Document the reason on the corresponding clinical form. This safeguard does not validate complete administration, dependencies between items, language materials or the authored translations.

## References

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
