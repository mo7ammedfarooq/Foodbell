
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = ()=>{
    
    const {user} = useContext(UserContext);

    return (
        
        <div className="flex justify-center items-center h-16 border-t w-full font-font2 text-2xl text-[#4c4f5a] ">
            Developed by <a href="https://github.com/mo7ammedfarooq" target="_blank"><span className="font-font2 px-2 text-[#CB2C2C]" >Farooq</span></a>  with ❤️
        </div>
        
    )
}

export default Footer