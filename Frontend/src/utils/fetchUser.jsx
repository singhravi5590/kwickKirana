export async function fetchUserdetails(){
    const response = await fetch("http://localhost:8080/api/user/get-user", {
      method : "GET",
      headers : {
        'authorization' : localStorage.getItem('accessToken'),
      }
    })
    const result = await response.json();
    return result;
  }