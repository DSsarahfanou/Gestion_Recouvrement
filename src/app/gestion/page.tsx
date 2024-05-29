import MyHeader from "@/components/header"
import Notify from "@/components/notification"
import TdGray from "@/components/tdGray"
import TdGreen from "@/components/tdGreen"
import TrColor from "@/components/trBg"
import ActuelItem from "@/components/itemsActuel"
import Item from "@/components/items"
import Ttitle from "@/components/titleTable"
import Image from "next/image"
import TdOrange from "@/components/tdOrange"
import TextGray from "@/components/textGray"
// import "/logo.png "
export default function GestionRecouvrement(){
    const ButtonStyle = 'border h-8 rounded-lg p-1 font-bold text-sm  '   ; 
    const PStyle = {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '21px',
        color: '#121212',
    }
    const pStyle = {
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
    }
    const VueStyle = {
        width: '14px',
        height: '10px',
        marginTop: '5.5px',
        marginLeft: '3px',
        border: '2px',
        opacity: '0px',
        
    }


    return(
        <>  
            <MyHeader>
                
                {/* <span style={{backgroundImage: "/logo.png"}}><img src= 'logo fh gestion 1.png' /> </span> */}
                <div className='flex justify-between'>
                    
                    <div className='flex justify-between'>
                        <Image src={"/img/logo.png"} width={152} height={58} loading="eager" alt="" ></Image>
                        <div className='flex justify-between mt-1'>
                            <ActuelItem >Donnees</ActuelItem>
                            <Item > Automatisation</Item>
                            <Item> Interfaces</Item>
                        </div>
                        


                    </div>
                    <div className='justify-items-end flex p-2'> 
                       <span className="flex mt-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>
                            <Notify>2</Notify>
                        </span>
                        <Image src={"/img/profile.png"} width={44} height={44} alt=""></Image>
                       

                    </div>
                </div>
            </MyHeader>
            <div className='flex justify-between pl-10 pr-10 pt-10 pb-12 bg-slate-50'>
                <div >
                        <h3 className='font-bold text-lg'>Impayés</h3>
                        <TextGray> Un aperçu de tous vos recouvrement d’impayés</TextGray>
                </div>
                <div className='text-sm flex'>
                        <button className={` flex justify-between pl-4 pr-4 bg-white pb-0 font-bold   border-blue-500  text-blue-500 mr-5 ${ButtonStyle}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                           <p style={pStyle}> Exporter</p>
                        </button>
                        <button className={` flex justify-between pl-4 pr-4 bg-blue-500 font-bold   text-white ${ButtonStyle} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                            <p style={pStyle}>Ajouter</p>
                        </button>
                </div>
            
            </div>
            {/* <img src="/logo.png" alt="" />
             */}
            <div className=' pr-20'>
                <table className=' ml-10 table-fixed w-full mr-4' style={{marginTop:'-30px'}}>
                    <thead>
                    <Ttitle >
                        <td className='pl-3'> Facture</td>
                        <td className='pl-3'>Société</td>
                        <td >Débiteur/Débitrice</td>
                        <td className='pl-6 text-center'>Montant</td>
                        <td className='pl-10' >Email</td>
                        <td></td>

                    </Ttitle>
                    </thead>   
                    <tbody>
                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td >
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdOrange>En attente</TdOrange>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>

                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>

                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>

                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>

                        {/* <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>


                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>

                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor>


                        <tr className='border ' >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </tr>
                        <TrColor >
                            <TdGray>237445704</TdGray>
                            <TdGray>InovaPulse</TdGray>
                            <td>
                                <h5 className='font-medium'>KPODZO Yannick</h5>
                                <TextGray>yannick.kpodzo@gmail.com</TextGray>
                            </td>
                            <TdGray><p style={{textAlign:'center'}}>€53,18</p></TdGray>
                            <TdGreen>Envoyé</TdGreen>
                            <td>
                            <button className={` flex ml-6 bg-white  ${ButtonStyle}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  style={VueStyle}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p style={PStyle}>Voir la facture</p>
                            </button>
                            </td>
                        </TrColor> */}
                    </tbody>
                    
                </table>
            </div>


        
        
        
        </>
    )
}