async function getData(){
    const result = await fetch('https://randomuser.me/api?results=4');
    const character = await result.json();
    const characterArr = character.results.map(elemento => Object.entries(elemento));
    console.log(character)
    console.log(characterArr);
    character.results.forEach(element => {
        const randomInt = randonData(1, characterArr.lenght);
        const randonIndex = randomInt;
        //for(i = 0; i < 4; i++){
            //if(element.id == i){
                const img = document.createRange().createContextualFragment(`
    
                    <div class="about-row">
                            <div class="box box-1">
                            <h3>${element.name.first} ${element.name.last}</h3>
                            <img src="${element.picture.large}" alt="">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        </div>
                    </div>
      
                `)
    
                const box = document.querySelector('.about-container');
                box.append(img)
        //}
            //}
            
        function randonData(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    });
}

getData()