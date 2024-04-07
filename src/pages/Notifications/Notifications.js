import Link from "next/link"
function Notifications({Notificationid=100}){
    return (
        <>
        <div className="bg-gradient-to-r from-yellow-100 ml-20 to-yellow-300  p-10 rounded-md shadow-md text-lg relative">
            <h1 className="font font-bold  ">Notifications</h1>
            <ol className="list-disc pl-6 ">
                <li><Link href="/Notifications/1">Notification1</Link></li>
                <li><Link href="/Notifications/2">Notification2</Link></li>
                <li><Link href="/Notifications/3">Notification3</Link></li>
                <li><Link href="/Notifications/4">Notification4</Link></li>
                <li><Link href="/Notifications/5">Notification5</Link></li>
                <li><Link href="/Notifications/6">Notification6</Link></li>
                <li>< Link href={`/Notifications/${Notificationid}`} >
                    Notification{Notificationid}</Link></li>
            </ol>
            <div className="absolute left-0 bottom-0 w-full border-t border-gray-400 mt-4"></div>
        </div>

        <div className="ml-20 font-bold">
            <Link href='/mantras'>Mantras</Link><br/><br/>
            <Link href='/temple_timings'>Temple Timings</Link>
        </div>
        
        </>
    )
}
export default Notifications