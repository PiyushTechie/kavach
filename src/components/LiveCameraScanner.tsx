"use client";
import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";

interface LiveCameraScannerProps {
  onScanSuccess: (url: string) => void;
  onCancel: () => void;
}

export default function LiveCameraScanner({ onScanSuccess, onCancel }: LiveCameraScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let stream: MediaStream | null = null;
    let animationFrameId: number;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", "true");
          videoRef.current.play();
          requestAnimationFrame(scanFrame);
        }
      } catch (err) {
        setError("Camera access denied or unavailable.");
        console.error("Camera error:", err);
      }
    };

    const scanFrame = () => {
      if (videoRef.current && canvasRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d", { willReadFrequently: true });

        if (context) {
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });

          if (code && code.data) {
            if (stream) {
              stream.getTracks().forEach((track) => track.stop());
            }
            onScanSuccess(code.data);
            return;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scanFrame);
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [onScanSuccess]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-slate-900 rounded-2xl overflow-hidden relative">
      {error ? (
        <div className="text-red-400 text-center p-4">{error}</div>
      ) : (
        <>
          <p className="text-white mb-4 text-sm font-medium animate-pulse">Point camera at QR code...</p>
          <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" />
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </>
      )}
      <button 
        onClick={onCancel}
        className="mt-6 px-6 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition"
      >
        Cancel Scan
      </button>
    </div>
  );
}