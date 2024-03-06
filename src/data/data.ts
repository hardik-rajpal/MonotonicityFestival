
//TODO: speakers: desc+webpage link.
export interface seminarSpec{
    speakers:string;
    dateTime:string;
    description:string;
}
export interface personTileSpec{
    name:string;
    image:string;
    description:string;
}
export interface dataSpec{
    text:string[];
    talks:seminarSpec[];
    callToAction:string[];
    speakers:personTileSpec[];
}
export const data:dataSpec = {
    text:[
        `Embark on a scholarly exploration into the enduring challenge of Boolean Monotonicity Testing, an age-old puzzle in Algorithm Design that has evoked scholarly fascination for decades. The saga commenced with the pioneering contributions of Goldreich, Goldwasser, Lehman, Ron, and Samordinsky, who devised algorithms operating at an admirable O(n) efficiency, illuminating the path for Boolean Monotonicity Testing over the Hypercube within the Property Testing Framework.`,
        `More than a decade later, in a seminal work, C. Seshadhri and Deeparnab Chakrabarty presented o(n) time algorithms for this problem rekindling interest in this problem. A flurry of important results trickled in (with Seshadhri and Chakrbarty co-authoring a fair share of those together with Hadley Black). Fast forward to the current times. We now know understand optimal non-adaptive one-sided algorithms for the problem over the hypercube. Of course, you can ask this problem over other partially-ordered domains as well. One popular such domain is the Hypergrid domain. Seshadhri, Chakrabarty and Black have several important contributions over the hypergrid domain as well. Some of these results are very recent ond only appeared in FOCS 2023 and STOC 2023.`,
        `Come join us here at IIT Bombay as we unveil the ideas that went behind this entire line of work. Our guides on this quest are Seshadhri, Deeparnab and Hadley (Duh!). It should be a fantastic tour of the trends and techniques in this area and it should be of interest to theory students and researchers both in India and Abroad. We have planned a series of six talks to whet your appetite. Alright then, on we go.`,
    ],
    talks:[
        {
            dateTime:`Apr 15, 5:30PM (Deeparnab)`,
            speakers:`Deeparnab`,
            description:`An in-depth Introduction and Overview, delving into the intricacies of the edge tester and exploring isoperimetric connections, with a specialized focus on the Hypercube.`,
        },
        {
            dateTime:`Apr 18, 5:30PM`,
            speakers:`Deeparnab`,
            description:`A comprehensive examination of o(d) testers for the Hypercube, unraveling the conceptual underpinnings of path testers and illuminating the profound connection between isoperimetry and o(d) testers.`
        },
        {
            dateTime:`Apr 22, 10:30AM`,
            speakers:`Hadley`,
            description:`An insightful overview of the Hypergrid domain, featuring a meticulous analysis of the line tester, coupled with discussions on augmented hypergrids and pioneering o(d) testers.`
        },
        {
            dateTime:`Apr 24, 10:30AM`,
            speakers:`Hadley`,
            description:`A meticulous exploration of domain reduction complexities, coupled with the derivation of isoperimetric results tailored for the Hypergrid.`
        },
        {
            dateTime:`Apr 26, 10:30AM`,
            speakers:`Sesh`,
            description:`An academic journey into the intricate facets of KMS with Seshadhri, unraveling the algorithmic intricacies of this scholarly endeavor.`
        },
        {
            dateTime:`Apr 30, 10:30AM`,
            speakers:`Sesh`,
            description:`The grand denouement, as Seshadhri presents the ultimate results for Hypergrids, concluding with open questions that beckon the next wave of academic exploration.`
        }
    ],
    callToAction:[
        `Participate in this scholarly odyssey, where rigorous academic inquiry converges with the thrill of unraveling the secrets of Boolean Monotonicity Testing!`
    ],
    speakers:[
            {
                name:`Seshadhri`,
                image:`/assets/sesh.jpg`,
                description:`<a href="https://users.soe.ucsc.edu/~sesh/">Webpage</a>`
            },
            {
                name:`Deeparnab`,
                image:`/assets/deeparnab.jpg`,
                description:`<a href="https://www.cs.dartmouth.edu/~deepc/">Webpage</a>`
            },
            {
                name:`Hadley`,
                image:`/assets/hadley.jpg`,
                description:`<a href="https://www.linkedin.com/in/hadley-black-77241b19a/">LinkedIn</a>`
            }
    ]
}
