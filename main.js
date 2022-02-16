// para trocar as informações basta trocar os objetos
const linksSocialMedia = {
  github: 'lorenzo-giacomo',
  youtube: 'lorenzorodriguesgiacomo',
  facebook: 'lorenzorodriguesgiacomo',
  instagram: '_lorenzogiacomo',
  twitter: 'lorenzorgiacomo'
}
function changeSocialMediaLinks() {
  // let e const dentro do for só existirão enquanto o for estiver executando. Variável de escopo.
  for (let li of socialLinks.children) {
    // id do ul
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // bate na api, pega o que queremos e nos retorna uma resposta.
  fetch(url)
    .then(res => res.json()) // pega a resposta e a transforma em json
    // pegar as informações que deseja substituir no html
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
