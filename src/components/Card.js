import App from '../App.js'

const Card = (img, title, content) => {
    return `
        <div class="card">
            <img src="${img}" alt="${title}"/> 
            <h3 align="center">${title}</h3>
            <p align="center">
                ${content}
            </p>
        </div>
    `
}

export default Card