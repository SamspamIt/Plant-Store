import React, {useState , useEffect} from 'react';

const Topbar = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setStep((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // 3 sec me change

        return () => clearInterval(interval);
    }, []);
    return (
        <div className={`text-white text-center text-sm px-3  py-1 transition-all duration-700 ${
            step === 0 ? "bg-orange-600" : "bg-[#6b6f3f]"}`}>
            {step === 0 ? (
            <p>Free Shipping on orders over $75</p>
            ) : (
            <div className="flex justify-center items-center gap-4">
                <p>Get 15% off your first purchase</p>
                <button className="border px-3  text-xs hover:bg-white hover:text-black transition">
                    Sign Up
                </button>
            </div>
            )}
        </div>
    )
}

export default Topbar
