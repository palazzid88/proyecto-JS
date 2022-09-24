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


Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })