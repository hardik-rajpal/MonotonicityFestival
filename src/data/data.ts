
//TODO: speakers: desc+webpage link.
export interface seminarSpec {
    speakers: string;
    dateTime: string;
    description: string;
    link?:string;
    meetingID?:string;
    password?:string;
    abstract?:string;
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
        `Over a decade later, Deeparnab Chakrabarty and C. Seshadhri presented algorithms with a time 
        complexity of o(n), reigniting scholarly interest in the problem. Subsequent contributions, often 
        co-authored by Hadley Black, Deeparnab Chakrabarty and C. Seshadhri, have further enriched the field. Presently, 
        we have gained a comprehensive understanding of optimal non-adaptive one-sided algorithms for the 
        problem over the hypercube, along with extensions to other partially-ordered domains, such as Hypergrids. 
        Noteworthy contributions by Black, Chakrabarty, and Seshadhri in this context, including recent publications 
        in FOCS 2023 and STOC 2023, underscore the ongoing scholarly discourse.`,
        `Come join us here at IIT Bombay as we unveil the ideas that went behind this entire
        line of work. Our guides on this quest are Hadley, Deeparnab, and Seshadhri (Duh!). It 
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
             link:`https://us06web.zoom.us/j/83937708321?pwd=E05NMrrlDQ6rQIRbeV9TT3hShszjGd.1`,
             meetingID:`839 3770 8321`,
             password:`393687`,
             abstract:`
             <p class="fs-large">
             Monotonicity Testing: an Introduction
             </p>
             We introduce the problem of monotonicity testing, and start with the original edge tester of the seminal GGLRS paper. 
            We explain the seeming barrier of O(d) for monotonicity testing of d-dimensional hypergrids. The analysis of edge
            tester implicitly yields the first directed isoperimetry theorem on the hypercube.
            <br/>
            We touch upon the connection between
            monotonicity testing, directed random walks, and directed isoperimetric theorems. The latter, which are inspired from classic results
            in discrete geometry, are one of the most interesting mathematical discoveries of monotonicity testing.
            <br/>
            As the talk proceeds, we give a brief history of the progress for monotonicity testing and mention some open problems.
            <br/><br/>
            [GGLRS] Oded Goldreich, Shafi Goldwasser, Eric Lehman, Dana Ron, and Alex Samordinsky. Testing monotonicity. Combinatorica, 2000`
        },
        {
            dateTime: `Apr 18, 5:30PM`,
            speakers: `Deeparnab`,
            description: `A comprehensive examination of o(d) testers for the Hypercube, 
            unraveling the conceptual underpinnings of path testers and illuminating the 
            profound connection between isoperimetry and o(d) testers.`,
            link:`https://us06web.zoom.us/j/82673497899?pwd=Nhct6jNRfNUuZaDR9MTFDyuYgfh2rS.1`,
            meetingID:`826 7349 7899`,
            password:`349885`,
            abstract:`
            <p class="fs-large">The Hypercube Case: Directed Isoperimetry & Random Walks</p>
            The second lecture goes into how the directed isoperimetric theorems imply good monotonicity testers.
            <br/>
            Our focus will be on the hypercube domain. We start with the first result that improves on the classic O(d) bound
            (CS), and show how they analyze directed random walks. We then move on to the breakthrough KMS paper
            that proves a directed Talagrand inequality, yielding an O(\sqrt{d}) query testing. The focus of this lecture
            is more on the random walk connection. The proofs of directed isoperimetric theorems are for later lectures.
            <br/><br/>
            [CS] Deeparnab Chakrabarty and C. Seshadhri. An o(n) monotonicity tester for Boolean functions over the hypercube. SIAM Journal on Computing, 2014
            <br/>
            [KMS] Subhash Khot, Dor Minzer, and Muli Safra. On monotonicity testing and Boolean isoperimetric type theorems. Foundations of Computer Science (FOCS), 2015
            `

        },
        {
            dateTime: `Apr 22, 10:30AM`,
            speakers: `Hadley`,
            description: `An insightful overview of the Hypergrid domain, featuring a meticulous 
            analysis of the line tester, coupled with discussions on augmented hypergrids and 
            pioneering o(d) testers.`,
            link:`https://us06web.zoom.us/j/88925275255?pwd=aGCeat2ruMPepn5hbzPRSX0fFwgH3j.1`,
            meetingID:`889 2527 5255`,
            password:`716615`,
            abstract:`
            <p class="fs-large">Hypergrids: The Line & The Augmented Hypergrid</p>
            The third talk will move to the hypergrid domain. We will talk about the simplest hypergrid, the line, and describe a simple tester for this.
            <br/>
            We will present the first <q>line tester</q> that yields O(d) tester for hypergrids (DGLRRS). 
            <br/>
            We then describe the concept of the augmented hypergrid and generalizations of certain directed isoperimetry theorems.
            <br/>
            This lecture will highlight numerous challenges in dealing with general hypergrids. This talk goes into the first result
            of the authors that makes progress towards o(d) testers for hypergrids (BCS18).
            <br/><br/>
            [DGLRRS] Yevgeny Dodis, Oded Goldreich, Eric Lehman, Sofya Raskhodnikova, Dana Ron, and Alex Samorodnitsky. Improved testing algorithms for monotonicity. International Workshop on Randomization and Computation (RANDOM), 1999
            <br/>
            [BCS18] Hadley Black, Deeparnab Chakrabarty, and C. Seshadhri. A o(d)polylog(n) monotonicity tester for Boolean functions over the hypergrid [n]^d. Symposium on Discrete Algorithms (SODA), 2018.
            `
        },
        {
            dateTime: `Apr 24, 10:30AM`,
            speakers: `Hadley`,
            description: `A meticulous exploration of domain reduction complexities, coupled with 
            the derivation of isoperimetric results tailored for the Hypergrid.`,
            link:`https://us06web.zoom.us/j/84805246049?pwd=kuXuCrwzf8hBoMorDg3t4k8SSMym0v.1`,
            meetingID:`848 0524 6049`,
            password:`587588`,
            abstract:`
            <p class="fs-large">Domain Reduction: Taming the Hypergrid</p>
            The fourth talk is self-contained presentation on how the granularity of a hypergrid can be assumed to be polynomial in the dimension.
            <br/>
            We prove a black-box sampling theorem that shows that the distance to monotonicity is preserved by sampling random hypergrids.
            <br/>
            This allows monotonicity results to be ported even to the continuous cube.
            `
        },
        {
            dateTime: `Apr 26, 10:30AM`,
            speakers: `Sesh`,
            description: `An academic journey into the intricate facets of KMS with Seshadhri, 
            unraveling the algorithmic intricacies of this scholarly endeavor.`,
            link:`https://us06web.zoom.us/j/85086024443?pwd=gNly1O3bi6JrQ5B2cirOUgGuq3VlwC.1`,
            meetingID:`850 8602 4443`,
            password:`950140`,
            abstract:`
            <p class="fs-large">Isoperimetry theorem on Hypergrids: a re-telling & generalization of the Khot-Minzer-Safra theorem</p>
            The fifth and sixth talks will drive towards the main result: near O(\sqrt{d}) monotonicity testers for hypergrids.
            <br/>
            We define a notion of influence and corresponding isoperimetry on the hypergrid, and then show how the KMS directed Talagrand theorem can be generalized to 
            thise setting. The main ideas will be highlighted by an alternate presentation of the KMS proof approach. This talk
            is based on BCS23-1, which essentially "figured out" the core reason why the KMS proof worked.
            We show how majorization theory plays a role for the hypergrid case. This new isoperimetric theorem leads
            to the optimal dependence on the dimension d, but gives a (highly non-optimal) linear dependence on the hypergrid granularity.
            <br/>
            This may be the most technical of the talks.
            <br/><br/>
            [BCS23-1] Hadley Black, Deeparnab Chakrabarty, and C. Seshadhri. Directed isoperimetric theorems for boolean functions on the hypergrid and an O(n\sqrt{d}) monotonicity tester.
            Symposium on Theory of Computing (STOC), 2023
            `
        },
        {
            dateTime: `Apr 30, 10:30AM`,
            speakers: `Sesh`,
            description: `The grand denouement, as Seshadhri presents the ultimate results for 
            Hypergrids, concluding with open questions that beckon the next wave of academic 
            exploration.`,
            link:`https://us06web.zoom.us/j/85365027303?pwd=hreOInC1dMwdFYnTOVa0nblSs9kDz6.1`,
            meetingID:`853 6502 7303`,
            password:`909525`,
            abstract:`
            <p class="fs-large">Boolean Monotonicity Testing on Hypergrids: a conclusion</p>
            In the final talk, we design testers that bypass the linear dependence on n, the granularity (to become logarithmic), while keeping the optimal &#8730;d dependence.
            <br/>
            While the isoperimetric theorems of [BCS23-1] is central to the analysis, it is used purely as a black box. The insights in BCS23-2, the main focus of this lecture, are on
            various symmetries in directed random walks to avoid the linear n dependence. The ideas are purely combinatorial and focus more on relating
            isoperimetric theorems to random walks. We will also end re-iterating open questions brought up in the first lecture.
            <br/><br/>
            [BCS23-2] Hadley Black, Deeparnab Chakrabarty, and C. Seshadhri. A d^{1/2+o(1)} Monotonicity Tester for Boolean Functions on d-Dimensional Hypergrids.
            Foundations of Computer Science (FOCS), 2023
            `
        }
    ],
    callToAction: [
        `Participate in this scholarly odyssey, where rigorous academic inquiry converges with 
        the thrill of unraveling the secrets of Boolean Monotonicity Testing!`
    ],
    speakers: [
        {
            name: `Hadley Black`,
            image: `assets/hadley.jpg`,
            description: `<a href="https://hablack.github.io/">Webpage</a>`
        },
        {
            name: `Deeparnab Chakrabarty`,
            image: `assets/deeparnab.jpg`,
            description: `<a href="https://www.cs.dartmouth.edu/~deepc/">Webpage</a>`
        },
        {
            name: `Seshadhri Comandur`,
            image: `assets/sesh.jpg`,
            description: `<a href="https://users.soe.ucsc.edu/~sesh/">Webpage</a>`
        }
    ]
}
