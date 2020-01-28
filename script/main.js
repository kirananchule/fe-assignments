


function fetchData(url) {

    fetch(url).
    then((resp)>{
        console.log('response handler');
    }, (fault)=>{
        console.log('Some error occured while fetching data.')
    })
}

fetchData('./data.json');


