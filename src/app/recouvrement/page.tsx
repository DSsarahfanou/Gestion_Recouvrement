import MyForm from "@/components/formulaire"
import Link from "next/link"
import "./style/style.css"
import "./style/styleForm.css"
import { useState } from "react"
export default function Form (){
    const InputStyle = 'border  border-gray-300  mb-3 rounded-lg p-3 h-12  focus: outline-none focus:ring-2 focus:ring-blue-500  w-full'
    const ButtonStyle = 'border border-gray-300  mb-3 rounded-lg p-3 focus: outline-none focus:ring-2 focus:ring-blue-500 '    
    const LabelStyle= ' w-full'
    const dragover = {
        background: 'rgba(0, 127, 200, 0.04)'

    }



    return(
        <>         
            <form action="" className="form">
                
                <MyForm>
                    <div className={``}>
                        <h4 className={`text-blue-500 font-bold text-3xl  content-center mb-4`}>Recouvrement</h4>
                        <p className={` text-gray-400 content-center mb-3 `}>Ajouter un nouveau débiteur/débitrice</p>
                    
                    </div>
                    <hr /> 
                    <br/> 
                    <div className='formDivFlex'>
                        <div className=' formDivContainer '><label htmlFor="" className={`${LabelStyle} formLabel `}>Numéro de facture</label><input type="text" className={`${InputStyle} `} placeholder="0002348572" /></div>
                        <div className='formDivContainer '><label htmlFor="" className={`${LabelStyle} formLabel `}>Société</label><input type="text" className={`${InputStyle}   `} placeholder="InnovaPlus" /></div>
                    </div>
                    <div className='formDivFlex'>
                        <div className='formDivContainer ' ><label htmlFor="" className={`${LabelStyle} formLabel`}>Nom</label><input type="text" className={`${InputStyle}`} placeholder="Doe" /></div>
                        <div className='formDivContainer '><label htmlFor="" className={`${LabelStyle} formLabel `}>Prénom</label><input type="text" className={`${InputStyle}`} placeholder="John" /></div>
                    </div>
                    <div className='formDivFlex'>
                        <div className='formDivContainer '><label htmlFor="" className={`${LabelStyle} formLabel`}>Email de rappel</label><input type="text" className={`${InputStyle}`} placeholder="johndoe@gmail.com" /></div>
                        <div className='formDivContainer '><label htmlFor="" className={`${LabelStyle} formLabel `}>Montant dû (£)</label><input type="text" className={`${InputStyle}`} placeholder="800" /></div>
                    </div>
                    <div>
                        <label htmlFor="" className={`${LabelStyle} formLabel`} >Ajouter la facture </label>
                        <div style={dragover} className='border-2 flex flex-col  border-blue-500 border-dashed p-4 rounded-md  items-center'>
                                {/* <input type="file" name="dossier" id="" /> */}
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' w-6 h-6 text-stone-500'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>

                            </div>
                                <div><p className='d text-stone-500  text-lg'>Glisser et deposer un fichier ou <span className="text-blue-500">téléverser</span></p></div>
                        </div>
                        
                    </div>
                    <div>
                        <button className={` bg-blue-500 text-white ${ButtonStyle} `}  type="submit">Enregistrer</button>
                        <button className={` text-blue-500 m-5 ${ButtonStyle}`}  type="reset">Annuler</button>
                        <Link href={'/gestion'}>
                            <button className={` bg-blue-500 text-white m-5 ${ButtonStyle}`}  type="reset">Next Page</button>

                        </Link>                    
                    </div>
                </MyForm>
            </form>
        </>
    )
}