async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data; // ✅ Return the fetched data
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

getPost().then(data => {
  if (data) {
    console.log('Post data:', data);
    document.getElementById('app').innerHTML += `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
    `;
  }
});
