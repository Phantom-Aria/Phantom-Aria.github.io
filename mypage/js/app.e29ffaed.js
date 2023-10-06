(function (e) {
  function t(t) {
    for (
      var n, c, o = t[0], s = t[1], u = t[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(i, c) && i[c] && f.push(i[c][0]),
        (i[c] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    l && l(t);
    while (f.length) f.shift()();
    return a.push.apply(a, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, o = 1; o < r.length; o++) {
        var s = r[o];
        0 !== i[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { app: 0 },
    a = [];
  function c(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = n),
    (c.d = function (e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          c.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var u = 0; u < o.length; u++) t(o[u]);
  var l = s;
  a.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("cd49");
  },
  "0565": function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r("1da1"),
        i = (r("96cf"), r("99af"), r("b0c0"), r("7327")),
        a = r("731b"),
        c = r("25f1"),
        o = r("507a"),
        s = r("73ec"),
        u = r("b7c7");
      t["a"] = {
        name: "FileSelector",
        data: function () {
          return {
            task_all: 0,
            task_finished: 0,
            queue: new s["a"](),
            parallel: !1,
          };
        },
        computed: {
          progress_value: function () {
            return this.task_all
              ? (this.task_finished / this.task_all) * 100
              : 0;
          },
          progress_show: function () {
            return this.task_all !== this.task_finished;
          },
        },
        mounted: function () {
          window.Worker && "file:" !== window.location.protocol
            ? (console.log("Using Worker Pool"),
              (this.queue = Object(i["a"])(function () {
                return Object(a["a"])(new c["a"](e));
              }, navigator.hardwareConcurrency || 1)),
              (this.parallel = !0))
            : console.log("Using Queue in Main Thread");
        },
        methods: {
          progress_string: function () {
            return "".concat(this.task_finished, " / ").concat(this.task_all);
          },
          addFile: function (e) {
            var t = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        t.task_all++,
                          t.queue.queue(
                            Object(n["a"])(
                              regeneratorRuntime.mark(function r() {
                                var n,
                                  i = arguments;
                                return regeneratorRuntime.wrap(
                                  function (r) {
                                    while (1)
                                      switch ((r.prev = r.next)) {
                                        case 0:
                                          return (
                                            (n =
                                              i.length > 0 && void 0 !== i[0]
                                                ? i[0]
                                                : o["a"]),
                                            console.log(
                                              "start handling",
                                              e.name
                                            ),
                                            (r.prev = 2),
                                            (r.t0 = t),
                                            (r.t1 = n),
                                            (r.t2 = e),
                                            (r.next = 8),
                                            u["a"].getAll()
                                          );
                                        case 8:
                                          return (
                                            (r.t3 = r.sent),
                                            (r.next = 11),
                                            (0, r.t1)(r.t2, r.t3)
                                          );
                                        case 11:
                                          (r.t4 = r.sent),
                                            r.t0.$emit.call(
                                              r.t0,
                                              "success",
                                              r.t4
                                            ),
                                            (r.next = 19);
                                          break;
                                        case 15:
                                          (r.prev = 15),
                                            (r.t5 = r["catch"](2)),
                                            console.error(r.t5),
                                            t.$emit("error", r.t5, e.name);
                                        case 19:
                                          return (
                                            (r.prev = 19),
                                            t.task_finished++,
                                            r.finish(19)
                                          );
                                        case 22:
                                        case "end":
                                          return r.stop();
                                      }
                                  },
                                  r,
                                  null,
                                  [[2, 15, 19, 22]]
                                );
                              })
                            )
                          );
                      case 2:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        },
      };
    }).call(this, r("2e83"));
  },
  "0ba7": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    });
    r("d3b7"),
      r("ace4"),
      r("5cc6"),
      r("907a"),
      r("9a8c"),
      r("a975"),
      r("735e"),
      r("c1ac"),
      r("d139"),
      r("3a7b"),
      r("d5d6"),
      r("82f8"),
      r("e91f"),
      r("60bd"),
      r("5f96"),
      r("3280"),
      r("3fcc"),
      r("ca91"),
      r("25a1"),
      r("cd26"),
      r("3c5d"),
      r("2954"),
      r("649e"),
      r("219c"),
      r("170b"),
      r("b39a"),
      r("72f7"),
      r("3ca3"),
      r("ddb0"),
      r("2b3d"),
      r("9861");
    var n = r("9ab4"),
      i = r("cc74"),
      a = r("cb96");
    function c(e, t, r, c) {
      return (
        void 0 === c && (c = !0),
        Object(n["a"])(this, void 0, Promise, function () {
          var o, s, u, l, d, f, m;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (o = r),
                  c ? ((u = Uint8Array.bind), [4, Object(i["c"])(e)]) : [3, 2]
                );
              case 1:
                (s = new (u.apply(Uint8Array, [void 0, n.sent()]))()),
                  (o = Object(i["i"])(s, r)),
                  o !== r && (e = new Blob([s], { type: i["a"][o] })),
                  (n.label = 2);
              case 2:
                return [4, Object(a["parseBlob"])(e)];
              case 3:
                return (
                  (l = n.sent()),
                  (d = Object(i["f"])(
                    t,
                    l.common.title,
                    String(l.common.artists || l.common.artist || "")
                  )),
                  (f = d.title),
                  (m = d.artist),
                  [
                    2,
                    {
                      title: f,
                      artist: m,
                      ext: o,
                      album: l.common.album,
                      picture: Object(i["d"])(l),
                      file: URL.createObjectURL(e),
                      blob: e,
                      mime: i["a"][o],
                    },
                  ]
                );
            }
          });
        })
      );
    }
  },
  "0f92": function (e, t, r) {
    "use strict";
    (function (e) {
      r.d(t, "a", function () {
        return l;
      });
      r("d3b7"), r("a15b"), r("d81d"), r("ac1f"), r("1276"), r("b0c0");
      var n = r("9ab4"),
        i = r("cb96"),
        a = r("acf9"),
        c = r.n(a),
        o = r("cc74"),
        s = r("97e5"),
        u = function (t) {
          return c.a.decode(new e(t || ""), "gbk");
        };
      function l(e, t, r, a) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var c, s, l, b, p;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Object(i["parseBlob"])(e)];
              case 1:
                for (s in ((c = n.sent()), c.native))
                  c.native.hasOwnProperty(s) &&
                    c.native[s].some(function (e) {
                      return "TCON" === e.id && "(12)" === e.value;
                    }) &&
                    (console.warn("try using gbk encoding to decode meta"),
                    (c.common.artist = ""),
                    c.common.artists
                      ? (c.common.artist = c.common.artists.map(u).join())
                      : (c.common.artist = u(c.common.artist)),
                    (c.common.title = u(c.common.title)),
                    (c.common.album = u(c.common.album)));
                if (a && "0" !== a)
                  try {
                    return [2, d(a, r, c, e)];
                  } catch (v) {
                    console.warn(
                      "在线获取曲目信息失败，回退到本地 meta 提取",
                      v
                    );
                  }
                return (
                  (l = Object(o["f"])(t, c.common.title, c.common.artist)),
                  (l.artist = l.artist || ""),
                  (b = Object(o["d"])(c)),
                  b ? [3, 3] : [4, f(l.title, l.artist, c.common.album)]
                );
              case 2:
                (b = n.sent()), (n.label = 3);
              case 3:
                return (
                  (p = {
                    title: l.title,
                    artist: l.artist,
                    album: c.common.album || "",
                    imgUrl: b,
                  }),
                  [
                    4,
                    m({
                      title: l.title,
                      artists: l.artist.split(o["m"]),
                      ext: r,
                      imageURL: b,
                      musicMeta: c,
                      blob: e,
                    }),
                  ]
                );
              case 4:
                return [2, ((p.blob = n.sent()), p)];
            }
          });
        });
      }
      function d(e, t, r, i) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var a, c, o, u;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Object(s["d"])(e)];
              case 1:
                return (
                  (a = n.sent()),
                  (c = Object(s["b"])(a.track_info.album.pmid)),
                  (o = a.track_info.singer.map(function (e) {
                    return e.name;
                  })),
                  (u = {
                    title: a.track_info.title,
                    artist: o.join(","),
                    album: a.track_info.album.name,
                    imgUrl: c,
                  }),
                  [
                    4,
                    m({
                      title: a.track_info.title,
                      artists: o,
                      ext: t,
                      imageURL: c,
                      musicMeta: r,
                      blob: i,
                    }),
                  ]
                );
              case 2:
                return [2, ((u.blob = n.sent()), u)];
            }
          });
        });
      }
      function f(e, t, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var i, a;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, Object(s["c"])(e, t, r)];
              case 1:
                return (i = n.sent()), [2, Object(s["b"])(i.Id, i.Type)];
              case 2:
                return (a = n.sent()), console.warn(a), [3, 3];
              case 3:
                return [2, ""];
            }
          });
        });
      }
      function m(t) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r, i, a, c, s, u, l;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 3, , 4]), [4, Object(o["e"])(t.imageURL)]
                );
              case 1:
                return (
                  (r = n.sent()),
                  r || console.warn("获取图像失败"),
                  (i = {
                    picture: null === r || void 0 === r ? void 0 : r.buffer,
                    title: t.title,
                    artists: t.artists,
                  }),
                  (s = (c = e).from),
                  [4, t.blob.arrayBuffer()]
                );
              case 2:
                return (
                  (a = s.apply(c, [n.sent()])),
                  (u = o["a"][t.ext] || o["a"].mp3),
                  "mp3" === t.ext
                    ? [
                        2,
                        new Blob([Object(o["l"])(a, i, t.musicMeta)], {
                          type: u,
                        }),
                      ]
                    : "flac" === t.ext
                    ? [
                        2,
                        new Blob([Object(o["k"])(a, i, t.musicMeta)], {
                          type: u,
                        }),
                      ]
                    : (console.info(
                        "writing metadata for " +
                          t.ext +
                          " is not being supported for now"
                      ),
                      [3, 4])
                );
              case 3:
                return (
                  (l = n.sent()),
                  console.warn(
                    "Error while appending cover image to file " + l
                  ),
                  [3, 4]
                );
              case 4:
                return [2, t.blob];
            }
          });
        });
      }
    }).call(this, r("1c35").Buffer);
  },
  1: function (e, t) {},
  2: function (e, t) {},
  "2e83": function (e, t, r) {
    e.exports = r.p + "mypage/js/0.bb00e0b9.worker.js";
  },
  3: function (e, t) {},
  "321b": function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r("1da1"),
        i =
          (r("96cf"),
          r("e9c4"),
          r("d3b7"),
          r("159b"),
          r("3ca3"),
          r("ddb0"),
          r("2b3d"),
          r("9861"),
          r("ac1f"),
          r("1276"),
          r("25f0"),
          r("ab8f")),
        a = r("af85"),
        c = r("730d"),
        o = r("d4ec"),
        s = r("73ec"),
        u = r("cc74"),
        l = r("cb96");
      t["a"] = {
        name: "Home",
        components: {
          FileSelector: i["a"],
          PreviewTable: a["a"],
          ConfigDialog: c["a"],
          EditDialog: o["a"],
        },
        data: function () {
          return {
            showConfigDialog: !1,
            showEditDialog: !1,
            editing_data: {
              picture: "",
              title: "",
              artist: "",
              album: "",
              albumartist: "",
              genre: "",
            },
            tableData: [],
            playing_url: "",
            playing_auto: !1,
            filename_policy: s["e"].ArtistAndTitle,
            instant_save: !1,
            FilenamePolicies: s["d"],
            dir: null,
          };
        },
        watch: {
          instant_save: function (e) {
            e && this.showDirectlySave();
          },
        },
        methods: {
          showSuccess: function (e) {
            var t = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function r() {
                var n;
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (!t.instant_save) {
                          r.next = 6;
                          break;
                        }
                        return (r.next = 3), t.saveFile(e);
                      case 3:
                        Object(s["f"])(e), (r.next = 8);
                        break;
                      case 6:
                        t.tableData.push(e),
                          t.$notify.success({
                            title: "解析成功!",
                            message: "成功解析 " + e.title,
                            duration: 3e3,
                          });
                      case 8:
                        (n = [e.title, e.artist, e.album]),
                          window._paq.push([
                            "trackEvent",
                            "Unlock",
                            e.rawExt + "," + e.mime,
                            JSON.stringify(n),
                          ]);
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          showFail: function (e, t) {
            console.error(e, t),
              this.$notify.error({
                title: "出现问题",
                message:
                  e +
                  "，" +
                  t +
                  '，参考<a target="_blank" href="https://git.unlock-music.dev/um/web/wiki/使用提示">使用提示</a>',
                dangerouslyUseHTMLString: !0,
                duration: 6e3,
              }),
              window._paq.push(["trackEvent", "Error", String(e), t]);
          },
          changePlaying: function (e) {
            (this.playing_url = e), (this.playing_auto = !0);
          },
          handleDeleteAll: function () {
            this.tableData.forEach(function (e) {
              Object(s["f"])(e);
            }),
              (this.tableData = []);
          },
          handleDecryptionConfig: function () {
            this.showConfigDialog = !0;
          },
          handleDownloadAll: function () {
            var e = this,
              t = 0,
              r = setInterval(function () {
                t < e.tableData.length
                  ? (e.saveFile(e.tableData[t]), t++)
                  : clearInterval(r);
              }, 300);
          },
          handleEdit: function (t) {
            var r = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function n() {
                var i, a, c, o, s, d, f, m;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r.showEditDialog = !1),
                            URL.revokeObjectURL(r.editing_data.file),
                            t.picture &&
                              (URL.revokeObjectURL(r.editing_data.picture),
                              (r.editing_data.picture = URL.createObjectURL(
                                t.picture
                              ))),
                            (r.editing_data.title = t.title),
                            (r.editing_data.artist = t.artist),
                            (r.editing_data.album = t.album),
                            (i = !0),
                            (a = "成功修改 " + r.editing_data.title),
                            (n.prev = 8),
                            (n.next = 11),
                            Object(l["parseBlob"])(
                              new Blob([r.editing_data.blob], { type: m })
                            )
                          );
                        case 11:
                          if (
                            ((o = n.sent),
                            (s = void 0),
                            "" === r.editing_data.picture)
                          ) {
                            n.next = 18;
                            break;
                          }
                          return (
                            (n.next = 16),
                            Object(u["e"])(r.editing_data.picture)
                          );
                        case 16:
                          (s = n.sent),
                            s ||
                              console.warn(
                                "获取图像失败",
                                r.editing_data.picture
                              );
                        case 18:
                          return (
                            (d = {
                              picture:
                                null === (c = s) || void 0 === c
                                  ? void 0
                                  : c.buffer,
                              title: t.title,
                              artists: t.artist.split(u["m"]),
                              album: t.album,
                              albumartist: t.albumartist,
                              genre: t.genre.split(u["m"]),
                            }),
                            (n.t0 = e),
                            (n.next = 22),
                            r.editing_data.blob.arrayBuffer()
                          );
                        case 22:
                          (n.t1 = n.sent),
                            (f = n.t0.from.call(n.t0, n.t1)),
                            (m = u["a"][r.editing_data.ext] || u["a"].mp3),
                            "mp3" === r.editing_data.ext
                              ? (r.editing_data.blob = new Blob(
                                  [Object(u["h"])(f, d, o)],
                                  { type: m }
                                ))
                              : "flac" === r.editing_data.ext
                              ? (r.editing_data.blob = new Blob(
                                  [Object(u["g"])(f, d, o)],
                                  { type: m }
                                ))
                              : ((i = void 0),
                                (a =
                                  r.editing_data.ext +
                                  "类型文件暂时不支持修改音乐标签")),
                            (n.next = 32);
                          break;
                        case 28:
                          (n.prev = 28),
                            (n.t2 = n["catch"](8)),
                            (i = !1),
                            (a =
                              "修改" +
                              r.editing_data.title +
                              "未能完成。在写入新的元数据时发生错误：" +
                              n.t2);
                        case 32:
                          (r.editing_data.file = URL.createObjectURL(
                            r.editing_data.blob
                          )),
                            !0 === i
                              ? r.$notify.success({
                                  title: "修改成功",
                                  message: a,
                                  duration: 3e3,
                                })
                              : !1 === i
                              ? r.$notify.error({
                                  title: "修改失败",
                                  message: a,
                                  duration: 3e3,
                                })
                              : r.$notify.warning({
                                  title: "修改取消",
                                  message: a,
                                  duration: 3e3,
                                });
                        case 34:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[8, 28]]
                );
              })
            )();
          },
          editFile: function (e) {
            var t = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function r() {
                var n, i;
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (t.editing_data = e),
                          (r.next = 3),
                          Object(l["parseBlob"])(t.editing_data.blob)
                        );
                      case 3:
                        (i = r.sent),
                          (t.editing_data.albumartist =
                            i.common.albumartist || ""),
                          (t.editing_data.genre =
                            (null === (n = i.common.genre) || void 0 === n
                              ? void 0
                              : n.toString()) || ""),
                          (t.showEditDialog = !0);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          saveFile: function (e) {
            var t = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (!t.dir) {
                          r.next = 6;
                          break;
                        }
                        return (
                          (r.next = 3),
                          Object(s["b"])(e, t.filename_policy, t.dir)
                        );
                      case 3:
                        t.$notify({
                          title: "保存成功",
                          message: e.title,
                          position: "top-left",
                          type: "success",
                          duration: 3e3,
                        }),
                          (r.next = 7);
                        break;
                      case 6:
                        Object(s["c"])(e, t.filename_policy);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          showDirectlySave: function () {
            var e = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function t() {
                var r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (window.showDirectoryPicker) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (t.prev = 2),
                            (t.next = 5),
                            e.$confirm(
                              "您的浏览器支持文件直接保存到磁盘，是否使用？",
                              "新特性提示",
                              {
                                confirmButtonText: "使用",
                                cancelButtonText: "不使用",
                                type: "warning",
                                center: !0,
                              }
                            )
                          );
                        case 5:
                          t.next = 11;
                          break;
                        case 7:
                          return (
                            (t.prev = 7),
                            (t.t0 = t["catch"](2)),
                            console.log(t.t0),
                            t.abrupt("return")
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.next = 14),
                            window.showDirectoryPicker()
                          );
                        case 14:
                          return (
                            (e.dir = t.sent),
                            (r = "__unlock_music_write_test.txt"),
                            (t.next = 18),
                            e.dir.getFileHandle(r, { create: !0 })
                          );
                        case 18:
                          return (t.next = 20), e.dir.removeEntry(r);
                        case 20:
                          t.next = 25;
                          break;
                        case 22:
                          (t.prev = 22),
                            (t.t1 = t["catch"](11)),
                            console.error(t.t1);
                        case 25:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [2, 7],
                    [11, 22],
                  ]
                );
              })
            )();
          },
        },
      };
    }).call(this, r("1c35").Buffer);
  },
  4: function (e, t) {},
  "4a5a": function (e, t, r) {},
  5: function (e, t) {},
  "507a": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return V;
    });
    r("d3b7"), r("b0c0");
    var n = r("9ab4"),
      i = r("9b2d"),
      a = r("6d95"),
      c =
        (r("ace4"),
        r("5cc6"),
        r("907a"),
        r("9a8c"),
        r("a975"),
        r("735e"),
        r("c1ac"),
        r("d139"),
        r("3a7b"),
        r("d5d6"),
        r("82f8"),
        r("e91f"),
        r("60bd"),
        r("5f96"),
        r("3280"),
        r("3fcc"),
        r("ca91"),
        r("25a1"),
        r("cd26"),
        r("3c5d"),
        r("2954"),
        r("649e"),
        r("219c"),
        r("170b"),
        r("b39a"),
        r("72f7"),
        r("3ca3"),
        r("ddb0"),
        r("2b3d"),
        r("9861"),
        r("cc74")),
      o = r("cb96");
    function s(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, s, u, l, d, f, m, b;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (a = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 1:
              for (
                i = new (a.apply(Uint8Array, [void 0, n.sent()]))(),
                  s = i.length,
                  u = 0;
                u < s;
                u++
              )
                i[u] ^= 163;
              return (
                (l = Object(c["i"])(i, r)),
                l !== r && (e = new Blob([i], { type: c["a"][l] })),
                [4, Object(o["parseBlob"])(e)]
              );
            case 2:
              return (
                (d = n.sent()),
                (f = Object(c["f"])(
                  t,
                  d.common.title,
                  String(d.common.artists || d.common.artist || "")
                )),
                (m = f.title),
                (b = f.artist),
                [
                  2,
                  {
                    title: m,
                    artist: b,
                    ext: l,
                    album: d.common.album,
                    picture: Object(c["d"])(d),
                    file: URL.createObjectURL(e),
                    blob: e,
                    mime: c["a"][l],
                  },
                ]
              );
          }
        });
      });
    }
    r("fb6a");
    var u = r("0ba7"),
      l = [105, 102, 109, 116],
      d = [254, 254, 254, 254],
      f = { " WAV": ".wav", FLAC: ".flac", " MP3": ".mp3", " A4M": ".m4a" };
    function m(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, s, m, b, p, v, h, g, w, y, j, O, x, _;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (a = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 1:
              if (
                ((i = new (a.apply(Uint8Array, [void 0, n.sent()]))()),
                Object(c["b"])(i, l) && Object(c["b"])(i.slice(8, 12), d))
              )
                return [3, 4];
              if ("xm" !== r) return [3, 2];
              throw Error("此xm文件已损坏");
            case 2:
              return [4, Object(u["a"])(e, t, r, !0)];
            case 3:
              return [2, n.sent()];
            case 4:
              if (
                ((s = new TextDecoder().decode(i.slice(4, 8))),
                !f.hasOwnProperty(s))
              )
                throw Error("未知的.xm文件类型");
              for (
                m = i[15],
                  b = i[12] | (i[13] << 8) | (i[14] << 16),
                  p = i.slice(16),
                  v = p.length,
                  h = b;
                h < v;
                ++h
              )
                p[h] = (p[h] - m) ^ 255;
              return (
                (g = f[s]),
                (w = c["a"][g]),
                (y = new Blob([p], { type: w })),
                [4, Object(o["parseBlob"])(y)]
              );
            case 5:
              return (
                (j = n.sent()),
                "wav" === g &&
                  (console.info(j.common),
                  (j.common.album = ""),
                  (j.common.artist = ""),
                  (j.common.title = "")),
                (O = Object(c["f"])(
                  t,
                  j.common.title,
                  String(j.common.artists || j.common.artist || ""),
                  -1 === t.indexOf("_") ? "-" : "_"
                )),
                (x = O.title),
                (_ = O.artist),
                [
                  2,
                  {
                    title: x,
                    artist: _,
                    ext: g,
                    mime: w,
                    album: j.common.album,
                    picture: Object(c["d"])(j),
                    file: URL.createObjectURL(y),
                    blob: y,
                    rawExt: "xm",
                  },
                ]
              );
          }
        });
      });
    }
    r("6c57");
    var b = r("656c"),
      p = r.n(b);
    r("159b");
    function v(e) {
      var t = 0;
      e.forEach(function (e) {
        t += e.length;
      });
      var r = new Uint8Array(t),
        n = 0;
      return (
        e.forEach(function (e) {
          r.set(e, n), (n += e.length);
        }),
        r
      );
    }
    var h = 2097152;
    function g(e, t) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, i, a, c, o, s, u, l, d, f, m, b;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              (r = {
                success: !1,
                data: new Uint8Array(),
                songId: 0,
                error: "",
              }),
                (n.label = 1);
            case 1:
              return n.trys.push([1, 3, , 4]), [4, p()()];
            case 2:
              return (i = n.sent()), [3, 4];
            case 3:
              return (
                (a = n.sent()),
                (r.error =
                  (null === a || void 0 === a ? void 0 : a.message) ||
                  "wasm 加载失败"),
                [2, r]
              );
            case 4:
              if (!i) return (r.error = "wasm 加载失败"), [2, r];
              if (
                ((c = new Uint8Array(e)),
                (o = i._malloc(h)),
                (s = Math.min(h, e.byteLength)),
                i.writeArrayToMemory(c.slice(-s), o),
                (t = "." + t),
                (u = i.preDec(o, s, t)),
                -1 == u)
              )
                return (r.error = i.getErr()), [2, r];
              (r.songId = i.getSongId()),
                (r.songId = "0" == r.songId ? 0 : r.songId),
                (l = []),
                (d = 0),
                (f = c.length - u);
              while (f > 0)
                (m = Math.min(f, h)),
                  (b = new Uint8Array(c.slice(d, d + m))),
                  i.writeArrayToMemory(b, o),
                  l.push(i.HEAPU8.slice(o, o + i.decBlob(o, m, d))),
                  (d += m),
                  (f -= m);
              return i._free(o), (r.data = v(l)), (r.success = !0), [2, r];
          }
        });
      });
    }
    var w = r("0f92"),
      y = {
        mgg: { ext: "ogg", version: 2 },
        mgg0: { ext: "ogg", version: 2 },
        mggl: { ext: "ogg", version: 2 },
        mgg1: { ext: "ogg", version: 2 },
        mflac: { ext: "flac", version: 2 },
        mflac0: { ext: "flac", version: 2 },
        mmp4: { ext: "mp4", version: 2 },
        qmcflac: { ext: "flac", version: 2 },
        qmcogg: { ext: "ogg", version: 2 },
        qmc0: { ext: "mp3", version: 2 },
        qmc2: { ext: "ogg", version: 2 },
        qmc3: { ext: "mp3", version: 2 },
        qmc4: { ext: "ogg", version: 2 },
        qmc6: { ext: "ogg", version: 2 },
        qmc8: { ext: "ogg", version: 2 },
        bkcmp3: { ext: "mp3", version: 1 },
        bkcm4a: { ext: "m4a", version: 1 },
        bkcflac: { ext: "flac", version: 1 },
        bkcwav: { ext: "wav", version: 1 },
        bkcape: { ext: "ape", version: 1 },
        bkcogg: { ext: "ogg", version: 1 },
        bkcwma: { ext: "wma", version: 1 },
        tkm: { ext: "m4a", version: 1 },
        "666c6163": { ext: "flac", version: 1 },
        "6d7033": { ext: "mp3", version: 1 },
        "6f6767": { ext: "ogg", version: 1 },
        "6d3461": { ext: "m4a", version: 1 },
        776176: { ext: "wav", version: 1 },
      };
    function j(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, o, s, u, l, d, f, m, b, p, v, h, j;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              if (!(r in y)) throw "Qmc cannot handle type: ".concat(r);
              return (i = y[r]), (a = i.version), [4, Object(c["c"])(e)];
            case 1:
              return (
                (o = n.sent()),
                (s = new Uint8Array()),
                2 === a && globalThis.WebAssembly ? [4, g(o, r)] : [3, 3]
              );
            case 2:
              if (((l = n.sent()), !l.success))
                throw new Error(l.error || "(unknown error)");
              (s = l.data),
                (u = l.songId),
                console.log("qmc wasm decoder suceeded"),
                (n.label = 3);
            case 3:
              return (
                (d = Object(c["i"])(s, i.ext)),
                (f = c["a"][d]),
                [4, Object(w["a"])(new Blob([s], { type: f }), t, d, u)]
              );
            case 4:
              return (
                (m = n.sent()),
                (b = m.album),
                (p = m.artist),
                (v = m.imgUrl),
                (h = m.blob),
                (j = m.title),
                [
                  2,
                  {
                    title: j,
                    artist: p,
                    ext: d,
                    album: b,
                    picture: v,
                    file: URL.createObjectURL(h),
                    blob: h,
                    mime: f,
                  },
                ]
              );
          }
        });
      });
    }
    function O(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, s, u, l, d, f, m, b, p;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, Object(c["c"])(e)];
            case 1:
              return (
                (i = n.sent()),
                (a = new Uint8Array()),
                globalThis.WebAssembly
                  ? (console.log("qmc: using wasm decoder"), [4, g(i, r)])
                  : [3, 3]
              );
            case 2:
              if (((s = n.sent()), !s.success))
                throw new Error(s.error || "(unknown error)");
              (a = s.data),
                console.log("qmc wasm decoder suceeded"),
                (n.label = 3);
            case 3:
              if (
                ((u = Object(c["i"])(a, "")),
                (l = Object(c["j"])(t)),
                "" === u && "mp3" !== l.ext)
              ) {
                if (l.ext in y)
                  return (
                    (d = new Blob([a], { type: "application/octet-stream" })),
                    [2, j(d, l.name, l.ext)]
                  );
                throw "不支持的QQ音乐缓存格式";
              }
              return (
                (d = new Blob([a], { type: c["a"][u] })),
                [4, Object(o["parseBlob"])(d)]
              );
            case 4:
              return (
                (f = n.sent()),
                (m = Object(c["f"])(
                  t,
                  f.common.title,
                  String(f.common.artists || f.common.artist || "")
                )),
                (b = m.title),
                (p = m.artist),
                [
                  2,
                  {
                    title: b,
                    artist: p,
                    ext: u,
                    album: f.common.album,
                    picture: Object(c["d"])(f),
                    file: URL.createObjectURL(d),
                    blob: d,
                    mime: c["a"][u],
                  },
                ]
              );
          }
        });
      });
    }
    var x = r("8866"),
      _ = r.n(x),
      k = 2097152;
    function A(e, t) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, i, a, c, o, s, u, l, d, f, m, b;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              (r = { success: !1, data: new Uint8Array(), error: "" }),
                (n.label = 1);
            case 1:
              return n.trys.push([1, 3, , 4]), [4, _()()];
            case 2:
              return (i = n.sent()), [3, 4];
            case 3:
              return (
                (a = n.sent()),
                (r.error =
                  (null === a || void 0 === a ? void 0 : a.message) ||
                  "wasm 加载失败"),
                [2, r]
              );
            case 4:
              if (!i) return (r.error = "wasm 加载失败"), [2, r];
              (c = new Uint8Array(e)),
                (o = i._malloc(k)),
                (s = Math.min(k, e.byteLength)),
                i.writeArrayToMemory(c.slice(0, s), o),
                (u = i.preDec(o, s, t)),
                (c = c.slice(u)),
                (l = []),
                (d = 0),
                (f = c.length);
              while (f > 0)
                (m = Math.min(f, k)),
                  (b = new Uint8Array(c.slice(d, d + m))),
                  i.writeArrayToMemory(b, o),
                  i.decBlob(o, m, d),
                  l.push(i.HEAPU8.slice(o, o + m)),
                  (d += m),
                  (f -= m);
              return i._free(o), (r.data = v(l)), (r.success = !0), [2, r];
          }
        });
      });
    }
    var U = [
        5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49,
      ],
      T = [
        124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153,
        20,
      ];
    function R(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, s, u, l, d, f, m, b, p;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, Object(c["c"])(e)];
            case 1:
              if (((i = n.sent()), "vpr" === r)) {
                if (!Object(c["b"])(new Uint8Array(i), U))
                  throw Error("Not a valid vpr file!");
              } else if (!Object(c["b"])(new Uint8Array(i), T)) throw Error("Not a valid kgm(a) file!");
              return (
                (a = new Uint8Array()),
                globalThis.WebAssembly ? [4, A(i, r)] : [3, 3]
              );
            case 2:
              if (((s = n.sent()), !s.success))
                throw new Error(s.error || "(unknown error)");
              (a = s.data),
                console.log("kgm wasm decoder suceeded"),
                (n.label = 3);
            case 3:
              return (
                (u = Object(c["i"])(a)),
                (l = c["a"][u]),
                (d = new Blob([a], { type: l })),
                [4, Object(o["parseBlob"])(d)]
              );
            case 4:
              return (
                (f = n.sent()),
                (m = Object(c["f"])(
                  t,
                  f.common.title,
                  String(f.common.artists || f.common.artist || "")
                )),
                (b = m.title),
                (p = m.artist),
                [
                  2,
                  {
                    album: f.common.album,
                    picture: Object(c["d"])(f),
                    file: URL.createObjectURL(d),
                    blob: d,
                    ext: u,
                    mime: l,
                    title: b,
                    artist: p,
                  },
                ]
              );
          }
        });
      });
    }
    r("25f0"), r("843c");
    var P = [
        121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109,
        101,
      ],
      E = [
        121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 0, 0, 0, 0,
      ],
      D = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";
    function L(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, i, a, s, l, d, f, m, b, p, v, h, g, w;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (i = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 1:
              return (
                (r = new (i.apply(Uint8Array, [void 0, n.sent()]))()),
                Object(c["b"])(r, P) || Object(c["b"])(r, E)
                  ? [3, 4]
                  : "aac" !== Object(c["i"])(r)
                  ? [3, 3]
                  : [4, Object(u["a"])(e, t, "aac", !1)]
              );
            case 2:
              return [2, n.sent()];
            case 3:
              throw Error("not a valid kwm file");
            case 4:
              for (
                a = r.slice(24, 32),
                  s = C(a),
                  l = r.slice(1024),
                  d = l.length,
                  f = 0;
                f < d;
                ++f
              )
                l[f] ^= s[f % 32];
              return (
                (m = Object(c["i"])(l)),
                (b = c["a"][m]),
                (p = new Blob([l], { type: b })),
                [4, Object(o["parseBlob"])(p)]
              );
            case 5:
              return (
                (v = n.sent()),
                (h = Object(c["f"])(
                  t,
                  v.common.title,
                  String(v.common.artists || v.common.artist || "")
                )),
                (g = h.title),
                (w = h.artist),
                [
                  2,
                  {
                    album: v.common.album,
                    picture: Object(c["d"])(v),
                    file: URL.createObjectURL(p),
                    blob: p,
                    mime: b,
                    title: g,
                    artist: w,
                    ext: m,
                  },
                ]
              );
          }
        });
      });
    }
    function C(e) {
      for (
        var t = new DataView(e.buffer),
          r = t.getBigUint64(0, !0).toString(),
          n = F(r),
          i = new Uint8Array(32),
          a = 0;
        a < 32;
        a++
      )
        i[a] = D.charCodeAt(a) ^ n.charCodeAt(a);
      return i;
    }
    function F(e) {
      var t = e.length,
        r = e;
      return t > 32 ? (r = e.slice(0, 32)) : t < 32 && (r = e.padEnd(32, e)), r;
    }
    var S = [0, 0, 0, 32, 102, 116, 121, 112];
    function B(e, t) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, i, a, o;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (i = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 1:
              for (
                r = new (i.apply(Uint8Array, [void 0, n.sent()]))(), a = 0;
                a < 8;
                ++a
              )
                r[a] = S[a];
              return (
                (o = new Blob([r], { type: "audio/mp4" })),
                [4, Object(u["a"])(o, t, "m4a", !1)]
              );
            case 2:
              return [2, n.sent()];
          }
        });
      });
    }
    r("ac1f"), r("466d");
    var I = r("dc71"),
      M = r.n(I),
      q = r("b7c7");
    function N(e, t, r) {
      var i;
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, a, o, s, u, l, d, f, m, b, p, h, g, y;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, q["a"].loadJooxUUID("")];
            case 1:
              if (((r = n.sent()), !r || 32 !== r.length))
                throw new Error("请在“解密设定”填写应用 Joox 应用的 UUID。");
              return (o = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 2:
              if (
                ((a = new (o.apply(Uint8Array, [void 0, n.sent()]))()),
                (s = M()(a, r)),
                !s)
              )
                throw new Error("不支持的 joox 加密格式");
              return (
                (u = v(s.decryptFile(a))),
                (l = Object(c["i"])(u)),
                (d = c["a"][l]),
                (f =
                  null === (i = t.match(/^(\d+)\s\[mqms\d*]$/i)) || void 0 === i
                    ? void 0
                    : i[1]),
                [4, Object(w["a"])(new Blob([u], { type: d }), t, l, f)]
              );
            case 3:
              return (
                (m = n.sent()),
                (b = m.album),
                (p = m.artist),
                (h = m.imgUrl),
                (g = m.blob),
                (y = m.title),
                [
                  2,
                  {
                    title: y,
                    artist: p,
                    ext: l,
                    album: b,
                    picture: h,
                    file: URL.createObjectURL(g),
                    blob: g,
                    mime: d,
                  },
                ]
              );
          }
        });
      });
    }
    r("4ec9");
    var $ = new Map([
      ["x2m", W],
      ["x3m", H],
    ]);
    function J(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var i, a, s, u, l, d, f, m, b;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (a = Uint8Array.bind), [4, Object(c["c"])(e)];
            case 1:
              if (
                ((i = new (a.apply(Uint8Array, [void 0, n.sent()]))()),
                (s = $.get(r)),
                !s)
              )
                throw "File type is incorrect!";
              return (
                (u = s(i)),
                (l = Object(c["i"])(u, "m4a")),
                (d = c["a"][l]),
                (f = new Blob([u], { type: d })),
                [4, Object(o["parseBlob"])(f)]
              );
            case 2:
              return (
                (m = n.sent()),
                (b = Object(c["f"])(t, m.common.title, m.common.artist)),
                [
                  2,
                  {
                    picture: "",
                    title: b.title,
                    artist: b.artist,
                    ext: l,
                    album: m.common.album,
                    blob: f,
                    file: URL.createObjectURL(f),
                    mime: d,
                  },
                ]
              );
          }
        });
      });
    }
    function W(e) {
      for (
        var t = 1024, r = [120, 109, 108, 121], n = e.slice(0, t), i = 0;
        i < t;
        i++
      ) {
        var a = G[i];
        e[i] = n[a] ^ r[i % r.length];
      }
      return e;
    }
    function H(e) {
      for (
        var t = 1024,
          r = [
            51, 57, 56, 57, 100, 49, 49, 49, 97, 97, 100, 53, 54, 49, 51, 57,
            52, 48, 102, 52, 102, 99, 52, 52, 98, 54, 51, 57, 98, 50, 57, 50,
          ],
          n = e.slice(0, t),
          i = 0;
        i < t;
        i++
      ) {
        var a = Q[i];
        e[i] = n[a] ^ r[i % r.length];
      }
      return e;
    }
    var G = [
        681, 683, 340, 682, 680, 684, 339, 679, 685, 338, 678, 1023, 0, 341,
        686, 337, 677, 1022, 1, 342, 687, 336, 676, 1021, 2, 343, 688, 335, 675,
        1020, 3, 344, 689, 334, 674, 1019, 4, 345, 690, 333, 673, 1018, 5, 346,
        691, 332, 672, 1017, 6, 347, 692, 331, 671, 1016, 7, 348, 693, 330, 670,
        1015, 8, 349, 694, 329, 669, 1014, 9, 350, 695, 328, 668, 1013, 10, 351,
        696, 327, 667, 1012, 11, 352, 697, 326, 666, 1011, 12, 353, 698, 325,
        665, 1010, 13, 354, 699, 324, 664, 1009, 14, 355, 700, 323, 663, 1008,
        15, 356, 701, 322, 662, 1007, 16, 357, 702, 321, 661, 1006, 17, 358,
        703, 320, 660, 1005, 18, 359, 704, 319, 659, 1004, 19, 360, 705, 318,
        658, 1003, 20, 361, 706, 317, 657, 1002, 21, 362, 707, 316, 656, 1001,
        22, 363, 708, 315, 655, 1e3, 23, 364, 709, 314, 654, 999, 24, 365, 710,
        313, 653, 998, 25, 366, 711, 312, 652, 997, 26, 367, 712, 311, 651, 996,
        27, 368, 713, 310, 650, 995, 28, 369, 714, 309, 649, 994, 29, 370, 715,
        308, 648, 993, 30, 371, 716, 307, 647, 992, 31, 372, 717, 169, 510, 855,
        32, 373, 718, 170, 511, 856, 33, 374, 719, 171, 512, 857, 34, 375, 720,
        172, 513, 858, 35, 376, 721, 173, 514, 859, 36, 377, 722, 174, 515, 860,
        37, 378, 723, 175, 516, 861, 38, 379, 724, 176, 517, 862, 39, 380, 725,
        177, 518, 863, 40, 381, 726, 178, 519, 864, 41, 382, 727, 179, 520, 865,
        42, 383, 728, 180, 521, 866, 43, 384, 729, 181, 522, 867, 44, 385, 730,
        182, 523, 868, 45, 386, 731, 183, 524, 869, 46, 387, 732, 184, 525, 870,
        47, 388, 733, 185, 526, 871, 48, 389, 734, 186, 527, 872, 49, 390, 735,
        187, 528, 873, 50, 391, 736, 188, 529, 874, 51, 392, 737, 189, 530, 875,
        52, 393, 738, 190, 531, 876, 53, 394, 739, 191, 532, 877, 54, 395, 740,
        192, 533, 878, 55, 396, 741, 193, 534, 879, 56, 397, 742, 194, 535, 880,
        57, 398, 743, 195, 536, 881, 58, 399, 744, 196, 537, 882, 59, 400, 745,
        197, 538, 883, 60, 401, 746, 198, 539, 884, 61, 402, 747, 199, 540, 885,
        62, 403, 748, 200, 541, 886, 63, 404, 749, 201, 542, 887, 64, 405, 750,
        202, 543, 888, 65, 406, 751, 203, 544, 889, 66, 407, 752, 204, 545, 890,
        67, 408, 753, 205, 546, 891, 68, 409, 754, 206, 547, 892, 69, 410, 755,
        207, 548, 893, 70, 411, 756, 208, 549, 894, 71, 412, 757, 209, 550, 895,
        72, 413, 758, 210, 551, 896, 73, 414, 759, 211, 552, 897, 74, 415, 760,
        212, 553, 898, 75, 416, 761, 213, 554, 899, 76, 417, 762, 214, 555, 900,
        77, 418, 763, 215, 556, 901, 78, 419, 764, 216, 557, 902, 79, 420, 765,
        217, 558, 903, 80, 421, 766, 218, 559, 904, 81, 422, 767, 219, 560, 905,
        82, 423, 768, 220, 561, 906, 83, 424, 769, 221, 562, 907, 84, 425, 770,
        222, 563, 908, 85, 426, 771, 223, 564, 909, 86, 427, 772, 224, 565, 910,
        87, 428, 773, 225, 566, 911, 88, 429, 774, 226, 567, 912, 89, 430, 775,
        227, 568, 913, 90, 431, 776, 228, 569, 914, 91, 432, 777, 229, 570, 915,
        92, 433, 778, 230, 571, 916, 93, 434, 779, 231, 572, 917, 94, 435, 780,
        232, 573, 918, 95, 436, 781, 233, 574, 919, 96, 437, 782, 234, 575, 920,
        97, 438, 783, 235, 576, 921, 98, 439, 784, 236, 577, 922, 99, 440, 785,
        237, 578, 923, 100, 441, 786, 238, 579, 924, 101, 442, 787, 239, 580,
        925, 102, 443, 788, 240, 581, 926, 103, 444, 789, 241, 582, 927, 104,
        445, 790, 242, 583, 928, 105, 446, 791, 243, 584, 929, 106, 447, 792,
        244, 585, 930, 107, 448, 793, 245, 586, 931, 108, 449, 794, 246, 587,
        932, 109, 450, 795, 247, 588, 933, 110, 451, 796, 248, 589, 934, 111,
        452, 797, 249, 590, 935, 112, 453, 798, 250, 591, 936, 113, 454, 799,
        251, 592, 937, 114, 455, 800, 252, 593, 938, 115, 456, 801, 253, 594,
        939, 116, 457, 802, 254, 595, 940, 117, 458, 803, 255, 596, 941, 118,
        459, 804, 256, 597, 942, 119, 460, 805, 257, 598, 943, 120, 461, 806,
        258, 599, 944, 121, 462, 807, 259, 600, 945, 122, 463, 808, 260, 601,
        946, 123, 464, 809, 261, 602, 947, 124, 465, 810, 262, 603, 948, 125,
        466, 811, 263, 604, 949, 126, 467, 812, 264, 605, 950, 127, 468, 813,
        265, 606, 951, 128, 469, 814, 266, 607, 952, 129, 470, 815, 267, 608,
        953, 130, 471, 816, 268, 609, 954, 131, 472, 817, 269, 610, 955, 132,
        473, 818, 270, 611, 956, 133, 474, 819, 271, 612, 957, 134, 475, 820,
        272, 613, 958, 135, 476, 821, 273, 614, 959, 136, 477, 822, 274, 615,
        960, 137, 478, 823, 275, 616, 961, 138, 479, 824, 276, 617, 962, 139,
        480, 825, 277, 618, 963, 140, 481, 826, 278, 619, 964, 141, 482, 827,
        279, 620, 965, 142, 483, 828, 280, 621, 966, 143, 484, 829, 281, 622,
        967, 144, 485, 830, 282, 623, 968, 145, 486, 831, 283, 624, 969, 146,
        487, 832, 284, 625, 970, 147, 488, 833, 285, 626, 971, 148, 489, 834,
        286, 627, 972, 149, 490, 835, 287, 628, 973, 150, 491, 836, 288, 629,
        974, 151, 492, 837, 289, 630, 975, 152, 493, 838, 290, 631, 976, 153,
        494, 839, 291, 632, 977, 154, 495, 840, 292, 633, 978, 155, 496, 841,
        293, 634, 979, 156, 497, 842, 294, 635, 980, 157, 498, 843, 295, 636,
        981, 158, 499, 844, 296, 637, 982, 159, 500, 845, 297, 638, 983, 160,
        501, 846, 298, 639, 984, 161, 502, 847, 299, 640, 985, 162, 503, 848,
        300, 641, 986, 163, 504, 849, 301, 642, 987, 164, 505, 850, 302, 643,
        988, 165, 506, 851, 303, 644, 989, 166, 507, 852, 304, 645, 990, 167,
        508, 853, 305, 646, 991, 168, 509, 854, 306,
      ],
      Q = [
        598, 653, 531, 775, 342, 925, 98, 368, 970, 53, 237, 676, 484, 857, 211,
        619, 613, 628, 593, 663, 514, 802, 294, 811, 279, 770, 348, 936, 87,
        328, 896, 144, 502, 821, 268, 750, 373, 980, 43, 204, 608, 635, 573,
        699, 438, 929, 94, 343, 926, 97, 367, 966, 57, 247, 697, 440, 927, 96,
        358, 953, 70, 290, 796, 303, 829, 252, 714, 420, 972, 51, 230, 659, 521,
        789, 317, 856, 213, 622, 606, 637, 570, 704, 433, 943, 80, 310, 838,
        239, 682, 462, 886, 160, 528, 780, 332, 905, 130, 475, 871, 185, 574,
        698, 439, 928, 95, 356, 951, 72, 293, 806, 284, 778, 335, 911, 112, 424,
        967, 56, 245, 693, 445, 915, 108, 409, 993, 30, 179, 559, 727, 403,
        1002, 21, 157, 522, 788, 318, 858, 210, 618, 615, 626, 595, 660, 520,
        793, 311, 844, 231, 661, 517, 797, 302, 828, 254, 717, 416, 981, 42,
        200, 600, 646, 554, 732, 398, 1015, 8, 124, 467, 880, 167, 541, 753,
        369, 973, 50, 229, 658, 523, 787, 319, 860, 208, 614, 627, 594, 662,
        516, 799, 298, 818, 271, 756, 364, 963, 60, 257, 722, 410, 992, 31, 181,
        563, 713, 422, 969, 54, 240, 683, 459, 892, 149, 509, 808, 282, 774,
        344, 930, 93, 341, 924, 99, 372, 979, 44, 207, 612, 629, 591, 665, 506,
        812, 277, 767, 351, 939, 84, 323, 876, 173, 549, 741, 385, 1007, 16,
        140, 497, 836, 243, 687, 452, 902, 136, 483, 859, 209, 617, 616, 621,
        607, 636, 571, 703, 434, 942, 81, 315, 853, 218, 632, 584, 678, 476,
        869, 192, 582, 680, 470, 877, 172, 548, 744, 382, 1003, 20, 156, 519,
        794, 307, 833, 248, 700, 437, 931, 92, 338, 917, 106, 396, 1017, 6, 122,
        465, 883, 164, 535, 766, 352, 941, 82, 316, 855, 215, 624, 604, 641,
        565, 710, 426, 956, 67, 285, 781, 330, 900, 138, 487, 851, 221, 644,
        558, 728, 402, 1004, 19, 153, 513, 803, 292, 801, 295, 813, 276, 765,
        353, 944, 79, 309, 835, 244, 692, 446, 914, 109, 413, 987, 36, 190, 580,
        688, 450, 906, 128, 473, 873, 182, 564, 712, 423, 968, 55, 241, 685,
        454, 899, 141, 498, 827, 256, 721, 411, 990, 33, 187, 576, 694, 443,
        921, 102, 378, 991, 32, 184, 572, 701, 436, 933, 90, 336, 912, 111, 421,
        971, 52, 234, 669, 494, 840, 236, 675, 485, 854, 216, 625, 599, 649,
        544, 748, 376, 985, 38, 194, 587, 673, 490, 845, 228, 657, 524, 786,
        321, 864, 202, 602, 643, 560, 720, 412, 989, 34, 188, 577, 691, 447,
        913, 110, 418, 977, 46, 214, 623, 605, 639, 567, 708, 428, 954, 69, 289,
        792, 312, 846, 227, 655, 529, 779, 333, 908, 115, 451, 903, 132, 479,
        866, 199, 597, 654, 530, 777, 339, 918, 105, 395, 1018, 5, 121, 464,
        884, 162, 533, 769, 349, 937, 86, 327, 890, 152, 512, 804, 287, 790,
        314, 850, 223, 648, 547, 745, 381, 1001, 22, 158, 525, 784, 324, 882,
        165, 537, 762, 357, 952, 71, 291, 798, 301, 824, 263, 736, 392, 1022, 1,
        117, 457, 894, 147, 505, 815, 274, 761, 359, 958, 65, 267, 743, 383,
        1005, 18, 151, 511, 805, 286, 785, 322, 870, 186, 575, 696, 441, 923,
        100, 374, 982, 41, 197, 592, 664, 508, 809, 281, 772, 346, 934, 89, 334,
        910, 113, 429, 950, 73, 296, 814, 275, 764, 354, 946, 77, 305, 831, 250,
        706, 431, 947, 76, 304, 830, 251, 711, 425, 957, 66, 278, 768, 350, 938,
        85, 326, 888, 155, 518, 795, 306, 832, 249, 702, 435, 940, 83, 320, 861,
        206, 610, 633, 583, 679, 471, 875, 174, 550, 739, 389, 1014, 9, 125,
        468, 879, 168, 542, 752, 370, 974, 49, 222, 647, 552, 735, 393, 1021, 2,
        118, 458, 893, 148, 507, 810, 280, 771, 347, 935, 88, 331, 904, 131,
        477, 868, 193, 586, 674, 489, 848, 225, 651, 538, 760, 360, 959, 64,
        266, 742, 384, 1006, 17, 145, 503, 820, 269, 751, 371, 975, 48, 220,
        640, 566, 709, 427, 955, 68, 288, 791, 313, 847, 226, 652, 536, 763,
        355, 948, 75, 300, 823, 264, 738, 390, 1020, 3, 119, 460, 891, 150, 510,
        807, 283, 776, 340, 919, 104, 387, 1011, 12, 133, 480, 865, 201, 601,
        645, 556, 730, 400, 1010, 13, 134, 481, 863, 203, 603, 642, 562, 716,
        417, 978, 45, 212, 620, 611, 631, 585, 677, 478, 867, 198, 596, 656,
        526, 783, 325, 887, 159, 527, 782, 329, 898, 142, 499, 826, 258, 723,
        408, 994, 29, 178, 557, 729, 401, 1009, 14, 135, 482, 862, 205, 609,
        634, 579, 689, 449, 907, 127, 472, 874, 180, 561, 719, 414, 986, 37,
        191, 581, 684, 455, 897, 143, 501, 822, 265, 740, 388, 1012, 11, 129,
        474, 872, 183, 569, 705, 432, 945, 78, 308, 834, 246, 695, 442, 922,
        101, 377, 988, 35, 189, 578, 690, 448, 909, 114, 444, 920, 103, 386,
        1008, 15, 139, 488, 849, 224, 650, 540, 755, 365, 964, 59, 255, 718,
        415, 983, 40, 196, 590, 667, 496, 837, 242, 686, 453, 901, 137, 486,
        852, 219, 638, 568, 707, 430, 949, 74, 299, 819, 270, 754, 366, 965, 58,
        253, 715, 419, 976, 47, 217, 630, 588, 671, 492, 842, 233, 668, 495,
        839, 238, 681, 463, 885, 161, 532, 773, 345, 932, 91, 337, 916, 107,
        406, 998, 25, 171, 546, 746, 380, 997, 26, 175, 551, 737, 391, 1023, 0,
        116, 456, 895, 146, 504, 817, 272, 758, 362, 961, 62, 260, 725, 405,
        999, 24, 170, 545, 747, 379, 996, 27, 176, 553, 733, 397, 1016, 7, 123,
        466, 881, 166, 539, 757, 363, 962, 61, 259, 724, 407, 995, 28, 177, 555,
        731, 399, 1013, 10, 126, 469, 878, 169, 543, 749, 375, 984, 39, 195,
        589, 670, 493, 841, 235, 672, 491, 843, 232, 666, 500, 825, 262, 734,
        394, 1019, 4, 120, 461, 889, 154, 515, 800, 297, 816, 273, 759, 361,
        960, 63, 261, 726, 404, 1e3, 23, 163, 534,
      ],
      z = r("efc0");
    function V(e, t) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var r, o, l;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return q["a"] instanceof z["a"] ? [4, q["a"].setAll(t)] : [3, 2];
            case 1:
              n.sent(), (n.label = 2);
            case 2:
              switch (((r = Object(c["j"])(e.name)), (l = r.ext), l)) {
                case "mg3d":
                  return [3, 3];
                case "ncm":
                  return [3, 5];
                case "uc":
                  return [3, 7];
                case "kwm":
                  return [3, 9];
                case "xm":
                  return [3, 11];
                case "wav":
                  return [3, 11];
                case "mp3":
                  return [3, 11];
                case "flac":
                  return [3, 11];
                case "m4a":
                  return [3, 11];
                case "ogg":
                  return [3, 13];
                case "tm0":
                  return [3, 15];
                case "tm3":
                  return [3, 15];
                case "qmc0":
                  return [3, 17];
                case "qmc3":
                  return [3, 17];
                case "qmc2":
                  return [3, 17];
                case "qmc4":
                  return [3, 17];
                case "qmc6":
                  return [3, 17];
                case "qmc8":
                  return [3, 17];
                case "qmcflac":
                  return [3, 17];
                case "qmcogg":
                  return [3, 17];
                case "tkm":
                  return [3, 17];
                case "bkcmp3":
                  return [3, 17];
                case "bkcm4a":
                  return [3, 17];
                case "bkcflac":
                  return [3, 17];
                case "bkcwav":
                  return [3, 17];
                case "bkcape":
                  return [3, 17];
                case "bkcogg":
                  return [3, 17];
                case "bkcwma":
                  return [3, 17];
                case "mggl":
                  return [3, 17];
                case "mflac":
                  return [3, 17];
                case "mflac0":
                  return [3, 17];
                case "mflach":
                  return [3, 17];
                case "mgg":
                  return [3, 17];
                case "mgg1":
                  return [3, 17];
                case "mgg0":
                  return [3, 17];
                case "mmp4":
                  return [3, 17];
                case "666c6163":
                  return [3, 17];
                case "6d7033":
                  return [3, 17];
                case "6f6767":
                  return [3, 17];
                case "6d3461":
                  return [3, 17];
                case "776176":
                  return [3, 17];
                case "tm2":
                  return [3, 19];
                case "tm6":
                  return [3, 19];
                case "cache":
                  return [3, 21];
                case "vpr":
                  return [3, 23];
                case "kgm":
                  return [3, 23];
                case "kgma":
                  return [3, 23];
                case "ofl_en":
                  return [3, 25];
                case "x2m":
                  return [3, 27];
                case "x3m":
                  return [3, 27];
                case "mflach":
                  return [3, 29];
              }
              return [3, 30];
            case 3:
              return [4, Object(i["a"])(e.raw, r.name)];
            case 4:
              return (o = n.sent()), [3, 31];
            case 5:
              return [4, Object(a["a"])(e.raw, r.name, r.ext)];
            case 6:
              return (o = n.sent()), [3, 31];
            case 7:
              return [4, s(e.raw, r.name, r.ext)];
            case 8:
              return (o = n.sent()), [3, 31];
            case 9:
              return [4, L(e.raw, r.name, r.ext)];
            case 10:
              return (o = n.sent()), [3, 31];
            case 11:
              return [4, m(e.raw, r.name, r.ext)];
            case 12:
              return (o = n.sent()), [3, 31];
            case 13:
              return [4, Object(u["a"])(e.raw, r.name, r.ext)];
            case 14:
              return (o = n.sent()), [3, 31];
            case 15:
              return [4, Object(u["a"])(e.raw, r.name, "mp3")];
            case 16:
              return (o = n.sent()), [3, 31];
            case 17:
              return [4, j(e.raw, r.name, r.ext)];
            case 18:
              return (o = n.sent()), [3, 31];
            case 19:
              return [4, B(e.raw, r.name)];
            case 20:
              return (o = n.sent()), [3, 31];
            case 21:
              return [4, O(e.raw, r.name, r.ext)];
            case 22:
              return (o = n.sent()), [3, 31];
            case 23:
              return [4, R(e.raw, r.name, r.ext)];
            case 24:
              return (o = n.sent()), [3, 31];
            case 25:
              return [4, N(e.raw, r.name, r.ext)];
            case 26:
              return (o = n.sent()), [3, 31];
            case 27:
              return [4, J(e.raw, r.name, r.ext)];
            case 28:
              return (o = n.sent()), [3, 31];
            case 29:
              throw '网页版无法解锁，请使用<a target="_blank" href="https://git.unlock-music.dev/um/cli">CLI版本</a>';
            case 30:
              throw "不支持此文件格式";
            case 31:
              return (
                o.rawExt || (o.rawExt = r.ext),
                o.rawFilename || (o.rawFilename = r.name),
                console.log(o),
                [2, o]
              );
          }
        });
      });
    }
  },
  "5c0b": function (e, t, r) {
    "use strict";
    r("9c0c");
  },
  6: function (e, t) {},
  "64bb": function (e, t, r) {
    "use strict";
    r("c486");
  },
  "675e": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    });
    var n = "um.conf.",
      i = "".concat(n, "joox.uuid"),
      a = (function () {
        function e() {}
        return (
          (e.prototype.saveJooxUUID = function (e) {
            return this.save(i, e);
          }),
          (e.prototype.loadJooxUUID = function (e) {
            return void 0 === e && (e = ""), this.load(i, e);
          }),
          e
        );
      })();
    t["b"] = a;
  },
  "6d95": function (e, t, r) {
    "use strict";
    (function (e) {
      r.d(t, "a", function () {
        return k;
      });
      r("d3b7"),
        r("ace4"),
        r("5cc6"),
        r("907a"),
        r("9a8c"),
        r("a975"),
        r("735e"),
        r("c1ac"),
        r("d139"),
        r("3a7b"),
        r("d5d6"),
        r("82f8"),
        r("e91f"),
        r("60bd"),
        r("5f96"),
        r("3280"),
        r("3fcc"),
        r("ca91"),
        r("25a1"),
        r("cd26"),
        r("3c5d"),
        r("2954"),
        r("649e"),
        r("219c"),
        r("170b"),
        r("b39a"),
        r("72f7"),
        r("d81d"),
        r("fb6a"),
        r("ddb0"),
        r("25f0"),
        r("ac1f"),
        r("5319"),
        r("159b"),
        r("4de4"),
        r("1276"),
        r("498a"),
        r("a15b"),
        r("3ca3"),
        r("2b3d"),
        r("9861");
      var n = r("9ab4"),
        i = r("cc74"),
        a = r("cb96"),
        c = r("ef21"),
        o = r.n(c),
        s = r("c198"),
        u = r.n(s),
        l = r("ead9"),
        d = r.n(l),
        f = r("81bf"),
        m = r.n(f),
        b = r("17e1"),
        p = r.n(b),
        v = r("1132"),
        h = r.n(v),
        g = r("f8d5"),
        w = r.n(g),
        y = r("640f"),
        j = r.n(y),
        O = j.a.parse("687a4852416d736f356b496e62617857"),
        x = j.a.parse("2331346C6A6B5F215C5D2630553C2728"),
        _ = [67, 84, 69, 78, 70, 68, 65, 77];
      function k(e, t, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var r;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (r = A.bind), [4, Object(i["c"])(e)];
              case 1:
                return [2, new (r.apply(A, [void 0, n.sent(), t]))().decrypt()];
            }
          });
        });
      }
      var A = (function () {
        function t(e, t) {
          (this.offset = 0), (this.format = ""), (this.mime = "");
          var r = new Uint8Array(e, 0, 8);
          if (!Object(i["b"])(r, _)) throw Error("此ncm文件已损坏");
          (this.offset = 10),
            (this.raw = e),
            (this.view = new DataView(e)),
            (this.filename = t);
        }
        return (
          (t.prototype._getKeyData = function () {
            var e = this.view.getUint32(this.offset, !0);
            this.offset += 4;
            var t = new Uint8Array(this.raw, this.offset, e).map(function (e) {
              return 100 ^ e;
            });
            this.offset += e;
            for (
              var r = u.a.decrypt({ ciphertext: p.a.create(t) }, O, {
                  mode: m.a,
                  padding: d.a,
                }),
                n = new Uint8Array(r.sigBytes),
                i = r.words,
                a = r.sigBytes,
                c = 0;
              c < a;
              c++
            )
              n[c] = (i[c >>> 2] >>> (24 - (c % 4) * 8)) & 255;
            return n.slice(17);
          }),
          (t.prototype._getKeyBox = function () {
            for (
              var e,
                t = this._getKeyData(),
                r = new Uint8Array(Array(256).keys()),
                n = t.length,
                i = 0,
                a = 0;
              a < 256;
              a++
            )
              (i = (r[a] + i + t[a % n]) & 255),
                (e = [r[i], r[a]]),
                (r[a] = e[0]),
                (r[i] = e[1]);
            return r.map(function (e, t, r) {
              t = (t + 1) & 255;
              var n = r[t],
                i = r[(t + n) & 255];
              return r[(n + i) & 255];
            });
          }),
          (t.prototype._getMetaData = function () {
            var e = this.view.getUint32(this.offset, !0);
            if (((this.offset += 4), 0 === e)) return {};
            var t = new Uint8Array(this.raw, this.offset, e).map(function (e) {
              return 99 ^ e;
            });
            (this.offset += e), p.a.create();
            var r,
              n = u.a
                .decrypt(
                  {
                    ciphertext: h.a.parse(
                      p.a.create(t.slice(22)).toString(w.a)
                    ),
                  },
                  x,
                  { mode: m.a, padding: d.a }
                )
                .toString(w.a),
              i = n.indexOf(":");
            if ("dj" === n.slice(0, i)) {
              var a = JSON.parse(n.slice(i + 1));
              r = a.mainMusic;
            } else r = JSON.parse(n.slice(i + 1));
            return (
              r.albumPic &&
                (r.albumPic =
                  r.albumPic.replace("http://", "https://") + "?param=500y500"),
              r
            );
          }),
          (t.prototype._getAudio = function (e) {
            this.offset += this.view.getUint32(this.offset + 5, !0) + 13;
            for (
              var t = new Uint8Array(this.raw, this.offset),
                r = t.length,
                n = 0;
              n < r;
              ++n
            )
              t[n] ^= e[255 & n];
            return t;
          }),
          (t.prototype._buildMeta = function () {
            var t;
            return Object(n["a"])(this, void 0, void 0, function () {
              var r, a, c, s, u, l;
              return Object(n["c"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!this.oriMeta) throw Error("invalid sequence");
                    if (
                      ((r = Object(i["f"])(
                        this.filename,
                        this.oriMeta.musicName
                      )),
                      (a = []),
                      "string" === typeof this.oriMeta.artist
                        ? a.push(this.oriMeta.artist)
                        : Array.isArray(this.oriMeta.artist) &&
                          this.oriMeta.artist.forEach(function (e) {
                            "string" === typeof e
                              ? a.push(e)
                              : Array.isArray(e) &&
                                e[0] &&
                                "string" === typeof e[0] &&
                                a.push(e[0]);
                          }),
                      0 === a.length &&
                        r.artist &&
                        (a = r.artist
                          .split(",")
                          .map(function (e) {
                            return e.trim();
                          })
                          .filter(function (e) {
                            return "" != e;
                          })),
                      !this.oriMeta.albumPic)
                    )
                      return [3, 9];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 8, , 9]),
                      (c = this),
                      [4, Object(i["e"])(this.oriMeta.albumPic)]
                    );
                  case 2:
                    (c.image = n.sent()), (n.label = 3);
                  case 3:
                    return this.image && this.image.buffer.byteLength >= 1 << 24
                      ? [4, o.a.read(e.from(this.image.buffer))]
                      : [3, 7];
                  case 4:
                    return (
                      (s = n.sent()),
                      [4, s.resize(Math.round(s.getHeight() / 2), o.a.AUTO)]
                    );
                  case 5:
                    return (
                      n.sent(),
                      (u = this.image),
                      [4, s.getBufferAsync("image/jpeg")]
                    );
                  case 6:
                    return (u.buffer = n.sent()), [3, 3];
                  case 7:
                    return [3, 9];
                  case 8:
                    return (
                      (l = n.sent()),
                      console.log("fetch cover image failed", l),
                      [3, 9]
                    );
                  case 9:
                    return (
                      (this.newMeta = {
                        title: r.title,
                        artists: a,
                        album: this.oriMeta.album,
                        picture:
                          null === (t = this.image) || void 0 === t
                            ? void 0
                            : t.buffer,
                      }),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype._writeMeta = function () {
            return Object(n["a"])(this, void 0, void 0, function () {
              var t, r;
              return Object(n["c"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!this.audio || !this.newMeta)
                      throw Error("invalid sequence");
                    return (
                      this.blob ||
                        (this.blob = new Blob([this.audio], {
                          type: this.mime,
                        })),
                      [4, Object(a["parseBlob"])(this.blob)]
                    );
                  case 1:
                    if (
                      ((t = n.sent()),
                      (r =
                        !t.common.album &&
                        !t.common.artists &&
                        !t.common.title),
                      r || this.newMeta.picture)
                    ) {
                      if ("mp3" === this.format)
                        this.audio = Object(i["l"])(
                          e.from(this.audio),
                          this.newMeta,
                          t
                        );
                      else {
                        if ("flac" !== this.format)
                          return (
                            console.info(
                              "writing meta for ".concat(
                                this.format,
                                " is not being supported for now"
                              )
                            ),
                            [2]
                          );
                        this.audio = Object(i["k"])(
                          e.from(this.audio),
                          this.newMeta,
                          t
                        );
                      }
                      this.blob = new Blob([this.audio], { type: this.mime });
                    }
                    return [2];
                }
              });
            });
          }),
          (t.prototype.gatherResult = function () {
            var e, t;
            if (!this.newMeta || !this.blob) throw Error("bad sequence");
            return {
              title: this.newMeta.title,
              artist:
                null === (e = this.newMeta.artists) || void 0 === e
                  ? void 0
                  : e.join("; "),
              ext: this.format,
              album: this.newMeta.album,
              picture:
                null === (t = this.image) || void 0 === t ? void 0 : t.url,
              file: URL.createObjectURL(this.blob),
              blob: this.blob,
              mime: this.mime,
            };
          }),
          (t.prototype.decrypt = function () {
            return Object(n["a"])(this, void 0, void 0, function () {
              var e, t;
              return Object(n["c"])(this, function (r) {
                switch (r.label) {
                  case 0:
                    (e = this._getKeyBox()),
                      (this.oriMeta = this._getMetaData()),
                      (this.audio = this._getAudio(e)),
                      (this.format =
                        this.oriMeta.format || Object(i["i"])(this.audio)),
                      (this.mime = i["a"][this.format]),
                      (r.label = 1);
                  case 1:
                    return r.trys.push([1, 4, , 5]), [4, this._buildMeta()];
                  case 2:
                    return r.sent(), [4, this._writeMeta()];
                  case 3:
                    return r.sent(), [3, 5];
                  case 4:
                    return (
                      (t = r.sent()),
                      console.warn("build/write meta failed, skip.", t),
                      [3, 5]
                    );
                  case 5:
                    return [2, this.gatherResult()];
                }
              });
            });
          }),
          t
        );
      })();
    }).call(this, r("1c35").Buffer);
  },
  "730d": function (e, t, r) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "el-dialog",
          {
            attrs: {
              title: "解密设定",
              visible: e.show,
              "custom-class": "um-config-dialog",
              center: "",
            },
            on: {
              close: function (t) {
                return e.cancel();
              },
            },
          },
          [
            r(
              "el-form",
              {
                ref: "form",
                attrs: {
                  rules: e.rules,
                  "status-icon": "",
                  model: e.form,
                  "label-width": "0",
                },
              },
              [
                r("section", [
                  r(
                    "label",
                    [
                      r(
                        "span",
                        [
                          e._v(" JOOX Music · "),
                          r(
                            "Ruby",
                            { attrs: { caption: "Unique Device Identifier" } },
                            [e._v("设备唯一识别码")]
                          ),
                        ],
                        1
                      ),
                      r(
                        "el-form-item",
                        { attrs: { prop: "jooxUUID" } },
                        [
                          r("el-input", {
                            attrs: {
                              type: "text",
                              clearable: "",
                              maxlength: "32",
                              "show-word-limit": "",
                            },
                            model: {
                              value: e.form.jooxUUID,
                              callback: function (t) {
                                e.$set(e.form, "jooxUUID", t);
                              },
                              expression: "form.jooxUUID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r("p", { staticClass: "tip" }, [
                    e._v(
                      " 下载该加密文件的 JOOX 应用所记录的设备唯一识别码。 "
                    ),
                    r("br"),
                    e._v(" 参见： "),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://git.unlock-music.dev/um/joox-crypto/wiki/%E8%8E%B7%E5%8F%96%E8%AE%BE%E5%A4%87-UUID#%E5%89%8D%E8%A8%80",
                        },
                      },
                      [e._v(" 获取设备 UUID · unlock-music/joox-crypto Wiki")]
                    ),
                    e._v("。 "),
                  ]),
                ]),
              ]
            ),
            r(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                r(
                  "el-button",
                  {
                    attrs: { type: "primary", loading: e.saving },
                    on: {
                      click: function (t) {
                        return e.emitConfirm();
                      },
                    },
                  },
                  [e._v("确 定")]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [],
      a = r("1da1"),
      c = (r("96cf"), r("ac1f"), r("00b4"), r("b7c7")),
      o = r("77b3");
    function s(e, t, r) {
      t && /^[\da-fA-F]{32}$/.test(t)
        ? r()
        : r(new Error("无效的 Joox UUID，请参考 Wiki 获取。"));
    }
    var u = { jooxUUID: { validator: s, trigger: "change" } },
      l = {
        components: { Ruby: o["a"] },
        props: { show: { type: Boolean, required: !0 } },
        data: function () {
          return {
            rules: u,
            saving: !1,
            form: { jooxUUID: "" },
            centerDialogVisible: !1,
          };
        },
        mounted: function () {
          var e = this;
          return Object(a["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.resetForm();
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        methods: {
          resetForm: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), c["a"].loadJooxUUID();
                      case 2:
                        e.form.jooxUUID = t.sent;
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          cancel: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.resetForm();
                      case 2:
                        e.$emit("done");
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          emitConfirm: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.saving = !0),
                          (t.next = 3),
                          c["a"].saveJooxUUID(e.form.jooxUUID)
                        );
                      case 3:
                        (e.saving = !1), e.$emit("done");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      d = l,
      f = (r("ddc7"), r("2877")),
      m = Object(f["a"])(d, n, i, !1, null, "670c0e2e", null);
    t["a"] = m.exports;
  },
  "73ec": function (e, t, r) {
    "use strict";
    r.d(t, "e", function () {
      return n;
    }),
      r.d(t, "d", function () {
        return a;
      }),
      r.d(t, "b", function () {
        return o;
      }),
      r.d(t, "c", function () {
        return s;
      }),
      r.d(t, "f", function () {
        return u;
      }),
      r.d(t, "a", function () {
        return l;
      });
    r("99af"), r("d3b7"), r("3ca3"), r("ddb0"), r("2b3d"), r("9861"), r("2ca0");
    var n,
      i = r("9ab4");
    (function (e) {
      (e[(e["ArtistAndTitle"] = 0)] = "ArtistAndTitle"),
        (e[(e["TitleOnly"] = 1)] = "TitleOnly"),
        (e[(e["TitleAndArtist"] = 2)] = "TitleAndArtist"),
        (e[(e["SameAsOriginal"] = 3)] = "SameAsOriginal");
    })(n || (n = {}));
    var a = [
      { key: n.ArtistAndTitle, text: "歌手-歌曲名" },
      { key: n.TitleOnly, text: "歌曲名" },
      { key: n.TitleAndArtist, text: "歌曲名-歌手" },
      { key: n.SameAsOriginal, text: "同源文件名" },
    ];
    function c(e, t) {
      switch (t) {
        case n.TitleOnly:
          return "".concat(e.title, ".").concat(e.ext);
        case n.TitleAndArtist:
          return "".concat(e.title, " - ").concat(e.artist, ".").concat(e.ext);
        case n.SameAsOriginal:
          return "".concat(e.rawFilename, ".").concat(e.ext);
        default:
        case n.ArtistAndTitle:
          return "".concat(e.artist, " - ").concat(e.title, ".").concat(e.ext);
      }
    }
    function o(e, t, r) {
      return Object(i["a"])(this, void 0, void 0, function () {
        var n, a, o;
        return Object(i["c"])(this, function (i) {
          switch (i.label) {
            case 0:
              (n = c(e, t)), (i.label = 1);
            case 1:
              return i.trys.push([1, 3, , 4]), [4, r.getFileHandle(n)];
            case 2:
              return (
                i.sent(),
                (n = "".concat(new Date().getTime(), " - ").concat(n)),
                [3, 4]
              );
            case 3:
              return i.sent(), [3, 4];
            case 4:
              return [4, r.getFileHandle(n, { create: !0 })];
            case 5:
              return (a = i.sent()), [4, a.createWritable()];
            case 6:
              return (o = i.sent()), [4, o.write(e.blob)];
            case 7:
              return i.sent(), [4, o.close()];
            case 8:
              return i.sent(), [2];
          }
        });
      });
    }
    function s(e, t) {
      var r = document.createElement("a");
      (r.href = e.file),
        (r.download = c(e, t)),
        document.body.append(r),
        r.click(),
        r.remove();
    }
    function u(e) {
      var t;
      URL.revokeObjectURL(e.file),
        (null === (t = e.picture) || void 0 === t
          ? void 0
          : t.startsWith("blob:")) && URL.revokeObjectURL(e.picture);
    }
    var l = (function () {
      function e() {
        this.pending = [];
      }
      return (
        (e.prototype.queue = function (e) {
          this.pending.push(e), this.consume();
        }),
        (e.prototype.consume = function () {
          var e = this,
            t = this.pending.shift();
          t &&
            t()
              .then(function () {
                return e.consume;
              })
              .catch(console.error);
        }),
        e
      );
    })();
  },
  "77b3": function (e, t, r) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "ruby",
          { attrs: { title: e.caption } },
          [
            e._t("default"),
            r("rp", [e._v("（")]),
            r("rt", { domProps: { textContent: e._s(e.caption) } }),
            r("rp", [e._v("）")]),
          ],
          2
        );
      },
      i = [],
      a = { name: "Ruby", props: { caption: { type: String, required: !0 } } },
      c = a,
      o = r("2877"),
      s = Object(o["a"])(c, n, i, !1, null, null, null);
    t["a"] = s.exports;
  },
  9224: function (e) {
    e.exports = JSON.parse(
      '{"name":"unlock-music","version":"1.10.6","ext_build":0,"updateInfo":"修正文件过小的情况下酷狗 / QQ解密错误问题","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://git.unlock-music.dev/um/web"},"private":true,"scripts":{"postinstall":"patch-package","serve":"vue-cli-service serve","build":"vue-cli-service build","test":"jest","pretty":"prettier --write src/{**/*,*}.{js,ts,jsx,tsx,vue}","pretty:check":"prettier --check src/{**/*,*}.{js,ts,jsx,tsx,vue}","make-extension":"node ./make-extension.js"},"dependencies":{"@babel/preset-typescript":"^7.16.5","@unlock-music/joox-crypto":"^0.0.1-R5","@xhacker/kgmwasm":"^1.0.0","@xhacker/qmcwasm":"^1.0.0","base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.16.0","crypto-js":"^4.1.1","element-ui":"^2.15.5","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata":"7.9.0","music-metadata-browser":"2.2.7","register-service-worker":"^1.7.2","threads":"^1.6.5","vue":"^2.6.14"},"devDependencies":{"@types/crypto-js":"^4.0.2","@types/jest":"^27.0.3","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","jest":"^27.4.5","patch-package":"^6.4.7","prettier":"2.5.1","sass":"^1.38.1","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"^4.5.4","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.14"}}'
    );
  },
  "97e5": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "c", function () {
        return c;
      }),
      r.d(t, "d", function () {
        return o;
      }),
      r.d(t, "b", function () {
        return s;
      });
    r("d3b7"), r("e9c4"), r("3ca3"), r("ddb0"), r("9861"), r("99af"), r("25f0");
    var n = r("9ab4"),
      i = "https://um-api.ixarea.com";
    function a(e) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var t;
        return Object(n["c"])(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                fetch(i + "/music/app-version", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ Version: e }),
                }),
              ];
            case 1:
              return (t = r.sent()), [4, t.json()];
            case 2:
              return [2, r.sent()];
          }
        });
      });
    }
    function c(e, t, r) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var a, c, o;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (a = i + "/music/qq-cover"),
                (c = new URLSearchParams([
                  ["Title", e],
                  ["Artist", null !== t && void 0 !== t ? t : ""],
                  ["Album", null !== r && void 0 !== r ? r : ""],
                ])),
                [4, fetch("".concat(a, "?").concat(c.toString()))]
              );
            case 1:
              return (o = n.sent()), [4, o.json()];
            case 2:
              return [2, n.sent()];
          }
        });
      });
    }
    function o(e) {
      return Object(n["a"])(this, void 0, Promise, function () {
        var t, r;
        return Object(n["c"])(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = "".concat(i, "/meta/qq-music-raw/").concat(e)),
                [
                  4,
                  fetch(t).then(function (e) {
                    return e.json();
                  }),
                ]
              );
            case 1:
              if (((r = n.sent()), 0 === r.code && 0 === r.req_1.code))
                return [2, r.req_1.data];
              throw new Error("请求信息失败");
          }
        });
      });
    }
    function s(e, t) {
      return (
        void 0 === t && (t = 1),
        "".concat(i, "/music/qq-cover/").concat(t, "/").concat(e)
      );
    }
  },
  "9b2d": function (e, t, r) {
    "use strict";
    (function (e) {
      r.d(t, "a", function () {
        return l;
      });
      r("d3b7"),
        r("ace4"),
        r("5cc6"),
        r("907a"),
        r("9a8c"),
        r("a975"),
        r("735e"),
        r("c1ac"),
        r("d139"),
        r("3a7b"),
        r("d5d6"),
        r("82f8"),
        r("e91f"),
        r("60bd"),
        r("5f96"),
        r("3280"),
        r("3fcc"),
        r("ca91"),
        r("25a1"),
        r("cd26"),
        r("3c5d"),
        r("2954"),
        r("649e"),
        r("219c"),
        r("170b"),
        r("b39a"),
        r("72f7"),
        r("fb6a"),
        r("caad"),
        r("25f0");
      var n = r("9ab4"),
        i = r("0ba7"),
        a = r("cc74"),
        c = 32;
      function o(e) {
        return e >= 32 && e <= 126;
      }
      function s(e) {
        return (e >= 48 && e <= 57) || (e >= 65 && e <= 70);
      }
      function u(t, r) {
        for (var n = 0; n < t.byteLength; n++) t[n] -= r[n % c];
        return e.from(t);
      }
      function l(t, r) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var l, d, f, m, b, p, v, h, g, w, y, j, O, x, _, k;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (d = Uint8Array.bind), [4, Object(a["c"])(t)];
              case 1:
                for (
                  l = new (d.apply(Uint8Array, [void 0, n.sent()]))(),
                    f = l.slice(0, 256),
                    m = e.from("RIFF", "ascii"),
                    b = e.from("WAVEfmt ", "ascii"),
                    p = [],
                    v = c;
                  v < 20 * c;
                  v += c
                )
                  (h = l.slice(v, v + c)),
                    h.every(s) &&
                      ((g = u(f, h)),
                      g.slice(0, 4).compare(m) ||
                        g.slice(8, 16).compare(b) ||
                        ((w = g.readUInt32LE(16)),
                        [16, 18, 40].includes(w) &&
                          ((y = 20 + w),
                          (j = g.slice(y, y + 4)),
                          j.every(o) &&
                            ((O = y + 8 + g.readUInt32LE(y + 4)),
                            (O <= f.byteLength &&
                              ((x = g.slice(O, O + 4)), !x.every(o))) ||
                              p.push(e.from(h).toString("ascii"))))));
                if (p.length <= 0)
                  throw new Error("ERROR: no suitable key discovered");
                return (
                  (_ = e.from(p[0], "ascii")),
                  u(l, _),
                  (k = new Blob([l], { type: "audio/x-wav" })),
                  [4, Object(i["a"])(k, r, "wav", !1)]
                );
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
    }).call(this, r("1c35").Buffer);
  },
  "9c0c": function (e, t, r) {},
  ab8f: function (e, t, r) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "el-upload",
          {
            attrs: {
              "auto-upload": !1,
              "on-change": e.addFile,
              "show-file-list": !1,
              action: "",
              drag: "",
              multiple: "",
            },
          },
          [
            r("i", { staticClass: "el-icon-upload" }),
            r("div", { staticClass: "el-upload__text" }, [
              e._v("将文件拖到此处，或 "),
              r("em", [e._v("点击选择")]),
            ]),
            r(
              "div",
              {
                staticClass: "el-upload__tip",
                attrs: { slot: "tip" },
                slot: "tip",
              },
              [
                r(
                  "div",
                  [
                    e._v(" 仅在浏览器内对文件进行解锁，无需消耗流量 "),
                    r(
                      "el-tooltip",
                      { attrs: { effect: "dark", placement: "top-start" } },
                      [
                        r(
                          "div",
                          { attrs: { slot: "content" }, slot: "content" },
                          [e._v("算法在源代码中已经提供，所有运算都发生在本地")]
                        ),
                        r("i", {
                          staticClass: "el-icon-info",
                          staticStyle: { "font-size": "12px" },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
                r(
                  "div",
                  [
                    e._v(
                      " 工作模式: " +
                        e._s(e.parallel ? "多线程 Worker" : "单线程 Queue") +
                        " "
                    ),
                    r(
                      "el-tooltip",
                      { attrs: { effect: "dark", placement: "top-start" } },
                      [
                        r(
                          "div",
                          { attrs: { slot: "content" }, slot: "content" },
                          [
                            e._v(
                              " 将此工具部署在HTTPS环境下，可以启用Web Worker特性，"
                            ),
                            r("br"),
                            e._v(" 从而更快的利用并行处理完成解锁 "),
                          ]
                        ),
                        r("i", {
                          staticClass: "el-icon-info",
                          staticStyle: { "font-size": "12px" },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            r(
              "transition",
              { attrs: { name: "el-fade-in" } },
              [
                r("el-progress", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.progress_show,
                      expression: "progress_show",
                    },
                  ],
                  staticStyle: { margin: "16px 6px 0 6px" },
                  attrs: {
                    format: e.progress_string,
                    percentage: e.progress_value,
                    "stroke-width": 16,
                    "text-inside": !0,
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [],
      a = r("0565"),
      c = a["a"],
      o = r("2877"),
      s = Object(o["a"])(c, n, i, !1, null, null, null);
    t["a"] = s.exports;
  },
  af85: function (e, t, r) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: e.tableData } },
          [
            r("el-table-column", {
              attrs: { label: "封面" },
              scopedSlots: e._u([
                {
                  key: "default",
                  fn: function (t) {
                    return [
                      r(
                        "el-image",
                        {
                          staticStyle: { width: "100px", height: "100px" },
                          attrs: { src: t.row.picture },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "image-slot el-image__error",
                              attrs: { slot: "error" },
                              slot: "error",
                            },
                            [e._v("暂无封面")]
                          ),
                        ]
                      ),
                    ];
                  },
                },
              ]),
            }),
            r("el-table-column", {
              attrs: { label: "歌曲" },
              scopedSlots: e._u([
                {
                  key: "default",
                  fn: function (t) {
                    return [r("p", [e._v(e._s(t.row.title))])];
                  },
                },
              ]),
            }),
            r("el-table-column", {
              attrs: { label: "歌手" },
              scopedSlots: e._u([
                {
                  key: "default",
                  fn: function (t) {
                    return [r("p", [e._v(e._s(t.row.artist))])];
                  },
                },
              ]),
            }),
            r("el-table-column", {
              attrs: { label: "专辑" },
              scopedSlots: e._u([
                {
                  key: "default",
                  fn: function (t) {
                    return [r("p", [e._v(e._s(t.row.album))])];
                  },
                },
              ]),
            }),
            r("el-table-column", {
              attrs: { label: "操作" },
              scopedSlots: e._u([
                {
                  key: "default",
                  fn: function (t) {
                    return [
                      r("el-button", {
                        attrs: {
                          circle: "",
                          icon: "el-icon-video-play",
                          type: "success",
                        },
                        on: {
                          click: function (r) {
                            return e.handlePlay(t.$index, t.row);
                          },
                        },
                      }),
                      r("el-button", {
                        attrs: { circle: "", icon: "el-icon-download" },
                        on: {
                          click: function (r) {
                            return e.handleDownload(t.row);
                          },
                        },
                      }),
                      r("el-button", {
                        attrs: { circle: "", icon: "el-icon-edit" },
                        on: {
                          click: function (r) {
                            return e.handleEdit(t.row);
                          },
                        },
                      }),
                      r("el-button", {
                        attrs: {
                          circle: "",
                          icon: "el-icon-delete",
                          type: "danger",
                        },
                        on: {
                          click: function (r) {
                            return e.handleDelete(t.$index, t.row);
                          },
                        },
                      }),
                    ];
                  },
                },
              ]),
            }),
          ],
          1
        );
      },
      i = [],
      a = (r("a9e3"), r("a434"), r("73ec")),
      c = {
        name: "PreviewTable",
        props: {
          tableData: { type: Array, required: !0 },
          policy: { type: Number, required: !0 },
        },
        methods: {
          handlePlay: function (e, t) {
            this.$emit("play", t.file);
          },
          handleDelete: function (e, t) {
            Object(a["f"])(t), this.tableData.splice(e, 1);
          },
          handleDownload: function (e) {
            this.$emit("download", e);
          },
          handleEdit: function (e) {
            this.$emit("edit", e);
          },
        },
      },
      o = c,
      s = r("2877"),
      u = Object(s["a"])(o, n, i, !1, null, "8651bfc4", null);
    t["a"] = u.exports;
  },
  b7c7: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return d;
    });
    r("d3b7"), r("e9c4"), r("4fad"), r("2ca0");
    var n = r("9ab4"),
      i = r("675e"),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n["b"])(t, e),
          Object.defineProperty(t, "works", {
            get: function () {
              return (
                "undefined" !== typeof localStorage && localStorage.getItem
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.load = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              var r;
              return Object(n["c"])(this, function (n) {
                if (((r = localStorage.getItem(e)), null === r)) return [2, t];
                try {
                  return [2, JSON.parse(r)];
                } catch (i) {
                  return [2, t];
                }
                return [2];
              });
            });
          }),
          (t.prototype.save = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (r) {
                return localStorage.setItem(e, JSON.stringify(t)), [2];
              });
            });
          }),
          (t.prototype.getAll = function () {
            return Object(n["a"])(this, void 0, Promise, function () {
              var e, t, r, a, c, o, s;
              return Object(n["c"])(this, function (n) {
                for (
                  e = {}, t = 0, r = Object.entries(localStorage);
                  t < r.length;
                  t++
                )
                  if (
                    ((a = r[t]), (c = a[0]), (o = a[1]), c.startsWith(i["a"]))
                  )
                    try {
                      Object.assign(e, ((s = {}), (s[c] = JSON.parse(o)), s));
                    } catch (u) {}
                return [2, e];
              });
            });
          }),
          (t.prototype.setAll = function (e) {
            return Object(n["a"])(this, void 0, Promise, function () {
              var t, r, i, a, c;
              return Object(n["c"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    (t = 0), (r = Object.entries(e)), (n.label = 1);
                  case 1:
                    return t < r.length
                      ? ((i = r[t]),
                        (a = i[0]),
                        (c = i[1]),
                        [4, this.save(a, c)])
                      : [3, 4];
                  case 2:
                    n.sent(), (n.label = 3);
                  case 3:
                    return t++, [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          t
        );
      })(i["b"]),
      c = a,
      o = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n["b"])(t, e),
          Object.defineProperty(t, "works", {
            get: function () {
              var e, t;
              return (
                "undefined" !== typeof chrome &&
                Boolean(
                  null ===
                    (t =
                      null ===
                        (e =
                          null === chrome || void 0 === chrome
                            ? void 0
                            : chrome.storage) || void 0 === e
                        ? void 0
                        : e.local) || void 0 === t
                    ? void 0
                    : t.set
                )
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.load = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (r) {
                return [
                  2,
                  new Promise(function (r) {
                    var n;
                    chrome.storage.local.get(
                      ((n = {}), (n[e] = t), n),
                      function (n) {
                        Object.prototype.hasOwnProperty.call(n, e)
                          ? r(n[e])
                          : r(t);
                      }
                    );
                  }),
                ];
              });
            });
          }),
          (t.prototype.save = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (r) {
                return [
                  2,
                  new Promise(function (r) {
                    var n;
                    chrome.storage.local.set(((n = {}), (n[e] = t), n), r);
                  }),
                ];
              });
            });
          }),
          (t.prototype.getAll = function () {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (e) {
                return [
                  2,
                  new Promise(function (e) {
                    chrome.storage.local.get(null, function (t) {
                      for (
                        var r = {}, n = 0, a = Object.entries(t);
                        n < a.length;
                        n++
                      ) {
                        var c = a[n],
                          o = c[0],
                          s = c[1];
                        o.startsWith(i["a"]) && (r[o] = s);
                      }
                      e(r);
                    });
                  }),
                ];
              });
            });
          }),
          (t.prototype.setAll = function (e) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (t) {
                return [
                  2,
                  new Promise(function (t) {
                    chrome.storage.local.set(e, t);
                  }),
                ];
              });
            });
          }),
          t
        );
      })(i["b"]),
      s = o,
      u = r("efc0");
    function l() {
      return s.works ? new s() : c.works ? new c() : new u["a"]();
    }
    var d = l();
  },
  c486: function (e, t, r) {},
  cc74: function (e, t, r) {
    "use strict";
    (function (e) {
      r.d(t, "m", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return g;
        }),
        r.d(t, "i", function () {
          return w;
        }),
        r.d(t, "c", function () {
          return y;
        }),
        r.d(t, "d", function () {
          return j;
        }),
        r.d(t, "f", function () {
          return O;
        }),
        r.d(t, "e", function () {
          return x;
        }),
        r.d(t, "l", function () {
          return _;
        }),
        r.d(t, "k", function () {
          return k;
        }),
        r.d(t, "h", function () {
          return A;
        }),
        r.d(t, "g", function () {
          return U;
        }),
        r.d(t, "j", function () {
          return T;
        });
      r("d3b7"),
        r("fb6a"),
        r("3ca3"),
        r("ddb0"),
        r("2b3d"),
        r("9861"),
        r("ac1f"),
        r("1276"),
        r("498a"),
        r("2ca0"),
        r("159b");
      var n = r("9ab4"),
        i = r("7907"),
        a = r.n(i),
        c = r("b686"),
        o = r.n(c),
        s = /[ ]?[,;/_、][ ]?/,
        u = [102, 76, 97, 67],
        l = [73, 68, 51],
        d = [79, 103, 103, 83],
        f = [102, 116, 121, 112],
        m = [
          48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206,
          108,
        ],
        b = [82, 73, 70, 70],
        p = [255, 241],
        v = [70, 82, 77, 56],
        h = {
          mp3: "audio/mpeg",
          flac: "audio/flac",
          m4a: "audio/mp4",
          ogg: "audio/ogg",
          wma: "audio/x-ms-wma",
          wav: "audio/x-wav",
          dff: "audio/x-dff",
        };
      function g(e, t) {
        return (
          !(t.length > e.length) &&
          t.every(function (t, r) {
            return t === e[r];
          })
        );
      }
      function w(e, t) {
        return (
          void 0 === t && (t = "mp3"),
          g(e, l)
            ? "mp3"
            : g(e, u)
            ? "flac"
            : g(e, d)
            ? "ogg"
            : e.length >= 4 + f.length && g(e.slice(4), f)
            ? "m4a"
            : g(e, b)
            ? "wav"
            : g(e, m)
            ? "wma"
            : g(e, p)
            ? "aac"
            : g(e, v)
            ? "dff"
            : t
        );
      }
      function y(e) {
        return e.arrayBuffer
          ? e.arrayBuffer()
          : new Promise(function (t, r) {
              var n = new FileReader();
              (n.onload = function (e) {
                var n,
                  i =
                    null === (n = e.target) || void 0 === n ? void 0 : n.result;
                i ? t(i) : r("read file failed");
              }),
                n.readAsArrayBuffer(e);
            });
      }
      function j(e) {
        var t;
        return (null === (t = e.common) || void 0 === t ? void 0 : t.picture) &&
          e.common.picture.length > 0
          ? URL.createObjectURL(
              new Blob([e.common.picture[0].data], {
                type: e.common.picture[0].format,
              })
            )
          : "";
      }
      function O(e, t, r, n) {
        void 0 === n && (n = "-");
        var i = { title: null !== t && void 0 !== t ? t : "", artist: r },
          a = e.split(n);
        return (
          a.length > 1
            ? ((!i.artist ||
                i.artist.split(s).length < a[0].trim().split(s).length) &&
                (i.artist = a[0].trim()),
              i.title || (i.title = a[1].trim()))
            : 1 === a.length && (i.title || (i.title = a[0].trim())),
          i
        );
      }
      function x(e) {
        return Object(n["a"])(this, void 0, Promise, function () {
          var t, r, i, a, c;
          return Object(n["c"])(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 4, , 5]), [4, fetch(e)];
              case 1:
                return (
                  (t = n.sent()),
                  (r = t.headers.get("Content-Type")),
                  (null === r || void 0 === r ? void 0 : r.startsWith("image/"))
                    ? [4, t.arrayBuffer()]
                    : [3, 3]
                );
              case 2:
                return (
                  (i = n.sent()),
                  (a = URL.createObjectURL(new Blob([i], { type: r }))),
                  [2, { buffer: i, url: a, mime: r }]
                );
              case 3:
                return [3, 5];
              case 4:
                return (c = n.sent()), console.warn(c), [3, 5];
              case 5:
                return [2];
            }
          });
        });
      }
      function _(e, t, r) {
        var n = new a.a(e),
          i =
            r.native["ID3v2.4"] ||
            r.native["ID3v2.3"] ||
            r.native["ID3v2.2"] ||
            [];
        i.forEach(function (e) {
          if ("TPE1" !== e.id && "TIT2" !== e.id && "TALB" !== e.id)
            try {
              n.setFrame(e.id, e.value);
            } catch (t) {
              console.warn("failed to write ID3 tag '".concat(e.id, "'"));
            }
        });
        var c = r.common;
        return (
          n
            .setFrame(
              "TPE1",
              (null === c || void 0 === c ? void 0 : c.artists) ||
                t.artists ||
                []
            )
            .setFrame(
              "TIT2",
              (null === c || void 0 === c ? void 0 : c.title) || t.title
            )
            .setFrame(
              "TALB",
              (null === c || void 0 === c ? void 0 : c.album) || t.album || ""
            ),
          t.picture &&
            n.setFrame("APIC", {
              type: 3,
              data: t.picture,
              description: t.picture_desc || "",
            }),
          n.addTag()
        );
      }
      function k(t, r, n) {
        var i = new o.a(t),
          a = n.common;
        return (
          a.title ||
            a.album ||
            !a.artists ||
            (i.setTag("TITLE=" + r.title),
            i.setTag("ALBUM=" + r.album),
            r.artists &&
              (i.removeTag("ARTIST"),
              r.artists.forEach(function (e) {
                return i.setTag("ARTIST=" + e);
              }))),
          r.picture && i.importPictureFromBuffer(e.from(r.picture)),
          i.save()
        );
      }
      function A(e, t, r) {
        var n = new a.a(e),
          i =
            r.native["ID3v2.4"] ||
            r.native["ID3v2.3"] ||
            r.native["ID3v2.2"] ||
            [];
        i.forEach(function (e) {
          if (
            "TPE1" !== e.id &&
            "TIT2" !== e.id &&
            "TALB" !== e.id &&
            "TPE2" !== e.id &&
            "TCON" !== e.id
          )
            try {
              n.setFrame(e.id, e.value);
            } catch (t) {
              throw new Error("failed to write ID3 tag '".concat(e.id, "'"));
            }
        });
        var c = r.common;
        return (
          n
            .setFrame(
              "TPE1",
              (null === t || void 0 === t ? void 0 : t.artists) ||
                c.artists ||
                []
            )
            .setFrame(
              "TIT2",
              (null === t || void 0 === t ? void 0 : t.title) || c.title
            )
            .setFrame(
              "TALB",
              (null === t || void 0 === t ? void 0 : t.album) || c.album || ""
            )
            .setFrame(
              "TPE2",
              (null === t || void 0 === t ? void 0 : t.albumartist) ||
                c.albumartist ||
                ""
            )
            .setFrame(
              "TCON",
              (null === t || void 0 === t ? void 0 : t.genre) || c.genre || []
            ),
          t.picture &&
            n.setFrame("APIC", {
              type: 3,
              data: t.picture,
              description: t.picture_desc || "",
            }),
          n.addTag()
        );
      }
      function U(t, r, n) {
        var i = new o.a(t),
          a = n.common;
        return (
          r.title &&
            (a.title && i.removeTag("TITLE"), i.setTag("TITLE=" + r.title)),
          r.album &&
            (a.album && i.removeTag("ALBUM"), i.setTag("ALBUM=" + r.album)),
          r.albumartist &&
            (a.albumartist && i.removeTag("ALBUMARTIST"),
            i.setTag("ALBUMARTIST=" + r.albumartist)),
          r.artists &&
            (a.artists && i.removeTag("ARTIST"),
            r.artists.forEach(function (e) {
              return i.setTag("ARTIST=" + e);
            })),
          r.genre &&
            (a.genre && i.removeTag("GENRE"),
            r.genre.forEach(function (e) {
              return i.setTag("GENRE=" + e);
            })),
          r.picture && i.importPictureFromBuffer(e.from(r.picture)),
          i.save()
        );
      }
      function T(e) {
        var t = e.lastIndexOf(".");
        return {
          ext: e.substring(t + 1).toLowerCase(),
          name: e.substring(0, t),
        };
      }
    }).call(this, r("1c35").Buffer);
  },
  cd49: function (e, t, r) {
    "use strict";
    r.r(t);
    r("9e1f"), r("450d");
    var n = r("6ed5"),
      i = r.n(n),
      a = (r("46a1"), r("e5f2")),
      c = r.n(a),
      o = (r("6b30"), r("c284")),
      s = r.n(o),
      u = (r("0c67"), r("299c")),
      l = r.n(u),
      d = (r("b5d8"), r("f494")),
      f = r.n(d),
      m = (r("560b"), r("dcdc")),
      b = r.n(m),
      p = (r("f225"), r("89a9")),
      v = r.n(p),
      h = (r("f4f9"), r("c2cc")),
      g = r.n(h),
      w = (r("7a0f"), r("0f6c")),
      y = r.n(w),
      j = (r("aaa5"), r("a578")),
      O = r.n(j),
      x = (r("adec"), r("3d2d")),
      _ = r.n(x),
      k = (r("bdc7"), r("aa2f")),
      A = r.n(k),
      U = (r("de31"), r("c69e")),
      T = r.n(U),
      R = (r("5466"), r("ecdf")),
      P = r.n(R),
      E = (r("38a0"), r("ad41")),
      D = r.n(E),
      L = (r("10cb"), r("f3ad")),
      C = r.n(L),
      F = (r("eca7"), r("3787")),
      S = r.n(F),
      B = (r("425f"), r("4105")),
      I = r.n(B),
      M = (r("a7cc"), r("df33")),
      q = r.n(M),
      N = (r("1951"), r("eedf")),
      $ = r.n(N),
      J = (r("acb6"), r("c673")),
      W = r.n(J),
      H = (r("fd71"), r("a447")),
      G = r.n(H),
      Q = (r("e260"), r("e6cf"), r("cca6"), r("a79d"), r("2b0e")),
      z = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "el-container",
          { attrs: { id: "app" } },
          [
            r("el-main", [r("Home")], 1),
            r("el-footer", { attrs: { id: "app-footer" } }, [
              r("div", [
                r(
                  "a",
                  {
                    attrs: {
                      href: "https://git.unlock-music.dev/um/web",
                      target: "_blank",
                    },
                  },
                  [e._v("音乐解锁")]
                ),
                e._v("(" + e._s(e.version) + ") ：移除已购音乐的加密保护。 "),
                r(
                  "a",
                  {
                    attrs: {
                      href: "https://git.unlock-music.dev/um/web/wiki/使用提示",
                      target: "_blank",
                    },
                  },
                  [e._v("使用提示")]
                ),
              ]),
              r("div", [
                e._v(
                  " 目前支持 网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 酷狗音乐(kgm, kgma), 虾米音乐(xm), 酷我音乐(.kwm) "
                ),
                r(
                  "a",
                  {
                    attrs: {
                      href: "https://git.unlock-music.dev/um/web/src/branch/master/README.md",
                      target: "_blank",
                    },
                  },
                  [e._v("更多")]
                ),
                e._v("。 "),
              ]),
              r("div", [
                // r("span", [
                //   e._v(
                //     "Copyright © 2019 - " +
                //       e._s(new Date().getFullYear()) +
                //       " MengYX"
                //   ),
                // ]),
                // e._v(" 音乐解锁使用 "),
                r(
                  "a",
                  {
                    attrs: {
                      href: "https://git.unlock-music.dev/um/web/src/branch/master/LICENSE",
                      target: "_blank",
                    },
                  },
                  [e._v("MIT许可协议")]
                ),
                e._v(" 开放源代码 "),
              ]),
            ]),
          ],
          1
        );
      },
      V = [],
      K = r("1da1"),
      X = (r("96cf"), r("99af"), r("ab8f")),
      Y = r("af85"),
      Z = r("9224"),
      ee = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          [
            r("file-selector", {
              on: { error: e.showFail, success: e.showSuccess },
            }),
            r(
              "div",
              { attrs: { id: "app-control" } },
              [
                r(
                  "el-row",
                  { staticClass: "mb-3" },
                  [
                    r("span", [e._v("歌曲命名格式：")]),
                    e._l(e.FilenamePolicies, function (t) {
                      return r(
                        "el-radio",
                        {
                          key: t.key,
                          attrs: { label: t.key },
                          model: {
                            value: e.filename_policy,
                            callback: function (t) {
                              e.filename_policy = t;
                            },
                            expression: "filename_policy",
                          },
                        },
                        [e._v(" " + e._s(t.text) + " ")]
                      );
                    }),
                  ],
                  2
                ),
                r(
                  "el-row",
                  [
                    r("edit-dialog", {
                      attrs: {
                        show: e.showEditDialog,
                        picture: e.editing_data.picture,
                        title: e.editing_data.title,
                        artist: e.editing_data.artist,
                        album: e.editing_data.album,
                        albumartist: e.editing_data.albumartist,
                        genre: e.editing_data.genre,
                      },
                      on: {
                        cancel: function (t) {
                          e.showEditDialog = !1;
                        },
                        ok: e.handleEdit,
                      },
                    }),
                    r("config-dialog", {
                      attrs: { show: e.showConfigDialog },
                      on: {
                        done: function (t) {
                          e.showConfigDialog = !1;
                        },
                      },
                    }),
                    r(
                      "el-tooltip",
                      {
                        staticClass: "item",
                        attrs: { effect: "dark", placement: "top" },
                      },
                      [
                        r(
                          "div",
                          { attrs: { slot: "content" }, slot: "content" },
                          [
                            r("span", [
                              e._v(" 部分解密方案需要设定解密参数。 "),
                            ]),
                          ]
                        ),
                        r(
                          "el-button",
                          {
                            attrs: { icon: "el-icon-s-tools", plain: "" },
                            on: {
                              click: function (t) {
                                e.showConfigDialog = !0;
                              },
                            },
                          },
                          [e._v("解密设定")]
                        ),
                      ],
                      1
                    ),
                    r(
                      "el-button",
                      {
                        attrs: { icon: "el-icon-download", plain: "" },
                        on: { click: e.handleDownloadAll },
                      },
                      [e._v("下载全部")]
                    ),
                    r(
                      "el-button",
                      {
                        attrs: {
                          icon: "el-icon-delete",
                          plain: "",
                          type: "danger",
                        },
                        on: { click: e.handleDeleteAll },
                      },
                      [e._v("清除全部")]
                    ),
                    r(
                      "el-tooltip",
                      {
                        staticClass: "item",
                        attrs: { effect: "dark", placement: "top-start" },
                      },
                      [
                        r(
                          "div",
                          { attrs: { slot: "content" }, slot: "content" },
                          [
                            e.instant_save
                              ? r("span", [
                                  e._v(
                                    "工作模式: " +
                                      e._s(
                                        e.dir
                                          ? "写入本地文件系统"
                                          : "调用浏览器下载"
                                      )
                                  ),
                                ])
                              : r("span", [
                                  e._v(
                                    " 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"
                                  ),
                                  r("br"),
                                  e._v(
                                    " 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 "
                                  ),
                                ]),
                          ]
                        ),
                        r(
                          "el-checkbox",
                          {
                            staticClass: "ml-2",
                            attrs: { type: "success", border: "" },
                            model: {
                              value: e.instant_save,
                              callback: function (t) {
                                e.instant_save = t;
                              },
                              expression: "instant_save",
                            },
                          },
                          [e._v("立即保存")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            r("audio", {
              attrs: {
                autoplay: e.playing_auto,
                src: e.playing_url,
                controls: "",
              },
            }),
            r("PreviewTable", {
              staticClass: "table-content",
              attrs: { policy: e.filename_policy, "table-data": e.tableData },
              on: {
                download: e.saveFile,
                edit: e.editFile,
                play: e.changePlaying,
              },
            }),
          ],
          1
        );
      },
      te = [],
      re = r("321b"),
      ne = re["a"],
      ie = r("2877"),
      ae = Object(ie["a"])(ne, ee, te, !1, null, null, null),
      ce = ae.exports,
      oe = r("97e5"),
      se = {
        name: "app",
        components: { FileSelector: X["a"], PreviewTable: Y["a"], Home: ce },
        data: function () {
          return { version: Z.version };
        },
        created: function () {
          var e = this;
          this.$nextTick(function () {
            return e.finishLoad();
          });
        },
        methods: {
          finishLoad: function () {
            var e = this;
            return Object(K["a"])(
              regeneratorRuntime.mark(function t() {
                var r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = document.getElementById("loader-mask")),
                            r && r.remove(),
                            (t.prev = 2),
                            (t.next = 5),
                            Object(oe["a"])(e.version)
                          );
                        case 5:
                        //   (n = t.sent), (t.next = 11);
                          (n = t.sent), (t.next = 12);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t["catch"](2)),
                            console.warn("check version info failed", t.t0);
                        case 11:
                          n &&
                          (n.HttpsFound ||
                            (n.Found && "https:" !== window.location.protocol))
                            ? e.$notify.warning({
                                title: "发现更新",
                                message: "发现新版本 v"
                                  .concat(n.Version, "<br/>更新详情：")
                                  .concat(
                                    n.Detail,
                                    '<br/> <a target="_blank" href="'
                                  )
                                  .concat(n.URL, '">获取更新</a>'),
                                dangerouslyUseHTMLString: !0,
                                duration: 5000,
                                position: "top-left",
                              })
                            : e.$notify.info({
                                title: "离线使用",
                                message:
                                  '<div>\n                        <p>我们使用 PWA 技术，无网络也能使用</p>\n                        <div class="update-info">\n                            <div class="update-title">最近更新</div>\n                            <div class="update-content"> '.concat(
                                    Z.updateInfo,
                                    ' </div>\n                        </div>\n                        <a target="_blank" href="https://git.unlock-music.dev/um/web/wiki/使用提示">使用提示</a>\n                    </div>'
                                  ),
                                dangerouslyUseHTMLString: !0,
                                duration: 5000,
                                position: "top-left",
                              });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 8]]
                );
              })
            )();
          },
        },
      },
      ue = se,
      le = (r("5c0b"), Object(ie["a"])(ue, z, V, !1, null, null, null)),
      de = le.exports,
      fe = r("9483");
    "https:" === window.location.protocol &&
      Object(fe["a"])("".concat("", "mypage/service-worker.js"), {
        ready: function () {
          console.log("App is being served from cache by a service worker.");
        },
        registered: function () {
          console.log("Service worker has been registered.");
        },
        cached: function () {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function () {
          console.log("New content is downloading.");
        },
        updated: function () {
          console.log("New content is available."), window.location.reload();
        },
        offline: function () {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function (e) {
          console.error("Error during service worker registration:", e);
        },
      }),
      Q["default"].use(G.a),
      Q["default"].use(W.a),
      Q["default"].use($.a),
      Q["default"].use(q.a),
      Q["default"].use(I.a),
      Q["default"].use(S.a),
      Q["default"].use(C.a),
      Q["default"].use(D.a),
      Q["default"].use(P.a),
      Q["default"].use(T.a),
      Q["default"].use(A.a),
      Q["default"].use(_.a),
      Q["default"].use(O.a),
      Q["default"].use(y.a),
      Q["default"].use(g.a),
      Q["default"].use(v.a),
      Q["default"].use(b.a),
      Q["default"].use(f.a),
      Q["default"].use(l.a),
      Q["default"].use(s.a),
      (Q["default"].prototype.$notify = c.a),
      (Q["default"].prototype.$confirm = i.a.confirm),
      (Q["default"].config.productionTip = !1),
      new Q["default"]({
        render: function (e) {
          return e(de);
        },
      }).$mount("#app");
  },
  d4ec: function (e, t, r) {
    "use strict";
    var n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "el-dialog",
          {
            attrs: {
              title: "音乐标签编辑",
              visible: e.show,
              "custom-class": "um-edit-dialog",
              center: "",
            },
            on: {
              close: function (t) {
                return e.cancel();
              },
            },
          },
          [
            r(
              "el-form",
              {
                ref: "form",
                attrs: { "status-icon": "", model: e.form, "label-width": "0" },
              },
              [
                r("section", [
                  r(
                    "div",
                    { staticClass: "music-cover" },
                    [
                      r(
                        "el-image",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editPicture,
                              expression: "!editPicture",
                            },
                          ],
                          attrs: { src: e.imgFile.url || e.picture },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass: "image-slot el-image__error",
                              attrs: { slot: "error" },
                              slot: "error",
                            },
                            [e._v("暂无封面")]
                          ),
                        ]
                      ),
                      r(
                        "el-upload",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.editPicture,
                              expression: "editPicture",
                            },
                          ],
                          attrs: {
                            "auto-upload": !1,
                            "on-change": e.addFile,
                            "on-remove": e.rmvFile,
                            "show-file-list": !0,
                            limit: 1,
                            "list-type": "picture",
                            action: "",
                            drag: "",
                          },
                        },
                        [
                          r("i", { staticClass: "el-icon-upload" }),
                          r("div", { staticClass: "el-upload__text" }, [
                            e._v("将新图片拖到此处，或"),
                            r("em", [e._v("点击选择")]),
                            r("br"),
                            e._v("以替换自动匹配的图片"),
                          ]),
                          r(
                            "div",
                            {
                              staticClass: "el-upload__tip",
                              attrs: { slot: "tip" },
                              slot: "tip",
                            },
                            [e._v(" 新拖到此处的图片将覆盖原始图片 ")]
                          ),
                        ]
                      ),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editPicture,
                          "el-icon-check": e.editPicture,
                        },
                        on: { click: e.changeCover },
                      }),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "edit-item" },
                    [
                      r("div", { staticClass: "label" }, [e._v("标题")]),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editTitle,
                              expression: "!editTitle",
                            },
                          ],
                          staticClass: "value",
                        },
                        [e._v(e._s(e.title))]
                      ),
                      r("el-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.editTitle,
                            expression: "editTitle",
                          },
                        ],
                        staticClass: "input",
                        attrs: { size: "small" },
                        model: {
                          value: e.title,
                          callback: function (t) {
                            e.title = t;
                          },
                          expression: "title",
                        },
                      }),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editTitle,
                          "el-icon-check": e.editTitle,
                        },
                        on: {
                          click: function (t) {
                            e.editTitle = !e.editTitle;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "edit-item" },
                    [
                      r("div", { staticClass: "label" }, [e._v("艺术家")]),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editArtist,
                              expression: "!editArtist",
                            },
                          ],
                          staticClass: "value",
                        },
                        [e._v(e._s(e.artist))]
                      ),
                      r("el-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.editArtist,
                            expression: "editArtist",
                          },
                        ],
                        staticClass: "input",
                        attrs: { size: "small" },
                        model: {
                          value: e.artist,
                          callback: function (t) {
                            e.artist = t;
                          },
                          expression: "artist",
                        },
                      }),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editArtist,
                          "el-icon-check": e.editArtist,
                        },
                        on: {
                          click: function (t) {
                            e.editArtist = !e.editArtist;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "edit-item" },
                    [
                      r("div", { staticClass: "label" }, [e._v("专辑")]),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editAlbum,
                              expression: "!editAlbum",
                            },
                          ],
                          staticClass: "value",
                        },
                        [e._v(e._s(e.album))]
                      ),
                      r("el-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.editAlbum,
                            expression: "editAlbum",
                          },
                        ],
                        staticClass: "input",
                        attrs: { size: "small" },
                        model: {
                          value: e.album,
                          callback: function (t) {
                            e.album = t;
                          },
                          expression: "album",
                        },
                      }),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editAlbum,
                          "el-icon-check": e.editAlbum,
                        },
                        on: {
                          click: function (t) {
                            e.editAlbum = !e.editAlbum;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "edit-item" },
                    [
                      r("div", { staticClass: "label" }, [e._v("专辑艺术家")]),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editAlbumartist,
                              expression: "!editAlbumartist",
                            },
                          ],
                          staticClass: "value",
                        },
                        [e._v(e._s(e.albumartist))]
                      ),
                      r("el-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.editAlbumartist,
                            expression: "editAlbumartist",
                          },
                        ],
                        staticClass: "input",
                        attrs: { size: "small" },
                        model: {
                          value: e.albumartist,
                          callback: function (t) {
                            e.albumartist = t;
                          },
                          expression: "albumartist",
                        },
                      }),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editAlbumartist,
                          "el-icon-check": e.editAlbumartist,
                        },
                        on: {
                          click: function (t) {
                            e.editAlbumartist = !e.editAlbumartist;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "edit-item" },
                    [
                      r("div", { staticClass: "label" }, [e._v("风格")]),
                      r(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.editGenre,
                              expression: "!editGenre",
                            },
                          ],
                          staticClass: "value",
                        },
                        [e._v(e._s(e.genre))]
                      ),
                      r("el-input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.editGenre,
                            expression: "editGenre",
                          },
                        ],
                        staticClass: "input",
                        attrs: { size: "small" },
                        model: {
                          value: e.genre,
                          callback: function (t) {
                            e.genre = t;
                          },
                          expression: "genre",
                        },
                      }),
                      r("i", {
                        class: {
                          "el-icon-edit": !e.editGenre,
                          "el-icon-check": e.editGenre,
                        },
                        on: {
                          click: function (t) {
                            e.editGenre = !e.editGenre;
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  r("p", { staticClass: "tip" }, [
                    e._v(
                      " 为了节省您设备的资源，请在确定前充分检查，避免反复修改。"
                    ),
                    r("br"),
                    e._v(" 直接关闭此对话框不会保留所作的更改。 "),
                  ]),
                ]),
              ]
            ),
            r(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                r(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function (t) {
                        return e.emitConfirm();
                      },
                    },
                  },
                  [e._v("确 定")]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [],
      a = r("1da1"),
      c =
        (r("d3b7"),
        r("3ca3"),
        r("ddb0"),
        r("2b3d"),
        r("9861"),
        r("96cf"),
        r("77b3")),
      o = {
        components: { Ruby: c["a"] },
        props: {
          show: { type: Boolean, required: !0 },
          picture: { type: void 0 | String, required: !0 },
          title: { type: void 0 | String, required: !0 },
          artist: { type: void 0 | String, required: !0 },
          album: { type: void 0 | String, required: !0 },
          albumartist: { type: void 0 | String, required: !0 },
          genre: { type: void 0 | String, required: !0 },
        },
        data: function () {
          return {
            form: {},
            imgFile: { tmpblob: void 0, blob: void 0, url: void 0 },
            editPicture: !1,
            editTitle: !1,
            editArtist: !1,
            editAlbum: !1,
            editAlbumartist: !1,
            editGenre: !1,
          };
        },
        mounted: function () {
          var e = this;
          return Object(a["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      e.refreshForm();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        methods: {
          addFile: function (e) {
            this.imgFile.tmpblob = e.raw;
          },
          rmvFile: function () {
            this.imgFile.tmpblob = void 0;
          },
          changeCover: function () {
            (this.editPicture = !this.editPicture),
              !this.editPicture &&
                this.imgFile.tmpblob &&
                ((this.imgFile.blob = this.imgFile.tmpblob),
                this.imgFile.url && URL.revokeObjectURL(this.imgFile.url),
                (this.imgFile.url = URL.createObjectURL(this.imgFile.blob)));
          },
          refreshForm: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.imgFile.url && URL.revokeObjectURL(e.imgFile.url),
                          (e.imgFile = {
                            tmpblob: void 0,
                            blob: void 0,
                            url: void 0,
                          }),
                          (e.editPicture = !1),
                          (e.editTitle = !1),
                          (e.editArtist = !1),
                          (e.editAlbum = !1),
                          (e.editAlbumartist = !1),
                          (e.editGenre = !1);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          cancel: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.refreshForm(), e.$emit("cancel");
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          emitConfirm: function () {
            var e = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.editPicture && e.changeCover(),
                          e.imgFile.url && URL.revokeObjectURL(e.imgFile.url),
                          e.$emit("ok", {
                            picture: e.imgFile.blob,
                            title: e.title,
                            artist: e.artist,
                            album: e.album,
                            albumartist: e.albumartist,
                            genre: e.genre,
                          });
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      s = o,
      u = (r("64bb"), r("2877")),
      l = Object(u["a"])(s, n, i, !1, null, "701d8fe2", null);
    t["a"] = l.exports;
  },
  ddc7: function (e, t, r) {
    "use strict";
    r("4a5a");
  },
  efc0: function (e, t, r) {
    "use strict";
    r("d3b7"), r("ddb0"), r("4ec9"), r("3ca3"), r("159b"), r("4fad");
    var n = r("9ab4"),
      i = r("675e"),
      a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.values = new Map()), t;
        }
        return (
          Object(n["b"])(t, e),
          (t.prototype.load = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (r) {
                return this.values.has(e) ? [2, this.values.get(e)] : [2, t];
              });
            });
          }),
          (t.prototype.save = function (e, t) {
            return Object(n["a"])(this, void 0, Promise, function () {
              return Object(n["c"])(this, function (r) {
                return this.values.set(e, t), [2];
              });
            });
          }),
          (t.prototype.getAll = function () {
            return Object(n["a"])(this, void 0, Promise, function () {
              var e;
              return Object(n["c"])(this, function (t) {
                return (
                  (e = {}),
                  this.values.forEach(function (t, r) {
                    var n;
                    Object.assign(e, ((n = {}), (n[r] = t), n));
                  }),
                  [2, e]
                );
              });
            });
          }),
          (t.prototype.setAll = function (e) {
            return Object(n["a"])(this, void 0, Promise, function () {
              var t, r, i, a, c;
              return Object(n["c"])(this, function (n) {
                for (t = 0, r = Object.entries(e); t < r.length; t++)
                  (i = r[t]), (a = i[0]), (c = i[1]), this.values.set(a, c);
                return [2];
              });
            });
          }),
          t
        );
      })(i["b"]);
    t["a"] = a;
  },
});

