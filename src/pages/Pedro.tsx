import useSound from "use-sound";
import { useEffect, useRef, useState } from "react";
import Template from "./Template";
import soundFile from '../assets/pedro/pedro.mp3';
import imageFile from '../assets/pedro/pedro.webp';
import '../style/pedro.css';

export const Pedro = () => {

    const [play, { stop, duration }] = useSound(soundFile, { volume: 1 });
    const [isPlaying, setIsPlaying] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLImageElement>(null);


    useEffect(() => {
        if (isPlaying) {
            play();
            if (imgRef.current && containerRef.current && duration) {
                containerRef.current.style.animation = `spin 2s linear infinite`;
                imgRef.current.style.animation = `pulse 0.5s ease-in-out infinite`;
                const timeout = setTimeout(() => {
                    setIsPlaying(false);
                }, duration);

                return () => clearTimeout(timeout);
            }
        } else {
            stop();
            if (imgRef.current && containerRef.current) {
                containerRef.current.style.animation = '';
                imgRef.current.style.animation = '';
            }
        }
    }, [isPlaying, play, stop, duration]);

    useEffect(() => {
        // Fonction de nettoyage pour arrêter le son lorsque le composant est démonté
        return () => {
            stop();
        };
    }, [stop]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <Template title={"Pedro"} grow={false}>
            <div
                className="spin-container flex justify-center items-center h-full m-auto"
                ref={containerRef}
            >
                <img
                    src={imageFile}
                    alt="Pedro"
                    onClick={handleClick}
                    ref={imgRef}
                    className="sm:w-64 w-40 h-auto pulse"
                />
            </div>
        </Template>
    );
}
