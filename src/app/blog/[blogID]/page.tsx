'use client';
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import i1 from '@/assets/flags/1.webp'
import i2 from '@/assets/flags/2.webp'
import i3 from '@/assets/flags/3.webp'
import i4 from '@/assets/flags/4.webp'
import i5 from '@/assets/flags/5.webp'
import i6 from '@/assets/flags/6.webp'
import i7 from '@/assets/flags/7.webp'
import i8 from '@/assets/flags/8.webp'
import i9 from '@/assets/flags/9.webp'
import i10 from '@/assets/flags/10.webp'
import i11 from '@/assets/flags/11.webp'
import i12 from '@/assets/flags/12.webp'
import i13 from '@/assets/flags/13.webp'
import i14 from '@/assets/flags/14.webp'
import i15 from '@/assets/flags/15.webp'
import i16 from '@/assets/flags/16.webp'
import i17 from '@/assets/flags/17.webp'

import Image from "next/image";
import Marquee from "react-fast-marquee";
const flags = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17]




let Cards = [
    {
        img: '/assets/flags/1.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/2.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/3.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/4.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/5.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/6.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/7.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/8.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/9.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/10.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/11.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/12.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/13.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },

    {
        img: '/assets/flags/14.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },

    {
        img: '/assets/flags/15.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/16.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
]


const blogs = [
    {
        name: "Saathi",
        department: "",
        title: "AIDS - A Social Plague",
        id:"1",
        story: "While the world is preoccupied fighting the COVID-19 pandemic, let’s all take a moment to acknowledge another pandemic that has been going on for nearly 40 years now, with no vaccine or cure yet. World AIDS Day has been commemorated every year since 1988 on December 1, to raise awareness of HIV/AIDS, and to mourn the victims of the disease. 38 million people worldwide are living with HIV, the virus that causes AIDS, and 32 million people have died from AIDS related causes so far (compared with 1.5 million from Covid-19.) AIDS is the disease caused by the HIV virus. It typically happens when your body’s T-cells, which fight pathogens, fall below a certain threshold, thus leaving you susceptible to opportunistic infections. AIDS has disproportionately affected the LGBT community, due to a higher risk of transmission from certain sexual acts such as anal sex. An entire generation of gay men was lost in the 1980s and early 1990s, when much wasn’t known about the disease, and there were no effective treatments available. People were dying of opportunistic infections caused by the weakening of the body’s immune system. The early drugs used to treat AIDS, such as AZT worked only in a limited manner, were toxic and had many side effects. The advent of protease inhibitors in the mid 1990s, and even more effective ART (anti-retroviral therapy) in the 2000s meant that it became a manageable chronic disease. Now, most HIV positive persons take as little as one pill a day to keep the virus in check, and most HIV positive people do not progress to getting AIDS. However all this does not mean that people should get complacent. The greatest threat HIV poses is due to the stigma associated with it. Many people who know they are HIV positive do not disclose their status due to stigma or fear of rejection. Some people are reluctant to get tested, as they do not want to find out their status due to the stigma associated with being HIV positive. And those that are not on treatment are of greatest risk since they could be having a very high viral load... the amount of the virus in your blood... which makes transmission to others easier. The least risky persons are those who are undetectable... who regularly take their medications that keep the level of the virus in their blood to undetectable levels, and thus are untransmittable. These days, the recommendation is to get started on ART as soon as you test positive for HIV, as that has the best outcome for both you and others. ART is available for free in India through government hospitals, or you can also get it through private doctors. The HumSafar Trust, an NGO in Mumbai that provides HIV/AIDS services, runs an LGBT sexual health clinic, and this can also be a great resource. Nowadays you also get what is known as PrEP (Pre Exposure Prophylaxis), where you can take a pill a day if you are HIV negative. While this has reduced HIV transmission rates, PrEP is still not widely available in India, and is not covered by government programs. And just as masks, when worn properly, greatly reduce your chances of getting Covid-19, condoms, when used properly are still among the best protections against HIV. Also, PrEP will also not protect you against other STIs such as syphilis, gonorrhea and chlamydia. The other thing to keep in mind if you are HIV positive is to lead a healthier lifestyle. As HIV positive people live longer and get older, they suffer from other conditions, which can interfere with the HIV. A healthy diet that is rich in fruits/vegetables and low in refined/processed products such as sugar or maida, and regular exercise are a must. Avoid smoking at all costs; if you do smoke, join a smoking cessation program. If you drink, do so in moderation, and avoid recreational drugs (in India known as HF or High Fun), which are very popular in the gay community, as the harms caused by then far outweigh the temporary pleasure that they provide. And addiction can be a deadly downward spiral. With a proper lifestyle, HIV is no longer the scourge that it used to be, and one can live one’s life normally just like with any other chronic condition. However prevention is still best, and so try to take proper precautions to not get it in the first place. And do not stigmatise HIV positive folks; they deserve the same dignity and respect as anyone else. P.S. on that note, the insti dance club In-Sync has an annual event that is unfortunately named “AIDS”. Just as you wouldn’t name an event “Covid-19”, it is tasteless and demeaning to name one “AIDS”. I request InSync to correct this mistake made years ago, and rename their event to something more appropriate."
    },
    {
        name: "Kumaresh Ramesh ",
        department: "ESE - 2016-21",
        title: "Stories of the Campus-7",
        id:"2",
        story: "My journey as a gay man (boy? teenager?) had begun well before I got into IITB. I was fortunate to have come to terms with my sexuality and accepted myself by the time I was 15 (thanks internet!). Even so, I did not have anyone to talk about it with. Two years of “integrated coaching” left little room for discussing personal issues with friends, and whenever such conversations cropped up; I would deflect attention and recentre the conversation upon the other person. The prospect of losing the few close friendships that had kept me sane under the weight of JEE prep was too terrifying. As the business end approached, I began to read about the LGBTQ+ student community in IITs. Some of it was downright homophobic (but always anonymous), some supportive comments, and a few by *gasp* actual queer IITians. Their courage to speak out and the efforts they had taken to foster acceptance in their campuses gave me hope, something I, as a 17-year-old gay boy, didn’t have much of. I looked at insti as an opportunity for freedom and a space to be my true self. After all, the presence of Saathi was proof that a campus housing some of the smartest brains would be a liberal and inclusive place. My first day in IIT Bombay, 21 July 2016, was the Convocation Hall orientation. While other anti-discrimination measures were highlighted, there was no mention of LGBTQ+ individuals. The institute must have had its reasons (re: the 2013 SC decision) but, to me, it meant two things – (i) the needs of the LGBTQ+ community were not recognized by IIT Bombay (ii) I missed a good opportunity to gauge my typically-conservative-parents’ response (or the lack thereof) to the topic. The omission, therefore, was disappointing, but I hadn’t known then that worse was to come. The student body orientations over the next few weeks were served with a generous helping of in-your-face crude queerphobic jokes that were met with cheers and laughter from the audience. The insti felt as inclusive as Pauli’s principle on quantum numbers. The biggest casualty, perhaps, of such an environment in campus was that my interactions with most people in my first semester remained on a superficial level. A sense of self-preservation precluded me from being close friends with anyone whose support for LGBTQ+ people I couldn’t be sure of. I couldn’t care less for the much-vaunted wing culture either – by the end of my first year, I had barely made any effort to socialize with my wingmates, beyond discussing acads. I decided that I’d much rather be the asocial weirdo than deal with the consequences of being an out gay student. Today, I often think about how things might have been had I mustered more “courage” and come out to my wing. Nonetheless, it is really unfair to put the burden on a closeted freshie who, as was true for me, would not be out at home too. I hope the institute has become or becomes more proactive in reaching out to LGBTQ+ students, especially those in their first year through the ISMP mentors. My recon had obviously led me to Saathi much before coming here. Even so, listening to Aditya Shankar live at the PCSA had me in tears (a mix of happy and sad ones I think). That their slot was at the fag end of the orientation was unsurprising even then, but the upside of it was that the recency effect tricked my brain into being happy that night. Full of this new-found positive energy, I somehow figured out the strange staircase entrance to the H16 mess where the Saathi introductory session was held. I was quite confident that we’d be moving to a bigger space till I reached there to find less than five freshies there, including yours truly. While I would continue to attend their events throughout the year and the next, I could never find the courage to open up to them until the start of my third year, partly because of the lack of my batchmates. The best thing about Saathi, however, is that I never felt the pressure to come out until I was ready. By the end of my first year, I had made a few really good friends in the department and found a family in Literati. I gained enough confidence to discuss LGBTQ+ issues with my friends and through social media. It certainly helped that 2017 was a watershed year for queer cinema with Moonlight and Call Me By Your Name gaining widespread recognition. I remember reading CMBYN from cover to cover in a single sitting on the night before an endsem. I ended up performing poorly but it was totally worth it. (Please don’t do that.) That year, I also splurged a bit on gay novels and, embarrassingly enough, Alt Balaji just for one series. In the first half of the fourth semester, applications were invited for the Cargill scholarship. In the form, they asked us about ‘a social cause close to your heart and how you would contribute to it’. It was a moment of reckoning for me – I saw it as an opportunity to finally put in writing the truth about me. My sexuality was no longer something hidden, and I hadn’t felt lighter than I did when I pressed ‘Submit’ on that 300-word essay. We were sitting in The Campus Hub (RIP); I was eating an Open Cheese and he had finished his pav bhaji. ‘Twas the IPL season, and my focus was squarely on the match till he picked up the topic of ethics of secrets. His position was that, unless someone explicitly asks you to keep something a secret, you shouldn’t be morally bound to do so. I argued that, in some contexts, the secrecy is implied. I am still not sure why I chose to do so – maybe I was just looking for an excuse – but I came out to him that evening. The debate was forgotten and so was the match and we sat there with him listening to my part-story-part-rant till the mosquito bites really became unbearable. It was terribly anticlimactic, really, but I couldn’t have planned a better coming out if I wanted to (or maybe a six-layered chocolate cake in the shape of a closet, some confetti and Pete Shelley’s Homosapien blasting in the background would have been nice). Love you, bro! Just after the endsems, I was pleasantly surprised to have been shortlisted for the interview round for the scholarship. I really didn’t go in with any preparation – all I had decided was that I would be honest, no matter what. The discussion I had with the panel, in the latter half, helped me put in perspective what being out would mean to me as well as the ones around. Once I received that acceptance – from both a close friend and complete strangers – I couldn’t wait to get more of it. When I returned to college in the fifth semester, I embarked on a spree of coming out – friends, roommate, parents, Saathi, and even more friends. By the end of the third year, I was practically out to whoever knew me. The experience undoubtedly has been quite positive for me. Four years ago, if someone had told the freshie plonked on the bed in 15A/818 that an article like this would be written by him on a department blog, he would have laughed you out of the room. The path to acceptance is not a straight highway, but much more like an old town road with bumps and turns. Personally, I feel that the institute too has traversed a journey of acceptance from 2016 to 2020. Saathi has moved from the H16 mess to the New Yoga Room. I have found allies in people who I wouldn’t have thought of in my first year. So hey, if you are unsure about your sexuality or identity or in the closet afraid of how people would respond, just hang in there. It took me two years here, it could take you one or four – and that’s completely fine. Do try to find at least one friend you can pour your heart out to, it’d become so much better. To the others, whenever and wherever possible, be more vocal about your allyship. You never know whose life you’d be impacting with words and gestures that might otherwise seem trivial."
    },
    {
        name: "Anonymous",
        department: "",
        title: "Stories of the Campus-6",
        id:"3",
        story: "Today’s Coming Out Day, you say? Pfft, what’s so special about dedicating a whole day just for coming out? Well, it’s special to me because in my case, it also happens to be the day I first came out, 3 years ago. (Coincidence? Nah.) When I was in school, I knew I was attracted to people of my gender, but it seemed not more important than academics to me. I was okay with subconsciously shrugging off a whole part of my identity. Fast forward to when I came to insti: A starry-eyed freshie, I was exploring everything that insti had to offer. Never had I expected that I would soon have to deal with the approaching sense of a disgruntled self-identity. I started to realise that I had to consciously deal with surges of emotions I began experiencing. Do I like that girl from class, or is it just infatuation? Do I like guys romantically, or is it just physical feelings? In my sophie year, I started thinking way too much about my future and whether I will be accepted at home. I ended up depressed and it affected my academics too. That’s when I learnt about Coming Out Day. For quite a while, I knew a friend who was openly supportive of the LGBTQ community as he was involved with Saathi. On October 11th, it was probably around midsem time and I was studying in the CS building, when I decided I *had* to do it. I finally came out to that friend over text. I ended up getting very emotional but I felt relieved. The cushioning of support that my friend gave me helped me slowly come out to my other good friends, one by one. I felt a burden ease, little by little. I was enthusiastic to make sure my friends know and acknowledge this facet of me. Much to my relief, (and my choices of friends,) I was accepted wholly by most of them. It wasn’t always easy, though. Sometimes I came out on chat, sometimes on call. The first time I came out to someone in person, I couldn’t pull myself together and I tried my best not to be a mess (though it’s totally okay to be so.) I once had an awkward conversation with a well-intentioned friend where I had to explain that I am gay, not trans. I slowly built a circle of friends with whom I could just be like any other normal person. I talked about my crushes, got to whine about society, share memes, and ultimately made buddies to fall back on. What I *didn’t* expect was the effect of my coming out on my friends in return. At about 3 or 4 am one morning, in a vulnerable phone call from one of my friends whom I came out to, they said they were also gay. That feeling was incomparable. I am proud of my friend for having taken the courage, and happy that I was able to help them. I ended up learning about the identities of several of my friends -- and I realised that people from different corners of the LGBTQ+ spectrum are everywhere around us. I am not out to my parents yet, but it has always been an evolving journey for me. I am incredibly lucky to have some of the most empathetic people as friends who provide me a safe space - one which helps me keep sane in this patriarchal world. To those who are closeted, please don’t fret about your future. Times are changing. And don’t put pressure on yourself to come out. Just ask yourself if you are at peace with how you are now, and let that guide you. Remember: your friends might be willing to change their views once they know that being queer is not something that exists on the fringes of society. To people who don’t absolutely hate the LGBTQ community or you don’t care: It may sound simple, but even one visible sign that you are an ally, be it using gender-neutral pronouns/not assuming someone’s gender, being vocal about minority issues, or even a small rainbow - can greatly boost a closeted person’s trust in you. Spare a few moments to reflect: do you want to be there for someone who may be desperately trying to seek help? This coming out day, I request you to play a more active role in making sure no friend of yours thinks you will discriminate against them. Ultimately, having to ‘come out’ should cease to exist.rst year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Devesh Khatu",
        department: "CSE-1986-90",
        title: "Stories of the Campus-5",
        id:"4",
        story: "I went to IIT Bombay between 1986 and 1990. I was nerdy and studious back then and focused mostly on my courses. I had no social skills or a life outside of academics. At that time, there were absolutely no LGBTQ resources, either on campus or outside. In those days, we didn't even have the internet, let alone mobile phones or apps, and so it was impossible for me to meet other gay people. In my hostel (H9), there used to be a staff member they called \"homo\". I didn't even know what exactly the term meant, let alone what two \"homos\" did. But the rumor was that some students used to engage in activity with the person, though I didn't know which ones. The term \"homo\" actually was generally used in a derogatory manner in any case. There was a famous EE professor who was known as \"homo\" since he was notorious for (figuratively) “r*ping” students in exams. I used to be called \"pansy\" myself since I had a distinctive walking style (think 20 km walk at sporting events!) Anyway, I graduated from insti without experiencing any gay activity or knowing any other gay students. After graduation, I went to the US, where I lived most of my adult life. During my first year there, I decided to take advantage of my new found freedom to explore my sexuality. I placed an ad in the local newspaper to meet other guys. One of the guys I met introduced me to another gay Indian PhD student there, also an IITian from IIT Kanpur. It was the first time I had ever met another gay Indian. While I had gotten active in LGBTQ activism there, I was still not out to any straight friends. Somehow, however, an IIT classmate came across something about me online, and one day called me and asked me if I was gay. I replied in the affirmative...and that was my first time coming out to a straight person. He was very open-minded and was very accepting and supportive. Soon, through the grapevine, other batchmates came to know, though I didn't talk about it directly with most as they were not comfortable talking about it. The advent of social media and Facebook, in particular, made coming out very easy, as I was completely out on there, and posted freely about gay stuff, resulting in my coming out to anybody who was friends with me there. Pretty much everybody was supportive, or it was a non-issue. Five years ago, our IIT batch was celebrating our Silver Jubilee reunion, and I decided to attend. We had to write about our life journeys over the 25 years since leaving IIT for our yearbook. I decided to pour my gay life story there, coming out to all my batchmates in the process. I became the go-to person to ask about any LGBTQ issues since I was the only person out of 300+ in my batch to be out. Life sometimes makes a full circle. Last year, the CEO position for the IIT Bombay Alumni Association opened up. I had been considering moving back to India to be closer to my mom, and so applied for and got the position. This meant my second coming to the campus began! Obviously, LGBTQ life on campus has undergone a drastic change for the better since my first time there 30 years ago. Now there is Saathi, which just got sanctioned as an official gymkhana body. Dating apps make it easier than ever to find and meet other gay folks on campus. There have been events featuring mental health and HIV/AIDS experts from the community and LGBTQ film screenings. And the institute has a counseling cell with some very supportive counselors. I see myself as a mentor to students on campus in my new role and am happy to share my life experiences and offer support to students. One of the areas where I feel I have made impact has been to counsel LGBTQ students going through mental health issues due to their sexuality. While I am not perfect and have had my share of ups and downs in life, students feel empowered when they see an out gay person living a normal life on campus. There is still some homophobia and some cluelessness, such as the name the student dance body on campus has given its annual event (AIDS!), something I am committed to getting changed. With better visibility and education, we have the power to transform the thinking of the current generation of students. It only gets better!"
    },
    {
        name: "Shardul Gaur",
        department: "EE-2010-14",
        title: "Stories of the Campus-4",
        id:"5",
        story: "I knew I was gay when I was 12 years old. Growing up, I created my own space with my secret, while always pretending to be someone else. I went to IITB with my pretending personality, but it is hard to keep a secret while surrounded by people all the time. Things even got harder when my friends picked up some signs and made a big joke out of it. I started to lose confidence because the joke which my innocent friends were playing around with was actually true and it made me more vulnerable to the mockery. I was ashamed and scared of my identity. After 3 years, I gathered the courage to tell few of my friends about my sexuality. I was unable to see any future or scope of happiness. I cried multiple times in front of my closest friends who themselves didn’t have any answers. After getting into the job, I started telling my other friends and also my brother. I realized that people are much more accepting than we think they are or maybe I was too lucky. Self-acceptance is of utmost importance when seeking acceptance. My brother was the first person who pushed me not be ashamed of being gay and take a step to find other gay people to date. I finally found an escape when I moved to London in my job with Deutsche Bank, where I found the LGBT scene to be quite open (yet brutal sometimes), but still got a lot of space to grow and accept who I am. I made a circle of friends of many Indians including people from various IITs, who are very open minded but, some LGBT awareness was missing. Once, I was in a pub with a bunch of these new friends when I caught them making fun of a gay person. It took me some courage, but I confronted them and announced that I was gay as well. There was suddenly a long silence. That day gave me a lot of confidence to be proudly gay. I finally came out to my (extremely religious) parents in 2019 and it was not half as bad as I thought. They took more than 6 months and numerous discussions to get comfortable with the idea and to let go of the hope for a bride. It’s funny how I never wanted to speak about my sexuality earlier and now I never want to shut up about it. I am extremely grateful to the people around me who helped me become a proudly gay person and I am very excited to spread awareness by being a role model for other LGBT people to help them accept themselves. I have also been associated with Deutsche Bank’s LGBT group “DBPride” who has, among a lot of other issues, done amazing work towards inclusive workplace environment, drawing support of senior management for LGBT community and making its employees feel welcomed no matter their sexuality of gender identity. It is always a journey which everyone has to travel by themselves but some helping hands on the way are often required. I would like to tell everyone who reads this story (LGBT or otherwise) - live life on your own terms and never let anyone tell you who you can or cannot be!"
    },
    {
        name: "Aditya Joshi",
        department: "CSE MTech/PhD",
        title: "Stories of the Campus-3",
        id:"6",
        story: "I am a 'double-alumnus' of IIT Bombay. I was fortunate to complete two degrees there: Masters and PhD. During my MTech, I was a closeted student and there was no Saathi on campus. I had LGBTQ friends but I would be scared to be seen with them in public. I lied to my batchmates about having a girlfriend. The feeling of being dishonest was overbearing. When Harish first told me that he was going to talk to a professor about setting up an LGBTQ support group, I had told him, \"Is IIT ready for it?\" A year after I graduated, I came out to my parents. While they were coming to terms with it, I enrolled myself as a PhD student in the IITB-Monash programme. During my PhD, I came out in a Saathi video - it was really a leap of faith. Soon after, I started to contribute to Saathi events on campus. As we organised talks, movie screenings and play stagings on campus, we realised that positive conversation about LGBTQ people was growing. Thankfully, I was extremely fortunate in terms of the people around me. My PhD supervisors, professors and staff in my department, staff at the IITB-Monash Research Academy, all my project collaborators and my friends were extremely supportive of me. Often, my friends were questioned about their sexuality just because they were hanging out with me. Luckily, they knew that my truth about myself was only one aspect of my personality. I was cool to hang out with - and that's all that mattered between my friends and me. Being out allowed me to focus on my PhD research without having to bother about covering up who I was. My honesty about my personal life allowed me to work hard and focus on my academic research. When a scared MTech student like me became an out PhD student, I realised the power of speaking the truth. I experienced how liberating being honest about myself was. To me, my Pride as a gay man lies in this experience of truth and honesty."
    },
    {
        name: "Anisha Bajaj",
        department: "ESE-2013-18",
        title: "Stories of the Campus-2",
        id:"7",
        story: "I came to terms with my sexuality in my second year. I was clueless and had a lot of questions so I reached out to Aditya Shankar from Saathi. He was very kind and was always there to answer my questions in the early days. Right from the beginning, I had told my friends, (who were also my roommates) about what's going on. They were super cool about it and that made a huge difference in my acceptance of myself. At least I knew I would always have them around irrespective of others. So I started telling other friends/peers one by one about it and was observing the reaction I got. Most of them were very okay with it and asked me more about how do I know etc. Some even checked with me if I was okay. Saathi had a role to play to have such an accepting environment in the institute. I also think that my being female helped and the experience might not be the same for men. The summer after my 2nd year, I worked on Saathi Connect along with Aditya Shankar, Aditya Joshi and Mihir. As part of the project, we spoke to young people from the LGBTQ community asking them about acceptance, coming out and their story. Before that, I was feeling sad for myself. After the project, I felt very okay with myself. I realised I am not the only one going through this and its okay. Those who matter will come around this and I should distance myself from those who don't. I also got to spend a lot of time around Aditya, Aditya and Mihir. They knew a lot about gender and sexuality and the social nuances around it and I got to speak to them and learn. So, that summer was transformative for me and I will forever be in debt to the 3 people. Saathi was there for me when I very much needed it and it was time for me to give back. It was also a way to surround myself with people who care about the cause. I organised events which can bring people together and get to know more about the cause. A lot of people trying to come to terms with their sexuality reached out to me and I tried to help as much as I can. The institute, in general, is a very accepting place. I didn't interact much with faculty on this, so I am not sure of their view on this. Prof Ramesh Bairy (HSS) and Prof Dayadeep Monder (DESE) had brought this topic on their own and had appreciated my efforts in Saathi. So that was cool. It is great that Saathi is now an official institute body and we get to organise events in Institute. Having said this, there will always be some people who will not be okay with it. These also happen to people who won't come out and speak out their thoughts. So, I guess it is okay. Everyone is allowed to have their opinions and I ensured to maintain my distance from them. In the end what matters is to be happy. Being accepting of my sexuality and working for Saathi makes me happy and proud"
    },
    {
        name: "Harish",
        department: "EP-2007-11",
        title: "Stories of the Campus-1",
        id:"8",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life."
    },
]




export default function Detailed({ params }: { params: any }) {
    const router = useRouter();
    const blog = blogs[params.blogID - 1]
    return (

        <>


            <section className="dark:bg-darkBg bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                    <Button onClick={() => router.back()}>Go Back</Button>
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        {blog.title}
                    </h2>
                    <div className=" justify-between items-center  border-12 ">


                        <section className="border-b-border dark:border-b-darkBorder dark:bg-darkBg inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
                            <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
                                <p className="font-medium text-3xl pb-10"> {blog.name} &#124; {blog.department} </p>
                                {blog.story}
                            </div>
                        </section>
                    </div>

                </div>
            </section>


            {/* Marquee Component */}

            <div>
                <Marquee
                    className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-darkBg border-y-2 bg-white py-3 font-base sm:py-5"
                    direction="left"
                >
                    {Array(17)
                        .fill('xd')
                        .map((x, id) => {
                            return (
                                <div className="flex items-center" key={id}>
                                    <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">

                                    </span>
                                    <Image
                                        src={flags[id]}
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                </div>
                            )
                        })}
                </Marquee>
            </div>




            <Footer></Footer>

        </>


    )
}