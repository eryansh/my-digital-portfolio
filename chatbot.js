// chatbot.js

export function initChatbot() {
    const widget = document.createElement('div');
    widget.id = 'ai-chat-widget';

    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true; 
    video.playsInline = true;
    video.crossOrigin = 'anonymous'; 
    
    // Sembunyikan video asal
    video.style.position = 'absolute';
    video.style.opacity = '0';
    video.style.pointerEvents = 'none'; 
    video.style.width = '10px';
    
    const source = document.createElement('source');
    source.src = 'avatar3D.mp4'; 
    source.type = 'video/mp4';
    video.appendChild(source);

    const canvas = document.createElement('canvas');
    canvas.id = 'avatar-canvas';
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // ==========================================
    // LOGIK RESPONSIVE (SAIZ MENGIKUT PERANTI)
    // ==========================================
    function updateAvatarSize() {
        if (window.innerWidth <= 600) {
            // Telefon Pintar (Smartphone)
            canvas.style.width = '90px'; 
        } else if (window.innerWidth <= 1024) {
            // Tablet / iPad
            canvas.style.width = '120px';
        } else {
            // Komputer Desktop / Laptop
            canvas.style.width = '160px';
        }
    }

    // Panggil fungsi untuk set saiz semasa mula-mula dimuatkan
    updateAvatarSize();
    // Auto-laras jika pengguna mengubah saiz tetingkap pelayar web
    window.addEventListener('resize', updateAvatarSize);

    // Tambah sedikit gaya asas (CSS) terus dari JS
    canvas.style.cursor = 'pointer';
    canvas.style.filter = 'drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))';
    canvas.style.transition = 'transform 0.3s ease, filter 0.3s ease, width 0.3s ease';

    video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.play().catch(e => console.log("Autoplay disekat:", e));
    });

    // ==========================================
    // ENJIN CHROMA KEY V3 (Dengan Despill Anti-Border)
    // ==========================================
    function removeGreenScreen() {
        if (video.paused || video.ended || video.videoWidth === 0) {
            requestAnimationFrame(removeGreenScreen);
            return;
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // 1. PADAM LATAR BELAKANG UTAMA
            if (g > 70 && g > r * 1.35 && g > b * 1.35) {
                data[i + 3] = 0; 
            }
            // 2. DESPILL: HILANGKAN BORDER HIJAU
            else if (g > r && g > b) {
                data[i + 1] = (r + b) / 2;
            }
        }
        
        ctx.putImageData(frame, 0, 0);
        requestAnimationFrame(removeGreenScreen);
    }

    video.addEventListener('play', () => {
        removeGreenScreen();
    });

    // Hanya masukkan video dan canvas ke dalam widget
    widget.appendChild(video); 
    widget.appendChild(canvas);
    
    document.body.appendChild(widget);

    // Interaksi klik ringkas (Efek pulse pink)
    canvas.addEventListener('click', () => {
        canvas.style.filter = 'drop-shadow(0 0 25px rgba(255, 0, 127, 0.9))';
        canvas.style.transform = 'scale(1.1) translateY(-10px)';
        
        // Kembali ke normal selepas 2 saat
        setTimeout(() => {
            canvas.style.filter = 'drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))';
            canvas.style.transform = 'scale(1) translateY(0)';
        }, 2000);
    });
}