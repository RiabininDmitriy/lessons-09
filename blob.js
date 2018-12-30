var picture = document.createElement ( 'img' )
document.body.appendChild ( picture )
fetch ( 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBEtTkwTpO1BHmzGW_x0y-pfsjGY-w9yDWXOxiiudH1xlGlWnoQ' )
    .then ( response => {
        response.blob().then ( response => {
    	    urlObject = URL.createObjectURL( response)
    	    picture.src = urlObject
        })
    })