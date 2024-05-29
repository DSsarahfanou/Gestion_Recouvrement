// The items of nav 
export default function Item({children}:{children:React.ReactNode}){
    const itemStyle ={
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        // textAlign : 'left',
        color: '#636774',
        marginLeft:'5px',
        marginRight:'5px',
        padding: '8px 16px 8px 16px',
        

    }
    return <p style={itemStyle}>{children}</p>
}
