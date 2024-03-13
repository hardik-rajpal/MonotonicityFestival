
//TODO: speakers: desc+webpage link.
export interface seminarSpec {
    speakers: string;
    dateTime: string;
    description: string;
}
export interface personTileSpec {
    name: string;
    image: string;
    description: string;
}
export interface dataSpec {
    text: string[];
    talks: seminarSpec[];
    callToAction: string[];
    speakers: personTileSpec[];
}
export const data: dataSpec = {
    text: [
        `Investigating the enduring challenge of Boolean Monotonicity Testing within Algorithm Design 
        uncovers a rich historical journey that has captivated scholarly interest for decades. The 
        narrative unfolds with the seminal contributions of Goldreich, Goldwasser, Lehman, Ron, and 
        Samordinsky, whose algorithms, operating with an impressive O(n) running time, shed light on 
        Boolean Monotonicity Testing over the Hypercube (which notably is an exp(n)-sized domain) within 
        the Property Testing Framework.`,
        `Over a decade later, C. Seshadhri and Deeparnab Chakrabarty presented algorithms with a time 
        complexity of o(n), reigniting scholarly interest in the problem. Subsequent contributions, often 
        co-authored by Seshadhri, Chakrabarty, and Hadley Black, have further enriched the field. Presently, 
        we have gained a comprehensive understanding of optimal non-adaptive one-sided algorithms for the 
        problem over the hypercube, along with extensions to other partially-ordered domains, such as Hypergrids. 
        Noteworthy contributions by Seshadhri, Chakrabarty, and Black in this context, including recent publications 
        in FOCS 2023 and STOC 2023, underscore the ongoing scholarly discourse.`,
        `Come join us here at IIT Bombay as we unveil the ideas that went behind this entire
        line of work. Our guides on this quest are Seshadhri, Deeparnab and Hadley (Duh!). It 
        should be a fantastic tour of the trends and techniques in this area and it should be of 
        interest to theory students and researchers both in India and Abroad. We have planned a 
        series of six talks to whet your appetite. Alright then, on we go.`,
    ],
    talks: [
        {
            dateTime: `Apr 15, 5:30PM (Deeparnab)`,
            speakers: `Deeparnab`,
            description: `An in-depth Introduction and Overview, delving into the intricacies of
             the edge tester and exploring isoperimetric connections, with a specialized focus 
             on the Hypercube.`,
        },
        {
            dateTime: `Apr 18, 5:30PM`,
            speakers: `Deeparnab`,
            description: `A comprehensive examination of o(d) testers for the Hypercube, 
            unraveling the conceptual underpinnings of path testers and illuminating the 
            profound connection between isoperimetry and o(d) testers.`
        },
        {
            dateTime: `Apr 22, 10:30AM`,
            speakers: `Hadley`,
            description: `An insightful overview of the Hypergrid domain, featuring a meticulous 
            analysis of the line tester, coupled with discussions on augmented hypergrids and 
            pioneering o(d) testers.`
        },
        {
            dateTime: `Apr 24, 10:30AM`,
            speakers: `Hadley`,
            description: `A meticulous exploration of domain reduction complexities, coupled with 
            the derivation of isoperimetric results tailored for the Hypergrid.`
        },
        {
            dateTime: `Apr 26, 10:30AM`,
            speakers: `Sesh`,
            description: `An academic journey into the intricate facets of KMS with Seshadhri, 
            unraveling the algorithmic intricacies of this scholarly endeavor.`
        },
        {
            dateTime: `Apr 30, 10:30AM`,
            speakers: `Sesh`,
            description: `The grand denouement, as Seshadhri presents the ultimate results for 
            Hypergrids, concluding with open questions that beckon the next wave of academic 
            exploration.`
        }
    ],
    callToAction: [
        `Participate in this scholarly odyssey, where rigorous academic inquiry converges with 
        the thrill of unraveling the secrets of Boolean Monotonicity Testing!`
    ],
    speakers: [
        {
            name: `Hadley`,
            image: `assets/hadley.jpg`,
            description: `<a href="https://www.linkedin.com/in/hadley-black-77241b19a/">LinkedIn</a>`
        },
        {
            name: `Deeparnab`,
            image: `assets/deeparnab.jpg`,
            description: `<a href="https://www.cs.dartmouth.edu/~deepc/">Webpage</a>`
        },
        {
            name: `Seshadhri`,
            image: `assets/sesh.jpg`,
            description: `<a href="https://users.soe.ucsc.edu/~sesh/">Webpage</a>`
        }
    ]
}
