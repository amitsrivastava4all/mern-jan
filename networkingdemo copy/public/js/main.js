window.addEventListener('load',getData);
var eventSource;
function getData(){
    eventSource = new EventSource('./stream');
    
    eventSource.addEventListener('open',()=>{
        console.log('Connection Open');
    });
    eventSource.addEventListener('message',(evt)=>{
        console.log('Message Rec ',evt.data);
        document.querySelector('#showdata').innerText = evt.data;

    })
    eventSource.addEventListener('error',()=>{
        console.log('Error Occur in SSE');
    })
    console.log('Event Source is ',eventSource);
    // eventSource.onopen= openConnection;
    // eventSource.onmessage = getScore;
    // eventSource.onerror= printError;
    // console.log('Event Register ',eventSource);
}

function openConnection(){
    console.log('Connection Open');
}

function  getScore(event){
    console.log('Event is ',event);
}

function printError(err){
    console.log('Error in SSE ',err);
}