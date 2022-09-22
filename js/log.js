function login() {
    document.getElementById("btn_log").addEventListener("click", ()=> {
        let user = document.getElementById("user_log").value;
        let pass = document.getElementById("pass_log").value;
        if (user != "" && pass !="") {
        console.log(user); 
        console.log(pass);
        }
        else{
        console.log("usuario o contraseña no ingresados");
        }
})
}


login ();