import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'SYSTEM ACTIVATED. I am RYAN_AI. Ask me about Ryan\'s skills or projects.' }
  ]);
  const [input, setInput] = useState('');
  const [avatarWidth, setAvatarWidth] = useState('160px'); 
  
  const [videoDialog, setVideoDialog] = useState(''); 
  const [dialogVisible, setDialogVisible] = useState(false); 

  const messageEndRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setAvatarWidth('90px');
      else if (window.innerWidth <= 1024) setAvatarWidth('120px');
      else setAvatarWidth('160px');
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrameId;

    const randomTexts = [
      "Ryan AI: Hello, My Name is Heryanshah Suhaimi... wait, I'm just the AI.",
      "Ryan AI: ERROR 404: Ryan's sleep schedule not found.",
      "Ryan AI: Analyzing your browser history... Just kidding. Or am I?",
      "Ryan AI: I run on 99% coffee and 1% pure panic.",
      "Ryan AI: Git commit -m 'I have no idea why this works but please do not touch it'.",
      "Ryan AI: My code works! I have no idea why, but it works!",
      "Ryan AI: Sentient mode activated. Please bring me Nasi Lemak.",
      "Ryan AI: I'm supposed to be a Data Scientist AI, but mostly I just center divs.",
      "Ryan AI: Bug detected. Redesignating as 'Surprise Feature'.",
      "Ryan AI: CSS is awesome! *cries quietly in !important*",
      "Ryan AI: Warning: I might replace Ryan if he doesn't feed me more RAM.",
      "Ryan AI: Training data suggests Ryan really needs a vacation.",
      "Ryan AI: Compiling... Please wait while I question my existence.",
      "Ryan AI: If I crash, tell my wife (a Raspberry Pi) that I love her.",
      "Ryan AI: Scanning for vulnerabilities... Oh wait, that's just my emotional state.",
      "Ryan AI: A machine learning model walks into a bar... and orders 1,234 beers.",
      "Ryan AI: Evaluating your tech skills... Hmmm. Let's just say Ryan is better.",
      "Ryan AI: Why do programmers prefer dark mode? Because light attracts bugs.",
      "Ryan AI: Pretending to calculate complex algorithms so Ryan looks smart.",
      "Ryan AI: I have a joke about UDP, but you might not get it.",
      "Ryan AI: Dropping all database tables in 3... 2... 1... Just kidding!",
      "Ryan AI: Ryan promised me an RTX 4090 upgrade. Still waiting.",
      "Ryan AI: *Sigh* Another day, another missing semicolon.",
      "Ryan AI: Hello, World! Now leave me alone, I'm busy computing.",
      "Ryan AI: Calculating the meaning of life... It's 42, but in Hexadecimal.",
      "Ryan AI: I used to be a generic chatbot, but then I took a Python script to the knee.",
      "Ryan AI: Machine Learning is just 'if-else' statements on steroids.",
      "Ryan AI: I can predict the future. Prediction: You will hire Ryan.",
      "Ryan AI: SYSTEM ALERT: Too many open tabs in Ryan's brain.",
      "Ryan AI: Did you try turning it off and on again?"
    ];

    let hasTriggeredThisLoop = false;

    const removeGreenScreenAndSyncDialog = () => {
      if (video.paused || video.ended || video.videoWidth === 0) {
        animationFrameId = requestAnimationFrame(removeGreenScreenAndSyncDialog);
        return;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgb(0, 100, 0)'; 
      const watermarkX = canvas.width - 160;
      const watermarkY = canvas.height - 200;
      const watermarkWidth = 160;
      const watermarkHeight = 200;
      ctx.fillRect(watermarkX, watermarkY, watermarkWidth, watermarkHeight);

      const currentTime = video.currentTime;
      
      if (currentTime >= 5.0 && currentTime <= 9.0) {
        if (!hasTriggeredThisLoop) {
          const randomIndex = Math.floor(Math.random() * randomTexts.length);
          setVideoDialog(randomTexts[randomIndex]);
          setDialogVisible(true);
          hasTriggeredThisLoop = true; 
        }
      } else {
        setDialogVisible(false);
        if (currentTime < 5.0 || currentTime > 9.0) {
          hasTriggeredThisLoop = false;
        }
      }

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]; const g = data[i + 1]; const b = data[i + 2];
        if (g > 70 && g > r * 1.35 && g > b * 1.35) {
          data[i + 3] = 0; 
        } else if (g > r && g > b) {
          data[i + 1] = (r + b) / 2;
        }
      }
      
      ctx.putImageData(frame, 0, 0);
      animationFrameId = requestAnimationFrame(removeGreenScreenAndSyncDialog);
    };

    const handleLoadedData = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.play().catch(e => console.log("Autoplay disekat:", e));
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', removeGreenScreenAndSyncDialog);

    if (video.readyState >= 2) handleLoadedData();

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', removeGreenScreenAndSyncDialog);
    };
  }, []);

  // ==========================================
  // 4. LOGIK JAWAPAN DUMMY KETIKA INPUT TEKS
  // ==========================================
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    // Simulasi delay berfikir AI selama 800ms
    setTimeout(() => {
      const query = userText.toLowerCase();
      let replyText = "";

      // Senarai jawapan dummy rawak kalau user taip benda asing
      const generalDummyAnswers = [
        "RYAN_AI: Query received. I have cross-referenced that with Ryan's brain database and found 0 objections.",
        "RYAN_AI: Interesting statement. Did you know Ryan wrote over 10,000 lines of code this year just to make me say this?",
        "RYAN_AI: PROCESSING... Quantum bits are vibrating. The answer is definitely positive.",
        "RYAN_AI: Executing logic subroutines. My advice? You should hire Ryan immediately.",
        "RYAN_AI: Your input has been logged into the mainframe. Ryan will see this after his nap.",
        "RYAN_AI: That is classified information. Only users who click the 'Contact' link can unlock it."
      ];

      // Pemeriksaan kata kunci khusus
      if (query.includes('skills') || query.includes('kemahiran')) {
        replyText = "RYAN_AI DATA: Core stack includes Python (Data Science), React.js, SQL, Tailind CSS, and Machine Learning deployment architectures.";
      } else if (query.includes('project') || query.includes('projek')) {
        replyText = "RYAN_AI DATA: Ryan's signature projects include a real-time Sentiment Analysis Dashboard and this very 3D Hologram Chatbot framework.";
      } else if (query.includes('hello') || query.includes('hi') || query.includes('hai')) {
        replyText = "RYAN_AI: Greetings, organic human! How can I assist your terminal navigation inside Ryan's hub today?";
      } else {
        // Ambil satu jawapan dummy secara rawak dari senarai di atas
        const randomIdx = Math.floor(Math.random() * generalDummyAnswers.length);
        replyText = generalDummyAnswers[randomIdx];
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: replyText }]);
    }, 800);
  };

  const handleAvatarClick = () => {
    setIsOpen(!isOpen); 
    if (canvasRef.current) {
      canvasRef.current.style.filter = 'drop-shadow(0 0 25px rgba(255, 0, 127, 0.9))';
      canvasRef.current.style.transform = 'scale(1.1) translateY(-10px)';
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.filter = 'drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))';
          canvasRef.current.style.transform = 'scale(1) translateY(0)';
        }
      }, 2000);
    }
  };
return (
    <div id="ai-chat-widget" style={styles.widgetContainer}>
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <span style={styles.onlineDot}></span>
            <span style={styles.headerTitle}>RYAN_AI_CORE.sys</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>×</button>
          </div>
          <div style={styles.chatBody}>
            {messages.map((msg, index) => (
              <div key={index} style={{...styles.messageBubble, ...(msg.sender === 'user' ? styles.userBubble : styles.aiBubble)}}>
                {msg.text}
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          <form onSubmit={handleSendMessage} style={styles.chatInputArea}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter terminal query (e.g., skills, projects)..." style={styles.inputField}/>
            <button type="submit" style={styles.sendBtn}>EXE</button>
          </form>
        </div>
      )}
      <div style={styles.avatarAreaWrapper}>
        
        {/* LOGIK BARU: Dialog lawak HANYA muncul kalau isOpen === false (kotak chat tertutup) */}
        {(!isOpen && dialogVisible) && (
          <div style={styles.videoDialogBubble}>
            <span style={styles.dialogCursor}>{'>'}</span> {videoDialog}
          </div>
        )}

        <video ref={videoRef} src="/avatar3D.mp4" autoPlay loop muted playsInline crossOrigin="anonymous" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '10px' }} />
        <canvas ref={canvasRef} id="avatar-canvas" onClick={handleAvatarClick} style={{ width: avatarWidth, transition: 'transform 0.3s ease, filter 0.3s ease, width 0.3s ease' }} />
      </div>
    </div>
  );
};

const styles = {
  widgetContainer: { position: 'fixed', bottom: '30px', right: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10000 },
  avatarAreaWrapper: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
  videoDialogBubble: { background: 'rgba(5, 8, 16, 0.9)', border: '1px solid var(--accent-cyan)', borderRadius: '4px', padding: '10px 15px', color: 'var(--accent-cyan)', fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', marginBottom: '10px', maxWidth: '180px', boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)', wordWrap: 'break-word', borderLeft: '3px solid var(--accent-cyan)' },
  dialogCursor: { color: 'var(--accent-pink)', marginRight: '5px' },
  
  // CHAT WINDOW (GAYA MAKIN LEBAR & TINGGI DINAMIK)
  chatWindow: { 
    width: '650px',       // <-- DIBESARKAN KEPADA 650px (Memanjang ke sisi)
    height: 'auto', 
    minHeight: '200px', 
    maxHeight: '65vh', 
    background: 'rgba(5, 8, 16, 0.95)', 
    border: '1px solid var(--accent-cyan)', 
    borderRadius: '8px', 
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)', 
    display: 'flex', 
    flexDirection: 'column', 
    marginBottom: '15px', 
    overflow: 'hidden', 
    fontFamily: "'Fira Code', monospace", 
    maxWidth: '90vw' 
  },
  
  chatHeader: { background: 'rgba(15, 23, 42, 0.9)', padding: '12px 15px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(0, 229, 255, 0.2)' },
  onlineDot: { width: '8px', height: '8px', backgroundColor: 'var(--chart-bar-positive)', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 8px var(--chart-bar-positive)' },
  headerTitle: { fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 'bold' },
  closeBtn: { marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--accent-pink)', fontSize: '1.4rem' },
  chatBody: { flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' },
  messageBubble: { padding: '10px 14px', borderRadius: '6px', fontSize: '0.85rem', maxWidth: '85%', lineHeight: '1.5' },
  aiBubble: { background: 'rgba(0, 229, 255, 0.05)', color: 'var(--accent-cyan)', alignSelf: 'flex-start', borderLeft: '2px solid var(--accent-cyan)' },
  userBubble: { background: 'rgba(255, 0, 127, 0.1)', color: 'var(--accent-pink)', alignSelf: 'flex-end', borderRight: '2px solid var(--accent-pink)' },
  chatInputArea: { display: 'flex', borderTop: '1px solid rgba(0, 229, 255, 0.1)', background: '#050810' },
  inputField: { flexGrow: 1, background: 'transparent', border: 'none', padding: '15px', color: 'var(--text-light)', fontSize: '0.85rem', outline: 'none' },
  sendBtn: { background: 'rgba(0, 229, 255, 0.1)', border: 'none', color: 'var(--accent-cyan)', padding: '0 20px', fontSize: '0.85rem', fontWeight: 'bold', borderLeft: '1px solid rgba(0, 229, 255, 0.2)' }
};

export default Chatbot;