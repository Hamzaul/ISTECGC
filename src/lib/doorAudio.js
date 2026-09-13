"use client";

/**
 * doorAudio
 * ---------
 * Synthesizes a short, subtle "architectural/mechanical" door sound with the
 * Web Audio API instead of shipping an audio file — one less asset to
 * source/license, and it stays tiny.
 *
 * Autoplay safety: the AudioContext is created lazily, only after the first
 * real user gesture (pointerdown / keydown / wheel), and resumed inside that
 * gesture's call stack. Nothing plays before that, and nothing plays if the
 * browser refuses to resume the context — failures are swallowed silently.
 */

let ctx = null;
let unlocked = false;
let muted = false;

function ensureContext() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
  }
  return ctx;
}

/** Call once, from within a real user-gesture event handler. */
export function unlockDoorAudio() {
  const audioCtx = ensureContext();
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  unlocked = true;
}

export function setDoorAudioMuted(value) {
  muted = value;
}

export function isDoorAudioMuted() {
  return muted;
}

/**
 * A short filtered-noise sweep + soft low thud. `direction` is 1 for
 * opening, -1 for closing — it only changes the filter sweep direction and
 * pitch slightly, so opening/closing read as distinct but related sounds.
 */
function playSweep(direction = 1) {
  if (muted || !unlocked) return;
  const audioCtx = ensureContext();
  if (!audioCtx || audioCtx.state !== "running") return;

  const now = audioCtx.currentTime;
  const duration = 0.35;

  // Filtered noise burst (the "whoosh" of a heavy panel sliding).
  const bufferSize = Math.floor(audioCtx.sampleRate * duration);
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 0.9;
  const startFreq = direction > 0 ? 900 : 500;
  const endFreq = direction > 0 ? 300 : 800;
  filter.frequency.setValueAtTime(startFreq, now);
  filter.frequency.linearRampToValueAtTime(endFreq, now + duration);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.linearRampToValueAtTime(0.06, now + 0.05);
  noiseGain.gain.linearRampToValueAtTime(0.0001, now + duration);

  noise.connect(filter).connect(noiseGain).connect(audioCtx.destination);

  // Soft low thud underneath, for weight.
  const thud = audioCtx.createOscillator();
  thud.type = "sine";
  thud.frequency.setValueAtTime(direction > 0 ? 110 : 90, now);
  const thudGain = audioCtx.createGain();
  thudGain.gain.setValueAtTime(0.0001, now);
  thudGain.gain.linearRampToValueAtTime(0.08, now + 0.02);
  thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  thud.connect(thudGain).connect(audioCtx.destination);

  noise.start(now);
  noise.stop(now + duration);
  thud.start(now);
  thud.stop(now + 0.3);
}

export function playDoorOpen() {
  playSweep(1);
}

export function playDoorClose() {
  playSweep(-1);
}
