let submitted=false
function validate(clicksubmit = false) {
    let fullName = document.getElementById('full-name').value
    let Gender = document.getElementById('gender').value
    let swimmingsel = document.getElementById("swimming").checked
    let readingSel = document.getElementById("readingnovels").checked
    let dancingSel = document.getElementById("dancing").checked
    let singingSel = document.getElementById("singing").checked
    let error = false

    if(clicksubmit){
        submitted=true 
    }
  
if(submitted){
    if (fullName.length >= 5 && fullName.includes(" ") &&
        fullName.indexOf(" ") != 0 &&
        fullName.length - fullName.lastIndexOf(" ") >= 3) {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'
    } else {
        
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }
 
    if (Gender != 'None') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
        
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }
    
    if (swimmingsel || readingSel || dancingSel || singingSel) {
        
        document.getElementById('hobby-valid').style.display = 'block'
        document.getElementById('hobby-invalid').style.display = 'none'
        
    }else {
        document.getElementById('hobby-invalid').style.display = 'block'
        document.getElementById('hobby-valid').style.display = 'none'
        error = true
        
    }
let swim=''
    if(swimmingsel){
       swim=swim+ ('swimming')
    }
    if(readingSel && !dancingSel && !singingSel){
        if(swim==''){
        swim=swim+ ('reading novels')
        }
        else{
            swim=swim+ (' and reading novels')
        }
}
else if(readingSel){
    if(swim==''){
        swim=swim+ ('reading novels')
        }
        else{
            swim=swim+ (' , reading novels')
        }
}

if(dancingSel && !singingSel){
    if(swim==''){
    swim=swim+ ('dancing')
    }
    else{
        swim=swim+ (' and dancing')
    }
}
else if(dancingSel){
if(swim==''){
    swim=swim+ ('dancing')
    }
    else{
        swim=swim+ (' , dancing')
    }
}
if(singingSel){
    if(swim==''){
    swim=swim+ ('singing')
    }
    else{
        swim=swim+ (' and singing')
    }
}
     
    


    if (!error) {
        alert(`Hobbies of '${fullName} (${Gender}) are ${swim}.`)
        // alert('Hobbies of '+ fullName+ ' ('+Gender+') are '+swim)

        document.getElementById('registration-form').reset()

        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for (let i = 0; i < validFeedbacks.length; i++) {
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for (let i = 0; i < invalidFeedbacks.length; i++) {
            invalidFeedbacks[i].style.display = 'none'
        }
     } }
    

}
 

