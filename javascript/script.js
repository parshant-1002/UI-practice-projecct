document.getElementById("searchBtn").addEventListener("click" ,()=>{
    if (!(document.getElementById("search").style.display === "block")) {

        document.getElementById("search").style.display = "block"
    }

    else {
        document.getElementById("search").style.display = "none"

    }
})


document.getElementById("iHme").addEventListener("click", () => {

    if (!(document.getElementById("info_hme").style.display === "block")) {

        document.getElementById("info_hme").style.display = "block"
    }

    else {
        document.getElementById("info_hme").style.display = "none"

    }
})

document.getElementById("ipharma").addEventListener("click", () => {

    if (!(document.getElementById("info_pharma").style.display === "block")) {

        document.getElementById("info_pharma").style.display = "block"
    }

    else {
        document.getElementById("info_pharma").style.display = "none"

    }
})

document.getElementById("iO&P").addEventListener("click", () => {

    if (!(document.getElementById("info_OP").style.display === "block")) {

        document.getElementById("info_OP").style.display = "block"
    }

    else {
        document.getElementById("info_OP").style.display = "none"

    }
})
