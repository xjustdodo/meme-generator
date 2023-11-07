const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const videoContainer = document.querySelector(".meme-generator .video-container");

const url = 'https://k-pop.p.rapidapi.com/songs/random';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '12230dd324msh746bb451874e87fp176a27jsnb038e405b92e',
    'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
  }
};

async function generateVideo() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);


    

    if (data && data.data && data.data.length > 0) {
      const videoUrl = data.data[0].Video;
      console.log(videoUrl);

      
      if (videoUrl) {
        // Extrahiere die Video-ID aus der YouTube-URL
        const videoId = extractVideoId(videoUrl);
        console.log(videoId);

        if (videoId) {
      
          // Erstelle die neue URL im gewünschten Format
          const embeddedVideoUrl = `https://www.youtube.com/embed/${videoId}`;

          // Aktualisiere das iframe-Element
          videoContainer.innerHTML = `<iframe width="560" height="315" src="${embeddedVideoUrl}" frameborder="0" allowfullscreen></iframe>`;
        } else {
          console.log('Ungültige Video-URL.');
        }
      } else {
        console.log('Kein Video-Link in der API-Antwort gefunden.');
      }
    } else {
      console.log('Keine Daten in der API-Antwort gefunden.');
    }
  } catch (error) {
    console.error(error);
  }
}

function extractVideoId(videoUrl) {
  // Extrahiere die Video-ID aus der youtu.be-URL
  const videoIdMatch = videoUrl.match(/youtu.be\/([a-zA-Z0-9_-]+)/);
  return videoIdMatch && videoIdMatch[1];
}

generateMemeBtn.addEventListener("click", generateVideo);
