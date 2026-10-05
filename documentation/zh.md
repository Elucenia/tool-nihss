<!-- ELUCENIA technical documentation · nihss · zh · no clinical/professional/rights approval -->

# NIHSS（美国国立卫生研究院卒中量表）

[条件、来源与许可](https://elucenia.org/zh/tools/nihss)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 1a. 意识水平

`n1a`

- `0` — 0 – 清醒，反应迅速
- `1` — 1 – 非清醒，但轻微刺激可唤醒
- `2` — 2 – 非清醒，需反复或疼痛刺激
- `3` — 3 – 仅有反射反应或完全无反应

### 1b. 提问：月份及年龄

`n1b`

- `0` — 0 – 两题均回答正确
- `1` — 1 – 一题回答正确
- `2` — 2 – 无正确回答

### 1c. 指令：睁眼及闭眼；非瘫痪侧手握拳及张开

`n1c`

- `0` — 0 – 完成两项任务
- `1` — 1 – 完成一项任务
- `2` — 2 – 不能完成任何任务

### 2. 最佳共轭凝视（水平）

`n2`

- `0` — 0 – 正常
- `1` — 1 – 部分凝视麻痹
- `2` — 2 – 强迫性偏斜或完全麻痹，不能通过头眼反射纠正

### 3. 视野

`n3`

- `0` — 0 – 无视野缺损
- `1` — 1 – 部分偏盲
- `2` — 2 – 完全偏盲
- `3` — 3 – 双侧偏盲（失明，包括皮质性）

### 4. 面瘫

`n4`

- `0` — 0 – 运动正常且对称
- `1` — 1 – 轻度面瘫（鼻唇沟变浅、微笑不对称）
- `2` — 2 – 部分面瘫（下面部完全或几乎完全麻痹）
- `3` — 3 – 一侧或双侧上、下面部完全瘫痪

### 5a. 左臂运动（坐位 90° 或卧位 45°，保持 10 s）

`n5a`

- `0` — 0 – 10 s 内无下落
- `1` — 1 – 10 s 前下落但未触及床面
- `2` — 2 – 部分抗重力能力（落到床上）
- `3` — 3 – 无抗重力能力
- `4` — 4 – 无运动
- `UN` — UN – 无法测试：截肢或肩关节融合；在临床表格中记录原因

### 5b. 右臂运动

`n5b`

- `0` — 0 – 10 s 内无下落
- `1` — 1 – 10 s 前下落但未触及床面
- `2` — 2 – 部分抗重力能力（落到床上）
- `3` — 3 – 无抗重力能力
- `4` — 4 – 无运动
- `UN` — UN – 无法测试：截肢或肩关节融合；在临床表格中记录原因

### 6a. 左腿运动（卧位 30°，保持 5 s）

`n6a`

- `0` — 0 – 5 s 内无下落
- `1` — 1 – 5 s 前下落但未触及床面
- `2` — 2 – 部分抗重力能力（落到床上）
- `3` — 3 – 无抗重力能力
- `4` — 4 – 无运动
- `UN` — UN – 无法测试：截肢或髋关节融合；在临床表格中记录原因

### 6b. 右腿运动

`n6b`

- `0` — 0 – 5 s 内无下落
- `1` — 1 – 5 s 前下落但未触及床面
- `2` — 2 – 部分抗重力能力（落到床上）
- `3` — 3 – 无抗重力能力
- `4` — 4 – 无运动
- `UN` — UN – 无法测试：截肢或髋关节融合；在临床表格中记录原因

### 7. 肢体共济失调（指鼻及跟膝试验）

`n7`

- `0` — 0 – 无
- `1` — 1 – 一个肢体存在
- `2` — 2 – 两个肢体存在
- `UN` — UN – 无法测试：截肢或关节融合；在临床表格中记录原因

### 8. 感觉（针刺）

`n8`

- `0` — 0 – 正常
- `1` — 1 – 轻至中度丧失
- `2` — 2 – 重度或完全丧失

### 9. 最佳语言功能

`n9`

- `0` — 0 – 正常，无失语
- `1` — 1 – 轻至中度失语
- `2` — 2 – 重度失语
- `3` — 3 – 缄默或完全失语

### 10. 构音障碍

`n10`

- `0` — 0 – 关节正常
- `1` — 1 – 轻至中度（费力仍可理解）
- `2` — 2 – 重度（无法理解）或构音不能
- `UN` — UN – 无法测试：插管或其他妨碍发声的身体障碍；在临床表格中记录原因

### 11. 消退及注意障碍（忽略）

`n11`

- `0` — 0 – 无异常
- `1` — 1 – 一种感觉方式的忽视或消退
- `2` — 2 – 重度偏侧忽视或超过一种感觉方式

## 方法版本

NIHSS：15项，数值总分0–42；完整表格和NINDS共同数据元素允许的项目可记UN；含UN的评估在此保持不完整，不求总分，也不转换为0

## 已记录的公式

按量表顺序将15项相加（不要返回修改前面的评分）。评分依据是患者实际做出的表现，而不是检查者认为患者能够做到的表现。总分：0至42。

UN是完整表格中运动、共济失调和构音障碍项目在特定情况下使用的非数值类别。界面允许选择该类别，并提示评估不完整，不计算总分，也不将UN转换为0。请在相应临床表格中记录原因。这项保护措施不验证完整实施、项目间依赖关系、语言材料或自行撰写的译文。

## 限制与适用人群

对卒中神经功能损害进行结构化评估。应在相应表格中核对版本及各项目说明。已发表的巴西改编版和评估者间的一致性，并不等同于对本实现或其新翻译的临床验证。 UN是完整表格中运动、共济失调和构音障碍项目在特定情况下使用的非数值类别。界面允许选择该类别，并提示评估不完整，不计算总分，也不将UN转换为0。请在相应临床表格中记录原因。这项保护措施不验证完整实施、项目间依赖关系、语言材料或自行撰写的译文。

## 参考文献

- [Brott T et al. Measurements of acute cerebral infarction: a clinical examination scale. Stroke, 1989.](https://doi.org/10.1161/01.STR.20.7.864)

- [Cincura C et al. Validation of the National Institutes of Health Stroke Scale, Modified Rankin Scale and Barthel Index in Brazil: the role of cultural adaptation and structured interviewing. Cerebrovasc Dis, 2009.](https://doi.org/10.1159/000177918)

- [Caneda MAG et al. Confiabilidade de escalas de comprometimento neurológico em pacientes com acidente vascular cerebral. Arq Neuropsiquiatr, 2006.](https://doi.org/10.1590/S0004-282X2006000400034)

- [Powers WJ et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke (AHA/ASA). Stroke, 2019.](https://doi.org/10.1161/STR.0000000000000211)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=2MpS5ASNS24)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=AffsQhKESyV)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=HM2WeSADWAn)

- [NINDS official common data element: permitted numeric and UN categories; not a clinical approval.](https://cde.nlm.nih.gov/deView?tinyId=6A6rhtQkYKu)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
