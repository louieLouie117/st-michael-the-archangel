import React, {useState} from 'react'

function Sacraments(props) {

    const [baptismInfo, setBaptismInfo]= useState(false);
    const [firstCommunionInfo, setFirstCommunionInfo]= useState(false);
    const [confirmationInfo, setConfirmationInfo]= useState(false);
    const [holyOrderInfo, setHolyOrderInfo]= useState(false);
    const [holyMatrimonyInfo, setHolyMatrimonyInfo]= useState(false);
    const [anointingInfo, setAnointingInfo]= useState(false);
    const [reconciliation, setReconciliation]= useState(false);

    const SacramentsInfoHandler = e =>{
        console.log("eText", e.target.innerText)

        if(e.target.innerText === "Baptism"){
            setBaptismInfo(true);
            setFirstCommunionInfo(false);
            setConfirmationInfo(false);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(false);
            setReconciliation(false);
        }

        if(e.target.innerText === "First Communion"){
            setBaptismInfo(false);
            setFirstCommunionInfo(true);
            setConfirmationInfo(false);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(false);
            setReconciliation(false);
        }

        if(e.target.innerText === "Confirmation"){
            setBaptismInfo(false);
            setFirstCommunionInfo(false);
            setConfirmationInfo(true);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(false);
            setReconciliation(false);
        }

        if(e.target.innerText === "Holy Order"){
            setBaptismInfo(false);
            setFirstCommunionInfo(false);
            setConfirmationInfo(false);
            setHolyOrderInfo(true);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(false);
            setReconciliation(false);
        }

        if(e.target.innerText === "Holy Matrimony"){
            setBaptismInfo(false);
            setFirstCommunionInfo(false);
            setConfirmationInfo(false);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(true);
            setAnointingInfo(false);
            setReconciliation(false);
        }

        if(e.target.innerText === "Anointing of the Sick"){
            setBaptismInfo(false);
            setFirstCommunionInfo(false);
            setConfirmationInfo(false);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(true);
            setReconciliation(false);
        }

        if(e.target.innerText === "Reconciliation"){
            setBaptismInfo(false);
            setFirstCommunionInfo(false);
            setConfirmationInfo(false);
            setHolyOrderInfo(false);
            setHolyMatrimonyInfo(false);
            setAnointingInfo(false);
            setReconciliation(true);
        }
    }




  return (
    <div className='Sacraments-Container'>
        <ul>
        <h2 onClick={SacramentsInfoHandler}>Baptism</h2>

        <li style={{display: baptismInfo ? "grid": "none"}}>
                <header>
                <img src="/assets/sacraments/BaptismImg.png" alt="" />
                </header>
                <section>
                    <p>Every third Sunday, during or outside of Mass. Contact Fr. Julian or Deacon Tom to set a meeting to prepare for the Sacrament and set a date.</p>
                    {/* <button>Register</button> */}
                </section>
            </li>

            <h2  onClick={SacramentsInfoHandler}>First Communion</h2>
            <li style={{display: firstCommunionInfo ? "grid": "none"}}>
                <header>
                <img src="/assets/sacraments/firstCommunionImg.png" alt="" />
                </header>

                <section>
                    <p>First Eucharist is celebrated during May each year with children in the second grad or older.</p>
                    {/* <button>Register</button> */}
                </section>
            </li>

            <h2  onClick={SacramentsInfoHandler}>Confirmation</h2>
            <li style={{display: confirmationInfo ? "grid": "none"}}>
    
            <header>
                <img src="/assets/sacraments/ConfirmationImg.png" alt="" />
                </header>

                <section>
                    <p>Confirmation for youth is conferred by the Bishop. Adults receive the Sacrament at the Easter Vigil or before Marriage by Fr. Julian.</p>
                    {/* <button>Register</button> */}
                </section>
            </li>

            <h2  onClick={SacramentsInfoHandler}>Holy Order</h2>
            <li style={{display: holyOrderInfo ? "grid": "none"}}>
            <header>
                <img src="/assets/sacraments/HolyOrderImg.png" alt="" />
                </header>

                <section>
                    <p>Contact Fr. Julian or Deacons Jack or Tom if you are interested in the vocations of Priesthood, Diaconate or Religious.</p>
                    {/* <button>Register</button> */}
                </section>
            </li>

            <h2  onClick={SacramentsInfoHandler}>Holy Matrimony</h2>
            <li style={{display: holyMatrimonyInfo ? "grid": "none"}}>
            <header>
                <img src="/assets/sacraments/HolyMatrimonyImg.png" alt="" />
                </header>

                <section>
                    <p>Contact Fr. Julian or Deacons Jack or Tom for Marriage and Annulment needs.</p>
                    {/* <button>Register</button> */}
                </section>

            </li>

            <h2  onClick={SacramentsInfoHandler}>Anointing of the Sick</h2>
            <li style={{display: anointingInfo ? "grid": "none"}}>
            <header>
                <img src="/assets/sacraments/AnointingImg.png" alt="" />
                </header>

                <section>
                    <p>Anyone who is seriously ill or going to surgery should request anointing by contacting Fr. Julian.</p>
                    {/* <button>Register</button> */}
                </section>

            </li>

            <h2  onClick={SacramentsInfoHandler}>Reconciliation</h2>
            <li style={{display: reconciliation ? "grid": "none"}}>
            <header>
                <img src="/assets/sacraments/ReconciliationImg.png" alt="" />
                </header>

                <section>
                    <p>Saturdays, 4:30 pm, before mass or after Mass or by appointment with Fr. Julian.</p>
                    {/* <button>Register</button> */}
                </section>

            </li>
        </ul>
    </div>
  )
}


export default Sacraments
