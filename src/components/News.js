import React, { Component } from 'react'
import NewsItem from './NewsItem'


// props can't be change if we want too change props then we need to create a state over the props the we can change the state, so state can be change and props are can be read only.

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "NFL combine 2023 tracker: 40-yard dash, on-field workouts, highlights - Yahoo Sports",
            "description": "Follow along live with Yahoo Sports for the buzziest moments from this year's edition in Indianapolis.",
            "url": "https://sports.yahoo.com/nfl-combine-2023-tracker-40-yard-dash-on-field-workouts-highlights-155444085.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/B22PyqlR7dTP70ciTW_Lkw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/7c80fcb0-b925-11ed-afed-b4e2325b8864",
            "publishedAt": "2023-03-04T04:08:00Z",
            "content": "The 2023 NFL combine begins its on-field workouts portion today. (Photo by Zach Bolinger/Icon Sportswire via Getty Images)\r\nThe 2023 NFL combine is well under way. The defensive linemen and linebacke… [+834 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Ellise Shafer",
            "title": "Tom Sizemore, ‘Saving Private Ryan’ Actor, Dies at 61 - Variety",
            "description": "Tom Sizemore has died after being taken off life support, his manager Charles Lago confirmed to Variety on Friday. The 61-year-old actor suffered a brain aneurysm on Feb. 18. “It is with grea…",
            "url": "https://variety.com/2023/film/news/tom-sizemore-taken-off-life-support-brain-aneurysm-1235538021/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/02/tom-sizemore.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-03-04T03:41:00Z",
            "content": "Tom Sizemore has died after being taken off life support, his manager Charles Lago confirmed to Variety on Friday. The 61-year-old actor suffered a brain aneurysm on Feb. 18. \r\n“It is with great sadn… [+3218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Sophia Melissa Caraballo Piñeiro",
            "title": "How Ariana Madix discovered Tom Sandoval was cheating on her with Raquel Leviss - Page Six",
            "description": "Madix had been supporting Sandoval at his concert on Wednesday when she discovered that he was cheating on her. Here’s how.",
            "url": "https://pagesix.com/2023/03/03/how-ariana-madix-discovered-tom-sandoval-was-cheating-on-her-with-raquel-leviss/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/03/Ariana-Madix-Tom-Sandoval-Raquel-Leviss.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-03-04T03:16:00Z",
            "content": "Ariana Madix discovered Tom Sandoval was cheating on her after she found a sexually explicit video sent by Raquel Leviss on his phone, Page Six can confirm.\r\nMoments after Madix had watched her beau’… [+2888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Carly Thomas",
            "title": "‘Rachael Ray’ Daytime Talk Show to End After 17 Seasons - Hollywood Reporter",
            "description": "The host said she \"made the decision that it’s time for me to move on to the next exciting chapter in my broadcast career.\"",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/rachael-ray-daytime-talk-show-ending-17-seasons-1235340627/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Rachael-Ray-Show-publicity-H-2023.jpg?w=1024",
            "publishedAt": "2023-03-04T03:07:21Z",
            "content": "Rachael Ray, the daytime talk show, will end its run after 17 seasons on the air. \r\nThe decision to end the Emmy-winning program comes after host Rachael Ray recently launched a new production compan… [+1604 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Has CA hit the all-time state snow record? Here's where we stand - ABC7 News Bay Area",
            "description": "California's latest survey of snow levels in the Sierra Nevada shows the state continues to make gains against a punishing drought that seemed poised to drag...",
            "url": "https://www.youtube.com/watch?v=a42jegseGfI",
            "urlToImage": "https://i.ytimg.com/vi/a42jegseGfI/maxresdefault.jpg",
            "publishedAt": "2023-03-04T02:44:04Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Greece train crash: families of victims grieve as protests grow - Reuters",
            "description": "Families and friends, dressed in black, clung to each other, in tears, as the coffin of a 34-year-old mother killed in Greece's deadliest train crash was lifted up the stairs of a church on Friday.",
            "url": "https://www.reuters.com/world/europe/strike-protests-greece-anger-grows-over-train-crash-2023-03-03/",
            "urlToImage": "https://www.reuters.com/resizer/te3yFBFVb1fnP-2KIt0vzcQ9Qbk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NDB3XLALJRMGXIAEYOFA75DXCA.jpg",
            "publishedAt": "2023-03-04T02:01:00Z",
            "content": "KATERINI, Greece/ATHENS, March 3 (Reuters) - Families and friends, dressed in black, clung to each other, in tears, as the coffin of a 34-year-old mother killed in Greece's deadliest train crash was … [+4390 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Biden, Scholz pledge to punish Russia over Ukraine war - Al Jazeera English",
            "description": "An EU official also said China providing arms to Russia would be an ‘absolute red line’ and lead to sanctions: Report",
            "url": "https://www.aljazeera.com/news/2023/3/4/biden-scholz-pledge-to-punish-russia-for-ukraine-war",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/03/2023-03-03T192811Z_458120463_RC2DMZ9K9WQ9_RTRMADP_3_UKRAINE-CRISIS-BAKHMUT.jpg?resize=1920%2C1299",
            "publishedAt": "2023-03-04T01:40:44Z",
            "content": "US President Joe Biden and German Chancellor Olaf Scholz have committed to continue imposing high costs on Russia for its war in Ukraine, while a European Union official said any arms provided by Chi… [+3354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Seeking Alpha"
            },
            "author": "Jessica Kuruthukulangara",
            "title": "Silvergate suspends USD transfer network for crypto, institutional investor clients - Seeking Alpha",
            "description": "Silvergate Capital (SI) said Friday it made a \"risk-based decision\" to discontinue its Silvergate Exchange Network, according to an alert on its website, sending its stock ~2% lower...",
            "url": "https://seekingalpha.com/news/3944193-silvergate-suspends-usd-transfer-network-for-crypto-institutional-investor-clients",
            "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1197955157/image_1197955157.jpg?io=getty-c-w750",
            "publishedAt": "2023-03-04T01:24:24Z",
            "content": "marchmeena29\r\n<ul><li>Silvergate Capital (NYSE:SI) said Friday it made a \"risk-based decision\" to discontinue its Silvergate Exchange Network, according to an alert on its website, sending its stock … [+1048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Henry J. Gomez and Allan Smith and Jane C. Timm",
            "title": "Steve Bannon declares war on Fox News: 'You’ve disrespected Donald J. Trump long enough' - Yahoo News",
            "description": "Steve Bannon, a former top adviser to Donald Trump, unloaded a torrent of attacks Friday at CPAC on Fox News and its leader, Rupert Murdoch.",
            "url": "https://news.yahoo.com/steve-bannon-declares-war-fox-010925707.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_0dYKtfy_rPi_rtTOHHJAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/nbc_news_122/f75cae01c5f9aa338af2d40bf7c92db8",
            "publishedAt": "2023-03-04T01:09:00Z",
            "content": "NATIONAL HARBOR, Md. Steve Bannon, a former top adviser to Donald Trump, unloaded a torrent of attacks here Friday on Fox News and its leader, Rupert Murdoch a sign of escalating tension between the … [+5274 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Ken Hathaway",
            "title": "UFC 285 video: Jon Jones, Ciryl Gane square up last time at ceremonial weigh-ins - MMA Junkie",
            "description": "Jon Jones and Ciryl Gane faced off one last time before their heavyweight title fight at UFC 285.",
            "url": "https://mmajunkie.usatoday.com/2023/03/ufc-285-video-jon-jones-ciryl-gane-square-up-last-time-at-ceremonial-weigh-ins",
            "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/UFC-285-Main-event-faceoff.jpg?w=1024&h=576&crop=1",
            "publishedAt": "2023-03-04T00:45:00Z",
            "content": "LAS VEGAS Jon Jones and Ciryl Gane faced off one final time at Friday’s UFC 285 ceremonial weigh-ins.\r\nJones (26-1 MMA, 20-1 UFC) and Gane (11-1 MMA, 8-1 UFC) will fight for the vacant heavyweight ch… [+429 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Isaac Arnsdorf, Meryl Kornfield",
            "title": "Haley heckled as Trump movement asserts its dominance at shrunken CPAC - The Washington Post",
            "description": "The dustup showed the risks of taking the primary fight to what has clearly become Trump’s home turf.",
            "url": "https://www.washingtonpost.com/politics/2023/03/03/haley-trump-cpac-2024-presidential/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7QBSDR2I3VB727HHBBXHO4NWGA_size-normalized.jpg&w=1440",
            "publishedAt": "2023-03-04T00:28:06Z",
            "content": "Comment on this story\r\nRepublican presidential candidate Nikki Haley stepped into the hallway after speaking at the Conservative Political Action Conference on Friday to supporters asking for selfies… [+6478 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "",
            "title": "Anxiety still looms over East Palestine one month after train derailment - CNN",
            "description": "One month following the train derailment and subsequent chemical spill, residents of East Palestine and the surrounding region are still anxious about the long term effects for themselves, their families, and their businesses. CNN's Miguel Marquez reports.",
            "url": "https://www.cnn.com/videos/health/2023/03/04/east-palestine-derailment-community-impact-one-month-marquez-pkg-vpx.cnn",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230303163657-east-palestine-ohio-train-derailement-site-0302.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-04T00:27:34Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Joe Jacquez",
            "title": "Pelosi on DC crime bill: I wish Biden ‘would’ve told us first’ - The Hill",
            "description": "Former House Speaker Nancy Pelosi criticized President Biden’s handling of a GOP-led resolution that would overturn parts of a District of Columbia crime bill, decrying that he should have given Democrats “a heads up.” “If he was going to do it I wish he woul…",
            "url": "https://thehill.com/homenews/house/3883477-pelosi-on-dc-crime-bill-i-wish-biden-wouldve-told-us-first/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/01/pelosinancy_011223gn_w.jpg?w=1280",
            "publishedAt": "2023-03-04T00:26:00Z",
            "content": "Skip to content\r\nFormer House Speaker Nancy Pelosi criticized President Biden’s handling of a GOP-led resolution that would overturn parts of a District of Columbia crime bill, decrying that he shoul… [+2739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NHL trade deadline winners and losers: Rangers make biggest splash by adding Patrick Kane, Vladimir Tarasenko - CBS Sports",
            "description": "The 2023 NHL trade deadline is officially in the books",
            "url": "https://www.cbssports.com/nhl/news/nhl-trade-deadline-winners-and-losers-rangers-make-biggest-splash-by-adding-patrick-kane-vladimir-tarasenko/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/04/2c7f000d-b8fb-494e-8ac7-637eda3d3d98/thumbnail/1200x675/49a6c463443019ba9108a7fbec209b3a/gettyimages-1247645718-1.jpg",
            "publishedAt": "2023-03-04T00:23:58Z",
            "content": "The 2023 NHL trade deadline was one of the more chaotic ones that the league has seen in quite some time.\r\nAfter all, the likes of Patrick Kane, Bo Horvat and Ryan O'Reilly were all moved at the trad… [+8718 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Ken Miller",
            "title": "Storms roll eastward after slamming Texas; 5 deaths reported - The Associated Press - en Español",
            "description": "A large storm system spouting heavy winds and possible tornadoes in Texas, Louisiana, Alabama and Kentucky damaged homes and buildings, downed trees, left thousands without power and was blamed for the deaths of five people Friday as it marched eastward, thre…",
            "url": "https://apnews.com/article/tornado-winter-storm-snow-northeast-41c93dceb0e2bb94146541230b2f851a",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/d4e02c53e3be476f898d90aa9d65db11/3000.webp",
            "publishedAt": "2023-03-03T23:26:15Z",
            "content": "A large storm system spouting heavy winds and possible tornadoes in Texas, Louisiana, Alabama and Kentucky damaged homes and buildings, downed trees, left thousands without power and was blamed for t… [+3434 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Andrew Tangel",
            "title": "Boeing Board Denies CEO David Calhoun a Performance Bonus - The Wall Street Journal",
            "description": "Citing delays in 777X jetliner, company declines to award $7 million bonus, says Calhoun has largely met goals",
            "url": "https://www.wsj.com/articles/boeing-board-denies-ceo-david-calhoun-a-performance-bonus-3a3a6c74",
            "urlToImage": "https://images.wsj.net/im-736078/social",
            "publishedAt": "2023-03-03T22:16:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Fede Alvarez's Alien Reboot Adds More to Its Cast - Gizmodo",
            "description": "The Fede Alvarez-directed reboot of Ridley Scott's sci-fi franchise has also revealed a tiny bit more about its plot.",
            "url": "https://gizmodo.com/alien-fede-alvarez-ridley-scott-scifi-horror-casting-1850186286",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2cbca8210390cf463e9a7b398bc5ae19.png",
            "publishedAt": "2023-03-03T22:15:00Z",
            "content": "The next Alien filmdirected by Fede Alvarez (2013's Evil Dead)has just added more cast members, joining the previously announced Cailee Spaeny and Isabella Merced in the upcoming continuation of Ridl… [+1470 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Taylor Nicioli",
            "title": "Giant flying insect found on Walmart building turns out to be Jurassic-era find - CNN",
            "description": "A winged insect found on the side of a big-box store has been identified as the rare Jurassic-era giant lacewing. While the insect used to be widespread in eastern North America, this sighting is the first one since the 1950s.",
            "url": "https://www.cnn.com/2023/03/03/world/giant-lacewing-jurassic-discovery-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230303124452-giant-lacewing-jurassic-discovery.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-03T21:58:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAn insect found on the side of a Fayetteville, Arkansa… [+3959 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "Officials: Person dies after brain-eating amoeba infection - ABC News",
            "description": "Health officials say a person in southwest Florida has died after being infected with an extremely rare brain-eating amoeba",
            "url": "https://abcnews.go.com/US/wireStory/officials-person-dies-after-brain-eating-amoeba-infection-97619937",
            "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
            "publishedAt": "2023-03-03T21:53:36Z",
            "content": "PUNTA GORDA, Fla. -- A person in southwest Florida has died after being infected with an extremely rare brain-eating amoeba, health officials said.\r\nThe Florida Department of Health in Charlotte Coun… [+1249 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Anna Kramer",
            "title": "Amazon’s HQ2 Aimed to Show Tech Can Boost Cities. Now It’s on Pause - WIRED",
            "description": "Arlington, Virginia, won a US-wide contest to host Amazon’s second headquarters. More than half of the giant project is now indefinitely delayed.",
            "url": "https://www.wired.com/story/amazons-hq2-aimed-to-show-tech-can-boost-cities-now-its-on-pause/",
            "urlToImage": "https://media.wired.com/photos/6402419ab66dcce8cbc80888/191:100/w_1280,c_limit/Amazon-Pauses-HQ2-Project-In-Virginia-Business.jpg",
            "publishedAt": "2023-03-03T21:36:00Z",
            "content": "After a dramaticcompetition that pitted US cities against one another, years of contested planning, and claims of unwavering commitment despite the pandemic, Amazon now says its plan for a second hea… [+2918 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {

        return (
            <div className='container my-3' >
                <h2>NewsMonkey Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            // col-md-4 means it will take 4 columns in medium devices out of 12 grids given by bootstrap 
                            <div className="col-md-4"  key={element.url} >
                                {/* slice(0,44) means it will shoe the title from 0th character to the 44th character only and same goes for the description as well */}
                                <NewsItem title={element.title.slice(0,44)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default News
