var count = 2;
function calcGradeNeed(){
    var now = calcCurrent();
    var want = document.getElementById('wanted').value;
    var weight = document.getElementById('finalweight').value;
    parseInt(want);
    parseInt(weight);
    var need =(want - ((1-weight/100)*now))/(weight/100);
    if(want.length > 0 && weight/100 > 0){
        document.getElementById('need').innerHTML = need;
    }else{
        alert("Enter all values");
    }
}

function calcCurrent(){
    var cat1 = document.getElementById('points1').value;
    var cat1num = convert(cat1);
    var cat1avg = average(cat1num);
    var cat1weight = parseInt(document.getElementById('weight1').value);
    var constant =  cat1avg * (cat1weight / 100 );
    var totalWeight = cat1weight;
    for(var i = 2; i< count; i++){
            var cat = document.getElementById("input" + i).value;
            var catnum = convert(cat);
            var catavg = average(catnum);
            var catweight = parseInt(document.getElementById("input2" + i).value);
            constant += (catavg * (catweight / 100));
            totalWeight += catweight;
    }
    if(totalWeight == 100 && cat1.length > 0 && cat1weight > 0){
        document.getElementById('grade').innerHTML = constant.toFixed(1) + "%";
        return constant;
    }else{
        alert("Must equal 100");
    }
}

function average(x){
    var avg = 0;
    for(var i = 0; i < x.length; i++){
        avg += x[i];
    }
    avg = avg / (x.length);
    return avg;
}

function convert(string){
    var grades = string.split(",");
    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
}

function addRow() {
    if (count <= 6) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var tr2 = document.createElement("tr");
        var td2 = document.createElement("td");
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        document.getElementById("table1").appendChild(tr);
        input.setAttribute("id",  "input" + count);
        input2.setAttribute("id", "input2" + count);

        tr.appendChild(td);
        tr.appendChild(td2);
        td.appendChild(input);
        td2.appendChild(input2);
        count++;
    }
}

