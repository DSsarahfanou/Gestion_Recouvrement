// import { Chilanka } from "next/font/google"
export default function Notify ({children}:{children:React.ReactNode}){
    const notifyStyle = {
        width: '13px',
        height: '13px',
        marginTop: '-4.75px',
        marginLeft: '-14px',
        // padding: '4px 4px 4px 4px',
        paddingLeft: '4px',
        fontSize: '9px',
        borderRadius: '4px',
        backgroundColor: '#EB5757',
        color: '#FFFFFF',


    }
    return <span style={notifyStyle}>{children}</span>
}