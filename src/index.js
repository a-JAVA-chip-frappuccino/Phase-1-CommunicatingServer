/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

/*

    - JSON (JavaScript Object Notation): file format standardized across languages
    - API (Application Programming Interface): inputted/outputted data to/from a server
    - `fetch`: a call to an API
    - GET request: a `fetch` call to retrieve data

    - good variable names contain code and descriptive naming

*/

/* ----------------------------------------------------- 
    GET REQUEST
----------------------------------------------------- */

// fetches information from API endpoint and processes it into usable code
fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((data) => renderCharacters(data))

function renderCharacters(charArr) {
    // console.log(charArr)

    const ul = document.querySelector('ul')

    // iterate over array to get each object stored in it
    charArr.forEach((charObj) => {
        console.log(charObj)

        /*

        MINI INSTRUCTIONS:
            1. make an <li> tag for each character ✅
            2. make a <p> tag for each character's name ✅
            3. make an <img> tag for each character's image ✅
            4. put <p> and <img> inside <li> and put <li> inside <ul> ✅

        */

        const li = document.createElement('li')

        // grabs name from object and places it within <p> tag
        const p = document.createElement('p')
        let name = charObj.name
        p.textContent = name
        p.style.color = '#7a2d96'

        // grabs image URL from object and sets it to <img> tag src
        const img = document.createElement('img')
        let imgURL = charObj.image
        img.src = imgURL
        img.style.margin = '5px'
        img.style.border = 'solid 2px #7a2d96'

        // combine DOM tree to render to screen
        li.appendChild(p)
        li.appendChild(img)
        // li.append(p, img)

        ul.append(li)

    })
}