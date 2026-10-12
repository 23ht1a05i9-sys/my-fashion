(function () {
  var CATS = { draw: "Draw & paint", write: "Write", craft: "Craft", cook: "Cook", move: "Move", music: "Music", photo: "Photo", code: "Code", home: "Home", mind: "Mind" };
  var CAT_KEYS = Object.keys(CATS);
  var LEVELS = ["Easy", "Medium", "Stretch"];

  var IDEAS = [
    { c: "draw", t: "Draw your hand without looking", b: "Keep your eyes on your hand and let the pen follow every crease. The result is wonky and oddly alive.", m: 10, l: 0, x: ["Pen", "Paper"], s: ["Rest the pen tip on the paper and keep your eyes on your hand.", "Trace every line and wrinkle slowly. No peeking.", "Draw it again, looking this time, and compare the two."] },
    { c: "draw", t: "Paint seven skies in seven days", b: "One small watercolor of the sky each day builds a row of moods you can pin to a wall.", m: 15, l: 1, x: ["Watercolors", "Small cards"], s: ["Pick three colors and stick to them all week.", "Wet the card, drop the colors in and tilt to blend.", "Write the date on the back and pin each one in a row."] },
    { c: "draw", t: "Redesign an app icon you use daily", b: "Take something you tap ten times a day and give it a new face.", m: 45, l: 1, x: ["Pencil", "Paper"], s: ["Sketch the current icon from memory.", "Draw five new versions using only circles and lines.", "Pick the best one and redraw it clean."] },
    { c: "draw", t: "Map an imaginary town", b: "Streets, a river, one strange landmark. Name everything and give each street a story.", m: 40, l: 0, x: ["Paper", "Markers"], s: ["Start with a river or a coastline.", "Add roads, a market and one landmark nobody can explain.", "Name every street and write a one-line rumor about the town."] },

    { c: "write", t: "Write a letter to yourself for next year", b: "Say what is going on now, what you hope for, and three things you predict will happen.", m: 20, l: 0, x: ["Paper or a document"], s: ["Describe your week in plain detail.", "List three hopes and three predictions.", "Seal or save it and set a reminder for one year from today."] },
    { c: "write", t: "Tell your life in six words", b: "Short forms force you to pick what matters. Write ten and keep the one that stings a little.", m: 10, l: 0, x: ["Notebook"], s: ["Write ten six-word stories about your year.", "Cross out the ones that sound like slogans.", "Keep one and read it out loud."] },
    { c: "write", t: "Retell a scene from a side character", b: "Take a scene from a film you love and write it from the view of someone standing in the corner.", m: 60, l: 1, x: ["Laptop or notebook"], s: ["Pick a scene you know well.", "Choose a minor character who is present and list what they notice.", "Write the scene in first person, 400 words or fewer."] },
    { c: "write", t: "Keep a one-sentence journal for 30 days", b: "One sentence a day is small enough to survive busy weeks and adds up to a month of memory.", m: 5, l: 0, x: ["Notebook"], s: ["Write the date and one true sentence about today.", "Skip nothing, even when the sentence is boring.", "On day 30, read all of them in one sitting."] },

    { c: "craft", t: "Fold a desk organizer from paper", b: "A simple origami box that holds clips, erasers and loose change.", m: 20, l: 0, x: ["Square paper"], s: ["Fold all four corners to the center.", "Fold two opposite sides in again, then lift the others into walls.", "Make a slightly bigger one to use as a lid."] },
    { c: "craft", t: "Turn an old T-shirt into a tote bag", b: "No sewing needed. Cut, fringe and knot.", m: 30, l: 0, x: ["Old T-shirt", "Scissors"], s: ["Cut off the sleeves and widen the neckline.", "Cut a fringe about 8 cm long along the bottom hem.", "Tie the front and back fringes together in double knots."] },
    { c: "craft", t: "Press flowers into bookmarks", b: "Collect small flowers on a walk and keep them flat between pages for a week.", m: 30, l: 0, x: ["Flowers", "Heavy book", "Clear tape"], s: ["Pick flat flowers and leaves and pat them dry.", "Place them between paper in a heavy book for seven days.", "Arrange them on a card strip and cover with clear tape."] },
    { c: "craft", t: "Build your room as a shoebox diorama", b: "Shrink your favorite corner into a box, down to the tiny lamp.", m: 240, l: 2, x: ["Shoebox", "Cardboard", "Glue", "Paint"], s: ["Paint the inside walls the colors of your room.", "Cut furniture from cardboard and glue it in place.", "Add one tiny detail that only you would notice."] },

    { c: "cook", t: "Cook a dish from a country you have never visited", b: "Pick a country at random, find one home-style recipe and cook it start to finish.", m: 90, l: 1, x: ["Ingredients from a local shop"], s: ["Choose a country and search for a simple home-style dish.", "Shop for the ingredients, swapping what you cannot find.", "Cook it, taste it and note what you would change."] },
    { c: "cook", t: "Bake no-knead bread", b: "Four ingredients and a long rest do most of the work.", m: 300, l: 1, x: ["Flour", "Salt", "Yeast", "Water", "Heavy pot"], s: ["Mix flour, water, salt and a pinch of yeast into a shaggy dough.", "Cover and rest it for 12 hours or overnight.", "Bake in a preheated covered pot until deep golden."] },
    { c: "cook", t: "Make a soup from whatever is left", b: "Turn the last vegetables and a spoon of spices into a bowl you did not plan.", m: 30, l: 0, x: ["Odds and ends from the kitchen"], s: ["Chop everything small and fry the onion first.", "Add the rest, cover with water and simmer until soft.", "Taste, adjust the salt and finish with something sour."] },
    { c: "cook", t: "Blend your own chai masala", b: "Grind a small jar of spice mix and see how your cup changes with each ratio.", m: 25, l: 0, x: ["Cardamom", "Cloves", "Cinnamon", "Black pepper", "Dry ginger"], s: ["Dry-toast the whole spices for a minute.", "Grind them with a little dry ginger powder.", "Brew three cups with different amounts and pick a winner."] },

    { c: "move", t: "Take a left at every second junction", b: "A walk with a silly rule often finds streets you have never noticed.", m: 45, l: 0, x: ["Comfortable shoes"], s: ["Leave home with no destination.", "Turn left at every second junction.", "Stop where you feel like stopping and look around for a full minute."] },
    { c: "move", t: "Learn a five-minute dance routine", b: "Pick a short routine from a tutorial and learn it in sections.", m: 30, l: 1, x: ["A video", "Some floor space"], s: ["Choose a tutorial under five minutes.", "Learn eight counts at a time and repeat each block.", "Film one run-through and watch it back."] },
    { c: "move", t: "Learn to juggle with three socks", b: "Rolled socks fall slowly and do not break anything.", m: 20, l: 0, x: ["Three rolled socks"], s: ["Practice tossing one sock in an arc from hand to hand.", "Add a second and throw when the first reaches the top.", "Add the third and aim for five catches in a row."] },

    { c: "music", t: "Make a playlist for someone who would never ask", b: "Pick ten songs for a friend, in an order that tells a small story.", m: 30, l: 0, x: ["Music app"], s: ["Think of one person and one mood they are in lately.", "Choose ten songs and sort them so the mood shifts.", "Send it with no explanation."] },
    { c: "music", t: "Record a beat using only kitchen sounds", b: "Spoons, jars and a pot lid can make a drum kit.", m: 60, l: 1, x: ["Phone", "Spoons", "Pots", "Jars"], s: ["Record one sound each for a kick, a snare and a hi-hat.", "Arrange them into a four-count loop in any free editor.", "Layer a fourth sound over the loop and let it run for a minute."] },
    { c: "music", t: "Learn the first four bars of a song", b: "Choose a song you love and learn only the opening phrase. Small wins stick.", m: 30, l: 1, x: ["Any instrument, or your voice"], s: ["Pick a short melody you can hum.", "Find the notes or chords from a tutorial.", "Play it ten times slowly, then once at full speed."] },

    { c: "photo", t: "Photograph one color for a week", b: "Choose yellow, or blue, and shoot only things in that color. You will start seeing it everywhere.", m: 10, l: 0, x: ["Phone camera"], s: ["Pick your color on Monday.", "Take at least one photo of it each day.", "Put all seven in a grid on Sunday."] },
    { c: "photo", t: "Make a self-portrait out of shadows", b: "Skip the face. Let a shadow on a wall tell people who you are.", m: 20, l: 1, x: ["A lamp or sunlight", "Phone camera"], s: ["Place a light so it throws your shadow on a plain wall.", "Move until your outline looks interesting.", "Add a prop like a hat or a book and take a few shots."] },
    { c: "photo", t: "Shoot your commute like a travel guide", b: "Treat the road you take every day as if you were visiting it for the first time.", m: 45, l: 0, x: ["Phone camera"], s: ["Walk your usual route and pretend you are a tourist.", "Photograph five things you normally ignore.", "Caption each one with a one-line travel tip."] },

    { c: "code", t: "Build a tiny habit counter", b: "One page, one button and a number that remembers itself.", m: 60, l: 1, x: ["Text editor", "Browser"], s: ["Create an HTML file with a button and a count.", "Add a few lines of JavaScript to raise the count on each click.", "Save the count in localStorage so it survives a reload."] },
    { c: "code", t: "Make a loader with only CSS", b: "Spinners, bars or bouncing dots, with no JavaScript.", m: 30, l: 1, x: ["Text editor"], s: ["Draw three circles with divs.", "Animate their scale with keyframes and staggered delays.", "Add a reduced-motion rule so it calms down when asked."] },
    { c: "code", t: "Automate one boring weekly task", b: "Find the chore you hate most and hand it to a script.", m: 90, l: 2, x: ["Any scripting language"], s: ["Write down the exact steps you do by hand.", "Script the simplest step first and run it.", "Add the other steps one at a time until the task runs alone."] },
    { c: "code", t: "Build a portfolio page with one odd detail", b: "A normal page with one thing nobody else has, like a menu that behaves like a deck of cards.", m: 240, l: 2, x: ["Text editor", "Free hosting"], s: ["Write the sections: who you are, three projects, how to reach you.", "Pick one unusual detail and build it.", "Publish it and send the link to one person."] },

    { c: "home", t: "Rearrange your desk in a new layout", b: "Moving the same things around can feel like a new room.", m: 20, l: 0, x: ["Your desk"], s: ["Clear everything off the desk.", "Wipe it down and decide where the screen should go first.", "Put back only what you use daily, plus a plant or a lamp."] },
    { c: "home", t: "Regrow spring onions from the ends", b: "Keep the white roots, drop them in water and watch green shoots return within days.", m: 15, l: 0, x: ["Spring onions", "A glass", "Water"], s: ["Cut the green tops and keep the bottom 3 cm with the roots.", "Stand them in a glass with a little water on a sunny sill.", "Change the water every two days and trim as you cook."] },
    { c: "home", t: "Hang a gallery wall of five favorites", b: "Pick five images that mean something and arrange them before you hang a single nail.", m: 60, l: 1, x: ["Photos or prints", "Frames or tape"], s: ["Lay the five images on the floor in the shape of the wall.", "Trace each on paper and tape the paper to the wall to test.", "Hang them with equal gaps."] },

    { c: "mind", t: "Sit by a window for ten minutes", b: "Watch what passes. Nothing to fix, nothing to post.", m: 10, l: 0, x: ["A window", "No phone"], s: ["Put your phone in another room.", "Set a ten-minute timer and look outside.", "Write down one thing you noticed when it rings."] },
    { c: "mind", t: "Write twenty bad ideas", b: "Lower the bar and a good idea tends to sneak out of the pile.", m: 15, l: 0, x: ["Paper"], s: ["Pick a problem you are stuck on.", "Write twenty terrible solutions in ten minutes.", "Circle the least terrible one and make it slightly better."] },
    { c: "mind", t: "Learn hello in ten languages", b: "Greetings are short, quick to learn and make people smile.", m: 30, l: 0, x: ["A browser"], s: ["Choose ten languages, including one you have never heard.", "Learn how to say hello and listen to it spoken.", "Greet a friend in each one over the week."] },
    { c: "mind", t: "Keep a done list instead of a to-do list", b: "At night, write what you did. It feels better than staring at what is left.", m: 5, l: 0, x: ["Paper"], s: ["At the end of the day, list everything you finished.", "Include small things like replying to a message.", "Read it once and close the notebook."] }
  ];
  IDEAS.forEach(function (d, i) { d.id = i; });

  var state = { cat: "all", q: "", time: "any", savedOnly: false };
  var saved = new Set(loadSaved());
  var $ = function (s) { return document.querySelector(s); };
  var grid = $("#grid"), chipsEl = $("#chips"), countEl = $("#count"), emptyEl = $("#empty");
  var overlay = $("#overlay"), sheet = $("#sheet");
  var openId = null, lastFocus = null;

  function loadSaved() { try { return JSON.parse(localStorage.getItem("tn-saved") || "[]"); } catch (e) { return []; } }
  function persist() { try { localStorage.setItem("tn-saved", JSON.stringify(Array.from(saved))); } catch (e) {} }

  function fmtTime(m) {
    if (m >= 240) return "Half day";
    if (m < 60) return m + " min";
    var h = m / 60;
    return (Math.round(h * 10) / 10) + " hr";
  }
  function patOf(c) { return CAT_KEYS.indexOf(c) % 5; }
  var COVER_H = [120, 170, 100, 150, 190, 135];
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

  function matches(d) {
    if (state.savedOnly && !saved.has(d.id)) return false;
    if (state.cat !== "all" && d.c !== state.cat) return false;
    if (state.time === "s" && d.m > 15) return false;
    if (state.time === "m" && (d.m <= 15 || d.m > 60)) return false;
    if (state.time === "l" && d.m <= 60) return false;
    if (state.q) {
      var hay = (d.t + " " + d.b + " " + d.x.join(" ") + " " + CATS[d.c]).toLowerCase();
      var words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) === -1) return false;
    }
    return true;
  }

  function renderChips() {
    var counts = { all: IDEAS.length };
    CAT_KEYS.forEach(function (k) { counts[k] = IDEAS.filter(function (d) { return d.c === k; }).length; });
    var html = '<button class="chip" type="button" data-cat="all" aria-pressed="' + (state.cat === "all") + '"><i></i>All ' + counts.all + '</button>';
    CAT_KEYS.forEach(function (k) {
      html += '<button class="chip" type="button" data-cat="' + k + '" aria-pressed="' + (state.cat === k) + '"><i></i>' + CATS[k] + ' ' + counts[k] + '</button>';
    });
    chipsEl.innerHTML = html;
  }

  function cardHTML(d) {
    var isSaved = saved.has(d.id);
    return '<article class="card tinted" data-cat="' + d.c + '" data-pat="' + patOf(d.c) + '" style="--ch:' + COVER_H[d.id % COVER_H.length] + 'px">' +
      '<div class="cover"><span class="tag">' + CATS[d.c] + '</span></div>' +
      '<div class="body">' +
      '<h3><button class="open" type="button" data-id="' + d.id + '">' + d.t + '</button></h3>' +
      '<p class="blurb">' + d.b + '</p>' +
      '<div class="foot"><span class="meta">' + fmtTime(d.m) + ' · ' + LEVELS[d.l] + '</span>' +
      '<button class="save" type="button" data-save="' + d.id + '" aria-pressed="' + isSaved + '" aria-label="Save: ' + d.t.replace(/"/g, "&quot;") + '">' + HEART + '</button></div>' +
      '</div></article>';
  }

  function render() {
    var list = IDEAS.filter(matches);
    grid.innerHTML = list.map(cardHTML).join("");
    grid.hidden = list.length === 0;
    emptyEl.hidden = list.length !== 0;
    countEl.textContent = list.length + (list.length === 1 ? " idea" : " ideas");
    if (list.length === 0) {
      if (state.savedOnly && saved.size === 0) {
        $("#emptyTitle").textContent = "Nothing saved yet";
        $("#emptyText").textContent = "Tap the heart on any card to keep it here.";
      } else {
        $("#emptyTitle").textContent = "No ideas match";
        $("#emptyText").textContent = "Try a different word, pick another category, or allow more time.";
      }
    }
    $("#savedN").textContent = saved.size;
  }

  function syncSaveButtons(id) {
    var on = saved.has(id);
    document.querySelectorAll('[data-save="' + id + '"]').forEach(function (b) { b.setAttribute("aria-pressed", String(on)); });
    $("#savedN").textContent = saved.size;
  }

  function toggleSave(id) {
    if (saved.has(id)) saved.delete(id); else saved.add(id);
    persist();
    syncSaveButtons(id);
  }

  function openIdea(id, from) {
    var d = IDEAS[id];
    openId = id;
    if (from) lastFocus = from;
    sheet.setAttribute("data-cat", d.c);
    sheet.setAttribute("data-pat", patOf(d.c));
    sheet.className = "sheet";
    sheet.innerHTML =
      '<div class="tinted" data-cat="' + d.c + '" data-pat="' + patOf(d.c) + '"><div class="cover"><span class="tag">' + CATS[d.c] + '</span></div></div>' +
      '<button class="x" type="button" id="closeX" aria-label="Close">&times;</button>' +
      '<div class="in" data-cat="' + d.c + '">' +
      '<h2 id="sheetTitle">' + d.t + '</h2>' +
      '<p class="lead">' + d.b + '</p>' +
      '<dl class="facts"><div><dt>Time</dt><dd>' + fmtTime(d.m) + '</dd></div><div><dt>Level</dt><dd>' + LEVELS[d.l] + '</dd></div><div><dt>You need</dt><dd>' + d.x.join(", ") + '</dd></div></dl>' +
      '<ol class="steps">' + d.s.map(function (s) { return "<li><span>" + s + "</span></li>"; }).join("") + '</ol>' +
      '<div class="acts"><button class="btn alt" type="button" id="sheetSave" aria-pressed="' + saved.has(id) + '">' + (saved.has(id) ? "Saved" : "Save this") + '</button>' +
      '<button class="btn" type="button" id="another">Another idea</button></div>' +
      '</div>';
    sheet.style.position = "relative";
    overlay.hidden = false;
    document.documentElement.style.overflow = "hidden";
    sheet.scrollTop = 0;
    $("#closeX").focus();
  }

  function closeIdea() {
    overlay.hidden = true;
    document.documentElement.style.overflow = "";
    openId = null;
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  function surprise() {
    var pool = IDEAS.filter(matches);
    if (!pool.length) pool = IDEAS;
    if (pool.length > 1 && openId !== null) pool = pool.filter(function (d) { return d.id !== openId; });
    var pick = pool[Math.floor(Math.random() * pool.length)];
    openIdea(pick.id, lastFocus || $("#surprise"));
  }

  /* events */
  grid.addEventListener("click", function (e) {
    var s = e.target.closest("[data-save]");
    if (s) { toggleSave(Number(s.getAttribute("data-save"))); if (state.savedOnly) render(); return; }
    var o = e.target.closest(".open");
    if (o) openIdea(Number(o.getAttribute("data-id")), o);
  });
  chipsEl.addEventListener("click", function (e) {
    var c = e.target.closest(".chip");
    if (!c) return;
    state.cat = c.getAttribute("data-cat");
    renderChips(); render();
    var again = chipsEl.querySelector('[data-cat="' + state.cat + '"]'); if (again) again.focus();
  });
  $("#q").addEventListener("input", function (e) { state.q = e.target.value.trim(); render(); });
  $("#time").addEventListener("change", function (e) { state.time = e.target.value; render(); });
  $("#savedBtn").addEventListener("click", function (e) {
    state.savedOnly = !state.savedOnly;
    e.currentTarget.setAttribute("aria-pressed", String(state.savedOnly));
    render();
  });
  $("#surprise").addEventListener("click", function (e) { lastFocus = e.currentTarget; surprise(); });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) { closeIdea(); return; }
    if (e.target.closest("#closeX")) { closeIdea(); return; }
    if (e.target.closest("#another")) { surprise(); return; }
    var sv = e.target.closest("#sheetSave");
    if (sv && openId !== null) {
      toggleSave(openId);
      var on = saved.has(openId);
      sv.setAttribute("aria-pressed", String(on));
      sv.textContent = on ? "Saved" : "Save this";
      if (state.savedOnly) render();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "Escape") { closeIdea(); return; }
    if (e.key === "Tab") {
      var f = sheet.querySelectorAll("button");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* theme */
  var root = document.documentElement, themeBtn = $("#theme");
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return !!(mq && mq.matches);
  }
  function labelTheme() { themeBtn.textContent = isDark() ? "Light mode" : "Dark mode"; }
  try { var st = localStorage.getItem("tn-theme"); if (st === "dark" || st === "light") root.setAttribute("data-theme", st); } catch (e) {}
  themeBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("tn-theme", next); } catch (e) {}
    labelTheme();
  });
  if (mq && mq.addEventListener) mq.addEventListener("change", labelTheme);
  labelTheme();

  renderChips();
  render();
})();
