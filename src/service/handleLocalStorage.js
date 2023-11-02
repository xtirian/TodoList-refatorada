export class HandleLS{
  static getInfoLS(infoName){
    let localInfo = JSON.parse(localStorage.getItem(`${infoName}`))

    return localInfo
  }

  static setInfoLS(infoName, data){
    localStorage.setItem(infoName, JSON.stringify(data));   

    console.log(data)

  }
}