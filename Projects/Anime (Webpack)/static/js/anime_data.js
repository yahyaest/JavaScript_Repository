export function handleData() {
  document.getElementById("button").addEventListener("click", function (e) {
    let name = document.getElementById("anime-input").value;
    let pos = name.indexOf(" ");
    if (pos != -1) {
      name = name.replace(" ", "%20");
    }
    console.log(name);

    let request = new XMLHttpRequest();

    request.open("GET", `https://kitsu.io/api/edge/anime?filter[text]=${name}`);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        //console.log("Status:", this.status);
        // console.log("Headers:", this.getAllResponseHeaders());
        let json_data = JSON.parse(this.responseText);
        console.log("Body:", json_data);
        for (let i = 0; i < 10; i++) {
          let anime_name = json_data.data[i].attributes.titles.en;
          let anime_name_subs = json_data.data[i].attributes.titles.en_jp;
          if (anime_name === undefined) {
            console.log(
              "Anime Name:",
              json_data.data[i].attributes.titles.en_jp
            );
          } else if (
            anime_name === undefined &&
            anime_name_subs === undefined
          ) {
            pass;
          } else {
            console.log("Anime Name:", json_data.data[i].attributes.titles.en);
          }
        }

        document.getElementById("title").innerText =
          json_data.data[0].attributes.titles.en;
        document.getElementById("average-rating").innerText =
          json_data.data[0].attributes.averageRating;
        document.getElementById("rating-rank").innerText =
          json_data.data[0].attributes.ratingRank;
        document.getElementById("synopsis").innerText =
          json_data.data[0].attributes.synopsis;
        document
          .getElementById("poster")
          .setAttribute(
            "src",
            json_data.data[0].attributes.coverImage.original
          );
      }
    };

    request.send();
  });
}
