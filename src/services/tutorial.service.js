import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/matriculas");
  }

  get(id) {
    return http.get(`/matriculas/${id}`);
  }

  create(data) {
    return http.post("/matriculas", data);
  }

  update(id, data) {
    return http.put(`/matriculas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/matriculas/${id}`);
  }

  deleteAll() {
    return http.delete(`/matriculas`);
  }

  findByTitle(title) {
    return http.get(`/matriculas?title=${title}`);
  }
}

export default new TutorialDataService();