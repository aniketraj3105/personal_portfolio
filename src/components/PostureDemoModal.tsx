import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Code, 
  Cpu, 
  Sliders, 
  HelpCircle,
  Volume2
} from 'lucide-react';

interface PostureDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostureDemoModal: React.FC<PostureDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Sliders for simulation
  const [neckAngle, setNeckAngle] = useState<number>(22); // degrees forward
  const [slouchFactor, setSlouchFactor] = useState<number>(15); // % slouch
  const [activeTab, setActiveTab] = useState<'simulator' | 'code'>('simulator');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Ergonomic evaluation
  const isOptimal = neckAngle < 30 && slouchFactor < 25;
  const isWarning = (neckAngle >= 30 && neckAngle < 45) || (slouchFactor >= 25 && slouchFactor < 50);
  const isBad = neckAngle >= 45 || slouchFactor >= 50;

  // Calculate canvas landmarks coordinates based on angles
  // Center is shoulder around (220, 200)
  const shoulderX = 220 + slouchFactor * 0.4;
  const shoulderY = 220 + slouchFactor * 0.3;
  
  // Ear landmark rotated based on neck angle
  const neckRad = (neckAngle * Math.PI) / 180;
  const neckLength = 85;
  const earX = shoulderX + neckLength * Math.sin(neckRad);
  const earY = shoulderY - neckLength * Math.cos(neckRad);

  // Nose landmark (forward from ear)
  const noseX = earX + 35;
  const noseY = earY + 5;

  // Hip landmark
  const hipX = 220;
  const hipY = 360;

  // Eye landmark
  const eyeX = earX + 25;
  const eyeY = earY - 8;

  const setPreset = (preset: 'optimal' | 'mild' | 'severe') => {
    if (preset === 'optimal') {
      setNeckAngle(18);
      setSlouchFactor(12);
    } else if (preset === 'mild') {
      setNeckAngle(36);
      setSlouchFactor(35);
    } else {
      setNeckAngle(55);
      setSlouchFactor(68);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-zinc-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>Bad Posture Detection Simulator</span>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  OpenCV + MediaPipe
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Interactive demonstration of Aniket Raj's Computer Vision posture monitoring project
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 px-6 bg-zinc-50/50 dark:bg-zinc-900/50 text-xs font-medium">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`py-2.5 px-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Landmark Visualizer</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-2.5 px-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Python & OpenCV Pipeline</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {activeTab === 'simulator' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Visual Canvas */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full relative rounded-xl bg-zinc-950 p-4 border border-zinc-800 flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Status Banner inside canvas */}
                  <div className={`absolute top-3 left-3 right-3 px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between ${
                    isOptimal
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                      : isWarning
                      ? 'bg-amber-950/80 text-amber-300 border border-amber-800'
                      : 'bg-rose-950/90 text-rose-300 border border-rose-800 animate-pulse'
                  }`}>
                    <div className="flex items-center gap-2">
                      {isOptimal && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isWarning && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                      {isBad && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                      <span>
                        {isOptimal && 'POSTURE OPTIMAL: Ergonomic alignment within healthy threshold'}
                        {isWarning && 'CAUTION: Forward head tilt detected (Mild slouch)'}
                        {isBad && 'ALERT: Excessive neck flexion! Slouch detected!'}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-bold">
                      {neckAngle}° / 25° Max
                    </span>
                  </div>

                  {/* SVG Anatomical Landmark Visualizer */}
                  <svg 
                    viewBox="0 0 440 400" 
                    className="w-full max-w-[380px] h-[300px] mt-8"
                  >
                    {/* Grid lines */}
                    <line x1="50" y1="360" x2="390" y2="360" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="220" y1="60" x2="220" y2="360" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="225" y="75" fill="#71717a" fontSize="10" fontFamily="monospace">Vertical Gravity Reference</text>

                    {/* Spine Curvature Path */}
                    <path
                      d={`M ${hipX} ${hipY} Q ${shoulderX - 30} ${(shoulderY + hipY) / 2} ${shoulderX} ${shoulderY}`}
                      fill="none"
                      stroke={isBad ? '#f43f5e' : isWarning ? '#f59e0b' : '#10b981'}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Neck line: Shoulder to Ear */}
                    <line
                      x1={shoulderX}
                      y1={shoulderY}
                      x2={earX}
                      y2={earY}
                      stroke={isBad ? '#f43f5e' : isWarning ? '#f59e0b' : '#10b981'}
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    {/* Head contour circle */}
                    <circle
                      cx={earX + 10}
                      cy={earY - 10}
                      r="32"
                      fill={isBad ? 'rgba(244, 63, 94, 0.15)' : 'rgba(16, 185, 129, 0.15)'}
                      stroke={isBad ? '#f43f5e' : isWarning ? '#f59e0b' : '#10b981'}
                      strokeWidth="2"
                    />

                    {/* MediaPipe 33 Landmark Points */}
                    {/* Nose */}
                    <circle cx={noseX} cy={noseY} r="4" fill="#38bdf8" />
                    <text x={noseX + 8} y={noseY + 4} fill="#38bdf8" fontSize="9" fontFamily="monospace">Nose (0)</text>

                    {/* Eye */}
                    <circle cx={eyeX} cy={eyeY} r="3" fill="#38bdf8" />

                    {/* Ear Landmark (7 or 8) */}
                    <circle cx={earX} cy={earY} r="6" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                    <text x={earX - 55} y={earY - 4} fill="#facc15" fontSize="10" fontFamily="monospace">Ear (7/8)</text>

                    {/* Shoulder Landmark (11 or 12) */}
                    <circle cx={shoulderX} cy={shoulderY} r="6" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                    <text x={shoulderX + 12} y={shoulderY + 4} fill="#facc15" fontSize="10" fontFamily="monospace">Shoulder (11/12)</text>

                    {/* Hip Landmark (23 or 24) */}
                    <circle cx={hipX} cy={hipY} r="5" fill="#a1a1aa" />
                    <text x={hipX + 12} y={hipY + 4} fill="#a1a1aa" fontSize="10" fontFamily="monospace">Hip (23/24)</text>

                    {/* Angle arc display */}
                    <path
                      d={`M ${shoulderX} ${shoulderY - 40} A 40 40 0 0 1 ${shoulderX + 40 * Math.sin(neckRad)} ${shoulderY - 40 * Math.cos(neckRad)}`}
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                    <text 
                      x={shoulderX + 25} 
                      y={shoulderY - 48} 
                      fill="#facc15" 
                      fontSize="12" 
                      fontWeight="bold" 
                      fontFamily="monospace"
                    >
                      {neckAngle}°
                    </text>
                  </svg>

                  {/* Real-time Telemetry footer */}
                  <div className="w-full mt-2 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Frame: Real-Time Stream</span>
                    <span>Confidence: 94.6%</span>
                    <span>FPS: 32.4</span>
                  </div>
                </div>

                {/* Presets Bar */}
                <div className="mt-3 w-full flex items-center justify-between gap-2">
                  <span className="text-xs text-zinc-500 font-medium">Test Ergonomic Scenarios:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setPreset('optimal')}
                      className="px-2.5 py-1 text-xs rounded-md font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100"
                    >
                      Optimal (18°)
                    </button>
                    <button
                      onClick={() => setPreset('mild')}
                      className="px-2.5 py-1 text-xs rounded-md font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100"
                    >
                      Mild Slouch (36°)
                    </button>
                    <button
                      onClick={() => setPreset('severe')}
                      className="px-2.5 py-1 text-xs rounded-md font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100"
                    >
                      Severe Slouch (55°)
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Controls & Metrics */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Sliders */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                    Pose Geometry Controls
                  </h3>

                  {/* Neck Angle Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                      <span className="text-zinc-700 dark:text-zinc-300">Cervical Flexion Angle (Ear - Shoulder):</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">{neckAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="65"
                      value={neckAngle}
                      onChange={(e) => setNeckAngle(Number(e.target.value))}
                      className="w-full accent-zinc-900 dark:accent-zinc-100 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                      <span>10° (Upright)</span>
                      <span>25° (Threshold)</span>
                      <span>65° (Severe)</span>
                    </div>
                  </div>

                  {/* Slouch Level Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                      <span className="text-zinc-700 dark:text-zinc-300">Torso Slouch Offset:</span>
                      <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">{slouchFactor}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={slouchFactor}
                      onChange={(e) => setSlouchFactor(Number(e.target.value))}
                      className="w-full accent-zinc-900 dark:accent-zinc-100 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                      <span>0% (Neutral)</span>
                      <span>50% (Hunched)</span>
                      <span>100% (Extreme)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setPreset('optimal')}
                    className="w-full py-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center justify-center gap-1.5 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Baseline</span>
                  </button>
                </div>

                {/* Analysis Breakdown */}
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                    Diagnostic Calculations
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800">
                      <span className="text-zinc-500">Angle Formula:</span>
                      <span className="font-mono text-zinc-800 dark:text-zinc-200">arctan2(Δy, Δx)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800">
                      <span className="text-zinc-500">Alert Status:</span>
                      <span className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                        isOptimal ? 'bg-emerald-100 text-emerald-800' : isWarning ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isOptimal ? 'NORMAL' : isWarning ? 'WARNING' : 'TRIGGER ALERT'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800">
                      <span className="text-zinc-500">Ergonomic Risk:</span>
                      <span className="font-mono text-zinc-800 dark:text-zinc-200">
                        {isOptimal ? 'Low (<10 N tension)' : isWarning ? 'Moderate (~25 N tension)' : 'High (>45 N cervical load)'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-500">Corrective Action:</span>
                      <span className="text-right text-zinc-700 dark:text-zinc-300 font-medium">
                        {isOptimal ? 'Maintain current posture' : isWarning ? 'Elevate display & retract chin' : 'Immediate posture reset required'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Context */}
                <div className="text-xs text-zinc-500 dark:text-zinc-400 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200/60 dark:border-zinc-800/60 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 shrink-0 text-zinc-400 mt-0.5" />
                  <p>
                    In Aniket's real Python implementation, the webcam frame feeds into <code>mp.solutions.pose</code>, extracting 33 normalized landmarks at 30+ FPS without requiring bulky sensors or specialized hardware.
                  </p>
                </div>

              </div>

            </div>
          ) : (
            /* Python Code Implementation Tab */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  posture_detection_engine.py — Core OpenCV / MediaPipe Logic
                </span>
                <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-700 dark:text-zinc-300 font-mono">
                  Python 3.10+
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800">
                <pre>{`import cv2
import mediapipe as mp
import numpy as np

# Initialize MediaPipe Pose estimator
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)

def calculate_angle(a, b, c):
    """
    Computes angle between three landmarks:
    a: Ear landmark
    b: Shoulder landmark (vertex)
    c: Vertical reference point (shoulder.x, shoulder.y - 100)
    """
    a = np.array(a) # Ear
    b = np.array(b) # Shoulder
    c = np.array(c) # Reference
    
    radians = np.arctan2(c[1]-b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
        
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(image)
    
    if results.pose_landmarks:
        landmarks = results.pose_landmarks.landmark
        
        # Extract coordinates for Ear (7) and Shoulder (11)
        ear = [landmarks[mp_pose.PoseLandmark.LEFT_EAR.value].x,
               landmarks[mp_pose.PoseLandmark.LEFT_EAR.value].y]
        shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
                    landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
        reference = [shoulder[0], shoulder[1] - 0.2] # Vertical axis
        
        neck_angle = calculate_angle(ear, shoulder, reference)
        
        # Posture evaluation threshold
        if neck_angle > 35:
            cv2.putText(frame, "ALERT: BAD POSTURE DETECTED!", (50, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        else:
            cv2.putText(frame, f"Posture Good: {int(neck_angle)} deg", (50, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    cv2.imshow('Bad Posture Detection System', frame)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`}</pre>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
                <strong>Project Impact:</strong> Designed to alleviate chronic cervical neck strain and ergonomic fatigue for remote software developers and office workers using zero-cost ambient computer vision.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            Project: Bad Posture Detection Systems • Aniket Raj
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Close Simulator
          </button>
        </div>

      </div>
    </div>
  );
};
