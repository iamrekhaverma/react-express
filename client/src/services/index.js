import Axios from "axios";

class Service {
  getRequest = url => {
    return new Promise((resolve, reject) => {
      Axios.get(url)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  postRequest = (url, obj) => {
    return new Promise((resolve, reject) => {
      Axios.post(url, obj)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  putRequest = (url, obj) => {
    return new Promise((resolve, reject) => {
      Axios.put(url, obj)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}

export default new Service();
