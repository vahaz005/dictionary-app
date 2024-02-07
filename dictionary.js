
const div = document.getElementById("display") ;
const btn = document.getElementById("searchb") ;

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" ;
async function vahaz (values)  {
    const response  = await fetch(`${url}${values}`) ;
    console.log(response) ;
    let data  = await response.json() ;
    console.log(data) ;
    div.innerHTML = data[0].meanings[0].definitions[0].definition;
    document.getElementById("input").value = "" ;



}
btn.addEventListener('click' , (e) => {
    
    let value = document.getElementById("input").value ;
    if(value === ""){
        alert("field invalid")
    }
    e.preventDefault() ;
    vahaz(value) ;
})
