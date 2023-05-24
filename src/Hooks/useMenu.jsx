import { useEffect, useState } from "react"

const useMenu=()=>{
    const [menu,setMenu]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false)
            // const filter=data.filter(item=>item.category=='popular')
            setMenu(data)

        })
    },[])
    return [menu,loading]
}
export default useMenu;