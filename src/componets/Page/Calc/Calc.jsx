import React, { useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Calc.css"
function Calc() {
    const[ Value,setValue] =useState('');
    return (
        <div>

            <NavBar />

                <div className="contanier">
                    <div className="calc">
                        <form action=''>
                            <div className='text'>
                                <input type="text" value={Value} />
                            </div>
                            <div>
                <input type="button" value="AC" onClick={n=>setValue(' ')} />
                <input type="button" value="DE" onClick={n=>setValue(Value.slice(0,-1))} />
                <input type="button" value="." onClick={n=> setValue(Value+ n.target.value)}/>
                <input type="button" value="/" onClick={n=> setValue(Value+ n.target.value)}/>
            </div>
            <div>
                <input type="button" value="7" onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="8" onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="9"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="*" onClick={n=> setValue(Value+ n.target.value)}/>
            </div>
            <div>
                <input type="button" value="4"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="5"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="6"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="+"onClick={n=> setValue(Value+ n.target.value)} />
            </div>
            <div>
                <input type="button" value="1" onClick={n=> setValue(Value+ n.target.value)}/>
                <input type="button" value="2"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="3"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="-"onClick={n=> setValue(Value+ n.target.value)} />
            </div>
            <div>
                <input type="button" value="0"onClick={n=> setValue(Value+ n.target.value)} />
                <input type="button" value="00" onClick={n=> setValue(Value+ n.target.value)}/>
                <input type="button" value="=" className='equal'onClick={n=> setValue(eval(Value))} />
               
            </div>
                        </form>
                    </div>
                </div>

        </div>
    )
}

export default Calc