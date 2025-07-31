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
