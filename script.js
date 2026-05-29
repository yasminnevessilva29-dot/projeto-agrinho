/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #2E8B57;
    color: white;
    padding: 20px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 40px;
}

.industria-lista button {
    margin: 5px;
    padding: 10px 15px;
    background-color: #2E8B57;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.industria-lista button:hover {
    background-color: #3CB371;
}

form input, form textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form button {
    padding: 10px 20px;
    background-color: #2E8B57;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

form button:hover {
    background-color: #3CB371;
}

footer {
    text-align: center;
    background-color: #2E8B57;
    color: white;
    padding: 15px 0;
}
