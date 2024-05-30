
async function fetchDataWithAsyncAwait(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log('Async/Await Data:', data);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Async/Await Error:', error);
    }
  }
  
  fetchDataWithAsyncAwait('octocat');
  