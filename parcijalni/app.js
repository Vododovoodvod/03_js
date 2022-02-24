const searchForm = document.querySelector("#search-form");
const searchFormInput = document.querySelector("#search-form-input");
const searchButtonElement = document.querySelector("#search-form-button");
const songList = document.querySelector("#song-list");
const errorMessage = document.querySelector("#error-message");
const loadingElement = document.querySelector("#loading");


function showLoading(text) {
    loadingElement.innerText = text;
}

function showError(message) {
    errorMessage.innerHTML = message;
}

function listSongs(jsonList) {
    songList.innerHTML = "";

    if (jsonList == null) {
        return;
    }

    let songListTable = document.createElement("table");
    songListTable.classList.add("songListTable");

    for (let i = 0; i < jsonList.resultCount; i++) {
        const art = jsonList.results[i].artworkUrl30;
        const artist = jsonList.results[i].artistName;
        const song = jsonList.results[i].trackName;
        
        let tableRow = document.createElement("tr");
        let songArt = document.createElement("th");
        songArt.innerHTML = `<img src=${art}>`;
        let artistName = document.createElement("th");
        artistName.innerText = artist;
        let songName = document.createElement("th");
        songName.innerText = song;
        
        tableRow.appendChild(songArt);
        tableRow.appendChild(artistName);
        tableRow.appendChild(songName);
        songListTable.appendChild(tableRow);
    }

    songList.appendChild(songListTable);
};

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const value = (searchFormInput.value || "").trim().toLocaleLowerCase();
    if (value === "") {
        window.alert("Nothing to search :(");
        return;
    }

    fetch(`https://itunes.apple.com/search?term=${value}&entity=song`)
    .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
        throw new Error("Something went wrong :(");
      }
    })
    .then((json) => {
        showLoading("");
        showError("");
        listSongs(json);
    })
    .catch((error) => {
        showLoading("");
        listSongs(null);
        showError(error.message);
    });

    showLoading("PATIENCE! I'm loading.");
});