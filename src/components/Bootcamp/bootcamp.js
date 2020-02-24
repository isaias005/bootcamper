class Bootcamp {
  async getAllBootcamps() {
    try {
      const response = await fetch("https://bootcamp-server.herokuapp.com/api/v1/bootcamps");
      if (response.status !== 200) {
        return false;
      }
      const bootcamps = await response.json();
      return bootcamps.data;
    } catch (err) {
      throw err;
    }
  }

  async getSingleBootcamp(id) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/bootcamps/" + id);
      if (response.status !== 200) {
        throw new Error("Error al conseguir bootcamp");
      } else {
        const bootcamp = await response.json();
        return bootcamp.data;
      }
    } catch (err) {
      throw err;
    }
  }
  
  async addSingleBootcamp(name, description, address, careers, photo, userId) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/bootcamps/",
        {
          method: 'post',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: name, description: description, address: address, careers: careers, photo: photo, userId })
        }
      )
      if (response.status !== 201 && response.status !== 400) {
        throw new Error("Error al añadir bootcamp");
      } else if (response.status === 400) {
        throw new Error("Solo puedes publicar un bootcamp");
      } else {
        const bootcamp = await response.json();
        return bootcamp.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async deleteBootcamp(id) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/bootcamps/" + id,
        {
          method: 'delete',
          credentials: 'include'
        }
      );
      if (response.status !== 200) {
        throw new Error("Error al eliminar bootcamp");
      } else {
        const result = await response.json();
        return result;
      }
    } catch (err) {
      throw err;
    }
  }


  async updateSingleBootcamp(id, name, description, careers, photo) {
    try {
      const response = await fetch(
        "https://bootcamp-server.herokuapp.com/api/v1/bootcamps/" + id,
        {
          method: 'put',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: name, description: description, careers: careers, photo: photo})
        }
      )
      if (response.status !== 200) {
        throw new Error("Error al actualizar bootcamp");
      } else {
        const bootcamp = await response.json();
        return bootcamp.data;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default Bootcamp;