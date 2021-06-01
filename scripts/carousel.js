window.onload = ()=>{
    let carousel = document.getElementById('carousel');
    let items = carousel.getElementsByClassName('desc-cont');
    for(let item of items){
        let bar = document.createElement('div');
        bar.className="progress";
        item.append(bar)
    };
    let itemId = 0;
    let nextTimeout;
    let mod = items.length*200;
    let translateX = 50;

    function next(){
        translateX += 200;
        translateX = (translateX + mod) % mod;
        itemId = (itemId+1)%items.length;
        startProgress(itemId);
        carousel.style.transform = "translateX(-"+translateX+"%)";
    }
    document.getElementById('next').onclick = next;
    document.getElementById('prev').onclick = ()=>{
        translateX -= 200;
        translateX = (translateX + mod) % mod;
        itemId = (itemId-1+items.length)%items.length;
        startProgress(itemId);
        carousel.style.transform = "translateX(-"+translateX+"%)";
    }

    setTimeout(()=>startProgress(itemId), 0);

    function startProgress(itemId){
        let bar = items[itemId].getElementsByClassName('progress')[0];
        bar.style.transition = "none";
        bar.style.width = "0";
        setTimeout(()=>{
            bar.style.transition = "";
            bar.style.width = "100%";
        }, 1000);
        clearInterval(nextTimeout);
        nextTimeout = setTimeout(next, 10000);
    }
}
