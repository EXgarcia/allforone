async function GetSayHello(name){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/hello/${name}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetSayHello}

//

async function GetAddingTwoNumbers (numOne, numTwo){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/adding/${numOne}/${numTwo}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetAddingTwoNumbers}

//

async function GetAskingQuestions (questOne, questTwo){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/asking/${questOne}/${questTwo}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetAskingQuestions}

///

async function GetGreaterThanOrLessThan (greatOne, greatTwo){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/greater/${greatOne}/${greatTwo}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetGreaterThanOrLessThan}

//////


async function GetMadLib (ansOne, ansTwo, ansThree, ansFour, ansFive, ansSix, ansSeven, ansEight, ansNine, ansTen){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/mad/${ansOne}/${ansTwo}/${ansThree}/${ansFour}/${ansFive}/${ansSix}/${ansSeven}/${ansEight}/${ansNine}/${ansTen}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetMadLib}

///

async function GetOddOrEven (numInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/odd/${numInput}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetOddOrEven}

///

async function GetReverseIt (revInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Reverse/${revInput}`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetReverseIt}

//


async function GetFirstNameDirectory (firstNameInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByFirstName/${firstNameInput}`)
    const data = await response.json();
    console.log(data)
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
    
}

export {GetFirstNameDirectory}

async function GetLastNameDirectory (lastNameInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByLastName/${lastNameInput}`)
    const data = await response.json();
    console.log(data)
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
    
}

export {GetLastNameDirectory}

async function GetSlackNameDirectory (slackNameInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentBySlackName/${slackNameInput}`)
    const data = await response.json();
    console.log(data)
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
    
}

export {GetSlackNameDirectory}

async function GetEmailDirectory (emailInput){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByEmail/${emailInput}`)
    const data = await response.json();
    console.log(data)
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
    
}

export {GetEmailDirectory}

////

async function GetRestaurantPickerMex (){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Picker/mexicanfood`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetRestaurantPickerMex}

////

async function GetRestaurantPickerAmer (){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Picker/americanfood`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetRestaurantPickerAmer}

////

async function GetRestaurantPickerAs (){
    const response = await fetch(`https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Picker/asianfood`)
    const data = await response.text();
    console.log(data)
    return data
    
}

export {GetRestaurantPickerAs}