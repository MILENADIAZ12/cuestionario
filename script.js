const Q = [
 {q:"Un computador quiere enviar datos a otro equipo. ¿Quién entrega el paquete?",
  ctx:"Origen:  192.168.1.20 /24\nDestino: 192.168.1.75",
  o:[["Lo envía directo, sin pasar por el router",true,"Correcto. Con máscara /24 los tres primeros números son la red. Los dos empiezan por 192.168.1, así que están en la misma red y se comunican directamente."],
     ["Lo envía al router (puerta de enlace)",false,"El router solo se usa cuando el destino está en otra red. Aquí ambos equipos comparten la red 192.168.1."],
     ["Lo envía al proveedor de Internet",false,"El proveedor solo interviene para salir a Internet. Esto es una comunicación dentro de la misma red local."],
     ["Primero le pregunta al servidor DNS",false,"El DNS traduce nombres (como google.com) a IP. Aquí ya se conoce la IP de destino."]]},
 {q:"Ahora el mismo computador envía datos a otra red. ¿Qué hace?",
  ctx:"Origen:  192.168.1.20 /24\nDestino: 192.168.2.10\nPuerta de enlace: 192.168.1.1",
  o:[["Lo envía directo al destino",false,"No puede: el tercer número cambió (1 → 2), así que el destino está en otra red y no lo alcanza directamente."],
     ["Lo envía a la puerta de enlace 192.168.1.1",true,"Correcto. Cuando el destino está en otra red, el equipo le pasa el paquete al router (su puerta de enlace) para que lo encamine."],
     ["Descarta el paquete porque el destino no existe",false,"El destino sí puede existir; solo está en otra red. Para eso existe el router."],
     ["Le pide una nueva IP al servidor DHCP",false,"DHCP solo reparte direcciones IP. No tiene nada que ver con enviar un paquete a otra red."]]},
 {q:"¿Cuántos equipos (hosts) se pueden conectar como máximo en una red con máscara /24?",
  o:[["256",false,"Son 256 direcciones en total, pero dos no se pueden asignar a equipos: la primera (dirección de red) y la última (broadcast)."],
     ["254",true,"Correcto. 2⁸ = 256 direcciones, menos la de red (por ejemplo .0) y la de broadcast (.255), quedan 254 para equipos."],
     ["255",false,"Solo se resta una dirección. Hay que restar dos: la de red y la de broadcast."],
     ["24",false,"El /24 no es la cantidad de equipos; indica que 24 de los 32 bits son la parte de red."]]},
 {q:"¿Cuál de estas direcciones IPv6 está bien escrita?",
  o:[["<code>2001:db8::1</code>",true,"Correcto. Usa números hexadecimales separados por dos puntos, y el <code>::</code> aparece una sola vez para abreviar los ceros."],
     ["<code>2001::db8::1</code>",false,"El <code>::</code> solo se puede usar una vez. Si aparece dos veces no se sabe cuántos ceros reemplaza cada uno."],
     ["<code>FE80:G1::1</code>",false,"La letra G no existe en hexadecimal. Solo se usan los números del 0 al 9 y las letras de la A a la F."],
     ["<code>192.168.300.1</code>",false,"Tiene formato IPv4 (con puntos) y además es inválida: cada número de IPv4 va de 0 a 255, y 300 se pasa."]]},
 {q:"¿Cuál de estas direcciones es PÚBLICA (se puede ver en Internet)?",
  o:[["<code>10.5.5.5</code>",false,"Todo lo que empieza por 10. es privado. Solo funciona dentro de una red local."],
     ["<code>172.20.1.1</code>",false,"El rango de 172.16 a 172.31 es privado, y 172.20 está dentro de ese rango."],
     ["<code>200.21.45.3</code>",true,"Correcto. No pertenece a ninguno de los rangos privados (10.x, 172.16–31.x, 192.168.x), así que es una dirección pública."],
     ["<code>192.168.0.1</code>",false,"Todo lo que empieza por 192.168. es privado. Es la típica IP del router de una casa."]]},
 {q:"¿A qué clase pertenece la dirección <code>150.10.4.2</code>?",
  o:[["Clase A",false,"La clase A va de 1 a 126 en el primer número. 150 se pasa de ese rango."],
     ["Clase B",true,"Correcto. La clase B va de 128 a 191 en el primer número, y 150 está dentro."],
     ["Clase C",false,"La clase C va de 192 a 223 en el primer número. 150 no llega a ese rango."],
     ["Clase D",false,"La clase D (224 a 239) se usa para multicast, es decir, para enviar a grupos, no a un solo equipo."]]},
 {q:"¿Qué es la máscara de red (o máscara de subred)?",
  ctx:"Ejemplo: 255.255.255.0  (también se escribe /24)",
  o:[["Una contraseña que protege la red Wi-Fi",false,"La contraseña del Wi-Fi es otra cosa. La máscara no protege nada; solo sirve para dividir la dirección IP."],
     ["Un número que indica qué parte de la IP es la red y qué parte es el equipo",true,"Correcto. En 255.255.255.0 los tres primeros octetos (255) marcan la parte de red y el último (0) la parte del equipo. Así un dispositivo sabe si el destino está en su misma red o en otra."],
     ["La dirección IP del router",false,"La IP del router se llama puerta de enlace (por ejemplo 192.168.1.1). La máscara es un valor distinto que acompaña a cada IP."],
     ["Una IP falsa que oculta la IP real del equipo",false,"Eso se parece más a lo que hace el NAT o una VPN. La máscara no oculta ni cambia la dirección del equipo."]]},
 {q:"¿Cuántos octetos tiene una dirección IPv6?",
  o:[["4 octetos",false,"4 octetos (32 bits) es el tamaño de una dirección IPv4, por ejemplo 192.168.1.10."],
     ["8 octetos",false,"IPv6 se escribe en 8 grupos separados por dos puntos, pero cada grupo tiene 16 bits (2 octetos). No hay que confundir grupos con octetos."],
     ["16 octetos",true,"Correcto. IPv6 tiene 128 bits, y como cada octeto son 8 bits: 128 ÷ 8 = 16 octetos. Se escriben en 8 grupos de 2 octetos cada uno."],
     ["32 octetos",false,"32 es la cantidad de bits de IPv4, no de octetos. 32 octetos serían 256 bits, el doble de lo que tiene IPv6."]]},
 {q:"Un router conoce dos caminos hacia la misma red: uno con métrica 3 y otro con métrica 10. ¿Cuál usa?",
  o:[["El de métrica 10, porque es un número mayor",false,"En enrutamiento, una métrica mayor significa un camino peor (más saltos o más costo), no mejor."],
     ["El de métrica 3",true,"Correcto. El router prefiere siempre el camino con la menor métrica, porque es el más conveniente."],
     ["Los dos al mismo tiempo, siempre",false,"Solo se reparte el tráfico cuando las métricas son iguales. Aquí son diferentes."],
     ["El que se haya configurado primero",false,"El orden en que se configuraron no importa. El router decide por la métrica."]]},
 {q:"En una casa hay 5 equipos con IP privadas. Todos entran a una página que muestra \"tu IP es 181.50.20.7\" y les sale la misma. ¿Por qué?",
  o:[["Porque el DHCP les dio la misma IP a todos",false,"El DHCP le da una IP privada distinta a cada equipo; si dos tuvieran la misma, chocarían dentro de la red."],
     ["Porque el router hace NAT",true,"Correcto. El NAT cambia las IP privadas de todos los equipos por la única IP pública de la casa al salir a Internet."],
     ["Porque el DNS cambió sus direcciones",false,"El DNS traduce nombres a IP. No cambia la dirección de los equipos."],
     ["Porque usan IPv6",false,"Con IPv6 pasaría lo contrario: cada equipo podría tener su propia IP pública y no se necesitaría NAT."]]},
 {q:"Una tienda pequeña tiene un solo router con una sola salida a Internet y su red casi nunca cambia. ¿Qué enrutamiento le conviene?",
  o:[["Estático",true,"Correcto. Con una sola ruta que no cambia, configurarla a mano es simple, seguro y no gasta recursos del router."],
     ["Dinámico con OSPF",false,"Funcionaría, pero es innecesariamente complejo para una red tan pequeña. El dinámico vale la pena en redes grandes o con varios caminos."],
     ["Dinámico con BGP",false,"BGP se usa entre proveedores de Internet y redes muy grandes. Para una tienda sería exagerado."],
     ["Ninguno, el router no necesita rutas",false,"Sin una ruta (al menos la de por defecto) el router no sabría por dónde enviar el tráfico a Internet."]]},
 {q:"¿Qué protocolo usan los proveedores de Internet para intercambiar rutas entre sus redes?",
  o:[["RIP",false,"RIP es un protocolo sencillo para redes pequeñas, dentro de una misma organización."],
     ["OSPF",false,"OSPF se usa dentro de una organización, por ejemplo en la red de una empresa o una universidad."],
     ["BGP",true,"Correcto. BGP es el protocolo que conecta las redes de los distintos proveedores, por eso se dice que mantiene unido a Internet."],
     ["DHCP",false,"DHCP no es un protocolo de enrutamiento. Solo reparte direcciones IP a los equipos."]]}
];
const L = "abcd";
let answered=0, correct=0;
const list=document.getElementById('list');
function render(){
  list.innerHTML=""; answered=0; correct=0; update();
  Q.forEach((it,i)=>{
    const s=document.createElement('section'); s.className='q';
    s.innerHTML=`<div class="qhead"><span class="num">${String(i+1).padStart(2,'0')}</span><h2>${it.q}</h2></div>`+
      (it.ctx?`<div class="ctx">${it.ctx}</div>`:"")+`<div class="opts"></div>`;
    const box=s.querySelector('.opts');
    it.o.forEach((op,j)=>{
      const b=document.createElement('button'); b.type='button'; b.className='opt'; b.id=`q${i}o${j}`;
      b.innerHTML=`<span class="lab">${L[j]})</span>${op[0]}<span class="why" hidden>${op[2]}</span>`;
      b.addEventListener('click',()=>choose(s,it,j));
      box.appendChild(b);
    });
    list.appendChild(s);
  });
  document.getElementById('result').hidden=true;
}
function choose(s,it,j){
  if(s.classList.contains('done')) return;
  s.classList.add('done');
  const btns=s.querySelectorAll('.opt'); const ok=it.o[j][1];
  btns.forEach((b,k)=>{
    b.setAttribute('aria-disabled','true');
    b.querySelector('.why').hidden=false;
    if(it.o[k][1]){b.classList.add('right'); b.insertAdjacentHTML('beforeend',' ');}
    if(k===j){b.classList.add(ok?'right':'wrong');
      b.querySelector('.lab').insertAdjacentHTML('afterend',`<span class="tag ${ok?'ok':'no'}">${ok?'Tu respuesta · correcta':'Tu respuesta'}</span> `);}
    else if(it.o[k][1]){b.querySelector('.lab').insertAdjacentHTML('afterend','<span class="tag ok">Respuesta correcta</span> ');}
  });
  const v=document.createElement('p'); v.className='verdict '+(ok?'ok':'no');
  v.textContent=ok?'¡Bien! Lee abajo por qué las otras opciones no aplican.':'No es esa. Revisa la explicación de cada opción.';
  s.appendChild(v);
  answered++; if(ok) correct++; update();
  if(answered===Q.length) finish();
}
function update(){
  document.getElementById('answered').textContent=answered;
  document.getElementById('correct').textContent=correct;
  document.getElementById('fill').style.width=(answered/Q.length*100)+'%';
}
function finish(){
  const n=correct/Q.length*5; const r=document.getElementById('result');
  document.getElementById('rtitle').textContent=`Resultado: ${correct} de ${Q.length} · Nota ${n.toFixed(1)} / 5.0`;
  document.getElementById('rtext').textContent= correct>=10?'Dominas el tema: sabes cómo decide el router y cómo funcionan las direcciones.':
    correct>=7?'Vas bien. Repasa las preguntas que fallaste, sobre todo las de tablas de enrutamiento y máscaras.':
    'Te conviene repasar: cómo se sabe si dos IP están en la misma red, qué hace la puerta de enlace y cómo elige el router la ruta.';
  r.hidden=false; r.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
}
document.getElementById('reset').addEventListener('click',()=>{render();window.scrollTo(0,0);});
render();
