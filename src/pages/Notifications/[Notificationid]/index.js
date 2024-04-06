import {useRouter} from "next/router"
function noticationdetails(){
    const router =useRouter()
    const notificationid=router.query.notificationid
    return(
        <>
        <h1>notification details{notificationid}</h1>
        
        </>
    )
}
export default noticationdetails