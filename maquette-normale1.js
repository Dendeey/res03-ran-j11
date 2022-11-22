/*let active=document.getElementsByClassName("active");
let button=document.querySelectorAll("button");
let section=document.querySelectorAll("body > main > section");

for(let i=0;section.length;i++)
{
    let idx=i;
    button[i].addEventListener("click", function(e){
        if((idx+1)<button.length)
            {
                section[idx].classList.remove("active");
                section[idx+1].classList.add("active");
            }
        else {
            section[idx].classList.remove("active");
            section[0].classList.add("active");
        }
    });

}
*/

let form=document.querySelector("form:first-of-type");
let formOK=true;

form.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    let usernameInput=document.querySelector("#username");
    let emailInput=document.querySelector("#email");
    let passwordInput=document.querySelector("#password");
    let confirmInput=document.querySelector("#confirm-password");
    
    if(usernameInput.value !== ""){
        console.log("C'est bon");
    }else{
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:first-of-type");
        inputError.innerHTML="Veuillez choisir un nom d'utilisateur";
        
        usernameInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    if(emailInput.value !== ""){
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        inputError.innerHTML="Veuillez saisir un email valide";
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);

    }else if(emailInput.value.indexOf("@",0)<0){
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        inputError.innerHTML="Un email invalide a été saisi (un email doit avoir au moins un @ et un .)";
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    
    }else if(emailInput.value.indexOf(".",0)<0){
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        inputError.innerHTML="Un email invalide a été saisi (un email doit avoir au moins un @ et un .)";
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;

    }else{
        console.log("Bon");
    }
    
    if(passwordInput.value !== ""){
        console.log("C'est bon");
    }else{
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:nth-of-type(3)");
        
        passwordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    if(confirmInput.value !== ""){
        console.log("C'est bon");
    }else{
        let inputError=document.createElement("p");
        let fieldset=document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        inputError.innerHTML="Les mots de passe ne correspondent pas";
        
        confirmInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
});