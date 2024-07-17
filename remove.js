
//window.onload(
//    (ev) => {
        let btn = document.getElementsByTagName("button");
        setTimeout(()=>{
            console.log("fuckyoy")
            for(let i = 0; i < btn.length; i++)
                {
                    console.log(btn[i].getAttribute("data-testid"))
                    if(btn[i].getAttribute("data-testid") == "upgrade-button")
                    {
                        console.log("yay")
                        btn[i].remove()
                    }
                }
        }, 3500)

//    }
//)


