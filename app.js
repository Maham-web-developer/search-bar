let filterArry =[];
showgallery(galleryArray) 
 function showgallery(currarray) {
    document.getElementById("card").innerText ="";
    
    for(let i=0;i<currarray.length;i++){
        document.getElementById('card').innerHTML +=`
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
        <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
        <img src="${currarray[i].src}" width="100%"height="320px"/>
        <P class="mt-2">${currarray[i].dec}</P>
        <button class="btn btn-secondary w-100 mx-auto">Order Now</button>
        </div>
        </div>
        `
     
    }
 }
//  ============search=========

document.getElementById('myinput').addEventListener('keyup',function(){
    let text = document.getElementById('myinput').value;
   
    filterArry = galleryArray.filter(function(a){
    if (a.name.includes(text)){
        return a.name;
     }
    });
    if(this.value==""){
        showgallery(galleryArray); 
    }
    else{
        if(filterArry==""){
            document.getElementById("para").style.display='block';
            document.getElementById("card").innerHTML="";
        }
        else{
            showgallery(filterArry);
            document.getElementById("para").style.display='none';
        }
    }

})