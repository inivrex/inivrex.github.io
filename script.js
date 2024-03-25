
//Functions Here 
function wordToKeycodeArray(word) {
    const keycodeArray = [];

    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        const keycode = char.charCodeAt(0);
        keycodeArray.push(keycode);
    }
    HoldWordList.push(keycodeArray)
}
//Creating elements for screen
function SendingToScreen() {
    if (i != WordDictionary.length) {
        wordToKeycodeArray(WordDictionary[i]);
        const para = document.createElement("p");
        const node = document.createTextNode(WordDictionary[i]);
        para.appendChild(node);
        const element = MWin;
        para.className = "FallWord";
        let a = 0
        let b = 8;
        let randomNum = Math.floor((Math.random() * b) + a);
        para.classList.add('Left' + randomNum);
        para.id = 'Word' + i;
        element.appendChild(para);
        //Showing on screen how many left.
        upcomingWords.textContent = CountUpcoming - i - 1;
        //Listening Animation End For each elements
        FallWord[i].addEventListener('animationend', (e) => {
            if (e.target.innerHTML !== "") {
                CountMissed++;
                missedWords.textContent = CountMissed;
                missedWords.style.color = "Red"; //Chnage color of alerting
                setTimeout(() => {
                    missedWords.style.color = "White";

                }, 500);

                UserIn = [];
                NumberOfWordkeyCode = 0;
                NumberOfWord++;
            }
        });
        i++;
    } else {
        clearInterval(intvr);
        setTimeout(() => {
            incorrectInR.textContent = incorrectIn.textContent
            missedWordsR.textContent = missedWords.textContent
            wpmSpeedR.textContent = wpmSpeed.textContent
            completedWordsR.textContent = completedWords.textContent
            Result.style.display = "flex";
        }, 18000);
    }
}
//Making array of random words
function UpperCaseMakingWordCollection() {
    let a = 0;
    let b = WordsCollection.length + 1;
    for (let i = 0; i < 50; i++) {
        let RandomNum = Math.floor((Math.random() * b) + a);
        WordDictionary.push(WordsCollection[RandomNum].toUpperCase());
    }
    CountUpcoming = WordDictionary.length;
}


let WordsCollection = [
    "Abode", "abyss", "acorn", "adept", "affix", "agile", "alibi", "aloof", "amaze", "amity", "anvil", "arbor", "ardor", "array", "aspire", "atlas", "attic", "azure", "bacon", "badge",
    "bagel", "baker", "banjo", "barge", "basil", "beach", "beard", "beast", "beech", "beige", "bench", "beret", "berry", "bison", "blaze", "bleak", "blend", "blimp", "blink", "bliss",
    "blitz", "bloom", "bluff", "blush", "boast", "bonus", "boost", "booth", "botch", "bound", "brace", "brag", "brash", "brave", "brawl", "bribe", "brief", "brine", "brink", "britt",
    "broil", "brook", "broth", "brown", "brunt", "brush", "brute", "budge", "bugle", "bulge", "bulky", "bunch", "burly", "burst", "cabin", "cable", "caddy", "cagey", "caked", "caper",
    "cared", "carny", "cater", "catty", "caustic", "cedar", "celery", "chafe", "chalk", "charm", "chase", "cheeky", "cherry", "chesty", "chime", "chirp", "chomp", "chortle", "chubby",
    "cipher", "clasp", "classy", "clever", "clove", "clown", "clump", "clumsy", "coach", "cobalt", "cobweb", "cocoa", "codex", "coffer", "cogent", "cohort", "coil", "colt", "comfy",
    "comic", "conch", "condo", "copse", "coral", "corset", "cosmic", "cosy", "covey", "coyote", "cramp", "cranky", "crate", "craven", "crayon", "crease", "creepy", "crest", "crimp",
    "crisp", "croak", "crook", "cross", "crow", "crumb", "crux", "crypt", "cubby", "cuddle", "cue", "cuff", "cumin", "cuppa", "curvy", "cutie", "cycle", "dainty", "dapper", "dandy",
    "dash", "dawn", "dazzle", "decaf", "decree", "delta", "denim", "depot", "depth", "derby", "dewy", "dicey", "dimple", "dingy", "disco", "dizzy", "dodge", "dollop", "donut", "doozy",
    "drape", "dreamy", "dressy", "drift", "drill", "drool", "droop", "drove", "druid", "dryad", "duet", "dune", "dusk", "dusty", "eager", "early", "earthy", "ebony", "echo", "edgy",
    "eerie", "elate", "elbow", "elder", "elfin", "elite", "ember", "emote", "empty", "enjoy", "envoy", "epoxy", "equal", "equip", "erase", "erode", "erupt", "essay", "ethyl", "evade",
    "event", "excel", "exult", "extra", "fable", "facet", "fairy", "faith", "fancy", "fang", "fawn", "feign", "fetch", "fever", "fiery", "filch", "filmy", "final", "finch", "find",
    "fine", "fir", "fire", "fish", "fit", "flake", "flame", "flare", "flash", "fleet", "fling", "flint", "flip", "flirt", "float", "flock", "flood", "floor", "flora", "flout",
    "flowery", "flurry", "flush", "flute", "fly", "foam", "foggy", "foil", "fold", "fond", "food", "fool", "foot", "foray", "force", "forge", "forgo", "fort", "fox", "fray",
    "free", "fresh", "fret", "frill", "frisk", "frost", "frown", "frugal", "fruit", "fudge", "fuel", "fume", "fund", "funny", "furry", "fuse", "fuzzy", "gabby", "gale", "game",
    "gape", "garb", "gash", "gaudy", "gauze", "gaze", "gem", "genial", "ghost", "giant", "gift", "giggle", "gild", "ginger", "glade", "glaze", "gleam", "glee", "glide", "glint",
    "glitch", "gloom", "glory", "gloss", "glove", "glow", "glue", "gnaw", "gnome", "goal", "gobble", "gold", "good", "goofy", "gorge", "gory", "grace", "grade", "grand", "grape",
    "graph", "grass", "grate", "grave", "gravy", "gray", "green", "greet", "grid", "grief", "grill", "grim", "grin", "grip", "grit", "groan", "groom", "grove", "growl", "gruff",
    "grunt", "guard", "guess", "guest", "guide", "guile", "guilt", "gummy", "gusto", "gym", "hack", "hale", "half", "hall", "hamper", "handy", "happy", "hardy", "harp", "harsh",
    "haste", "hatch", "haunt", "haven", "havoc", "hawk", "hay", "heap", "hearth", "hefty", "hello", "help", "herb", "herd", "hero", "hex", "hide", "hike", "hill", "hinge", "hint",
    "hippo", "hire", "hiss", "hive", "hoard", "hobble", "hobby", "hockey", "hole", "home", "honey", "hoof", "hook", "hoop", "hope", "horn", "hose", "host", "hotel", "hour", "house",
    "hover", "howl", "hub", "hug", "hum", "humid", "hump", "hunt", "hurry", "husky", "hydra", "hymn", "hype", "ice", "icon", "idle", "igloo", "image", "impish", "imply", "inch",
    "index", "infer", "ink", "inn", "input", "inset", "irate", "iris", "iron", "ivory", "ivy", "jab", "jade", "jagged", "jail", "jam", "jar", "jazzy", "jeep", "jelly", "jet",
    "jewel", "jiffy", "jiggle", "jinx", "jive", "job", "jog", "join", "joke", "jolly", "jot", "joy", "judge", "juice", "juicy", "jump", "jungle", "junk", "jury", "just", "keen",
    "keep", "kelp", "key", "kick", "kid", "kind", "king", "kiss", "kite", "kiwi", "knack", "knee", "knit", "knob", "knock", "knot", "know", "koala", "label", "lace", "lack",
    "lacy", "lady", "lake", "lamb", "lame", "lamp", "land", "lane", "large", "lash", "lasso", "last", "latch", "late", "laugh", "launch", "lava", "lawn", "layer", "lazy", "leaf",
    "leak", "lean", "learn", "leash", "least", "leave", "ledge", "left", "lemon", "lend", "lens", "lentil", "level", "lever", "lid", "lie", "life", "lift", "light", "like",
    "lilac", "lily", "limb", "lime", "limit", "line", "link", "lion", "lip", "list", "live", "load", "loaf", "lobby", "local", "lock", "loft", "log", "logic", "lone", "long",
    "loop", "loose", "lord", "lose", "lotus", "loud", "love", "low", "loyal", "luck", "lucky", "lush", "lute", "lyre", "macaw", "mace", "mad", "magic", "maid", "mail", "main",
    "make", "male", "mall", "malt", "mambo", "man", "map", "march", "mark", "marsh", "mask", "mass", "mast", "match", "mate", "math", "maze", "mead", "meal", "mean", "meat",
    "medal", "media", "meet", "melon", "melt", "memo", "mend", "menu", "merry", "mesh", "mess", "metal", "meter", "mewl", "mica", "mice", "micro", "mid", "mile", "milk",
    "mill", "mime", "mind", "mine", "mini", "mint", "mire", "miss", "mist", "moan", "moat", "mock", "mode", "model", "moist", "mold", "mole", "molt", "money", "monk", "month",
    "mood", "moon", "moor", "moot", "more", "morn", "moss", "most", "moth", "move", "movie", "mow", "mud", "mug", "mule", "mull", "mum", "music", "mute", "myth", "nab",
    "nail", "name", "nap", "nape", "nary", "navy", "near", "neat", "neck", "need", "nest", "net", "new", "next", "nice", "niche", "nick", "night", "nimble", "nine", "nip",
    "nit", "noel", "noise", "nomad", "none", "noon", "north", "nose", "note", "novel", "now", "nudge", "null", "numb", "nurse", "nut", "oak", "oath", "obey", "ocean",
    "octet", "odd", "ode", "off", "offer", "oil", "okay", "old", "olive", "omit", "once", "one", "only", "onto", "open", "optic", "oral", "orb", "order", "organ",
    "oriole", "other", "otter", "ounce", "oval", "oven", "over", "owl", "own", "pace", "pack", "page", "paid", "pain", "paint", "pair", "pale", "palm", "panda", "panel",
    "panic", "paper", "parry", "parse", "party", "pass", "past", "patch", "path", "patio", "pause", "pave", "paw", "pay", "pea", "peak", "peal", "pear", "peck", "peel",
    "peep", "peer", "peg", "pen", "pep", "perch", "perk", "pest", "pet", "pew", "phone", "photo", "piano", "pick", "pie", "piece", "pig", "pile", "pill", "pin", "pine",
    "pink", "pint", "pipe", "pitch", "pith", "pity", "pizza", "place", "plain", "plane", "plank", "plant", "plate", "play", "plea", "please", "plod", "plot", "plow",
    "pluck", "plug", "plum", "plus", "plush", "pod", "poem", "point", "poke", "polar", "pole", "pond", "pony", "pool", "pop", "porch", "port", "pose", "posh", "post",
    "pot", "pouch", "pound", "pour", "pout", "power", "prank", "prawn", "pray", "press", "pretty", "price", "pride", "prime", "print", "prize", "probe", "prod", "prompt",
    "prone", "proof", "prop", "prose", "proud", "prove", "prune", "pry", "pub", "puff", "pull", "pulp", "pump", "punch", "puny", "pup", "pure", "purge", "purse", "push",
    "put", "puzzle", "quack", "quad", "quail", "quaint", "quake", "qualm", "quark", "quart", "quash", "quay", "queen", "query", "quest", "queue", "quick", "quiet", "quilt",
    "quip", "quit", "quiz", "quote", "race", "rack", "rag", "raid", "rail", "rain", "raise", "rake", "rally", "ram", "ramp", "ranch", "range", "rank", "rap", "rare",
    "rash", "rate", "rave", "raw", "ray", "razor", "read", "real", "realm", "reap", "rear", "rebel", "red", "reef", "reel", "refer", "regal", "relax", "rely", "remit",
    "renew", "rent", "reply", "rest", "retro", "reuse", "revel", "rhyme", "rib", "rice", "rich", "ride", "ridge", "rife", "rift", "rig", "right", "rile", "rim", "ring",
    "rinse", "riot", "ripe", "rise", "risk", "rite", "river", "road", "roam", "roar", "roast", "rob", "robe", "rock", "rod", "rogue", "roll", "roof", "room", "root",
    "rope", "rose", "rosy", "rot", "rough", "round", "route", "rove", "row", "royal", "rub", "ruby", "rude", "rug", "ruin", "rule", "run", "rush", "rust", "rut", "rye",
    "sack", "safe", "saga", "sage", "sail", "sake", "salad", "sale", "salt", "same", "sand", "sane", "sash", "sate", "save", "saw", "sax", "say", "scale", "scan",
    "scare", "scarf", "scene", "scent", "school", "scoop", "score", "scorch", "scorn", "scour", "scout", "scowl", "scram", "scrap", "screen", "screw", "scrub", "sea",
    "seal", "seam", "sear", "seat", "sect", "see", "seek", "seem", "seen", "seep", "seer", "sell", "send", "sense", "sent", "set", "sew", "shade", "shake", "shall", "sham",
    "shape", "share", "shark", "sharp", "shave", "shawl", "she", "shed", "sheep", "sheer", "sheet", "shelf", "shell", "shine", "ship", "shirt", "shock", "shoe", "shoot",
    "shop", "shore", "short", "shot", "show", "shred", "shrew", "shrill", "shrub", "shrug", "shun", "shy", "sick", "side", "sigh", "sight", "sign", "silk", "sill",
    "silly", "silver", "simper", "simple", "sin", "sing", "sink", "sip", "sir", "sit", "six", "size", "skate", "ski", "skill", "skin", "skip", "skirt", "sky", "slab",
    "slack", "slain", "slam", "slap", "slash", "slate", "slay", "sled", "sleep", "sleet", "slice", "slick", "slide", "slim", "sling", "slip", "slit", "slop", "slot", "slow",
    "slug", "slum", "slur", "slush", "sly", "small", "smart", "smash", "smell", "smile", "smirk", "smog", "smoke", "smooth", "smug", "snag", "snail", "snake", "snap",
    "snare", "snarl", "sneak", "sneer", "sniff", "snip", "snob", "snore", "snow", "snug", "soak", "soap", "soar", "sob", "sock", "soda", "sofa", "soft", "soil", "sold",
    "sole", "solid", "solo", "solve", "some", "son", "song", "soon", "sore", "sort", "soul", "sound", "soup", "sour", "south", "sow", "spa", "space", "span", "spare",
    "spark", "spasm", "spat", "spawn", "speak", "spear", "speed", "spell", "spend", "spent", "spew", "spice", "spider", "spike", "spill", "spin", "spite", "split", "spoil",
    "spoke", "sponge", "spoof", "spoon", "sport", "spot", "spray", "spree", "sprig", "spring", "sprout", "spruce", "spud", "spur", "spy", "squall", "square", "squash",
    "squat", "squeak", "squeal", "squelch", "squid", "squint", "squirt", "stab", "stack", "staff", "stage", "stain", "stair", "stake", "stale", "stall", "stamp", "stand",
    "star", "stare", "start", "stash", "state", "stay", "stead", "steal", "steam", "steel", "steep", "steer", "stem", "step", "stick", "stiff", "still", "sting", "stir",
    "stock", "stole", "stone", "stool", "stop", "store", "storm", "story", "stout", "stove", "strap", "straw", "stray", "stream", "street", "stress", "stretch", "strike",
    "string", "strip", "stripe", "strive", "stroke", "strong", "stub", "stuck", "stud", "study", "stuff", "stump", "stun", "stunt", "style", "sub", "such", "suck", "sudden",
    "sue", "sugar", "suit", "sulk", "sum", "sun", "sung", "sunk", "super", "sure", "surf", "surge", "surly", "swab", "swag", "swamp", "swan", "swap", "swarm", "sway",
    "swear", "sweat", "sweep", "sweet", "swell", "swift", "swim", "swing", "swipe", "swirl", "sword", "sync", "syrup", "table", "tack", "tail", "take", "tale", "talk",
    "tall", "tame", "tan", "tank", "tap", "tape", "tar", "target", "task", "taste", "taut", "taxi", "tea", "teach", "team", "tear", "tease", "tech", "teeth", "tell", "temp",
    "tend", "tent", "term", "test", "text", "than", "thank", "that", "thaw", "the", "theme", "then", "there", "these", "thick", "thief", "thin", "thing", "think", "third",
    "this", "thorn", "those", "three", "threw", "throb", "throw", "thrust", "thumb", "thus", "tick", "tide", "tidy", "tie", "tier", "tiger", "tight", "tile", "till", "tilt",
    "time", "tin", "tinge", "tiny", "tip", "tire", "title", "toad", "toast", "today", "toe", "tofu", "tog", "together", "toil", "token", "told", "toll", "tomb", "tone", "tong",
    "too", "tool", "tooth", "top", "torch", "tore", "toss", "total", "touch", "tough", "tour", "tow", "tower", "town", "toy", "trace", "track", "trade", "train", "trait",
    "trap", "trash", "tray", "treat", "tree", "trek", "trend", "trial", "tribe", "trick", "trim", "trio", "trip", "trite", "troll", "troop", "trot", "trout", "true", "trump",
    "trust", "try", "tub", "tug", "tulip", "tuna", "tune", "turf", "turn", "tutor", "twig", "twin", "twist", "two", "type", "ugly", "undo", "unit", "until", "up", "upon",
    "urge", "use", "usual", "utter", "vague", "vain", "vale", "valid", "valley", "value", "valve", "van", "vase", "vast", "vat", "vault", "veal", "vegan", "veil", "vein",
    "vent", "verb", "verse", "very", "vest", "veto", "vex", "via", "vice", "view", "vigil", "villa", "vine", "vinyl", "viola", "violet", "visa", "visit", "vista", "vital",
    "vivid", "void", "volt", "vote", "vow", "wade", "waffle", "wag", "wage", "wagon", "waif", "wail", "wait", "wake", "walk", "wall", "wand", "want", "war", "ward", "ware",
    "warm", "warn", "warp", "wash", "waste", "watch", "water", "wave", "wax", "way", "weak", "wealth", "wear", "weave", "web", "wed", "week", "ween", "weep", "weigh",
    "weird", "well", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "which", "while", "whim", "whip", "whirl", "whisk", "white", "who", "whole",
    "why", "wide", "widow", "width", "wield", "wife", "wild", "will", "wilt", "win", "wind", "wine", "wing", "wink", "wipe", "wire", "wise", "wish", "wit", "witch",
    "with", "woe", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worm", "worn", "worry", "worse", "worst", "worth", "would", "wound", "wrap",
    "wrath", "wreak", "wreck", "wrench"];
let WordShownOnScreen;
let wordQ = 0;
let wordFormatHTML = `<div class="FallWord">${WordShownOnScreen}</div>`;
let WordDictionary = [];
let HoldWordList = [];
let NumberOfWordkeyCode = 0;
let NumberOfWord = 0;
let FallWord = document.getElementsByClassName("FallWord");
let UserIn = [];
let MWin = document.getElementById('MWin');
let incorrectIn = document.getElementById("incorrectIn");
let missedWords = document.getElementById("missedWords");
let upcomingWords = document.getElementById("upcomingWords");
let completedWords = document.getElementById("completedWords");
let incorrectInR = document.getElementById("incorrectInR");
let missedWordsR = document.getElementById("missedWordsR");
let completedWordsR = document.getElementById("completedWordsR");
let wpmSpeed = document.getElementById("wpmSpeed");
let wpmSpeedR = document.getElementById("wpmSpeedR");
let Result = document.getElementById("Result");
let SpaceAlrt = document.getElementById("SpaceAlrt");
let CountUpcoming = WordDictionary.length;
let CountCompleted = 0;
let CountMissed = 0;
let CountSpeed;
let CountIncorrectInputs = 0;
let startTime;
let wordCount = 0;

//Default Function Running

UpperCaseMakingWordCollection();

//Word spliter into keyCode Numbers
document.addEventListener('keydown', (e) => {
    var name = e.key;
    var code = e.keyCode;

    if (NumberOfWord !== WordDictionary.length) {
        if (HoldWordList[NumberOfWord].length !== UserIn.length) {
            let TempArr = HoldWordList[NumberOfWord]; //Making a variable for selecting a word from a big word array.
            if (e.keyCode == TempArr[NumberOfWordkeyCode]) {
                UserIn.push(code); //Pushing user inputs into a array.
                let str = FallWord[NumberOfWord].innerHTML; //Making a string variable to get text content of word on the main screen.
                let toUpCase = e.key.toUpperCase(); //Converting UserInputs to upper case.
                FallWord[NumberOfWord].innerHTML = str.replace(toUpCase, ""); //Sending Updated Text to the selected element each time.
                FallWord[NumberOfWord].style.color = "#fff"; //Color change when focus on text for fire.
                setInterval(() => {
                    if (HoldWordList[NumberOfWord].length === UserIn.length) {
                        SpaceAlrt.style.display = 'flex';
                    } else {
                        SpaceAlrt.style.display = 'none';
                    }
                }, 10);
                NumberOfWordkeyCode++;

            } else {
                CountIncorrectInputs++;
                incorrectIn.textContent = CountIncorrectInputs; //Update if incorrect input in by the user.
                incorrectIn.style.color = "Red"; //Chnage color of alerting
                setTimeout(() => {
                    incorrectIn.style.color = "White";

                }, 500);

            }
        } else { //Completing a word will fire this.
            CountCompleted++;
            UserIn = [];
            NumberOfWordkeyCode = 0;
            NumberOfWord++;
            completedWords.textContent = CountCompleted;
            completedWords.style.color = "Yellowgreen"; //Chnage color of alerting
            setTimeout(() => {
                completedWords.style.color = "White";
            }, 500);
            //Speed Measurement 
            if (!startTime) {
                startTime = Date.now();
            }

            wordCount = NumberOfWord;

            const currentTime = Date.now();
            const elapsedTimeInSeconds = (currentTime - startTime) / 1000;

            const wpm = Math.round((wordCount / elapsedTimeInSeconds) * 60);
            let infinityStr = wpm.toString();
            if (infinityStr !== 'Infinity') {
                wpmSpeed.textContent = wpm + " WPM";
            } else {
                wpmSpeed.textContent = 0 + " WPM";
            }
        }

    }
    if (code === 32) {
        FallWord[NumberOfWord].style.color = "#fff";
    }

});


//Interval for spliting words
i = 0;
let intvr = setInterval(() => {
    SendingToScreen();
}, 1300);
SendingToScreen();
window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};
