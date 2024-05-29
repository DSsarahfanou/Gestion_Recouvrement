export default function MyHeader({children}:{children:React.ReactNode}){
    const headerStyle = {
        padding: '16px 44px 16px 44px',
        gap: '0px',
        border: ' 0px 0px 1px 0px ',
        justify: 'space-between',
        opacity: '0px',
        backgroundColor: 'white',
        height: '90px',
        
        boxShadow: '0px 1px 1px 0px rgba(18, 18, 18, 0.04)'

    }
    return(
        <header style={headerStyle}>{children}</header>
    )
}



