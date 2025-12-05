let name = prompt("ведите пол")

    switch (name) {
        case "erkak":
        case "мужик":
        case "ali":
        case "abdulziz":
        case "azimjon":

            
            let box = document.createElement ('div')
            box.style.width = "200px"
            box.style.height = "200px"
            box.style.backgroundColor = "blue"
            box.style.margin = " 0 auto"

            document.body.appendChild(box);
            break;

 
        case "ayol":
        case "женщина":
        case "dilnoza":
        case "diyora":
            let redbox = document.createElement ('div')
            redbox.style.width = "200px"
            redbox.style.height = "200px"
            redbox.style.backgroundColor = "red"
            redbox.style.margin = "0 auto"

            
            document.body.appendChild(redbox);
            break;

        default:
            alert("такого пола нету!")
    }