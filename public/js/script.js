const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

document.querySelector('button').addEventListener('click', () => {
    recognition.start();
});

recognition.onstart = () => {
    console.log('Voice recognition activated. Try speaking into the microphone.');
};

recognition.addEventListener('result', (event) => {
    let last = event.results.length - 1;
    let transcript = event.results[last][0].transcript;
    console.log('You said: ' + transcript);
    console.log('Confidence: ' + event.results[0][0].confidence);
});