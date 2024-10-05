async function getData(){
    const result = await fetch('https://randomuser.me/api?results=4');
    const character = await result.json();
    console.log(character)
    character.results.forEach(element => {
        const img = document.createRange().createContextualFragment(`

                <div class="about-row">
                    <div class="box box-1">
                        <h3>Sed ut perspiciatis</h3>
                        <img src="${element.picture.large}" alt="">
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        </div>
                        <div class="box box-2">
                        <h3>Sed ut perspiciatis</h3>
                        <img src="${element.picture.large}" alt="">
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                </div>
  
            `)

            const box = document.querySelector('.about-container');
            box.append(img)
    });
}

getData()