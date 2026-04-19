"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoBg1: React.FC = () => {
    const playerRef = useRef<HTMLDivElement | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        if (typeof window !== "undefined") {
            // Function to load scripts dynamically
            const loadScript = (src: string, onLoad: () => void) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = onLoad;
                document.body.appendChild(script);
            };

            // Load jQuery first
            loadScript("https://code.jquery.com/jquery-3.6.0.min.js", () => {
                // Once jQuery is loaded, load the YTPlayer plugin
                loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js", () => {
                    // Ensure jQuery exists and ref is available
                    if ((window as any).jQuery && playerRef.current) {
                        const $player = (window as any).jQuery(playerRef.current);

                        // Initialize the player and listen for the 'YTPReady' event
                        $player.mb_YTPlayer();

                        $player.on("YTPReady", function () {
                            console.log("Player is ready!");
                        });
                    }
                });
            });
        }

        return () => {
            const jQueryScript = document.querySelector('script[src="https://code.jquery.com/jquery-3.6.0.min.js"]');
            const ytPlayerScript = document.querySelector(
                'script[src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.9/jquery.mb.YTPlayer.min.js"]'
            );
            if (jQueryScript && document.body.contains(jQueryScript)) {
                document.body.removeChild(jQueryScript);
            }
            if (ytPlayerScript && document.body.contains(ytPlayerScript)) {
                document.body.removeChild(ytPlayerScript);
            }
        };
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div
            className="player shadow"
            ref={playerRef}
            data-property={`{
                "videoURL": "HUozIpTODZQ",
                "containment": ".video-bg-live",
                "showControls": false,
                "autoPlay": true,
                "zoom": 0,
                "loop": true,
                "mute": true,
                "startAt": 10,
                "opacity": 1,
                "quality": "default"
            }`}
        />
    );
};

export default VideoBg1;
