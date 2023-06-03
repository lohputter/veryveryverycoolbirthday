const slidesData = [
    { 
      header: "Why you should hire Rui",
      subtitle : "A Real Job Resume",
      credits: "Click right arrow or just click screen to go to next slide",
      image: "/assets/dead.png",
      clicks: 1
    },
    { 
      header: "Reason One",
      subtitle : "",
      credits: "This is Nikolai. Nikolai says Hi.",
      image: "/assets/nikolai.jpeg",
      clicks: 2,
      excess: "Nikolai is named after some random ass Russian author and if you like Nikolai, you gain interest in literature. And Rui like Nikolai. So she has literature skills?? (totally not bs). In addition, Nikolai is hot and that means she has good taste in people which means she is trustworthy. (Trust, trust)"
    },
    { 
      header: "Reason Two",
      subtitle : "Hannibal",
      credits: "uhh..okay so Hannibal is like a cannibal and they eat people and for some reason Rui likes Hannibal. This allows her to truly appreciate violence and murder and cannibilism and hence uhh shows great emotional strength (lie) and this shows how wonderful her spirit is.",
      image: "data:image/jpeg;base64,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",
      clicks: 1
    },
    {
      header: "Reason Tree",
      subtitle : "Rui is oldsexual",
      credits: "Oldsexuality is a sexuality whereby you are attracted to older men. Rui is oldsexual and technically speaking, would be part of the LGTV+ community. Rui is someone who is inclusive and does not care what your sexuality is because she is lgtbwq32d herself :D",
      image: "/assets/oldsexual.jpeg",
      clicks: 1
    },
    {
      clicks: 1
    },
    {
      header: "Treason Foure",
      credits: "Most people she likes are DEAD. So like this means she can emphatise with people who died and uh she got good emotional intelligence!!!!",
      excess: 
        <ul>
          <li>Odasaku</li>
          <li>Connor</li>
          <li>Fukuzawa</li>
          <li>hopefully more to come..</li>
        </ul>,
      clicks: 2,
      image: "/assets/dead.jpeg"
    }, 
    {
      header: "Bonus Point!!",
      credits: "Because she has seen people die before, that means she definitely has managed to grief well and has very good emotional strength (totally not sarcastic)",
      clicks: 1,
      image: "/assets/emotion.png"
    },
    {
      header: "REQWASON FWIVKE", 
      subtitle : "Dear Connor Murphy..", 
      credits: "Rui has read Dear Evan Hansen but more importantly, she uh knows the lyrics to Sincerely Me. Tis very important skill in life since Sincerely Me teaches Rui how to write emails in the proper format 'Dear Evan Hansen...Sincerely, Me' and this song also has very uh educational lines such as 'The only man that I love is my dad.'.",
      image: "/assets/sincerely.jpeg",
      clicks: 1
    }, 
    {
      header: "PWOSBBIEL JOBS SHE CANS APPLY FOUR",
      subtitle : "Sketch Artist",
      credits: "Rui is good at art i mean like idk what else to say. She just good at art and others have skill issue. She has W skill and we dont so we better cope with this. She does not give herself enough credit cuz of humility but we should all reemmber she good :DDD",
      image: "/assets/sketch.jpeg",
      clicks : 1
    },
    {
      subtitle : "Best Friend",
      credits: "She is just too pro at being a good friend who is there is to be very thoughtful and just be very COOL and chill and this job is very cool and whoever is her best friend is a lucky one :)",
      image: "/assets/friends.png",
      clicks : 1
    },
    {
      subtitle : "Wingman (maybe)",
      credits: "Actually nvm this one you will probably have to become her wingman if she sees a middle aged man due to her oldsexuality. ",
      clicks : 1,
      image: "/assets/friends.jpeg",
      excess: "just realised how god awful my rectangular glasses were- whoops going off topic."
    },
    {
      header: "Conclusion",
      credits: "Hire Rui for a job because she definitely has the qualifications to do a job. If she does not get a job, that's a missed opportunity!!!! (there's still other slides)",
      clicks: 1,
      image: "/assets/elise.jpeg"
    }, 
    {
      header: "On A Serious Note",
      clicks: 1,
      image: "/assets/deaths.png"
    },
    {
      header: "On An ACTUAL Serious Note",
      credits: "Happy Birthday Rui (aka my number zero best friend)! Thanks for being my friend! I know that we may not hang out as much but that's okay :) In a few years, we may or may not go our seperate ways but hey, I am glad we currently have been friends for 6 years. In the future, you do you, and I do me (unless we get an apartment together then like yah that's literally being stuck together lmao but then again our jobs may not pay that much). Whatever, the future is the future. Now is the present. Now is your birthday!! WOW!!! This is very important! And significant! Just like Fukuzawa's death! Or Odasaku's Death to Dazai! Or Connor's Death to Evan! Or that Random Riff guy you were talking about!! He died right? Yah he did. Oh well. Thanks for being someone who I can just talk to about shit and sorry (not sorry) for all my dead jokes. Stay fresh, stay artistic and stay oldsexual my friend. Dude, I am proud of you, just keep pushing through. Our friendship goes beyond your average kind of bond! All you gotta do is just believe you can be who you want to be. Sincerely, Me.",
      clicks: 1,
      image: "/assets/deadman.jpeg"
    }
];
const proof = ["/assets/oldsexual2.jpeg", "/src/assets/oldsexual3.jpeg", "/src/assets/oldsexual4.jpeg", "/src/assets/oldsexual5.jpeg"]; 
let currentClicks, slide = 0;
function nextSlide() {
    if (currentClicks < slidesData[slide].clicks) {
        currentClicks++;
        if (currentClicks == slidesData[slide].clicks) {
            slide++;
            currentClicks = 0;
            document.getElementById("header").innerHTML = slidesData[slide].header;
            document.getElementById("subtitle").innerHTML = slidesData[slide].subtitle;
            document.getElementById("credits").innerHTML = slidesData[slide].credits;
            document.getElementById("image").src = slidesData[slide].image;
        }
    }
}
function reverseSlide() {
    currentClicks = 0;
    slide--;
    document.getElementById("header").innerHTML = slidesData[slide].header;
    document.getElementById("subtitle").innerHTML = slidesData[slide].subtitle;
    document.getElementById("credits").innerHTML = slidesData[slide].credits;
    document.getElementById("image").src = slidesData[slide].image;
}
document.addEventListener('click', nextSlide);
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        reverseSlide();
    }
});