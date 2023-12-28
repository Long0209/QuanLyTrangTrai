import { get_esp_owned_devices } from "@/Service/API/ESP";



function Main_Content_Farm() {
    get_esp_owned_devices(1, 200)
        .then( (responese) => {
            console.log( 'responese>>', responese.data);
        })
        .catch ( (err) => {
            console.log("err>>", err)
        })

    return(
    <>
        <span>
            Home_1
        </span>
        <p>
            <strong>
                {
                    sessionStorage.getItem('session')
                }
            </strong>
        </p>
    </>
    )
}

export {Main_Content_Farm}