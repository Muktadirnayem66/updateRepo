const allRepo = user.getRepos();

const aRepo = allRepo[0];

const urepo = user.updateRepo(2)



const element = document.getElementById("repoDetails");


const handleClick = () => {
  return  element.innerHTML = `<div>
<h2 class="bg-nav" >Repo name: ${urepo.name}</h2>
<p>creator: ${urepo.creator}</p>`

};

element.innerHTML = `<div>
<h2 class="bg-nav" >Repo name: ${aRepo.name}</h2>
<p>creator: ${aRepo.creator}</p>
<button type="button" onclick="handleClick()">Update repo</button>
</div>`;

console.log("all repo: ", allRepo);
