export default function TdGreen({children}:{children:React.ReactNode}){
    const tdStyle = {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '16.94px',
        color: '#31AA27',
        background: 'rgba(49, 170, 39, 0.06)',
        border: '0.4px solid rgba(49, 170, 39, 0.24)',
        width: '65px',
        borderRadius: '5px',
        
    }
    return(

        <td className='pl-10 '>
            <p className="pl-2 pr-2 pt-1 pb-1 " style={tdStyle}>
                {children}
            </p>
        </td>
    )
}