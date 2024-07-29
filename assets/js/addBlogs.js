// addBlogs.js

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('#blogs .container');

    // Create a new paragraph element
    const paragraph = document.createElement('p');

    // Create a new link element
    const link = document.createElement('a');
    link.href = 'blogs/blog-1.html'; // Link to blogs/blog-1.html
    link.textContent = 'blog 1';
    link.target = '_blank';

    // Append the link to the paragraph
    paragraph.appendChild(link);

    // Append the paragraph to the container
    container.appendChild(paragraph);
});
