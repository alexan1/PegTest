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
    document.getElementById('output').innerHTML = fileString;
    var res = fileString.split("\n");
    res.forEach(splitFun);
    
    function splitFun(item) {
        var i = 0;
        var numb = item.split(";");
        i = i + 1;
        console.log("i", i);
        var id = "1" + i;
        console.log("id", id);
        document.getElementById(id).innerHTML = numb[0];
        document.getElementById('2' + i).innerHTML = numb[1];
        document.getElementById('3' + i).innerHTML = numb[2];        
        console.log(numb);
    }
    console.log(res);    
}

function errorHandler(evt) {
    if (evt.target.error.code == evt.target.error.NOT_READABLE_ERR) {
        // The file could not be read
        document.getElementById('output').innerHTML = "Error reading file..."
    }
}