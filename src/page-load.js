/*
<h1>Mario's Restaurant</h1>
<img width="305px" src="https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
<div class="comment">
    <h3>The best pizza I've ever had in my life!!!</h3>
    <p>-Someone, probably.</p>
</div

<div class="comment">
    <h3>Mario's is the best restaurant on this street!!!</h3>
    <p>(Mario's is the only restaurant on this street)</p>
</div>
*/

export function createHomepage() {
    // select the content container
    const content = document.querySelector(`#content`);

    // create and append the name
    const name = document.createElement('h1');
    name.textContent = "Mario's Restaurant";
    content.appendChild(name);

    // create and append the image
    const image = document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.width = "305";
    content.appendChild(image);

    // create and append the comments
    createComment("The best pizza I've ever had in my life!!!",'-Someone, probably.')
    createComment("Mario's is the best restaurant on this street!!!","(Mario's is the only restaurant on this street)");
}

export function createComment(quoteText, authorText) {

        // create, label, and append the comment container
        let comment = document.createElement(`div`);
        comment.classList.add('comment');
        content.appendChild(comment);
        // comment.style.border = 'solid black 2px'

        // create, modify, and append the comment contents

        // comment quote
        let quote = document.createElement('h3')
        quote.textContent = quoteText;
        comment.appendChild(quote);

        // comment author
        let author = document.createElement('p');
        author.textContent = authorText;
        comment.appendChild(author);


    }


