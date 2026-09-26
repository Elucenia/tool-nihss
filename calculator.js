/* tool-nihss · Elucenia · https://github.com/Elucenia/tool-nihss
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"nihss","title":"NIHSS (escala de AVC do NIH)","fields":[["n1a","1a. Nível de consciência","sel",{"opts":{"0":"0 – Alerta, responde com prontidão","1":"1 – Não alerta, mas desperta com estímulo mínimo","2":"2 – Não alerta, requer estímulo repetido ou doloroso","3":"3 – Só respostas reflexas ou totalmente irresponsivo"}}],["n1b","1b. Perguntas: mês e idade","sel",{"opts":{"0":"0 – Responde as duas corretamente","1":"1 – Responde uma corretamente","2":"2 – Nenhuma correta"}}],["n1c","1c. Comandos: abrir e fechar os olhos; fechar e abrir a mão não parética","sel",{"opts":{"0":"0 – Realiza as duas tarefas","1":"1 – Realiza uma tarefa","2":"2 – Nenhuma tarefa"}}],["n2","2. Melhor olhar conjugado (horizontal)","sel",{"opts":{"0":"0 – Normal","1":"1 – Paralisia parcial do olhar","2":"2 – Desvio forçado ou paralisia total que não vence a manobra oculocefálica"}}],["n3","3. Campos visuais","sel",{"opts":{"0":"0 – Sem perda visual","1":"1 – Hemianopsia parcial","2":"2 – Hemianopsia completa","3":"3 – Hemianopsia bilateral (cegueira, inclusive cortical)"}}],["n4","4. Paralisia facial","sel",{"opts":{"0":"0 – Movimentos normais e simétricos","1":"1 – Paralisia menor (apagamento do sulco nasolabial, assimetria ao sorrir)","2":"2 – Paralisia parcial (total ou quase total da face inferior)","3":"3 – Paralisia completa (face superior e inferior) de um ou dos dois lados"}}],["n5a","5a. Motor do braço esquerdo (90° sentado ou 45° deitado, por 10 s)","sel",{"opts":{"0":"0 – Sem queda por 10 s","1":"1 – Queda antes de 10 s, sem tocar a cama","2":"2 – Algum esforço contra a gravidade (cai até a cama)","3":"3 – Nenhum esforço contra a gravidade","4":"4 – Nenhum movimento"}}],["n5b","5b. Motor do braço direito","sel",{"opts":{"0":"0 – Sem queda por 10 s","1":"1 – Queda antes de 10 s, sem tocar a cama","2":"2 – Algum esforço contra a gravidade (cai até a cama)","3":"3 – Nenhum esforço contra a gravidade","4":"4 – Nenhum movimento"}}],["n6a","6a. Motor da perna esquerda (30° deitado, por 5 s)","sel",{"opts":{"0":"0 – Sem queda por 5 s","1":"1 – Queda antes de 5 s, sem tocar a cama","2":"2 – Algum esforço contra a gravidade (cai até a cama)","3":"3 – Nenhum esforço contra a gravidade","4":"4 – Nenhum movimento"}}],["n6b","6b. Motor da perna direita","sel",{"opts":{"0":"0 – Sem queda por 5 s","1":"1 – Queda antes de 5 s, sem tocar a cama","2":"2 – Algum esforço contra a gravidade (cai até a cama)","3":"3 – Nenhum esforço contra a gravidade","4":"4 – Nenhum movimento"}}],["n7","7. Ataxia de membros (index-nariz e calcanhar-joelho)","sel",{"opts":{"0":"0 – Ausente","1":"1 – Presente em um membro","2":"2 – Presente em dois membros"}}],["n8","8. Sensibilidade (picada de agulha)","sel",{"opts":{"0":"0 – Normal","1":"1 – Perda leve a moderada","2":"2 – Perda grave ou total"}}],["n9","9. Melhor linguagem","sel",{"opts":{"0":"0 – Normal, sem afasia","1":"1 – Afasia leve a moderada","2":"2 – Afasia grave","3":"3 – Mudo ou afasia global"}}],["n10","10. Disartria","sel",{"opts":{"0":"0 – Articulação normal","1":"1 – Leve a moderada (compreensível com dificuldade)","2":"2 – Grave (ininteligível) ou anártrico"}}],["n11","11. Extinção e desatenção (negligência)","sel",{"opts":{"0":"0 – Nenhuma alteração","1":"1 – Desatenção ou extinção em uma modalidade","2":"2 – Hemidesatenção grave ou em mais de uma modalidade"}}]],"config":{"unit":"de 42","label":"NIHSS","fields":[["n1a","sel",0],["n1b","sel",0],["n1c","sel",0],["n2","sel",0],["n3","sel",0],["n4","sel",0],["n5a","sel",0],["n5b","sel",0],["n6a","sel",0],["n6b","sel",0],["n7","sel",0],["n8","sel",0],["n9","sel",0],["n10","sel",0],["n11","sel",0]],"bands":[[0,"low","Sem déficit mensurável pela NIHSS","Uma NIHSS 0 não exclui AVC: déficits de circulação posterior (marcha, vertigem, disfagia) pontuam pouco."],[1,"mid","AVC leve (1 a 4 pontos)","Avalie se o déficit é incapacitante: um NIHSS baixo com afasia ou hemianopsia pode justificar reperfusão."],[5,"mid","AVC moderado (5 a 15 pontos)","Investigue oclusão de grande vaso (angiotomografia) se estiver na janela de trombectomia."],[16,"high","AVC moderado a grave (16 a 20 pontos)","Alta probabilidade de oclusão de grande vaso; maior risco de transformação hemorrágica."],[21,"high","AVC grave (21 a 42 pontos)","Déficit extenso: prognóstico reservado sem reperfusão."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
