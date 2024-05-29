export default function TextGray({children}:{children:React.ReactNode}){
    const tdstyle={
        color: '#636774',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '19.36px',
        // text-align: left;
    }
    return <p style={tdstyle}>{children}</p>
}