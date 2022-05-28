// // Add your code here
function submitData(name, email) {
 
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email })
    })
    .then((response) => response.json())
    .then((resData) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = resData.id;
        document.body.append(paragraph);
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = error.message;
        document.body.append(errorMessage);
    });
}