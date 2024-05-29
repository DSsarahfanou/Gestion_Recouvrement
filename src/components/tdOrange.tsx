export default function TdOrange({children}:{children:React.ReactNode}){
    const tdStyle = {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '16.94px',
        color: 'rgba(252, 121, 0, 1)',
        background: 'rgba(252, 121, 0, 0.06)',
        border: '0.4px solid rgba(252, 121, 0, 0.24)',
        width: '85px'


        // text-align: left;

    }
    return(
        <td className="pl-10 ">
            <p className="pl-2 pr-2 pt-1 pb-1 rounded" style={tdStyle}>
                {children}
            </p>
        </td>
    )
}