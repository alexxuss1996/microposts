/**
 * Easy HTTP
 * Library for making http requests
 *
 * @version 3.0.0
 * @author Brad Traversy
 * @license MIT
 *
 **/
class easyHTTP {
  // GET METHOD
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  // POST METHOD
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }
  // PUT METHOD
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }
  // DELETE METHOD
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const resData = await 'RESOURSE DELETED';
    return resData;
  }
}

export const http = new easyHTTP();
