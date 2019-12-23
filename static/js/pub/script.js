function name_to_path(a,n){for(var e in n)n[e]=a+n[e];return n}var sounds={basses:name_to_path("/audio/basses/",["bass.wav"]),edmSounds:name_to_path("/audio/edm/",["wave.wav","tick.wav","ping.wav","pinch.wav","echo.wav","drum.wav","drop.wav"]),guitars:name_to_path("/audio/guitars/",["mellow-1.wav","mellow-2.wav","mellow-3.wav"]),hats:name_to_path("/audio/hats/",["ch.wav","oh.wav"]),kicks:name_to_path("/audio/kicks/",["kick.wav"]),pianos:name_to_path("/audio/piano/",["piano58.wav","piano69.wav","piano79.wav"]),snares:name_to_path("/audio/snares/",["snare.wav"]),celestialPs:name_to_path("/audio/celestialPad/",["a3.wav","a4.wav","ab3.wav","ab4.wav","b3.wav","b4.wav","bb3.wav","bb4.wav","c3.wav","c4.wav","c5.wav","d3.wav","d4.wav","db3.wav","db4.wav","e3.wav","e4.wav","eb3.wav","eb4.wav","f3.wav","f4.wav","g3.wav","g4.wav","gb3.wav","gb4.wav"]),ciriusRezs:name_to_path("/audio/ciriusRez/",["a3.wav","a4.wav","ab3.wav","ab4.wav","b3.wav","b4.wav","bb3.wav","bb4.wav","c3.wav","c4.wav","d3.wav","d4.wav","db3.wav","db4.wav","e3.wav","e4.wav","eb3.wav","eb4.wav","f3.wav","f4.wav","g3.wav","g4.wav","gb3.wav","gb4.wav"]),transLeads:name_to_path("/audio/epicTranceLead/",["a3.wav","a4.wav","ab3.wav","ab4.wav","b3.wav","b4.wav","bb3.wav","bb4.wav","c3.wav","c4.wav","c5.wav","d3.wav","d4.wav","db3.wav","db4.wav","e3.wav","e4.wav","eb3.wav","eb4.wav","f3.wav","f4.wav","g3.wav","g4.wav","gb3.wav","gb4.wav"]),perators:name_to_path("/audio/jarblePerator/",["a3.wav","a4.wav","ab3.wav","ab4.wav","b3.wav","b4.wav","bb3.wav","bb4.wav","c3.wav","c4.wav","d3.wav","d4.wav","db3.wav","db4.wav","e3.wav","e4.wav","eb3.wav","eb4.wav","f3.wav","f4.wav","g3.wav","g4.wav","gb3.wav","gb4.wav"]),korgBasses:name_to_path("/audio/korgBass/",["a1-33.wav","a2-45.wav","a3-57.wav","a4-69.wav","a5-81.wav","a6-93.wav","b1-35.wav","b2-47.wav","b3-59.wav","b4-71.wav","b5-83.wav","b6-95.wav","bb1-34.wav","bb2-46.wav","bb3-58.wav","bb4-70.wav","bb5-82.wav","bb6-94.wav","c1-24.wav","c2-36.wav","c3-48.wav","c4-60.wav","c5-72.wav","c6-84.wav","c7-96.wav","d1-26.wav","d2-38.wav","d3-50.wav","d4-62.wav","d5-74.wav","d6-86.wav","db1-25.wav","db2-37.wav","db3-49.wav","db4-61.wav","db5-73.wav","db6-85.wav","e-1-29.wav","e-2-41.wav","e-3-53.wav","e-4-65.wav","e-5-77.wav","e-6-89.wav","e1-28.wav","e2-40.wav","e3-52.wav","e4-64.wav","e5-76.wav","e6-88.wav","eb1-27.wav","eb2-39.wav","eb3-51.wav","eb4-63.wav","eb5-75.wav","eb6-87.wav","f1-30.wav","f2-42.wav","f3-54.wav","f4-66.wav","f5-78.wav","f6-90.wav","g1-32.wav","g2-44.wav","g3-56.wav","g4-68.wav","g5-80.wav","g6-92.wav","gb1-31.wav","gb2-43.wav","gb3-55.wav","gb4-67.wav","gb5-79.wav","gb6-91.wav"]),psyBasses:name_to_path("/audio/psyTranceBass/",["a1.wav","a2.wav","ab1.wav","ab2.wav","b1.wav","b2.wav","bb1.wav","bb2.wav","c1.wav","c2.wav","c3.wav","d1.wav","d2.wav","db1.wav","db2.wav","e1.wav","e2.wav","eb1.wav","eb2.wav","f1.wav","f2.wav","g1.wav","g2.wav","gb1.wav","gb2.wav"]),superSaws:name_to_path("/audio/superSaw/",["A4.wav","A5.wav","A6.wav","Ab3.wav","Ab4.wav","Ab5.wav","B4.wav","B5.wav","B6.wav","Bb4.wav","Bb5.wav","Bb6.wav","C3.wav","C4.wav","C5.wav","C6.wav","D3.wav","D4.wav","D5.wav","Db3.wav","Db4.wav","Db5.wav","E3.wav","E4.wav","E5.wav","Eb3.wav","Eb4.wav","Eb5.wav","F3.wav","F4.wav","F5.wav","G3.wav","G4.wav","G5.wav","Gb3.wav","Gb4.wav","Gb5.wav"])},happy={basses:name_to_path("/audio/basses/",["bass.wav"]),celestialPs:name_to_path("/audio/celestialPad/",["a4.wav","ab4.wav","b4.wav","bb4.wav","c4.wav","c5.wav","d4.wav","db4.wav","e4.wav","eb4.wav","f4.wav","g4.wav","gb4.wav"]),edmSounds:name_to_path("/audio/edm/",["drop.wav"]),guitars:name_to_path("/audio/guitars/",["mellow-2.wav"]),hats:name_to_path("/audio/hats/",["ch.wav","oh.wav"]),kicks:name_to_path("/audio/kicks/",["kick.wav"]),pianos:name_to_path("/audio/piano/",["piano72.wav","piano73.wav","piano74.wav","piano75.wav","piano76.wav","piano78.wav","piano79.wav","piano80.wav"]),snares:name_to_path("/audio/snares/",["snare.wav"]),superSaws:name_to_path("/audio/superSaw/",["A5.wav","A6.wav","Ab5.wav","B5.wav","B6.wav","Bb5.wav","Bb6.wav","C5.wav","C6.wav","D5.wav","Db5.wav","E5.wav","Eb5.wav","F5.wav","G5.wav","Gb5.wav"])},dark={basses:name_to_path("/audio/basses/",["bass.wav"]),guitars:name_to_path("/audio/guitars/",["mellow-1.wav","mellow-3.wav"]),kicks:name_to_path("/audio/kicks/",["kick.wav"]),pianos:name_to_path("/audio/piano/",["piano56.wav","piano57.wav","piano58.wav","piano59.wav","piano60.wav"]),snares:name_to_path("/audio/snares/",["snare.wav"])},synth={},guitar={B2:"/audio/guitars/mellow-2.wav",B3:"/audio/guitars/mellow-1.wav",F4:"/audio/guitars/mellow-3.wav"},guitar_notes=function(){var a=[];for(var n in guitar)a.push(n);return a}(),piano={C3:"/audio/piano/piano48.wav","C#3":"/audio/piano/piano49.wav",D3:"/audio/piano/piano50.wav","D#3":"/audio/piano/piano51.wav",E3:"/audio/piano/piano52.wav",F3:"/audio/piano/piano53.wav","F#3":"/audio/piano/piano54.wav",G3:"/audio/piano/piano55.wav","G#3":"/audio/piano/piano56.wav",A4:"/audio/piano/piano57.wav","A#4":"/audio/piano/piano58.wav",B4:"/audio/piano/piano59.wav",C4:"/audio/piano/piano60.wav"},piano_notes=pickRandom([["E3","C4","C3","G3","A4","F3","F3","C3","E3","C3","C3","G3","A3","F3","F3","C3","E3","C4","C3","G3","B3","G3","G3","D3","E3","C4","C3","G3","F#3","D3","D3","A4"]]),progress=null,player=null,play=null,song=null,status_label=null;function downloadBlob(a){var n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=player[0].src,n.download="audio.webm",n.click()}function flipCoin(){return pickRandom([!0,!1])}function getRandom1to10(){return pickRandom([1,2,3,4,5,6,7,8])}function getRandomTranceLead(){return pickRandom(sounds.transLeads)}function getRandomGuitar(){return pickRandom(happy.guitars)}function getRandomSnare(){return pickRandom(sounds.snares)}function getRandomHat(){return pickRandom(sounds.hats)}function getRandomBass(){return pickRandom(sounds.basses)}function getRandomPsyTransBass(){return pickRandom(sounds.psyBasses)}function getRandomEdmSound(){return pickRandom(happy.edmSounds)}function getRandomKick(){return pickRandom(sounds.kicks)}function getRandomPiano(){return pickRandom(happy.pianos)}function getRandomciriusRez(){return pickRandom(sounds.ciriusRezs)}function getRandomCelestialPad(){return pickRandom(happy.celestialPs)}function getRandomKorgBass(){return pickRandom(sounds.korgBasses)}function getRandomPattern(a,n){if("sim"==n)return pickRandom(["-x--","x","---x","x---"]);var e,t=null;t="agg"==n?(e=["x-","xx","x[xx]"],2):(e=pickRandom([["-","x","x","x","[xx]","[x-]","[-x]"],["x-","-x"]]),4);for(var o="",s=0;s<t;s++)o+=e[Math.floor(Math.random()*e.length)];return o}function mergePatterns(a,n,e){var t=[];for(var o in a){var s=n,r={pattern:a[o].pattern.repeat(s),offset:e};a[o].sample&&(r.sample=a[o].sample),a[o].samples&&(r.samples=a[o].samples),a[o].notes&&(r.notes=a[o].notes),a[o].volume&&(r.volume=a[o].volume),t.push(createClip(r))}return t}function pickRandom(a){return a[Math.floor(Math.random()*a.length)]}function randomizeArr(a){return a.sort(function(){return.5-Math.random()})}function createClip(n){var e={clip:null,play:function(){e.clip||e.create(),e.clip.loop=!1,e.clip.start()},pause:function(){e.clip&&(e.clip.stop(),e.clip.output.disconnect())},create:function(){var a={pattern:n.offset?"----".repeat(n.offset)+n.pattern:n.pattern};n.notes&&(a.notes=n.notes),n.synth&&(a.synth=n.synth),n.sample&&(a.sample=n.sample),n.samples&&(a.samples=n.samples),e.clip=scribble.clip(a),n.volume&&(e.clip.output.volume.input.value=n.volume)}};return e}function createIntro(){return song.edm&&flipCoin()?(song.hasPiano=!0,[{pattern:getRandomPattern(0,"agg"),sample:getRandomPiano(),volume:.25},{pattern:getRandomPattern(0,"agg"),sample:getRandomPiano(),volume:.25}]):song.edm?(song.hasEdmSound=!0,[{pattern:getRandomPattern(),sample:getRandomEdmSound(0,"sim"),volume:.25},{pattern:getRandomPattern(),sample:getRandomEdmSound(0,"sim"),volume:.25}]):song.trap&&flipCoin()?(song.hasSnare=!0,song.hasHat=!0,[{pattern:getRandomPattern(),sample:getRandomSnare()},{pattern:getRandomPattern(),sample:getRandomHat()}]):song.trap&&flipCoin()?(song.hasSnare=!0,song.hasEdmSound=!0,[{pattern:getRandomPattern(),sample:getRandomSnare()},{pattern:getRandomPattern(),sample:getRandomEdmSound(0,"sim"),volume:.25}]):song.trap?(song.hasSnare=!0,song.hasEdmSound=!0,song.hasGuitar=!0,[{pattern:getRandomPattern(),sample:getRandomGuitar()},{pattern:getRandomPattern(),sample:getRandomSnare()},{pattern:getRandomPattern(),sample:getRandomEdmSound(0,"sim"),volume:.25}]):void 0}function createChorus(a){return a=a.concat([{pattern:getRandomPattern(),sample:getRandomKick()},{pattern:getRandomPattern(),sample:getRandomBass()}]),song.edm?(flipCoin()&&a.push({pattern:getRandomPattern(0,"agg"),sample:getRandomTranceLead(),volume:.5}),a):song.trap?(flipCoin()&&!song.hasEdmSound&&a.push({pattern:getRandomPattern(),samples:guitar,notes:randomizeArr(guitar_notes).pop()}),flipCoin()&&!song.hasEdmSound&&a.push({pattern:getRandomPattern(),samples:piano,notes:randomizeArr(piano_notes).join(" "),volume:.25}),flipCoin()&&!song.hasGuitar&&a.push({pattern:getRandomPattern(),sample:getRandomGuitar()}),a):void 0}function createVerse(a){return a.concat([{pattern:getRandomPattern(),sample:getRandomBass()}])}function createOutro(){return[{pattern:getRandomPattern(),sample:getRandomSnare()},{pattern:getRandomPattern(),sample:getRandomHat()}]}function addOverlay(a){return a.push({pattern:getRandomPattern(0,"sim"),sample:getRandomEdmSound(),volume:.25}),flipCoin()&&a.push({pattern:getRandomPattern(0,"sim"),sample:getRandomEdmSound(),volume:.25}),flipCoin()&&!song.hasSnare&&(song.hasSnare=!0,a.push({pattern:getRandomPattern(),sample:getRandomSnare()})),flipCoin()&&!song.hasHat&&(song.hasHat=!0,a.push({pattern:getRandomPattern(),sample:getRandomHat()})),a}function playAndRecordSong(){var a=Tone.context.createMediaStreamDestination(),e=new MediaRecorder(a.stream),n=document.getElementById("download");n.setAttribute("disabled","disabled"),player.parent().hide(),progress.css("width","0%"),progress.parent().show(),status_label.text("Recording new beat...");var t=[];e.ondataavailable=function(a){t.push(a.data)},e.onstop=function(){var a=new Blob(t,{type:"audio/webm; codecs=opus"});player[0].src=URL.createObjectURL(a),player.parent().show(),n.removeAttribute("disabled")};var o=null;for(var s in song)if(song[s])for(var r in song[s])song[s][r]&&(song[s][r].play(),song[s][r].clip.output.connect(a),o=song[s][r].clip);e.start(1e3);var v=null,w=null;o.callback=function(a){w||(w=a);var n=a-w;progress.css("width",n/o.loopEnd*100+"%"),clearTimeout(v),v=setTimeout(function(){e.stop(),stopPlaybackAndRecording()},1e3)}}function stopPlaybackAndRecording(){for(var a in song)if(song[a])for(var n in song[a])song[a][n]&&song[a][n].pause();Tone.Transport.stop(),play.removeClass("btn-danger"),play.text("Create A New Beat"),progress.parent().hide(),status_label.text("Click 'Create A New Beat' to start again...")}function createSong(a){(song={intro:[],chorus1:[],verse1:[],chorus2:[],verse2:[],chorus3:[],outro:[]})[a]=!0;var n=0,e=createIntro(),t=createChorus(e),o=createVerse(e),s=createOutro();return 0<e.length?song.intro=mergePatterns(e,4,n):delete song.intro,0<e.length&&(n+=4),song.chorus1=mergePatterns(t,8,n),n+=8,song.verse1=mergePatterns(o,10,n),n+=10,song.chorus2=mergePatterns(addOverlay(Array.from(t),song),12,n),n+=12,song.verse2=mergePatterns(addOverlay(Array.from(o),song),10,n),n+=10,song.chorus3=mergePatterns(addOverlay(Array.from(t),song),8,n),n+=8,song.outro=mergePatterns(s,4,n),song}$(function(){(progress=$("#bar")).parent().hide(),(player=$("#rec")).parent().hide(),play=$("#play"),status_label=$("#status");var a=$("#download"),e=!1;play.on("click",function(a){console.clear();var n=$("input[name='type']:checked").val();Tone.Transport.bpm.value="trap"==n?130:175,Tone.Transport.start(),e?(e=!1,stopPlaybackAndRecording(song)):(e=!0,play.text("Cancel Beat"),play.addClass("btn-danger"),playAndRecordSong(song=createSong(n)))}),a.on("click",function(a){downloadBlob()}),play.on("zclick",function(a){Tone.Transport.bpm.value=175,Tone.Transport.start(),notesArr=piano_notes,scribble.clip({samples:piano,notes:notesArr.join(" "),pattern:"xxxx".repeat(notesArr.length/2)}).start()})});