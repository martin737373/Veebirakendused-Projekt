// Local path
const path = './data/posts.json';

// Web API path
//const path = 'https://api.jsonbin.io/v3/b/68fef278d0ea881f40beaba4';

async function fetch_posts() {
	try {
		const response = await fetch(path, { method: 'GET', });
		if (!response.ok) { throw new Error('Network response was not ok'); }
		const data = await response.json();
		await createPosts(data['record']);
	} catch (error) { console.error("Detailed error:", error.message); console.error("Stack trace:", error.stack); }
}


/**
 * Fills main with posts
 * @param posts the contents of each post
 */
async function createPosts(posts) {
	if (!posts || posts.length == 0) {
		console.warn("No posts in data"); return;
	}

	const main = document.getElementById('posts');
	if (!main) {
		console.error("Missing posts container."); return;
	}
	main.innerHTML = '';	// Empty posts container

	posts.forEach(post => {
		const article = document.createElement('article');
		article.classList.add('post');

		const headerDiv = document.createElement('div');
		headerDiv.classList.add('post-header');
		const headerImg = document.createElement('img');
		headerImg.classList.add('post-avatar');
		headerImg.src = post['avatar'];
		const author = document.createElement('h3');
		author.classList.add('post-author');
		author.innerHTML = post['author'];
		headerDiv.appendChild(headerImg);
		headerDiv.appendChild(author);
		article.appendChild(headerDiv);

		const date = document.createElement('span');
		date.classList.add('post-date');
		date.innerHTML = post['date'];
		article.appendChild(date);

		if (post['image']) {
			const postImage = document.createElement('img');
			postImage.classList.add('post-image');
			postImage.src = post['image'];
			article.appendChild(postImage);
		}

		const text = document.createElement('p');
		text.classList.add('post-text');
		text.innerHTML = post['text'];
		article.appendChild(text);

		main.appendChild(article);
	});
}

fetch_posts();