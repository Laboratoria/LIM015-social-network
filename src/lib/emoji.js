const createEmoji = () => {
    const emojiGroup = document.querySelector('#emoji-group');
    const btnEmoji = document.querySelector('.smile');
    const textarea = document.querySelector('#post-user')
    btnEmoji.addEventListener('click', openEmojiGroup);
    textarea.addEventListener('click', cerrarEmojiGroup);

    let count = 128512;
    for (let index = 1; index < 49; index++) {
        const spanEmoji = document.createElement('span');
        count = count + 1;
        spanEmoji.id = `emoji${index}`;
        spanEmoji.className = 'emoji';
        spanEmoji.innerHTML = `&#${count};`;
        emojiGroup.appendChild(spanEmoji);
    }
    const emojiList = document.getElementsByClassName('emoji');

    function openEmojiGroup() {
        emojiGroup.classList.add('show-emojis')
    }

    for (let index = 0; index < emojiList.length; index++) {
        const element = emojiList[index];
        element.addEventListener('click', () => {
            insertEmoji(element.id);
        })
    }
    
    function insertEmoji (idEmoji) {
        const emojiSelected = document.querySelector(`#${idEmoji}`);
        textarea.value += emojiSelected.innerHTML;
    }

    function cerrarEmojiGroup () {
        emojiGroup.classList.remove('show-emojis');
    }
}

export { createEmoji }

// const emojiGroup = document.querySelector('#emoji-group');
// const btnEmoji = document.querySelector('.smile');
// const textarea = document.querySelector('#post-user')
// btnEmoji.addEventListener('click',() => { emojiGroup.classList.add('show-emojis')});
// textarea.addEventListener('click', () => {emojiGroup.classList.remove('show-emojis')});

// let count = 128512;
// for (let index = 1; index < 49; index++) {
//     const spanEmoji = document.createElement('span');
//     count = count + 1;
//     spanEmoji.id = `emoji${index}`;
//     spanEmoji.className = 'emoji';
//     spanEmoji.innerHTML = `&#${count};`;
//     emojiGroup.appendChild(spanEmoji);
// }
// const emojiList = document.getElementsByClassName('emoji');


// for (let index = 0; index < emojiList.length; index++) {
//     const element = emojiList[index];
//     element.addEventListener('click', () => {
//         insertEmoji(element.id);
//     })
// }

// function insertEmoji(idEmoji) {
//     const emojiSelected = document.querySelector(`#${idEmoji}`);
//     textarea.value += emojiSelected.innerHTML;
// }