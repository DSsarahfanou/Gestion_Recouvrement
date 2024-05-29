export default function TdGray({children}:{children:React.ReactNode}){
    const tdstyle={
        color: '#636774',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '19.36px',
        paddingLeft: '10px',
        width: '1rem',
        // textAlign:'center',
        // border: '1px solid'
        // padding: '40px'
        
        // text-align: left;
    }
    return <td style={tdstyle}>{children}</td>
}