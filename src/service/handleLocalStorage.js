export class HandleLS{
  static getInfoLS(infoName){
    let localInfo = JSON.parse(localStorage.getItem(`${infoName}`))

    return localInfo
  }

  static getToDoInfo(id){
    let localInfo = JSON.parse(localStorage.getItem(`storedToDoList`)) 


    return localInfo[id]
  }

  static setInfoLS(infoName, data){
    localStorage.setItem(infoName, JSON.stringify(data));   
  }

  
}