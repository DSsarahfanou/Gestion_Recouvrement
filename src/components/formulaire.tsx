const MyForm = ({children}:{children:React.ReactNode})=>{
    const formulaire={
        borderRadius: "10px",
        borderStyle: "outside",
        justifyContent: "center",
        // width:"650px",
        width: '550px',
        height: 'fill(921px)',
        padding: '18px 32px 18px 32px',
        gap: '23px',
        opacity: '0px'
        

    }

    return <div style={formulaire} className={`bg-white content-center m-auto`}>{children}</div>

}
export default MyForm ;
