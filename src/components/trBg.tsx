export default function TrColor ({children}:{children:React.ReactNode}){
    const color = {
        borderidth: '0px, 1px, 1px, 1px',

        borderStyle: 'solid',

        // BackgroundColor: 'rgba(99, 103, 116, 0.12)'


    }
    return(
        <tr style={color} className='border bg-slate-50'>{children}</tr>
    )
}