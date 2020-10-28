// body {
//     font-family: 'Poppins'
// }


function showJob() {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var results = JSON.parse(this.responseText);
            

            var results = results.results;

            if (results.length == 0) {
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
                var noResult = results['count'];
                document.getElementById('noResult').innerHTML = `
                <p>1-10 out of ${noResult}</p>
                `;

                document.getElementById('emptyResult').innerHTML = "";

                var str = "";
            
                for (var i in results) {
                    var company_name = results[i]['company']['display_name'];
                    var title = results[i]['title'];
                    var salary = results[i]['salary_min'];
                    var description = results[i]['description'];

                    str += `
                    <div class="card" style="width: 30rem;background-color:#F3D250;" onclick=seeJob(${i})>
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${company_name}</h6>
                        </div>
                    </div>
                    `;
                
                // console.log(company_name);
                // console.log(title);
                // console.log(salary);
                // console.log(description);
                }

                document.getElementById('jobResult').innerHTML = str;
            }
            
        }       
    }

    // var keyword = "developer";
    var keyword = document.getElementById('input1').value;
    let category = document.getElementById('input2').innerText;
    // alert(category);

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

    // normal search: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}
   
    //part time: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&part_time=1
    //contract: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&contract=1

    // var category = document.getElementById('category').value;
    // alert(category);
    // alert(keyword);
    request.open('GET',url,true)
    request.send()
}



function seeJob(i) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var results = JSON.parse(this.responseText);
            var results = results.results;

            var company_name = results[i]['company']['display_name'];
            var title = results[i]['title'];
            var salary = results[i]['salary_min'];
            var description = results[i]['description'];
            var redirectURL = results[i]['company']['redirect_url'];

            var strDetail = `
            <div class="card" style="width:auto;height:auto;background-color:#white;" >
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${company_name}</h6>
                    <p class="card-text"> Salary: ${salary}</p>
                    <br>
                    <h6 class="card-subtitle mb-2 text-muted">Description</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
                    <br>
                    <a href="https://www.adzuna.com/" class="btn btn-primary">See more</a>
                </div>
            </div>  
            `;
                
          
            document.getElementById('jobDetail').innerHTML = strDetail;
        }       
    }

    // var keyword = "developer";
    
    // normal search: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}
    //full time: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&full_time=1
    //part time: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&part_time=1
    //contract: https://api.adzuna.com/v1/api/jobs/sg/search/100?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&what=${keyword}&contract=1


    // var url = `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=c30e5323&app_key=3e6cf013fb257fb3aff727eb7df5bc89&title_only=${keyword}`;
      // var keyword = "developer";
    var keyword = document.getElementById('input1').value;
    let category = document.getElementById('input2').innerText;
    // alert(category);

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

    // document.getElementById('jobDetail').innerHTML = "<b>hello</b>";
}

function category(i) {
    let category = document.getElementById(i).innerText;
    document.getElementById('input2').innerText = category;
    // var category = document.getElementById("category").addEventListener("click", displayDate)
    // alert(category);
    // get.getElementById('input2').value = `${category}`;
}