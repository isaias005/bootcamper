class Auth {
  async login(email, password) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/auth/login",
        {
          method: "post",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: email, password: password })
        }
      );
      this.loginErrorHandler(response, () => {
        return true;
      });
    } catch (err) {
      throw err;
    }
  }

  async logout() {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/auth/logout",
        {
          method: "get",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status !== 200) {
        throw new Error("Error al cerrar sesion");
      } else {
        return response;
      }
    } catch (err) {
      throw err;
    }
  }

  async signup(name, email, password) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/auth/register",
        {
          method: "post",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: name, email: email, password: password })
        }
      );
      this.signupErrorHandler(response, () => {
        return true;
      })
    } catch (err) {
      throw err;
    }

  }

  async getCurrentUser() {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/auth/me",
        {
          method: "get",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status !== 200) {
        return false;
      }
      const user = await response.json();
      return user.data;
    } catch (err) {
      throw err;
    }
  }

  async isAuthenticated() {
    try {
      const data = await this.getCurrentUser();
      if (data) {
        return true;
      } else {
        return false;
      }
    } catch(err){
      throw err;
    }
  }

  loginErrorHandler(response, callback) {
    if (response.status === 200) {
      callback();
    } else if (response.status === 404) {
      throw new Error("Email o contraseña incorrectos");
    } else if (response.status === 400) {
      throw new Error("Rellena todos los campos");
    } else {
      throw new Error("Conexion con el servidor fallida");
    }
  }

  signupErrorHandler(response, callback) {
    if (response.status === 200) {
      callback();
    } else if (response.status === 400) {
      throw new Error("Rellena todos los campos");
    } else {
      throw new Error("Conexion con el servidor fallida");
    }
  }

}

export default Auth;