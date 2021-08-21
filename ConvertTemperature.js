class Convert{
    fromcelcius(to,number){
        if(to == "celcius"){
            return number;
        }
        if(to == "farenheit"){
            return (9/5) * number + 32;
        }
        if(to == "reamur"){
            return (4/5) * number;
        }
    }


    fromfarenheit(to,number){
        if(to == "farenheit"){
            return number;
        }

        if(to == "celcius"){
            return (5/9) * (number -32);
        }

        if(to == "reamur"){
            return(4/9) * (number - 32);
        }
    }

    fromreamur(to,number){
        if(to == "reamur"){
            return number;
        }
        if(to == "celcius"){
            return (5/4) * number;
        }
        if(to == "farenheit"){
            return (9/4) * number + 32;
        }
    }
}

const test = new Convert();
test.fromcelcius("fareenheit",1);

//console.log(test.fromcelcius("farenheit",1));

select = () =>{
    document.getElementById("number").value ="";
    document.getElementById("result").value ="";
}

const convert = new Convert();
con = () =>{
    if(document.getElementById("from").value == "celcius"){
        const result = convert.fromcelcius(
            document.getElementById("to").value,
            document.getElementById("number").value
        );
        document.getElementById("result").value= result;
    }

    if(document.getElementById("from").value == "farenheit"){
        const result = convert.fromfarenheit(
            document.getElementById("to").value,
            document.getElementById("number").value
        );
        document.getElementById("result").value= result;
    }

    if(document.getElementById("from").value == "reamur"){
        const result = convert.fromreamur(
            document.getElementById("to").value,
            document.getElementById("number").value
        );
        document.getElementById("result").value= result;
    }
}

module.exports = Convert;