const API_NINJA_KEY = ""; // ADD KEY
const SPOTIFY_TOKEN = ""; // ADD TOKEN
const SONG_LIMIT = 3;

document.querySelector("button").onclick = getBabyName;

function getBabyName() {
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const babyURL = `https://api.api-ninjas.com/v1/babynames?gender=${gender}`;

  fetch(babyURL, { headers: { "X-Api-Key": API_NINJA_KEY } })
    .then((res) => res.json())
    .then((data) => {
      // Comment out fetch call and use obj below for testing to prevent getting rate limited
      //   const data = [
      //     "Sapphire",
      //     "Milly",
      //     "Florence",
      //     "Jessica",
      //     "Talia",
      //     "Lily",
      //     "Zainab",
      //     "Tiffany",
      //     "Roxanne",
      //     "Lexie",
      //   ];
      const listSection = document.createElement("section");

      data.forEach((name) => {
        const nameSection = document.createElement("section");
        nameSection.innerText = name;
        nameSection.onclick = () => getMusic(name, nameSection);
        listSection.appendChild(nameSection);
      });

      document.getElementById("name-list").appendChild(listSection);
    })
    .catch((err) => console.error(err));
}

function getMusic(name, nameSection) {
  const spotifyURL = `https://api.spotify.com/v1/search?q=${name}&type=track&limit=${SONG_LIMIT}`;

  fetch(spotifyURL, {
    headers: {
      Authorization: `Bearer ${SPOTIFY_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // Comment out fetch call and use obj below for testing to prevent getting rate limited
      //   const data = {
      //     tracks: {
      //       href: "https://api.spotify.com/v1/search?offset=0&limit=3&query=Sapphire&type=track&locale=en-US,en;q%3D0.9",
      //       limit: 3,
      //       next: "https://api.spotify.com/v1/search?offset=3&limit=3&query=Sapphire&type=track&locale=en-US,en;q%3D0.9",
      //       offset: 0,
      //       previous: null,
      //       total: 901,
      //       items: [
      //         {
      //           album: {
      //             album_type: "single",
      //             artists: [
      //               {
      //                 external_urls: {
      //                   spotify:
      //                     "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      //                 },
      //                 href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
      //                 id: "6eUKZXaKkcviH0Ku9w2n3V",
      //                 name: "Ed Sheeran",
      //                 type: "artist",
      //                 uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V",
      //               },
      //             ],
      //             available_markets: [],
      //             external_urls: {
      //               spotify:
      //                 "https://open.spotify.com/album/1ZrWlhMUoyMKsoQ1tvRR2t",
      //             },
      //             href: "https://api.spotify.com/v1/albums/1ZrWlhMUoyMKsoQ1tvRR2t",
      //             id: "1ZrWlhMUoyMKsoQ1tvRR2t",
      //             images: [
      //               {
      //                 height: 640,
      //                 width: 640,
      //                 url: "https://i.scdn.co/image/ab67616d0000b2736fbb60d6a7e03ccb940a518e",
      //               },
      //               {
      //                 height: 300,
      //                 width: 300,
      //                 url: "https://i.scdn.co/image/ab67616d00001e026fbb60d6a7e03ccb940a518e",
      //               },
      //               {
      //                 height: 64,
      //                 width: 64,
      //                 url: "https://i.scdn.co/image/ab67616d000048516fbb60d6a7e03ccb940a518e",
      //               },
      //             ],
      //             is_playable: true,
      //             name: "Sapphire",
      //             release_date: "2025-06-05",
      //             release_date_precision: "day",
      //             total_tracks: 1,
      //             type: "album",
      //             uri: "spotify:album:1ZrWlhMUoyMKsoQ1tvRR2t",
      //           },
      //           artists: [
      //             {
      //               external_urls: {
      //                 spotify:
      //                   "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      //               },
      //               href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
      //               id: "6eUKZXaKkcviH0Ku9w2n3V",
      //               name: "Ed Sheeran",
      //               type: "artist",
      //               uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V",
      //             },
      //           ],
      //           available_markets: [],
      //           disc_number: 1,
      //           duration_ms: 179082,
      //           explicit: false,
      //           external_ids: {
      //             isrc: "GBAHS2500262",
      //           },
      //           external_urls: {
      //             spotify:
      //               "https://open.spotify.com/track/4Q0qVhFQa7j6jRKzo3HDmP",
      //           },
      //           href: "https://api.spotify.com/v1/tracks/4Q0qVhFQa7j6jRKzo3HDmP",
      //           id: "4Q0qVhFQa7j6jRKzo3HDmP",
      //           is_local: false,
      //           is_playable: true,
      //           name: "Sapphire",
      //           popularity: 86,
      //           preview_url: null,
      //           track_number: 1,
      //           type: "track",
      //           uri: "spotify:track:4Q0qVhFQa7j6jRKzo3HDmP",
      //         },
      //         {
      //           album: {
      //             album_type: "single",
      //             artists: [
      //               {
      //                 external_urls: {
      //                   spotify:
      //                     "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      //                 },
      //                 href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
      //                 id: "6eUKZXaKkcviH0Ku9w2n3V",
      //                 name: "Ed Sheeran",
      //                 type: "artist",
      //                 uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V",
      //               },
      //               {
      //                 external_urls: {
      //                   spotify:
      //                     "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw",
      //                 },
      //                 href: "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
      //                 id: "4YRxDV8wJFPHPTeXepOstw",
      //                 name: "Arijit Singh",
      //                 type: "artist",
      //                 uri: "spotify:artist:4YRxDV8wJFPHPTeXepOstw",
      //               },
      //             ],
      //             available_markets: [],
      //             external_urls: {
      //               spotify:
      //                 "https://open.spotify.com/album/6lAh6JtFaIvFshi8oz05m7",
      //             },
      //             href: "https://api.spotify.com/v1/albums/6lAh6JtFaIvFshi8oz05m7",
      //             id: "6lAh6JtFaIvFshi8oz05m7",
      //             images: [
      //               {
      //                 height: 640,
      //                 width: 640,
      //                 url: "https://i.scdn.co/image/ab67616d0000b2735a3f69aab66f912e54529606",
      //               },
      //               {
      //                 height: 300,
      //                 width: 300,
      //                 url: "https://i.scdn.co/image/ab67616d00001e025a3f69aab66f912e54529606",
      //               },
      //               {
      //                 height: 64,
      //                 width: 64,
      //                 url: "https://i.scdn.co/image/ab67616d000048515a3f69aab66f912e54529606",
      //               },
      //             ],
      //             is_playable: true,
      //             name: "Sapphire (feat. Arijit Singh)",
      //             release_date: "2025-07-24",
      //             release_date_precision: "day",
      //             total_tracks: 1,
      //             type: "album",
      //             uri: "spotify:album:6lAh6JtFaIvFshi8oz05m7",
      //           },
      //           artists: [
      //             {
      //               external_urls: {
      //                 spotify:
      //                   "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      //               },
      //               href: "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
      //               id: "6eUKZXaKkcviH0Ku9w2n3V",
      //               name: "Ed Sheeran",
      //               type: "artist",
      //               uri: "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V",
      //             },
      //             {
      //               external_urls: {
      //                 spotify:
      //                   "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw",
      //               },
      //               href: "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
      //               id: "4YRxDV8wJFPHPTeXepOstw",
      //               name: "Arijit Singh",
      //               type: "artist",
      //               uri: "spotify:artist:4YRxDV8wJFPHPTeXepOstw",
      //             },
      //           ],
      //           available_markets: [],
      //           disc_number: 1,
      //           duration_ms: 180648,
      //           explicit: false,
      //           external_ids: {
      //             isrc: "GBAHS2500513",
      //           },
      //           external_urls: {
      //             spotify:
      //               "https://open.spotify.com/track/65dt1vedDHPOCCPS3mVhtN",
      //           },
      //           href: "https://api.spotify.com/v1/tracks/65dt1vedDHPOCCPS3mVhtN",
      //           id: "65dt1vedDHPOCCPS3mVhtN",
      //           is_local: false,
      //           is_playable: true,
      //           name: "Sapphire (feat. Arijit Singh)",
      //           popularity: 72,
      //           preview_url: null,
      //           track_number: 1,
      //           type: "track",
      //           uri: "spotify:track:65dt1vedDHPOCCPS3mVhtN",
      //         },
      //         {
      //           album: {
      //             album_type: "single",
      //             artists: [
      //               {
      //                 external_urls: {
      //                   spotify:
      //                     "https://open.spotify.com/artist/54S56FDCzOYP1EY3hb7wbW",
      //                 },
      //                 href: "https://api.spotify.com/v1/artists/54S56FDCzOYP1EY3hb7wbW",
      //                 id: "54S56FDCzOYP1EY3hb7wbW",
      //                 name: "sodistilled",
      //                 type: "artist",
      //                 uri: "spotify:artist:54S56FDCzOYP1EY3hb7wbW",
      //               },
      //             ],
      //             available_markets: [],
      //             external_urls: {
      //               spotify:
      //                 "https://open.spotify.com/album/03CCh40PIqkk9fWVv7Ycrl",
      //             },
      //             href: "https://api.spotify.com/v1/albums/03CCh40PIqkk9fWVv7Ycrl",
      //             id: "03CCh40PIqkk9fWVv7Ycrl",
      //             images: [
      //               {
      //                 height: 640,
      //                 width: 640,
      //                 url: "https://i.scdn.co/image/ab67616d0000b27366087e5db825bca3bfaa90fe",
      //               },
      //               {
      //                 height: 300,
      //                 width: 300,
      //                 url: "https://i.scdn.co/image/ab67616d00001e0266087e5db825bca3bfaa90fe",
      //               },
      //               {
      //                 height: 64,
      //                 width: 64,
      //                 url: "https://i.scdn.co/image/ab67616d0000485166087e5db825bca3bfaa90fe",
      //               },
      //             ],
      //             is_playable: true,
      //             name: "purity killed me",
      //             release_date: "2024-12-27",
      //             release_date_precision: "day",
      //             total_tracks: 4,
      //             type: "album",
      //             uri: "spotify:album:03CCh40PIqkk9fWVv7Ycrl",
      //           },
      //           artists: [
      //             {
      //               external_urls: {
      //                 spotify:
      //                   "https://open.spotify.com/artist/54S56FDCzOYP1EY3hb7wbW",
      //               },
      //               href: "https://api.spotify.com/v1/artists/54S56FDCzOYP1EY3hb7wbW",
      //               id: "54S56FDCzOYP1EY3hb7wbW",
      //               name: "sodistilled",
      //               type: "artist",
      //               uri: "spotify:artist:54S56FDCzOYP1EY3hb7wbW",
      //             },
      //           ],
      //           available_markets: [],
      //           disc_number: 1,
      //           duration_ms: 175285,
      //           explicit: false,
      //           external_ids: {
      //             isrc: "QZS7J2441795",
      //           },
      //           external_urls: {
      //             spotify:
      //               "https://open.spotify.com/track/3g5dJ6IddDW3QFbTXmGWTX",
      //           },
      //           href: "https://api.spotify.com/v1/tracks/3g5dJ6IddDW3QFbTXmGWTX",
      //           id: "3g5dJ6IddDW3QFbTXmGWTX",
      //           is_local: false,
      //           is_playable: true,
      //           name: "sapphire",
      //           popularity: 47,
      //           preview_url: null,
      //           track_number: 3,
      //           type: "track",
      //           uri: "spotify:track:3g5dJ6IddDW3QFbTXmGWTX",
      //         },
      //       ],
      //     },
      //   };
      console.log("music", data);

      data.tracks.items.forEach((song) => {
        const { name, artists, is_playable, id } = song;
        const section = document.createElement("section");
        section.id = id;

        section.innerHTML = `
          <p>${name}</p>
          <p>${artists[0].name}</p>
          <iframe
            data-testid="embed-iframe"
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/${id}"
            width="50%"
            height="100"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          ></iframe>
        `;
        nameSection.appendChild(section);
      });
    })
    .catch((err) => console.error(err));
}
