import { fetchData } from './api.js';
export async function Blog(page = 1) {
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Blog</h1><p>Cargando artículos...</p><progress class="circle large"></progress>';
  const postsPerPage = 10;
  let after = null;

  if (page > 1) {
    after = localStorage.getItem('endCursor');
  }

  const query = `
    query getPosts($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          id
          title
          slug
          excerpt
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  const variables = {
    first: postsPerPage,
    after: after,
  };

  const data = await fetchData(query, variables);

  if (data && data.posts.nodes.length > 0) {
    localStorage.setItem('endCursor', data.posts.pageInfo.endCursor);

    app.innerHTML = data.posts.nodes.map(post => `
      <div class="responsive large-padding">
        <h2 class="small"><a href="post.html?slug=${post.slug}" data-link>${post.title}</a></h2>
        <p>${post.excerpt}</p>
      </div>
      <div class="medium-space"></div>
    `).join('');

    const paginationContainer = document.createElement('div');
    if (page > 1) {
      const prevButton = document.createElement('button');
      prevButton.textContent = 'Anterior';
      prevButton.dataset.page = page - 1;
      prevButton.classList.add("button", "small-round", "secondary", "small");
      prevButton.addEventListener('click', () => {
        Blog(parseInt(prevButton.dataset.page, 10));
      });
      paginationContainer.appendChild(prevButton);
    }
    if (data.posts.pageInfo.hasNextPage) {
      const nextButton = document.createElement('button');
      nextButton.textContent = 'Siguiente';
      nextButton.dataset.page = page + 1;
      nextButton.classList.add("button", "small-round", "secondary", "small");
      nextButton.addEventListener('click', () => {
        Blog(parseInt(nextButton.dataset.page, 10));
      });
      paginationContainer.appendChild(nextButton);
    }
    app.appendChild(paginationContainer);

  } else {
    app.innerHTML = '<p>No hay artículos para mostrar</p>';
  }
}
