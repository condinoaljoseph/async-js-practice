class easyHTTP {
  async get(url){
    try {
      const resp = await fetch(url)
      const respData = await resp.json()
      return respData
    } catch(err) {
      console.log('Something went wrong!', err)
    }
  }
  
  async post(url, data){
    try {
      const resp = await fetch(url, {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      const respData = await resp.json();
      return respData;
    } catch(err) {
      console.log('Something went wrong!', err)
    }
  }

  async put(url, data){
    try {
      const resp = await fetch(url, {
        method : 'PUT',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      const respData = await resp.json();
      return respData
    } catch(err) {
      console.log('Something went wrong!', err)
    }
  }

  async delete(url){
    try {
      const resp = await fetch(url, {
        method : 'DELETE',
        headers : {
          'Content-type' : 'application/json'
        }
      })
      const respData = await resp.json();
      return 'Resource deleted...'
    } catch(err) {
      console.log('Something went wrong!', err)
    }
  }
}