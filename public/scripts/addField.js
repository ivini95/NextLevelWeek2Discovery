//procurar o botão
document.querySelector("#add-time")
    //quando clicar no botão    
    .addEventListener('click', cloneField)


//executar uma ação
function cloneField() {
    //duplicar os campos. quais?
    const newFielContainer = document.querySelector('.schedule-item').cloneNode(true)
        //limpar os campos. quais?
    const fields = newFielContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    //colocar na pagina:onde?
    document.querySelector('#schedule-items').appendChild(newFielContainer)
}