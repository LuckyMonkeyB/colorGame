import { useState, useEffect } from "react";

export default function Timer() {

    const [time, setTime] = useState(10);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time === 0) {
            setStep(1);
        }
    }, [time]);

    return (
        <div>
            <div className="flex w-fit flex-col items-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 px-8 py-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">
                    Temps restant
                </p>

                <div className={`font-mono text-6xl font-bold tabular-nums ${
                    time <= 5 ? "text-red-500" : "text-white"
                }`}>
                    {String(time).padStart(2, "0")}
                </div>
            </div>

            {step > 0 && step < 4 && (
                <div
                    onClick={() => setStep(step + 1)}
                    className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/80"
                >
                    {step === 1 && (
                        <video
                            src="/explosion.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-[80vw] max-w-3xl"
                        />
                    )}

                    {step === 2 && (
                        <>
                            <img src="/no.gif" className="w-[80vw] max-w-3xl" />
                            <audio src="/noGod.mp3" autoPlay />
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <img src="/no2.webp" className="w-[80vw] max-w-3xl" />
                            <audio src="/willsmith.mp3" autoPlay />
                        </>
                    )}
                </div>
            )}

            {step === 4 && <p>Jeu est terminé</p>}
        </div>
    );
}