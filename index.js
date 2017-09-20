var data = [
  {
    name: "main",
    range: 2,
    valor: "1200000"
  },
  {
    name: "main",
    range: 4,
    valor: "2500000"
  },
  {
    name: "main",
    range: 5,
    valor: "3000000"
  },
  {
    name: "main",
    range: 1,
    valor: "400000"
  },
  {
    name: "main",
    range: 3,
    valor: "1500000"
  }
]

window.onload = function(){
  initRange('g-range');
}

function initRange(id){
  var d = document.getElementById(id);
  d.value = 1;
  d.style.backgroundSize = `${0}% ${100}%`;
  showRangeValue(d.value)
}

function showRangeValue(rangeValue) {
  var orden = data.sort(function (a, b){
      return (b.valor - a.valor)
  });

  filter(data,rangeValue);
}


function filter(array,value){
  var d = document.getElementById('g-range');
  var range = document.getElementById('g-range-value');
  var arrow = document.getElementById('arrow');

  d.style.backgroundSize = (value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) + '% 100%';
  range.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')))}%`;

  if((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) < 10){
    range.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) - 0)}%`;
    arrow.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) + 0.3)}%`;
  }

  if((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) < 90 && (value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) > 10){
    range.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) - 6)}%`;
    arrow.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) - 0.9)}%`;
  }

  if((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) > 90){
    range.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) - 11)}%`;
    arrow.style.left =  `${((value - d.getAttribute('min')) * 100 / (d.getAttribute('max') - d.getAttribute('min')) - 2)}%`;
  }

  array.forEach(function(i,index){
    switch(value){
      case String(i.range):
        range.innerHTML = format(Number(i.valor));
        break;
    };
  });

  var data = array.filter(item => {return item.valor >= value});

}

function format(input){
  var num = input.toString().replace(/\./g,'');
  if(!isNaN(num)){
  num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
  num = num.split('').reverse().join('').replace(/^[\.]/,'');
  return '$'+num;
  }

  else{ alert('Solo se permiten numeros');}
};
