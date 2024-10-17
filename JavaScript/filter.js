const officialbutton = document.getElementById('official');
const communitybutton = document.getElementById('community');
const creatorbutton = document.getElementById('creator');
var statusofficial = 0;
var statuscommunity = 0;
var statuscreator = 0;
const official = document.querySelectorAll("#officialpost");
const community = document.querySelectorAll("#communitypost");
const creator = document.querySelectorAll('#creatorpost');

officialbutton.addEventListener("click", FilterOfficial);
communitybutton.addEventListener("click", FilterCommunity);
creatorbutton.addEventListener("click", FilterCreator);

function FilterOfficial () {
    if (statusofficial === 0) {
        officialbutton.classList.add('button-with-cross');
        officialbutton.style.paddingLeft = "25px";;
        statusofficial = 1;
    }
    else if (statusofficial === 1) {
        officialbutton.classList.remove('button-with-cross');
        officialbutton.style.paddingLeft = "12px";
        statusofficial = 0;
    }
}

function FilterCommunity () {
    if (statuscommunity === 0) {
        communitybutton.classList.add('button-with-cross');
        communitybutton.style.paddingLeft = "25px";
        statuscommunity = 1;
    }
    else if (statuscommunity === 1) {
        communitybutton.classList.remove('button-with-cross');
        communitybutton.style.paddingLeft = "12px";
        statuscommunity = 0;
    }
}

function FilterCreator () {
    if (statuscreator === 0) {
        creatorbutton.classList.add('button-with-cross');
        creatorbutton.style.paddingLeft = "25px";
        statuscreator = 1;
    }
    else if (statuscreator === 1) {
        creatorbutton.classList.remove('button-with-cross');
        creatorbutton.style.paddingLeft = "12px";
        statuscreator = 0;
    }
}

document.addEventListener("click", function() {
if (statusofficial === 1 && statuscommunity === 0 && statuscreator === 0) {
    hideAll();
    showOfficial();
}
if (statusofficial === 0 && statuscommunity === 1 && statuscreator === 0) {
    hideAll();
    showCommunity();
}
if (statusofficial === 0 && statuscommunity === 0 && statuscreator === 1) {
    hideAll();
    showCreator();
}

if (statusofficial === 1 && statuscommunity === 1 && statuscreator === 0) {
    hideAll()
    showOfficial();
    showCommunity();
}
if (statusofficial === 1 && statuscommunity === 0 && statuscreator === 1) {
    hideAll()
    showOfficial();
    showCreator();
}
if (statusofficial === 0 && statuscommunity === 1 && statuscreator === 1) {
    hideAll()
    showCommunity();
    showCreator();
}

if (statuscommunity === 0 && statuscreator === 0 && statusofficial === 0 || statuscommunity === 1 && statuscreator === 1 && statusofficial === 1) {
    showAll();
}
console.log(statusofficial, statuscommunity, statuscreator);
}
)

function showAll () {
    showCommunity();
    showCreator();
    showOfficial();
}

function hideAll () {
    hideCommunity();
    hideCreator();
    hideOfficial();
}

function hideOfficial () {
    official.forEach(official => {
        // Do something with each element
        official.style.display = "none";
    });
}
function showOfficial () {
    official.forEach(official => {
        // Do something with each element
        official.style.display = "block";
    });
}


function hideCommunity () {
    community.forEach(community => {
        // Do something with each element
        community.style.display = "none";
    });
}
function showCommunity () {
    community.forEach(community => {
        // Do something with each element
        community.style.display = "block";
    });
}

function hideCreator () {
    creator.forEach(creator => {
        // Do something with each element
        creator.style.display = "none";
    });
}
function showCreator () {
    creator.forEach(creator => {
        // Do something with each element
        creator.style.display = "block";
    });
}

