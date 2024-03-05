
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
        }
    ],
    speakers:[
            {
                name:`Deeparnab`,
                image:`https://i.imgur.com/vxP6SFl.png`,
                description:`Lorem Ipsum`
            }
    ]
}
