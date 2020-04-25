window.addEventListener('load',bindEvents);
function bindEvents(){
    document.querySelector('#login').addEventListener('click',doLogin);
    
    document.querySelector('#player').addEventListener('click',doPlayerCall);
}
function doPlayerCall(){
    const options ={
        mode: 'cors',
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
            
          }
        
    };
    var promise = fetch('http://localhost:1234/api/player',options);
    promise.then(response=>{
        response.json().then(data=>{
            console.log('JSON is ',data);
            let div = document.querySelector('#output');
            let img = document.createElement('img');
            img.src=data.image;
            div.appendChild(img);
            let p = document.createElement("p");
            p.innerText = data.name +" "+data.age;
            div.appendChild(p);
           
        }).catch(err=>{
            console.log('JSON Err is ',err);
        })
    }).catch(err=>{
        console.log('Response Err is ',err);
    });
    
}
function doLogin(){
    var userid = document.querySelector('#userid').value;
    var pwd = document.querySelector('#password').value;
    var userObject = {"userid":userid,"password":pwd};
    var promise = doAjax(userObject);
    promise.then(response=>{
        response.json().then(data=>{
            console.log('JSON is ',data);
            if(data && data.status && data.status=='F'){
                msg = data.msg;
                document.querySelector('#result').innerText = msg;
            }
            else{
            var userid = data.userobject.userid;
            var role = data.userobject.rolename;
            var msg = 'Welcome '+userid+' Role is '+role;
            document.querySelector('#result').innerText = msg;
            document.querySelector('#loginform').classList='hide';
            }
           
        }).catch(err=>{
            console.log('JSON Err is ',err);
        })
    }).catch(err=>{
        console.log('Response Err is ',err);
    });

}
function doAjax(userObject){
    console.log('URL is ',URL.LOGIN, ' BASE ',BASE_URL);
    const options ={
        mode: 'cors',
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
            
          },
        body:JSON.stringify(userObject)
    };
    var promise = fetch(URL.LOGIN,options);
    return promise;
}
