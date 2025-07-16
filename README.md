# VisionVoice---AI-Companion-for-visually-impaired
An AI-powered assistive system with voice control, real-time object detection using state of the art gemini AI model, and speech emotion analysis.

# VisionVoice: AI Companion for the Visually Impaired

An AI-powered assistive system designed to enhance digital and physical accessibility for visually impaired users. This project integrates voice-controlled web navigation, real-time object detection, and speech emotion recognition into one unified system that empowers users to interact naturally with both the web and their physical environment.

---

## 🧠 Overview

**VisionVoice** is composed of **three independent modules**, each targeting a specific accessibility challenge:

1. 🎙️ **Module 1 – VoiceMate**  
   A fully voice-controlled ReactJS website interface that allows users to navigate the web using spoken commands, enhancing screen-free access to digital content.

2. 👁️ **Module 2 – Gemini Vision (Real-Time Object Detection)**  
   An AI module that uses Google’s Gemini model to detect objects in the user's surroundings via a webcam, then converts the results into audio feedback, helping users understand their environment.

3. 🗣️ **Module 3 – Speech Emotion Recognition**  
   A machine learning-based system that detects the emotional tone of a speaker from audio input, useful in gauging user well-being or adapting system responses based on emotion.

---

## 🧩 Project Architecture

[User Voice Input]
↓
┌───────────────┐
│ VoiceMate │ ← ReactJS website with voice command control
└───────────────┘
↓
┌────────────────────┐
│ Gemini Vision │ ← Object detection + audio captioning via webcam
└────────────────────┘
↓
┌────────────────────────┐
│ Speech Emotion Analyzer│ ← Sentiment classification from voice clips
└────────────────────────┘
↓
[User Feedback (Audio/Visual)]


---

## 🔧 Technologies Used

| Module                      | Technologies / Frameworks                                      |
|----------------------------|------------------------------------------------------------------|
| VoiceMate (Module 1)       | ReactJS, JavaScript, SCSS, SpeechRecognition API                |
| Gemini Vision (Module 2)   | Python, OpenCV, Gemini Vision API, pyttsx3, SpeechRecognition   |
| Emotion Recognition (Mod 3)| Python, Keras, TensorFlow, Streamlit, librosa, sklearn          |
| General                    | Git, VS Code, GitHub, Google Colab, Ngrok (for local server tunneling) |

---

## 🚀 How to Run Each Module

### 1️⃣ Module 1: VoiceMate (Voice Controlled Website)
```bash
cd mod-3-Voicemate
npm install
npm run dev

Open browser to http://localhost:5173

Speak supported commands like “Go to Home”, “Open About”, “Search for books”, etc.

2️⃣ Module 2: Gemini Vision (Object Detection)

cd mod-1-gemini-vision
pip install -r requirements.txt
python script.py


3️⃣ Module 3: Speech Emotion Recognition

cd mod-2-speech-emotion-recognition
pip install -r packages.txt
streamlit run app.py

📁 Folder Structure

VisionVoice---AI-Companion-for-visually-impaired/
├── mod-1-gemini-vision/
│   ├── script.py
│   ├── libs/
│   ├── requirements.txt
│   └── README.md
│
├── mod-2-speech-emotion-recognition/
│   ├── app.py
│   ├── model.ipynb
│   ├── speech_emo_recognition.h5
│   └── README.md
│
├── mod-3-Voicemate/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── README.md
│
└── README.md  ← (You are here)



🌟 Features
Modular Architecture – Each component can run independently or be integrated into a larger assistive framework.

Multimodal Accessibility – Combines voice, vision, and emotion to support more natural user interactions.

Fully Open Source – Designed for academic and non-commercial use. Contributions welcome!

📈 Future Scope
Integrate all modules into one unified application using a Flask or Node.js backend.

Add dynamic voice feedback to emotion recognition.

Expand voice commands using NLP for more natural interactions.

Integrate obstacle detection using LiDAR or ultrasonic sensors.

🙋‍♂️ Author
Dhruv Sinha
B.Tech in Information Technology – VIT Vellore
Email: dhruvsinha18@gmail.com
GitHub: @dhruvcodes-18



