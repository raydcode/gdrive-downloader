const glink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
const clear = document.querySelector('.clear');

const copy = document.getElementById('copy');
const copyAudio = document.getElementById('copy-audio');
const copyVideo = document.getElementById('copy-video');

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

    copy.addEventListener('click', () => {
      downloadLink.select();
      document.execCommand('copy');
      copy.textContent = 'copied';
      setTimeout(() => {
        copy.textContent = 'copy';
      }, 3000);
    });

    const audio = '<audio width="300" height="32" controls="controls" src="';
    const audioFollow = '" type="audio/mp3"> </audio>';

    embedAudio.value = `${audio}${downloadLink.value}${audioFollow}`;

    copyAudio.addEventListener('click', () => {
      embedAudio.select();
      document.execCommand('copy');
      copyAudio.textContent = 'copied';
      setTimeout(() => {
        copyAudio.textContent = 'copy';
      }, 3000);
    });

    const getVideoLink = glink.value.replace('/view?usp=sharing', '');

    const video = '<iframe src="';
    const videoFollow = '/preview" width="500" height="300"> </iframe>';

    embedVideo.value = `${video}${getVideoLink}${videoFollow}`;

    copyVideo.addEventListener('click', () => {
      embedVideo.select();
      document.execCommand('copy');
      copyVideo.textContent = 'copied';
      setTimeout(() => {
        copyVideo.textContent = 'copy';
      }, 3000);
    });
  } else {
    alert('Invalid Link');
  }
};

btn.addEventListener('click', generateLink);


