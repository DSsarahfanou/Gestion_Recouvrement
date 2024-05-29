export default function Ttitle ({children}:{children:React.ReactNode}){
    const color = {
        borderidth: '0px, 1px, 1px, 1px',

        borderStyle: 'solid',
        fontFamily: 'Inte',
        fontSize: '16px',
        fontWeight: '500'
        
        

        // BackgroundColor: 'rgba(99, 103, 116, 0.12)'


    }
    return(
        <tr style={color} className='border pl-10 bg-slate-50 font-bold'>{children}</tr>
    )
}