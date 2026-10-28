import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react";

export default function MyRef() {
    const [sVal, setSVal] = useState();
    let cVal = 0;
    const rVal = useRef();

    const handleC = () => {
        cVal = cVal++;
    }

    const handleS = () => {
        setSVal(sVal + 1);
    }

    const handleR = () => {
        rVal.current = rVal.current++;
    }

    useEffect(() => {

    }, [sVal]);

    return (
        <div className='w-10/12 flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-blue-700 text-center text-xl">
                    컴포넌트 변수 : {cVal}
                    </div>
                <div className="text-orange-700 text-center text-xl">
                    State 변수 : {sVal}
                </div>
                <div className="text-lime-700 text-center text-xl">
                    Ref 변수 : {rVal.current}
                </div>
                <div>
                    <TailButton caption='컴포넌트 변수' bcolor='blue' handleClick={handleC}/>
                </div>
                <div>
                    <TailButton caption='State 변수' bcolor='orange' handleClick={handleS}/>
                </div>
                <div>
                    <TailButton caption='Ref 변수' bcolor='blue' handleClick={handleR}/>
                </div>
            </div>
        </div>
    )
}
