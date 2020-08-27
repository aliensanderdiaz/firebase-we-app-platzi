class Autenticacion {
  autEmailPass(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerified) {
          $('#avatar').attr('src', 'imagenes/usuario_auth.png')
          Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
        } else {
          firebase.auth().signOut()
          Materialize.toast(`Por favor realiza la verificación de la cuenta`, 5000)
        }
      })
    $('.modal').modal('close')
  }

  crearCuentaEmailPass(email, password, nombres) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({
          displayName: nombres
        })

        const configuracion = {
          url: 'http://localhost:5500/public/index.html'
        }

        result.user.sendEmailVerification(configuracion).catch(error => {
          console.error({ error })
          Materialize.toast(error.message, 10000)
        })

        firebase.auth().signOut()

        Materialize.toast(
          `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
          10000
        )

        $('.modal').modal('close')
      })
      .catch(error => {
        console.error({ error })
        Materialize.toast(error.message, 10000)
      })
    /*

    */

  }

  authCuentaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 10000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse con google: ${error} !! `, 10000)
    })
  }

  authCuentaFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 10000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse con facebook: ${error} !! `, 10000)
    })
  }

  authTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 10000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse con twitter: ${error} !! `, 10000)
    })
  }
}
