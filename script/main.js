


function fetchData(url) {

    fetch(url).
    then((resp)=>{
        console.log('response handler', resp);
        if(resp.status === 200) {
            return resp.json();
        }
    }, (fault)=>{
        console.log('Some error occured while fetching data.')
    }).
    then((result)=>{
        console.log('data: ', result);
        displayProductsList(result.products)
    })
}

fetchData('./data/data.json');

function displayProductsList(list) {
   

}

