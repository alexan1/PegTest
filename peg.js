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
    //var i;
    for (i = 0; i < 3; i++) {

        var num = res[i].split(";");
        for (j = 0; j < 3; j++) {
            var id = (j + 1).toString() + (i + 1).toString();
            console.log("id", id);
            document.getElementById(id).innerHTML = num[j];            
        }
    }
}
    

function errorHandler(evt) {
    if (evt.target.error.code == evt.target.error.NOT_READABLE_ERR) {
        // The file could not be read
        document.getElementById('output').innerHTML = "Error reading file..."
    }
}