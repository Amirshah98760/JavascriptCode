// Task 2
// •	Use fetch() along with async/await syntax to retrieve data.
// •	Use template literals to render the fetched data dynamically.
// •	Use object destructuring to extract properties like name, email, title, or price.
// •	Handle errors gracefully using try...catch and display an error message on the page.
// •	Use the spread operator or rest operator where suitable (e.g., combining arrays of results).
// •	Add a Reload Data button to fetch the API again.

async function fetchData() {
    const container = document.querySelector('.data-container');
    container.innerHTML = 'Loading...';
 
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
       
        data.forEach(user => {
            const { id, name, email } = user;
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `<h3>User ${id}</h3><p>Name: ${name}</p><p>Email: ${email}</p>`;
            container.appendChild(userDiv);
        });
    } catch (error) {
        container.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Reload Data';
    reloadButton.style.backgroundColor = '#4CAF50';
    reloadButton.style.borderRadius = '5px';
    reloadButton.style.padding = '10px 15px';
    reloadButton.style.marginBottom = '15px';
    reloadButton.style.border = 'none';
    reloadButton.style.cursor = 'pointer';
    reloadButton.addEventListener('click', fetchData);
    document.body.appendChild(reloadButton);
   
});









