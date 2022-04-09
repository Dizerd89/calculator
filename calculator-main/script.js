var calc = {
 numbA: '',
 act: null,
 numbB: '',
 isRvn: false,
 vvd:null,
}

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

var actions = ['plus','mine','divi','mult'];

$(document).ready(function() {
    console.log(calc);

for (let i = 0; i < numbers.length; i++) {
    const e = numbers[i];

    $("#" + e).click(function(){
        console.log("#" + e);

        if(!calc.act) {
            calc.numbA += e;
            showVvd(calc.numbA);
        } else {
        calc.numbA += e;
        showVvd(calc.numbB);
        }

        console.log(calc);
    });
}
 
for (let i = 0; i < actions.length; i++) {
    const e = actions[i];

    $("#" + e).click(function(){
        console.log("#" + e);

        calc.act = "plus";

        console.log(calc);
    });
}

    $("#rvn").click(function() {
          console.log("#rvn");

          calc.isRvn = true;
        
          if (calc.act === 'plus') {
            calc.vvd =  Number(calc.numbA) + Number(calc.numbB);
          }
   
          showVvd(calc.vvd);
          console.log(calc);
    });

    function showVvd(number) {
        $("#vvd").text(number);
    }
});
