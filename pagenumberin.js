function loophalaman(a){var e="";nomerkiri=parseInt(numshowpage/2),nomerkiri==numshowpage-nomerkiri&&(numshowpage=2*nomerkiri+1),mulai=nomerhal-nomerkiri,mulai<1&&(mulai=1),maksimal=parseInt(a/postperpage)+1,maksimal-1==a/postperpage&&(maksimal-=1),akhir=mulai+numshowpage-1,akhir>maksimal&&(akhir=maksimal),e+="<span class='showpageOf'>Page "+nomerhal+" of "+maksimal+"</span>";var s=parseInt(nomerhal)-1;nomerhal>1&&(e+=2==nomerhal?"page"==jenis?'<span class="showpage"><a href="'+home_page+'">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>":"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+s+');return false">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+upPageWord+"</a></span>"),mulai>1&&(e+="page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>'),mulai>2&&(e+="");for(var r=mulai;r<=akhir;r++)e+=nomerhal==r?'<span class="showpagePoint">'+r+"</span>":1==r?"page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>':"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+r+');return false">'+r+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+r+"</a></span>";akhir<maksimal-1&&(e+=""),akhir<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+"</a></span>");var n=parseInt(nomerhal)+1;nomerhal<maksimal&&(e+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+n+');return false">'+downPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+n+');return false">'+downPageWord+"</a></span>");for(var t=document.getElementsByName("pageArea"),l=document.getElementById("blog-pager"),p=0;p<t.length;p++)t[p].innerHTML=e;t&&t.length>0&&(e=""),l&&(l.innerHTML=e)}function hitungtotaldata(a){var e=a.feed,s=parseInt(e.openSearch$totalResults.$t,10);loophalaman(s)}function halamanblogger(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max"))),-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(jenis="page",nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')):(jenis="label",-1==a.indexOf("&max-results=")&&(postperpage=20),nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')))}function redirectpage(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function redirectlabel(a){jsonstart=(a-1)*postperpage,nopage=a;var e=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(s)}function finddatepost(a){post=a.feed.entry[0];var e=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),s=encodeURIComponent(e);if("page"==jenis)var r="/search?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;else var r="/search/label/"+lblname1+"?updated-max="+s+"&max-results="+postperpage+"#PageNo="+nopage;location.href=r}var nopage,jenis,nomerhal,lblname1;halamanblogger();var _0x6de6=["\x73\x63\x72\x65\x65\x6E\x20\x61\x6E\x64\x20\x28\x6D\x69\x6E\x2D\x77\x69\x64\x74\x68\x3A\x20\x36\x30\x65\x6D\x29","\x6D\x61\x74\x63\x68\x4D\x65\x64\x69\x61","\x6D\x61\x74\x63\x68\x65\x73","\x6F\x6E\x6C\x6F\x61\x64","\x73\x65\x63\x75\x72\x65","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6E\x61\x6D\x69\x6E\x61\x6B\x69\x6B\x79\x2E\x63\x6F\x6D","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x6C","\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x54\x65\x6D\x70\x6C\x61\x74\x65\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6E\x61\x6D\x69\x6E\x61\x6B\x69\x6B\x79\x2E\x63\x6F\x6D\x27\x20\x72\x65\x6C\x3D\x27\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x20\x74\x69\x74\x6C\x65\x3D\x27\x4E\x61\x6D\x69\x6E\x61\x27\x3E\x4E\x61\x6D\x69\x6E\x61\x3C\x2F\x61\x3E"];var mql=window[_0x6de6[1]](_0x6de6[0]);if(mql[_0x6de6[2]]){window[_0x6de6[3]]= function(){var _0x5d1fx2=document[_0x6de6[5]](_0x6de6[4]);if(_0x5d1fx2== null){window[_0x6de6[7]][_0x6de6[6]]= _0x6de6[8]};_0x5d1fx2[_0x6de6[9]](_0x6de6[6],_0x6de6[8]);_0x5d1fx2[_0x6de6[9]](_0x6de6[10],_0x6de6[11]);_0x5d1fx2[_0x6de6[12]]= _0x6de6[13]}}
