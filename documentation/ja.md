<!-- ELUCENIA technical documentation · nihss · ja · no clinical/professional/rights approval -->

# NIHSS（NIH脳卒中スケール）

[条件・出典・許諾](https://elucenia.org/ja/tools/nihss)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 1a. 意識レベル

`n1a`

- `0` — 0 – 覚醒、すぐに反応する
- `1` — 1 – 覚醒していないが軽い刺激で覚醒する
- `2` — 2 – 覚醒していない、反復刺激または痛み刺激が必要
- `3` — 3 – 反射反応のみ、または全く反応しない

### 1b. 質問：月と年齢

`n1b`

- `0` — 0 – 2問とも正答
- `1` — 1 – 1問正答
- `2` — 2 – 正答なし

### 1c. 指示：開眼・閉眼、非麻痺側の手を握る・開く

`n1c`

- `0` — 0 – 2つの課題を行う
- `1` — 1 – 1つの課題を行う
- `2` — 2 – 課題を行えない

### 2. 最良の共同注視（水平）

`n2`

- `0` — 0 – 正常
- `1` — 1 – 部分的注視麻痺
- `2` — 2 – 眼球頭反射で克服できない強制偏倚または完全麻痺

### 3. 視野

`n3`

- `0` — 0 – 視野障害なし
- `1` — 1 – 部分的半盲
- `2` — 2 – 完全半盲
- `3` — 3 – 両側半盲（皮質盲を含む失明）

### 4. 顔面麻痺

`n4`

- `0` — 0 – 正常で対称な運動
- `1` — 1 – 軽度麻痺（鼻唇溝の平坦化、笑顔の非対称）
- `2` — 2 – 部分麻痺（顔面下部は完全またはほぼ完全に麻痺）
- `3` — 3 – 片側または両側の上顔面・下顔面の完全麻痺

### 5a. 左上肢運動（座位90°または臥位45°、10 s）

`n5a`

- `0` — 0 – 10 s間下降なし
- `1` — 1 – 10 s未満で下降するがベッドには接触しない
- `2` — 2 – 一部抗重力努力あり（ベッドに落ちる）
- `3` — 3 – 抗重力努力なし
- `4` — 4 – 運動なし
- `UN` — UN – 検査不能：切断または肩関節固定術；理由を臨床様式に記録する

### 5b. 右上肢運動

`n5b`

- `0` — 0 – 10 s間下降なし
- `1` — 1 – 10 s未満で下降するがベッドには接触しない
- `2` — 2 – 一部抗重力努力あり（ベッドに落ちる）
- `3` — 3 – 抗重力努力なし
- `4` — 4 – 運動なし
- `UN` — UN – 検査不能：切断または肩関節固定術；理由を臨床様式に記録する

### 6a. 左下肢運動（臥位30°、5 s）

`n6a`

- `0` — 0 – 5 s間下降なし
- `1` — 1 – 5 s未満で下降するがベッドには接触しない
- `2` — 2 – 一部抗重力努力あり（ベッドに落ちる）
- `3` — 3 – 抗重力努力なし
- `4` — 4 – 運動なし
- `UN` — UN – 検査不能：切断または股関節固定術；理由を臨床様式に記録する

### 6b. 右下肢運動

`n6b`

- `0` — 0 – 5 s間下降なし
- `1` — 1 – 5 s未満で下降するがベッドには接触しない
- `2` — 2 – 一部抗重力努力あり（ベッドに落ちる）
- `3` — 3 – 抗重力努力なし
- `4` — 4 – 運動なし
- `UN` — UN – 検査不能：切断または股関節固定術；理由を臨床様式に記録する

### 7. 四肢失調（指鼻・踵膝試験）

`n7`

- `0` — 0 – なし
- `1` — 1 – 1肢にあり
- `2` — 2 – 2肢にあり
- `UN` — UN – 検査不能：切断または関節固定術；理由を臨床様式に記録する

### 8. 感覚（針刺激）

`n8`

- `0` — 0 – 正常
- `1` — 1 – 軽度～中等度の障害
- `2` — 2 – 重度または完全な障害

### 9. 最良の言語機能

`n9`

- `0` — 0 – 正常、失語なし
- `1` — 1 – 軽度～中等度の失語
- `2` — 2 – 重度失語
- `3` — 3 – 無言、または全失語

### 10. 構音障害

`n10`

- `0` — 0 – 関節は正常
- `1` — 1 – 軽度～中等度（理解に努力が必要）
- `2` — 2 – 重度（理解できない）、または構音不能
- `UN` — UN – 検査不能：挿管または発話を妨げるその他の身体的要因；理由を臨床様式に記録する

### 11. 消去・不注意（無視）

`n11`

- `0` — 0 – 変化なし
- `1` — 1 – 1つの感覚で無視または消去現象
- `2` — 2 – 重度の半側無視、または複数の感覚で無視

## 方法の版

NIHSS：15項目、数値合計0–42；完全版様式とNINDS共通データ要素で認められた項目にUNを使用；UNを含む評価はここでは未完了とし、合計や0への変換は行わない

## 記載された計算式

尺度の順に15項目を加算する（前の項目に戻って修正しない）。検者ができると思うことではなく、患者が実際に行ったことを採点する。合計：0～42。

UNは、完全版様式の運動、運動失調、構音障害の項目で規定された状況に用いる非数値カテゴリーである。画面ではUNを選択でき、評価未完了と表示し、総点を計算せずUNを0に変換しない。理由は対応する臨床様式に記録する。この保護措置は、全手順の実施、項目間の依存関係、言語資料、独自翻訳を検証するものではない。

## 限界・対象集団

脳卒中における神経学的障害を構造化して評価します。版と各項目の指示は、対応する用紙で確認する必要があります。公表されたブラジルの適応版と評価者間の一致は、この実装や新しい翻訳の臨床的な妥当性確認と同等ではありません。 UNは、完全版様式の運動、運動失調、構音障害の項目で規定された状況に用いる非数値カテゴリーである。画面ではUNを選択でき、評価未完了と表示し、総点を計算せずUNを0に変換しない。理由は対応する臨床様式に記録する。この保護措置は、全手順の実施、項目間の依存関係、言語資料、独自翻訳を検証するものではない。

## 参考文献

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
