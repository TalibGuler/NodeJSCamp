    let firstName=prompt("Lütfen adınızı giriniz")
    let lastName=prompt("Lütfen soyadınızı giriniz")
    var date = new Date().toLocaleString();
    let info = document.querySelector("#myName")
    let infoClock = document.querySelector("#myClock")

    info.innerHTML=`${firstName} ${lastName}`
    infoClock.innerHTML=date