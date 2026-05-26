import React, { useState, useRef, useEffect } from 'react';
import { Camera, Image as ImageIcon, Upload, RefreshCw, Check, Sliders, Info, Sparkles } from 'lucide-react';
import { FABRICS, PRESETS } from '../data';
import { Fabric } from '../types';

export default function TryOnVisualizer() {
  const [activeTab, setActiveTab] = useState<'preset' | 'upload'>('preset');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [selectedFabric, setSelectedFabric] = useState<Fabric>(FABRICS[0]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  
  // Custom alignment tool adjustments for uploaded photos
  const [overlayX, setOverlayX] = useState<number>(50); // %
  const [overlayY, setOverlayY] = useState<number>(55); // %
  const [overlayWidth, setOverlayWidth] = useState<number>(50); // %
  const [overlayHeight, setOverlayHeight] = useState<number>(40); // %
  const [overlayRotation, setOverlayRotation] = useState<number>(0); // deg
  const [overlayOpacity, setOverlayOpacity] = useState<number>(0.85);
  const [blendMode, setBlendMode] = useState<'multiply' | 'overlay' | 'normal'>('multiply');
  const [perspectiveSkew, setPerspectiveSkew] = useState<number>(0); // deg

  // Camera handling
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Trigger preset type switch
  const currentPreset = PRESETS[selectedPresetIndex];

  // Load preset defaults
  useEffect(() => {
    if (currentPreset) {
      setOverlayRotation(currentPreset.defaultOverlayPosition.rotation);
      setOverlayX(currentPreset.defaultOverlayPosition.x);
      setOverlayY(currentPreset.defaultOverlayPosition.y);
      setOverlayWidth(currentPreset.defaultOverlayPosition.width);
      setOverlayHeight(currentPreset.defaultOverlayPosition.height);
      setBlendMode(currentPreset.type === 'bed' ? 'multiply' : 'overlay');
    }
  }, [selectedPresetIndex, currentPreset]);

  // Start webcam
  const startCamera = async () => {
    setIsCapturing(true);
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err: any) {
      console.error("Camera access error:", err);
      setCameraError("Camera access denied or unavailable. Please upload a photo instead.");
      setIsCapturing(false);
    }
  };

  // Capture Photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setUploadedImage(dataUrl);
        setActiveTab('upload');
        stopCamera();
      }
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCapturing(false);
  };

  // Handle local image upload file conversion
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
          setActiveTab('upload');
          // Reset controls for default placements
          setOverlayWidth(60);
          setOverlayHeight(50);
          setOverlayX(50);
          setOverlayY(50);
          setOverlayRotation(0);
          setPerspectiveSkew(0);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Preset switch helper
  const handlePresetChange = (index: number) => {
    setSelectedPresetIndex(index);
  };

  return (
    <section id="try-on" className="py-24 bg-white relative overflow-hidden border-b border-brand-border">
      {/* Decorative earthy backdrop */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-sage/20 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-sand/30 rounded-full blur-3xl opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 bg-brand-sage text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-xs mb-4">
            Interactive Try-On Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-tight leading-tight mb-4">
            Drape Before You Buy
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed font-light">
            See our organic textiles natively in your home. Take a live picture of your windows or bed and digitally try on curtains or bedsheets using our perspective fabric rendering engine to eliminate sizing returns.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Interactive Preview Card (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-sand rounded-xs p-4 sm:p-6 border border-brand-border shadow-xs relative">
            
            {/* Action Bar */}
            <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
              <div className="flex bg-white p-1 rounded-xs border border-brand-border">
                <button
                  onClick={() => { setActiveTab('preset'); stopCamera(); }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xs transition-all duration-200 uppercase tracking-wider cursor-pointer ${
                    activeTab === 'preset' && !isCapturing
                      ? 'bg-brand-green text-white shadow-xs'
                      : 'text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  Preset Rooms
                </button>
                <button
                  onClick={() => { setActiveTab('upload'); stopCamera(); }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xs transition-all duration-200 uppercase tracking-wider cursor-pointer ${
                    activeTab === 'upload' && !isCapturing && uploadedImage
                      ? 'bg-brand-green text-white shadow-xs'
                      : 'text-brand-muted hover:text-brand-charcoal'
                  }`}
                  disabled={!uploadedImage}
                  title={!uploadedImage ? "Upload a photo first to activate this tab" : ""}
                >
                  <Upload className="w-4 h-4" />
                  My Room Photo
                  {!uploadedImage && (
                    <span className="text-[9px] bg-brand-sand text-brand-muted px-1.5 py-0.5 rounded-sm ml-1">Empty</span>
                  )}
                </button>
              </div>

              <div className="flex gap-2">
                {isCapturing ? (
                  <button
                    onClick={capturePhoto}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-opacity-90 text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <Check className="w-4 h-4" /> Take Photo
                  </button>
                ) : (
                  <button
                    onClick={startCamera}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white border border-brand-border text-brand-charcoal hover:bg-brand-sand text-xs font-semibold rounded-xs transition-all uppercase tracking-wider"
                  >
                    <Camera className="w-4 h-4 text-brand-green" /> Snap Cam Photo
                  </button>
                )}
                {isCapturing && (
                  <button
                    onClick={stopCamera}
                    className="px-3 py-2 bg-white border border-brand-border text-brand-muted text-xs font-semibold rounded-xs hover:bg-brand-sand uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* ERROR banner */}
            {cameraError && (
              <div className="mb-4 bg-red-50 text-red-800 p-3 rounded-xs text-xs leading-relaxed border border-red-100 flex items-start gap-2 text-left">
                <Info className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{cameraError}</span>
              </div>
            )}

            {/* PREVIEW CONTAINER */}
            <div className="aspect-[4/3] bg-brand-sand rounded-xs relative overflow-hidden flex items-center justify-center border border-brand-border group shadow-inner">
              
              {/* Camera Streaming Mode */}
              {isCapturing && (
                <div className="absolute inset-0 z-20 bg-black flex items-center justify-center">
                  <video 
                    ref={videoRef} 
                    id="webcam-stream"
                    className="w-full h-full object-cover transform scale-x-[-1]" 
                    playsInline 
                    muted 
                  />
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-4 py-2 rounded-xs border border-white/20 whitespace-nowrap">
                    Align your bed or window in the camera frame
                  </div>
                </div>
              )}

              {/* Preset mode view */}
              {activeTab === 'preset' && !isCapturing && (
                <div className="absolute inset-0 w-full h-full select-none">
                  {/* Base Photo Background of modern room */}
                  <img
                    id="preset-room-base"
                    src={currentPreset.imageUrl}
                    alt={currentPreset.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />

                  {/* HIGH END EXPERT FABRIC DRAPE LAYER: Uses CSS clipPath based on custom room polygons */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-all duration-300"
                    style={{
                      clipPath: currentPreset.clipPath,
                      opacity: overlayOpacity
                    }}
                  >
                    {/* Seamless fabric texture tiling background, using blending settings */}
                    <div 
                      className={`w-full h-full`}
                      style={{
                        backgroundImage: `url(${selectedFabric.textureUrl})`,
                        backgroundSize: '180px 180px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: blendMode
                      }}
                    />
                  </div>

                  {/* Highlights/Shadow Overlay to preserve realistic fabric volume */}
                  <div 
                    className="absolute inset-0 pointer-events-none blend-overlay opacity-30 select-none"
                    style={{
                      clipPath: currentPreset.clipPath,
                    }}
                  >
                    <div 
                      className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/30"
                      style={{
                        backgroundBlendMode: 'soft-light'
                      }}
                    />
                  </div>

                  <div className="absolute bottom-3 left-3 bg-brand-charcoal/90 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-xs">
                    {currentPreset.name} • {selectedFabric.source} Draping
                  </div>
                </div>
              )}

              {/* Uploaded User Photo Mode */}
              {activeTab === 'upload' && !isCapturing && (
                <div className="absolute inset-0 w-full h-full">
                  {uploadedImage ? (
                    <div className="relative w-full h-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                      <img
                        id="user-uploaded-base"
                        src={uploadedImage}
                        alt="Your uploaded space"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />

                      {/* DRAPE SHEET - Draggable and adjustable relative overlay */}
                      <div
                        id="user-photo-drape-sheet"
                        style={{
                          position: 'absolute',
                          left: `${overlayX}%`,
                          top: `${overlayY}%`,
                          width: `${overlayWidth}%`,
                          height: `${overlayHeight}%`,
                          transform: `translate(-50%, -50%) rotate(${overlayRotation}deg) skewX(${perspectiveSkew}deg)`,
                          transformOrigin: 'center center',
                          opacity: overlayOpacity,
                          pointerEvents: 'none',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                        }}
                      >
                        {/* High quality blending container */}
                        <div 
                          className="w-full h-full rounded-xs border border-white/20 transition-all duration-200"
                          style={{
                            backgroundImage: `url(${selectedFabric.textureUrl})`,
                            backgroundSize: '100px 100px',
                            backgroundRepeat: 'repeat',
                            mixBlendMode: blendMode,
                            height: '100%'
                          }}
                        />

                        {/* Subtle faux shadowing over custom drapes */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                      </div>

                      {/* Helper indicator lines */}
                      <div className="absolute top-3 left-3 bg-brand-charcoal/90 backdrop-blur-sm text-[#FAF9F6] text-[10px] px-2.5 py-1 rounded-xs font-mono flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-brand-sage" /> Perspective Alignment Active
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6 text-brand-muted">
                      <Upload className="w-12 h-12 stroke-[1px] text-brand-gray mb-3" />
                      <p className="font-semibold text-sm text-brand-charcoal mb-1">No uploaded photo found</p>
                      <p className="text-xs text-brand-muted max-w-xs mb-4">Upload a bright photo of your bedroom or window to begin custom scaling</p>
                      <label className="px-5 py-2.5 bg-brand-green hover:bg-opacity-95 text-white text-xs font-bold uppercase tracking-widest rounded-xs cursor-pointer transition-colors shadow-xs">
                        Choose Photo
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleFileUpload} 
                          className="hidden" 
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}

              {/* Utility Calibration helper for fine edits */}
              {activeTab === 'upload' && uploadedImage && !isCapturing && (
                <div className="absolute bottom-3 right-3 bg-brand-charcoal/90 text-white text-[10px] px-2.5 py-1.5 rounded-xs backdrop-blur-sm font-mono pointer-events-none">
                  Adjust positioning sliders to align
                </div>
              )}
            </div>

            {/* Hidden canvas for taking snapshot photo */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Preset Toggle Switch Cards */}
            {activeTab === 'preset' && !isCapturing && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {PRESETS.map((p, idx) => (
                  <button
                    key={p.id}
                    id={`preset-btn-${p.id}`}
                    onClick={() => handlePresetChange(idx)}
                    className={`flex items-center gap-3 p-2 text-left rounded-xs border transition-all cursor-pointer ${
                      selectedPresetIndex === idx
                        ? 'border-brand-green bg-white shadow-xs'
                        : 'border-brand-border bg-white/70 hover:bg-brand-sand'
                    }`}
                  >
                    <img 
                      src={p.imageUrl} 
                      alt="" 
                      className="w-12 h-10 object-cover rounded-xs border border-brand-border grayscale" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <p className="text-xs font-bold text-brand-charcoal truncate uppercase tracking-wide">Preset {p.type === 'bed' ? 'Bed' : 'Window'}</p>
                      <p className="text-[10px] text-brand-muted truncate">{p.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Uploaded User Photo controls list - Only visible during direct photo mode */}
            {activeTab === 'upload' && uploadedImage && !isCapturing && (
              <div className="mt-4 bg-brand-sand border border-brand-border rounded-xs p-5">
                <div className="flex items-center justify-between gap-2 mb-4 border-b border-brand-border pb-2.5 text-left">
                  <h4 className="text-[10px] font-bold font-mono text-brand-green uppercase tracking-widest flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5" /> Layer Calibration
                  </h4>
                  <button 
                    onClick={() => {
                      setOverlayX(50);
                      setOverlayY(50);
                      setOverlayWidth(60);
                      setOverlayHeight(50);
                      setOverlayRotation(0);
                      setPerspectiveSkew(0);
                      setOverlayOpacity(0.85);
                      setBlendMode('multiply');
                    }}
                    className="text-[9px] text-brand-charcoal hover:text-brand-green flex items-center gap-1 border border-brand-border bg-white px-2.5 py-1 rounded-xs cursor-pointer font-bold uppercase tracking-wider"
                  >
                    <RefreshCw className="w-2.5 h-2.5" /> Reset
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-xs text-left">
                  {/* Position X Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Horizontal Position (X)</span>
                      <span className="font-mono text-[10px] font-bold">{overlayX}%</span>
                    </div>
                    <input 
                      type="range" min="10" max="90" value={overlayX} 
                      onChange={(e) => setOverlayX(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Position Y Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Vertical Position (Y)</span>
                      <span className="font-mono text-[10px] font-bold">{overlayY}%</span>
                    </div>
                    <input 
                      type="range" min="10" max="90" value={overlayY} 
                      onChange={(e) => setOverlayY(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Width Scale Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Width Stretch</span>
                      <span className="font-mono text-[10px] font-bold">{overlayWidth}%</span>
                    </div>
                    <input 
                      type="range" min="15" max="100" value={overlayWidth} 
                      onChange={(e) => setOverlayWidth(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Height Scale Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Height Stretch</span>
                      <span className="font-mono text-[10px] font-bold">{overlayHeight}%</span>
                    </div>
                    <input 
                      type="range" min="15" max="100" value={overlayHeight} 
                      onChange={(e) => setOverlayHeight(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Rotation Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Rotate Angle</span>
                      <span className="font-mono text-[10px] font-bold">{overlayRotation}°</span>
                    </div>
                    <input 
                      type="range" min="-180" max="180" value={overlayRotation} 
                      onChange={(e) => setOverlayRotation(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Skew Perspective Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Perspective Tilt (Skew)</span>
                      <span className="font-mono text-[10px] font-bold">{perspectiveSkew}°</span>
                    </div>
                    <input 
                      type="range" min="-45" max="45" value={perspectiveSkew} 
                      onChange={(e) => setPerspectiveSkew(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Opacity Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-brand-muted">
                      <span>Fabric Texture Weight</span>
                      <span className="font-mono text-[10px] font-bold">{Math.round(overlayOpacity * 100)}%</span>
                    </div>
                    <input 
                      type="range" min="0.30" max="1.0" step="0.05" value={overlayOpacity} 
                      onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer"
                    />
                  </div>

                  {/* Blend Modes Selector */}
                  <div className="space-y-1">
                    <span className="text-brand-muted block mb-1">Shadowing Blend Mode</span>
                    <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xs border border-brand-border">
                      {(['multiply', 'overlay', 'normal'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setBlendMode(m)}
                          className={`py-1 text-[9px] font-bold uppercase rounded-xs text-center capitalize transition-colors cursor-pointer ${
                            blendMode === m
                              ? 'bg-brand-sage text-brand-green'
                              : 'text-brand-muted hover:text-brand-charcoal'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Upload Form helper */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 p-4 bg-white border border-dashed border-brand-border rounded-xs justify-between">
              <div className="flex items-center gap-2.5 text-xs text-brand-muted text-center sm:text-left">
                <Info className="w-4 h-4 text-brand-green shrink-0" />
                <span>Have a photo of your cozy space? Upload it here to begin.</span>
              </div>
              <label className="px-5 py-2 bg-white border border-brand-border hover:bg-brand-sand text-brand-charcoal text-xs font-bold rounded-xs cursor-pointer transition-all shrink-0 uppercase tracking-widest leading-none">
                Upload Photo
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileUpload} 
                  className="hidden" 
                />
              </label>
            </div>

          </div>

          {/* RIGHT: Swatch, Customizer and Fabric Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Swatch Picker Card */}
            <div className="bg-brand-sand rounded-xs p-6 border border-brand-border text-left">
              <span className="text-[10px] font-mono text-brand-green uppercase tracking-widest font-bold block">Step 1: Choose Sustainable Handloom Texture</span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal mt-1 mb-4">Fabric Swatches</h3>
              
              {/* Swatch Tiles Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {FABRICS.map((fabric) => {
                  const isSelected = selectedFabric.id === fabric.id;
                  return (
                    <button
                      key={fabric.id}
                      id={`fabric-swatch-${fabric.id}`}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`group flex flex-col text-left rounded-xs overflow-hidden border p-2.5 transition-all relative cursor-pointer ${
                        isSelected
                          ? 'border-brand-green bg-white shadow-xs'
                          : 'border-brand-border bg-white hover:border-brand-gray'
                      }`}
                    >
                      {/* Circle Swatch preview with zoomed texture aspect */}
                      <div className="aspect-[4/3] w-full rounded-xs overflow-hidden bg-brand-sand relative mb-2">
                        <div 
                          className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-102"
                          style={{
                            backgroundImage: `url(${fabric.textureUrl})`,
                            backgroundSize: '80px 80px',
                            backgroundRepeat: 'repeat'
                          }}
                        />
                        {/* active dot */}
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-brand-green text-white rounded-full p-1 shadow">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </div>
                      
                      {/* Fabric Mini info */}
                      <span className="text-xs font-bold text-brand-charcoal truncate tracking-wide">{fabric.name}</span>
                      <span className="text-[10px] font-mono text-brand-muted mt-0.5 uppercase tracking-wide truncate">{fabric.source} Base</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Fabric Description Details */}
              <div className="bg-white p-4.5 rounded-xs border border-brand-border space-y-3 shadow-xs">
                <div className="flex items-center justify-between gap-2 border-b border-brand-border pb-2.5">
                  <h4 className="font-serif text-lg text-brand-charcoal font-bold">{selectedFabric.name}</h4>
                  <span className="px-2.5 py-1 bg-brand-sage text-brand-green font-mono text-[9px] uppercase font-bold rounded-xs">
                    {selectedFabric.source}
                  </span>
                </div>
                
                <p className="text-xs text-brand-muted leading-relaxed font-light font-sans">
                  {selectedFabric.description}
                </p>

                {/* Benefits tag list */}
                <div className="space-y-1.5 pt-1.5">
                  <span className="text-[10px] font-mono font-bold text-brand-gray uppercase tracking-widest block">Organic Properties</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFabric.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-semibold bg-brand-sand border border-brand-border text-brand-charcoal px-2.5 py-1 rounded-xs"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trial Calibration & Environmental Return Impact Pledge */}
            <div className="bg-brand-green text-[#FAF9F6] rounded-xs p-6 relative overflow-hidden shadow-md text-left">
              <div className="relative">
                <h4 className="font-serif text-lg mb-2 text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-sage" /> Try-On Impact Pledge
                </h4>
                <p className="text-brand-sage text-xs leading-relaxed mb-5 font-light">
                  Traditional e-commerce returns cause enormous carbon footprints due to duplicate transport. By confirming the color harmonises perfectly with your paintwork via our Try On drapery, you actively participate in Raipur's circular zero-waste charter.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-brand-border/20 pt-4 font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-brand-sage block tracking-widest">Carbon Savings</span>
                    <span className="text-sm font-bold text-white mt-1 block">8.2 kg CO₂ / order</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-brand-sage block tracking-widest">Dhamtari Safe return</span>
                    <span className="text-sm font-bold text-white mt-1 block">98% Success Ratio</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
