const wrapper = document.querySelector('body');
    
function createContent(data) {
const content = `
<div class="down">
    <div class="right">
        <img src="https://cdn2.scratch.mit.edu/get_image/user/${data.id}_500x500.png" alt="" width="100">
        <div class="down">
            <h2>${data.username}</h2>
            <span>country: ${data.country} | joined: ${data.joined} <br>${data.status}</span>
        </div>
    </div>
    <div class="right">
        BIO:<br>${data.bio}<br>
        what im working:<br>${data.work}
    </div>
</div>
`;
wrapper.insertAdjacentHTML('beforeend', content);
}

fetch('https://scratchdb.lefty.one/v3/user/info/PoIygon')
.then(response => response.json())
.then(data => createContent(data))
.catch((error) => console.log(error));