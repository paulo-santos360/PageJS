const container = document.querySelector(".container");

const display = (followers) => {
  //console.log(followers)
  const newFollowers = followers.map((person) => {
  const { avatar_url, login, html_url} = person
    return `<article>
    <img src="${avatar_url}" alt="${login} />
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
  }).join('');
  container.innerHTML = newFollowers
  //console.log(newFollowers)
};

export default display;
