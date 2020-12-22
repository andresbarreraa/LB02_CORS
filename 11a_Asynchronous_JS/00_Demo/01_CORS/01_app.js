const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    //Wenn erledigt ...
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        //dann tue ...
        //target contains the request itself
        console.log(evt.target);

//URL of puzzle Server
request.open('GET', 'http://localhost:4000/puzzle');
request.send();
