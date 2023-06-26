// function result() {
//     var nameValue = document.getElementById("name").value;
//     var emailValue = document.getElementById("email").value;
//     var numberValue = document.getElementById("number").value;
//     var dateValue = document.getElementById("date").value;
//     var timeValue = document.getElementById("time").value;
//     // localStorage.setItem("name", nameValue);
//     // localStorage.setItem("email", emailValue);
//     // localStorage.setItem("number", numberValue);
//     // localStorage.setItem("date", dateValue);
//     // localStorage.setItem("time", timeValue);
//     var UserData = {
//         nameValue,
//         emailValue,
//         numberValue,
//         dateValue,
//         timeValue
//     }

    // axios.post('https://crudcrud.com/api/a5f499e8abf3443bab0c3c2aff9e6536/AppData', UserData)
    // .then((response)=>{
    //     console.log(response);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

//  }

var id;
function result() {
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("emailID").value;
    var numberValue = document.getElementById("mobile").value;
    var dateValue = document.getElementById("date").value;
    var timeValue = document.getElementById("time").value;

//    localStorage.setItem("name", nameValue);
//    localStorage.setItem("email", emailValue);
//    localStorage.setItem("number", numberValue);
//    localStorage.setItem("date", dateValue);
//    localStorage.setItem("time", timeValue);

    let userData = {
        nameValue,
        emailValue,
        numberValue,
        dateValue,
        timeValue
    }
    // localStorage.setItem("userData", userData);
    // let UserDataInfo = JSON.stringify(userData);
    
    // localStorage.setItem(userData.emailID, UserDataInfo);
    // let GetUserInfo = localStorage.getItem("userData");
    // let UserInfo = JSON.parse(localStorage.getItem("userData"));

    // windowData(userData)
// PoST DATA CRUD CRUD
    if(!id){
        axios.post('https://crudcrud.com/api/3ade1dffdb714f6185af0802d20fd3f4/AppData', userData)
        .then((response)=>{
            console.log(response);
            location.reload();
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    if(id){
        axios.put('https://crudcrud.com/api/3ade1dffdb714f6185af0802d20fd3f4/AppData/'+id, userData)
        .then((response)=>{
            console.log("Success")
            id = '';
            location.reload();
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    // 
}

// getData From CRUDCRUD API

getData();
function getData(){
    axios.get('https://crudcrud.com/api/3ade1dffdb714f6185af0802d20fd3f4/AppData')
    .then((response)=>{
        for(let i = 0; i < response.data.length; i++){
            windowData(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


function windowData(userData){
    const myTable = document.getElementById('dataTable');
    const tableData = document.createElement('li');
    tableData.textContent = userData.nameValue +" "+ userData.emailValue+" "+userData.numberValue+" "+userData.dateValue+" "+userData.timeValue;

    const Editbtn = document.createElement('input');
    Editbtn.type = 'button';
    Editbtn.value = 'edit';

    var keys = Object.keys(userData);
    // keys.forEach(element => {
    //     document.getElementById(element).value = '';
    // });
    

    Editbtn.onclick = () =>{
        id = userData._id;
        document.getElementById('name').value = userData.nameValue;
        document.getElementById('emailID').value = userData.emailValue;
        document.getElementById('mobile').value = userData.numberValue;
        document.getElementById('date').value = userData.dateValue;
        document.getElementById('time').value = userData.timeValue;
        localStorage.removeItem(userData.emailID);
        myTable.removeChild(tableData);
        
    }
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'delete';

    // Delete USER DATA
    btn.onclick = () =>{
        // localStorage.removeItem(userData.emailID);
        // myTable.removeChild(tableData);
        axios
            .delete('https://crudcrud.com/api/3ade1dffdb714f6185af0802d20fd3f4/AppData/'+userData._id)
        .then((response)=>{
            myTable.removeChild(tableData);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    
    tableData.appendChild(btn);
    tableData.appendChild(Editbtn);
    myTable.appendChild(tableData);


}
