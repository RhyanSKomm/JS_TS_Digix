function selectById() {
    const titulo = document.getElementById("titulo");
    console.log(titulo);
}

function selectByClass() {
    const paragrafos =document.getElementsByClassName("paragrafo");
    console.log(paragrafos);
}

function selectByTagName()
{
    const titulo = document.getElementsByTagName("li");
    console.log(titulo);
}

selectById();
selectByClass();
selectByTagName();