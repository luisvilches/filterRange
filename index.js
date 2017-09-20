var rangos = [
  {
    range: 1,
    valor: "400000",
  },
  {
    range: 2,
    valor: "700000",
  },
  {
    range: 3,
    valor: "1000000",
  },
  {
    range: 4,
    valor: "1300000",
  },
  {
    range: 5,
    valor: "1600000",
  },
  {
    range: 6,
    valor: "1900000",
  },
  {
    range: 7,
    valor: "2200000",
  },
  {
    range: 8,
    valor: "2500000",
  },
  {
    range: 9,
    valor: "2800000",
  },
  {
    range: 10,
    valor: "3100000",
  },
  {
    range: 11,
    valor: "3400000",
  },
  {
    range: 12,
    valor: "3700000",
  },
  {
    range: 13,
    valor: "4000000",
  },
];

var configFilter = {
  container: "filtro",
  containerResult: "result",
  data: tarjetas_content,
  range: rangos
};

window.addEventListener('load', initRange,false);

function initRange(id,array){
  let a = document.getElementById(configFilter.container);
  let c = a.childNodes;
  c[3].setAttribute('max',configFilter.data.length);
  c[3].value = 1;
  c[3].style.backgroundSize = `${0}% ${100}%`;

  showRangeValue(c[3],configFilter.container);
};

function showRangeValue(rangeValue,id) {
  filter(configFilter.data,rangeValue.value,rangeValue);
};


function filter(array,value,id){
  let s = id.parentNode;
  let a = document.getElementById(s.id);
  let c = a.childNodes;
  let f = c[1].childNodes;
  let d = c[3];
  let range = f[0]
  let arrow = f[1];
  let medida = (value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min'));

  d.style.backgroundSize = medida + '% 100%';
  range.style.left =  `${medida}%`;

  if( medida < 10 ) {
    range.style.left =  `${( medida - 1)}%`;
    arrow.style.left =  `${( medida + 0.1)}%`;
  }

  if( medida < 90 && medida > 10) {
    range.style.left =  `${(medida - 6)}%`;
    arrow.style.left =  `${(medida - 0.85)}%`;
  }

  if(medida > 90) {
    range.style.left =  `${(medida - 9)}%`;
    arrow.style.left =  `${(medida - 1.9)}%`;
  }

  configFilter.range.forEach(function(i,index){
    switch(value){
      case String(i.range):
        range.innerHTML = format(Number(i.valor));
        break;
    };
  });

  console.log(value)

  var data = array.filter(item => {return item.range <= value});

  /**
   * aca va el codigo en template sting es6 del componente
   */
  
  console.log(data)
  
  document.getElementById(configFilter.containerResult).innerHTML = "";

  data.forEach(function(i){
    let container = document.createElement("div");
      container.setAttribute("class","container card");
    let row1 = document.createElement("div");
      row1.setAttribute("class","row");
    let row2 = document.createElement("div");
      row2.setAttribute("class","row");
    let col12 = document.createElement("div");
      col12.setAttribute("class","col-md-12");
    let h2 = document.createElement("h2");
      h2.innerText = i.name;

    let col1 = document.createElement("div");
      col1.setAttribute("class","col-md-3 text-center");
    let col2 = document.createElement("div");
      col2.setAttribute("class","col-md-6 text-left");
    let col3 = document.createElement("div");
      col3.setAttribute("class","col-md-3 text-center contBtn");

    let img = document.createElement("img");
      img.setAttribute("class","img-responsive");
      img.setAttribute("src",i.imagen);

    var ul = document.createElement("ul");

    i.ver_mas.forEach(function(u){
      let li = document.createElement("li");
      li.innerText = u.item;
      ul.appendChild(li);
    });

    let btn = document.createElement("a");
      btn.setAttribute("class","btnSize btnBorder");
      btn.innerText = "Quiero que me contacten"
      btn.setAttribute("href","/tarjetas/formularios/formulario.asp?tar="+i.idForm);

    let btnEvaluar = document.createElement("a");
      btnEvaluar.setAttribute("class","btnSize btnRed");
      //btnEvaluar.setAttribute("href", URL_BASE + "formularios/formulario.asp?tar=" + data[0].idForm);
      btnEvaluar.innerText = "Hazte cliente online";

    let contMoreInfo = document.createElement('div');
      contMoreInfo.setAttribute("class","subred");

    let verMas = document.createElement("a");
      verMas.setAttribute("href", "nuestras-tarjetas/"+i.link);
      verMas.setAttribute("class","moreInfoPlus");
      verMas.innerText = "Más información";

    contMoreInfo.appendChild(verMas);

    col1.appendChild(img);
    col2.appendChild(ul);

    switch(i.onbording){
      case true:
        col3.appendChild(btnEvaluar);
        break;
      case "":
        break;
      case "undefined":
        break;
      case null:
        break;
      default:
        break;
    };

    switch(i.idForm){
      case "":
        break;
      case null:
        break;
      case 0:
        break;
      default:
      col3.appendChild(btn);
    };

    col3.appendChild(contMoreInfo);
    col12.appendChild(h2);
    row1.appendChild(col12);
    row2.appendChild(col1);
    row2.appendChild(col2);
    row2.appendChild(col3);

    container.appendChild(row1);
    container.appendChild(row2);

    document.getElementById(configFilter.containerResult).appendChild(container);
  });

}

function format(input){
  var num = input.toString().replace(/\./g,'');
  if(!isNaN(num)){
  num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
  num = num.split('').reverse().join('').replace(/^[\.]/,'');
  return '$ ' + num;
  }

  else{ alert('Solo se permiten numeros');}
};
