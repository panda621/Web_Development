window.onload=function(){
     
    const messages=[
        "What does a baby computer call his father? Data.",
        "After an unsuccessful harves, why did the farmer decide to try a career in music? Because he had a ton of sick beets.",
        "I only seem to get sick on weekdays.I must have a weekend immune system.",
        "My friend was showing to me his tool shed and pointed to a ladder. 'That's my stepladder,' he said 'I never knew my real ladder.'",
        "What do you call a Frenchman wearing sandals? Philippe Flop.",
        "Why is it so cheap to throw a party all at a haunted housse? Because the ghosts bring all the boos.",
        "I don't get why Marvel doesn't use the Hulk to advertise more.He's basically one big Banner.",
        "What brand of underwear do scientists wear? Kelvin Klein.",
        "Which days are the strongest? Saturday and Sunday. The rest are weekdays.",
        "I just found out I'm colorblind. The news came out of the purple!,",
        "Did you know your pupils are the last part to stop working when you die? They dilate.",
        "My wife asked me the other day where I go so much candy. I said, 'I always have a few Twix up my sleeve.'",
        "How do cows stay up to date? They read the Moo-spaper.",
        "What's the difference between a well-man on a bicycle? Attire.",
        "I hate my job-all I do is crush cans all day. It's soda pressing.",
        "Where do pirates get their hooks? Second hand stores.",
        "Of all the inventions of the last 100 years, the dry erase board has to be the most remarkable.",
        "In America, using the metric system can get you in legal trouble.",
        "What do you call a line of men waiting to get haircuts? A barberqueue.",
        "In fact, if you sneer at any other method of measuring liquids, you may be held in contempt of quart.",
        "Who were the greenest Presidents in US history? The Bushes.",
        "My hotel tried to charge me ten dollars extra for air conditioning. That wasn't cool.",
        "What do you call a beehive without an exit? Unbeliveable.",
        "If I ever find the doctor who screwed up my limb replacement surgery... I'll kill him with my bear hands.",
        "Did you know that the first french fries weren't cooked in France? They were cooked in Greece.",
        "This morning, Siri said 'Don't call me Shirley.' I accidentally left my phone in Airplane mode."
    ];
      
    const instruction=document.getElementById("instructions");

    const start=function(){
        instruction.innerText="In order to start the game let's go through some instructions";
        setTimeout( function()
        {instruction.innerText= "the boxes below contain a surprise message"; }, 3000);
        setTimeout( function()
        {instruction.innerText= "to opern the message you need to click on the box";}, 6000 );
        setTimeout( function()
        {instruction.innerText="it'll produce an alert containing a message";}, 9000);
        setTimeout( function()
        {instruction.innerText="try and get a lucky message. All the best";}, 12000);
        setTimeout(start, 15000);
    }

    start();
    /*How to connect to HTML? I forgot. Show me next lesson and I can do it afterwards; well I tried without HTML*/
    const click_1= document.getElementById("one") 
    const click_2= document.getElementById("two")
    const click_3= document.getElementById("three")
    const click_4= document.getElementById("four")
    const click_5= document.getElementById("five")
    const click_6= document.getElementById("six")
    const click_7= document.getElementById("seven")
    const click_8= document.getElementById("eight")
    const click_9= document.getElementById("nine")
    const click_10= document.getElementById("ten")

    click_1.onclick = alert("Which days are the strongest? Saturday and Sunday. The rest are weekdays.")
    click_2.onclick = alert("My wife asked me the other day where I go so much candy. I said, 'I always have a few Twix up my sleeve.")
    click_3.onclick = alert("What do you call a line of men waiting to get haircuts? A barberqueue.")
    click_4.onclick = alert("Of all the inventions of the last 100 years, the dry erase board has to be the most remarkable.")
    click_5.onclick = alert("I don't get why Marvel doesn't use the Hulk to advertise more.He's basically one big Banner.")
    click_6.onclick = alert("I hate my job-all I do is crush cans all day. It's soda pressing.")
    click_7.onclick = alert("This morning, Siri said 'Don't call me Shirley.' I accidentally left my phone in Airplane mode.")
    click_8.onclick = alert("I only seem to get sick on weekdays.I must have a weekend immune system.")
    click_9.onclick = alert("If I ever find the doctor who screwed up my limb replacement surgery... I'll kill him with my bear hands.")
    click_10.onclick = alert("My friend was showing to me his tool shed and pointed to a ladder. 'That's my stepladder,' he said 'I never knew my real ladder..")    
}