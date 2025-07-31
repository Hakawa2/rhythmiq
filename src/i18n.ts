import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      subtitle: "Find your new favorite artist!!",
      artists: "artist",
      albums: "album",
      ariaLabelArtist: "Artist {{ term }}",
      ariaLabelAlbum: "Album {{ term }}",
      releaseDate: "Release date {{ term }}",
      followers: "Followers {{ term }}",
      footer: "Make by Rythmiq ©",
      search: "Search by {{ term }}...",
      clean: "Clean",
      details: {
        genre: "Genre: {{ term }}",
        duration: "Duration: {{ term }}",
        tracklist: "Tracklist",
        topTracks: "Top Tracks",
        popularity: "Popularity: {{ term }}",
        tracksQuantity: "Tracks Quantity: {{ term }}",
      },
    },
  },
  ptBr: {
    translation: {
      subtitle: "Descubra seu novo artista favorito!!",
      artists: "artista",
      albums: "álbum",
      ariaLabelArtist: "Artista {{ term }}",
      ariaLabelAlbum: "Álbum {{ term }}",
      releaseDate: "Data de lançamento {{ term }}",
      followers: "Seguidores {{ term }}",
      footer: "Feito por Rythmiq ©",
      search: "Buscar por {{ term }}...",
      clean: "Limpar",
      details: {
        genre: "Gênero {{ term }}",
        duration: "Duração: {{ term }}",
        tracklist: "Lista de faixas",
        topTracks: "Principais faixas",
        popularity: "Popularidade: {{ term }}",
        tracksQuantity: "Quantidade de faixas: {{ term }}",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
