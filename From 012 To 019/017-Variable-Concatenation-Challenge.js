let challengeCard = [title = "Mostafa Ouhri",
description = "elzero Web school", date = "25/10"];
var cardDiv = `
<div class="card">
<h3>Hello ${title}</h3>
<p>${description}</p>
<span>${date}</span>
</div>
`;
document.write(cardDiv.repeat(4))