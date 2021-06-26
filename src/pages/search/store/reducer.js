import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  searchSongsRes: {
    songs: [
      {
        id: 1397293557,
        name: "Yellow",
        duration: 179095,
        copyrightId: 0,
        status: 0,
        alias: [],
        rtype: 0,
        ftype: 0,
        mvid: 0,
        fee: 0,
        rUrl: null,
        mark: 0,
      },
    ],
    songCount: 600,
  },
  searchArtistsRes: {
    artists: [
      {
        id: 832880,
        name: "Yellow Claw",
        picUrl:
          "https://p2.music.126.net/IrDKdmdkJLR8B_Nh8qQw2A==/109951165953627968.jpg",
        alias: [],
        albumSize: 110,
        picId: 109951165953627970,
        img1v1Url:
          "https://p2.music.126.net/FUINwFp0rMnBJs4Mpqj5ow==/109951165953630952.jpg",
        accountId: 1357748266,
        img1v1: 109951165953630940,
        transNames: ["黄爪"],
        mvSize: 50,
        followed: false,
        alg: "alg_search_precision_artist_tab_basic",
        trans: "黄爪",
      },
    ],
    artistCount: 600,
  },
  searchAlbumsRes: {
    albums: [
      {
        name: "Yellow Submarine Songtrack",
        id: 437627,
        type: "专辑",
        size: 15,
        picId: 109951163201393180,
        blurPicUrl:
          "http://p3.music.126.net/zqieEe6yQyWUNGhbUhm1yQ==/109951163201393179.jpg",
        companyId: 0,
        pic: 109951163201393180,
        picUrl:
          "http://p3.music.126.net/zqieEe6yQyWUNGhbUhm1yQ==/109951163201393179.jpg",
        publishTime: 937180800000,
        description: "",
        tags: "",
        company: "环球唱片",
        briefDesc: "",
        artist: {
          name: "The Beatles",
          id: 101988,
          picId: 109951165683552600,
          img1v1Id: 18686200114669624,
          briefDesc: "",
          picUrl:
            "http://p3.music.126.net/bDZmAl15QQaDBmKnYeSHPw==/109951165683552608.jpg",
          img1v1Url:
            "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
          albumSize: 141,
          alias: ["披头士"],
          trans: "甲壳虫乐队",
          musicSize: 4026,
          topicPerson: 0,
          picId_str: "109951165683552608",
          transNames: ["甲壳虫乐队"],
          img1v1Id_str: "18686200114669622",
          alia: ["披头士"],
        },
        songs: null,
        alias: [],
        status: -4,
        copyrightId: 7003,
        commentThreadId: "R_AL_3_437627",
        artists: [
          {
            name: "The Beatles",
            id: 101988,
            picId: 0,
            img1v1Id: 18686200114669624,
            briefDesc: "",
            picUrl:
              "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            img1v1Url:
              "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
            albumSize: 0,
            alias: [],
            trans: "",
            musicSize: 0,
            topicPerson: 0,
            img1v1Id_str: "18686200114669622",
          },
        ],
        paid: false,
        onSale: false,
        picId_str: "109951163201393179",
        alg: "alg_search_precision_album_tab_basic",
        mark: 0,
        containedSong: "",
      },
    ],
    albumCount: 600,
  },
  searchVideosRes: {
    videos: [
      {
        coverUrl:
          "https://p1.music.126.net/7WsKUyuDz5t5VnGOgTiRyA==/2420025192738146.jpg",
        title: "Yellow",
        durationms: 272000,
        playTime: 6158856,
        type: 0,
        creator: [
          {
            userId: 89365,
            userName: "Coldplay",
          },
        ],
        aliaName: null,
        transName: null,
        vid: "292165",
        markTypes: null,
        alg: "alg_search_precision_video_tab_basic",
      },
    ],
    videoCount: 600,
  },
  searchLyricsRes: {
    songs: [
      {
        id: 17177324,
        name: "Yellow",
        artists: [
          {
            id: 89365,
            name: "Coldplay",
            picUrl: null,
            alias: [],
            albumSize: 0,
            picId: 0,
            img1v1Url:
              "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            img1v1: 0,
            trans: null,
          },
        ],
        album: {
          id: 1582613,
          name: "Yellow",
          artist: {
            id: 0,
            name: "",
            picUrl: null,
            alias: [],
            albumSize: 0,
            picId: 0,
            img1v1Url:
              "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            img1v1: 0,
            trans: null,
          },
          publishTime: 961948800007,
          size: 3,
          copyrightId: 7002,
          status: 3,
          picId: 731175232479257,
          mark: 0,
        },
        duration: 268469,
        copyrightId: 7002,
        status: 0,
        alias: [],
        rtype: 0,
        ftype: 0,
        mvid: 292165,
        fee: 1,
        rUrl: null,
        lyrics: {
          txt: "Look at the stars\nLook how they shine for you\nAnd everything you do\nYeah' they were all Yellow\nI came along\nI wrote a song for you\nAnd all the things you do\nit was called Yellow\nSo then I took my turn\nOh what a thing to have done\nAnd it was all Yellow\nYour skin\nOh yeah' your skin and bones\nTurn into something beautiful\nDo you know? you know I love you so\nYou know I love you so\nI swam across\nI jumped across for you\nOh what a thing to do\nCause you were all Yellow\nI drew a line\nI drew a line for you\nOh what a thing to do\nAnd it was all Yellow\nYour skin\nOh yeah your skin and bones\nTurn into something beautiful\nDo you know?\nFor you I'd bleed myself dry\nFor you I'd bleed myself dry\nIt's true\nLook how they shine for you\nLook how they shine for you\nLook how they shine for\nLook how they shine for you\nLook how they shine for you\nLook how they shine\nLook at the stars\nLook how they shine for you\nAnd all the things that you do\n",
          range: [
            {
              first: 88,
              second: 94,
            },
          ],
        },
        alg: "alg_search_precision_lyric_tab",
        mark: 270336,
      },
    ],
  },
  searchPlayListsRes: {
    playlists: [
      {
        id: 2802579104,
        name: "YELLOW（Cover：神山羊）",
        coverImgUrl:
          "https://p1.music.126.net/SvFxaOdVrkeFkl-hIQDRHQ==/109951164080783977.jpg",
        creator: {
          nickname: "池杳阿",
          userId: 322685530,
          userType: 4,
          authStatus: 1,
          expertTags: null,
          experts: null,
        },
        subscribed: false,
        trackCount: 157,
        userId: 322685530,
        playCount: 868105,
        bookCount: 21523,
        specialType: 0,
        officialTags: null,
        description: "喜则收藏。",
        highQuality: false,
        track: {
          name: "YELLOW",
          id: 1356248072,
          position: 0,
          alias: [],
          status: 0,
          fee: 0,
          copyrightId: 663018,
          disc: "01",
          no: 2,
          artists: [
            {
              name: "神山羊",
              id: 12323265,
              picId: 0,
              img1v1Id: 0,
              briefDesc: "",
              picUrl:
                "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              img1v1Url:
                "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              albumSize: 0,
              alias: [],
              trans: "",
              musicSize: 0,
            },
          ],
          album: {
            name: "しあわせなおとな",
            id: 78301494,
            type: "专辑",
            size: 8,
            picId: 109951163971418610,
            blurPicUrl:
              "http://p3.music.126.net/b8q7AOU3zQFPpayJ4k3J-Q==/109951163971418603.jpg",
            companyId: 0,
            pic: 109951163971418610,
            picUrl:
              "http://p3.music.126.net/b8q7AOU3zQFPpayJ4k3J-Q==/109951163971418603.jpg",
            publishTime: 1554220800000,
            description: "",
            tags: "",
            company: "Cymusic",
            briefDesc: "",
            artist: {
              name: "",
              id: 0,
              picId: 0,
              img1v1Id: 0,
              briefDesc: "",
              picUrl:
                "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              img1v1Url:
                "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
              albumSize: 0,
              alias: [],
              trans: "",
              musicSize: 0,
            },
            songs: [],
            alias: [],
            status: 0,
            copyrightId: 663018,
            commentThreadId: "R_AL_3_78301494",
            artists: [
              {
                name: "神山羊",
                id: 12323265,
                picId: 0,
                img1v1Id: 0,
                briefDesc: "",
                picUrl:
                  "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                img1v1Url:
                  "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                albumSize: 0,
                alias: [],
                trans: "",
                musicSize: 0,
              },
            ],
            picId_str: "109951163971418603",
          },
          starred: false,
          popularity: 100,
          score: 100,
          starredNum: 0,
          duration: 178770,
          playedNum: 0,
          dayPlays: 0,
          hearTime: 0,
          ringtone: "",
          crbt: null,
          audition: null,
          copyFrom: "",
          commentThreadId: "R_SO_4_1356248072",
          rtUrl: null,
          ftype: 0,
          rtUrls: [],
          copyright: 0,
          bMusic: {
            name: null,
            id: 3736311224,
            size: 2860556,
            extension: "mp3",
            sr: 44100,
            dfsId: 0,
            bitrate: 128000,
            playTime: 178770,
            volumeDelta: -26199,
          },
          mp3Url: null,
          mvid: 0,
          rtype: 0,
          rurl: null,
          hMusic: {
            name: null,
            id: 3736311222,
            size: 7151325,
            extension: "mp3",
            sr: 44100,
            dfsId: 0,
            bitrate: 320000,
            playTime: 178770,
            volumeDelta: -30400,
          },
          mMusic: {
            name: null,
            id: 3736311223,
            size: 4290813,
            extension: "mp3",
            sr: 44100,
            dfsId: 0,
            bitrate: 192000,
            playTime: 178770,
            volumeDelta: -27800,
          },
          lMusic: {
            name: null,
            id: 3736311224,
            size: 2860556,
            extension: "mp3",
            sr: 44100,
            dfsId: 0,
            bitrate: 128000,
            playTime: 178770,
            volumeDelta: -26199,
          },
        },
        alg: 'alg_search_rec_playlist_tab_basic_null_{"FromFields":["Name"],"recallQList":["yellow"]}',
      },
    ],
    playlistCount: 296,
  },
  keywords: JSON.parse(localStorage.getItem("keywords")),
  curType: JSON.parse(localStorage.getItem("curType")) || -1,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONGS_RES:
      return state.set("searchSongsRes", action.searchSongsRes);
    case actionTypes.CHANGE_KEYWORDS:
      localStorage.setItem("keywords", JSON.stringify(action.keywords));
      return state.set("keywords", action.keywords);
    case actionTypes.CHANGE_TYPE:
      localStorage.setItem("curType", JSON.stringify(action.curType));
      return state.set("curType", action.curType);
    case actionTypes.CHANGE_SEARCH_ARTISTS_RES:
      return state.set("searchArtistsRes", action.searchArtistsRes);
    case actionTypes.CHANGE_SEARCH_ALBUMS_RES:
      return state.set("searchAlbumsRes", action.searchAlbumsRes);
    case actionTypes.CHANGE_SEARCH_VIDEO_RES:
      return state.set("searchVideosRes", action.searchVideosRes);
    case actionTypes.CHANGE_SEARCH_LYRIC_RES:
      return state.set("searchLyricsRes", action.searchLyricsRes);
    case actionTypes.CHANGE_SEARCH_PLAYLIST_RES:
      return state.set("searchPlayListsRes", action.searchPlayListsRes);
    default:
      return state;
  }
}

export default reducer;
