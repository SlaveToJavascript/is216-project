// body {
//     font-family: 'Poppins'
// }

function showJob() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response_json = JSON.parse(this.responseText);
            // console.log(response_json)
            var jobResults = response_json.results;

            if (jobResults.length == 0) {
                document.getElementById('jobResult').innerHTML = "";
                document.getElementById('emptyResult').innerHTML = 
                `
                <div class="row">
                    <div class="col" style="text-align: center;">
                        <img src="images/no results found.jpg" id="noResultImg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
        
                <div class="row">
                    <div class= "col" id="noResultText">
                        <h5>We couldn't find any jobs matching your search</h5>
                        <p>Check the spelling and adjust the filter criteria</p>    
                    </div>
                </div>
                `;
            } else {
                var numResult = jobResults.length;
                document.getElementById('numResult').innerHTML = `
                <p style="margin-top:1%; margin-left:1%; color:#6987C9;">1-10 out of ${numResult}</p>
                `;

                var str = "";
                for(var i in jobResults) {
                    var title = jobResults[i]['title'];
                    var company_name = jobResults[i]['company']['display_name'];
                    var salary = jobResults[i]['salary_min'];
                    var description = jobResults[i]['description'];
                    var redirectURL = jobResults[i]['redirect_url'];
                    var bringOver = {"title": title, "salary": salary, "description": description, "url": redirectURL};
               
                    str += `
                    <div class="card pl-1" style="width: 30rem;" onclick="seeThisJob(${bringOver})">
                        <div class="card-body">
                            <h5 class="card-title" >${title}</h5>
                            <h6 class="card-subtitle mb-2">${company_name}</h6>
                        </div>
                    </div>
                    `;
                    
                  
                    // console.log(str)
                }

                document.getElementById('jobResult').innerHTML = str;
            }
       
        }
    }

    // var keyword = "developer";
    var keyword = document.getElementById('input1').value;
    let category = document.getElementById('input2').innerText;
    // alert(category);
    // var url = `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}`;

    if (category == "Full Time") {
        var url = `https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&full_time=1`;
    } else if (category == "Part Time") {
        var url = `https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&part_time=1`;
    } else if (category == "Freelance") {
        var url = `https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&contract=1`;
    } else if (category == "Internship") {
        var url = `https://api.adzuna.com/v1/api/jobs/gb/search/1000?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&title_only=internship%20${keyword}`;
    } else {
        var url = `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&title_only=${keyword}`;

    }
    request.open('GET',url,true)
    request.send()
}

function category(i) {
let category = document.getElementById(i).innerText;
document.getElementById('input2').innerText = category;
}   

function seeThisJob(bringOver) {
    console.log(bringOver);
    
}