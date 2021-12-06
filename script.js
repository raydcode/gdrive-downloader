const glink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
const clear = document.querySelector('.clear');

const generateLink = (e) => {
  e.preventDefault();
  const gLinkValue = document.getElementById('glink').value;
  const confirmLink = glink.value.includes('https://drive.google.com/file/d/');

  if (confirmLink) {
    const getDownloadLink = glink.value
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download&id='
      )
      .replace('/view?usp=sharing', '');
    downloadLink.value = getDownloadLink;

    const audio = '<audio width="300" height="32" controls="controls" src="';
    const audioFollow = '" type="audio/mp3"> </audio>';

    embedAudio.value = `${audio}${downloadLink.value}${audioFollow}`;

    const getVideoLink = glink.value.replace('/view?usp=sharing', '');

    const video = '<iframe src="';
    const videoFollow = '/preview" width="500" height="300"> </iframe>';

    embedVideo.value = `${video}${getVideoLink}${videoFollow}`;
  } else {
    alert('Invalid Link');
  }
};

btn.addEventListener('click', generateLink);
