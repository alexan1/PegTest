whichcell();

function startRead() {
    // obtain input element through DOM 

    var file = document.getElementById('file').files[0];
    if (file) {
        getAsText(file);
    }
}

function getAsText(readFile) {
    var reader;
    try {
        reader = new FileReader();
    } catch (e) {
        document.getElementById('output').innerHTML =
            "Error: seems File API is not supported on your browser";
        return;
    }

    // Read file into memory as UTF-8      
    reader.readAsText(readFile, "UTF-8");
        
    reader.onload = loaded;
    reader.onerror = errorHandler;
}


function loaded(evt) {
    // Obtain the read file data    
    var fileString = evt.target.result;
    //document.getElementById('output').innerHTML = fileString;
    var res = fileString.split("\n");
    //var i;
    for (i = 0; i < 3; i++) {

        var num = res[i].split(";");
        for (j = 0; j < 3; j++) {
            var id = (j + 1).toString() + (i + 1).toString();
            //console.log("id", id);
            document.getElementById(id).innerHTML = num[j];            
        }
    }
    calculate();
}

function calculate() {

    for (i = 1; i < 4; i++) {

        var m = parseInt(document.getElementById(i + "1").innerHTML);
        var j = parseInt(document.getElementById(i + "2").innerHTML);
        var k = parseInt(document.getElementById(i + "3").innerHTML);

        document.getElementById("r" + i).innerHTML = m + j + k;
    }    
    check();
}

function check() {

    var m = parseInt(document.getElementById("r1").innerHTML);
    var j = parseInt(document.getElementById("r2").innerHTML);
    var k = parseInt(document.getElementById("r3").innerHTML);
    if (m === j && m === k)
        alert("Done");
    //else
    //    alert("noy yet");
}

function swap(id) {

    console.log("id", id);

    var n = id.slice(0, 1);
    if (n === "1") {
        n = "2";
    }
    else if (n === "2") {
        n = "3";
    }
    else {
        n = "1";
    }
    var nid = n + id.slice(1, 2);
    console.log("nid", nid);
    var i = document.getElementById(id).innerHTML;
    var j = document.getElementById(nid).innerHTML;
    document.getElementById(nid).innerHTML = i;
    document.getElementById(id).innerHTML = j;
    calculate();


}

function whichcell() {
    var tbl = document.getElementById("table");
    if (tbl !== null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].onclick = (function (i, j) {
                    return function () {                        
                        var id = (j + 1) + '' + (i + 1);
                        swap(id);
                    };
                }(i, j));
            }
        }
    }
}

function errorHandler(evt) {
    if (evt.target.error.code == evt.target.error.NOT_READABLE_ERR) {
        // The file could not be read
        document.getElementById('output').innerHTML = "Error reading file..."
    }
}