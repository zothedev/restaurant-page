export function createHomepage() {
    // select the content container
    const content = document.querySelector(`#content`);

    // create and append the name
    const name = document.createElement('h1');
    name.textContent = "Mario's Restaurant";
    name.style.paddingLeft = '45px'; // style
    content.appendChild(name);

    // create and append the image
    const image = document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.style.width = '305px'; // style
    image.style.marginLeft = '8%';
    content.appendChild(image);

    // create and append the comments
    createComment("The best pizza I've ever had in my life!!!", '-Someone, probably.')
    createComment("Mario's is the best restaurant on this street!!!", "(Mario's is the only restaurant on this street)");

    // apply other styles

    // global styles - apply to ALL elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.boxSizing = 'border-box';
    });

    // body styles
    const bodyElement = document.querySelector('body');
    bodyElement.style.backgroundColor = 'rgb(77,108,186)';
    bodyElement.style.display = 'flex';
    bodyElement.style.flexDirection = 'column';
    bodyElement.style.alignItems = 'center';

    // create footer
    let imageCredit = document.createElement('p');
    let imageCreditLink = document.createElement('a');

    content.appendChild(imageCredit);

    imageCredit.textContent = 'Pizza Image by ';
    imageCreditLink.textContent = 'Shourav Sheikh on unsplash';
    imageCreditLink.href = 'https://unsplash.com/photos/pizza-with-cheese-and-green-leaf-a66sGfOnnqQ';

    imageCredit.appendChild(imageCreditLink);
}

export function createComment(quoteText, authorText) {

    // create, label, and append the comment container
    let comment = document.createElement(`div`);
    comment.classList.add('comment');

    // comment container styles
    comment.style.border = 'rgba(0,0,0,50%) solid 4px';
    comment.style.backgroundColor = 'rgb(137, 206, 77)'
    comment.style.display = 'flex';
    comment.style.flexDirection = 'column';
    comment.style.alignItems = 'center';
    comment.style.margin = '10px 0';
    comment.style.padding = '5px';

    content.appendChild(comment);

    // create, modify, and append the comment contents

    // comment quote
    let quote = document.createElement('h3')
    quote.textContent = quoteText;
    comment.appendChild(quote);

    // comment author
    let author = document.createElement('p');
    author.textContent = authorText;

    // comment author styles
    author.style.alignSelf = 'flex-end';
    author.style.paddingRight = '10px';

    comment.appendChild(author);


}


