function replaceYear(id) {
    // console.log(id)
    var x = document.getElementById('dDYear');
    console.log(x);
}

function addModule() {

    str = `
        <div class="row">

            <input type="text" class="form-control" placeholder="module" aria-label="Username" aria-describedby="addon-wrapping" style="width: 80%;">
            <button type="button" class="btn btn-primary btn-circle btn-sm" onclick="removeModule()" style="margin-top:5%;margin-left: 1%">-</button> 

        </div>

    `;
    document.getElementById('modules').innerHTML += str;
}