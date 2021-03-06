$(() => {    

    const objAuth = new Autenticacion();

    $("#authFB").click(() => objAuth.authCuentaFacebook());

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        // TODO : LLamar crear cuenta con email

        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)
    });

    $("#btnInicioEmail").click(() => {
        const email = $('#emailSesion').val();
        const password = $('#passwordSesion').val();
        // TODO : LLamar auth cuenta con email
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
    });

    //AUTH con GOOGLE
    $("#authGoogle").click(() => objAuth.authCuentaGoogle());
    //AUTH con Twitter
    $("#authTwitter").click(() => objAuth.authTwitter());

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');

        
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});