export default function ActuelItem ({children}:{children:React.ReactNode}){
    const itemActuelStyle ={
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        height:'40px',
        // textAlign: 'left',
        color: 'rgba(0, 127, 200, 1)',
        // backgroundColor: '#000DC
        marginLeft:'65px',
        marginRight:'5px',
        padding: '8px 16px 8px 16px',
        borderRadius: '8px',
        opacity: '0px',
        background: 'rgba(0, 127, 200, 0.12)'


        
    }
    return <p className='bg-teal-100' style={itemActuelStyle}>{children}</p>

} 